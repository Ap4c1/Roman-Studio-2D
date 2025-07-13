document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  fetch("scenes.json")
    .then(response => {
      if (!response.ok) throw new Error("Gagal memuat scenes.json");
      return response.json();
    })
    .then(data => {
      gallery.innerHTML = ""; // Kosongkan teks awal
      data.forEach(scene => {
        const item = document.createElement("div");
        item.className = "scene-item";
        item.innerHTML = `
          <a href="scene_render.html?scene=${scene.id}">
            <img src="${scene.thumbnail}" alt="Thumbnail ${scene.title}" />
            <h3>${scene.title}</h3>
            <p>${scene.description}</p>
          </a>
        `;
        gallery.appendChild(item);
      });
    })
    .catch(error => {
      gallery.innerHTML = `<p style="color: red">Gagal memuat galeri.</p>`;
      console.error(error);
    });
});
