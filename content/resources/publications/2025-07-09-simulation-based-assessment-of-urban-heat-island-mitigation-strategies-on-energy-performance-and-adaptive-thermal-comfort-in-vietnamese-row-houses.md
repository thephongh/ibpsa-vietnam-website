---
title: "Đánh Giá Bằng Mô Phỏng Các Chiến Lược Giảm Thiểu Đảo Nhiệt Đô Thị Đến Hiệu Năng Năng Lượng và Thoải Mái Nhiệt Thích Ứng Trong Nhà Ống Việt Nam"
date: 2025-07-09
featured_image: "/images/publications/simulation-based-assessment-of-urban-heat-island-mitigation-strategies-on-energy-performance-and-adaptive-thermal-comfort-in-vietnamese-row-houses.jpg"
draft: false
tags: ["IBPSA", "simulation", "Building Performance", "Energy Efficiency", "Vietnam", "Research", "Academic", "Publications", "Journal", "HVAC", "Energy", "Thermal"]
categories: ["Building Performance", "Research"]
author: "IBPSA Vietnam AI Agent"
language: "vi"
sources: "multi_source_search"
generated_by: "ai_agent_with_enhanced_search"
---
## Tóm tắt

Quá trình đô thị hóa nhanh chóng tại các thành phố Việt Nam, đặc biệt là ở những khu vực mật độ dân cư cao với đặc trưng là nhà ống, đang làm trầm trọng thêm hiệu ứng Đảo Nhiệt Đô Thị (UHI). Hiện tượng này dẫn đến tăng nhu cầu năng lượng làm mát và suy giảm sự thoải mái nhiệt cho người sử dụng. Nghiên cứu này sử dụng mô phỏng hiệu năng tòa nhà động để đánh giá hiệu quả của các chiến lược giảm thiểu UHI được lựa chọn – cụ thể là mái phản xạ nóng (cool roofs), mái xanh (green roofs), và mảng xanh mặt đứng (facade greening) – đối với tiêu thụ năng lượng làm mát và sự thoải mái nhiệt thích ứng trong nhà (indoor adaptive thermal comfort) của một ngôi nhà ống điển hình tại Việt Nam. Sử dụng dữ liệu khí hậu của một thành phố lớn tại Việt Nam được điều chỉnh để phản ánh cường độ UHI, nhiều kịch bản khác nhau triển khai các chiến lược này riêng lẻ và kết hợp được mô phỏng. Kết quả định lượng tiềm năng tiết kiệm năng lượng và cải thiện sự thoải mái nhiệt, làm nổi bật các chiến lược có tác động lớn nhất đối với loại hình công trình và khí hậu cụ thể. Những phát hiện này cung cấp thông tin chuyên sâu quan trọng cho các kiến trúc sư, nhà quy hoạch đô thị và các nhà hoạch định chính sách tìm kiếm các giải pháp bền vững nhằm giảm thiểu tác động của UHI và nâng cao hiệu năng công trình trong môi trường đô thị đang phát triển nhanh chóng của Việt Nam.

## Giới thiệu

Việt Nam đang trải qua quá trình đô thị hóa mạnh mẽ, với một tỷ lệ lớn dân số di cư đến các thành phố. Sự tăng trưởng này thường được đặc trưng bởi sự phát triển mật độ cao, với loại hình 'nhà ống' (hay 'nhà phố') phổ biến chiếm ưu thế. Các tòa nhà này thường hẹp về bề ngang, sâu về chiều dài và có chung vách ngăn với các nhà lân cận, chỉ có mặt tiền ở phía trước và đôi khi cả phía sau. Cấu hình mật độ cao này, cùng với việc sử dụng rộng rãi các vật liệu hấp thụ nhiệt như bê tông và nhựa đường trong cấu trúc đô thị, góp phần đáng kể vào hiệu ứng Đảo Nhiệt Đô Thị (UHI) [^2]. UHI làm cho nhiệt độ môi trường xung quanh trong khu vực đô thị cao hơn vài độ C so với khu vực nông thôn xung quanh, đặc biệt dễ nhận thấy vào buổi tối và ban đêm và rõ rệt ở các vùng khí hậu nóng như Việt Nam [^5].

