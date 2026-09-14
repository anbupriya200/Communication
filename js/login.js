/**
 * FluentPath - Login Controller (js/login.js)
 */

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const studentIdInput = document.getElementById("student-id");
  const mobileInput = document.getElementById("mobile-number");
  const rememberCheckbox = document.getElementById("remember-me");
  const loginBtn = document.getElementById("login-btn");
  const demoFillBtn = document.getElementById("demo-fill-btn");
  const idError = document.getElementById("id-error");
  const mobileError = document.getElementById("mobile-error");

  // Load remembered credentials if any
  const rememberedId = localStorage.getItem("fluentpath_remembered_id");
  if (rememberedId && studentIdInput) {
    studentIdInput.value = rememberedId;
    if (rememberCheckbox) rememberCheckbox.checked = true;
  }

  const mascotSpeech = document.getElementById("mascot-speech");
  const mascotPaw = document.getElementById("mascot-paw");

  const setMascotReaction = (text, emoji = "🐻") => {
    if (mascotSpeech) {
      mascotSpeech.innerHTML = `${text}<br><span style="font-size:0.85rem; font-weight:500; color:var(--text-muted);">FluentPath Learning Mascot</span>`;
    }
    if (mascotPaw) {
      mascotPaw.textContent = emoji;
    }
  };

  const mascotBox = document.getElementById("mascot-welcome-box");
  if (mascotBox) {
    mascotBox.style.cursor = "pointer";
    mascotBox.setAttribute("title", "Click to hear Barnaby speak!");
    mascotBox.addEventListener("click", () => {
      FluentPath.speakText("Hello! I'm Barnaby the Learning Bear. Welcome to FluentPath! Enter your Student ID to start your learning journey!");
    });
  }

  if (studentIdInput) {
    studentIdInput.addEventListener("focus", () => {
      setMascotReaction("I'm watching! Type your Student ID 🆔", "👀");
    });
    studentIdInput.addEventListener("input", (e) => {
      if (e.target.value.length > 3) {
        setMascotReaction("Awesome ID format! Looks great! ⭐", "👍");
      }
    });
  }

  if (mobileInput) {
    mobileInput.addEventListener("focus", () => {
      setMascotReaction("Now enter your 10-digit mobile number 📱", "🔢");
    });
    mobileInput.addEventListener("input", (e) => {
      if (e.target.value.length === 10) {
        setMascotReaction("Perfect 10 digits! Ready to login! 🚀", "🎉");
      }
    });
  }

  const studentNameInput = document.getElementById("student-name");
  const freshStartCheck = document.getElementById("fresh-start-check");

  // Quick Demo Fill
  if (demoFillBtn) {
    demoFillBtn.addEventListener("click", () => {
      if (studentNameInput) studentNameInput.value = "Aarav Sharma";
      studentIdInput.value = "FP-2026-88";
      mobileInput.value = "9876543210";
      if (idError) idError.classList.remove("visible");
      if (mobileError) mobileError.classList.remove("visible");
      setMascotReaction("Yay! Quick-fill loaded! Click Login to enter 🎓", "🌟");
      FluentPath.playClickBeep();
      FluentPath.showToast("Demo student credentials loaded!", "info");
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let isValid = true;
      const studentName = studentNameInput ? studentNameInput.value.trim() : "";
      const studentId = studentIdInput.value.trim();
      const mobile = mobileInput.value.trim();
      const forceFresh = freshStartCheck ? freshStartCheck.checked : false;

      // Student ID validation: at least 4 characters
      if (!studentId || studentId.length < 4) {
        if (idError) {
          idError.textContent = "Please enter a valid Student ID (minimum 4 characters).";
          idError.classList.add("visible");
        }
        isValid = false;
      } else {
        if (idError) idError.classList.remove("visible");
      }

      // Mobile validation: 10 digits
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(mobile)) {
        if (mobileError) {
          mobileError.textContent = "Please enter a valid 10-digit mobile number.";
          mobileError.classList.add("visible");
        }
        isValid = false;
      } else {
        if (mobileError) mobileError.classList.remove("visible");
      }

      if (!isValid) {
        loginBtn.classList.add("shake-animation");
        setTimeout(() => loginBtn.classList.remove("shake-animation"), 400);
        return;
      }

      // Remember me handling
      if (rememberCheckbox && rememberCheckbox.checked) {
        localStorage.setItem("fluentpath_remembered_id", studentId);
      } else {
        localStorage.removeItem("fluentpath_remembered_id");
      }

      // Show Loading state
      loginBtn.disabled = true;
      loginBtn.innerHTML = `<span class="spinner"></span> <span>Initializing Session...</span>`;

      setTimeout(() => {
        // Multi-User Accounts Database
        let usersDB = {};
        try {
          const storedDB = localStorage.getItem("fluentpath_users_db");
          if (storedDB) usersDB = JSON.parse(storedDB);
        } catch (err) {
          usersDB = {};
        }

        const existingRecord = usersDB[studentId];
        let activeUser = null;

        // Clear temporary session storage so new user gets a completely fresh webpage experience
        sessionStorage.clear();

        if (forceFresh || !existingRecord) {
          // CREATE BRAND NEW FRESH STUDENT PROFILE
          const displayName = studentName || `Student ${studentId.replace(/[^a-zA-Z0-9]/g, '')}`;
          activeUser = {
            id: studentId,
            name: displayName,
            mobile: mobile,
            streak: 1,
            xp: 0,
            gameCredits: 50, // Welcome gift coins for new student
            currentBand: 5.0,
            vocabLearned: 0,
            completedTests: 0,
            lastLogin: new Date().toISOString(),
            isNewUser: true
          };
          FluentPath.showToast(`🎉 Welcome New Student: ${displayName}! Fresh session started.`, "success");
        } else {
          // LOAD EXISTING STUDENT PROFILE
          activeUser = existingRecord;
          if (studentName) activeUser.name = studentName;
          activeUser.mobile = mobile;
          activeUser.lastLogin = new Date().toISOString();
          FluentPath.showToast(`Welcome back, ${activeUser.name}! Session loaded.`, "success");
        }

        // Save to User Database and Active User Session
        usersDB[studentId] = activeUser;
        localStorage.setItem("fluentpath_users_db", JSON.stringify(usersDB));
        FluentPath.saveUser(activeUser);
        FluentPath.playSuccessChime();

        // Navigate to Dashboard
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 700);
      }, 750);
    });
  }
});
