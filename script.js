function loadContent(section) {
  const content = document.getElementById("content");

  if (section === "home") {
    content.innerHTML = `
      <h1>Summary</h1>
      <p>

Motivated and detail-oriented BCA student with strong foundational knowledge in full-stack web development, including HTML, CSS, JavaScript, PHP, MySQL, and React. Experienced in building responsive and dynamic websites, and admin dashboards.  Passionate about learning and applying new technologies, with a focus on building real-world projects. Seeking a remote internship or entry-level opportunity to contribute technical skills and grow in a collaborative development environment.</p>
  <br> <br> <br> <br> <br> <br>
  <h1> Skills </h1>
  <ul>
  <li> Html and Css skills </li>
  <li> Basic JavaScript </li>
  <li> PHP </li>
  <li> React Integration </li>
  <li> sql database </li>
  </ul>
 <br> <br> <br> <br>
 <h1> Experience </h1>


    `;
  } else if (section === "about") {
    content.innerHTML = `
      <h1>About Me</h1>
      <p>Hello! My name is Aditya. I’m a web developer...</p>
       <br> <br> <br> <br> <br> <br>
     <h1> Education  </h1>
      <br> 
      <h3> 12th - Science </h3>
      <br>
      <p> Keshav kids Garden school <br> Pilibanga , Rajasthan </p>
      <p> Completed in 2023 </p>
      <br> <br>
      <h3> Bachelor of Computer application - Computer Science  </h3>
      <br>
      <p> Uttranchal University - Online Degree <p> 
      <p> Dehradun , Uttrakhand</p>
      <p> BCA, expected graduation in 2026 </p>

    `;
  } else if (section === "contact") {
    content.innerHTML = `
      <h1>Contact</h1>
    <p> Email✉️: <a href = "mailto:amitytr39@gmail.com">email now</a>  </p>
    <br> <br>
    <p> If you don't know how to email, you can call us or chat with us on WhatsApp. </p>
     <br> <br>
     <p> Mobile 📞 : <a href = "tel:+917976200935"> click Here for call and chat </a> </p>
    `;
  }
}
