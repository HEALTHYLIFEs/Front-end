const About = {
    async render() {
      return `
      <div class="section-title">
                          <h2>MEET OUR TEAM</h2>
                          <h3>C23-M4090</h3>
                      </div>

                      <div class="container">
                        <div class="card">
                            <img src="./images/team/hilma.png" alt="Hilma Nur Kholilah" class="card-image">
                                <div class="card-content">
                                    <h2>Hilma Nur Kholilah</h2>
                                    <p>Front-end Developer</p>
                                    </div>

                                    <!-- <div class="social-icons">
                                    <a href="https://github.com/HilmaNurKh"><img src="./icons/logo/git.png" alt="GitHub"></a>
                                    <a href="https://linkedin.com/in/hilma-nur-kholilah-927558275"><img src="./icons/logo/linkedin.png" alt="LinkedIn"></a>
                                    <a href="https://instagram.com/hilmaaaa.nkh/"><img src="./icons/logo/ig.png" alt="Instagram"></a>
                                    </div> --!>
                        </div>
                        
                        <div class="card">
                            <img src="./images/team/tuti.png" alt="Tuti Alawiyah" class="card-image">
                                <div class="card-content">
                                    <h2>Tuti Alawiyah</h2>
                                    <p>Front-end Developer</p>
                                    </div>

                                    <!-- <div class="social-icons">
                                    <a href="https://github.com/TutiAlwyh"><img src="./icons/logo/git.png" alt="GitHub"></a>
                                    <a href="https://linkedin.com/in/tutialwyh"><img src="./icons/logo/linkedin.png" alt="LinkedIn"></a>
                                    <a href="https://instagram.com/hilmaaaa.nkh/"><img src="./icons/logo/ig.png" alt="Instagram"></a>
                                    </div> --!>
                        </div>
            
                        <div class="card">
                            <img src="./images/team/wahyu.png" alt="Wahyu Andi Saputra" class="card-image">
                                <div class="card-content">
                                    <h2>Wahyu Andi Saputra</h2>
                                    <p>Front-end Developer</p>
                                    </div>

                                    <!-- <div class="social-icons">
                                    <a href="https://github.com/Wahyuandii"><img src="./icons/logo/git.png" alt="GitHub"></a>
                                    <a href="https://linkedin.com/in/wahyu-andi-saputra-598ab8278"><img src="./icons/logo/linkedin.png" alt="LinkedIn"></a>
                                    <a href="https://instagram.com/hilmaaaa.nkh/"><img src="./icons/logo/ig.png" alt="Instagram"></a>
                                    </div> --!>
                        </div>

                        <div class="card">
                            <img src="./images/team/yonanda.png" alt="Yonanda Putra Pamungkas" class="card-image">
                                <div class="card-content">
                                    <h2>Yonanda Putra Pamungkas</h2>
                                    <p>Back-end Developer</p>
                                    </div>

                                    <!-- <div class="social-icons">
                                    <a href="https://github.com/yonand21"><img src="./icons/logo/git.png" alt="GitHub"></a>
                                    <a href="https://linkedin.com/in/yonanda-putra-pamungkas"><img src="./icons/logo/linkedin.png" alt="LinkedIn"></a>
                                    <a href="https://instagram.com/hilmaaaa.nkh/"><img src="./icons/logo/ig.png" alt="Instagram"></a>
                                    </div> --!>
                        </div>

                        </div>
                    </div>
    
            `;
    },
  
    async afterRender() {
      return this.render;
    },
  };
  
  export default About;
  
