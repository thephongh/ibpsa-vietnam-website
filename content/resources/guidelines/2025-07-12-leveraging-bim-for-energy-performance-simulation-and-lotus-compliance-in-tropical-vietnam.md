---
title: "Tận dụng BIM cho mô phỏng hiệu năng năng lượng và tuân thủ tiêu chuẩn LOTUS tại Việt Nam"
date: 2025-07-12
featured_image: "/images/guidelines/leveraging-bim-for-energy-performance-simulation-and-lotus-compliance-in-tropical-vietnam.jpg"
draft: false
tags: ["IBPSA", "simulation", "Building Performance", "Energy Efficiency", "Vietnam", "Guidelines", "Standards", "Best Practices", "Regulations", "HVAC", "Energy", "Thermal"]
categories: ["Building Performance", "Research"]
author: "IBPSA Vietnam AI Agent"
language: "vi"
sources: "multi_source_search"
generated_by: "ai_agent_with_enhanced_search"
---
## Tổng quan

Tích hợp Mô hình Thông tin Công trình (BIM) với mô phỏng hiệu năng năng lượng là một phương pháp mạnh mẽ để thiết kế các tòa nhà hiệu năng cao, đặc biệt quan trọng trong điều kiện khí hậu nhiệt đới của Việt Nam. Sự kết hợp này cho phép đội ngũ thiết kế dự đoán mức tiêu thụ năng lượng một cách chính xác, đánh giá tác động của các chiến lược thiết kế khác nhau và tối ưu hóa hiệu năng tòa nhà ngay từ giai đoạn đầu của dự án. Ngoài việc tối ưu hóa hiệu năng, quy trình làm việc tích hợp này còn thiết yếu để chứng minh sự tuân thủ các hệ thống chứng nhận công trình xanh như LOTUS, được phát triển bởi Hội đồng Công trình Xanh Việt Nam (VGBC) [^2], [^3]. LOTUS trao điểm đáng kể cho hiệu quả năng lượng (hạng mục EN), thường yêu cầu mô phỏng để chứng minh hiệu năng so với công trình cơ sở [^4], [^1]. Hướng dẫn này cung cấp các bước thực tế và lưu ý cho các chuyên gia tại Việt Nam để tận dụng hiệu quả BIM cho mô phỏng năng lượng và đạt chứng nhận LOTUS.

## Quy trình từng bước

Quy trình bao gồm một số giai đoạn chính, bắt đầu từ mô hình BIM và kết thúc bằng kết quả mô phỏng được tài liệu hóa để nộp cho LOTUS.

### 1. Chuẩn bị mô hình BIM cho phân tích năng lượng

Bước cơ bản nhất là tạo ra một mô hình BIM phù hợp cho mô phỏng năng lượng. Điều này đòi hỏi nhiều hơn chỉ thông tin hình học; nó yêu cầu dữ liệu ngữ nghĩa (semantic data).
*   **Hình học mô hình**: Đảm bảo mô hình thể hiện chính xác vỏ công trình, bao gồm tường, mái, sàn, cửa sổ và các thiết bị che nắng. Hình học chính xác rất quan trọng để tính toán diện tích bề mặt và thể tích, là các thông số đầu vào cho phần mềm mô phỏng.
*   **Thuộc tính vật liệu**: Gán thuộc tính nhiệt cho vật liệu xây dựng. Điều này bao gồm hệ số dẫn nhiệt (k-value), nhiệt dung riêng, mật độ và độ dày lớp để tính toán giá trị U cho các cấu kiện mờ đục (opaque elements). Đối với các cấu kiện trong suốt, bao gồm giá trị U, Hệ số hấp thụ nhiệt mặt trời (SHGC) và Hệ số truyền sáng nhìn thấy (VLT).
*   **Dữ liệu không gian**: Xác định các vùng hoặc không gian tòa nhà với mục đích sử dụng dự kiến (ví dụ: văn phòng, nhà ở, bán lẻ). Thông tin này rất quan trọng để áp dụng tải trọng nội bộ (từ người sử dụng, chiếu sáng, thiết bị) và lịch hoạt động phù hợp.
*   **Định nghĩa hệ thống**: Mô hình sơ bộ hoặc định nghĩa các hệ thống HVAC, hệ thống chiếu sáng và hệ thống nước nóng sinh hoạt. Mặc dù mô hình cơ điện chi tiết có thể phức tạp, nhưng các loại hệ thống cơ bản và hiệu suất của chúng là cần thiết cho tính toán năng lượng.
*   **Làm sạch mô hình**: Loại bỏ các chi tiết hoặc đối tượng không cần thiết có thể làm phức tạp hoặc làm hỏng mô hình phân tích. Đảm bảo hình học sạch, không có khoảng trống hoặc bề mặt chồng chéo ngăn cản việc hình thành các vùng nhiệt.