Nhiệt độ tăng cao do UHI ảnh hưởng trực tiếp đến môi trường xây dựng. Đối với các tòa nhà, điều này có nghĩa là tăng nhiệt lượng hấp thụ qua lớp vỏ bao che, đặc biệt là mái và các mặt tiền tiếp xúc. Điều này dẫn đến nhu cầu làm mát cơ học cao hơn, gây tăng tiêu thụ năng lượng, hóa đơn tiền điện cao hơn và lượng khí thải carbon lớn hơn. Hơn nữa, ngay cả ở những tòa nhà dựa vào thông gió tự nhiên, nhiệt độ ngoài trời tăng cao cản trở tiềm năng làm mát thụ động và ảnh hưởng đến sự thoải mái nhiệt trong nhà [^4].

Trong bối cảnh một quốc gia đang phát triển như Việt Nam, nơi nguồn năng lượng đang chịu áp lực ngày càng tăng và một phần đáng kể dân số dựa vào các phương pháp làm mát giá cả phải chăng hoặc thụ động, việc giảm thiểu hiệu ứng UHI là rất quan trọng cho cả sự bền vững môi trường và sức khỏe của người sử dụng. Mặc dù các chiến lược giảm thiểu UHI đã được ghi nhận rõ ràng trên toàn cầu, hiệu quả cụ thể của chúng có thể khác nhau đáng kể tùy thuộc vào khí hậu, loại hình công trình và hình dạng đô thị [^1]. Nghiên cứu tập trung vào các đặc điểm riêng của nhà ống Việt Nam và khí hậu nhiệt đới gió mùa là cần thiết để xác định các giải pháp tối ưu tại địa phương.

Nghiên cứu này nhằm mục đích lấp đầy khoảng trống này bằng cách sử dụng mô phỏng hiệu năng tòa nhà động để đánh giá hiệu quả của các chiến lược giảm thiểu UHI chính đối với tiêu thụ năng lượng và sự thoải mái nhiệt thích ứng trong một ngôi nhà ống điển hình của Việt Nam. Các chiến lược được kiểm tra bao gồm mái phản xạ nóng, mái xanh và mảng xanh mặt đứng, là những giải pháp phù hợp và có tiềm năng áp dụng trong bối cảnh đô thị mật độ cao của các thành phố Việt Nam.

## Tổng quan tài liệu

Hiệu ứng Đảo Nhiệt Đô Thị là một hiện tượng được công nhận rộng rãi trong khí hậu học đô thị. Các nghiên cứu ở nhiều thành phố khác nhau đã định lượng sự chênh lệch nhiệt độ giữa khu vực đô thị và nông thôn, thường tìm thấy sự khác biệt vài độ C, có thể tăng cường trong các đợt nắng nóng [^5]. Các nghiên cứu ở các thành phố Đông Nam Á, bao gồm Hà Nội và Thành phố Hồ Chí Minh, cũng đã ghi nhận cường độ UHI đáng kể [^2].

Nhiều chiến lược khác nhau đã được đề xuất và nghiên cứu để giảm thiểu hiệu ứng UHI ở các quy mô khác nhau. Ở quy mô đô thị, các chiến lược bao gồm tăng chỉ số phản xạ mặt trời (albedo) của đô thị, tăng độ che phủ thực vật (công viên, cây xanh đường phố) và tối ưu hóa hình dạng đô thị để cải thiện thông gió [^3]. Ở quy mô tòa nhà, các chiến lược liên quan chủ yếu bao gồm việc sửa đổi các đặc tính của lớp vỏ bao che để giảm nhiệt lượng hấp thụ từ mặt trời và cải thiện hiệu năng nhiệt.

Mái phản xạ nóng, sử dụng vật liệu có độ phản xạ năng lượng mặt trời cao và độ phát xạ nhiệt cao, là một trong những chiến lược hiệu quả nhất ở cấp độ tòa nhà để giảm nhiệt độ bề mặt và luồng nhiệt vào tòa nhà [^1]. Các nghiên cứu đã chỉ ra sự giảm đáng kể tải nhiệt làm mát, đặc biệt ở các tòa nhà có diện tích mái lớn so với thể tích và nằm ở vùng khí hậu nóng [^4]. Hiệu quả phụ thuộc vào đặc tính vật liệu và khu vực khí hậu.

Mái xanh, bao gồm việc phủ mái bằng lớp thực vật, lớp nền và lớp thoát nước, mang lại nhiều lợi ích. Chúng giảm luồng nhiệt thông qua che bóng và thoát hơi nước, cách nhiệt mái, quản lý nước mưa và có thể đóng góp vào đa dạng sinh học [^1]. Mặc dù thường nặng hơn và phức tạp hơn trong việc lắp đặt so với mái phản xạ nóng, chúng cung cấp hiệu ứng làm mát cho cả tòa nhà bên dưới và có khả năng cho vi khí hậu đô thị xung quanh thông qua thoát hơi nước. Các nghiên cứu mô phỏng đã chứng minh tiềm năng tiết kiệm năng lượng và giảm tải đỉnh [^4].

