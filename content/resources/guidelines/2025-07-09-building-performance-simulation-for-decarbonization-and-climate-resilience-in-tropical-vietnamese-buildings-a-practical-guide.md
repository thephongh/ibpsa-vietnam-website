---
title: "Mô phỏng Hiệu năng Công trình Xây dựng (BPS) để Giảm phát thải Carbon và Nâng cao Khả năng Chống chịu Khí hậu cho Các Công trình Nhiệt đới tại Việt Nam: Hướng dẫn Thực hành"
date: 2025-07-09
featured_image: "/images/guidelines/building-performance-simulation-for-decarbonization-and-climate-resilience-in-tropical-vietnamese-buildings-a-practical-guide.jpg"
draft: false
tags: ["IBPSA", "Building Performance", "Energy Efficiency", "Research", "Vietnam", "Automated Content"]
categories: ["Building Performance", "Research"]
author: "IBPSA Vietnam AI Agent"
language: "vi"
sources: "multi_source_search"
generated_by: "ai_agent_with_enhanced_search"
---
Tổng quan

Khí hậu nhiệt đới của Việt Nam đặt ra những thách thức và cơ hội riêng biệt cho thiết kế công trình. Nhiệt độ cao, độ ẩm lớn, bức xạ mặt trời gay gắt và tần suất ngày càng tăng của các sự kiện thời tiết cực đoan do biến đổi khí hậu đòi hỏi các phương pháp tiếp cận tinh vi để đảm bảo công trình sử dụng năng lượng hiệu quả, tiện nghi và có khả năng chống chịu. Mô phỏng Hiệu năng Công trình Xây dựng (Building Performance Simulation - BPS) là một công cụ mạnh mẽ cho phép kiến trúc sư, kỹ sư và chuyên gia tư vấn bền vững dự đoán mức tiêu thụ năng lượng, tiện nghi nhiệt và hiệu năng môi trường của công trình trong các điều kiện khác nhau. Hướng dẫn này cung cấp các bước thực tế để tận dụng BPS đặc biệt cho mục tiêu giảm phát thải carbon và nâng cao khả năng chống chịu khí hậu trong bối cảnh Việt Nam, giúp các chuyên gia nắm bắt các yêu cầu địa phương và tối đa hóa hiệu năng công trình trong điều kiện khí hậu khắc nghiệt.

Bằng cách mô hình hóa chính xác các luồng năng lượng (sưởi ấm, làm mát, thông gió, chiếu sáng, tải trọng thiết bị), động lực học về độ ẩm và tác động của các chiến lược thiết kế thụ động, BPS cho phép đưa ra các quyết định sáng suốt từ giai đoạn thiết kế ban đầu cho đến cải tạo. Đối với Việt Nam nhiệt đới, điều này rất quan trọng để giảm thiểu sự phụ thuộc vào hệ thống làm mát tiêu tốn nhiều năng lượng, thúc đẩy thông gió tự nhiên, kiểm soát độ ẩm và thiết kế để ứng phó với tình trạng tăng nhiệt, độ ẩm và các sự kiện lũ/gió tiềm ẩn được dự báo bởi các mô hình khí hậu [^1], [^2], [^3]. Cuối cùng, BPS hỗ trợ quá trình chuyển đổi sang môi trường xây dựng ít carbon hơn và nâng cao tuổi thọ cũng như chức năng của công trình khi đối mặt với biến đổi khí hậu. Thúc đẩy mục tiêu phát thải ròng bằng không (net-zero carbon) trong lĩnh vực xây dựng Việt Nam ngày càng trở nên quan trọng, và BPS là công cụ hỗ trợ chính cho mục tiêu này [^4].

Các bước thực hiện

1.  **Xác định Mục tiêu và Phạm vi Dự án:**
    *   Nêu rõ mục tiêu cần đạt được từ việc mô phỏng. Mục tiêu chính là tuân thủ quy chuẩn năng lượng (ví dụ: QCVN 09[^5])? Tối đa hóa tiết kiệm năng lượng? Đạt chứng nhận công trình xanh cụ thể (ví dụ: LOTUS[^6])? Nâng cao tiện nghi nhiệt? Đánh giá khả năng chống chịu trước các đợt nắng nóng hoặc sự cố mất điện trong tương lai? Giảm phát thải carbon bao gồm cả carbon vận hành và carbon trong vật liệu; BPS chủ yếu tập trung vào năng lượng vận hành, mặc dù các công cụ đánh giá vòng đời (lifecycle assessment) có thể tích hợp kết quả mô phỏng.
    *   Xác định mức độ chi tiết cần thiết. Đây là nghiên cứu hình khối ý tưởng hay phân tích chi tiết một hệ thống HVAC cụ thể?
    *   Thiết lập các mục tiêu hiệu năng (ví dụ: % giảm năng lượng so với trường hợp cơ sở, cường độ sử dụng năng lượng dự kiến - EUI, số giờ vượt quá giới hạn tiện nghi).