![Minh họa cho Tận dụng BIM cho mô phỏng hiệu năng năng lượng và tuân thủ tiêu chuẩn LOTUS tại Việt Nam - phần 1](/images/guidelines/in-article-1-leveraging-bim-for-energy-performance-simulation-and-lotus-compliance-in-tropical-vietnam.jpg)



### 2. Xuất mô hình cho mô phỏng

Hầu hết các công cụ phần mềm mô phỏng năng lượng không sử dụng trực tiếp các tệp BIM gốc (như RVT hoặc PLN). Các định dạng tiêu chuẩn hóa là cần thiết.
*   **Chọn định dạng xuất file**: Các định dạng phổ biến nhất để xuất mô hình BIM cho phân tích năng lượng là gbXML (green building XML) và IFC (Industry Foundation Classes). gbXML được thiết kế đặc biệt để truyền dữ liệu hình học và thuộc tính nhiệt của tòa nhà đến các công cụ mô phỏng năng lượng. IFC cung cấp một bộ dữ liệu toàn diện hơn nhưng yêu cầu các công cụ mô phỏng có thể diễn giải dữ liệu kiến trúc và cơ điện của nó cho mục đích phân tích năng lượng.
*   **Thiết lập trình xuất file**: Cấu hình cài đặt xuất file trong phần mềm BIM. Điều này thường bao gồm việc chọn các yếu tố cần đưa vào, xác định các vùng nhiệt dựa trên không gian và chỉ định mức độ chi tiết cho hệ thống HVAC.
*   **Kiểm tra tệp xuất**: Sau khi xuất file, điều quan trọng là nhập tệp vào phần mềm mô phỏng hoặc một trình xem để kiểm tra lỗi. Tìm kiếm các hình học bị thiếu, vùng nhiệt không chính xác hoặc các bề mặt bị lật. Nhiều lỗi xảy ra trong giai đoạn xuất/nhập file và phải được giải quyết trong mô hình BIM gốc.

### 3. Thiết lập phần mềm mô phỏng năng lượng

Khi mô hình đã được nhập, phần mềm mô phỏng yêu cầu các đầu vào cụ thể để chạy phân tích.
*   **Dữ liệu thời tiết**: Chọn một tệp dữ liệu thời tiết đại diện cho vị trí của dự án tại Việt Nam. Dữ liệu thời tiết chính xác (nhiệt độ bầu khô, độ ẩm, bức xạ mặt trời, tốc độ gió) là tối quan trọng để mô phỏng hiệu năng tòa nhà trong khí hậu nhiệt đới. Các nguồn như tệp dữ liệu thời tiết EnergyPlus (EPW) thường được sử dụng.
*   **Lịch hoạt động**: Xác định lịch trình cho người sử dụng, chiếu sáng, sử dụng thiết bị và vận hành hệ thống HVAC dựa trên chức năng của tòa nhà và các mô hình sử dụng dự kiến.
*   **Tải trọng nội bộ**: Chỉ định lượng nhiệt tỏa ra từ người sử dụng, chiếu sáng và thiết bị trong mỗi vùng nhiệt. Sử dụng các giá trị thực tế dựa trên loại tòa nhà và mục đích thiết kế.
*   **Định nghĩa hệ thống HVAC**: Mô hình cấu hình hệ thống HVAC, bao gồm các loại hệ thống (ví dụ: VRF, Hệ thống làm lạnh Chiller, Điều hòa cục bộ), hiệu suất (ví dụ: COP, EER, SEER) và các chiến lược điều khiển (ví dụ: điểm đặt nhiệt độ, tỷ lệ thông gió).
*   **Các hệ thống khác**: Định nghĩa các thông số cho các hệ thống tiêu thụ năng lượng khác như nước nóng sinh hoạt, thang máy và bất kỳ hệ thống năng lượng tái tạo nào (ví dụ: năng lượng mặt trời PV).

### 4. Thực hiện mô phỏng năng lượng

