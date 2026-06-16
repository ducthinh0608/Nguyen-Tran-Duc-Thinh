function upDate(previewPic) {
    // Ghi nhận sự kiện vào bảng điều khiển console log để kiểm tra
    console.log("Mouseover/Focus event triggered!");
    console.log("Image Source: " + previewPic.src);
    console.log("Alt Text: " + previewPic.alt);

    var displayDiv = document.getElementById("image");
    
    // Thay đổi chữ hiển thị bên trong div thành thuộc tính alt của ảnh nhỏ
    displayDiv.innerHTML = previewPic.alt;
    
    // Thay đổi hình nền của div thành đường dẫn ảnh nhỏ đang tương tác
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    var displayDiv = document.getElementById("image");
    
    // Trả lại hình nền trống ban đầu
    displayDiv.style.backgroundImage = "url('')";
    
    // Trả lại dòng chữ hướng dẫn mặc định ban đầu
    displayDiv.innerHTML = "Hover over an image below to display here.";
}
