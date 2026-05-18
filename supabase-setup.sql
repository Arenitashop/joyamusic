-- ==============================================================
-- SQL SETUP SCRIPT FOR JOYAMUSIC SUPABASE BACKEND
-- ==============================================================
-- Ejecuta este código en el "SQL Editor" de tu panel de Supabase.
-- Creará una tabla 'profiles' pública y un trigger para sincronizar
-- automáticamente a los usuarios registrados.

-- 1. Crear tabla de perfiles en el esquema público
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  display_name text,
  subscription_tier text default 'Free Streamer',
  avatar_url text default 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar Seguridad a Nivel de Fila (RLS)
alter table public.profiles enable row level security;

-- Eliminar políticas previas si existen
drop policy if exists "Permitir lectura pública de perfiles" on public.profiles;
drop policy if exists "Los usuarios pueden actualizar su propio perfil" on public.profiles;

-- Crear políticas de seguridad
create policy "Permitir lectura pública de perfiles" on public.profiles
  for select using (true);

create policy "Los usuarios pueden actualizar su propio perfil" on public.profiles
  for update using (auth.uid() = id);

-- 2. Función disparadora para crear un perfil de forma automática al registrarse
create or replace function public.handle_new_user()
returns trigger as $$
declare
  username text;
begin
  -- Extraer la primera parte del correo para el nombre visible
  username := split_part(new.email, '@', 1);
  -- Poner primera letra en mayúscula
  username := initcap(username);

  insert into public.profiles (id, email, display_name, subscription_tier)
  values (
    new.id,
    new.email,
    username,
    'Free Streamer'
  );
  return new;
end;
$$ language plpgsql security definer;

-- 3. Crear el Trigger que se ejecuta después de insertar un usuario en auth.users
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
