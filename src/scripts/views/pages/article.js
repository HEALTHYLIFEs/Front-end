// article.js

const Article = {
  async render() {
    return `
    <div class="content">
      <div class="card">
        <img src="./images/article1.jpg" alt="Article 1" class="card-img" />
        <div class="card-body">
          <h3 class="card-title"><button class="card-button">Article 1</button></h3>
          <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien non ex auctor facilisis.</p>
        </div>
      </div>
      
      <div class="card">
        <img src="./images/article2.jpg" alt="Article 2" class="card-img" />
        <div class="card-body">
          <h3 class="card-title"><button class="card-button">Article 2</button></h3>
          <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien non ex auctor facilisis.</p>
        </div>
      </div>
      
      <div class="card">
        <img src="./images/article3.jpg" alt="Article 3" class="card-img" />
        <div class="card-body">
          <h3 class="card-title"><button class="card-button">Article 3</button></h3>
          <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sapien non ex auctor facilisis.</p>
        </div>
      </div>
    </div>`;
  },
};

export default Article;
