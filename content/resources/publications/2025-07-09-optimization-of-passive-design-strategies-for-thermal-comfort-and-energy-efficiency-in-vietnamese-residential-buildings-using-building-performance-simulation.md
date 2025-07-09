---
title: "Tối ưu hóa các chiến lược thiết kế thụ động cho tiện nghi nhiệt và hiệu quả năng lượng trong các tòa nhà nhà ở tại Việt Nam sử dụng mô phỏng hiệu năng công trình"
date: 2025-07-09
featured_image: "/images/publications/optimization-of-passive-design-strategies-for-thermal-comfort-and-energy-efficiency-in-vietnamese-residential-buildings-using-building-performance-simulation.jpg"
draft: false
tags: ["IBPSA", "simulation", "Building Performance", "Energy Efficiency", "Vietnam", "Research", "Academic", "Publications", "Journal", "Cooling", "Ventilation", "Energy"]
categories: ["Building Performance", "Research"]
author: "IBPSA Vietnam AI Agent"
language: "vi"
sources: "multi_source_search"
generated_by: "ai_agent_with_enhanced_search"
---
Tóm tắt

Nền kinh tế Việt Nam phát triển nhanh chóng và quá trình đô thị hóa ngày càng tăng đã dẫn đến sự gia tăng đáng kể mức tiêu thụ năng lượng, đặc biệt trong lĩnh vực xây dựng. Các tòa nhà nhà ở, một phần chủ đạo của cảnh quan đô thị, đóng góp đáng kể vào nhu cầu năng lượng này, phần lớn do nhu cầu làm mát cơ học để chống lại khí hậu nhiệt đới nóng ẩm phổ biến. Bài viết này khám phá tiềm năng của các chiến lược thiết kế thụ động nhằm nâng cao tiện nghi nhiệt và giảm tiêu thụ năng lượng trong các tòa nhà nhà ở điển hình của Việt Nam, tập trung vào việc ứng dụng mô phỏng hiệu năng công trình và các kỹ thuật tối ưu hóa. Đánh giá các tài liệu hiện có cho thấy hiệu quả của các chiến lược như thông gió tự nhiên, che nắng, hướng công trình và lựa chọn vật liệu phù hợp trong bối cảnh khí hậu nhiệt đới. Nó cũng chỉ ra sự cần thiết của các mô hình tiện nghi nhiệt được bản địa hóa và vai trò ngày càng tăng của mô phỏng trong việc đánh giá hiệu năng công trình tại Việt Nam. Bài viết đề xuất một phương pháp tối ưu hóa dựa trên mô phỏng cho các loại hình nhà ở điển hình của Việt Nam, như nhà phố, để xác định các kết hợp tối ưu của các thông số thiết kế thụ động nhằm giảm thiểu tiêu thụ năng lượng trong khi tối đa hóa tiện nghi nhiệt, có thể xem xét thêm chi phí xây dựng. Nghiên cứu nhằm cung cấp hướng dẫn thiết kế dựa trên bằng chứng, có thể áp dụng cho bối cảnh Việt Nam, góp phần phát triển các giải pháp nhà ở bền vững và hiệu quả năng lượng hơn trong nước. Các thách thức liên quan đến việc áp dụng các thực hành công trình xanh và tác động của hiệu ứng đảo nhiệt đô thị cũng được thảo luận, nhấn mạnh tính ứng dụng thực tế của nghiên cứu này đối với sự phát triển đô thị bền vững tại Việt Nam.

Giới thiệu

Môi trường xây dựng là một nguồn tiêu thụ năng lượng chính trên toàn cầu, và Việt Nam cũng không ngoại lệ. Khi Việt Nam tiếp tục quỹ đạo phát triển kinh tế và đô thị hóa nhanh chóng, nhu cầu năng lượng từ lĩnh vực xây dựng được dự báo sẽ tăng đáng kể. Các tòa nhà nhà ở chiếm một phần lớn đáng kể trong tổng lượng công trình, đặc biệt tại các khu vực đô thị nơi các loại hình nhà phố nhiều tầng (thường được gọi là nhà ống hoặc shophouse) rất phổ biến. Khí hậu nhiệt đới nóng ẩm chiếm ưu thế trên khắp đất nước đòi hỏi sử dụng năng lượng đáng kể cho việc làm mát để duy trì các điều kiện nhiệt độ trong nhà chấp nhận được. Sự phụ thuộc vào làm mát cơ học này góp phần làm tăng nhu cầu năng lượng đỉnh điểm và tăng lượng khí thải carbon.

Giải quyết thách thức này đòi hỏi nỗ lực phối hợp để thực hiện các thực hành xây dựng bền vững và hiệu quả năng lượng. Các chiến lược thiết kế thụ động, tận dụng các lực môi trường tự nhiên như bức xạ mặt trời, gió và chênh lệch nhiệt độ, mang đến một con đường đầy hứa hẹn để giảm sự phụ thuộc vào hệ thống làm mát chủ động và cải thiện hiệu năng công trình. Các chiến lược này đặc biệt phù hợp trong khí hậu nhiệt đới, nơi chúng có thể rất hiệu quả trong việc giảm thiểu gia tăng nhiệt và thúc đẩy thông gió tự nhiên.

Mô phỏng hiệu năng công trình (BPS) đã nổi lên như một công cụ không thể thiếu để đánh giá sự tương tác phức tạp giữa các thông số thiết kế công trình và điều kiện khí hậu. Bằng cách tạo các mô hình ảo, các nhà thiết kế và nghiên cứu có thể dự đoán mức tiêu thụ năng lượng, phân tích tiện nghi nhiệt và đánh giá hiệu quả của các can thiệp thiết kế khác nhau trước khi xây dựng bắt đầu. Hơn nữa, việc tích hợp các kỹ thuật tối ưu hóa với BPS cho phép khám phá một cách có hệ thống một loạt các lựa chọn thiết kế để xác định những lựa chọn mang lại hiệu năng tốt nhất theo các mục tiêu đã định trước, chẳng hạn như giảm thiểu sử dụng năng lượng hoặc tối đa hóa tiện nghi nhiệt.

Mặc dù tiềm năng được công nhận của thiết kế thụ động và BPS, việc ứng dụng rộng rãi chúng trong lĩnh vực nhà ở tại Việt Nam vẫn đối mặt với nhiều thách thức. Những thách thức này bao gồm nhận thức về chi phí ban đầu cao hơn cho các yếu tố công trình xanh, thiếu các ưu đãi tài chính cụ thể, thiếu hụt các chuyên gia có kỹ năng am hiểu về thiết kế bền vững và mô phỏng, cũng như những hạn chế về tính sẵn có và chứng nhận của vật liệu xanh địa phương. Ngoài ra, tác động của hiệu ứng đảo nhiệt đô thị (UHI) ở các trung tâm đô thị đông đúc càng làm trầm trọng thêm tải nhiệt làm mát và sự khó chịu về nhiệt, đòi hỏi xem xét cụ thể trong thiết kế và mô phỏng công trình đô thị.

