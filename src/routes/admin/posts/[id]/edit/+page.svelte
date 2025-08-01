<script>
    import Editor from '@tinymce/tinymce-svelte';
    import { goto } from '$app/navigation';
    export let data;
  
    let title = data.post.title;
    let content = data.post.content;
    let image = null;
  
    const handleSubmit = async () => {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      if (image) {
        formData.append('image', image);
      }
  
      const res = await fetch(`/admin/posts/${data.post.id}/edit`, {
        method: 'POST',
        body: formData
      });
  
      if (res.ok) {
        alert('Пост обновлён!');
        await goto('/');
      } else {
        alert('Ошибка при обновлении поста');
      }
    };
  </script>
  
  <div class="container mt-5" style="max-width: 700px;">
    <h1 class="mb-4">Редактировать пост</h1>
  
    <form on:submit|preventDefault={handleSubmit}>
      <div class="mb-4">
        <label class="form-label" for="title">Заголовок</label>
        <input id="title" type="text" class="form-control" bind:value={title} required />
      </div>
  
      <div class="mb-4">
        <label class="form-label" for="content">Контент</label>
        <Editor
          apiKey="pq8f29zt4kulcf02kha8ow9882o94bi8wtouf096ekeefyio"
          bind:value={content}
          init={{
            height: 400,
            menubar: false,
            plugins: 'link image code lists table',
            toolbar:
              'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image | code'
          }}
        />
      </div>
  
      <div class="mb-4">
        <label class="form-label" for="image">Изменить изображение (необязательно)</label>
        <input id="image" type="file" class="form-control" on:change={(e) => image = e.target.files[0]} />
      </div>
  
      <button type="submit" class="btn btn-primary">Сохранить изменения</button>
    </form>
  </div>
  
  <style>
    form {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    }
  </style>
  