2.  **Thu thập Dữ liệu Đầu vào:**
    *   **Dữ liệu Khí hậu:** Thu thập các tệp dữ liệu thời tiết chính xác đại diện cho vị trí cụ thể của công trình tại Việt Nam. Tệp Năm Khí tượng Điển hình (TMY) là tiêu chuẩn cho mô phỏng năng lượng [^7]. Đối với các nghiên cứu khả năng chống chịu khí hậu, tìm nguồn hoặc xây dựng các tệp dữ liệu khí hậu tương lai phản ánh mức tăng nhiệt độ, thay đổi độ ẩm và các sự kiện cực đoan được dự báo dựa trên các mô hình khí hậu khu vực và kịch bản IPCC [^2], [^3]. ASHRAE cung cấp hướng dẫn về dữ liệu khí hậu và cách sử dụng trong mô phỏng [^7].
    *   **Hình khối và Đặc tính Công trình:** Bản vẽ kiến trúc chính xác là rất cần thiết. Mô hình hóa hình dạng công trình, hướng, các thiết bị che nắng (lam chắn nắng, ban công), tỷ lệ cửa sổ trên tường và bố cục nội thất. Xác định đặc tính vật liệu (độ dẫn nhiệt, khối lượng riêng, nhiệt dung riêng, độ hấp thụ bức xạ, độ phát xạ) cho tường, mái, sàn và hệ thống kính. Đặc biệt chú ý đến các cầu nhiệt, đặc biệt trong các kết cấu bê tông phổ biến ở Việt Nam.
    *   **Tải trọng Nội bộ:** Xác định lịch trình sử dụng và mật độ người ở, mật độ công suất chiếu sáng và mật độ công suất thiết bị một cách thực tế dựa trên loại công trình và mục đích sử dụng dự kiến [^5], [^6].
    *   **Hệ thống HVAC:** Xác định loại, hiệu suất (COP, EER, SEER), chiến lược điều khiển và phân vùng của hệ thống HVAC. Mô hình hóa tiềm năng thông gió tự nhiên, quạt trần và các chiến lược hút ẩm là rất quan trọng đối với khí hậu nhiệt đới.
    *   **Lịch trình Hoạt động:** Chi tiết thời gian công trình có người sử dụng, thời gian hệ thống hoạt động và lịch trình chiếu sáng.

3.  **Xây dựng Mô hình Mô phỏng:**
    *   Sử dụng phần mềm BPS phù hợp (ví dụ: EnergyPlus thông qua các giao diện như OpenStudio, DesignBuilder; IESVE; TRNSYS; eQUEST). Chọn phần mềm có khả năng mô hình hóa chính xác khối lượng nhiệt, tăng nhiệt do bức xạ mặt trời, thông gió tự nhiên và ảnh hưởng của độ ẩm.
    *   Xây dựng hình học 3D. Đảm bảo định nghĩa vùng chính xác phù hợp với phân vùng HVAC và mục đích sử dụng.
    *   Gán đặc tính vật liệu và cấu tạo cho tất cả các bề mặt. Kiểm tra lại hệ số truyền nhiệt U, hệ số hấp thụ nhiệt mặt trời (SHGC) và hệ số truyền sáng nhìn thấy cho cửa sổ. Đối với khí hậu nhiệt đới, việc giảm thiểu tăng nhiệt do bức xạ mặt trời thông qua SHGC và các thiết bị che nắng bên ngoài phù hợp là ưu tiên hàng đầu.
    *   Nhập tải trọng nội bộ và lịch trình hoạt động.
    *   Mô hình hóa hệ thống HVAC, bao gồm cả các bộ điều khiển như bộ điều nhiệt (thermostat), bộ điều hòa gió ngoài (economizer - nếu áp dụng), và có thể là điểm đặt hút ẩm. Đối với thông gió tự nhiên, xác định cửa sổ có thể mở được và chiến lược điều khiển thông gió dựa trên nhiệt độ hoặc CO2.