Bài viết này tập trung vào việc ứng dụng tối ưu hóa dựa trên mô phỏng để nâng cao tiện nghi nhiệt và hiệu quả năng lượng của các tòa nhà nhà ở điển hình của Việt Nam thông qua thiết kế thụ động. Bằng cách xác định các kết hợp tối ưu của các chiến lược thụ động cho khí hậu địa phương và các loại hình công trình phổ biến, nghiên cứu này nhằm cung cấp các khuyến nghị thiết kế thực tế, dựa trên bằng chứng, có thể góp phần vào việc xây dựng nhà ở bền vững và kiên cường hơn tại Việt Nam.

Tổng quan tài liệu

Các tài liệu nghiên cứu nhấn mạnh nhu cầu cấp thiết về hiệu quả năng lượng trong lĩnh vực xây dựng tại Việt Nam. Với việc các công trình xây dựng chiếm một phần đáng kể trong tổng tiêu thụ năng lượng quốc gia và nhà ở là những nhân tố đóng góp chính, có một yêu cầu cấp bách phải giảm nhu cầu năng lượng. Quy chuẩn kỹ thuật quốc gia về các công trình xây dựng sử dụng năng lượng hiệu quả, QCVN 09:2017/BXD, đặt ra các tiêu chuẩn kỹ thuật bắt buộc cho việc xây dựng hiệu quả năng lượng, mặc dù phạm vi chính của nó hiện bao gồm các tòa nhà lớn hơn (tổng diện tích sàn ≥ 2500 m²).[^8] Tuy nhiên, điều này cho thấy cam kết của chính phủ trong việc cải thiện hiệu năng năng lượng trong môi trường xây dựng.

Khí hậu nhiệt đới nóng ẩm của Việt Nam đặt ra những thách thức riêng để duy trì tiện nghi nhiệt trong nhà. Các nghiên cứu đã chỉ ra rằng nhà ở hiện tại thường không đáp ứng được yêu cầu về tiện nghi nhiệt trong mùa nóng, dẫn đến việc tăng cường sử dụng điều hòa không khí.[^9] Nghiên cứu về tiện nghi nhiệt tại Việt Nam chỉ ra rằng người dân địa phương có thể có nhận thức và cơ chế thích nghi tiện nghi khác với những người ở khí hậu ôn đới, làm nổi bật tầm quan trọng của việc phát triển các mô hình tiện nghi nhiệt được bản địa hóa thay vì chỉ dựa vào các tiêu chuẩn quốc tế.[^11] Đối với các tòa nhà thông gió tự nhiên trong khí hậu nóng ẩm, các mô hình tiện nghi thích ứng được coi là phù hợp hơn vì chúng tính đến sự thích nghi về sinh lý và tâm lý của người ở đối với các điều kiện môi trường hiện hành.[^12]

Các chiến lược thiết kế thụ động luôn được xác định là rất quan trọng để cải thiện hiệu năng công trình trong khí hậu nhiệt đới. Các chiến lược chính bao gồm:

- Hướng và hình dạng công trình: Tối ưu hóa hướng và hình dạng công trình để giảm thiểu gia tăng nhiệt mặt trời, đặc biệt trên các mặt tiền phía đông và tây.
- Thông gió tự nhiên: Thiết kế để thông gió ngang và thông gió theo hiệu ứng ống khói hiệu quả nhằm tản nhiệt và cải thiện luồng không khí, điều này rất quan trọng đối với tiện nghi nhiệt trong điều kiện ẩm ướt.[^4] Các nghiên cứu cho thấy thông gió tự nhiên có thể cải thiện đáng kể tiện nghi nhiệt ở các thành phố Việt Nam.[^13]
- Che nắng: Lắp đặt các thiết bị che nắng bên ngoài như mái vẩy, lam chắn nắng và cây xanh để bảo vệ cửa sổ và tường khỏi bức xạ mặt trời trực tiếp.
- Đặc tính vỏ công trình: Lựa chọn vật liệu và hệ thống kết cấu với khối lượng nhiệt và đặc tính cách nhiệt phù hợp để giảm thiểu truyền nhiệt.[^15] Mặc dù nhà truyền thống Việt Nam thường có kết cấu nhẹ và thông gió tự nhiên cao, hiệu quả của cách nhiệt và khối lượng nhiệt cao có thể phụ thuộc vào khí hậu và cần xem xét cẩn thận trong điều kiện nóng ẩm.[^16] Việc sử dụng vật liệu bền vững và địa phương, bao gồm gạch không nung và vật liệu tái chế, cũng đang được nghiên cứu về lợi ích môi trường và nhiệt tiềm năng của chúng.[^17]
- Sân trong và không gian xanh: Kết hợp sân trong hoặc cây xanh xung quanh để tạo ra các vi khí hậu mát mẻ hơn và tăng cường thông gió tự nhiên.[^28]

Mô phỏng hiệu năng công trình ngày càng được sử dụng rộng rãi tại Việt Nam để đánh giá hiệu quả của các chiến lược này. Các công cụ như EnergyPlus và TRNSYS đã được sử dụng để mô phỏng tiêu thụ năng lượng và tiện nghi nhiệt trong nhiều loại hình công trình khác nhau, bao gồm cả nhà ở.[^18] Các nghiên cứu này chứng minh khả năng của mô phỏng trong việc dự đoán hiệu năng công trình dưới các kịch bản thiết kế và điều kiện khí hậu khác nhau.[^19] Tuy nhiên, việc tiếp cận dữ liệu thời tiết địa phương chính xác và đại diện cho mô phỏng vẫn là một thách thức được ghi nhận.[^20]

Việc tích hợp các thuật toán tối ưu hóa với BPS cho phép một phương pháp có hệ thống hơn để tìm ra các giải pháp thiết kế tối ưu. Điều này bao gồm việc xác định các biến thiết kế (ví dụ: kích thước cửa sổ, chiều sâu che nắng, giá trị U của tường), các hàm mục tiêu (ví dụ: giảm thiểu tải nhiệt làm mát, tối đa hóa số giờ ở trong vùng tiện nghi) và các ràng buộc (ví dụ: diện tích xây dựng, ngân sách). Các thuật toán tối ưu hóa, chẳng hạn như thuật toán di truyền (genetic algorithms) hoặc tối ưu hóa đàn hạt (particle swarm optimization), sau đó có thể chạy mô phỏng lặp đi lặp lại với các kết hợp khác nhau của các biến thiết kế để tìm ra các giải pháp Pareto-optimal biểu thị sự cân bằng tốt nhất giữa các mục tiêu cạnh tranh.

