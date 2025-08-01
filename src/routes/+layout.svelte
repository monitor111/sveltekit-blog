
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    if (typeof AOS !== 'undefined') {
      AOS.init();
    }
  });
</script>

<svelte:head>
  <!-- Favicons -->
  <link rel="icon" href="/img/favicon.png" />
  <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect" />
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />

  <!-- Vendor CSS Files -->
  <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
  <link href="/vendor/aos/aos.css" rel="stylesheet" />
  <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

  <!-- Main CSS File -->
  <link href="/css/main.css" rel="stylesheet" />

  <title>Starter Page - ZenBlog Bootstrap Template</title>
  <meta name="description" content="" />
  <meta name="keywords" content="" />


  <!-- Vendor JS -->
  <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" defer></script>
  <script src="/vendor/php-email-form/validate.js" defer></script>
  <script src="/vendor/aos/aos.js" defer></script>
  <script src="/vendor/swiper/swiper-bundle.min.js" defer></script>

  <!-- Main JS -->
  <script src="/js/main.js" defer></script>

  

</svelte:head>

<slot />




