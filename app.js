// JoyaMusic Application Logic

// Song Data Source (High-Quality Public Streams for zero-CORS reliability)
const songs = [
  {
    id: 1,
    title: "Ethereal Echoes",
    artist: "Solstice Collective",
    album: "Solstice Echoes",
    duration: "3:45",
    durationSec: 225,
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHDiXKJRaQPM6ldnUHw5GmYyen1BYgvVF1C-EokgM7-y3eQ79xm0p05e-dUhJQ41HFvSQ97rAwEWQ_I0BDaBcnphCc2PRtDFbtcmCZ2LZIiFhp2dLK4PXwoxATPxhTUH02XpM9eU8zHA9g1zJVdN0Y-PY46-D3zXqPmlZTdih48fkSuQKrSvCNVuBIDqiZx2eqvvmnJoI0_ZYX9sdH9HUj_Vz9LowUbCyrAQ1CVZ3SKqdtPLrYFeDX5Xcu44xY27E23fIOGKEdsg",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    genre: "Lo-Fi",
    color: "#b8c3ff"
  },
  {
    id: 2,
    title: "Midnight Drift",
    artist: "Nova Kid",
    album: "Neon Kids",
    duration: "5:12",
    durationSec: 312,
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWMcsPf-Gb_zw3kyyjpA9rFHLEGNI6pONaaOy9qqWqqdw54SuL2pTrPxIRBxLH5LOqgiSkCAZ3cTvn2FTP5KUtUD84kX6sUAANzuPAuoMcA7YJmmo-tJ38S8WHD4hsnBBXonOMhRhMzmc9wi3lXrE-3qGusrdL0TkD_9cz2R9baycO9d-G6ruSgL6Ko5LSBFHl16adYDC4p3oOyGnvVt11NlO9fKGipVdzGgkpeGyTNE_4ZgaN5jxfg38U--gUFKKThHbcJoyjcA",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    genre: "Deep House",
    color: "#d3beeb"
  },
  {
    id: 3,
    title: "Static Waves",
    artist: "Quartz Theory",
    album: "Crystalline",
    duration: "4:01",
    durationSec: 241,
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzJ88ESZsPOktxvVLCEAg7H_-jwTfbjVVjEaHOUM0N_2_4B6uwdguA4LXgx5aUpG-5E8gZ6SzV84nJQ0B4YkuMv-hxOAoW-SHwHxyLrbIHSFdETxGV6AXPvS7fI7MS8TctZXrQWW6uQYy6yGj5SdOkrzN4U9EUaQW4Y5yBBkPpgGti14o9ytiLEVErov9Svk2vQt6AbipOK3SmtlqOdQD76oXxKhzDEBfD-Tp4EsqI4WTciWHQq5BO2MzTXZenioZ8_j0FOWmOfw",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    genre: "Techno",
    color: "#d2bbff"
  },
  {
    id: 4,
    title: "Neon Horizons",
    artist: "Midnight Pulse",
    album: "Cyberpunk Rhapsody",
    duration: "4:20",
    durationSec: 260,
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuA94YPeNhqAVb-bKRT1nmux5kMaqQYbJRKBvWyaSum6xXq-CTQXyEpthgrG408vds1mhJjnCEGke7NfvGm7xh8RiicWsy5Mmaf38-NSvEEqDbRrTDf5sWEjVuZIm__SbcDFEfNPfG_MJHIxzfd07PULLHHlfm_P8Qj_xYxAJR9ofNtE-5TS06yDGFTo7iY6WSsizODRF6uH4wATr-3cVe3JtW5PFQ9x77MbP5oruo45VGevCiT891TVsg8ZdZrsxyz1-ay2wtr1KA",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    genre: "Synthwave",
    color: "#2d5bff"
  },
  {
    id: 5,
    title: "Nocturnal Drift",
    artist: "Luna Ray",
    album: "Midnight Sessions",
    duration: "4:12",
    durationSec: 252,
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQzX9RmUdn0ypoMhDHyhkcMN4PuMeUdgZFJD6JkRyzZlt2xS1IVufNN32hyqC7iTdSL0dTHQfnqbsE4t4iTSlPmtsYyYrJJHO4ZRNniJjnWHKIrGD28pYPHC_MDmZM3IaEbfQ-bDANTvaNFPH6jCGFE2-b4XkCTuf73x4A4fDLiW8qxNVjHZRAxnsY0-x_FYEQGV72e3-QsjRC4Gb-sSSzH4K97KJRcEHnJGAxKIIhITQ6dcsW9fvUVeIu9HOo9A82ZRJnqaZXww",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    genre: "Deep House",
    color: "#00d2ff"
  },
  {
    id: 6,
    title: "Geometric Heart",
    artist: "The Grid",
    album: "Abstract Symmetry",
    duration: "2:58",
    durationSec: 178,
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAEjNmf6r3rRSsWqMboriHmW_cn4oQT3kADcdLCaokKX7Ox4DLEp9b9EHe8QIJTW-VoIN6QPNiLTz_77HpXsJ9jqvvjS4UZXohwNApkVkfgs_8oMpVcb2Seve0FVN6CxAIhQn_1X35mTd8KNFBmd2ROPvF0UNhkGNj5SInIoyzind0lrY5Tep8gwrgHRoIbQmgDVGMZBIS4EkChqP7QrVz9Yb0NUc4XrnJ_PF9pN_tTnmN9NiTnbBj-ISF3ms2Zr_1j1ZllP6vNQ",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    genre: "Synthwave",
    color: "#ff4500"
  }
];

// Supabase Cloud Backend Integration
let supabase = null;
function initSupabase() {
  if (window.SUPABASE_CONFIG && window.supabase) {
    const url = window.SUPABASE_CONFIG.url;
    const key = window.SUPABASE_CONFIG.anonKey;
    
    // Check that credentials are set and not placeholder templates
    if (url && key && 
        url !== "TU_SUPABASE_URL_AQUI" && 
        key !== "TU_SUPABASE_ANON_KEY_AQUI" && 
        url.trim() !== "" && 
        key.trim() !== "") {
      try {
        supabase = window.supabase.createClient(url, key);
        console.log("Supabase Client successfully initialized via supabase-config.js!");
        return true;
      } catch (err) {
        console.error("Failed to initialize Supabase client:", err);
      }
    }
  }
  supabase = null;
  console.log("Bypassing Supabase connection: Operating in Sandbox Offline fallback mode.");
  return false;
}
initSupabase();

// App Core State
let state = {
  currentSong: songs[0],
  isPlaying: false,
  likedSongs: [2, 5], // Midnight Drift and Nocturnal Drift pre-liked to match visual designs
  activeScreen: 'auth', // 'auth', 'home', 'playlists', 'profile'
  theme: 'purple', // 'purple', 'midnight', 'ember', 'deepsea'
  isShuffle: false,
  isRepeat: false,
  volume: 0.8,
  activeFilter: 'For You'
};

// Audio Elements
const audio = new Audio();
audio.volume = state.volume;
audio.preload = "auto";
audio.crossOrigin = "anonymous";

// Web Audio API Visualizer elements
let audioContext = null;
let analyser = null;
let source = null;
let visualizerAnimationId = null;

// Initialize Elements
document.addEventListener("DOMContentLoaded", () => {
  setupRouting();
  setupTheme();
  setupAuthSimulator();
  setupAudioEngine();
  setupSongInteractions();
  setupFilterLogic();
  setupUIUpdaters();
  setupExtendedInteractions();
  
  // Render lists initially
  renderSongLists();
  updateLikesDisplay();
});

// 1. DYNAMIC NAVIGATION AND SPA ROUTING
function setupRouting() {
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetScreen = btn.getAttribute("data-screen");
      if (targetScreen) {
        switchScreen(targetScreen);
      }
    });
  });

  // Profile avatar clicks on home feed open the profile screen
  const avatarHome = document.querySelector(".avatar-click");
  if (avatarHome) {
    avatarHome.addEventListener("click", () => switchScreen("profile"));
  }
}

function switchScreen(screenId) {
  if (state.activeScreen === screenId) return;
  
  // Hide active screen
  const currentActive = document.querySelector(".app-screen.active-screen");
  if (currentActive) {
    currentActive.classList.remove("active-screen");
  }
  
  // Show new screen
  const target = document.getElementById(`screen-${screenId}`);
  if (target) {
    target.classList.add("active-screen");
    state.activeScreen = screenId;
    
    // Auto-scroll screen to top
    target.scrollTop = 0;
  }
  
  // Update Bottom Nav active indicator dot
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach(btn => {
    const isTarget = btn.getAttribute("data-screen") === screenId;
    if (isTarget) {
      btn.className = "nav-btn flex flex-col items-center justify-center text-blue-500 after:content-[''] after:w-1 after:h-1 after:bg-blue-500 after:rounded-full after:mt-0.5 active:scale-90 transition-transform duration-200 cursor-pointer";
      btn.querySelector("span").style.fontVariationSettings = "'FILL' 1";
    } else {
      btn.className = "nav-btn flex flex-col items-center justify-center text-slate-400 hover:text-blue-400 transition-colors active:scale-90 transition-transform duration-200 cursor-pointer";
      btn.querySelector("span").style.fontVariationSettings = "'FILL' 0";
    }
  });

  // Highlight active bottom navbar across the page screens
  const globalNav = document.getElementById("global-nav");
  if (screenId === 'auth') {
    globalNav.classList.add("translate-y-[100px]");
    document.getElementById("mini-player").classList.add("translate-y-[100px]");
  } else {
    globalNav.classList.remove("translate-y-[100px]");
    if (state.isPlaying || audio.src) {
      document.getElementById("mini-player").classList.remove("translate-y-[100px]");
    }
  }
}