Nghiên cứu về việc áp dụng tối ưu hóa dựa trên mô phỏng cho các tòa nhà nhà ở trong khí hậu nhiệt đới, bao gồm cả Đông Nam Á, đã cho thấy kết quả đầy hứa hẹn trong việc cải thiện tiện nghi nhiệt và giảm tiêu thụ năng lượng.[^27] Tuy nhiên, cần có thêm nghiên cứu tập trung cụ thể vào các điều kiện khí hậu đa dạng và các loại hình nhà ở phổ biến ở Việt Nam, xem xét bối cảnh địa phương về thực hành xây dựng, tính sẵn có của vật liệu và hành vi của người ở.

Phương pháp và Phân tích

Để nghiên cứu việc tối ưu hóa các chiến lược thiết kế thụ động cho tiện nghi nhiệt và hiệu quả năng lượng trong các tòa nhà nhà ở tại Việt Nam, một phương pháp tối ưu hóa dựa trên mô phỏng có thể được áp dụng. Phương pháp này thường bao gồm các bước sau:

1.  **Lựa chọn Công trình Nghiên cứu Điển hình:** Xác định và mô hình hóa các loại hình nhà ở điển hình phổ biến ở Việt Nam, như nhà phố đô thị ("nhà ống" hoặc "shophouse"). Một mô hình đại diện dựa trên khảo sát hoặc dữ liệu công trình hiện có sẽ được phát triển. Mô hình nên nắm bắt các đặc điểm kiến trúc chính liên quan đến thiết kế thụ động, như hình dạng công trình, hướng, tỷ lệ cửa sổ trên tường và bố trí nội thất.

2.  **Thu thập Dữ liệu Khí hậu:** Thu thập dữ liệu thời tiết chính xác và đại diện cho các vùng khí hậu khác nhau ở Việt Nam (ví dụ: Hà Nội cho miền Bắc, Đà Nẵng cho miền Trung, TP. Hồ Chí Minh cho miền Nam). Lý tưởng nhất là sử dụng các năm thời tiết điển hình (TMY) đã được xác thực hoặc thực hiện đo lường thời tiết tại địa điểm cụ thể nếu TMY không có sẵn hoặc không đại diện.[^2]

3.  **Định nghĩa Các Biến Thiết kế:** Xác định các thông số thiết kế thụ động chính làm biến tối ưu hóa. Các biến này có thể bao gồm:
    *   Hướng công trình (ví dụ: độ lệch so với hướng Bắc thực)
    *   Tỷ lệ cửa sổ trên tường trên các mặt tiền khác nhau
    *   Loại và kích thước của các thiết bị che nắng bên ngoài (ví dụ: mái vẩy, lam chắn nắng đứng)
    *   Đặc tính của vật liệu vỏ công trình (ví dụ: giá trị U của tường và mái, hệ số phản xạ năng lượng mặt trời của bề mặt ngoài)
    *   Các chiến lược thông gió tự nhiên (ví dụ: kích thước và vị trí của cửa sổ mở, bao gồm các giếng trời thông gió hoặc sân trong)

4.  **Công cụ Mô phỏng Hiệu năng Công trình:** Sử dụng một công cụ mô phỏng hiệu năng công trình động có khả năng mô hình hóa chính xác sự truyền nhiệt, luồng không khí và tiện nghi của người ở trong khí hậu nóng và ẩm. EnergyPlus, TRNSYS hoặc phần mềm tương đương sẽ là những lựa chọn phù hợp.

5.  **Tiêu chí Tiện nghi Nhiệt:** Xác định các tiêu chí tiện nghi nhiệt phù hợp để đánh giá hiệu năng công trình. Với trọng tâm là khí hậu nhiệt đới và tiềm năng thông gió tự nhiên hoặc chế độ hỗn hợp, nên sử dụng một mô hình tiện nghi nhiệt thích ứng phù hợp với điều kiện nóng ẩm.[^12] Tỷ lệ số giờ ở trong vùng tiện nghi chấp nhận được có thể dùng làm chỉ số hiệu năng chính.

6.  **Định nghĩa Các Hàm Mục tiêu:** Xây dựng các mục tiêu tối ưu hóa. Các mục tiêu phổ biến trong bối cảnh này bao gồm:
    *   Giảm thiểu tiêu thụ năng lượng làm mát hàng năm
    *   Tối đa hóa tiện nghi nhiệt trong nhà (ví dụ: giảm thiểu số giờ không thoải mái)
    *   Có thể bao gồm việc giảm thiểu chi phí xây dựng liên quan đến các yếu tố thiết kế thụ động

7.  **Thuật toán Tối ưu hóa:** Lựa chọn và triển khai một thuật toán tối ưu hóa đa mục tiêu phù hợp, chẳng hạn như Thuật toán Di truyền Sắp xếp Không bị Chiếm Ưu thế II (NSGA-II) hoặc Tối ưu hóa Đàn Hạt (PSO), để khám phá không gian thiết kế và xác định các giải pháp Pareto-optimal.

8.  **Quá trình Mô phỏng và Tối ưu hóa:** Liên kết công cụ BPS với thuật toán tối ưu hóa. Thuật toán sẽ tạo ra các bộ thông số thiết kế, chạy mô phỏng công trình cho từng bộ, và đánh giá các hàm mục tiêu dựa trên kết quả mô phỏng. Quá trình lặp này tiếp tục cho đến khi tìm thấy một tập hợp các giải pháp tối ưu hoặc gần tối ưu đạt yêu cầu.



![Minh họa cho Tối ưu hóa các chiến lược thiết kế thụ động cho tiện nghi nhiệt và hiệu quả năng lượng trong các tòa nhà nhà ở tại Việt Nam sử dụng mô phỏng hiệu năng công trình - phần 1](/images/publications/in-article-1-optimization-of-passive-design-strategies-for-thermal-comfort-and-energy-efficiency-in-vietnamese-residential-buildings-using-building-performance-simulation.jpg)



*Sơ đồ minh họa quy trình tối ưu hóa dựa trên mô phỏng, cho thấy luồng từ các thông số thiết kế đến mô phỏng, đánh giá hiệu năng và lặp lại thuật toán tối ưu hóa.*

