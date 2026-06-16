function upDate(previewPic) {
    // 1. Ghi nhận sự kiện vào console log để kiểm tra
    console.log("Interactive Event Triggered!");
    console.log("Source: " + previewPic.src);
    console.log("Alt Text: " + previewPic.alt);

    // 2. Lấy thẻ div có id là 'image'
    var displayDiv = document.getElementById("image");
    
    // 3. Thay đổi chữ hiển thị thành thuộc tính alt của ảnh nhỏ
    displayDiv.innerHTML = previewPic.alt;
    
    // 4. Thay đổi hình nền thành đường dẫn của ảnh nhỏ
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // 1. Lấy thẻ div có id là 'image'
    var displayDiv = document.getElementById("image");
    
    // 2. Trả lại hình nền trống ban đầu
    displayDiv.style.backgroundImage = "url('')";
    
    // 3. Trả lại dòng chữ hướng dẫn mặc định ban đầu
    displayDiv.innerHTML = "Hover over an image below to display here.";
}

// YÊU CẦU DỰ ÁN CUỐI CÙNG: Hàm tự động chạy bằng vòng lặp FOR khi trang web tải xong
function initializeGallery() {
    console.log("Gallery initialized. Page loaded successfully!");
    
    // Lấy toàn bộ các hình ảnh có class là 'preview'
    var images = document.querySelectorAll(".preview");
    
    // Sử dụng vòng lặp FOR để tự động thêm thuộc tính tabindex cho từng ảnh một
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", i + 1);
        console.log("Automating tabindex for image " + (i + 1));
    }
}

// Gán hàm chạy tự động khi cửa sổ trình duyệt load xong
window.onload = initializeGallery;