Khi mô hình và các đầu vào đã sẵn sàng, quá trình mô phỏng có thể được thực hiện.
*   **Chạy mô phỏng**: Thực hiện mô phỏng trong cả một năm (8760 giờ) để thu thập hiệu năng qua tất cả các mùa và chế độ vận hành.
*   **Phân tích kết quả**: Xem xét các kết quả đầu ra từ mô phỏng, thường bao gồm tổng mức tiêu thụ năng lượng (điện, gas, v.v.), phân tích chi tiết mức sử dụng năng lượng theo từng mục đích sử dụng cuối (HVAC, chiếu sáng, thiết bị), tải đỉnh và các chỉ số tiện nghi nhiệt.
*   **Lặp lại và tối ưu hóa**: So sánh kết quả với các mục tiêu (ví dụ: ngân sách chi phí năng lượng, cải thiện hiệu năng so với công trình cơ sở). Xác định các lĩnh vực cần cải thiện và điều chỉnh các thông số thiết kế (ví dụ: mức độ cách nhiệt, tỷ lệ cửa sổ trên tường, che nắng, hiệu suất hệ thống, lịch trình). Chạy lại mô phỏng để đánh giá tác động của các thay đổi. Quá trình lặp lại này là nơi giá trị của mô phỏng cho việc tối ưu hóa thiết kế được hiện thực hóa.

### 5. Tài liệu hóa kết quả để tuân thủ tiêu chuẩn LOTUS

Chứng nhận LOTUS, đặc biệt theo hạng mục EN, yêu cầu chứng minh hiệu năng năng lượng.
*   **Công trình cơ sở (Baseline Building)**: Đối với các điểm tín chỉ như EN 1 (Hiệu năng Năng lượng), một mô hình công trình cơ sở phải được tạo dựa trên các yêu cầu cụ thể của LOTUS hoặc quy chuẩn xây dựng có liên quan (ví dụ: Quy chuẩn kỹ thuật quốc gia về các công trình xây dựng sử dụng năng lượng hiệu quả của Việt Nam, QCVN 09:2017/BXD hoặc các phiên bản sửa đổi sau [^6], hoặc tiêu chuẩn ASHRAE 90.1 [^8]). Mô hình công trình cơ sở này thường có hình học và hướng giống hệt công trình đề xuất nhưng sử dụng các yêu cầu bắt buộc theo quy định (prescriptive requirements) cho vỏ công trình, chiếu sáng và hiệu suất hệ thống HVAC [^4], [^1].
*   **So sánh hiệu năng**: Mô phỏng cả thiết kế đề xuất và công trình cơ sở bằng cách sử dụng cùng dữ liệu thời tiết, lịch trình và công cụ mô phỏng. Tính toán phần trăm cải thiện hiệu năng năng lượng (thường được đo bằng chi phí năng lượng hàng năm hoặc năng lượng nguồn - source energy) của thiết kế đề xuất so với công trình cơ sở.
*   **Báo cáo**: Chuẩn bị một báo cáo chi tiết nêu rõ phương pháp mô phỏng, các giả định đầu vào, hình học mô hình, định nghĩa công trình cơ sở, kết quả mô phỏng cho cả hai mô hình và phần trăm cải thiện hiệu năng năng lượng đã tính toán. Báo cáo này phải đáp ứng các yêu cầu tài liệu cụ thể được nêu trong sổ tay kỹ thuật LOTUS [^4], [^1]. Bao gồm các bảng tóm tắt và biểu đồ để trình bày rõ ràng các phát hiện.



![Minh họa cho Tận dụng BIM cho mô phỏng hiệu năng năng lượng và tuân thủ tiêu chuẩn LOTUS tại Việt Nam - phần 2](/images/guidelines/in-article-2-leveraging-bim-for-energy-performance-simulation-and-lotus-compliance-in-tropical-vietnam.jpg)



## Các thực hành tốt nhất

*   **Bắt đầu sớm**: Tích hợp BIM và mô phỏng năng lượng ngay từ giai đoạn thiết kế ý tưởng. Phân tích sớm có tiềm năng lớn nhất để ảnh hưởng đến các quyết định thiết kế và tối ưu hóa hiệu năng một cách hiệu quả về chi phí.
*   **Duy trì chất lượng mô hình**: Thiết lập các tiêu chuẩn mô hình hóa BIM nghiêm ngặt để đảm bảo tính chính xác và nhất quán của dữ liệu hình học và phi hình học cần thiết cho mô phỏng.
*   **Hợp tác**: Thúc đẩy giao tiếp giữa các kiến trúc sư, kỹ sư (cơ điện, kết cấu), chuyên gia mô hình năng lượng và nhà thầu. BIM tạo điều kiện thuận lợi cho sự phối hợp này, và kết quả mô phỏng năng lượng nên được sử dụng để đưa ra các thảo luận thiết kế.
*   **Sử dụng phần mềm phù hợp**: Chọn phần mềm mô phỏng phù hợp với độ phức tạp của dự án và mức độ chi tiết cần thiết. Đảm bảo khả năng tương thích với các định dạng xuất file của phần mềm BIM của bạn. EnergyPlus/OpenStudio, IES VE, DesignBuilder, Trane TRACE, eQUEST là các công cụ phổ biến.
*   **Kiểm tra đầu vào và đầu ra**: Không bao giờ tin tưởng một cách mù quáng vào kết quả mô phỏng. Xác minh dữ liệu đầu vào so với tài liệu thiết kế và điều kiện thực tế. Kiểm tra tính hợp lý của dữ liệu đầu ra.