9.  **Phân tích Kết quả:** Phân tích các giải pháp Pareto-optimal thu được từ quá trình tối ưu hóa. Điều này bao gồm việc hiểu rõ sự cân bằng giữa các mục tiêu mâu thuẫn (ví dụ: tiết kiệm năng lượng so với chi phí ban đầu) và xác định các kết hợp chiến lược thiết kế thụ động hiệu quả nhất cho các mục tiêu hiệu năng khác nhau.

10. **Kiểm định và Phân tích Độ nhạy:** Kiểm định các mô hình mô phỏng dựa trên dữ liệu đo lường từ các tòa nhà hiện có nếu có thể. Thực hiện phân tích độ nhạy để hiểu cách biến đổi của từng thông số thiết kế ảnh hưởng đến hiệu năng tổng thể của công trình.

Kết quả và Phát hiện

Dựa trên nghiên cứu hiện có trong các bối cảnh tương tự và các nghiên cứu sơ bộ tại Việt Nam, việc tối ưu hóa dựa trên mô phỏng dự kiến sẽ mang lại một số phát hiện chính:

- Tiềm năng tiết kiệm năng lượng đáng kể: Tối ưu hóa các chiến lược thiết kế thụ động, đặc biệt là thông gió tự nhiên, che nắng và đặc tính vỏ công trình, có thể dẫn đến giảm đáng kể mức tiêu thụ năng lượng làm mát so với các thiết kế công trình cơ sở. Mức độ tiết kiệm sẽ thay đổi tùy thuộc vào vùng khí hậu và loại hình công trình cụ thể.

- Cải thiện tiện nghi nhiệt: Các thiết kế thụ động tối ưu có thể cải thiện đáng kể tiện nghi nhiệt trong nhà, tăng tỷ lệ số giờ ở trong phạm vi tiện nghi chấp nhận được, đặc biệt trong các tòa nhà thông gió tự nhiên hoặc chế độ hỗn hợp. Điều này làm giảm nhu cầu làm mát cơ học và nâng cao sức khỏe của người ở.

- Xác định các chiến lược thụ động chính: Quá trình tối ưu hóa sẽ xác định các chiến lược thiết kế thụ động có tác động lớn nhất đối với bối cảnh Việt Nam. Ví dụ, trong khí hậu nóng và ẩm, các chiến lược thúc đẩy thông gió tự nhiên hiệu quả thường rất quan trọng. Các giải pháp thiết kế tối ưu có khả năng nhấn mạnh các chiến lược giảm thiểu gia tăng nhiệt mặt trời đồng thời tối đa hóa luồng không khí.

- Sự cân bằng giữa các mục tiêu: Tối ưu hóa đa mục tiêu sẽ tiết lộ sự cân bằng giữa hiệu quả năng lượng, tiện nghi nhiệt và có thể là chi phí xây dựng. Các nhà thiết kế và nhà hoạch định chính sách có thể sử dụng thông tin này để đưa ra quyết định sáng suốt dựa trên các ưu tiên của họ. Ví dụ, đạt được mức độ tiện nghi nhiệt rất cao chỉ bằng các biện pháp thụ động có thể đòi hỏi đầu tư ban đầu đáng kể hơn vào các thiết bị che nắng hoặc các yếu tố mặt tiền chuyên biệt.

- Đặc thù khí hậu: Các chiến lược thiết kế thụ động tối ưu và hiệu quả của chúng sẽ khác nhau giữa các vùng khí hậu khác nhau của Việt Nam. Các thiết kế được tối ưu hóa cho khí hậu cận nhiệt đới ẩm của Hà Nội có thể khác với các thiết kế được tối ưu hóa cho khí hậu nóng ẩm của TP. Hồ Chí Minh.

- Hướng dẫn thiết kế: Kết quả sẽ cung cấp dữ liệu định lượng về tác động của các thông số thiết kế khác nhau, cho phép phát triển các hướng dẫn thiết kế dựa trên bằng chứng cho các tòa nhà nhà ở điển hình của Việt Nam. Các hướng dẫn này có thể giúp kiến trúc sư và nhà xây dựng tích hợp các chiến lược thiết kế thụ động hiệu quả từ giai đoạn đầu của quá trình thiết kế.



![Minh họa cho Tối ưu hóa các chiến lược thiết kế thụ động cho tiện nghi nhiệt và hiệu quả năng lượng trong các tòa nhà nhà ở tại Việt Nam sử dụng mô phỏng hiệu năng công trình - phần 2](/images/publications/in-article-2-optimization-of-passive-design-strategies-for-thermal-comfort-and-energy-efficiency-in-vietnamese-residential-buildings-using-building-performance-simulation.jpg)



*Biểu diễn hình ảnh kết quả mô phỏng cho thấy phân bố nhiệt độ hoặc luồng không khí trong một tòa nhà nhà ở điển hình của Việt Nam dưới các kịch bản thiết kế thụ động khác nhau.*

Ví dụ, một nghiên cứu tham số trong quá trình tối ưu hóa có thể cho thấy việc tăng độ sâu mái vẩy trên cửa sổ hướng nam một lượng nhất định sẽ dẫn đến giảm đáng kể tải nhiệt làm mát trong những tháng nóng nhất, trong khi có tác động tối thiểu đến chiếu sáng tự nhiên. Tương tự, việc thay đổi đặc tính vật liệu tường có thể cho thấy tác động của khối lượng nhiệt đối với biến động nhiệt độ trong nhà.



![Minh họa cho Tối ưu hóa các chiến lược thiết kế thụ động cho tiện nghi nhiệt và hiệu quả năng lượng trong các tòa nhà nhà ở tại Việt Nam sử dụng mô phỏng hiệu năng công trình - phần 3](/images/publications/in-article-3-optimization-of-passive-design-strategies-for-thermal-comfort-and-energy-efficiency-in-vietnamese-residential-buildings-using-building-performance-simulation.jpg)



*Đồ thị thể hiện mối quan hệ giữa các thông số thiết kế thụ động khác nhau (ví dụ: tỷ lệ cửa sổ trên tường, diện tích che nắng) và các chỉ số hiệu năng công trình (ví dụ: năng lượng làm mát hàng năm, số giờ không thoải mái) dựa trên kết quả tối ưu hóa.*

Bối cảnh Việt Nam

Các phát hiện của nghiên cứu này có ý nghĩa quan trọng đối với bối cảnh Việt Nam. Các tòa nhà nhà ở, đặc biệt là nhà phố đô thị, là loại hình nhà ở chủ đạo ở nhiều thành phố. Việc thực hiện các chiến lược thiết kế thụ động hiệu quả trong các tòa nhà này có thể dẫn đến giảm tiêu thụ năng lượng trên diện rộng tại các khu vực đô thị của cả nước. Điều này phù hợp với các mục tiêu quốc gia về hiệu quả năng lượng và phát triển bền vững của Việt Nam.[^36]

