export const chapters = [
    {
        id: "concept",
        nav: "Khái niệm",
        badge: "Mở đầu",
        title: "Điện trường đều là gì?",
        summary: "Điện trường đều là điện trường mà vectơ cường độ điện trường tại mọi điểm đều có cùng phương, cùng chiều và cùng độ lớn. Đây là mô hình rất quan trọng trong Vật lí 11 vì giúp ta mô tả rõ mối liên hệ giữa U, d, E và lực điện F.",
        formula: "\\[ \\vec{E} = \\text{const}, \\quad F = qE \\]",
        formulaNote: "Nếu một điện tích thử đặt ở các điểm khác nhau trong cùng vùng điện trường đều thì độ lớn E không đổi; chỉ lực điện F phụ thuộc thêm vào q.",
        essentials: [
            "Đường sức điện là các đường thẳng song song, cách đều nhau.",
            "Chiều điện trường đi từ bản dương sang bản âm.",
            "Cường độ điện trường không đổi tại mọi điểm trong vùng đều.",
            "Mô hình này đúng nhất ở vùng giữa hai bản phẳng song song, xa mép bản cực."
        ],
        mistakes: [
            "Không nên xem toàn bộ không gian quanh hai bản cực đều là điện trường đều; gần mép bản cực, đường sức bị cong.",
            "Không nhầm điện trường đều với điện trường do điện tích điểm, vì điện trường do điện tích điểm thay đổi theo khoảng cách."
        ],
        question: "Vì sao gọi là điện trường 'đều'?",
        answer: "Vì trong vùng đang xét, vectơ E không đổi theo vị trí: cùng phương, cùng chiều và cùng độ lớn."
    },
    {
        id: "plates",
        nav: "Giữa 2 bản",
        badge: "Thiết lập",
        title: "Điện trường đều giữa hai bản phẳng nhiễm điện đặt song song",
        summary: "Muốn tạo ra điện trường gần đều, ta đặt hai bản kim loại phẳng song song và nối với nguồn điện một chiều. Một bản tích điện dương, bản còn lại tích điện âm; ở phần giữa hai bản, điện trường gần như đều.",
        formula: "\\[ E = \\frac{U}{d} \\]",
        formulaNote: "Hình minh họa chuẩn là hai bản phẳng song song, cách nhau một khoảng d và có hiệu điện thế U giữa hai bản. Phần giữa hai bản là nơi thường dùng để phân tích.",
        essentials: [
            "Cách tạo: đặt hai bản kim loại phẳng song song, nối với nguồn điện một chiều.",
            "Một bản mang điện dương, bản còn lại mang điện âm.",
            "Ở vùng giữa hai bản, các đường sức gần song song và cách đều nên dùng được mô hình điện trường đều.",
            "Khoảng cách giữa hai bản được kí hiệu là d."
        ],
        mistakes: [
            "Không quên đổi d về đơn vị mét trước khi thay vào công thức.",
            "Không vẽ chiều E từ âm sang dương; chiều đúng là từ dương sang âm."
        ],
        question: "Vì sao phần giữa hai bản lại hay được chọn để phân tích?",
        answer: "Vì ở đó điện trường ít bị méo nhất, nên các đường sức gần như song song và cách đều, phù hợp với mô hình điện trường đều."
    },
    {
        id: "formula",
        nav: "Công thức",
        badge: "Định lượng",
        title: "Các công thức nền tảng cần nhớ",
        summary: "Các bài toán điện trường đều thường quy về các biểu thức cơ bản: E = U / d, U = E.d, d = U / E, F = qE và a = qE / m. Từ đó có thể suy ra U, d, F hoặc gia tốc của điện tích.",
        formula: "\\[ E = \\frac{U}{d}, \\quad U = Ed, \\quad F = qE, \\quad a = \\frac{qE}{m} \\]",
        formulaNote: "E có đơn vị V/m, U là V, d là m, F là N. Với q âm, độ lớn lực vẫn là |q|E nhưng chiều lực ngược chiều điện trường.",
        essentials: [
            "Giữ d không đổi: U tăng thì E tăng.",
            "Giữ U không đổi: d giảm thì E tăng.",
            "Lực điện tác dụng lên điện tích thử có độ lớn F = |q|E.",
            "Gia tốc của điện tích trong điện trường đều: a = qE / m."
        ],
        mistakes: [
            "Sai nhiều nhất là để d theo cm hoặc mm rồi thế trực tiếp vào công thức.",
            "Khi q âm, chỉ đổi chiều của lực chứ không đổi công thức độ lớn."
        ],
        question: "Muốn tính nhanh F thì cần biết những đại lượng nào?",
        answer: "Chỉ cần biết điện tích q và cường độ điện trường E, rồi dùng F = qE. Nếu hỏi độ lớn lực thì lấy F = |q|E."
    },
    {
        id: "examples",
        nav: "Ví dụ",
        badge: "Luyện nhanh",
        title: "Ví dụ mẫu và cách trình bày ngắn gọn",
        summary: "Một số bài mẫu trong điện trường đều thường yêu cầu tính E từ U và d, hoặc tính U từ E và d, hoặc tính lực điện F khi biết q và E.",
        formula: "\\[ E = \\frac{U}{d}, \\quad U = Ed, \\quad F = qE \\]",
        formulaNote: "Khi giải bài, nên đổi hết về SI trước rồi thay số. Sau khi tính xong mới đổi đơn vị nếu cần.",
        essentials: [
            "Bài 1: Hai bản cách nhau 2 cm, hiệu điện thế 100 V. Đổi 2 cm = 0,02 m rồi tính E = 100 / 0,02 = 5000 V/m.",
            "Bài 2: Điện trường đều có E = 2000 V/m, khoảng cách 5 cm. Đổi 5 cm = 0,05 m rồi tính U = E.d = 2000 x 0,05 = 100 V.",
            "Nếu thêm điện tích q = 2 x 10^-7 C trong điện trường E = 2000 V/m thì lực điện có độ lớn F = qE = 4 x 10^-4 N.",
            "Với q âm, ta vẫn tính độ lớn như bình thường rồi kết luận chiều lực ngược chiều E."
        ],
        mistakes: [
            "Không nên nhảy bước đổi đơn vị vì rất dễ sai hệ số 100 hoặc 1000.",
            "Nếu đề cho q âm, vẫn tính độ lớn như bình thường rồi kết luận chiều lực sau."
        ],
        question: "Vì sao trong lời giải mẫu người ta luôn đổi cm sang m trước?",
        answer: "Vì công thức E = U / d sử dụng hệ SI; nếu d không tính bằng mét thì kết quả E sẽ sai."
    },
    {
        id: "potential",
        nav: "Điện thế",
        badge: "Năng lượng",
        title: "Điện thế, công và thế năng",
        summary: "Trong điện trường đều, đi theo chiều điện trường thì điện thế giảm. Công của lực điện trên quãng đường song song với E có thể viết dưới dạng A = qEd = qU.",
        formula: "\\[ A = qEd = qU \\]",
        formulaNote: "Nếu đã biết chênh lệch điện thế giữa hai điểm thì dùng A = qU thường nhanh hơn.",
        essentials: [
            "Điện thế giảm dần theo chiều của đường sức điện.",
            "Lực điện sinh công dương khi điện tích dương chuyển động cùng chiều E.",
            "Thế năng điện giảm khi lực điện thực hiện công dương."
        ],
        mistakes: [
            "Không phải mọi quãng đường đều cho công bằng qEd; chỉ thành phần quãng đường dọc theo E mới góp phần vào công.",
            "Dấu của q làm thay đổi dấu của công và sự tăng giảm thế năng."
        ],
        question: "Đi theo chiều điện trường thì điện thế tăng hay giảm?",
        answer: "Giảm. Đi ngược chiều điện trường thì điện thế tăng."
    },
    {
        id: "motion",
        nav: "Chuyển động",
        badge: "Động lực học",
        title: "Tác dụng của điện trường đều lên chuyển động của điện tích",
        summary: "Điện tích đặt trong điện trường đều chịu lực điện không đổi nên có gia tốc không đổi theo phương của lực. Nếu điện tích bay vào vuông góc với đường sức điện, quỹ đạo của nó tương tự như chuyển động ném ngang trong trường trọng lực.",
        formula: "\\[ F = qE, \\quad a = \\frac{qE}{m}, \\quad x = v_0t, \\quad y = \\frac{1}{2}at^2 \\]",
        formulaNote: "Khi phân tích theo trục, thường chọn Ox theo chiều vận tốc ban đầu dọc theo bản phẳng và Oy theo chiều điện trường. Với bài hạt đi hết khoảng cách d theo Oy từ trạng thái vy0 = 0, có thể dùng t = sqrt(2d / a) và L = v0.sqrt(2d / a).",
        essentials: [
            "Nếu điện tích chuyển động cùng phương điện trường thì đó là chuyển động thẳng biến đổi đều: v = v0 + a.t và s = v0.t + (1/2).a.t^2.",
            "Nếu điện tích chuyển động cùng chiều điện trường thì nhanh dần đều; nếu ngược chiều điện trường thì chậm dần đều.",
            "Khi điện tích bay vào vuông góc với điện trường, chọn Ox theo chiều vận tốc ban đầu và Oy theo chiều điện trường.",
            "Theo Ox: chuyển động thẳng đều, x = v0.t. Theo Oy: chuyển động nhanh dần đều, y = (1/2).(qE/m).t^2.",
            "Phương trình quỹ đạo thu được bằng cách khử thời gian giữa x = v0.t và y = (1/2).a.t^2, nên quỹ đạo là parabol.",
            "Một công thức hay gặp trong bài hạt đi giữa hai bản là L = v0.t = v0.sqrt(2d / a), trong đó L là độ dài của bản phẳng."
        ],
        mistakes: [
            "Không nên quên xét dấu của q trước khi kết luận chiều lực và chiều gia tốc.",
            "Quỹ đạo parabol chỉ xuất hiện khi có thành phần vận tốc ban đầu vuông góc với điện trường.",
            "Không nhầm gia tốc điện với vận tốc ban đầu; một đại lượng do lực gây ra, một đại lượng do điều kiện đầu."
        ],
        question: "Vì sao chuyển động vuông góc với điện trường lại giống ném ngang?",
        answer: "Vì theo một phương hạt chuyển động thẳng đều, còn theo phương điện trường nó nhanh dần đều. Sự chồng chập hai chuyển động này tạo thành quỹ đạo parabol."
    },
    {
        id: "application",
        nav: "Ứng dụng",
        badge: "Thực tế",
        title: "Ứng dụng của điện trường đều trong thiết bị và đời sống",
        summary: "Điện trường đều là mô hình gần đúng rất quan trọng trong tụ điện phẳng, các vùng điều hướng chùm hạt, máy lọc bụi tĩnh điện và nhiều thiết bị điện tử cổ điển lẫn hiện đại.",
        formula: "\\[ qE = mg, \\quad F = qE \\]",
        formulaNote: "Biểu thức qE = mg thường gặp trong thí nghiệm Millikan khi giọt dầu cân bằng trong điện trường.",
        essentials: [
            "Tụ điện phẳng: điện trường đều tồn tại giữa hai bản tụ song song; dùng để lưu trữ năng lượng điện và ổn định điện áp trong mạch.",
            "Máy in laser, máy photocopy: điện trường đều điều khiển các hạt mực mang điện bám lên giấy.",
            "Máy lọc bụi tĩnh điện: điện trường làm các hạt bụi bị nhiễm điện và bị hút về bản cực, giúp làm sạch không khí trong nhà máy và khu công nghiệp.",
            "Máy gia tốc hạt: điện trường đều dùng để tăng tốc hạt mang điện, phục vụ nghiên cứu vật lí hạt nhân và xạ trị.",
            "Thí nghiệm vật lí như Millikan: dùng để nghiên cứu chuyển động điện tích, xác định điện tích và khối lượng hạt.",
            "Ống tia điện tử CRT: điện trường đều làm lệch hướng chùm electron trong tivi và màn hình đời cũ."
        ],
        mistakes: [
            "Không nên lấy mọi thiết bị điện làm ví dụ cho điện trường đều; chỉ những vùng được thiết kế gần song song mới phù hợp.",
            "Cần phân biệt điện trường đều với điện trường biến thiên theo thời gian trong mạch xoay chiều hoặc sóng điện từ."
        ],
        question: "Vì sao tụ điện phẳng hay được dùng làm ví dụ chuẩn?",
        answer: "Vì ở phần giữa hai bản phẳng song song, điện trường tạo ra gần như song song và cách đều, rất phù hợp với mô hình điện trường đều."
    }
];