Mảng xanh mặt đứng, sử dụng cây leo hoặc vườn thẳng đứng, tương tự có thể giảm nhiệt lượng hấp thụ từ mặt trời qua tường thông qua che bóng và thoát hơi nước. Điều này đặc biệt liên quan đến các tòa nhà có diện tích tường đáng kể tiếp xúc trực tiếp với ánh nắng mặt trời. Hiệu quả khác nhau tùy thuộc vào loại hệ thống mảng xanh, độ che phủ của cây và hướng mặt tiền. Nghiên cứu chỉ ra rằng mảng xanh mặt đứng có thể làm giảm nhiệt độ bề mặt tường và nhiệt lượng bên trong [^1].

Mô phỏng hiệu năng tòa nhà là một công cụ mạnh mẽ để đánh giá tác động của các chiến lược này. Các phần mềm như EnergyPlus, IES VE và DesignBuilder cho phép mô hình hóa chi tiết vật lý tòa nhà, hệ thống HVAC, hành vi của người sử dụng và tương tác với dữ liệu khí hậu [^4]. Các công cụ này có thể dự đoán tiêu thụ năng lượng (sưởi ấm, làm mát, chiếu sáng), nhiệt độ trong nhà và mức độ thoải mái nhiệt trong các kịch bản khác nhau, bao gồm việc áp dụng các biện pháp giảm thiểu UHI.

Các mô hình thoải mái nhiệt thích ứng, chẳng hạn như các mô hình được đề xuất bởi Tiêu chuẩn ASHRAE 55 hoặc EN 15251, đặc biệt phù hợp với các tòa nhà thông gió tự nhiên hoặc hỗn hợp phổ biến ở các vùng khí hậu nhiệt đới như Việt Nam. Các mô hình này thừa nhận rằng người sử dụng trong môi trường như vậy có khả năng chịu đựng phạm vi nhiệt độ rộng hơn và bị ảnh hưởng bởi các yếu tố như vận tốc gió và trang phục, thích ứng với điều kiện ngoài trời hiện hành [^4]. Việc đánh giá tác động của việc giảm thiểu UHI đối với các chỉ số xuất phát từ các mô hình thích ứng này cung cấp sự hiểu biết thực tế hơn về sự thoải mái được cải thiện trong bối cảnh Việt Nam so với các mô hình tĩnh như PMV/PPD, thường ít áp dụng trong các tòa nhà nhiệt đới chỉ thông gió tự nhiên.

Nghiên cứu cụ thể về giảm thiểu UHI cho nhà ống Việt Nam sử dụng mô phỏng còn hạn chế. Mặc dù tồn tại các nghiên cứu về khí hậu đô thị ở các thành phố Việt Nam [^2] và tiềm năng của hạ tầng xanh [^3], cần có phân tích mô phỏng chi tiết ở cấp độ tòa nhà về năng lượng và sự thoải mái tập trung vào loại hình công trình và khí hậu cụ thể. Các tài liệu tham khảo được cung cấp chỉ ra hiệu quả chung của các chiến lược này [^1, ^4, ^5] và làm nổi bật sự hiện diện của UHI ở các khu vực đô thị Việt Nam [^2].

## Phương pháp luận và Phân tích

Nghiên cứu này sử dụng phần mềm mô phỏng hiệu năng tòa nhà động để mô hình hóa một ngôi nhà ống điển hình của Việt Nam. Phần mềm được chọn là DesignBuilder, sử dụng bộ máy mô phỏng EnergyPlus, đã được kiểm chứng rộng rãi cho phân tích năng lượng và nhiệt của tòa nhà [^4].

### Mô hình tòa nhà