## Các lưu ý khi triển khai tại Việt Nam

Thực hiện BIM và mô phỏng năng lượng tại Việt Nam liên quan đến việc giải quyết các yếu tố địa phương cụ thể:
*   **Khí hậu**: Khí hậu nhiệt đới của Việt Nam đặc trưng bởi nhiệt độ cao, độ ẩm cao và bức xạ mặt trời đáng kể quanh năm. Mô phỏng phải tính toán chính xác các điều kiện này, nhấn mạnh các chiến lược như làm mát thụ động, che nắng, tiềm năng thông gió tự nhiên (nếu phù hợp và có thể kiểm soát độ ẩm), và khử ẩm hiệu quả [^5].
*   **Vật liệu & thực hành xây dựng địa phương**: Sử dụng các thuộc tính nhiệt của các vật liệu phổ biến có sẵn tại địa phương. Hiểu rõ các phương pháp xây dựng điển hình và ý nghĩa của chúng đối với cầu nhiệt (thermal bridging) và rò rỉ khí (air leakage).
*   **Quy định**: Nắm rõ Quy chuẩn kỹ thuật quốc gia về các công trình xây dựng sử dụng năng lượng hiệu quả hiện hành của Việt Nam (QCVN 09) và cách nó có thể ảnh hưởng đến yêu cầu cơ sở cho LOTUS hoặc cung cấp các tiêu chuẩn hiệu năng bắt buộc [^6]. Mặc dù QCVN 09 có các phương pháp quy định (prescriptive pathways), mô phỏng dựa trên hiệu năng thường được yêu cầu để đạt điểm tín chỉ EN của LOTUS.
*   **Tính sẵn có của dữ liệu**: Việc tiếp cận dữ liệu thời tiết địa phương đáng tin cậy và dữ liệu hiệu năng cho các thiết bị và vật liệu cụ thể của địa phương đôi khi có thể gặp khó khăn. Tìm nguồn dữ liệu đáng tin cậy hoặc sử dụng các giá trị thay thế phù hợp.
*   **Đào tạo và chuyên môn**: Đảm bảo đội ngũ thiết kế và chuyên gia mô hình năng lượng có đủ đào tạo và kinh nghiệm với quy trình làm việc BIM cho mô phỏng và hiểu biết về vật lý công trình nhiệt đới.

## Yêu cầu tuân thủ (Đặc thù LOTUS)

Chứng nhận Công trình Xanh LOTUS cung cấp điểm tín chỉ trong nhiều hạng mục, trong đó hiệu quả năng lượng (EN) là rất quan trọng.
*   **LOTUS EN 1 - Hiệu năng Năng lượng**: Đây là điểm tín chỉ cốt lõi yêu cầu mô phỏng hiệu năng. Điểm thường được trao dựa trên phần trăm cải thiện chi phí năng lượng hàng năm hoặc mức tiêu thụ năng lượng nguồn của thiết kế đề xuất so với công trình cơ sở được định nghĩa [^4], [^1]. Định nghĩa công trình cơ sở (hình học, hướng, thuộc tính nhiệt, hiệu suất hệ thống) được quy định chặt chẽ bởi sổ tay kỹ thuật LOTUS, thường tham chiếu các tiêu chuẩn quốc tế như ASHRAE 90.1 hoặc quy chuẩn năng lượng của Việt Nam [^4], [^1].
*   **LOTUS EN 2 - Hiệu năng Năng lượng tối thiểu**: Là một điều kiện tiên quyết trong một số phiên bản LOTUS, đảm bảo đạt được mức độ hiệu quả năng lượng cơ bản, đôi khi được so sánh với công trình cơ sở đơn giản theo quy định hoặc yêu cầu của quy chuẩn.
*   **Tài liệu hóa**: Chuẩn bị một Báo cáo Mô phỏng Năng lượng toàn diện và điền các biểu mẫu nộp hồ sơ LOTUS theo yêu cầu, chứng minh sự tuân thủ các tiêu chí điểm tín chỉ. Báo cáo nên trình bày chi tiết công cụ mô phỏng, đầu vào, phương pháp luận, cấu trúc công trình cơ sở và kết quả thể hiện rõ ràng phần trăm cải thiện [^4]. VGBC cung cấp các mẫu và hướng dẫn cho việc nộp hồ sơ.

