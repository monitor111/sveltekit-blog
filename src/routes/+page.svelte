<script>
  export let data;
  const posts = data.posts || [];
</script>




<div class="starter-page-page">
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">ZenBlog</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Single Post</a></li>
          <li class="dropdown"><a href="#"><span>Categories</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="category.html">Category 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="category.html">Category 2</a></li>
              <li><a href="category.html">Category 3</a></li>
              <li><a href="category.html">Category 4</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/auth/register">Register</a></li>
          <li><a href="/auth/login">Auth</a></li>
          <li><a href="/admin">Admin</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div class="header-social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>

  <main class="main">

    <!-- Slider Section -->
    <section id="slider" class="slider section dark-background">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="swiper init-swiper">

          <script type="application/json" class="swiper-config">
            {
              "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": "auto",
              "centeredSlides": true,
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              },
              "navigation": {
                "nextEl": ".swiper-button-next",
                "prevEl": ".swiper-button-prev"
              }
            }
          </script>

          <div class="swiper-wrapper">

            <div class="swiper-slide" style="background-image: url('/img/post-slide-1.jpg');">
              <div class="content">
                <h2><a href="single-post.html">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
              </div>
            </div>

            <div class="swiper-slide" style="background-image: url('/img/post-slide-2.jpg');">
              <div class="content">
                <h2><a href="single-post.html">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
              </div>
            </div>

            <div class="swiper-slide" style="background-image: url('/img/post-slide-3.jpg');">
              <div class="content">
                <h2><a href="single-post.html">13 Amazing Poems from Shel Silverstein with Valuable Life Lessons</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
              </div>
            </div>

            <div class="swiper-slide" style="background-image: url('/img/post-slide-4.jpg');">
              <div class="content">
                <h2><a href="single-post.html">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
              </div>
            </div>
          </div>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>

          <div class="swiper-pagination"></div>
        </div>

      </div>

    </section><!-- /Slider Section -->

    <!-- Trending Category Section -->   
    <section id="trending-category" class="trending-category section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="container" data-aos="fade-up">
          <div class="row g-5">
            
            <!-- Первый большой пост - СТАТИЧНЫЙ -->
            <div class="col-lg-4">
              <div class="post-entry lg">
                <a href="blog-details.html">
                  <img src="/img/post-landscape-1.jpg" alt="" class="img-fluid" />
                </a>
                <div class="post-meta">
                  <span class="date">Culture</span> 
                  <span class="mx-1">•</span> 
                  <span>Jul 5th '22</span>
                </div>
                <h2>
                  <a href="blog-details.html">11 Work From Home Part-Time Jobs You Can Do Now</a>
                </h2>
                <p class="mb-4 d-block">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos
                </p>
                <div class="d-flex align-items-center author">
                  <div class="photo">
                    <!-- <img src="assets/img/person-1.jpg" alt="" class="img-fluid" /> -->
                  </div>
                  <div class="name">
                    <h3 class="m-0 p-0">Cameron Williamson</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Колонка с 3 постами - динамические -->
            <div class="col-lg-8">
              <div class="row g-5">
                <div class="col-lg-4 border-start custom-border">
                  {#each posts.slice(0,3) as post}
                    <div class="post-entry">
                      <a href={`/posts/${post.slug}`}>
                        <img src={post.image_url} alt={post.title} class="img-fluid" />
                      </a>
                      <div class="post-meta">
                        <span class="date">Категория</span> 
                        <span class="mx-1">•</span> 
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                      <h2>
                        <a href={`/posts/${post.slug}`}>{post.title}</a>
                      </h2>
                    </div>
                  {/each}
                </div>
                <div class="col-lg-4 border-start custom-border">
                  {#each posts.slice(3,6) as post}
                    <div class="post-entry">
                      <a href={`/posts/${post.slug}`}>
                        <img src={post.image_url} alt={post.title} class="img-fluid" />
                      </a>
                      <div class="post-meta">
                        <span class="date">Категория</span> 
                        <span class="mx-1">•</span> 
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                      <h2>
                        <a href={`/posts/${post.slug}`}>{post.title}</a>
                      </h2>
                    </div>
                  {/each}
                </div>
                
                <!-- Trending Section -->
                <div class="col-lg-4">
                  <div class="trending">
                    <h3>Trending</h3>
                    <ul class="trending-post">
                      <li>
                        <a href="blog-details.html">
                          <span class="number">1</span>
                          <h3>The Best Homemade Masks for Face (keep the Pimples Away)</h3>
                          <span class="author">Jane Cooper</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">
                          <span class="number">2</span>
                          <h3>17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</h3>
                          <span class="author">Wade Warren</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">
                          <span class="number">3</span>
                          <h3>13 Amazing Poems from Shel Silverstein with Valuable Life Lessons</h3>
                          <span class="author">Esther Howard</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">
                          <span class="number">4</span>
                          <h3>9 Half-up/half-down Hairstyles for Long and Medium Hair</h3>
                          <span class="author">Cameron Williamson</span>
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">
                          <span class="number">5</span>
                          <h3>Life Insurance And Pregnancy: A Working Mom’s Guide</h3>
                          <span class="author">Jenny Wilson</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> <!-- End Trending Section -->
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    <!-- /Trending Category Section -->



  </main>


  

  <footer id="footer" class="footer dark-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">ZenBlog</span>
          </a>
          <div class="footer-contact pt-3">
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p class="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
            <p><strong>Email:</strong> <span>info@example.com</span></p>
          </div>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Hic solutasetp</h4>
          <ul>
            <li><a href="#">Molestiae accusamus iure</a></li>
            <li><a href="#">Excepturi dignissimos</a></li>
            <li><a href="#">Suscipit distinctio</a></li>
            <li><a href="#">Dilecta</a></li>
            <li><a href="#">Sit quas consectetur</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Nobis illum</h4>
          <ul>
            <li><a href="#">Ipsam</a></li>
            <li><a href="#">Laudantium dolorum</a></li>
            <li><a href="#">Dinera</a></li>
            <li><a href="#">Trodelas</a></li>
            <li><a href="#">Flexo</a></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">ZenBlog</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>

  </footer>
</div>

<style>
  
/* .post-entry.lg > a > img {
  width: 332px;
  height: 211px;
  object-fit: cover;
}


.post-entry > a > img {
  width: 205px;
  height: 130px;
  object-fit: cover;
}




.post-entry.lg {
  background-color: var(--surface-color);
  color: var(--heading-color);
  font-family: var(--default-font);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
}

.post-entry.lg h2 {
  font-family: var(--heading-font);
  font-weight: 700;
  font-size: 1.8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: var(--heading-color);
}

.post-entry.lg p {
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
}

.post-entry.lg a {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
}

.post-entry.lg a:hover {
  text-decoration: underline;
}

.post-entry.lg .post-meta {
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 10px;
}

.post-entry.lg .author {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--heading-color);
}

.post-entry.lg .author .photo img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
} */

/* ваши стили выше */

/* .post-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
} */

</style>