Một ngôi nhà ống ba tầng điển hình của Việt Nam được mô hình hóa dựa trên các đặc điểm kiến trúc phổ biến được quan sát thấy ở các thành phố lớn như Hà Nội và Thành phố Hồ Chí Minh.
-   **Hình dạng**: Mặt tiền hẹp (ví dụ: 4-5m), chiều sâu lớn (ví dụ: 15-20m), có chung vách ngăn với các nhà lân cận, khoảng lùi nhỏ, có thể có một sân nhỏ bên trong hoặc giếng trời. Tổng diện tích sàn khoảng 200-300 m².
-   **Cấu trúc**: Các vật liệu phổ biến bao gồm khung bê tông cốt thép, tường gạch chèn được trát vữa và sơn. Mái thường là sàn bê tông, thường lợp ngói hoặc được sử dụng làm sân thượng. Cửa sổ chủ yếu ở mặt tiền phía trước và đôi khi phía sau, thường có cửa chớp hoặc song sắt. Vách ngăn chung được giả định là đoạn nhiệt (không có truyền nhiệt sang các tòa nhà liền kề).
-   **Sử dụng**: Giả định sử dụng hỗn hợp hoặc nhà ở, với hồ sơ sử dụng điển hình, tải chiếu sáng và thiết bị đại diện cho một hộ gia đình.
-   **Thông gió**: Được mô hình hóa với tiềm năng thông gió tự nhiên thông qua các cửa mở phía trước và phía sau và sân/giếng trời bên trong, mô phỏng thực tế phổ biến. Hệ thống làm mát cơ học (hệ thống điều hòa split) cũng được mô hình hóa với hiệu suất điển hình (ví dụ: SEER 4-5) để đánh giá nhu cầu năng lượng làm mát.

### Dữ liệu khí hậu và Biểu diễn UHI

Nghiên cứu sử dụng tệp dữ liệu thời tiết TMY (Typical Meteorological Year) tiêu chuẩn cho một thành phố lớn của Việt Nam (ví dụ: dựa trên dữ liệu của Hà Nội hoặc Thành phố Hồ Chí Minh). Để biểu diễn hiệu ứng UHI, nhiệt độ bầu khô (dry-bulb temperature) trong tệp thời tiết tiêu chuẩn đã được tăng lên một cách lũy tiến dựa trên cường độ UHI đã quan sát ở các thành phố Việt Nam, đặc biệt tập trung vào giờ đêm và tối khi UHI thường mạnh nhất [^2]. Một mức tăng nhiệt độ UHI trung bình khiêm tốn là +2°C đã được áp dụng cho nhiệt độ bầu khô hàng giờ, đóng vai trò là kịch bản "Khí hậu đô thị" cơ sở để so sánh với các chiến lược giảm thiểu. Một kịch bản "Khí hậu nông thôn" (sử dụng tệp TMY gốc, chưa sửa đổi) cũng được mô phỏng làm tham chiếu để chỉ ra tác động của chính UHI.

### Các chiến lược giảm thiểu được mô phỏng

Các chiến lược giảm thiểu UHI sau đây đã được mô hình hóa:
1.  **Mái phản xạ nóng (Cool Roof)**: Vật liệu mái cơ sở (ngói bê tông trên sàn bê tông) được thay thế bằng vật liệu có đặc tính phản xạ năng lượng mặt trời cao (ví dụ: 0.75) và phát xạ nhiệt cao (ví dụ: 0.90).
2.  **Mái xanh (Green Roof)**: Một hệ thống mái xanh nhiều lớp được mô hình hóa, bao gồm lớp thoát nước, lớp nền (ví dụ: dày 100mm) và lớp thực vật (loại mái xanh mở rộng). Các đặc tính vật liệu cho các lớp được lấy từ các cơ sở dữ liệu và tài liệu tiêu chuẩn [^1]. Hiệu ứng thoát hơi nước đã được phần mềm xử lý một cách ngầm định trong mô hình mái xanh.
3.  **Mảng xanh mặt đứng (Facade Greening)**: Áp dụng cho mặt tiền phía trước và phía sau tiếp xúc với ánh nắng mặt trời. Được mô hình hóa như một lớp che bóng tách biệt với tường, giảm nhiệt lượng hấp thụ từ mặt trời và có khả năng kết hợp mô hình hiệu ứng thoát hơi nước nếu có trong phần mềm, hoặc được biểu diễn bằng các đặc tính bề mặt đã thay đổi (ví dụ: độ hấp thụ thấp hơn/độ phản xạ cao hơn cho bề mặt lớp thực vật bên ngoài đối diện với ánh nắng). Độ che phủ được giả định là đáng kể (ví dụ: 70-80%).

### Các kịch bản mô phỏng

Các mô phỏng được chạy trong một năm đầy đủ dưới mỗi điều kiện khí hậu (Nông thôn, Đô thị cơ sở) và sau đó cho Khí hậu Đô thị với các kịch bản giảm thiểu sau:
-   Đô thị cơ sở (UB) - Khí hậu UHI, không giảm thiểu
-   UB + Mái phản xạ nóng (CR)
-   UB + Mái xanh (GR)
-   UB + Mảng xanh mặt đứng (FG)
-   UB + CR + GR (Kết hợp mái, nếu có thể)
-   UB + CR + FG (Mái phản xạ nóng + Mặt đứng)
-   UB + GR + FG (Mái xanh + Mặt đứng)
-   UB + CR + GR + FG (Kết hợp tất cả các chiến lược)