// 2. THEME ESSENCE MANAGER
function setupTheme() {
  const savedTheme = localStorage.getItem("joya-theme") || "purple";
  setTheme(savedTheme);
  
  const themeCards = document.querySelectorAll(".theme-card");
  themeCards.forEach(card => {
    const cardTheme = card.getAttribute("data-essence");
    
    // Listen for clicks
    card.addEventListener("click", () => {
      setTheme(cardTheme);
    });
  });
}

function setTheme(themeName) {
  state.theme = themeName;
  localStorage.setItem("joya-theme", themeName);
  
  // Apply theme attribute to body
  document.body.setAttribute("data-theme", themeName);
  
  // Update check indicators on Theme selection cards in Settings view
  const themeCards = document.querySelectorAll(".theme-card");
  themeCards.forEach(card => {
    const cardTheme = card.getAttribute("data-essence");
    const checkContainer = card.querySelector(".check-indicator");
    
    if (cardTheme === themeName) {
      card.className = "theme-card flex flex-col items-center gap-2 transform scale-105 transition-all duration-300";
      card.querySelector("button").className = "w-full aspect-square rounded-xl bg-surface border-2 border-primary shadow-[0_0_15px_var(--glow-color)] flex items-center justify-center";
      
      if (checkContainer) {
        checkContainer.innerHTML = `<span class="material-symbols-outlined text-primary scale-110" style="font-variation-settings: 'FILL' 1;">check_circle</span>`;
      }
    } else {
      card.className = "theme-card flex flex-col items-center gap-2 hover:scale-102 transition-all duration-300";
      card.querySelector("button").className = `w-full aspect-square rounded-xl border border-white/10 hover:border-white/20 transition-all`;
      if (checkContainer) checkContainer.innerHTML = "";
    }
  });

  // Re-draw background accents if applicable or trigger visualizer color changes
  if (analyser && state.isPlaying) {
    // Waveform will automatically adjust its gradients based on the CSS custom variables
  }
}

