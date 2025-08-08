<script>
  import { posts } from '$lib/posts';

  let cards = [
  { title: 'Пользователи', color: 'primary', link: '#' },
  { title: 'Посты', color: 'success', link: '/admin/posts' },
  { title: 'Комментарии', color: 'warning', link: '#' },
  { title: 'Лайки', color: 'danger', link: '#' }
];

</script>

<div class="starter-page-page">
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container position-relative d-flex align-items-center justify-content-between">
      <a href="/" class="logo d-flex align-items-center me-auto me-xl-0">
        <h1 class="sitename">ZenBlog</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Single Post</a></li>
          <li class="dropdown"><a href="#"><span>Categories</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Category 1</a></li>
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

  <main class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="mb-0">Админпанель</h1>
      <div class="d-flex flex-wrap gap-2 mb-4">
        <button class="btn btn-primary">Добавить</button>
        <form method="POST" action="/admin/logout">
          <button type="submit" class="btn btn-danger ms-2">Выйти</button>
        </form>
      </div>
    </div>

    <div class="row mb-4">
      {#each cards as card}
        <div class="col-md-3 mb-3">
          <a href={card.link} class="text-decoration-none">
            <div class="card text-white bg-{card.color} h-100">
              <div class="card-body d-flex align-items-center justify-content-between">
                <div>{card.title}</div>
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
    

    <p class="text-muted">Здесь будет список пользователей, постов и прочее.</p>

    <div class="table-responsive">
      <table class="table table-striped table-bordered align-middle">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Ім'я</th>
            <th>Email</th>
            <th>Дата регистрации</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Иван Иванов</td>
            <td>ivan@example.com</td>
            <td>2025-07-01</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Анна Петрова</td>
            <td>anna@example.com</td>
            <td>2025-07-02</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</div>

<style>
  .starter-page-page {
  background-color: #cccaca;
  min-height: 100vh;
  padding-bottom: 50px; /* если нужно отступ внизу */
}


  .table thead th {
    background-color: #343a40;
    color: white;
  }

  h1 {
    color: #706c6c;
  }

  .table th {
    text-align: center;
  }

  .card-body {
    font-weight: bold;
    font-size: 1.1rem;
  }
</style>