Nghiên cứu trực tiếp giải quyết thách thức duy trì tiện nghi nhiệt trong khí hậu nóng ẩm của Việt Nam, một yếu tố thúc đẩy tiêu thụ năng lượng chính. Bằng cách sử dụng mô phỏng và tối ưu hóa với các mô hình tiện nghi nhiệt phù hợp, nghiên cứu có thể cung cấp các giải pháp phù hợp với địa phương, nâng cao khả năng sống mà không phụ thuộc quá mức vào điều hòa không khí.

Hơn nữa, nghiên cứu có thể cung cấp thông tin cho việc phát triển và thực thi các quy chuẩn năng lượng công trình và tiêu chuẩn công trình xanh tại Việt Nam. Mặc dù QCVN 09:2017/BXD hiện tập trung vào các tòa nhà lớn hơn, nghiên cứu chứng minh lợi ích về năng lượng và tiện nghi của thiết kế thụ động trong các tòa nhà nhà ở có thể hỗ trợ việc mở rộng hoặc phát triển các quy định cụ thể hoặc chương trình khuyến khích cho lĩnh vực nhà ở.

Nghiên cứu cũng có thể góp phần khắc phục các rào cản đối với việc áp dụng công trình xanh bằng cách cung cấp bằng chứng rõ ràng về lợi ích hiệu năng của thiết kế thụ động. Việc định lượng mức tiết kiệm năng lượng và cải thiện tiện nghi có thể giúp biện minh cho khoản đầu tư ban đầu vào các tính năng bền vững và chứng minh lợi ích kinh tế dài hạn cho chủ nhà và quốc gia.

Xét đến hiệu ứng đảo nhiệt đô thị (UHI), vốn rất rõ rệt ở các thành phố đông đúc của Việt Nam như Hà Nội và TP. Hồ Chí Minh, nghiên cứu trong tương lai có thể tích hợp mô hình khí hậu đô thị với mô phỏng công trình để đánh giá tác động kết hợp của UHI và các chiến lược thụ động cấp độ công trình. Điều này sẽ cung cấp hiểu biết toàn diện hơn về hiệu năng công trình đô thị và cung cấp thông tin cho cả thiết kế công trình lẫn các quyết định quy hoạch đô thị nhằm giảm thiểu hiệu ứng UHI.

Cuối cùng, việc khám phá các vật liệu xây dựng bền vững và địa phương trong khuôn khổ mô phỏng có thể hỗ trợ ngành công nghiệp vật liệu xây dựng trong nước và thúc đẩy việc sử dụng các lựa chọn thân thiện với môi trường, phù hợp với khí hậu Việt Nam và sẵn có.[^24]

Kết luận và Nghiên cứu Tương lai

Bài viết này nhấn mạnh vai trò quan trọng của các chiến lược thiết kế thụ động và mô phỏng hiệu năng công trình trong việc nâng cao tiện nghi nhiệt và hiệu quả năng lượng trong các tòa nhà nhà ở tại Việt Nam. Tổng quan tài liệu hiện có xác nhận những thách thức do khí hậu nóng ẩm của Việt Nam gây ra, nhu cầu năng lượng ngày càng tăng từ lĩnh vực nhà ở và tiềm năng của thiết kế thụ động để giải quyết những vấn đề này.

Phương pháp tối ưu hóa dựa trên mô phỏng được đề xuất đưa ra một cách tiếp cận có hệ thống để xác định các kết hợp tối ưu của các thông số thiết kế thụ động cho các loại hình nhà ở điển hình của Việt Nam, có tính đến điều kiện khí hậu địa phương và yêu cầu tiện nghi nhiệt. Nghiên cứu như vậy có thể cung cấp hướng dẫn thiết kế có giá trị, dựa trên bằng chứng cho các kiến trúc sư, kỹ sư và nhà hoạch định chính sách, góp phần phát triển các giải pháp nhà ở bền vững và hiệu quả năng lượng hơn tại Việt Nam.

Các kết quả chính của nghiên cứu này sẽ bao gồm mức tiết kiệm năng lượng được định lượng và cải thiện tiện nghi nhiệt có thể đạt được thông qua thiết kế thụ động tối ưu, xác định các chiến lược thụ động hiệu quả nhất cho các vùng khí hậu khác nhau của Việt Nam, và những hiểu biết sâu sắc về sự cân bằng giữa các mục tiêu hiệu năng và các thông số thiết kế.

Nghiên cứu trong tương lai trong lĩnh vực này có thể mở rộng dựa trên phương pháp được đề xuất bằng cách:

*   Bao gồm phạm vi rộng hơn các loại hình nhà ở và thực hành xây dựng phổ biến ở Việt Nam.
*   Kết hợp phân tích chi phí vòng đời vào các mục tiêu tối ưu hóa để cung cấp đánh giá kinh tế toàn diện hơn về các chiến lược thiết kế thụ động.
*   Phát triển và kiểm định các mô hình tiện nghi nhiệt được bản địa hóa cụ thể cho các vùng và loại hình công trình khác nhau ở Việt Nam dựa trên các nghiên cứu thực địa chuyên sâu.[^11]
*   Tích hợp các mô hình khí hậu đô thị để đánh giá tác động của hiệu ứng đảo nhiệt đô thị đối với hiệu năng công trình và đánh giá hiệu quả của các chiến lược thiết kế thụ động trong việc giảm thiểu các hiệu ứng này ở cấp độ công trình và đô thị.
*   Nghiên cứu hiệu năng của các vật liệu xây dựng địa phương và bền vững bằng cách sử dụng mô phỏng nhiệt ẩm (hygrothermal simulation) để hiểu rõ hành vi của chúng trong khí hậu nóng và ẩm cũng như tác động của chúng đến hiệu quả năng lượng và chất lượng môi trường trong nhà.
*   Khám phá tiềm năng tích hợp các hệ thống năng lượng tái tạo (ví dụ: điện mặt trời áp mái) với các thiết kế thụ động tối ưu để đạt được các tòa nhà năng lượng ròng bằng không hoặc gần bằng không trong bối cảnh Việt Nam.
*   Phân tích các mô hình hành vi của người ở và ảnh hưởng của chúng đến tiêu thụ năng lượng công trình và tiện nghi nhiệt thông qua các nghiên cứu đánh giá sau khi đưa vào sử dụng (post-occupancy evaluation).
*   Chuyển đổi các phát hiện nghiên cứu thành các công cụ thiết kế, hướng dẫn và chương trình đào tạo thực tế cho các chuyên gia xây dựng tại Việt Nam để thúc đẩy việc áp dụng rộng rãi hơn các thực hành xây dựng bền vững.