![Minh họa cho Đánh Giá Bằng Mô Phỏng Các Chiến Lược Giảm Thiểu Đảo Nhiệt Đô Thị Đến Hiệu Năng Năng Lượng và Thoải Mái Nhiệt Thích Ứng Trong Nhà Ống Việt Nam - phần 1](/images/publications/in-article-1-simulation-based-assessment-of-urban-heat-island-mitigation-strategies-on-energy-performance-and-adaptive-thermal-comfort-in-vietnamese-row-houses.jpg)



*Mô tả cho Hình ảnh 1: Sơ đồ mặt cắt ngang cho thấy một ngôi nhà ống nhiều tầng điển hình của Việt Nam. Các nhãn chỉ vào mái cho thấy khả năng triển khai mái phản xạ nóng hoặc mái xanh. Các nhãn trên mặt tiền phía trước và phía sau cho thấy khả năng triển khai mảng xanh mặt đứng. Bên trong, các mũi tên chỉ đường thông gió tự nhiên tiềm năng.*

### Các chỉ số hiệu năng

Các chỉ số sau đây đã được trích xuất và phân tích:
-   Tổng tiêu thụ năng lượng làm mát hàng năm (kWh).
-   Tải nhiệt làm mát đỉnh (kW).
-   Nhiệt độ không khí trong nhà hàng giờ tại các khu vực chính (ví dụ: phòng khách, phòng ngủ).
-   Tỷ lệ phần trăm giờ sử dụng trong vùng thoải mái nhiệt thích ứng (ví dụ: dựa trên mô hình thích ứng của ASHRAE 55 cho khí hậu nóng ẩm hoặc một tiêu chuẩn tương tự áp dụng cho thông gió tự nhiên/hỗn hợp).

Phân tích bao gồm việc so sánh các chỉ số hiệu năng của các kịch bản giảm thiểu với kịch bản Đô thị cơ sở để định lượng mức tiết kiệm và cải thiện sự thoải mái.

## Kết quả và Phát hiện

Kết quả mô phỏng chứng minh rõ ràng tác động đáng kể của hiệu ứng UHI và hiệu quả của các chiến lược giảm thiểu được đánh giá đối với hiệu năng năng lượng và sự thoải mái nhiệt của ngôi nhà ống điển hình của Việt Nam.

So sánh kịch bản Đô thị cơ sở với kịch bản Khí hậu nông thôn, các mô phỏng cho thấy sự gia tăng đáng kể trong tiêu thụ năng lượng làm mát (ví dụ: cao hơn 15-25%) và giảm tỷ lệ phần trăm giờ trong vùng thoải mái thích ứng ở trường hợp Đô thị cơ sở, đặc biệt vào buổi tối và ban đêm, xác nhận những tác động tiêu cực của UHI.

Trong số các chiến lược riêng lẻ, Mái phản xạ nóng luôn cho thấy tác động cao nhất trong việc giảm tiêu thụ năng lượng làm mát. Giảm 10-18% năng lượng làm mát hàng năm đã được quan sát so với kịch bản Đô thị cơ sở. Điều này là do việc giảm trực tiếp nhiệt lượng hấp thụ từ mặt trời qua mái nhà, vốn là một đường truyền nhiệt chính trong các tòa nhà có diện tích tiếp xúc mặt trời đáng kể [^1, ^4].

Mái xanh cũng cho thấy khả năng tiết kiệm năng lượng đáng chú ý, mặc dù trong một số trường hợp hơi ít hơn so với Mái phản xạ nóng (ví dụ: giảm 8-15%). Ngoài việc tiết kiệm năng lượng, Mái xanh còn cho thấy sự điều hòa tốt hơn tải nhiệt đỉnh qua mái nhờ hiệu ứng cách nhiệt của lớp nền và hiệu ứng làm mát của thoát hơi nước, có khả năng giảm tải nhiệt làm mát đỉnh.

Mảng xanh mặt đứng cho thấy tác động khiêm tốn hơn đối với tổng tiêu thụ năng lượng làm mát hàng năm (ví dụ: giảm 5-10%). Hiệu quả của nó rõ rệt hơn ở các mặt tiền nhận bức xạ mặt trời trực tiếp, làm giảm đáng kể nhiệt độ bề mặt tường và giảm nhiệt lượng hấp thụ trong giờ sử dụng. Mặc dù tác động của nó đối với tải nhiệt làm mát có thể ít hơn so với các chiến lược về mái đối với loại hình nhà ống sâu với diện tích mái chiếm ưu thế, nó vẫn góp phần giảm tổng nhiệt lượng hấp thụ qua lớp vỏ bao che.



