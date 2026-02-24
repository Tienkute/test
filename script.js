document.addEventListener("DOMContentLoaded", function () {
  // 1. XỬ LÝ CLICK VÀO TỪNG Ô TÀI LIỆU
  const cards = document.querySelectorAll(".doc-card");
  const modal = document.getElementById("documentModal");
  const modalBody = document.getElementById("modalBody");
  const closeBtn = document.querySelector(".close-btn");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      // Lấy thông tin từ thẻ được click
      const title = this.querySelector("h3").innerText;
      const subject = this.querySelector(".subject").innerText;

      // Đổ dữ liệu vào Modal
      modalBody.innerHTML = `
                <h2>${title}</h2>
                <p><strong>Môn học:</strong> ${subject}</p>
                <p>Đây là tài liệu chất lượng cao từ sinh viên Bách Khoa Đà Nẵng.</p>
                <hr style="margin: 15px 0; border: 0.5px solid #eee;">
                <button class="btn-primary" style="width: 100%;">Tải xuống ngay (.pdf)</button>
            `;

      // Hiện Modal
      modal.style.display = "block";
    });
  });

  // Đóng Modal khi bấm nút X hoặc bấm ra ngoài
  closeBtn.onclick = () => (modal.style.display = "none");
  window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
  };

  // 2. XỬ LÝ TẢI FILE LÊN (UPLOAD)
  const uploadBtn = document.querySelector(".btn-upload-new");
  const fileSelector = document.getElementById("fileSelector");

  // Khi bấm nút "Tải tài liệu lên", sẽ kích hoạt ô chọn file ẩn
  uploadBtn.addEventListener("click", function () {
    fileSelector.click();
  });

  // Khi người dùng đã chọn file xong
  fileSelector.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      const fileName = this.files[0].name;
      const fileSize = (this.files[0].size / 1024).toFixed(2); // Đổi sang KB

      alert(
        `Chúc mừng! Bạn đã chuẩn bị tải lên file: ${fileName} (${fileSize} KB). \nHệ thống đang xử lý dữ liệu...`,
      );

      // Lưu ý: Đây là xử lý giao diện (Frontend).
      // Để file thực sự lưu lên server, bạn cần học thêm về Node.js hoặc PHP.
    }
  });
});
