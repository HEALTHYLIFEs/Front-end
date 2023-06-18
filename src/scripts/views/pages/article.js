const Article = {
  async render() {
    return `
    <div class="content">
      <h2 tabindex="0" class="content-heading">ARTIKEL HEALTYLIFE</h2>
      <div id="article-list" class="article-list">
        <article class="article-item">
          <h3 class="article-title">Judul Artikel 1</h3>
          <p class="article-content">
            Konten artikel 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Assumenda, exercitationem incidunt aut unde pariatur beatae distinctio quibusdam 
            ipsam commodi corrupti mollitia eos odit vero reprehenderit quas nobis earum hic?
          </p>
        </article>
        <article class="article-item">
          <h3 class="article-title">Judul Artikel 2</h3>
          <p class="article-content">
            Konten artikel 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Assumenda, exercitationem incidunt aut unde pariatur beatae distinctio quibusdam 
            ipsam commodi corrupti mollitia eos odit vero reprehenderit quas nobis earum hic?
          </p>
        </article>
        <article class="article-item">
          <h3 class="article-title">Judul Artikel 3</h3>
          <p class="article-content">
            Konten artikel 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Assumenda, exercitationem incidunt aut unde pariatur beatae distinctio quibusdam 
            ipsam commodi corrupti mollitia eos odit vero reprehenderit quas nobis earum hic?
          </p>
        </article>
        <!-- Tambahkan artikel lain di sini -->
      </div>
    </div>
    `;
  },
};

export default Article;
