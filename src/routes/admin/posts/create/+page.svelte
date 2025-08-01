<script>
  import { invalidate } from '$app/navigation';
  import Editor from '@tinymce/tinymce-svelte';
  import { goto } from '$app/navigation';


  let title = '';
  let content = '';
  let image = null;

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('TITLE:', title);
console.log('CONTENT:', content);
console.log('IMAGE:', image);


    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    const res = await fetch('/admin/posts/create', {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      alert('Пост успешно добавлен!');
      title = '';
      content = '';
      image = null;
      await invalidate();
      await goto('/');
    } else {
      alert('Ошибка при добавлении поста.');
    }
  };
</script>

<div class="container mt-5" style="max-width: 700px;">
  <h1 class="mb-4">Добавить пост</h1>

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
      <label class="form-label" for="image">Изображение</label>
      <input id="image" type="file" class="form-control" on:change={(e) => image = e.target.files[0]} required />
    </div>

    <button type="submit" class="btn btn-success">Сохранить</button>
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
