export function loadNavbar(){
  document.getElementById("navbar").innerHTML = `
  <nav style="background-color: brown; color:aliceblue; padding: 10px;">
      <a href="home.html" style="color: aliceblue; margin: right 15px;">Home</a>
      <a href="login.html" style="color: aliceblue; margin: right 15px;">Login</a>
      <a href="signup.html" style="color: aliceblue; margin: right 15px;">Sign up</a>
    </nav>
  `;
}

export function loadFooter(){
document.getElementById("footer").innerHTML = `
    <footer style="background-color: #222; color: white; padding: 20px; margin: 40px;text-align: center;">
      <div style="text-align: center;">
        <p>@2025 All rights reserved || Made by dev team</p>
        <p>location:mumbai,Maharashtra</p>
        <p>Email: <a href="abc@gmail.com">Email</a></p>
        <div style="margin-top: 10px;">
          follow us on:
          <a href="https://www.facebook.com" target="_blank" style="color: rgb(128, 80, 80); margin: 0 8px">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" style="color: rgb(129, 81, 81); margin: 0 8px">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" style="color: rgb(190, 120, 120); margin: 0 8px">Twitter</a>
        </div>
      </div>
    </footer>
  `;
}