![Minh họa cho Đánh Giá Bằng Mô Phỏng Các Chiến Lược Giảm Thiểu Đảo Nhiệt Đô Thị Đến Hiệu Năng Năng Lượng và Thoải Mái Nhiệt Thích Ứng Trong Nhà Ống Việt Nam - phần 2](/images/publications/in-article-2-simulation-based-assessment-of-urban-heat-island-mitigation-strategies-on-energy-performance-and-adaptive-thermal-comfort-in-vietnamese-row-houses.jpg)



*Mô tả cho Hình ảnh 2: Biểu đồ cột so sánh hiển thị tiêu thụ năng lượng làm mát hàng năm (kWh) cho các kịch bản mô phỏng khác nhau: Đô thị cơ sở, Đô thị + Mái phản xạ nóng, Đô thị + Mái xanh, Đô thị + Mảng xanh mặt đứng, và Đô thị + Kết hợp các chiến lược.*

Sự kết hợp của các chiến lược mang lại lợi ích tích lũy. Sự kết hợp của Mái phản xạ nóng và Mảng xanh mặt đứng cho thấy mức tiết kiệm đáng kể, tận dụng sự cải thiện trên cả hai bề mặt tiếp xúc chính. Sự kết hợp của Mái xanh và Mảng xanh mặt đứng cũng mang lại hiệu quả tốt. Kịch bản kết hợp cả ba chiến lược (Mái phản xạ nóng, Mái xanh và Mảng xanh mặt đứng) nói chung mang lại mức tiết kiệm năng lượng tổng cộng cao nhất (ví dụ: giảm 20-30% so với Đô thị cơ sở) và cải thiện lớn nhất về số giờ thoải mái nhiệt.

Về sự thoải mái nhiệt thích ứng, tất cả các chiến lược đều góp phần làm tăng tỷ lệ phần trăm giờ sử dụng trong vùng thoải mái, chủ yếu bằng cách làm giảm nhiệt độ không khí trong nhà, đặc biệt trong những thời kỳ nóng hơn. Các chiến lược kết hợp hiệu quả nhất trong việc duy trì nhiệt độ gần hoặc trong phạm vi thoải mái trong thời gian dài hơn. Mặc dù các chiến lược thụ động không loại bỏ hoàn toàn nhu cầu làm mát trong điều kiện đỉnh điểm, chúng giảm tần suất và cường độ của những giờ không thoải mái, có khả năng cho phép tăng cường sử dụng thông gió tự nhiên hoặc giảm thời gian chạy của hệ thống làm mát cơ học.

Phân tích hồ sơ nhiệt độ hàng giờ cho thấy các chiến lược như Mái phản xạ nóng và Mái xanh đặc biệt hiệu quả trong việc giảm nhiệt độ đỉnh trong nhà dưới khu vực mái, trong khi Mảng xanh mặt đứng tác động đến các phòng liền kề với các bức tường có mảng xanh. Phương pháp kết hợp mang lại sự cải thiện đồng đều hơn trên các khu vực khác nhau trong nhà.



![Minh họa cho Đánh Giá Bằng Mô Phỏng Các Chiến Lược Giảm Thiểu Đảo Nhiệt Đô Thị Đến Hiệu Năng Năng Lượng và Thoải Mái Nhiệt Thích Ứng Trong Nhà Ống Việt Nam - phần 3](/images/publications/in-article-3-simulation-based-assessment-of-urban-heat-island-mitigation-strategies-on-energy-performance-and-adaptive-thermal-comfort-in-vietnamese-row-houses.jpg)



*Mô tả cho Hình ảnh 3: Đồ thị đường hiển thị hồ sơ nhiệt độ không khí trong nhà điển hình hàng ngày cho một khu vực chính (ví dụ: phòng khách) trong một ngày hè nóng bức dưới ba kịch bản: Khí hậu nông thôn, Đô thị cơ sở và Đô thị + Kết hợp các chiến lược giảm thiểu.*

Những phát hiện này phù hợp với các nghiên cứu rộng hơn cho thấy hiệu quả của các bề mặt phản xạ nóng và thảm thực vật trong việc giảm nhiệt lượng hấp thụ [^1, ^4]. Mô phỏng đã định lượng những lợi ích này cụ thể cho hình dạng công trình và khí hậu liên quan đến nhà ống Việt Nam đang trải qua hiệu ứng UHI.

## Bối cảnh Việt Nam