Bằng cách giải quyết các lĩnh vực này, nghiên cứu trong tương lai có thể thúc đẩy hơn nữa sự hiểu biết và thực hiện thiết kế thụ động và mô phỏng hiệu năng công trình, mở đường cho một môi trường xây dựng bền vững và hiệu quả năng lượng hơn tại Việt Nam.

---

### Tài liệu tham khảo

[^1]: [E3s-conferences.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGC2Q_boUJ3TinhBkjPLqN__cRpqfnJgk-wF-21MeMpxZhPY0-LbEjtVIV8MVYzdujKeWvS-T4ZoaCGYaOIfFl9Ccq235DFQo12P1sHjrSQUeJ4oiasjqOM1YUZrU1Dn1PjBTSccUb3RE0XqgJEwa8MpIHZFdIIYGt8ogPs2ZbyyveP5ZmU6v4mQY9iMWSJsbfODy0=)
[^2]: [Meteo.fr](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF1mf52Ta7iyD90zMtMnO2sF4iBlHO2wZoWIsj7LTlS_K_LuSE1uwaGVGCBxcZioHU8qO6QtzM8Y7AtoyyyO8Uhl0n-lnvIi_V5YV3sdfQPsczkd_t6Y1nfS7NOBqzJZ1i7tRy4EsYnhHI6UnCXnD4nhsLpF_XCBA==)
[^3]: [Meteo.fr](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH-iRA-DQrbimGWlIMMV6_KhBD7vOBqI1NltNS62KHkh-xC7d72Fdb3hKFhBkcs9nrx_N4VBgMyAKWXAIW9XW6XaeLqtbEU5laRN7XTKqipvcCMr561qqtWmKrmHNmw_BJUdSDGn6Y98B-9dAhiR8mjjbw=)
[^4]: [Core.ac.UK](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHJCjZNlLbRyfNNAUlDajY6VoDnpaG0cTXQ1cT4sBVazSxyrP_CxmdgfLrL3uRNzfEE18QRlXS1TF2XQOe3TNYlrVZPwvPreQHPfOa6cG4kNA8b12hVxy6f4G-liDKonb3ZkQorJvO6)
[^5]: [Hud.ac.UK](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH5PCb2_wpK379aycF2YODSSaizmVX7b9SjbuAWsMoPBBezRgjbOTfTbvKB4THPUQtoF-jXmLpgwLjAWU6NMx9e_ovRIC9hs6z5A481q6iPutc40UG9DoXXPm-K5Sfy5qMT0UwHw_3gBqY6NrBY__O56uNCSfs=)
[^6]: [Uliege.be](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHiz_QOsd33l7qU_MXgkGSwPEv3Xpznyr5W_uaTSXwtVUCEdvduZpOKKf2Ju1SGnEdJEpMwH28OuqfHala3eHfA46i31qwRloC1nrQxsoYfex1vKV1VSYHWU098o5sz-xKYrAyiIyADO-J-cLq1wDsGO_nWng==)
[^7]: [Vienkientrucquocgia.gov.vn](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpnMDqnywunqUeH_vRYPWA3IySFBF1zzzvkrw-Qzksg6ZjnSRxFHOLI5deYZqmVv6Z7TycrX0CWtXAROkLd3B2XO5O20Ehy4yeafXPtCnUEIGEsc8g2wPWJspoOkGxev5YkPjAtDo9rEBBcQuhfMSdv6wRQ3KSJun83h7o3jRwgaco2FABtqTI)
[^8]: [Aseanenergy.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHP8pFcAW26HDV5f-4NTvZuUtHMG_qbIrMY2rFSxfWIIgLg1HVBjjmxdctqVC7-KOTCgiyYEmmt6wYwqFrmFQ5RbJz05r57vaUx4JpMy4CRIykwLZgtRZKQVtzCajWFQiYDwoSDNbmrIEArBcsRGAgV4J_ahmcxIeynMTrE-gcmewrjLQaPfmrusfhmnj93uauX-Q==)
[^9]: [Researchgate.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHRiAb5QZ1bWc-0qLbEEPvsq61tiJuB0rHIiuzGAuY8exzo9aHSOV7-qvBjcsEsSSD-L5tB3JWTJq2aIgafSM2CSLArLD738-b8Oq_FV8IfF_P_8UUH41BPxNcDVHJOhORhI0-jtYUgqNClJMxQ5u5nFTzczV3WazkBNtHsfj8OCD7JERZbGZZ4TPdCDWy8ePgxTj2ohsb7qtJG_8_wNoiP4GPiB6F0fpPWBOS4cQ4scjRcVXKPv0n3fWL9P_g=)
[^10]: [Uliege.be](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG3588Q1y1roDBZLORzk6b3Du8ete0ZG0eyUN-NgenJ0hKgUc3jOTcXBiTFIfqgpG_duaLB6PPiBJGrc3xPa5Wt3sEhjRcW0HNYnNc2OTcm-AhDkDIruJaZTVcz6u5IVRC-sQmY_WZr6Vhw3VzGdCrtxG86tQC)
[^11]: [Jst-ud.vn](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF0BeWlgoDR--e9oI2BFUlYWiIzzKZuKESIbzHvbejbKEqBGeBh0DIcY91Kf-5Srr-yV2SC-pklRTv4tcBAxhYKSDez_dZ5CcZLgQW9MWZQRN6tlDHzNk1mgHPwvUve2IhK32laDqpZbjVdeJe4qY7QfdZG)
[^12]: [Scispace.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHKhBGiby98M0X1C4dtdg-LhlzpU0yMYbCp_2Scsu2guX-2N5FnL1dPoHbyhaRaw0WzKBQkzZLaFwy7zhCYUVAWB2gfsb9Rhlxhr6HG8-PuV-dSHC_fqEvRy5IvBmjZp-5wRfzIjzm1Ggm1DBErWjSJLq_OcVll7ww0mtvkIXSw8eV6FRxDoVsHyPtXx0HqD0NBkt4SEOH8I6OZQDmS)
[^13]: [Ascelibrary.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHYtMSk7mEyHBg_J9FQNz69crSGiGnkE-uuuBuz-qPog_FRYO4O0QgHZDuhILC9yD9zHJRhxGp0nSTZnOI4ZItofLLmjBxK_HoNKQJc3gE9asKzCkqaM4IT1UEknnDzDnfOVt2PzyWu3bo8hTX-ICZEv5DZLoT2UhV29qCCZhI_7w==)
[^14]: [Irglobal.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHtKLVbClkldAGL0MzrXH11IdXrJbfrW7IrXb6JYwFpWEC3z8tUVWOdAHmkO4D8-CzFmeagI2PFjxmaYtGLZ0h6L2-giBZi11SbJKpzNbvfSU731rwjNKnWZWrO_CHDLOFYfj3EDwRQxf8YRePOxwaxB9fL0_8B-X3OqP-H3zo3mTBGOJU1m5W-qTxZ)
[^15]: [Emerald.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFRbnpmN829E1WX7c_vQrechcUNed23scGhpoE6o0PV0i4a_uyP1oA6DjhgwrjnMBICFox5JbJ9119W-JAyEBmeEYVeJ41hIwjVjFm8L1F9C_nLekCmLi56nzqBvBni90-tJXZAxqjatIfcJ2ODUD_WbNopT1DPUMvfGU0XY5B74jCs-ssvCe6z)
[^16]: [Scispace.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFAygh-SdLACybFUih3O5wYdV5v5zmxPqc9a9BQ1nqZ69eBv0XYDX7ToK_KOLS1j1JELMzZoUx5MnB0XCFg9xN8Jn8d4Vz9Ryrjv7Bg93R-v4MvT9Y-EiHV1ZfsPYXAmq2i9PiA5akghKHi6oYaeiVsR0ojzqc6UrVBzwZXpPF-Y1zTj6Dj6p6ErI9rUvSCEyOaZ6nJFFGYXFdV)
[^17]: [Researchgate.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE7BATdqzO7XqdFj_QZNfmQ1lwT9sTukJc-_gQUcHKolilhRXgZfCM5K11AlvTMhYO8k2aPkrZ3iKxiqhYOp3ZKDHGkJ7ro1DQ5pranhIl2wRyizhMqgm3N-CD6lq3xLCVhjJ9ny8Dh6pRtM2z8o4hF6di4Ty7WevxaOhcL5JhDwwaWvFu5xZQK2NYN_JpCuKUWB0uUleO7MWtgZ1g1FPOcbblh8hUB-B0wvupmxY7dal88cExE1f8OF_MLJTLNLhFLhDR8r8AwiapGhfnMWcJgqA==)
[^18]: [Mdpi.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF4rm9g27lM_ard5t1Y_Xc0lnrKqE8BXdy9Uc94UqBLJQVF9aPADVt49zgxfVxEcBLGE9dZ2az43xsGWx4Hg_c0PZO0aMCGuy2I71ebeTxYGLxlUoX9BeUaloo9bV6PFrtPlguD)
[^19]: [Researchgate.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGfjXeTOpmsTzhhgfcsmlLh4FGKdgKQFNt7F6_7Db77lJbLwrptZ8QjiRmjYkR2bLNSH3G4aB4m4lBonpgk3EBEFju6g5naBBma0xJehcWTQlOFmgliSmeryd3I6UMhJArzZJIOUUy-yYGunBA7XEz_1dNZgy4tUsHll0xDHb6kDfZOTLTmd3ShcoweffJ8Q-8VyXorMbDdWYCeHOOG2ERVW48mLJayNO2gjKQusz8Xya0kFNfKrlJcySx660MaFuZUz0MxWlPC5fCg24lu8oSwe2_ecA==)
[^20]: [Mdpi.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQENIes0upk1KxyePL-WIRGSshMkJpl4_tsU3R2YTeUaF04J83IXh7DdFphRwtbkRZocQZHClOX7MRM7ulOoZnqJ6roMRHKGeqzWefMZkXvoGoAoJDiTBcAO0bdc8kAJEwA=)
[^21]: [Eurogroupconsultingmea.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFswcWevvsIky9iXv_0-6kDZO6Ya8_fAmgBBPEZEtasF-2gp4tVPJ04aeP97bov1mqF_dByTn36ZuZaMk2iA6kmTD80e1GNMFVhdv1UAAohHbIRS92r-VVAfapRIKyNuqr_DvWOHG4zEgmNlWm3qN3C3nnDGSHpVHlsyDrv3VI_faugPTxNWr2oLw==)
[^22]: [Vgbc.vn](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFLp99efPtUAzgFKMunfGPoUYtsAcTQC5OOsjj8Jqm5-ve7wPxJBLL8uF32AWLLwMSN7l3vsjOzfzw5BulH7HXUfab6D_EHM-UR9UIsZFYRZ4w8NoavukTtjr2D78PL2HXzwoDR0NFbHWmp4Y7LvVoD1-JHhBek9JnAeL-IchcDNjoFlYsI2b8FShxoBTlPA-jM7UXezH_Vd4k_Nm9b33PB)
[^23]: [Edgebuildings.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGDuVLSeDeX0KQd6Ir0US1MDjYr3kt_--Tga2Y1gITXdx_s4kE69T5b5EQFhSR-UPvVfzwepxO1t6BvxMqM7AU55ugjwCqX_k02jDZ_Gj3ZX4QsQoUUag7J1zmfXVTcUJT_5ye-NynSRF30D09pnOpnN_3CgdrMRTq44C-iBBJ1Vob5t9p7NZU-OA7zodOwNrYd3U3yWwdf_zrZQAJJ7tDr5mVJ4NOd8q3WBfqy)
[^24]: [Vibuma.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGhd6ep4GwrjzK-gvNzYNensinh2jI8zlbwa0w2KfJ2VuYnzzuUaW-FWIwKXUYNqSI7hCWkuX3pwAz8BUGf2Tn9NjtVR_KRWZtRp3Ul2b46FEdi6tAHKHhBY1u4GZyMgncrLj2asCk33iuw8gGHCD427GLTs0CcQacpL0nv6oE=)
[^25]: [Uliege.be](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGG0HVm1bpwL8o0Crt18K--D7y5Pb2zDpdfkdAFpmksGijetZtoOUrzE-edCzItpLWaG4fDbOFeJfzGqTkED4OyxDzNA5M3nIHmJ_phrQ7auNzzlciZ7qRhmuU2yKM-BZb_SAMRvics1OoaIcRz8JGXzNEbslB93o8rndMqoVf95jP3Q5zIW50SnEv0CBQ=)
[^26]: [Researchgate.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEsQ45ruUrE5cp8X-ZQ_K6h8DPB5VKdtOamy0_zAtavvjku61rLqzMqze44V2ZQC0JkISATdIjrUj5FOhPLjptG--LityldTdSHWJmm5wxLUhokzmh6B7l5XeYTt-yG2tZ0swAERw8xbqZgA6S5nXhHevqBzCgOmnEKFpnBqmRd90oUnr4mdD6fVkFCLD-EkmKycjb7rAC5RDLOZl5GfrGwbhu1zX9cY_VoI4zg_lF4Rm8GUxK4cNCEkNXACTkQ4QIWNBgg)
[^27]: [Mdpi.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE0NTfhCIxZFMaRVUVclaGQa4WxX0BqsTY8Hf3SvxpZDIPw0QqJFS83Zoi3NYjhtN3nvuTqnAjv4xpN-VgYTv1f8KPu1DsxbqLqLtcT9rT2UU7LXBuhasHHaW3dpLkWnjCjFw==)
[^28]: [Scribd.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHTc-aLDgwW1QHEtgchBdFJawwhHEhk35rhkRsY9dth2hQezk_5swUqPcy04HzxOZoRW2CkI4j8sCT8BEGlIqh_vVQaK61ch3EOyk3vtYuA0c6Y11I1N0vxN2fDW1jqGMb4dhTCTOAdLXkRvw_Ig9y6m2Cx5hOz_VSj4CZTFvqnh50J3uWezYoprPqRUxWukB1TV9BipUugJ59F5te4iDkCGi1XtTLDnNY6OD2IuR-ecw==)
[^29]: [Inhabitat.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQElMwFjoUqxJccjbV6Owgh5Txsb3dBcq3Q3LP1FWMp5mcgYFMpNX5hRh7wdi4eMlkzCgogpOeTOhlwTywWZOLCFwa5Gw-fzT0Zvxc1bAs4tGzeo7SUs5EdRS3i0pAdOS2ohsjh6xKQa0fLfUUFmCUwbzKv-Pux2mKtbPRdWWCrAroaScD-UvEjQkenuNg==)
[^30]: [Researchgate.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG2R_JRR-JKBO9vEHAqekJNxJcfMyAuwk7cylYAcaG3Yjt1qP5LqSIRyzZSMwfl1zMTfB8DuaYTY4tSeX_nACddj6zb7TZHT3B1PWTjrP3XRNJM9YIGMEWaXiQJAkL3KikqI6Lq_7mB3u6cYSDdVd8Hbm-2oCHoj8itlIB2R_fF89FkfsWqWrAgfz-C2_pagfv1jq-cnXDAQLbKWM9L16FTLoIw_6bHGj7RelFD2J2T9wMudzvp0OYc9mFcIUC17np2zZyaZYdlg8TeWy1Ncg==)
[^31]: [Connect-education-research-innovation.de](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGV8vfyvsivZw9RM_36qaz3gIUJ7ijTlL_lVOUjfKH73AMg6VH_SQI-urCkTTvz12fCpdaAXT1WhXra1tfmpeQhgdD3Q5Vnan21-Gpwun7QIrjt5h_1Zmu21ls5sS4LIz7wKstPuMiiHZH8jqDnI49ya5-UVw1I3awNWzjU9KG-qhrA2yM2SnSoiGk0Ta8GSwEF6w==)
[^32]: [Researchgate.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGlQbUyJbm05XuPZCUlO2ryY3x_3ruMPdDpVsYc4fTRsTcBXChzKeeyZhsaQvFyJLUEbHUVwBy4cOci29sB8nAOzyNIKPBkdYtdcfmAKbFKPuTe5xlkxqWywjJ6AroSHJsYUr1jN9Jfz_88yzfztUZDG80ZZa-gkeE_N0r-Xv_IuWwPu7KhLgFX-0w8vKYUfNUbxkJvTPvreujd2yqGNEu0QtZDVJ9C0yI0VibJ2tfiEI8G8E_I2Xlvfh6FFgQjzB_jvKGxUSILNU3tdO_83gPWHo=)
[^33]: [Dena.de](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHkIYZr-0uKbn_rYAp9QrUcHQS9Ph76x4aLvziIN3SzgHUcsaU-WQHah91fecjdcUemnNafUrOQ1Bo62tt-UPWh_ZkG2pEgNYGVQNxuKm_NmViAMW78V2amiq6RKLrumBf1r5McqOB9eUni19gDvH0vhANCiwtPMdm4cZFig5DRSC7Y24KnJMXzSxu5LDAicVRfU8hodQWCYkqfr5p5KadH8Uz7j7dKYQ==)
[^34]: [Mdpi.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGHXh_B68z9hjGStDIm0h3b8Mw2o2u8yZEeNfU6x4U9IgHi6DsItZDMIbmoCHeP5a7FuC3MfpYqy538ZhhFuaYGRr7BXuFuY2EK_HcPUf20I0BKgpfkVqPFlVtK8kWx3izkTN6Q)
[^35]: [Researchgate.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEjDGipBnAXeAuSJb5GspPWIOPzgJUimcUp6caN8g5X0a2VSG9Ir2cdJCD_TFU6YE9rpU-5ASAfISXWxI763A5T4akTG1dH1cRDcmPEhnxu6FpGFYDQmMgJGaa97ekMbA8mPhSBsAPGlSNTn_nFuJVT1FWTfdStq4hzMcKCdzS3t9vw8bgkpdnlW_-IRw42QHQVuKZPMedpvuYMO2eFVwKD-pioXqKSqLO_L1iuPSMIPxhV6AqfIqOQF3-H37uNOM2PKst5m_4j0r1hm_8OdsHTIelw-7KOzY4iPlbQPNY9bQ==)
[^36]: [Vgbc.vn](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFY5eyv7L6jcTiAociLNzU-JyXwOu0qy6dgUA8EROLzLwsug80W9d_8AJdLW25kbA6Jy834SnUSPZuzLVmpMV4fxASmW67n-iCwEbDIeCv9hB3tfJQtWYvZOjn6hmR6-KB2lWKW15t2hokngDwMal_EPZ8Me_4=)
[^37]: [Dntb.gov.ua](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHNGn5iKlbkjvQgYD7uA2FzHgwtVxh6JVFRpdNd3Sir6WH877Wz8KObZkmXAKhzHHhQcjH8X3E0LPrSMD791hbnDHbN0NzWWagdTx2CiJ_CTj0O1qznLYnQKr3RpJGTYrgYgm9EdQ==)
[^38]: [Researchgate.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHjworxhsdJGcidonLvfrGMVxdZ_qKJbLSkIwXP96JNh_fFI_JRlxcQnst03bUXcogPeCiphWfWwCcCEAh_LkbifkM3XwFtOpxX1cqG1aaEn3IfDc2ZhOILHQPT4-CUXy3VCCTyM4gR67HEGlYOWBjYFsUleZJqogZhXZhBkeHiKRai1SHyoAIMVqtzT579lnaqEbMxBsPkmikO-MV7hl8ECqp5n-mAHboIhOinEI4zzQXXT4bWWtP__mDQjpSbeUIztK-raIjzlW56w6vkzlyJULT4o-E=)