// 3. AUTH SIMULATOR
// 3. REAL SUPABASE AUTH & SANDBOX BACKUP
function setupAuthSimulator() {
  const loginForm = document.getElementById("login-form");
  const loginSubmitBtn = document.getElementById("login-submit-btn");

  // Clear default mock credentials if Supabase is connected to avoid accidental clicks
  if (supabase && loginForm) {
    const emailInput = loginForm.querySelector("input[type='email']");
    const pwdInput = loginForm.querySelector("input[type='password']");
    if (emailInput && emailInput.value === "elena.vance@lumon.corp") emailInput.value = "";
    if (pwdInput && pwdInput.value === "••••••••") pwdInput.value = "";
  }

  const createAccountBtn = document.getElementById("create-account-btn");
  
  const welcomeText = document.getElementById("welcome-text");
  const welcomeSub = document.getElementById("welcome-sub");
  
  let isCreateAccountState = false;

  // Toggle Login / Create Account Mode in DOM
  createAccountBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isCreateAccountState = !isCreateAccountState;
    
    if (isCreateAccountState) {
      welcomeText.textContent = "Create Account";
      welcomeSub.textContent = "Join the high-fidelity sound immersion.";
      loginSubmitBtn.textContent = "Sign Up";
      createAccountBtn.textContent = "Back to Log In";
    } else {
      welcomeText.textContent = "STREAM";
      welcomeSub.textContent = "Your nocturnal portal to high-fidelity rhythmic immersion.";
      loginSubmitBtn.textContent = "Log In";
      createAccountBtn.textContent = "Create Account";
    }
  });

  // Toggle password visibility
  const togglePasswordBtn = loginForm.querySelector("button[type='button']");
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener("click", () => {
      const pwdInput = loginForm.querySelector("input[type='password']");
      const icon = togglePasswordBtn.querySelector("span");
      if (pwdInput && pwdInput.type === "password") {
        pwdInput.type = "text";
        if (icon) icon.textContent = "visibility_off";
      } else if (pwdInput) {
        pwdInput.type = "password";
        if (icon) icon.textContent = "visibility";
      }
    });
  }

  // Authentication Submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    
    // Add dynamic spinner state
    const originalText = loginSubmitBtn.textContent;
    loginSubmitBtn.disabled = true;
    loginSubmitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Connecting Auth...
    `;
    
    if (supabase) {
      if (isCreateAccountState) {
        // Sign Up with Supabase
        supabase.auth.signUp({ email, password }).then(({ data, error }) => {
          loginSubmitBtn.disabled = false;
          loginSubmitBtn.textContent = originalText;
          if (error) {
            showToast(`Sign Up Error: ${error.message}`);
          } else {
            showToast("🎉 Sign Up successful! Check your email.");
            if (data.user && data.user.identities && data.user.identities.length === 0) {
              showToast("Email already exists. Try logging in.");
            } else {
              alert("📬 Verification email sent! Please check your inbox and verify your email before logging in.");
              // Trigger click to toggle back to login state
              createAccountBtn.click();
            }
          }
        }).catch(err => {
          loginSubmitBtn.disabled = false;
          loginSubmitBtn.textContent = originalText;
          showToast(`Network Error: ${err.message || err}`);
        });
      } else {
        // Log In with Supabase
        supabase.auth.signInWithPassword({ email, password }).then(({ data, error }) => {
          loginSubmitBtn.disabled = false;
          loginSubmitBtn.textContent = originalText;
          if (error) {
            showToast(`Login Error: ${error.message}`);
          } else {
            const user = data.user;
            if (user) {
              showToast("🎉 Login successful! Loading session...");
              
              const username = user.email.split("@")[0];
              const formattedName = username.charAt(0).toUpperCase() + username.slice(1);
              
              const profileName = document.getElementById("profile-display-name");
              const profileEmail = document.getElementById("profile-display-email");
              if (profileName) profileName.textContent = formattedName;
              if (profileEmail) profileEmail.textContent = user.email;

              const personalNameInput = document.getElementById("edit-display-name");
              const personalEmailInput = document.getElementById("edit-display-email");
              if (personalNameInput) personalNameInput.value = formattedName;
              if (personalEmailInput) personalEmailInput.value = user.email;

              state.user = user;
              setTimeout(() => switchScreen("home"), 500);
            }
          }
        }).catch(err => {
          loginSubmitBtn.disabled = false;
          loginSubmitBtn.textContent = originalText;
          showToast(`Connection Blocked: ${err.message || "Are you using an HTML Previewer?"}`);
        });
      }
    } else {
      // Sandbox mode mock login
      setTimeout(() => {
        loginSubmitBtn.disabled = false;
        loginSubmitBtn.textContent = originalText;
        
        const username = email.split("@")[0];
        const formattedName = username.charAt(0).toUpperCase() + username.slice(1);
        
        const profileName = document.getElementById("profile-display-name");
        const profileEmail = document.getElementById("profile-display-email");
        if (profileName) profileName.textContent = formattedName;
        if (profileEmail) profileEmail.textContent = email;
        
        const personalNameInput = document.getElementById("edit-display-name");
        const personalEmailInput = document.getElementById("edit-display-email");
        if (personalNameInput) personalNameInput.value = formattedName;
        if (personalEmailInput) personalEmailInput.value = email;

        showToast("⚡ Sandbox Offline Mode: Session loaded.");
        switchScreen("home");
      }, 1200);
    }
  });

  // Log Out handler
  const logoutBtn = document.getElementById("btn-logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      pauseMusic();
      if (supabase) {
        supabase.auth.signOut().then(() => {
          state.user = null;
          showToast("Logged out successfully.");
          switchScreen("auth");
        });
      } else {
        switchScreen("auth");
      }
    });
  }


  // Auto-login active Supabase session on application startup
  if (supabase) {
    supabase.auth.getSession().then(({ data, error }) => {
      if (data && data.session && data.session.user) {
        const user = data.session.user;
        const username = user.email.split("@")[0];
        const formattedName = username.charAt(0).toUpperCase() + username.slice(1);
        
        const profileName = document.getElementById("profile-display-name");
        const profileEmail = document.getElementById("profile-display-email");
        if (profileName) profileName.textContent = formattedName;
        if (profileEmail) profileEmail.textContent = user.email;

        const personalNameInput = document.getElementById("edit-display-name");
        const personalEmailInput = document.getElementById("edit-display-email");
        if (personalNameInput) personalNameInput.value = formattedName;
        if (personalEmailInput) personalEmailInput.value = user.email;

        state.user = user;
        showToast(`⚡ Session loaded: ${formattedName}`);
        setTimeout(() => switchScreen("home"), 500);
      }
    }).catch(err => console.log("Session recovery bypass:", err));
  }
}

// 4. AUDIO PLAYER ENGINE & WEB AUDIO CONTROLS
function setupAudioEngine() {
  const playPauseBtnNP = document.getElementById("np-play-pause-btn");
  const playPauseBtnMini = document.getElementById("mini-play-pause-btn");
  const prevBtn = document.getElementById("np-prev-btn");
  const nextBtn = document.getElementById("np-next-btn");
  
  const shuffleBtn = document.getElementById("np-shuffle-btn");
  const repeatBtn = document.getElementById("np-repeat-btn");
  
  const progressBar = document.getElementById("np-progress");
  const progressFill = document.getElementById("np-progress-fill");
  const currentTimeLabel = document.getElementById("np-current-time");
  const durationLabel = document.getElementById("np-duration");
  
  const volumeSlider = document.getElementById("np-volume");
  const volumeIcon = document.getElementById("np-volume-icon");

  // Play Pause Toggle Handlers
  const togglePlay = () => {
    if (state.isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  playPauseBtnNP.addEventListener("click", togglePlay);
  playPauseBtnMini.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent opening the full player
    togglePlay();
  });

  // Track controls
  nextBtn.addEventListener("click", playNextSong);
  prevBtn.addEventListener("click", playPrevSong);
  
  // Shuffle/Repeat toggles
  shuffleBtn.addEventListener("click", () => {
    state.isShuffle = !state.isShuffle;
    shuffleBtn.className = state.isShuffle 
      ? "text-primary hover:opacity-100 transition-opacity active:scale-90"
      : "text-outline hover:text-on-surface transition-all active:scale-90";
    
    // Add dot state
    shuffleBtn.querySelector("span").style.fontWeight = state.isShuffle ? "bold" : "normal";
  });

  repeatBtn.addEventListener("click", () => {
    state.isRepeat = !state.isRepeat;
    repeatBtn.className = state.isRepeat 
      ? "text-primary hover:opacity-100 transition-opacity active:scale-90"
      : "text-outline hover:text-on-surface transition-all active:scale-90";
    
    repeatBtn.querySelector("span").style.fontWeight = state.isRepeat ? "bold" : "normal";
  });

  // Progress Bar interactions (Seek)
  progressBar.addEventListener("input", (e) => {
    const pct = parseFloat(e.target.value);
    progressFill.style.width = `${pct}%`;
    
    if (audio.duration) {
      const seekTime = (pct / 100) * audio.duration;
      currentTimeLabel.textContent = formatTime(seekTime);
    }
  });

  progressBar.addEventListener("change", (e) => {
    const pct = parseFloat(e.target.value);
    if (audio.duration) {
      audio.currentTime = (pct / 100) * audio.duration;
    }
  });

  // Audio state hooks
  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    
    const pct = (audio.currentTime / audio.duration) * 100;
    progressBar.value = pct;
    progressFill.style.width = `${pct}%`;
    
    currentTimeLabel.textContent = formatTime(audio.currentTime);
    
    // Mini player thin progress bar update
    const miniProgress = document.getElementById("mini-progress-fill");
    if (miniProgress) {
      miniProgress.style.width = `${pct}%`;
    }
  });

  audio.addEventListener("loadedmetadata", () => {
    durationLabel.textContent = formatTime(audio.duration);
    progressBar.value = 0;
    progressFill.style.width = "0%";
  });

  audio.addEventListener("ended", () => {
    if (state.isRepeat) {
      audio.currentTime = 0;
      playMusic();
    } else {
      playNextSong();
    }
  });

  // Volume Bar controls
  volumeSlider.addEventListener("input", (e) => {
    const vol = parseFloat(e.target.value) / 100;
    audio.volume = vol;
    state.volume = vol;
    
    // Update volume progress fill width
    const volumeFill = document.getElementById("np-volume-fill");
    if (volumeFill) {
      volumeFill.style.width = `${e.target.value}%`;
    }
    
    // Update icons
    if (vol === 0) {
      volumeIcon.textContent = "volume_off";
    } else if (vol < 0.4) {
      volumeIcon.textContent = "volume_mute";
    } else if (vol < 0.75) {
      volumeIcon.textContent = "volume_down";
    } else {
      volumeIcon.textContent = "volume_up";
    }
  });

  // Click volume icon to mute/unmute
  volumeIcon.addEventListener("click", () => {
    const volumeFill = document.getElementById("np-volume-fill");
    if (audio.volume > 0) {
      localStorage.setItem("joya-prev-vol", audio.volume);
      audio.volume = 0;
      volumeSlider.value = 0;
      if (volumeFill) volumeFill.style.width = "0%";
      volumeIcon.textContent = "volume_off";
    } else {
      const prevVol = parseFloat(localStorage.getItem("joya-prev-vol") || "0.8");
      audio.volume = prevVol;
      volumeSlider.value = prevVol * 100;
      if (volumeFill) volumeFill.style.width = `${prevVol * 100}%`;
      volumeIcon.textContent = prevVol < 0.4 ? "volume_mute" : prevVol < 0.75 ? "volume_down" : "volume_up";
    }
  });
}

function loadTrack(song) {
  state.currentSong = song;
  audio.src = song.url;
  audio.load();
  
  // Update Now Playing UI info
  document.getElementById("np-cover-img").src = song.cover;
  document.getElementById("np-title").textContent = song.title;
  document.getElementById("np-artist").textContent = song.artist;
  document.getElementById("np-album-art-bg").style.backgroundImage = `url('${song.cover}')`;
  
  // Update Mini-Player UI info
  document.getElementById("mini-cover-img").src = song.cover;
  document.getElementById("mini-title").textContent = song.title;
  document.getElementById("mini-artist").textContent = song.artist;
  
  // Render playing equalizers or highlighted lists
  renderSongLists();
  updateLikesDisplay();
}

function playMusic() {
  // Initialize Audio Context for Visualizer upon first gesture
  initVisualizerContext();
  
  audio.play()
    .then(() => {
      state.isPlaying = true;
      
      // Update Play buttons across layouts
      document.getElementById("np-play-pause-btn").innerHTML = `<span class="material-symbols-outlined text-white text-[48px]" style="font-variation-settings: 'FILL' 1;">pause</span>`;
      document.getElementById("mini-play-pause-btn").innerHTML = `<span class="material-symbols-outlined text-white text-[28px]" style="font-variation-settings: 'FILL' 1;">pause</span>`;
      
      // Animate active album cover spinning
      document.getElementById("np-cover-container").classList.remove("spin-art-paused");
      document.getElementById("np-cover-container").classList.add("spin-art");
      
      // Show Mini Player and slide it into screen space
      const miniPlayer = document.getElementById("mini-player");
      miniPlayer.classList.remove("translate-y-[100px]");
      
      // Trigger canvas visualizer loop
      startVisualizerAnimation();
    })
    .catch(err => {
      console.warn("Audio playback gesture lock caught:", err);
    });
}

function pauseMusic() {
  audio.pause();
  state.isPlaying = false;
  
  document.getElementById("np-play-pause-btn").innerHTML = `<span class="material-symbols-outlined text-white text-[48px]" style="font-variation-settings: 'FILL' 1;">play_arrow</span>`;
  document.getElementById("mini-play-pause-btn").innerHTML = `<span class="material-symbols-outlined text-white text-[28px]" style="font-variation-settings: 'FILL' 1;">play_arrow</span>`;
  
  // Freeze active album cover spinning
  document.getElementById("np-cover-container").classList.add("spin-art-paused");
  
  cancelAnimationFrame(visualizerAnimationId);
}

function playNextSong() {
  let nextIdx = 0;
  if (state.isShuffle) {
    nextIdx = Math.floor(Math.random() * songs.length);
  } else {
    const currentIdx = songs.findIndex(s => s.id === state.currentSong.id);
    nextIdx = (currentIdx + 1) % songs.length;
  }
  loadTrack(songs[nextIdx]);
  playMusic();
}

function playPrevSong() {
  let prevIdx = 0;
  if (audio.currentTime > 5) {
    audio.currentTime = 0;
    return;
  }
  const currentIdx = songs.findIndex(s => s.id === state.currentSong.id);
  prevIdx = currentIdx - 1;
  if (prevIdx < 0) prevIdx = songs.length - 1;
  
  loadTrack(songs[prevIdx]);
  playMusic();
}

// 5. INTERACTIVE SONG CARD CLICKS AND LIKE TOGGLES
function setupSongInteractions() {
  // Mini player bar tap slides up Now Playing Full overlay
  const miniPlayer = document.getElementById("mini-player");
  miniPlayer.addEventListener("click", () => {
    openNowPlaying();
  });

  // Pull down button slides it back down
  const closeNPBtn = document.getElementById("np-close-btn");
  closeNPBtn.addEventListener("click", () => {
    closeNowPlaying();
  });

  // Double-tap album covers in Now Playing acts as like trigger
  const npCover = document.getElementById("np-cover-container");
  let lastTap = 0;
  npCover.addEventListener("click", () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      toggleLikeSong(state.currentSong.id);
      triggerHeartPopEffect();
    }
    lastTap = now;
  });

  // Wire up Global Now Playing heart click
  const npHeart = document.getElementById("np-heart-btn");
  npHeart.addEventListener("click", () => {
    toggleLikeSong(state.currentSong.id);
  });
}

function openNowPlaying() {
  const panel = document.getElementById("now-playing-panel");
  panel.classList.add("active-panel");
  
  // Hide smartphone status/home bars on full overlay scroll
  document.getElementById("mini-player").style.opacity = "0";
}

function closeNowPlaying() {
  const panel = document.getElementById("now-playing-panel");
  panel.classList.remove("active-panel");
  
  document.getElementById("mini-player").style.opacity = "1";
}

function toggleLikeSong(songId) {
  const idx = state.likedSongs.indexOf(songId);
  if (idx > -1) {
    state.likedSongs.splice(idx, 1);
  } else {
    state.likedSongs.push(songId);
  }
  
  updateLikesDisplay();
  renderSongLists();
  
  // Dynamic aggregate playlists page update
  renderPlaylistsData();
}

function updateLikesDisplay() {
  // Update heart icons on full player card
  const npHeart = document.getElementById("np-heart-btn");
  const isLiked = state.likedSongs.includes(state.currentSong.id);
  
  if (isLiked) {
    npHeart.className = "text-primary transition-all active:scale-75";
    npHeart.innerHTML = `<span class="material-symbols-outlined text-2xl icon-filled" style="color: var(--accent-color);">favorite</span>`;
  } else {
    npHeart.className = "text-outline hover:text-on-surface transition-all active:scale-75";
    npHeart.innerHTML = `<span class="material-symbols-outlined text-2xl">favorite</span>`;
  }
}

function triggerHeartPopEffect() {
  const floatHeart = document.createElement("div");
  floatHeart.className = "absolute pointer-events-none text-red-500 scale-150 animate-ping z-50";
  floatHeart.innerHTML = `<span class="material-symbols-outlined text-[64px]" style="font-variation-settings: 'FILL' 1;">favorite</span>`;
  
  const coverContainer = document.getElementById("np-cover-container");
  coverContainer.appendChild(floatHeart);
  
  setTimeout(() => {
    floatHeart.remove();
  }, 1000);
}

// 6. FILTER LOGIC (SEARCH & CATEGORY SLIDERS)
function setupFilterLogic() {
  // Search bar input filter
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      filterSongs(q, state.activeFilter);
    });
  }

  // Category chip triggers
  const chips = document.querySelectorAll(".category-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      // Remove active states from other chips
      chips.forEach(c => {
        c.className = "category-chip flex-none px-md py-xs rounded-full border border-outline-variant text-on-surface font-label-caps text-label-caps hover:bg-surface-variant transition-all cursor-pointer";
      });
      
      // Set active
      chip.className = "category-chip flex-none px-md py-xs rounded-full bg-tertiary-container text-on-tertiary-container font-label-caps text-label-caps active:scale-95 transition-all cursor-pointer";
      
      const genre = chip.textContent.trim();
      state.activeFilter = genre;
      
      const searchVal = document.getElementById("search-input") ? document.getElementById("search-input").value.toLowerCase().trim() : "";
      filterSongs(searchVal, genre);
    });
  });
}

function filterSongs(query, filterGenre) {
  const songsListContainer = document.getElementById("home-songs-list");
  if (!songsListContainer) return;
  
  songsListContainer.innerHTML = "";
  
  const filtered = songs.filter(song => {
    const matchesSearch = song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query);
    const matchesGenre = (filterGenre === 'For You') || (song.genre.toLowerCase() === filterGenre.toLowerCase());
    return matchesSearch && matchesGenre;
  });
  
  if (filtered.length === 0) {
    songsListContainer.innerHTML = `
      <div class="py-10 text-center text-outline text-body-sm">
        <span class="material-symbols-outlined text-[48px] opacity-40 mb-2">music_off</span>
        <p>No nocturnal sound tracks found</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(song => {
    const songCard = buildSongCardElement(song);
    songsListContainer.appendChild(songCard);
  });
}