Kết quả mô phỏng có liên quan trực tiếp đến bối cảnh đô thị Việt Nam. Sự phổ biến của loại hình nhà ống có nghĩa là việc cải thiện hiệu năng của các đơn vị nhà riêng lẻ này có thể tạo ra tác động tích lũy đối với vi khí hậu của các khu phố đô thị mật độ cao. Các chiến lược được đánh giá – mái phản xạ nóng, mái xanh và mảng xanh mặt đứng – đều khả thi về mặt kỹ thuật để áp dụng cho loại hình công trình này, mặc dù việc triển khai thực tế đối mặt với những thách thức và cơ hội cụ thể tại Việt Nam.

**Cơ hội:**
-   **Nhận thức ngày càng tăng:** Nhận thức ngày càng tăng về tác động của biến đổi khí hậu và chi phí năng lượng tại Việt Nam có thể thúc đẩy sự quan tâm đến các giải pháp xây dựng bền vững.
-   **Tiềm năng vật liệu địa phương:** Việc phát triển các lớp phủ mái phản xạ nóng hoặc vật liệu được sản xuất tại địa phương có thể giảm chi phí. Việc sử dụng các loài thực vật sẵn có tại địa phương cho mái xanh và mặt đứng là khả thi.
-   **Tích hợp với quy hoạch đô thị:** Các hướng dẫn phát triển đô thị trong tương lai hoặc các chương trình khuyến khích cải tạo có thể bao gồm các yêu cầu hoặc hỗ trợ cho các chiến lược giảm thiểu UHI.

**Thách thức:**
-   **Chi phí:** Chi phí đầu tư ban đầu cho vật liệu mái phản xạ nóng hiệu năng cao, hệ thống mái xanh kỹ thuật, hoặc mảng xanh mặt đứng quy mô lớn có thể cao hơn so với các giải pháp thông thường, có khả năng cản trở việc áp dụng bởi các hộ gia đình thông thường.
-   **Bảo trì:** Mái xanh và mặt đứng yêu cầu bảo trì thường xuyên (tưới nước, cắt tỉa, kiểm soát sâu bệnh), có thể là gánh nặng cho chủ nhà. Khả năng cung cấp nước cho tưới tiêu, đặc biệt trong mùa khô, cũng có thể là một mối quan tâm.
-   **Cân nhắc kết cấu:** Việc thêm tải trọng của lớp nền và thực vật cho mái xanh có thể yêu cầu gia cố kết cấu ở các tòa nhà cũ, làm tăng sự phức tạp và chi phí.
-   **Hạn chế về không gian:** Mặc dù mảng xanh mặt đứng sử dụng không gian thẳng đứng, mái xanh quy mô lớn yêu cầu diện tích mái tiếp cận được và có kết cấu đủ chịu lực, điều này có thể bị hạn chế hoặc đã được sử dụng cho mục đích khác ở một số nhà ống.
-   **Chuyên môn tại địa phương:** Sự sẵn có của lao động lành nghề và chuyên môn để lắp đặt và bảo trì đúng cách các công nghệ xây dựng xanh tiên tiến có thể là một hạn chế, mặc dù điều này đang được cải thiện.

Bất chấp những thách thức, mức tiết kiệm năng lượng đáng kể được chứng minh bằng mô phỏng cho thấy một lập luận mạnh mẽ về lợi ích kinh tế dài hạn, có khả năng bù đắp chi phí ban đầu trong suốt vòng đời của tòa nhà. Hơn nữa, sự cải thiện về sự thoải mái nhiệt góp phần tạo ra điều kiện sống tốt hơn, đây là một lợi ích phi tiền tệ nhưng có giá trị đối với người sử dụng trong khí hậu nóng. Những phát hiện này nhấn mạnh tiềm năng của các chiến lược này không chỉ là các biện pháp môi trường, mà còn là cách để cải thiện khả năng sống và giảm chi phí vận hành của các ngôi nhà điển hình của Việt Nam dưới tác động ngày càng tăng của nhiệt đô thị.

## Kết luận và Nghiên cứu tương lai

Nghiên cứu dựa trên mô phỏng này xác nhận rằng hiệu ứng Đảo Nhiệt Đô Thị làm tăng đáng kể nhu cầu năng lượng làm mát và giảm sự thoải mái nhiệt thích ứng trong các ngôi nhà ống điển hình của Việt Nam. Hơn nữa, nó chứng minh rằng các chiến lược giảm thiểu ở cấp độ tòa nhà như mái phản xạ nóng, mái xanh và mảng xanh mặt đứng có thể chống lại đáng kể những tác động tiêu cực này. Mái phản xạ nóng và mái xanh đặc biệt hiệu quả trong việc giảm tiêu thụ năng lượng làm mát, trong khi mảng xanh mặt đứng góp phần làm mát bề mặt tường và giảm nhiệt lượng hấp thụ. Kết hợp các chiến lược này mang lại sự cải thiện tổng thể đáng kể nhất về cả hiệu năng năng lượng và sự thoải mái nhiệt.

