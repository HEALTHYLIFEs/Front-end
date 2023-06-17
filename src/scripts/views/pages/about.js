const About = {
    async render() {
      return `
      <div class="section-title">
                          <h2>MEET OUR TEAM</h2>
                          <h3>C23-M4090</h3>
                      </div>
        
              <div class="container">
  
                      <div class="card">
                          <div class="card-img">
                              <img src="./images/team/hilma.jpg" alt="Hilma Nur Kholilah" width="100%">
                          </div>
                          <div class="item-meta">
                              <h3 class="card-title">Hilma Nur Kholilah</h3>
                              <h6 class="item-position">STMIK Bandung</h6>
                          </div>
                      </div
                
                      <div class="card">
                          <div class="card-img">
                              <img src="./images/team/tuti.jpg" alt="Tuti Alawiyah" width="100%">
                          </div>
                          <div class="card-meta">
                              <h3 class="card-title">Tuti Alawiyah</h3>
                              <h6 class="item-position">STMIK Bandung</h6>
                          </div>
                      </div>
                
                      <div class="card">
                          <div class="card-img">
                              <img src="./images/team/wahyu.jpg" alt="" width="100%">
                          </div>
                          <div class="item-meta">
                              <h3 class="card-title">Wahyu Andi Saputra</h3>
                              <h6 class="item-position">Universitas Negeri Semarang</h6>
                          </div>
                      </div>
                      
                      <div class="card">
                          <div class="card-img">
                              <img src="./images/yonda.png" alt="" width="100%">
                          </div>
                          <div class="item-meta">
                              <h3 class="card-title">Yonanda Putra Pamungkas</h3>
                              <h6 class="item-position">Universitas Pendidikan Ghanesa</h6>
                          </div>
                      </div>
    
              </div>
          </div>
      </section>
      
    
            `;
    },
  
    async afterRender() {
      return this.render;
    },
  };
  
  export default About;
  