// 7. RENDERING DYNAMIC SONG CARDS AND LISTS
function renderSongLists() {
  // Render recommended list on home screen
  const searchVal = document.getElementById("search-input") ? document.getElementById("search-input").value.toLowerCase().trim() : "";
  filterSongs(searchVal, state.activeFilter);
  
  // Render playlist screens
  renderPlaylistsData();
}

function buildSongCardElement(song) {
  const isPlayingSong = state.isPlaying && state.currentSong.id === song.id;
  const isSelectedSong = state.currentSong.id === song.id;
  const isLiked = state.likedSongs.includes(song.id);
  
  const div = document.createElement("div");
  div.className = `bg-surface-container rounded-xl p-3 flex items-center gap-md border border-white/5 hover:bg-surface-container-high transition-all group cursor-pointer ${isSelectedSong ? 'border-primary/20 bg-surface-container-high' : ''}`;
  
  div.innerHTML = `
    <div class="w-16 h-16 rounded-lg overflow-hidden flex-none relative">
      <img class="w-full h-full object-cover" alt="${song.title}" src="${song.cover}" />
      ${isSelectedSong ? `
        <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div class="playing-anim flex gap-[3px] items-end h-5 ${isPlayingSong ? '' : 'paused'}">
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
            <span class="eq-bar"></span>
          </div>
        </div>
      ` : ''}
    </div>
    <div class="flex-grow min-w-0">
      <h4 class="font-headline-md text-body-lg truncate ${isSelectedSong ? 'text-blue-400 font-bold' : 'text-on-surface'}">${song.title}</h4>
      <p class="font-body-sm text-body-sm text-outline truncate">${song.artist}</p>
      <span class="text-[10px] text-slate-500 font-label-caps uppercase tracking-tighter">${song.duration}</span>
    </div>
    <div class="flex items-center gap-xs text-outline opacity-70 group-hover:opacity-100 transition-opacity">
      <button class="p-2 hover:text-primary active:scale-75 transition-all like-song-btn" data-id="${song.id}">
        <span class="material-symbols-outlined ${isLiked ? 'icon-filled text-blue-500' : ''}">${isLiked ? 'favorite' : 'favorite'}</span>
      </button>
      <button class="p-2 hover:text-primary active:scale-75 transition-all play-song-direct">
        <span class="material-symbols-outlined">${isPlayingSong ? 'pause' : 'play_arrow'}</span>
      </button>
    </div>
  `;
  
  // Card click loads the track
  div.addEventListener("click", (e) => {
    if (e.target.closest("button")) return; // skip button clicks
    loadTrack(song);
    playMusic();
  });
  
  // Like button hook
  const likeBtn = div.querySelector(".like-song-btn");
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleLikeSong(song.id);
  });
  
  // Play direct button hook
  const playBtn = div.querySelector(".play-song-direct");
  playBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isSelectedSong) {
      if (state.isPlaying) pauseMusic();
      else playMusic();
    } else {
      loadTrack(song);
      playMusic();
    }
  });
  
  return div;
}

function renderPlaylistsData() {
  // Update Liked Songs aggregate counts
  const likedCountLabel = document.getElementById("liked-songs-count");
  if (likedCountLabel) {
    likedCountLabel.textContent = `${state.likedSongs.length} tracks`;
  }
  
  // Render recent tracks list on playlist tab
  const recentTracksContainer = document.getElementById("playlists-recent-list");
  if (!recentTracksContainer) return;
  
  recentTracksContainer.innerHTML = "";
  
  // List all songs (representing recent tracks)
  songs.forEach(song => {
    const isPlayingSong = state.isPlaying && state.currentSong.id === song.id;
    const isSelectedSong = state.currentSong.id === song.id;
    
    const row = document.createElement("div");
    row.className = `flex items-center gap-md p-sm glass-card rounded-xl active:bg-white/5 hover:bg-white/3 transition-all cursor-pointer border-l-4 ${isSelectedSong ? 'border-blue-500' : 'border-transparent'}`;
    
    row.innerHTML = `
      <div class="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 relative">
        <img class="w-full h-full object-cover" alt="${song.title}" src="${song.cover}" />
        ${isSelectedSong ? `
          <div class="absolute inset-0 bg-blue-500/40 flex items-center justify-center">
            <span class="material-symbols-outlined text-white text-xl ${isPlayingSong ? 'animate-pulse' : ''}" style="font-variation-settings: 'FILL' 1;">equalizer</span>
          </div>
        ` : ''}
      </div>
      <div class="flex-grow min-w-0">
        <p class="font-body-lg text-body-lg truncate ${isSelectedSong ? 'text-blue-400 font-bold' : 'text-on-surface'}">${song.title}</p>
        <p class="font-body-sm text-body-sm text-on-surface-variant truncate">${song.artist}</p>
      </div>
      <div class="text-right flex items-center gap-xs">
        <p class="font-body-sm text-body-sm text-on-surface-variant mr-1">${song.duration}</p>
        <button class="p-1 hover:text-primary active:scale-75 transition-all song-options-btn" data-id="${song.id}">
          <span class="material-symbols-outlined text-on-surface-variant text-lg">more_vert</span>
        </button>
      </div>
    `;
    
    row.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      if (isSelectedSong) {
        if (state.isPlaying) pauseMusic();
        else playMusic();
      } else {
        loadTrack(song);
        playMusic();
      }
    });

    const optBtn = row.querySelector(".song-options-btn");
    optBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openSongOptions(song);
    });
    
    recentTracksContainer.appendChild(row);
  });
}

// 8. CUSTOM LIKED SONGS DETAILED LIST POPUP
// When clicking "Liked Songs" card on playlist tab, let's open an interactive modal with only liked songs!
function setupUIUpdaters() {
  const likedSongsCard = document.getElementById("liked-songs-card");
  if (likedSongsCard) {
    likedSongsCard.addEventListener("click", () => {
      openLikedSongsDetailPanel();
    });
  }
  
  // Play Bento release button on home feed
  const bentoPlayBtn = document.getElementById("home-bento-play-btn");
  if (bentoPlayBtn) {
    bentoPlayBtn.addEventListener("click", () => {
      const bentoSong = songs.find(s => s.id === 4); // Neon Horizons
      if (bentoSong) {
        loadTrack(bentoSong);
        playMusic();
      }
    });
  }
}

