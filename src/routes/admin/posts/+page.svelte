<script>
  import { invalidate } from '$app/navigation';
  export let data; // получаем posts из load

  // Копируем posts в локальную переменную, чтобы можно было менять список
  let posts = [...data.posts];

  async function deletePost(id) {
    if (!confirm('Вы уверены, что хотите удалить этот пост?')) {
      return;
    }

    const res = await fetch('/admin/posts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });

    if (res.ok) {
      // Удаляем пост из локального массива — это сразу уберет строку из таблицы
      posts = posts.filter(post => post.id !== id);
    } else {
      const error = await res.json();
      alert('Ошибка при удалении: ' + (error.error || 'Неизвестная ошибка'));
    }
  }
</script>

  
  <div class="starter-page-page">
    <header id="header" class="header d-flex align-items-center sticky-top">
      <!-- ... твой хедер остаётся без изменений ... -->
    </header>
  
    <main class="container mt-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="mb-0">Posts</h1>
        <div class="d-flex flex-wrap gap-2 mb-4">
          <a href="/admin/posts/create" class="btn btn-primary">Добавить!</a>
          <form method="POST" action="/admin/logout">
            <button type="submit" class="btn btn-danger ms-2">Выйти</button>
          </form>
        </div>
        
      </div>
  
      <p class="text-muted">Здесь будет список постов.</p>
  
      <div class="table-responsive">
        <table class="table table-striped table-bordered align-middle">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Название</th>
              <th>Категория</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {#each posts as post}
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>
                  <button class="btn btn-info btn-sm me-1">Read</button>
                  <a href={`/admin/posts/${post.id}/edit`} class="btn btn-warning btn-sm me-1">Update</a>
                  <button
                    class="btn btn-danger btn-sm"
                    on:click={() => deletePost(post.id)}
                  >
                    Delete
                  </button>
                </td>
                
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      
    </main>
  </div>
  
  <style>
    .starter-page-page {
      background-color: #cccaca;
      min-height: 100vh;
      padding-bottom: 50px;
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
  
    /* .card-body {
      font-weight: bold;
      font-size: 1.1rem;
    } */
  </style>
  