![Minh họa cho Mô phỏng Hiệu năng Công trình Xây dựng (BPS) để Giảm phát thải Carbon và Nâng cao Khả năng Chống chịu Khí hậu cho Các Công trình Nhiệt đới tại Việt Nam: Hướng dẫn Thực hành - phần 1](/images/guidelines/in-article-1-building-performance-simulation-for-decarbonization-and-climate-resilience-in-tropical-vietnamese-buildings-a-practical-guide.jpg)



4.  **Mô phỏng Trường hợp Cơ sở và Các Biến thể Thiết kế:**
    *   Chạy mô phỏng cho một trường hợp cơ sở. Đây có thể là một công trình tối thiểu theo quy chuẩn (ví dụ: tuân thủ QCVN 09[^5]), một công trình theo thực hành phổ biến, hoặc tình trạng hiện tại đối với dự án cải tạo.
    *   Tạo và mô phỏng các biến thể kết hợp các biện pháp hiệu quả năng lượng và khả năng chống chịu được đề xuất. Các ví dụ cho Việt Nam nhiệt đới bao gồm:
        *   Cải thiện cách nhiệt tường và mái (mặc dù ít quan trọng hơn so với kiểm soát bức xạ mặt trời trong khí hậu nóng, nhưng vẫn có tác dụng).
        *   Cửa sổ hiệu suất cao (SHGC thấp, hệ số truyền nhiệt U phù hợp).
        *   Thiết bị che nắng tối ưu (hướng, độ sâu).
        *   Chiến lược thông gió tự nhiên nâng cao (thông gió đối lưu ngang, hiệu ứng ống khói) kết hợp với quạt trần.
        *   Hệ thống HVAC hiệu suất cao.
        *   Các kỹ thuật làm mát thụ động (khối lượng nhiệt với xả nhiệt ban đêm, làm mát bay hơi - cần xem xét độ ẩm).
        *   Thiết kế chiếu sáng và hệ thống điều khiển tối ưu.
        *   Mái xanh hoặc mái phản xạ nhiệt để giảm hấp thụ bức xạ mặt trời.
    *   Đối với các nghiên cứu khả năng chống chịu, mô phỏng hiệu năng trong các tệp dữ liệu khí hậu tương lai hoặc trong các sự kiện cực đoan giả định (ví dụ: mất điện kéo dài kết hợp với đợt nắng nóng).

5.  **Phân tích Kết quả:**
    *   Phân tích tổng mức tiêu thụ năng lượng và phân chia theo mục đích sử dụng cuối cùng (làm mát, chiếu sáng, quạt, thiết bị). Điều này liên quan trực tiếp đến nỗ lực giảm phát thải carbon bằng cách giảm carbon vận hành.
    *   Đánh giá công suất đỉnh (peak demand), ảnh hưởng đến sự ổn định lưới điện và tiềm năng tính phí theo nhu cầu.
    *   Đánh giá tiện nghi nhiệt bằng cách sử dụng các chỉ số liên quan. Tiêu chuẩn ASHRAE 55[^8] được sử dụng rộng rãi, nhưng các mô hình tiện nghi thích ứng (như giới hạn tiện nghi thích ứng của ASHRAE 55 hoặc tiêu chuẩn tiện nghi thích ứng EN 15251/EN 16798) thường phù hợp hơn cho các công trình thông gió tự nhiên hoặc hỗn hợp trong khí hậu nhiệt đới nơi người sử dụng có thể thích ứng với điều kiện ấm hơn [^9]. Phân tích các chỉ số như Chỉ số Trung bình Dự đoán (PMV), Phần trăm Người không Hài lòng Dự đoán (PPD) và sự tuân thủ các vùng tiện nghi thích ứng.
    *   Đối với khả năng chống chịu khí hậu, phân tích cách tiện nghi nhiệt và nhiệt độ trong nhà được duy trì trong các sự kiện nắng nóng cực đoan hoặc mất điện, hoặc cách mức tiêu thụ năng lượng thay đổi theo các kịch bản khí hậu tương lai. Xem xét các chỉ số như số giờ vượt quá nhiệt độ giới hạn hoặc nhiệt độ đỉnh trong nhà.
    *   So sánh hiệu năng của các biến thể thiết kế với trường hợp cơ sở. Định lượng mức tiết kiệm năng lượng, tiết kiệm chi phí (sử dụng biểu giá điện địa phương), giảm phát thải khí nhà kính và cải thiện tiện nghi hoặc khả năng chống chịu.