function openLikedSongsDetailPanel() {
  // Let's replace the recommended tracks on Home temporarily or show a alert with a dynamic toast
  showToast(`Loading Liked Songs List...`);
  
  // Filter home screen by Liked Songs
  state.activeFilter = 'Liked';
  switchScreen('home');
  
  const songsListContainer = document.getElementById("home-songs-list");
  if (!songsListContainer) return;
  
  songsListContainer.innerHTML = "";
  
  const likedTracks = songs.filter(s => state.likedSongs.includes(s.id));
  
  if (likedTracks.length === 0) {
    songsListContainer.innerHTML = `
      <div class="py-10 text-center text-outline text-body-sm">
        <span class="material-symbols-outlined text-[48px] opacity-40 mb-2">favorite_border</span>
        <p>No liked tracks yet. Heart songs to add them!</p>
      </div>
    `;
    return;
  }
  
  likedTracks.forEach(song => {
    const card = buildSongCardElement(song);
    songsListContainer.appendChild(card);
  });
  
  // Highlight For You chip inactive
  const chips = document.querySelectorAll(".category-chip");
  chips.forEach(c => {
    c.className = "category-chip flex-none px-md py-xs rounded-full border border-outline-variant text-on-surface font-label-caps text-label-caps hover:bg-surface-variant transition-all cursor-pointer";
  });
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "absolute bottom-28 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white text-xs px-4 py-2.5 rounded-full border border-white/10 shadow-xl backdrop-blur-md z-[100] transition-all opacity-0 translate-y-2";
  toast.textContent = message;
  
  const wrapper = document.querySelector(".device-content");
  wrapper.appendChild(toast);
  
  setTimeout(() => {
    toast.className = "absolute bottom-28 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white text-xs px-4 py-2.5 rounded-full border border-white/10 shadow-xl backdrop-blur-md z-[100] transition-all opacity-100 translate-y-0";
  }, 50);
  
  setTimeout(() => {
    toast.className = "absolute bottom-28 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white text-xs px-4 py-2.5 rounded-full border border-white/10 shadow-xl backdrop-blur-md z-[100] transition-all opacity-0 translate-y-2";
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// 9. HIGH-FIDELITY AUDIO VISUALIZER ENGINE
function initVisualizerContext() {
  if (audioContext) return; // already initialized
  
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContextClass();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 128; // small FFT size for sleek visualizer bars
    
    // Connect audio element source
    source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
  } catch (err) {
    console.warn("Web Audio Context creation failed, falling back to procedural animations:", err);
  }
}

function startVisualizerAnimation() {
  const canvas = document.getElementById("np-visualizer-canvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  const bufferLength = analyser ? analyser.frequencyBinCount : 64;
  const dataArray = new Uint8Array(bufferLength);
  
  // Set canvas size correctly to avoid blurry lines
  const resizeCanvas = () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 120;
  };
  resizeCanvas();
  
  let particleAngle = 0;
  
  function draw() {
    visualizerAnimationId = requestAnimationFrame(draw);
    
    if (analyser) {
      analyser.getByteFrequencyData(dataArray);
      
      // CORS Silencing Check (if all values are zero, browser blocked extraction)
      let isAllZero = true;
      for (let i = 0; i < bufferLength; i++) {
        if (dataArray[i] > 0) {
          isAllZero = false;
          break;
        }
      }
      
      if (isAllZero) {
        // Procedural generator if CORS blocks real audio bytes
        for (let i = 0; i < bufferLength; i++) {
          dataArray[i] = 20 + Math.sin((i / 4) + particleAngle) * 35 + Math.random() * 8;
        }
        particleAngle += 0.08;
      }
    } else {
      // Procedural mock frequency data if AudioContext is not initialized
      for (let i = 0; i < bufferLength; i++) {
        dataArray[i] = 20 + Math.sin((i / 4) + particleAngle) * 30 + Math.random() * 8;
      }
      particleAngle += 0.08;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Select brand visualizer color matching the active theme accent
    const activeColor = getComputedStyle(document.body).getPropertyValue('--accent-color').trim() || "#2d5bff";
    
    // Draw visualizer frequency wave
    ctx.lineWidth = 3;
    ctx.strokeStyle = activeColor;
    
    // Add glowing filter to drawing
    ctx.shadowBlur = 15;
    ctx.shadowColor = activeColor;
    
    ctx.beginPath();
    
    const sliceWidth = canvas.width / bufferLength;
    let x = 0;
    
    for (let i = 0; i < bufferLength; i++) {
      // Normalize values (0 to 1)
      const val = dataArray[i] / 255;
      // Draw centered wavy frequency lines
      const y = (canvas.height / 2) + (val * (canvas.height / 2) * Math.sin(i / 2)) * 0.9;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      
      x += sliceWidth;
    }
    
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    
    // Draw secondary background overlay particles
    ctx.shadowBlur = 0; // disable shadows for high speed particle rendering
    ctx.fillStyle = activeColor;
    ctx.globalAlpha = 0.15;
    
    for (let i = 0; i < bufferLength; i += 4) {
      const val = dataArray[i] / 255;
      const radius = 2 + val * 6;
      const px = (i / bufferLength) * canvas.width;
      const py = (canvas.height / 2) - Math.cos(i) * val * 40;
      
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1.0; // reset transparency
  }
  
  draw();
}

// 10. TIME FORMATTER UTILITY
function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// 11. ADVANCED INTERACTIVITY AND SLIDING PANEL MANAGER
function openPanel(panelId) {
  const panel = document.getElementById(panelId);
  if (panel) {
    panel.classList.add("active-panel");
  }
}

function closePanel(panelId) {
  const panel = document.getElementById(panelId);
  if (panel) {
    panel.classList.remove("active-panel");
  }
}

function openSongOptions(song) {
  const optionsCover = document.getElementById("options-cover-art");
  const optionsTitle = document.getElementById("options-song-title");
  const optionsArtist = document.getElementById("options-song-artist");
  const optionsPanel = document.getElementById("panel-more-options");
  
  if (optionsCover) optionsCover.src = song.cover;
  if (optionsTitle) optionsTitle.textContent = song.title;
  if (optionsArtist) optionsArtist.textContent = song.artist;
  
  if (optionsPanel) {
    optionsPanel.setAttribute("data-active-song-id", song.id);
  }
  
  openPanel("panel-more-options");
}

function setupExtendedInteractions() {
  // --- PANELS OPEN & CLOSE WIRING ---
  
  // Personal Info Panel
  const btnSettingsPersonalInfo = document.getElementById("btn-settings-personal-info");
  const btnEditAvatar = document.getElementById("btn-edit-avatar");
  const closePersonalInfo = document.getElementById("close-personal-info");
  
  if (btnSettingsPersonalInfo) {
    btnSettingsPersonalInfo.addEventListener("click", () => openPanel("panel-personal-info"));
  }
  if (btnEditAvatar) {
    btnEditAvatar.addEventListener("click", () => openPanel("panel-personal-info"));
  }
  if (closePersonalInfo) {
    closePersonalInfo.addEventListener("click", () => closePanel("panel-personal-info"));
  }
  
  // Security & Privacy Panel
  const btnSettingsSecurityPrivacy = document.getElementById("btn-settings-security-privacy");
  const closeSecurityPrivacy = document.getElementById("close-security-privacy");
  if (btnSettingsSecurityPrivacy) {
    btnSettingsSecurityPrivacy.addEventListener("click", () => openPanel("panel-security-privacy"));
  }
  if (closeSecurityPrivacy) {
    closeSecurityPrivacy.addEventListener("click", () => closePanel("panel-security-privacy"));
  }
  
  // Notifications Settings Panel
  const btnSettingsNotifications = document.getElementById("btn-settings-notifications");
  const closeNotificationsSettings = document.getElementById("close-notifications-settings");
  if (btnSettingsNotifications) {
    btnSettingsNotifications.addEventListener("click", () => openPanel("panel-notifications-settings"));
  }
  if (closeNotificationsSettings) {
    closeNotificationsSettings.addEventListener("click", () => closePanel("panel-notifications-settings"));
  }
  
  // Connected Devices Panel
  const npDevicesBtn = document.getElementById("np-devices-btn");
  const closeDevices = document.getElementById("close-devices");
  if (npDevicesBtn) {
    npDevicesBtn.addEventListener("click", () => openPanel("panel-devices"));
  }
  if (closeDevices) {
    closeDevices.addEventListener("click", () => closePanel("panel-devices"));
  }
  
  // Center Notifications Panel
  const btnHomeNotifications = document.getElementById("btn-home-notifications");
  const closeCenterNotifications = document.getElementById("close-center-notifications");
  if (btnHomeNotifications) {
    btnHomeNotifications.addEventListener("click", () => openPanel("panel-center-notifications"));
  }
  if (closeCenterNotifications) {
    closeCenterNotifications.addEventListener("click", () => closePanel("panel-center-notifications"));
  }
  
  // Track Options Panel Close
  const closeMoreOptions = document.getElementById("close-more-options");
  if (closeMoreOptions) {
    closeMoreOptions.addEventListener("click", () => closePanel("panel-more-options"));
  }
  
  // --- SUB-FEATURES LOGIC ---
  
  // 1. Personal Information Form Submit
  const personalInfoForm = document.getElementById("personal-info-form");
  if (personalInfoForm) {
    personalInfoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const newNameInput = document.getElementById("edit-display-name");
      const newEmailInput = document.getElementById("edit-display-email");
      const newBioInput = document.getElementById("edit-display-bio");
      
      const homeProfileName = document.getElementById("profile-display-name");
      const homeProfileEmail = document.getElementById("profile-display-email");
      const editAvatarPreview = document.getElementById("edit-avatar-preview");
      
      if (newNameInput && homeProfileName) {
        homeProfileName.textContent = newNameInput.value;
      }
      if (newEmailInput && homeProfileEmail) {
        homeProfileEmail.textContent = newEmailInput.value;
      }
      
      // Update global avatar image everywhere if preview changed
      if (editAvatarPreview) {
        const selectedSrc = editAvatarPreview.src;
        const avatarHome = document.getElementById("avatar-img-home");
        const avatarProfile = document.getElementById("avatar-img-profile");
        if (avatarHome) avatarHome.src = selectedSrc;
        if (avatarProfile) avatarProfile.src = selectedSrc;
      }
      
      showToast("Changes saved successfully!");
      closePanel("panel-personal-info");
    });
  }
  
  // Avatar presets selections
  const presets = document.querySelectorAll(".avatar-preset");
  presets.forEach(preset => {
    preset.addEventListener("click", () => {
      // Highlight selection
      presets.forEach(p => {
        p.className = "w-10 h-10 rounded-full border border-white/10 cursor-pointer hover:border-primary transition-all avatar-preset active:scale-90";
      });
      preset.className = "w-10 h-10 rounded-full border-2 border-primary cursor-pointer hover:border-primary transition-all avatar-preset active:scale-90";
      
      // Update edit avatar preview
      const preview = document.getElementById("edit-avatar-preview");
      if (preview) {
        preview.src = preset.src;
      }
    });
  });
  
  // 2. Toggles & Privacy mode (Private Session, Data Saver, 2FA)
  const togglePrivate = document.getElementById("toggle-private-session");
  if (togglePrivate) {
    togglePrivate.addEventListener("change", () => {
      const isPrivate = togglePrivate.checked;
      
      // Rings around avatars
      const avatarClickHome = document.querySelector(".avatar-click");
      const profileAvatarContainer = document.getElementById("profile-avatar-container");
      
      if (isPrivate) {
        if (avatarClickHome) avatarClickHome.classList.add("avatar-private-ring");
        if (profileAvatarContainer) profileAvatarContainer.classList.add("avatar-private-ring");
        showToast("Private Session Enabled");
      } else {
        if (avatarClickHome) avatarClickHome.classList.remove("avatar-private-ring");
        if (profileAvatarContainer) profileAvatarContainer.classList.remove("avatar-private-ring");
        showToast("Private Session Disabled");
      }
    });
  }
  
  const toggleDataSaver = document.getElementById("toggle-data-saver");
  if (toggleDataSaver) {
    toggleDataSaver.addEventListener("change", () => {
      showToast(toggleDataSaver.checked ? "Data Saver Enabled" : "Data Saver Disabled");
    });
  }
  
  const toggle2FA = document.getElementById("toggle-2fa");
  if (toggle2FA) {
    toggle2FA.addEventListener("change", () => {
      showToast(toggle2FA.checked ? "2-Factor Authentication Enabled" : "2-Factor Authentication Disabled");
    });
  }
  
  // Change Password Form submit
  const changePasswordForm = document.getElementById("change-password-form");
  if (changePasswordForm) {
    changePasswordForm.addEventListener("submit", (e) => {
      e.preventDefault();
      changePasswordForm.reset();
      showToast("Password updated successfully!");
    });
  }
  
  // 3. Notifications Settings Switches
  const notificationSwitches = ["push-new-music", "push-playlist-update", "email-weekly", "email-platform"];
  notificationSwitches.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", () => {
        const name = el.closest(".glass-card").querySelector("p").textContent;
        showToast(`${name}: ${el.checked ? 'ON' : 'OFF'}`);
      });
    }
  });
  
  // 4. Center Notifications Bell - Clear Button
  const clearNotificationsBtn = document.getElementById("clear-notifications-btn");
  if (clearNotificationsBtn) {
    clearNotificationsBtn.addEventListener("click", () => {
      const container = document.getElementById("notifications-list-container");
      if (container) {
        container.innerHTML = `
          <div class="py-10 text-center text-outline text-body-sm">
            <span class="material-symbols-outlined text-[48px] opacity-40 mb-2">notifications_off</span>
            <p>No new notifications</p>
          </div>
        `;
        showToast("Notifications cleared");
      }
    });
  }
  
  // 5. Connecting Devices Options selection
  const deviceItems = document.querySelectorAll(".device-item");
  deviceItems.forEach(item => {
    item.addEventListener("click", () => {
      // Set all items inactive
      deviceItems.forEach(i => {
        i.className = "device-item glass-card rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 border border-transparent";
        i.querySelector("span:first-child").className = "material-symbols-outlined text-outline text-xl";
        i.querySelector("p:first-child").className = "font-bold text-sm";
        const sub = i.querySelector("p:last-child");
        if (sub && sub.textContent.includes("Active")) {
          sub.textContent = "Available Connection";
          sub.className = "text-xs text-on-surface-variant mt-[2px]";
        }
        i.querySelector("span:last-child").className = "material-symbols-outlined text-outline text-lg";
        i.querySelector("span:last-child").textContent = "radio_button_unchecked";
      });
      
      // Set clicked item active
      item.className = "device-item glass-card rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 border border-primary/40";
      item.querySelector("span:first-child").className = "material-symbols-outlined text-primary text-xl";
      item.querySelector("p:first-child").className = "font-bold text-sm text-primary";
      const clickedSub = item.querySelector("p:last-child");
      if (clickedSub) {
        clickedSub.textContent = "Active Connection";
        clickedSub.className = "text-[9px] text-primary/80 font-bold tracking-wider uppercase mt-[2px]";
      }
      item.querySelector("span:last-child").className = "material-symbols-outlined text-primary text-lg";
      item.querySelector("span:last-child").textContent = "check_circle";
      
      const deviceName = item.querySelector("p:first-child").textContent;
      showToast(`Connected to: ${deviceName}`);
      
      setTimeout(() => closePanel("panel-devices"), 300);
    });
  });
  
  // 6. Track Options List Actions (Add to Playlist, Share, Lyrics)
  const optionsActionBtns = document.querySelectorAll(".options-action-btn");
  optionsActionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      const activeSongId = parseInt(document.getElementById("panel-more-options").getAttribute("data-active-song-id") || "1");
      const targetSong = songs.find(s => s.id === activeSongId) || songs[0];
      
      if (action === 'add-playlist') {
        showToast(`Added '${targetSong.title}' to Playlist!`);
      } else if (action === 'share') {
        showToast(`Copied shareable link for '${targetSong.title}'!`);
      } else if (action === 'lyrics') {
        showToast(`Lyrics for '${targetSong.title}' not available offline.`);
      }
      
      setTimeout(() => closePanel("panel-more-options"), 300);
    });
  });
  
  // 7. Dynamic Playlist selections (Midnight Pulse, Smooth Jazz, Vibes)
  const playlistMidnight = document.getElementById("playlist-midnight-pulse");
  const playlistSmooth = document.getElementById("playlist-smooth-jazz");
  const playlistFestival = document.getElementById("playlist-festival-vibes");
  
  const triggerPlaylistFilter = (genre, title) => {
    state.activeFilter = genre;
    switchScreen('home');
    
    // Highlight category chip
    const chips = document.querySelectorAll(".category-chip");
    chips.forEach(c => {
      if (c.textContent.trim().toLowerCase() === genre.toLowerCase()) {
        c.className = "category-chip flex-none px-md py-xs rounded-full bg-tertiary-container text-on-tertiary-container font-label-caps text-label-caps active:scale-95 transition-all cursor-pointer";
      } else {
        c.className = "category-chip flex-none px-md py-xs rounded-full border border-outline-variant text-on-surface font-label-caps text-label-caps hover:bg-surface-variant transition-all cursor-pointer";
      }
    });
    
    filterSongs("", genre);
    showToast(`Curated Playlist: ${title}`);
  };
  
  if (playlistMidnight) {
    playlistMidnight.addEventListener("click", () => triggerPlaylistFilter("Synthwave", "Midnight Pulse"));
  }
  if (playlistSmooth) {
    playlistSmooth.addEventListener("click", () => triggerPlaylistFilter("Lo-Fi", "Smooth Jazz"));
  }
  if (playlistFestival) {
    playlistFestival.addEventListener("click", () => triggerPlaylistFilter("Deep House", "Festival Vibes"));
  }
  
  // SEE ALL & releases release buttons
  const btnRecSeeAll = document.getElementById("btn-recommended-see-all");
  const btnRecentSeeAll = document.getElementById("btn-recent-see-all");
  
  if (btnRecSeeAll) {
    btnRecSeeAll.addEventListener("click", () => {
      triggerPlaylistFilter("For You", "All Recommendations");
    });
  }
  if (btnRecentSeeAll) {
    btnRecentSeeAll.addEventListener("click", () => {
      triggerPlaylistFilter("For You", "Recently Played Tracks");
    });
  }
  
  // 8. Premium sponsored banner buttons
  const sponsorUpgrade = document.getElementById("sponsor-upgrade-btn");
  const sponsorDismiss = document.getElementById("sponsor-dismiss-btn");
  const sponsorBanner = document.getElementById("sponsor-banner");
  
  if (sponsorUpgrade) {
    sponsorUpgrade.addEventListener("click", () => {
      showToast("Accessing Immersive Premium Portal...");
      setTimeout(() => {
        alert("🎉 Congratulations! You have unlocked JoyaMusic Pulse Premium! Enjoy Unlimited offline music downloads and lossless audio playback.");
        if (sponsorBanner) sponsorBanner.classList.add("translate-y-[200px]");
      }, 500);
    });
  }
  
  if (sponsorDismiss) {
    sponsorDismiss.addEventListener('click', () => {
      const bannerEl = document.getElementById('sponsor-banner');
      if (bannerEl) {
        bannerEl.style.opacity = '0';
        bannerEl.style.pointerEvents = 'none';
        bannerEl.classList.add('translate-y-[200px]', 'opacity-0');
        setTimeout(() => {
          if (bannerEl && bannerEl.parentNode) {
            bannerEl.parentNode.removeChild(bannerEl);
          }
        }, 400);
      }
    });
  }
  
  // Premium bento header "Unlock Premium" button inside Home header
  const premiumBannerFeed = document.querySelector(".device-content section .bg-gradient-to-r.from-primary");
  if (premiumBannerFeed) {
    const bannerUpgradeBtn = premiumBannerFeed.querySelector("button");
    if (bannerUpgradeBtn) {
      bannerUpgradeBtn.addEventListener("click", () => {
        showToast("Premium immersion activated!");
        alert("🎉 JoyaMusic Pulse Premium activated successfully! Premium lossless audio is now enabled.");
      });
    }
  }
  
  // 9. Delete Account Modal Overlay
  const btnSettingsDeleteAccount = document.getElementById("btn-settings-delete-account");
  const cancelDeleteBtn = document.getElementById("cancel-delete-btn");
  const confirmDeleteBtn = document.getElementById("confirm-delete-btn");
  const modalDeleteAccount = document.getElementById("modal-delete-account");
  
  if (btnSettingsDeleteAccount) {
    btnSettingsDeleteAccount.addEventListener("click", () => {
      if (modalDeleteAccount) modalDeleteAccount.classList.add("active-modal");
    });
  }
  if (cancelDeleteBtn) {
    cancelDeleteBtn.addEventListener("click", () => {
      if (modalDeleteAccount) modalDeleteAccount.classList.remove("active-modal");
    });
  }
  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener("click", () => {
      if (modalDeleteAccount) modalDeleteAccount.classList.remove("active-modal");
      showToast("Profile Deleted. Resetting...");
      pauseMusic();
      
      // Reset profile defaults
      const homeProfileName = document.getElementById("profile-display-name");
      const homeProfileEmail = document.getElementById("profile-display-email");
      if (homeProfileName) homeProfileName.textContent = "Elena Vance";
      if (homeProfileEmail) homeProfileEmail.textContent = "elena.vance@lumon.corp";
      
      // Re-route to Auth
      setTimeout(() => switchScreen("auth"), 1000);
    });
  }

  // --- NEW SLIDING PANELS NAV ---
  // Language & Region
  const btnSettingsLang = document.getElementById("btn-settings-language");
  const closeLanguage = document.getElementById("close-language");
  if (btnSettingsLang) btnSettingsLang.addEventListener("click", () => openPanel("panel-language-region"));
  if (closeLanguage) closeLanguage.addEventListener("click", () => closePanel("panel-language-region"));

  // Equalizer
  const btnSettingsEq = document.getElementById("btn-settings-equalizer");
  const closeEqualizer = document.getElementById("close-equalizer");
  if (btnSettingsEq) btnSettingsEq.addEventListener("click", () => openPanel("panel-audio-equalizer"));
  if (closeEqualizer) closeEqualizer.addEventListener("click", () => closePanel("panel-audio-equalizer"));

  // Sleep Timer
  const btnSettingsSleep = document.getElementById("btn-settings-sleeptimer");
  const closeSleepTimer = document.getElementById("close-sleeptimer");
  if (btnSettingsSleep) btnSettingsSleep.addEventListener("click", () => openPanel("panel-sleep-timer"));
  if (closeSleepTimer) closeSleepTimer.addEventListener("click", () => closePanel("panel-sleep-timer"));

  // About
  const btnSettingsAbout = document.getElementById("btn-settings-about");
  const closeAbout = document.getElementById("close-about");
  if (btnSettingsAbout) btnSettingsAbout.addEventListener("click", () => openPanel("panel-about"));
  if (closeAbout) closeAbout.addEventListener("click", () => closePanel("panel-about"));

  // Lyrics Close
  const closeLyrics = document.getElementById("close-lyrics");
  if (closeLyrics) closeLyrics.addEventListener("click", () => closePanel("panel-lyrics-view"));

  // Share Close
  const closeShare = document.getElementById("close-share");
  if (closeShare) closeShare.addEventListener("click", () => closePanel("panel-share-social"));

  // Add to Playlist Close
  const closeAddPlaylist = document.getElementById("close-add-playlist");
  if (closeAddPlaylist) closeAddPlaylist.addEventListener("click", () => closePanel("panel-add-to-playlist"));

  // Premium Portal Close
  const closePremium = document.getElementById("close-premium");
  if (closePremium) closePremium.addEventListener("click", () => closePanel("panel-premium-portal"));

  // Search Results Close
  const closeSearchResults = document.getElementById("close-search-results");
  if (closeSearchResults) closeSearchResults.addEventListener("click", () => closePanel("panel-search-results"));

  // Shortcuts: Album art click opens lyrics view
  const npCoverContainer = document.getElementById("np-cover-container");
  if (npCoverContainer) {
    npCoverContainer.addEventListener("click", () => {
      if (state.currentSong) {
        openLyricsPanel(state.currentSong);
      }
    });
  }

  // Player More Options Click opens contextual menu
  const npMoreOptionsBtn = document.getElementById("np-more-options-btn");
  if (npMoreOptionsBtn) {
    npMoreOptionsBtn.addEventListener("click", () => {
      if (state.currentSong) {
        openSongOptions(state.currentSong);
      }
    });
  }

  // --- LANGUAGE PANEL SAVE ---
  const langItems = document.querySelectorAll(".lang-item");
  langItems.forEach(item => {
    item.addEventListener("click", () => {
      langItems.forEach(i => {
        i.classList.replace("border-primary", "border-transparent");
        i.querySelector("span:last-child").textContent = "radio_button_unchecked";
        i.querySelector("span:last-child").className = "material-symbols-outlined text-outline text-lg";
      });
      item.classList.replace("border-transparent", "border-primary");
      item.querySelector("span:last-child").textContent = "radio_button_checked";
      item.querySelector("span:last-child").className = "material-symbols-outlined text-primary text-lg";
    });
  });

  const regionItems = document.querySelectorAll(".region-item");
  regionItems.forEach(item => {
    item.addEventListener("click", () => {
      regionItems.forEach(i => {
        i.classList.replace("border-primary", "border-transparent");
        i.querySelector("span:last-child").textContent = "radio_button_unchecked";
        i.querySelector("span:last-child").className = "material-symbols-outlined text-outline text-lg";
      });
      item.classList.replace("border-transparent", "border-primary");
      item.querySelector("span:last-child").textContent = "radio_button_checked";
      item.querySelector("span:last-child").className = "material-symbols-outlined text-primary text-lg";
    });
  });

  const saveLanguageBtn = document.getElementById("save-language-btn");
  if (saveLanguageBtn) {
    saveLanguageBtn.addEventListener("click", () => {
      closePanel("panel-language-region");
      showToast("Language and region updated successfully!");
    });
  }

  // --- UNIVERSAL SEARCH LOGIC ---
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("click", () => {
      openPanel("panel-search-results");
      const searchInputField = document.getElementById("search-input-field");
      if (searchInputField) {
        searchInputField.value = searchInput.value;
        searchInputField.focus();
        triggerUniversalSearch(searchInputField.value);
      }
    });
  }

  const searchInputField = document.getElementById("search-input-field");
  const searchClearBtn = document.getElementById("search-clear-btn");
  
  if (searchInputField) {
    searchInputField.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (searchClearBtn) {
        if (q.length > 0) searchClearBtn.classList.remove("hidden");
        else searchClearBtn.classList.add("hidden");
      }
      triggerUniversalSearch(q);
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      if (searchInputField) {
        searchInputField.value = "";
        searchInputField.focus();
        searchClearBtn.classList.add("hidden");
        triggerUniversalSearch("");
      }
    });
  }

  const searchChips = document.querySelectorAll(".search-chip");
  searchChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.getAttribute("data-query");
      if (searchInputField) {
        searchInputField.value = q;
        if (searchClearBtn) searchClearBtn.classList.remove("hidden");
        triggerUniversalSearch(q.toLowerCase());
      }
    });
  });

  function triggerUniversalSearch(query) {
    const resultsContainer = document.getElementById("search-results-list");
    if (!resultsContainer) return;

    if (!query) {
      resultsContainer.innerHTML = `
        <div class="py-10 text-center text-outline text-body-sm">
          <span class="material-symbols-outlined text-[48px] opacity-40 mb-2">search</span>
          <p>Type to search the nocturnal soundscape...</p>
        </div>
      `;
      return;
    }

    const filtered = songs.filter(song => 
      song.title.toLowerCase().includes(query) || 
      song.artist.toLowerCase().includes(query) || 
      song.genre.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div class="py-10 text-center text-outline text-body-sm">
          <span class="material-symbols-outlined text-[48px] opacity-40 mb-2">sentiment_dissatisfied</span>
          <p>No results found for "${query}"</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = "";
    filtered.forEach(song => {
      const card = document.createElement("div");
      card.className = "glass-card rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-white/5 active:scale-[0.99] transition-all";
      card.innerHTML = `
        <div class="flex items-center gap-3 min-w-0 flex-1">
          <img class="w-10 h-10 rounded object-cover border border-white/5" src="${song.cover}" />
          <div class="min-w-0 flex-1">
            <p class="font-bold text-sm text-on-surface truncate">${song.title}</p>
            <p class="text-xs text-outline truncate mt-0.5">${song.artist} &bull; ${song.genre}</p>
          </div>
        </div>
        <button class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 active:scale-90 transition-all shrink-0">
          <span class="material-symbols-outlined text-base">play_arrow</span>
        </button>
      `;
      card.querySelector("button").addEventListener("click", (e) => {
        e.stopPropagation();
        playSongById(song.id);
        closePanel("panel-search-results");
      });
      card.addEventListener("click", () => {
        playSongById(song.id);
        closePanel("panel-search-results");
      });
      resultsContainer.appendChild(card);
    });
  }

  // --- AUDIO EQUALIZER LOGIC ---
  const eqSliders = document.querySelectorAll(".eq-slider-vertical");
  eqSliders.forEach(slider => {
    slider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      const band = e.target.getAttribute("data-band");
      const label = document.getElementById(`eq-val-${band}`);
      if (label) {
        const sign = val > 0 ? "+" : "";
        label.textContent = `${sign}${val.toFixed(1)} dB`;
      }
    });
  });

  const resetEqBtn = document.getElementById("reset-eq-btn");
  if (resetEqBtn) {
    resetEqBtn.addEventListener("click", () => {
      eqSliders.forEach(slider => {
        slider.value = 0;
        const band = slider.getAttribute("data-band");
        const label = document.getElementById(`eq-val-${band}`);
        if (label) label.textContent = "+0.0 dB";
      });
      showToast("Equalizer reset to Flat profile");
    });
  }

  const qualityItems = document.querySelectorAll(".quality-item");
  qualityItems.forEach(item => {
    item.addEventListener("click", () => {
      qualityItems.forEach(i => i.classList.replace("border-primary", "border-transparent"));
      item.classList.replace("border-transparent", "border-primary");
      const qText = item.querySelector("p").textContent;
      showToast(`Streaming Quality set to ${qText}`);
    });
  });

  // --- SLEEP TIMER INTEGRATION ---
  let sleepTimerId = null;
  let sleepSecondsLeft = 0;

  const sleepOptionCards = document.querySelectorAll(".sleep-option-card");
  const sleepTimerCountdown = document.getElementById("sleep-timer-countdown");

  sleepOptionCards.forEach(card => {
    card.addEventListener("click", () => {
      sleepOptionCards.forEach(c => {
        c.classList.replace("border-primary", "border-transparent");
        c.querySelector("span:last-child").textContent = "radio_button_unchecked";
        c.querySelector("span:last-child").className = "material-symbols-outlined text-outline text-lg";
      });
      card.classList.replace("border-transparent", "border-primary");
      card.querySelector("span:last-child").textContent = "radio_button_checked";
      card.querySelector("span:last-child").className = "material-symbols-outlined text-primary text-lg";

      const timeVal = card.getAttribute("data-time");
      if (sleepTimerId) {
        clearInterval(sleepTimerId);
        sleepTimerId = null;
      }

      if (timeVal === "off") {
        if (sleepTimerCountdown) sleepTimerCountdown.classList.add("hidden");
        showToast("Sleep Timer deactivated");
      } else {
        const minutes = parseInt(timeVal);
        sleepSecondsLeft = minutes * 60;
        if (sleepTimerCountdown) {
          sleepTimerCountdown.classList.remove("hidden");
          updateSleepCountdownDisplay();
        }
        showToast(`Sleep Timer set for ${minutes} minutes`);
        
        sleepTimerId = setInterval(() => {
          sleepSecondsLeft--;
          if (sleepSecondsLeft <= 0) {
            clearInterval(sleepTimerId);
            sleepTimerId = null;
            pauseMusic();
            if (sleepTimerCountdown) sleepTimerCountdown.classList.add("hidden");
            showToast("🌙 Sleep timer finished. Playback paused.");
            document.querySelector('.sleep-option-card[data-time="off"]').click();
          } else {
            updateSleepCountdownDisplay();
          }
        }, 1000);
      }
    });
  });

  function updateSleepCountdownDisplay() {
    if (!sleepTimerCountdown) return;
    const m = Math.floor(sleepSecondsLeft / 60);
    const s = Math.floor(sleepSecondsLeft % 60).toString().padStart(2, "0");
    sleepTimerCountdown.textContent = `${m}:${s} Remaining`;
  }

  // --- LYRICS PANEL LOADER ---
  function openLyricsPanel(song) {
    const lCover = document.getElementById("lyrics-song-cover");
    const lTitle = document.getElementById("lyrics-song-title");
    const lArtist = document.getElementById("lyrics-song-artist");
    const lContainer = document.getElementById("lyrics-scroll-container");

    if (lCover) lCover.src = song.cover;
    if (lTitle) lTitle.textContent = song.title;
    if (lArtist) lArtist.textContent = song.artist;

    if (lContainer) {
      lContainer.innerHTML = "";
      const lines = [
        { time: 0, text: `[Intro Melodic Wave]` },
        { time: 5, text: `(Rhythms shifting under neon haze)` },
        { time: 12, text: `Driving down the midnight strip alone...` },
        { time: 24, text: `Watching shadows dancing on their own...` },
        { time: 38, text: `Pulse of static glowing through the glass...` },
        { time: 52, text: `Nocturnal beats that make the silence last...` },
        { time: 68, text: `Into the blue, we fade away...` },
        { time: 80, text: `[Guitar Solo Interlude]` },
        { time: 95, text: `Leaving all the broken thoughts behind...` },
        { time: 110, text: `Only music flowing in my mind...` },
        { time: 125, text: `Close your eyes and let the wave take hold...` },
        { time: 140, text: `Nocturnal pulses warmer than the cold...` },
        { time: 160, text: `[Outro Resonance Fadeout]` }
      ];

      lines.forEach(line => {
        const p = document.createElement("p");
        p.className = "lyric-line hover:text-primary transition-colors cursor-pointer text-lg font-bold";
        p.textContent = line.text;
        p.setAttribute("data-time", line.time);
        p.addEventListener("click", () => {
          const audio = document.getElementById("music-audio");
          if (audio) {
            audio.currentTime = line.time;
            showToast(`Seeking track to ${formatTime(line.time)}`);
            document.querySelectorAll(".lyric-line").forEach(el => el.classList.remove("glow-text"));
            p.classList.add("glow-text");
          }
        });
        lContainer.appendChild(p);
      });

      const audio = document.getElementById("music-audio");
      if (audio) {
        audio.addEventListener("timeupdate", () => {
          const curTime = audio.currentTime;
          let activeIndex = 0;
          for (let i = 0; i < lines.length; i++) {
            if (curTime >= lines[i].time) {
              activeIndex = i;
            }
          }
          const pElements = lContainer.querySelectorAll(".lyric-line");
          pElements.forEach((el, idx) => {
            if (idx === activeIndex) {
              if (!el.classList.contains("glow-text")) {
                el.classList.add("glow-text");
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            } else {
              el.classList.remove("glow-text");
            }
          });
        });
      }
    }

    openPanel("panel-lyrics-view");
  }

  // --- SHARE PANEL LOADER ---
  function openSharePanel(song) {
    const sCover = document.getElementById("share-song-cover");
    const sTitle = document.getElementById("share-song-title");
    const sArtist = document.getElementById("share-song-artist");

    if (sCover) sCover.src = song.cover;
    if (sTitle) sTitle.textContent = song.title;
    if (sArtist) sArtist.textContent = song.artist;

    openPanel("panel-share-social");
  }

  const shareItems = document.querySelectorAll(".share-item");
  shareItems.forEach(item => {
    item.addEventListener("click", () => {
      const platform = item.getAttribute("data-platform");
      showToast(`Sharing track link to ${platform} Stories...`);
      setTimeout(() => {
        closePanel("panel-share-social");
        closePanel("panel-more-options");
        showToast("Track shared successfully!");
      }, 800);
    });
  });

  const shareCopyLinkBtn = document.getElementById("share-copy-link-btn");
  if (shareCopyLinkBtn) {
    shareCopyLinkBtn.addEventListener("click", () => {
      showToast("Link copied to clipboard!");
      setTimeout(() => {
        closePanel("panel-share-social");
        closePanel("panel-more-options");
      }, 600);
    });
  }

  // --- ADD TO PLAYLIST LOADER ---
  function openAddPlaylistPanel(song) {
    openPanel("panel-add-to-playlist");
  }

  const playlistAddItems = document.querySelectorAll(".playlist-add-item");
  playlistAddItems.forEach(item => {
    item.addEventListener("click", () => {
      const plName = item.querySelector("p").textContent;
      showToast(`Song added to ${plName}`);
      setTimeout(() => {
        closePanel("panel-add-to-playlist");
        closePanel("panel-more-options");
      }, 600);
    });
  });

  // Connect option menu actions
  const optionsActions = document.querySelectorAll(".options-action-btn");
  optionsActions.forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      if (state.currentSong) {
        if (action === "share") openSharePanel(state.currentSong);
        else if (action === "add") openAddPlaylistPanel(state.currentSong);
        else if (action === "lyrics") openLyricsPanel(state.currentSong);
      }
    });
  });

  // --- PREMIUM TIERS & PORTAL ---
  const upgradeTriggers = [
    document.getElementById("sponsor-upgrade-btn"),
  ];
  
  const bentoHeaderUpgrade = document.querySelector(".device-content section .bg-gradient-to-r.from-primary");
  if (bentoHeaderUpgrade) {
    const bentoBtn = bentoHeaderUpgrade.querySelector("button");
    if (bentoBtn) upgradeTriggers.push(bentoBtn);
  }

  upgradeTriggers.forEach(trigger => {
    if (trigger) {
      const newTrigger = trigger.cloneNode(true);
      trigger.parentNode.replaceChild(newTrigger, trigger);
      newTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        openPanel("panel-premium-portal");
      });
    }
  });

  const premiumTiers = document.querySelectorAll(".premium-tier-card");
  premiumTiers.forEach(card => {
    card.addEventListener("click", () => {
      premiumTiers.forEach(c => {
        c.classList.replace("border-primary", "border-transparent");
        const bBold = c.querySelector(".text-primary");
        if (bBold && c !== card) {
          bBold.className = "font-bold text-sm text-on-surface";
        }
      });
      card.classList.replace("border-transparent", "border-primary");
      const title = card.querySelector("p");
      if (title) title.className = "font-bold text-sm text-primary";
    });
  });

  const subscribeTierBtn = document.getElementById("subscribe-tier-btn");
  const premiumSuccessModal = document.getElementById("modal-premium-success");
  const premiumSuccessOk = document.getElementById("premium-success-ok");

  if (subscribeTierBtn) {
    subscribeTierBtn.addEventListener("click", () => {
      closePanel("panel-premium-portal");
      if (premiumSuccessModal) {
        premiumSuccessModal.classList.add("active-modal");
      }
    });
  }

  if (premiumSuccessOk) {
    premiumSuccessOk.addEventListener("click", () => {
      if (premiumSuccessModal) premiumSuccessModal.classList.remove("active-modal");
      
      const profileAccTier = document.getElementById("profile-acc-tier");
      if (profileAccTier) {
        profileAccTier.textContent = "Lossless Premium (Active)";
        profileAccTier.className = "text-[10px] font-bold text-primary bg-primary/15 px-2 py-0.5 rounded-full uppercase tracking-wider";
      }

      const sponsorBanner = document.getElementById("sponsor-banner");
      if (sponsorBanner) {
        sponsorBanner.style.opacity = "0";
        sponsorBanner.style.transform = "translateY(200px)";
        setTimeout(() => sponsorBanner.remove(), 400);
      }

      showToast("Premium Lossless Unlocked!");
    });
  }
}
