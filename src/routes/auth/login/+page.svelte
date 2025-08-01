<script>
  export let form; // сюда попадут ошибки с сервера
</script>

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

<!-- <form method="post" action="" data-aos="fade-up" data-aos-delay="200">
  <div class="row gy-4">

    <div class="col-md-6">
      <input type="text" name="name" class="form-control" placeholder="Name" required />
    </div>

    <div class="col-md-12">
      <input type="password" name="password" class="form-control" placeholder="Password" required />
    </div>

    <div class="col-md-12">
      <input type="text" name="phone" class="form-control" placeholder="Phone" required />
    </div>

    <div class="col-md-12 text-center">
      <button type="submit" class="btn btn-primary">Auth</button>
    </div>

  </div>
</form> -->


<main class="main">

  <!-- Page Title -->
  <div class="page-title">
    <div class="container d-lg-flex justify-content-between align-items-center">
      <h1 class="mb-2 mb-lg-0">Login</h1>
    </div>
  </div><!-- End Page Title -->

  <!-- Contact Section -->
  <section id="contact" class="contact section">

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">

        <div class="col-lg-4">
          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <i class="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div><!-- End Info Item -->

          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <i class="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div><!-- End Info Item -->

          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <i class="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p>info@example.com</p>
            </div>
          </div><!-- End Info Item -->

        </div>

        <!-- FORM -->
<div class="col-lg-8">
  <form method="post" action="" data-aos="fade-up" data-aos-delay="200">
    <div class="row gy-4">

      <div class="col-md-6">
        <input type="text" name="name" class="form-control" placeholder="Name" required />
      </div>

      <div class="col-md-6">
        <input type="password" name="password" class="form-control" placeholder="Password" required />
      </div>

      <div class="col-md-6">
        <input type="text" name="phone" class="form-control" placeholder="Phone" required />
      </div>

      <div class="col-md-12 text-center">
        <div class="loading" style="display:none;"></div>
        <div class="error-message" style="display:none;"></div>
        <div class="sent-message" style="display:none;"></div>
        <button type="submit" class="btn btn-primary">Enter</button>
      </div>

    </div>
  </form>
</div>
<!-- End FORM -->


      </div>

    </div>

  </section><!-- /Contact Section -->

</main>

{#if form?.error}
  <p style="color:red; margin-top: 10px;">
    {form.error.message ?? JSON.stringify(form.error)}
  </p>
{/if}


