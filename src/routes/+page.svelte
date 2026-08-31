<script>
  import Form from '$lib/components/Form.svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<main class="max-w-md mx-auto">
  <aside
    class="alert alert-warning mb-6 items-start text-left text-sm leading-relaxed shadow-sm"
    role="note"
    aria-label="使用免责声明"
  >
    <div>
      <h2 class="font-bold">免责声明</h2>
      <p>
        本工具仅限仅限YK所在微信正经琴群交流群内学习交流使用。下载的文件请在 24
        小时内删除，禁止对外传播、公开分享或用于任何商业用途。——YK
      </p>
    </div>
  </aside>
  <Form />
  <div class="mb-14"></div>
  <SocialLinks />
</main>

<!-- <footer class="flex flex-col items-center justify-center h-max">
  <FretwiseAd />
</footer> -->
