// Đảm bảo toàn bộ HTML được tải xong trước khi chạy script
document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        // Sự kiện khi di chuột vào ảnh (Hover)
        item.addEventListener('mouseenter', function() {
            this.style.opacity = "0.8";
        });

        // Sự kiện khi di chuột ra ngoài ảnh
        item.addEventListener('mouseleave', function() {
            this.style.opacity = "1";
        });

        // Hỗ trợ truy cập bằng bàn phím (Bấm Tab và Focus)
        item.addEventListener('focus', function() {
            this.style.outline = "3px solid #FFD700";
        });

        item.addEventListener('blur', function() {
            this.style.outline = "none";
        });
    });
    console.log("Interactive Gallery Script Loaded Successfully.");
});