export const faqs = [
    {
        question: "Đường sức điện trong điện trường đều có dạng gì?",
        answer: "Đó là các đường thẳng song song, cách đều và có chiều đi từ bản dương sang bản âm."
    },
    {
        question: "Khi nào cần đổi đơn vị cm sang m?",
        answer: "Mỗi khi thay khoảng cách d vào công thức E = U / d hoặc các công thức có dùng d theo hệ SI."
    },
    {
        question: "Điện tích âm chịu lực điện theo chiều nào?",
        answer: "Ngược chiều điện trường E."
    },
    {
        question: "Đi theo chiều điện trường thì điện thế tăng hay giảm?",
        answer: "Giảm."
    },
    {
        question: "Ở mép hai bản cực có còn coi là điện trường đều không?",
        answer: "Không nên, vì đường sức ở mép bị cong và độ lớn điện trường không còn gần như không đổi nữa."
    },
    {
        question: "Muốn xác định hướng lực nhanh nhất thì làm sao?",
        answer: "Xác định trước chiều của E, sau đó xét dấu của q: q dương cùng chiều E, q âm ngược chiều E."
    },
    {
        question: "Lực điện F được tính như thế nào trong điện trường đều?",
        answer: "Độ lớn lực điện được tính bằng F = |q|E. Nếu cần hướng lực thì xét thêm dấu của q."
    },
    {
        question: "Điện tích chuyển động cùng phương điện trường có dạng chuyển động gì?",
        answer: "Đó là chuyển động thẳng biến đổi đều. Cùng chiều điện trường thì nhanh dần đều, ngược chiều thì chậm dần đều."
    },
    {
        question: "Vì sao điện tích bay vuông góc với điện trường lại có quỹ đạo parabol?",
        answer: "Vì theo phương vuông góc với điện trường nó chuyển động thẳng đều, còn theo phương điện trường nó nhanh dần đều; hai chuyển động chồng chập tạo ra parabol."
    },
    {
        question: "Khi phân tích chuyển động giữa hai bản phẳng nên chọn trục như thế nào?",
        answer: "Thường chọn Ox theo chiều vận tốc ban đầu dọc theo chiều dài bản phẳng, còn Oy theo chiều điện trường E để tách chuyển động thành hai phương đơn giản."
    },
    {
        question: "Trong thí nghiệm Millikan, lúc giọt dầu cân bằng thường dùng hệ thức nào?",
        answer: "Khi giọt dầu cân bằng trong điện trường đều, thường dùng qE = mg để liên hệ lực điện với trọng lực."
    }
];