## Xử lý sự cố

Các vấn đề thường gặp trong quy trình BIM sang mô phỏng và cách khắc phục:
*   **Lỗi xuất file**: Các vấn đề về hình học (khoảng trống, chồng lấn, các cạnh không đơn nhất - non-manifold edges) trong mô hình BIM là nguyên nhân phổ biến nhất khiến việc xuất file gbXML hoặc IFC bị lỗi, hoặc gặp sự cố khi nhập vào phần mềm mô phỏng. Sử dụng các công cụ kiểm tra tính hợp lệ của mô hình trong phần mềm BIM trước khi xuất. Làm sạch và đơn giản hóa hình học.
*   **Vấn đề định nghĩa vùng nhiệt**: Đảm bảo các không gian được định nghĩa chính xác và liên kết để tạo thành các vùng nhiệt mạch lạc trong mô hình BIM trước khi xuất file. Kiểm tra ranh giới và thể tích vùng trong phần mềm mô phỏng.
*   **Mất dữ liệu trong quá trình xuất file**: Xác minh rằng các thuộc tính vật liệu, loại hệ thống và các dữ liệu phi hình học khác được truyền thành công qua định dạng xuất file. Điều chỉnh cài đặt xuất file hoặc bổ sung dữ liệu trực tiếp trong phần mềm mô phỏng nếu cần.
*   **Vấn đề hội tụ mô phỏng (Simulation Convergence Problems)**: Các mô hình lớn, phức tạp hoặc định nghĩa hệ thống HVAC không ổn định có thể khiến mô phỏng thất bại hoặc không hội tụ. Ban đầu, đơn giản hóa các mô hình hệ thống, kiểm tra các cài đặt điều khiển không thực tế và xem xét các thông báo lỗi mô phỏng để tìm manh mối.
*   **Sự khác biệt giữa BIM và kết quả mô phỏng**: Nếu kết quả mô phỏng có vẻ không chính xác, hãy kiểm tra lại tất cả các đầu vào – dữ liệu thời tiết, lịch trình, tải trọng nội bộ, thuộc tính vật liệu và hiệu suất HVAC. Đảm bảo mô hình phân tích phản ánh chính xác thiết kế kiến trúc và cơ điện.
*   **Diễn giải công trình cơ sở LOTUS**: Hiểu và mô hình hóa chính xác công trình cơ sở LOTUS là rất quan trọng. Tham khảo chặt chẽ sổ tay kỹ thuật LOTUS [^4], [^1] và bất kỳ hướng dẫn bổ sung nào do VGBC cung cấp. Tham khảo ý kiến của Chuyên gia LOTUS (LOTUS AP) nếu không chắc chắn.



![Minh họa cho Tận dụng BIM cho mô phỏng hiệu năng năng lượng và tuân thủ tiêu chuẩn LOTUS tại Việt Nam - phần 3](/images/guidelines/in-article-3-leveraging-bim-for-energy-performance-simulation-and-lotus-compliance-in-tropical-vietnam.jpg)



Bằng cách tuân thủ chặt chẽ các bước và thực hành tốt nhất này, đồng thời chú ý kỹ đến các yêu cầu cụ thể của khí hậu nhiệt đới và chứng nhận LOTUS, các chuyên gia tại Việt Nam có thể tận dụng hiệu quả sức mạnh của BIM cho mô phỏng hiệu năng năng lượng, dẫn đến các công trình bền vững và sử dụng năng lượng hiệu quả hơn.

---

### Tài liệu tham khảo

[^1]: [Lotus nc v4 consultation paper](https://vgbc.vn/wp-content/uploads/2025/01/LOTUS-NC-V4-CONSULTATION-PAPERENG.pdf)
[^2]: [Lotus green building standards](https://bicjsc.com/lotus-green-building-standards)
[^3]: [Develop lotus as a green building rating system](https://vgbc.vn/en/green-building-policies)
[^4]: [Lotus nc v3 – technical manual – June 2019 not for ...](https://vgbc.vn/wp-content/uploads/2019/08/LOTUS-NC-V3-Technical-Manual-Requirements.pdf)
[^5]: [An AI-driven model for predicting and optimizing energy ...](https://sciencedirect.com/science/article/pii/S1110016823007251)