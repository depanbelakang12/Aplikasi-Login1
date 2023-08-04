/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-script  */
/**
*membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
*membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HMTLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
*membuat variabel inputpasswordElement untuk tampilan input password.
* @constant {HMTLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
*membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
*membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* Comment : Menambah aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  *membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
  *@ constant {string}
  */
  const email = inputEmailElement.value;

  /**
  *membuat variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan.
  *@ constant {string}
  */
  const password = inputPasswordElement.value;

  /* Comment : memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {

    /* Comment : Jika sesuai maka program akan berpindah ke home. */
    goToHome();
  } else {

        /* Comment : Namun jika tak sesuai maka akan menampilkan informasi bahwa input salah. */
    showPopUp();
  }
});