export const practiceItems = [
    {
        question: "Hai bản kim loại cách nhau 2 cm, hiệu điện thế giữa hai bản là 120 V. Tính cường độ điện trường.",
        answer: "Đổi 2 cm = 0,02 m. Khi đó E = U / d = 120 / 0,02 = 6.000 V/m."
    },
    {
        question: "Hai bản kim loại cách nhau 2 cm, hiệu điện thế 100 V. Tính cường độ điện trường.",
        answer: "Đổi 2 cm = 0,02 m. Khi đó E = 100 / 0,02 = 5.000 V/m."
    },
    {
        question: "Điện trường đều có E = 2000 V/m, khoảng cách giữa hai bản là 5 cm. Tính hiệu điện thế.",
        answer: "Đổi 5 cm = 0,05 m. Suy ra U = E.d = 2000 x 0,05 = 100 V."
    },
    {
        question: "Một điện tích q = -1,5 µC đặt trong điện trường đều có E = 4.000 V/m. Lực điện có độ lớn và chiều nào?",
        answer: "Độ lớn lực là F = |q|E = 1,5 x 10^-6 x 4.000 = 0,006 N. Vì q âm nên lực ngược chiều E."
    },
    {
        question: "Một điện tích q = 2 x 10^-7 C đặt trong điện trường đều có E = 2000 V/m. Tính lực điện tác dụng lên điện tích.",
        answer: "F = qE = 2 x 10^-7 x 2000 = 4 x 10^-4 N. Nếu q dương thì lực cùng chiều E."
    },
    {
        question: "Điện tích dương bay vào điện trường đều với vận tốc ban đầu vuông góc đường sức. Quỹ đạo có dạng gì?",
        answer: "Quỹ đạo là parabol, vì hạt vừa chuyển động thẳng đều theo Ox vừa nhanh dần đều theo Oy."
    },
    {
        question: "Một điện tích 2 µC đi qua hiệu điện thế 50 V. Công của lực điện bằng bao nhiêu?",
        answer: "A = qU = 2 x 10^-6 x 50 = 1 x 10^-4 J."
    },
    {
        question: "Một hạt đi vào điện trường đều theo phương vuông góc với đường sức. Theo từng phương Ox và Oy, hạt chuyển động như thế nào?",
        answer: "Theo Ox: chuyển động thẳng đều với x = v0.t. Theo Oy: chuyển động nhanh dần đều với y = (1/2)(qE/m)t^2."
    },
    {
        question: "Một giọt dầu trong thí nghiệm Millikan đứng cân bằng trong điện trường đều. Nếu biết khối lượng m và gia tốc g, lực điện được xác định ra sao?",
        answer: "Khi cân bằng, lực điện cân bằng trọng lực nên F = qE = mg."
    }
];