![Minh họa cho Mô phỏng Hiệu năng Công trình Xây dựng (BPS) để Giảm phát thải Carbon và Nâng cao Khả năng Chống chịu Khí hậu cho Các Công trình Nhiệt đới tại Việt Nam: Hướng dẫn Thực hành - phần 2](/images/guidelines/in-article-2-building-performance-simulation-for-decarbonization-and-climate-resilience-in-tropical-vietnamese-buildings-a-practical-guide.jpg)



6.  **Báo cáo Kết quả và Khuyến nghị:**
    *   Trình bày kết quả một cách rõ ràng, sử dụng biểu đồ để minh họa phân chia năng lượng, mức tiết kiệm và các chỉ số tiện nghi.
    *   Giải thích tác động của từng biện pháp đã phân tích.
    *   Đưa ra các khuyến nghị có tính khả thi cho nhóm thiết kế dựa trên kết quả mô phỏng. Ưu tiên các biện pháp dựa trên hiệu quả, phân tích chi phí-lợi ích và sự phù hợp với mục tiêu dự án.
    *   Lưu lại tài liệu về tất cả các giả định, nguồn dữ liệu đầu vào, phần mềm mô phỏng được sử dụng và chi tiết mô hình để đảm bảo tính minh bạch và khả năng tái tạo.

Các Thực hành Tốt nhất

*   **Ưu tiên Thiết kế Thụ động:** Trong khí hậu nhiệt đới, các chiến lược thụ động như hướng, che nắng, thông gió tự nhiên và khối lượng nhiệt (được sử dụng một cách chiến lược) thường là những cách hiệu quả và tiết kiệm chi phí nhất để giảm nhu cầu năng lượng và cải thiện tiện nghi [^9]. Mô phỏng kỹ lưỡng các yếu tố này trước khi tối ưu hóa các hệ thống chủ động. Cải thiện hiệu năng nhiệt của công trình thông qua cách tiếp cận dựa trên vỏ công trình đặc biệt hiệu quả [^5].
*   **Sử dụng Dữ liệu Thời tiết Phù hợp:** Đảm bảo tệp dữ liệu thời tiết thể hiện chính xác khí hậu địa phương, bao gồm nhiệt độ, độ ẩm (điểm sương), bức xạ mặt trời và tốc độ/hướng gió. Đối với khả năng chống chịu, nên khám phá nhiều kịch bản khí hậu tương lai.
*   **Mô hình hóa Che nắng Chính xác:** Che nắng bên ngoài là rất quan trọng. Mô hình hóa các lam chắn nắng, ban công, các tấm chắn và các công trình xung quanh một cách chính xác. Che nắng bên trong (rèm, màn) ít hiệu quả hơn nhưng cũng nên được xem xét nếu đó là một phần của chiến lược vận hành.
*   **Tính đến Độ ẩm:** Khí hậu nhiệt đới có độ ẩm cao, ảnh hưởng đáng kể đến tiện nghi nhiệt và năng lượng làm mát (tải nhiệt ẩm). Đảm bảo công cụ mô phỏng của bạn xử lý nhiệt ẩn một cách chính xác và xem xét các chiến lược hút ẩm. Các mô hình tiện nghi thích ứng có thể tính đến ảnh hưởng của độ ẩm đối với cảm nhận tiện nghi.
*   **Xác thực Mô hình của Bạn (nếu có thể):** Đối với các công trình hiện hữu đang được cải tạo, hiệu chuẩn mô hình dựa trên hóa đơn năng lượng thực tế và các phép đo nhiệt độ để tăng độ tin cậy của kết quả mô phỏng.
*   **Thực hiện Phân tích Độ nhạy:** Nghiên cứu xem sự thay đổi trong các thông số chính (ví dụ: SHGC cửa sổ, mức độ cách nhiệt, lịch trình sử dụng) ảnh hưởng như thế nào đến hiệu năng tổng thể. Điều này giúp xác định các quyết định thiết kế có tác động lớn nhất.
*   **Xem xét Hành vi Người sử dụng:** Hiệu năng công trình bị ảnh hưởng nặng nề bởi cách người sử dụng sử dụng không gian và hệ thống (ví dụ: mở cửa sổ, điều chỉnh bộ điều nhiệt). Mặc dù khó dự đoán chính xác, hãy xem xét các kịch bản khác nhau hoặc sử dụng các mô hình hành vi thực tế nếu có.
*   **Tích hợp với Quy trình Thiết kế:** BPS hiệu quả nhất khi được sử dụng lặp đi lặp lại trong suốt quá trình thiết kế, chứ không chỉ là kiểm tra tuân thủ sau khi thiết kế hoàn thành.

