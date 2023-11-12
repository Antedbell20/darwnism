const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
       
      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('user_id', data.user.id)

        console.log('You have logged in successfully!');
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
   const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, password, rank: null }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log
  
      if (response.ok) {
        localStorage.setItem('user_id', response.id)
        console.log(response)
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  