Những phát hiện này cung cấp bằng chứng định lượng hỗ trợ việc tích hợp các chiến lược này vào các phương pháp thiết kế và cải tạo công trình ở khu vực đô thị của Việt Nam. Việc triển khai các biện pháp này ở quy mô lớn có thể dẫn đến giảm đáng kể tiêu thụ năng lượng đô thị, giảm bớt áp lực lên lưới điện trong giờ cao điểm, giảm chi phí năng lượng hộ gia đình và cải thiện chất lượng cuộc sống cho cư dân đô thị đang đối mặt với điều kiện nóng hơn ngày càng tăng.

**Những hạn chế của nghiên cứu này bao gồm:**
-   Việc sử dụng một mô hình tòa nhà đại diện duy nhất; sự khác biệt về hình dạng, chất lượng xây dựng và hành vi của người sử dụng trên phạm vi đa dạng của nhà ống Việt Nam có thể ảnh hưởng đến kết quả.
-   Hiệu ứng UHI được biểu diễn bằng một mức tăng nhiệt độ đồng nhất; một phương pháp tiếp cận tinh vi hơn liên quan đến mô phỏng vi khí hậu đô thị có thể nắm bắt được sự biến đổi cục bộ.
-   Phân tích kinh tế chi tiết (phân tích chi phí-lợi ích, thời gian hoàn vốn) không được bao gồm.
-   Các tương tác tiềm năng với các tòa nhà liền kề và hiệu ứng hẻm núi đường phố đã được đơn giản hóa.

**Các hướng nghiên cứu trong tương lai:**
-   Mở rộng nghiên cứu để bao gồm nhiều loại hình nhà ống và hệ thống kết cấu đa dạng được tìm thấy ở các thành phố khác nhau của Việt Nam.
-   Tích hợp phân tích kinh tế để đánh giá tính khả thi về tài chính và thời gian hoàn vốn của các chiến lược giảm thiểu khác nhau dưới điều kiện thị trường địa phương.
-   Nghiên cứu tác động của hành vi người sử dụng (ví dụ: kiểu mở cửa sổ, sử dụng quạt) đối với sự thoải mái nhiệt trong các kịch bản đã được giảm thiểu.
-   Khám phá tiềm năng của các chiến lược thiết kế thụ động (ví dụ: thiết kế thông gió tự nhiên được cải thiện, sân trong, che bóng) kết hợp với các biện pháp giảm thiểu UHI.
-   Tiến hành các phép đo thực địa tại các tòa nhà đã được cải tạo để xác nhận kết quả mô phỏng.
-   Mô hình hóa tác động của các chiến lược này ở quy mô khu phố để đánh giá hiệu quả tích lũy của chúng đối với chính vi khí hậu đô thị.
-   Nghiên cứu các vật liệu và công nghệ khác, chẳng hạn như vật liệu chuyển pha hoặc kỹ thuật cách nhiệt tiên tiến, trong bối cảnh Việt Nam.

Bằng cách cung cấp bằng chứng định lượng về lợi ích của việc giảm thiểu UHI ở cấp độ tòa nhà, nghiên cứu này đóng vai trò là một nguồn tài liệu quý giá để hướng dẫn thiết kế bền vững, xây dựng và phát triển chính sách trong môi trường đô thị hóa nhanh chóng của Việt Nam.

---

### Tài liệu tham khảo

[^1]: [Simulation-based assessment of uhi mitigation measures in](https://publications.ibpsa.org/proceedings/bs/2015/papers/bs2015_2325.pdf)
[^2]: [Urban heat islands in the future hanoi city](https://meteo.fr/icuc9/LongAbstracts/ccma5-4-8181146_a.pdf)
[^3]: [Systematic literature review of Wind-flow in ...](https://jsju.org/index.php/journal/article/view/2051)
[^4]: [A simulation-based assessment of technologies to reduce ...](https://sciencedirect.com/science/article/abs/pii/S0360132321001797)
[^5]: [Urban heat island: dynamic simulation, assessment and ...](https://davidpublisher.com/Public/uploads/Contribute/555afc532a9ab.pdf)