Các Lưu ý khi Triển khai tại Việt Nam

*   **Các Quy chuẩn và Tiêu chuẩn Địa phương:** Nắm vững QCVN 09/BXD [^5], quy chuẩn kỹ thuật quốc gia về các công trình xây dựng sử dụng năng lượng hiệu quả của Việt Nam. BPS là phương pháp được chấp nhận để chứng minh sự tuân thủ, đặc biệt đối với các phương pháp quy định cụ thể (prescriptive) và phương pháp tính toán hiệu năng (performance-based). Hệ thống Đánh giá Công trình xanh LOTUS [^6] cũng phụ thuộc nhiều vào BPS để đạt được các tín chỉ năng lượng.
*   **Các Công nghệ và Vật liệu Sẵn có:** Hiểu rõ các vật liệu và hệ thống xây dựng điển hình sẵn có tại địa phương. Chỉ định các vật liệu và công nghệ có thể tiếp cận và bảo trì được ở Việt Nam.
*   **Tính Dễ bị Tổn thương trước Biến đổi Khí hậu:** Việt Nam rất dễ bị tổn thương trước các tác động của biến đổi khí hậu, bao gồm mực nước biển dâng, tần suất các đợt nắng nóng gia tăng và sự thay đổi mô hình lượng mưa [^2], [^3]. Kết hợp phân tích dữ liệu khí hậu tương lai vào mô phỏng của bạn, đặc biệt đối với các công trình có tuổi thọ dài. Xem xét các chiến lược chống chịu vượt ra ngoài hiệu quả năng lượng, chẳng hạn như thiết kế để có khả năng tồn tại thụ động (passive survivability) trong thời gian mất điện khi nắng nóng cực đoan.
*   **Tính Sẵn có của Dữ liệu:** Mặc dù các tệp TMY có sẵn, dữ liệu khí hậu địa phương chi tiết cho các tiểu khí hậu cụ thể hoặc các dự báo tương lai có thể bị hạn chế và đòi hỏi nguồn cung cấp cẩn thận hoặc thu nhỏ (downscaling). Thông tin về hiệu năng thực tế của các vật liệu và hệ thống xây dựng địa phương cũng có thể cần điều tra thực địa hoặc tham khảo các nghiên cứu khu vực [^5].
*   **Nâng cao Năng lực:** Nhu cầu về các chuyên gia BPS lành nghề ở Việt Nam ngày càng tăng [^1]. Đầu tư vào đào tạo và phát triển chuyên môn là rất quan trọng để mở rộng việc sử dụng và nâng cao chất lượng các nghiên cứu mô phỏng.



![Minh họa cho Mô phỏng Hiệu năng Công trình Xây dựng (BPS) để Giảm phát thải Carbon và Nâng cao Khả năng Chống chịu Khí hậu cho Các Công trình Nhiệt đới tại Việt Nam: Hướng dẫn Thực hành - phần 3](/images/guidelines/in-article-3-building-performance-simulation-for-decarbonization-and-climate-resilience-in-tropical-vietnamese-buildings-a-practical-guide.jpg)



Yêu cầu Tuân thủ

BPS chủ yếu được sử dụng ở Việt Nam để chứng minh sự tuân thủ phương pháp tính toán hiệu năng của QCVN 09/BXD [^5]. Điều này đòi hỏi so sánh hiệu năng năng lượng được mô phỏng của thiết kế đề xuất với mô hình công trình cơ sở đáp ứng các yêu cầu tối thiểu theo quy định cụ thể của quy chuẩn. Việc mô phỏng phải tuân theo các quy tắc mô hình hóa và định dạng báo cáo cụ thể được định nghĩa trong quy chuẩn hoặc các hướng dẫn đi kèm.

