const Home = {
  async render() {
    return `
    <div class="content">
      <div class="imgbox">
        <img src="./images/heros/heroimg1.png" alt="Heroimg" class="hero" />
      </div>
      <div class="textbox">
        <p>
          Di era modern saat ini, manusia dapat dengan mudahnya menyelesaikan
          tugas dengan bantuan teknologi yang menjadi penyebab lalainya manusia
          menerapkan hidup sehat. Saat ini, gaya hidup modern menyuapi kita
          dengan hal-hal yang praktis. Untuk itu, kami menyediakan laman ini
          untuk menunjang kebutuhan informasi mengenai pola hidup sehat.
        </p>
        <button class="selengkapnya">Selengkapnya...</button>
      </div>
      
    </div>
    <div class="herotag">
      <h2 class="heroTitle">HEALTHYLIFE</h2> <h2 class="heroTitle2">FOR</h2> <h2 class="heroTitle3">HAPPYLIFE</h2>
    </div>`;
  },
};

export default Home;
