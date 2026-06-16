// Hàm cập nhật ảnh lớn khi di chuột hoặc Focus phím Tab
function upDate(previewPic) {
    console.log("Interactive Event Triggered!");
    console.log("Source: " + previewPic.src);
    console.log("Alt Text: " + previewPic.alt);

    var displayDiv = document.getElementById("image");
    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm khôi phục giao diện ban đầu khi rời chuột hoặc Blur focus
function unDo() {
    var displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}

// YÊU CẦU DỰ ÁN CUỐI CÙNG: Hàm tự động chạy khi trang web tải xong (onload)
function initializeGallery() {
    console.log("Gallery initialized. Page loaded successfully!");
    
    // Lấy toàn bộ các hình ảnh có class là 'preview'
    var images = document.querySelectorAll(".preview");
    
    // Sử dụng vòng lặp FOR để tự động thêm thuộc tính tabindex cho từng ảnh một
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", i + 1);
        console.log("Automated tabindex added to image " + (i + 1));
    }
}

// Lắng nghe sự kiện onload của cửa sổ trình duyệt để kích hoạt hàm tự động vòng lặp trên
window.onload = initializeGallery;