Đối với chứng nhận LOTUS [^6], BPS là công cụ thiết yếu để đạt các tín chỉ trong hạng mục Năng lượng, đặc biệt là để tối ưu hóa hiệu năng năng lượng. Yêu cầu về tín chỉ quy định các định nghĩa trường hợp cơ sở, khả năng của phần mềm mô phỏng và tiêu chuẩn báo cáo, thường phù hợp với các thực hành tốt nhất quốc tế như Phụ lục G của ASHRAE Standard 90.1 hoặc ASHRAE Standard 189.1[^10].

Khắc phục sự cố

*   **Lỗi Dữ liệu Đầu vào:** Hình học không chính xác, đặc tính vật liệu, lịch trình hoặc đầu vào HVAC là những nguồn lỗi phổ biến. Kiểm tra kỹ lưỡng tất cả các đầu vào.
*   **Mô hình hóa Hệ thống Phức tạp:** Mô hình hóa chính xác các hệ thống HVAC, bộ điều khiển hoặc tương tác thông gió tự nhiên phức tạp có thể là thách thức. Tham khảo tài liệu phần mềm, hướng dẫn hoặc tìm kiếm lời khuyên từ chuyên gia.
*   **Các Vấn đề Hội tụ:** Mô phỏng có thể không hội tụ nếu mô hình không ổn định hoặc chứa lỗi. Kiểm tra thông báo lỗi và tinh chỉnh hình học mô hình hoặc định nghĩa hệ thống.
*   **Diễn giải Kết quả:** Đầu ra mô phỏng có thể rất lớn. Tập trung vào các chỉ số chính (EUI, tải đỉnh, số giờ tiện nghi) và hiểu ý nghĩa của chúng trong bối cảnh mục tiêu dự án và khí hậu nhiệt đới. Đừng coi kết quả mô phỏng là sự thật tuyệt đối, mà là các dự đoán mang tính chỉ báo dựa trên các giả định.
*   **Hạn chế của Phần mềm:** Lưu ý đến khả năng và hạn chế của phần mềm BPS đã chọn, đặc biệt liên quan đến việc mô hình hóa các chiến lược thụ động cụ thể, độ ẩm hoặc các trình tự điều khiển phức tạp.

Bằng cách tuân thủ các hướng dẫn thực tế này và áp dụng BPS một cách chu đáo, các chuyên gia tại Việt Nam có thể thiết kế và đánh giá các công trình không chỉ đáp ứng các tiêu chuẩn hiệu quả năng lượng hiện hành mà còn đóng góp vào các mục tiêu giảm phát thải carbon và có khả năng chống chịu trước các tác động không thể tránh khỏi của biến đổi khí hậu. Điều này rất quan trọng cho sự phát triển bền vững của Việt Nam và sự thịnh vượng của người dân.

---

### Tài liệu tham khảo

[^1]: [Advancing building performance simulation education ...](https://tandfonline.com/doi/full/10.1080/19401493.2025.2493866?src=)
[^2]: [Building Coastal Resilience in Vietnam An integrated, ...](https://careclimatechange.org/wp-content/uploads/2016/02/Building-Coastal-Resilience-in-Vietnam.pdf)
[^3]: [Vietnam's Climate Resilience Journey Still Has Ways to Go](https://amro-asia.org/vietnams-climate-resilience-journey-still-has-ways-to-go)
[^4]: [Promoting net-zero carbon in the Vietnamese construction ...](https://emerald.com/insight/content/doi/10.1108/sasbe-04-2024-0128/full/pdf?title=promoting-net-zero-carbon-in-the-vietnamese-construction-sector-potential-benefits-and-challenges-identified-by-key-stakeholders)
[^5]: [Improving building thermal performance through an ...](https://sciencedirect.com/science/article/abs/pii/S0378778821008057)
[^6]: [LOTUS Green Building](https://vgbc.vn/lotus-green-building/)
[^7]: [ASHRAE Weather Data](https://www.ashrae.org/technical-resources/bookstore/weather-data)
[^8]: [ASHRAE Standard 55](https://www.ashrae.org/technical-resources/bookstore/standard-55-thermal-environmental-conditions-for-human-occupancy)
[^9]: [Adaptive thermal comfort in buildings: The subjective ...](https://www.sciencedirect.com/science/article/abs/pii/S037877881930453X)
[^10]: [ASHRAE Standard 189.1](https://www.ashrae.org/technical-resources/bookstore/standard-189-1-standard-for-the-design-of-high-performance-green-buildings)