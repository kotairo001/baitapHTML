
//<!DOCTYPE html>  -> thể hiện đây là 1 file HTML5
//<html> -> phần tử gốc HTML
// <head> -> thông tin mô tả tài liệu hiện tại
// <title> -> tiêu đề
// <body> -> nội dung trang web (nd hiển thị trên màn hình)
// <h1> -> tiêu đề lớn
// <p> -> đoạn văn lớn
// <tên_thẻ>Nội dung của thẻ</tên_thẻ> -> thường đi theo 1 cặp
// VD: <p> (thẻ mở) &  </p> (thẻ đóng)
// thuộc tính được viết trong thẻ mở
// đi theo cặp thuộc_tính/giá_trị: tên_thuộc_tinh="giá_trị"
// VD: <p title = "I'm a tooltip">
//      This is a paragraph
//      </p>
// <a href = "liên kết trang web"> This is a link </a>
// <img src ="file ảnh" width+"" height=""> (đơn vị là pixel)
// viết thuộc tính bằng chữ in thường
// Viết '' hay "" đều được

// <h1> This is heading </h1> -> tiêu đề lớn nhất, số càng lớn tiêu đề càng nhỏ
// <hr> đường kẻ ngang
// khi dùng <p> </p> để tạo câu, nếu có xuống dòng thì vẫn hiển thị trên 1 dòng
// <br> : xuống dòng
//<p> This is<br>a paragraph<br>with line break.</p>
// khi hiển thị bài thơ thì dùng <pre> .... </pre>
// -> có thể xuống dòng khi dùng thẻ này, màn hình sẽ hiển thị như đã code

//<a href = "liên kết trang web"> This is a link </a>
// ->This is a link sẽ là phần được hiện thị trên trang
//-> có thể sử dụng 1 liên kết cục bố (địa chỉ web không đầy đủ)

// target -> cách mở 1 trang web trong thẻ href
// _blank: cửa sổ mới or tab mới
// _self: mở trong tab or cửa sổ hiện tại
// _parent: mở trong parent frame
//_top: mở trong cửa sổ chính
// framename: mở trong frame có tên là framename
//VD: <a href="link web" target="_blank" >Tên hiển thị</a>
//Dùng ảnh làm liên kiết: <a href ="link web"> <img scr ="link ảnh"> </a>
// id="bookmark_1" để tạo bookmark (di chuyển từ phần này đến phần khác trong web)
// href="#bookmark_1" để liên kết đến bookmark có id="bookmark_1"
// VD: <h2 id="C4">Chapter 4</h2> -> Link C4 là Chapter 4
//     <a href="#C4">Jump to Chapter 4 </a> -> Hiểu #C4 như 1 link web có phần hiện lên là Jump to Chapter 4
//  or <a href="link web#C4"> Jump to Chapter 4</a>

// Chèn hình ảnh
// Hình ảnh được lưu trữ trên web để liên kết với trang web và hiện thị trên trang web (nhúng)
// <img> -> giúp lưu trữ ảnh trên web
// <img scr="link ảnh" alt="link nếu ảnh không thể show" width ="" height="" >
// scr: link ảnh
// alt: văn bản thay thế của ảnh nếu ảnh k show
// add width and height để ảnh k nhấp nháy khi tải ảnh
// chèn link vào hình ảnh
// <a href="link" > <img scr="link ảnh" width ="" heigh=""></a>

// Danh sách trong html: loại không theo thứ tự và loại được xếp từ 1~
// <ul> </ul> -> thẻ gọi ra 1 danh sách không theo thứ tự
// <li> </li> -> định danh các phần thử trong thẻ <ul>
// VD: <ul> <li>Coffee</li> <li>Milk Tea</li> </ul> (mặc định: trước các phần thử sẽ là dấu chấm tròn)
// Dùng CSS list-style-style để định kiểu cho biểu tượng trước phần tử trong list
// dics: tròn đen, circle: tròn rỗng, square: hình vuông, none: không có
//VD: <ul style="list_style_style"> <li>Coffee</li> <li>Milk Tea</li> </ul>
// <ol> </ol>: Danh sách theo thứ tự
// VD: <ol> <li>Black</li> <li>White</li> </ol>
// Có thể thêm thuộc tính type vào <ol> để định kiểu cho số
// type="1" -> chạy từ số 1, type="A" -> chạy từ A lớn, type="a" -> chạy từ a nhỏ
// type="I" -> số la mã hòa, type ="i" -> la mã thường
// VD: <ol type="1"> <li>Black</li> <li>White</li> </ol>
// Danh sách miêu tả
// <dl> </dl>: gọi ra danh sách miêu tả
// <dt> </dt>: định ra tên gọi
// <dd> </dd>: miêu tả
// VD: <dl> <dt>Black</dt><dd>Kuro</dd></dl>
// Danh sách trong danh sách (mở <li> và thêm <ul> </ul> vào trong rồi mới đóng)
// VD: <ul> <li>Tea</li> <ul> <li>Black Tea <li>Red Tea</li></ul></li></ul>
// DÙng thuộc tính CSS float:left or display:inline để hiển thị (xem VD ở bài đọc 9)

//<sub> Thẻ để hiện chữ xuống dưới, <sup> thẻ để hiện chữ lên trên