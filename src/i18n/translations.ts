export type Language = "vi" | "en";

export const translations = {
  vi: {
    brand: {
      company: "Bolttech Việt Nam",
      clientSub: "Viettel IDC · Kỳ 2026 – 2027",
      skipToContent: "Nhảy tới nội dung chính",
    },
    nav: {
      general: "Thông tin chung",
      benefits: "Quyền lợi (NV & Người thân)",
      documents: "Kho tài liệu (12)",
      claims: "Bồi thường & App",
      notes: "Lưu ý & Loại trừ",
      contact: "Liên hệ",
      admin: "Quản trị",
      lookupDocsBtn: "Tra cứu & Tải tài liệu",
    },
    audienceSwitcher: {
      label: "Đang xem chương trình dành cho:",
      employee: "CBNV Viettel IDC",
      dependent: "Người thân CBNV",
      compare: "So sánh NV & Người thân",
      employeeBadge: "Chương trình Nhân viên",
      dependentBadge: "Chương trình Người thân",
      compareBadge: "Đối chiếu song song",
      employeeDesc:
        "Áp dụng cho Cán bộ nhân viên Viettel IDC có HĐLĐ (từ HĐ thử việc): Miễn thời gian chờ bệnh đặc biệt/có sẵn, chờ tỷ lệ thai sản (270/60 ngày), tiền giường Nhóm 1 tới 25.000.000đ/ngày và có trợ cấp nghỉ điều trị tai nạn.",
      dependentDesc:
        "Áp dụng cho Bố/mẹ đẻ, Bố/mẹ vợ/chồng, Vợ/chồng, Con hợp pháp đã đăng ký theo chương trình Viettel IDC: Miễn thời gian chờ nếu tái tục đủ 1 năm (người mới chờ 365 ngày bệnh đặc biệt/có sẵn, 270 ngày sinh đẻ), tiền giường Nhóm 1: 15.000.000đ/ngày.",
      compareDesc:
        "Đối chiếu trực tiếp các điểm giống và khác nhau giữa Hợp đồng Nhân viên và Hợp đồng Người thân Viettel IDC (2026–2027).",
    },
    hero: {
      badge: "BẢO HIỂM SỨC KHỎE & TAI NẠN · 01/10/2026 – 30/09/2027",
      title: "Cổng thông tin Bảo hiểm Sức khỏe & Tai nạn Viettel IDC",
      subtitle:
        "Tra cứu đầy đủ quyền lợi theo 3 Nhóm chức danh dành cho cả Cán bộ Nhân viên và Người thân, tìm kiếm và tải về toàn bộ 12 tài liệu – biểu mẫu gốc, hướng dẫn dùng App Papaya Care và hỏi đáp cùng Trợ lý AI 24/7.",
      btnBenefits: "Xem bảng quyền lợi",
      btnDocuments: "Kho 12 tài liệu & Biểu mẫu",
      btnClaims: "Hướng dẫn bồi thường",
      btnChat: "Hỏi Trợ lý AI 24/7",
    },
    general: {
      sectionTag: "I · Thông tin chung & Điểm mới 2026 – 2027",
      title: "Hợp đồng Bảo hiểm Sức khỏe & Tai nạn Viettel IDC",
      policyBadge: "PJICO · PAPAYA · BOLTTECH",
      items: [
        {
          label: "KHÁCH HÀNG",
          value: "Viettel IDC",
          sub: "Chương trình CBNV & Người thân",
        },
        {
          label: "ĐỐI TÁC BẢO HIỂM & TPA",
          value: "PJICO & Papaya",
          sub: "Tư vấn & quản lý bởi Bolttech VN",
        },
        {
          label: "THỜI HẠN BẢO HIỂM",
          value: "01/10/2026 – 30/09/2027",
          sub: "Bao gồm cả 02 ngày này (12 tháng)",
        },
        {
          label: "PHẠM VI ĐỊA LÝ",
          value: "Tai nạn: Toàn cầu",
          sub: "Sức khỏe: VN (Nhóm 1: Châu Á)",
        },
      ],
      changesTitleEmployee: "6 Điểm Mới Nổi Bật Kỳ 2026 – 2027 (Chương trình Nhân viên)",
      changesTitleDependent: "5 Điểm Mới Nổi Bật Kỳ 2026 – 2027 (Chương trình Người thân)",
      changesSubtitle:
        "Các quyền lợi được mở rộng và nâng cấp vượt trội trong hợp đồng năm 2026 – 2027 so với kỳ trước:",
      changesEmployee: [
        {
          tag: "Riêng CBNV Nhóm 1",
          title: "Tăng hạn mức ngày nằm viện TGĐ / Phó TGĐ lên 25 triệu/ngày",
          desc: "Hạn mức viện phí & tiền phòng đơn tiêu chuẩn của Nhóm 1 (TGĐ/Phó TGĐ) tăng từ 15.000.000đ/ngày (2026) lên 25.000.000đ/ngày (2027). (Lưu ý: Người thân Nhóm 1 giữ nguyên 15.000.000đ/ngày).",
        },
        {
          tag: "Mở rộng mới",
          title: "Xét nghiệm kết quả bình thường nhưng liên quan triệu chứng bệnh",
          desc: "TGĐ/Phó TGĐ (Nhóm 1) tăng từ 1.000.000đ lên 1.500.000đ/năm; Nhóm 2 và Nhóm 3 mở rộng từ Không áp dụng lên 1.000.000đ/năm.",
        },
        {
          tag: "Mở rộng mới",
          title: "Mua thuốc không theo đơn nhưng cùng thành phần biệt dược",
          desc: "Mở rộng chi trả khi người được bảo hiểm mua thuốc khác tên thương mại nhưng có cùng thành phần biệt dược với thuốc bác sĩ kê đơn (chi trả thực tế không vượt quá giá thị trường của thuốc kê đơn).",
        },
        {
          tag: "Mở rộng mới",
          title: "Điều trị y tế mụn nhọt, rụng tóc, tăng sắc tố, nám da",
          desc: "Mở rộng bảo hiểm mụn cơm, mụn cóc, mụn trứng cá, rụng tóc, tăng sắc tố, nám da có điều trị về mặt y tế: Nhóm 2 & 3 tối đa 1.000.000đ/năm; Nhóm 1 tối đa 3.000.000đ/năm.",
        },
        {
          tag: "Mở rộng mới",
          title: "Xét nghiệm tầm soát bắt buộc trước khi nằm viện",
          desc: "Mở rộng chi trả các xét nghiệm tầm soát trước nhập viện như HIV, giang mai, viêm gan, COVID theo quyền lợi điều trị nội trú.",
        },
        {
          tag: "Mở rộng mới",
          title: "Vật tư y tế, thiết bị y tế tại CSYT trong điều trị ngoại trú",
          desc: "Mở rộng chi trả vật tư/thiết bị y tế sử dụng tại CSYT trong khám ngoại trú: Nhóm 3 tối đa 1.000.000đ/năm; Nhóm 2 tối đa 2.000.000đ/năm; Nhóm 1 tối đa 3.000.000đ/năm.",
        },
      ],
      waitingTitle: "Điều kiện Tham gia & Quy định Thời gian chờ (Nhân viên vs Người thân)",
      waitingSubtitle:
        "Lưu ý: Người đã tham gia liên tục đủ 01 năm từ Hợp đồng 2025–2026 được MIỄN thời gian chờ cho quyền lợi tái tục tương đương.",
      waitingCols: {
        criteria: "Hạng mục quy định",
        employee: "Chương trình NHÂN VIÊN (CBNV)",
        dependent: "Chương trình NGƯỜI THÂN",
      },
      waitingRows: [
        {
          criteria: "Độ tuổi & Điều kiện tham gia",
          employee:
            "Từ 15 ngày tuổi – 65 tuổi, có HĐLĐ (bắt đầu từ HĐ thử việc). Tái tục đến dưới 70 tuổi (+50% phí, không BH sinh mạng).",
          dependent:
            "Bố/mẹ đẻ, Bố/mẹ vợ/chồng, Vợ/chồng hợp pháp, Con hợp pháp (15 ngày – 18 tuổi, hoặc đến 25 tuổi nếu học liên tục & không BH thai sản). Gói tham gia <= gói của CBNV.",
          highlightDiff: true,
        },
        {
          criteria: "Bổ sung giữa kỳ hợp đồng",
          employee: "Theo danh sách tăng mới nhân sự hàng tháng của Viettel IDC.",
          dependent:
            "Chỉ nhận giữa kỳ: (1) Vợ/chồng mới cưới, (2) Người thân của NV mới, (3) Con mới sinh đăng ký trong vòng 45 ngày từ ngày sinh (báo trong 15 ngày đầu tháng kế tiếp).",
          highlightDiff: true,
        },
        {
          criteria: "Tai nạn & Ốm bệnh thông thường",
          employee: "Miễn thời gian chờ (0 ngày)",
          dependent: "Miễn thời gian chờ (0 ngày)",
          highlightDiff: false,
        },
        {
          criteria: "Bệnh đặc biệt & Bệnh có sẵn",
          employee: "Miễn thời gian chờ",
          dependent: "365 ngày (với người mới tham gia lần đầu; miễn nếu đã tham gia đủ 1 năm kỳ trước)",
          highlightDiff: true,
        },
        {
          criteria: "Sinh đẻ (Thai sản)",
          employee: "Chờ tỷ lệ 270 ngày",
          dependent: "270 ngày (chờ đủ ngày)",
          highlightDiff: true,
        },
        {
          criteria: "Biến chứng thai sản",
          employee: "Chờ tỷ lệ 60 ngày",
          dependent: "60 ngày (chờ đủ ngày)",
          highlightDiff: true,
        },
        {
          criteria: "Tử vong / TTTBVV do ốm bệnh",
          employee: "Bệnh thông thường / không rõ nguyên nhân: 30 ngày · Bệnh đặc biệt, có sẵn, thai sản: 365 ngày",
          dependent: "Bệnh thông thường / không rõ nguyên nhân: 30 ngày · Bệnh đặc biệt, có sẵn, thai sản: 365 ngày",
          highlightDiff: false,
        },
      ],
    },
    benefits: {
      sectionTag: "II · BẢNG QUYỀN LỢI BẢO HIỂM CHI TIẾT",
      title: "Quyền lợi Bảo hiểm theo 3 Nhóm Chức danh & 15 Mở rộng",
      subtitle:
        "Chọn đối tượng (Nhân viên / Người thân / So sánh) để tra cứu chính xác hạn mức chi trả của Nhóm 1, Nhóm 2 và Nhóm 3.",
      colBenefit: "Hạng mục quyền lợi bảo hiểm",
      tabs: {
        overview: "Tổng quan & Tai nạn",
        inpatient: "Nội trú & Phẫu thuật",
        maternity: "Thai sản & Sinh đẻ",
        outpatient: "Ngoại trú & Nha khoa",
        extensions: "15 Quyền lợi Mở rộng",
      },
      downloadHandbookEmployee: "Tải Sổ tay Nhân viên (.pdf)",
      downloadHandbookDependent: "Tải Sổ tay Người thân (.pdf)",
      extensionsTitle: "15 Quyền lợi Mở rộng Đặc biệt trong Hợp đồng Viettel IDC",
      extensionsSubtitle:
        "Các hạng mục thông thường bị loại trừ trong quy tắc chuẩn nhưng đã được đàm phán mở rộng chi trả riêng cho CBNV và Người thân Viettel IDC:",
      extensionsList: [
        {
          num: "01",
          title: "Nước muối sinh lý / Dung dịch xịt mũi ngoại trú",
          limit: "Nhóm 3 (NV): 400.000đ/năm · Nhóm 1 & 2: 500.000đ/năm",
          desc: "Chi trả Natri clorid 0,9%, Sterimar, Humer, Marimer, Xisat... điều trị các bệnh về mũi, xoang trong điều trị ngoại trú.",
        },
        {
          num: "02",
          title: "Dao mổ Longo, Stent, Catheter, Lưới thoát vị, Coblation, Plasma...",
          limit: "Đồng chi trả 80% CTBH – 20% NĐBH",
          desc: "Áp dụng cho dao mổ Longo, stent, catheter, lưới thoát vị, Hummer, plasma, coblation, Shaver, rọ tán sỏi, dao siêu âm.",
        },
        {
          num: "03",
          title: "Vitamin & Khoáng chất hỗ trợ điều trị",
          limit: "Nhóm 3 (NV): 400.000đ/năm · Nhóm 1 & 2: 500.000đ/năm",
          desc: "Chi trả khi được bác sĩ kê đơn kèm thuốc điều trị chính và chi phí Vitamin không vượt quá chi phí thuốc điều trị.",
        },
        {
          num: "04",
          title: "Điều trị các bất thường về sinh hóa / chuyển hóa",
          limit: "Chi trả theo hạn mức Nội / Ngoại trú",
          desc: "Bảo hiểm điều trị tăng lipid máu (mỡ máu cao), tăng men gan, hạ canxi máu, hạ kali máu, rối loạn chuyển hóa...",
        },
        {
          num: "05",
          title: "Đinh, nẹp, vis, đĩa đệm, chốt treo do Tai nạn",
          limit: "Đồng chi trả 80% CTBH – 20% NĐBH",
          desc: "Mở rộng chi trả vật tư kết xương/chỉnh hình trong phẫu thuật điều trị chấn thương do tai nạn.",
        },
        {
          num: "06",
          title: "Phí dịch vụ bác sĩ / phẫu thuật / sinh đẻ theo yêu cầu tại BV công",
          limit: "Tối đa 10.000.000đ/năm",
          desc: "Gói sinh thường không tách bảng kê tính theo Nằm viện; Gói sinh mổ không tách bảng kê tính 50% Viện phí/ngày + 50% Phẫu thuật.",
        },
        {
          num: "07",
          title: "Chi phí chọn giờ, chọn bác sĩ phẫu thuật theo yêu cầu tại BV công",
          limit: "Nhóm 2 & 3: 3.000.000đ/năm · Nhóm 1: 5.000.000đ/năm",
          desc: "Hỗ trợ chi phí đăng ký chọn bác sĩ phẫu thuật hoặc chọn giờ mổ theo yêu cầu tại các bệnh viện công lập.",
        },
        {
          num: "08",
          title: "Suy thận, lọc máu, chạy thận nhân tạo",
          limit: "100% khi kèm BHYT (Không dùng BHYT: Đồng BH 50%)",
          desc: "Khuyến khích kết hợp thẻ BHYT nhà nước để được thanh toán 100% chi phí thuộc phạm vi hạn mức.",
        },
        {
          num: "09",
          title: "Thiết bị, dụng cụ y tế phục vụ trong quá trình phẫu thuật",
          limit: "Đồng chi trả 80% CTBH – 20% NĐBH",
          desc: "Mở rộng chi trả các dụng cụ, thiết bị y tế chuyên dụng phục vụ trực tiếp trong ca phẫu thuật.",
        },
        {
          num: "10",
          title: "Xét nghiệm phòng lây nhiễm trước khi phẫu thuật",
          limit: "Tối đa 1.000.000đ/năm",
          desc: "Chi trả các xét nghiệm sàng lọc bắt buộc trước phẫu thuật như HIV, HBsAg, HBsAb, HCV, Giang mai...",
        },
        {
          num: "11",
          title: "Khám & xét nghiệm ngoại trú có chẩn đoán bệnh nhưng BS không kê đơn thuốc",
          limit: "Nhóm 2 & 3: 1.000.000đ/năm · Nhóm 1: 3.000.000đ/năm",
          desc: "Vẫn được chi trả khi bác sĩ kết luận có bệnh lý nhưng chỉ định theo dõi/chế độ sinh hoạt mà không kê thuốc.",
        },
        {
          num: "12",
          title: "Xét nghiệm thường quy trong khám bệnh ngoại trú",
          limit: "Chi trả theo hạn mức Ngoại trú",
          desc: "Tổng phân tích nước tiểu, công thức máu, đường huyết, mỡ máu, gan, thận được chi trả nếu tìm ra bệnh và có chỉ định điều trị.",
        },
        {
          num: "13",
          title: "Xét nghiệm có kết quả bình thường nhưng liên quan triệu chứng bệnh",
          limit: "Nhóm 2 & 3: 1.000.000đ/năm · Nhóm 1: 1.500.000đ/năm",
          desc: "Điểm mới 2026–2027: Bảo vệ quyền lợi khi bác sĩ chỉ định xét nghiệm theo triệu chứng lâm sàng nhưng kết quả bình thường.",
        },
        {
          num: "14",
          title: "Mụn nhọt, mụn cơm, mụn cóc, mụn trứng cá, rụng tóc, tăng sắc tố, nám da",
          limit: "Nhóm 2 & 3: 1.000.000đ/năm · Nhóm 1: 3.000.000đ/năm",
          desc: "Điểm mới 2026–2027: Mở rộng chi trả khi có chẩn đoán và phác đồ điều trị về mặt y tế của bác sĩ chuyên khoa.",
        },
        {
          num: "15",
          title: "Vật tư y tế, thiết bị y tế sử dụng tại CSYT trong điều trị ngoại trú",
          limit: "Nhóm 3: 1tr/năm · Nhóm 2: 2tr/năm · Nhóm 1: 3tr/năm",
          desc: "Điểm mới 2026–2027: Mở rộng chi trả vật tư/thiết bị y tế sử dụng trực tiếp tại bệnh viện/phòng khám khi khám ngoại trú.",
        },
      ],
    },
    documents: {
      sectionTag: "III · TRUNG TÂM TÀI LIỆU & BIỂU MẪU (12 FILES GỐC)",
      title: "Tra cứu & Tải Tài liệu theo Đối tượng và Chủ đề",
      subtitle:
        "Chọn đúng đối tượng (Nhân viên / Người thân / Tài liệu chung) hoặc gõ từ khóa để tìm và tải ngay file PDF / Word gốc từ bộ hồ sơ hợp đồng Viettel IDC.",
      searchPlaceholder:
        "Tìm tài liệu: ví dụ 'sổ tay người thân', 'claim form', 'tai nạn', 'bảo lãnh', 'blacklist', 'papaya'...",
      audienceFilterLabel: "Đối tượng áp dụng:",
      audienceFilters: {
        all: "Tất cả tài liệu (12)",
        employee: "Dành cho Nhân viên",
        dependent: "Dành cho Người thân",
        shared: "Biểu mẫu & Quy tắc chung",
      },
      categoryFilterLabel: "Nhóm nội dung:",
      categoryFilters: {
        all: "Tất cả chủ đề",
        handbook: "Sổ tay BHSK (2)",
        forms: "Biểu mẫu bồi thường (2)",
        network_blacklist: "Bảo lãnh & Blacklist (2)",
        papaya_app: "App Papaya Care (2)",
        rules_exclusions: "Quy tắc & Loại trừ PJICO (4)",
      },
      viewOnlineBtn: "Xem trực tiếp",
      downloadFileBtn: "Tải file gốc",
      noResult: "Không tìm thấy tài liệu phù hợp với bộ lọc hiện tại. Vui lòng thử từ khóa khác hoặc chọn 'Tất cả tài liệu'.",
      resetFilterBtn: "Hiển thị tất cả 12 tài liệu",
    },
    claims: {
      sectionTag: "IV · HƯỚNG DẪN BẢO LÃNH & BỒI THƯỜNG",
      title: "Quy trình Bảo lãnh viện phí & Nộp hồ sơ Bồi thường",
      subtitle:
        "Linh hoạt sử dụng Bảo lãnh viện phí trực tiếp tại 530 CSYT, nộp online qua App Papaya Care (< 10 triệu VNĐ) hoặc gửi hồ sơ bản cứng về Bolttech Việt Nam.",
      tabProcess: "Sơ đồ Quy trình Bồi thường",
      tabDocs: "Danh mục Chứng từ Cần thiết",
      clickToZoom: "Phóng to sơ đồ",
      closeZoom: "Đóng chế độ phóng to",
      channelsTitle: "3 Phương thức Sử dụng Bảo hiểm & Yêu cầu Bồi thường",
      channels: [
        {
          badge: "Phương thức 1 · Không dùng tiền mặt",
          title: "Bảo lãnh Viện phí Trực tiếp (530 CSYT)",
          desc: "Xuất trình Thẻ bảo hiểm (hoặc Thẻ điện tử trên App Papaya Care) + CCCD/Giấy khai sinh tại quầy bảo lãnh của bệnh viện.",
          bullets: [
            "Thời gian chờ bảo lãnh Ngoại trú / Nha khoa: chỉ 15 – 30 phút",
            "Thời gian chờ bảo lãnh Nội trú / Thai sản: trong vòng 24 giờ",
            "Trẻ em đi khám bắt buộc phải có Bố hoặc Mẹ đi cùng",
            "Không bảo lãnh trực tiếp cho: Tai nạn, Cấp cứu, Dưỡng nhi & Trợ cấp, Khám trước/sau nhập viện (thanh toán trước, bồi thường sau)",
          ],
          docLabel: "Tải Danh sách 530 CSYT Bảo lãnh (.pdf)",
          docUrl: "/documents/danh-sach-co-so-y-te-bao-lanh-vien-phi.pdf",
        },
        {
          badge: "Phương thức 2 · Nộp Online 100%",
          title: "Nộp qua App Papaya Care (Hồ sơ < 10.000.000 VNĐ)",
          desc: "Áp dụng cho các hồ sơ khám Ốm bệnh, Nha khoa, Thai sản có tổng số tiền yêu cầu bồi thường dưới 10 triệu VNĐ.",
          bullets: [
            "Đăng nhập App Papaya Care bằng Số CCCD + Mã xác thực OTP",
            "Chụp ảnh rõ nét Sổ khám/Đơn thuốc, Kết quả XN và Hóa đơn VAT tải lên App",
            "Không cần điền Giấy yêu cầu bồi thường bản giấy",
            "Quản lý và nộp hồ sơ cho cả Bản thân & Người thân trên cùng 1 tài khoản",
          ],
          docLabel: "Tải Hướng dẫn Sử dụng App Papaya (.pdf)",
          docUrl: "/documents/huong-dan-su-dung-app-papaya.pdf",
        },
        {
          badge: "Phương thức 3 · Hồ sơ Bản cứng",
          title: "Gửi Văn phòng Bolttech (Hồ sơ >= 10 triệu hoặc Tai nạn/Tử vong)",
          desc: "Áp dụng cho hồ sơ từ 10.000.000 VNĐ trở lên, hoặc mọi hồ sơ điều trị do Tai nạn / Tử vong.",
          bullets: [
            "Thời hạn nộp hồ sơ: tối đa 365 ngày kể từ ngày điều trị",
            "Thời gian xử lý: 15 ngày làm việc thông báo kết quả + 05 ngày chuyển tiền",
            "Hà Nội: Gửi Mr. Dương Hùng Chiến (0838 830 038) – Tầng 11, Tòa nhà HAREC, 4A Láng Hạ",
            "TP.HCM: Gửi Ms. Nguyễn Thị Ánh Thuyết (0967 740 239) – Tầng 3, Tòa nhà An Khánh, 63 Phạm Ngọc Thạch",
          ],
          docLabel: "Tải Mẫu Giấy Yêu cầu Bồi thường (.doc)",
          docUrl: "/documents/PJICO-Claimform-TVTA.doc",
        },
      ],
      decreeWarningTitle: "CẢNH BÁO QUAN TRỌNG VỀ HÓA ĐƠN THEO NGHỊ ĐỊNH 70/2025/NĐ-CP",
      decreeWarningDesc:
        "Theo Nghị định 70/2025/NĐ-CP của Chính phủ: Toàn bộ Hóa đơn tài chính GTGT (VAT) khám chữa bệnh, viện phí và mua thuốc bắt buộc phải được xuất NGAY TRONG NGÀY khám bệnh / ngày xuất viện / ngày mua thuốc. Hóa đơn mua thuốc phải phát sinh trong vòng 05 ngày kể từ ngày bác sĩ kê đơn. Các hóa đơn xuất lùi ngày hoặc khác ngày điều trị sẽ bị từ chối chi trả.",
      lookupTitle: "Tra cứu nhanh trước khi đi khám",
      lookupSubtitle: "Kiểm tra kỹ mạng lưới bảo lãnh và danh sách loại trừ của PJICO trước khi sử dụng dịch vụ:",
      lookupLinks: [
        {
          title: "Danh sách 530 Cơ sở Y tế Bảo lãnh Viện phí (Cập nhật 28/10/2026)",
          desc: "Hệ thống 530 bệnh viện, phòng khám, nha khoa bảo lãnh trực tiếp trên toàn quốc.",
          url: "/documents/danh-sach-co-so-y-te-bao-lanh-vien-phi.pdf",
          type: "PDF",
        },
        {
          title: "Danh sách CSYT Loại trừ Bảo hiểm của PJICO (Blacklist - Cập nhật 12/08/2026)",
          desc: "Danh sách các phòng khám/bệnh viện từ chối chi trả hoàn toàn hoặc chỉ chi trả khi kèm BHYT.",
          url: "/documents/blacklist-co-so-y-te-loai-tru-pjico.pdf",
          type: "WARNING",
        },
        {
          title: "Hướng dẫn Cài đặt & Đăng nhập App Papaya Care",
          desc: "Cách tải ứng dụng Papaya Care và đăng nhập bằng Số CCCD + mã OTP.",
          url: "/documents/huong-dan-cai-dat-app-papaya.pdf",
          type: "PDF",
        },
        {
          title: "Hướng dẫn Sử dụng App Papaya Care (23 trang)",
          desc: "Cẩm nang xem thẻ điện tử, tra cứu hạn mức và nộp bồi thường online dưới 10 triệu VNĐ.",
          url: "/documents/huong-dan-su-dung-app-papaya.pdf",
          type: "PDF",
        },
      ],
      formsTitle: "Biểu mẫu Bồi thường & Quy tắc PJICO cần tải",
      formsSubtitle: "Tải trực tiếp các biểu mẫu Word (.doc) và Quy tắc bảo hiểm gốc trong thư mục dự án:",
      formsLinks: [
        {
          title: "Giấy yêu cầu trả tiền bảo hiểm (Claim Form)",
          subBadge: "Song ngữ Việt – Anh",
          desc: "Mẫu đơn chuẩn của PJICO dùng khi gửi hồ sơ bồi thường bản cứng.",
          url: "/documents/PJICO-Claimform-TVTA.doc",
          type: "DOC",
        },
        {
          title: "Biên bản tai nạn (Mẫu BM.22.2-03)",
          subBadge: "Bắt buộc khi Tai nạn",
          desc: "Bắt buộc bổ sung khi yêu cầu bồi thường chi phí y tế hoặc nghỉ điều trị do tai nạn.",
          url: "/documents/pjico-bm-22-2-03-bien-ban-tai-nan.doc",
          type: "DOC",
        },
        {
          title: "Trích lục 22 Điểm Loại trừ BH Sức khỏe & 24 Điểm Loại trừ BH Tai nạn",
          subBadge: "Chương III Quy tắc 383 & 384",
          desc: "Tóm tắt các trường hợp không thuộc phạm vi bảo hiểm của PJICO.",
          url: "/documents/loai-tru-bh-suc-khoe.pdf",
          type: "PDF",
        },
      ],
      downloadBtn: "Tải về",
      quickTipLead: "Mẹo nhanh:",
      quickTipTextBefore: "Bạn có thể hỏi trực tiếp",
      quickTipLink: "Trợ lý tư vấn AI",
      quickTipTextAfter:
        "tên bệnh viện bạn định khám để kiểm tra ngay viện đó có bảo lãnh viện phí hay nằm trong Blacklist không.",
    },
    notes: {
      sectionTag: "V · LƯU Ý QUAN TRỌNG & ĐIỀU KHOẢN LOẠI TRỪ",
      title: "10 Lưu ý Thiết yếu để Hồ sơ Được Chi trả Tối đa",
      subtitle:
        "Nắm vững các quy định dưới đây giúp Cán bộ nhân viên và Người thân Viettel IDC tránh bị từ chối hoặc yêu cầu bổ sung chứng từ:",
      blacklistUrl: "/documents/blacklist-co-so-y-te-loai-tru-pjico.pdf",
      items: [
        {
          bold: "1. Kiểm tra Danh sách từ chối bảo hiểm (Blacklist) của PJICO:",
          text: "Tuyệt đối không khám chữa bệnh tại các cơ sở bị từ chối toàn bộ trong ",
          linkText: "Danh sách Blacklist PJICO (cập nhật 12/08/2026)",
          afterLink:
            " (bao gồm 4 cơ sở mới tại TP.HCM: PK YHCT Hương Sen Healthcare Tân Bình và 3 cơ sở Lá Trà). Với các cơ sở chỉ chi trả khi kèm BHYT, bắt buộc phải quẹt thẻ BHYT.",
        },
        {
          bold: "2. Xuất Hóa đơn VAT ngay trong ngày khám (Nghị định 70/2025/NĐ-CP):",
          text: "Hóa đơn tài chính GTGT (VAT) của viện phí, xét nghiệm và thuốc phải được xuất ngay trong ngày khám bệnh / ngày ra viện. Hóa đơn mua thuốc phải trong vòng 05 ngày kể từ ngày bác sĩ kê toa.",
        },
        {
          bold: "3. Phân biệt ngưỡng 10.000.000 VNĐ khi nộp hồ sơ bồi thường:",
          text: "Hồ sơ dưới 10.000.000 VNĐ (trừ Tai nạn/Tử vong) nộp online nhanh chóng qua ứng dụng Papaya Care. Hồ sơ từ 10.000.000 VNĐ trở lên hoặc hồ sơ Tai nạn / Tử vong bắt buộc gửi chứng từ bản cứng về văn phòng Bolttech Việt Nam.",
        },
        {
          bold: "4. Phải có চẩn đoán bệnh cụ thể của Bác sĩ:",
          text: "Các trường hợp bác sĩ kết luận 'không rõ nguyên nhân', 'kiểm tra sức khỏe tổng quát/định kỳ' sẽ không thuộc phạm vi bảo hiểm. Tuy nhiên, Viettel IDC đã được mở rộng chi trả khám/xét nghiệm có chẩn đoán bệnh nhưng bác sĩ không kê thuốc (1tr – 3tr/năm) và xét nghiệm kết quả bình thường nhưng liên quan triệu chứng bệnh (1tr – 1,5tr/năm).",
        },
        {
          bold: "5. Lưu ý khi điều trị Nha khoa (Răng cơ bản):",
          text: "Được khám và điều trị tại mọi bệnh viện/phòng khám nha khoa hợp pháp có xuất hóa đơn VAT (trừ Blacklist). Nếu điều trị tủy răng hoặc nhổ răng bệnh lý/răng số 8, bắt buộc phải có Phim chụp X-quang răng trước khi điều trị kèm theo hồ sơ.",
        },
        {
          bold: "6. Lưu ý đối với hồ sơ Tai nạn:",
          text: "Cần có Biên bản tai nạn (Mẫu BM.22.2-03) có xác nhận của cơ quan/địa phương/công an. Nếu tai nạn xảy ra khi trực tiếp điều khiển xe máy trên 50cc hoặc ô tô, bắt buộc cung cấp bản sao Giấy phép lái xe (GPLX) hợp lệ và không vi phạm nồng độ cồn.",
        },
        {
          bold: "7. Lưu ý đối với Thai sản & Sinh đẻ:",
          text: "Nếu sinh mổ, bác sĩ cần ghi rõ nguyên nhân chỉ định sinh mổ y khoa trên Giấy ra viện / Giấy chứng nhận phẫu thuật. Nhớ tận dụng quyền lợi Trợ cấp sinh tại viện công (1 triệu VNĐ; hoặc 2tr sinh thường / 3tr sinh mổ nếu dùng BHYT > 70% tại khoa thường).",
        },
        {
          bold: "8. Điều trị Vật lý trị liệu & Phục hồi chức năng:",
          text: "Chỉ được bảo hiểm khi có chỉ định của bác sĩ chuyên khoa kèm phác đồ rõ ràng (số buổi, phương pháp) và thực hiện tại bệnh viện/cơ sở y tế hợp lệ (không chi trả tại các phòng khám Đông y/YHCT tư nhân).",
        },
        {
          bold: "9. Lưu ý bảo hiểm đối với Bệnh Ung thư:",
          text: "Không bảo hiểm cho người mắc hoặc khởi phát bệnh ung thư trước khi tham gia bảo hiểm (áp dụng cho người tham gia năm đầu). Khởi phát sau thời điểm tham gia được chi trả theo hạn mức. Kê khai không trung thực sẽ bị hủy bảo hiểm, không bồi thường và không hoàn phí.",
        },
        {
          bold: "10. Quy định đối với Người thân CBNV:",
          text: "Chương trình đăng ký người thân đầu kỳ đã hoàn tất thu xếp. Trong kỳ hợp đồng chỉ nhận bổ sung: vợ/chồng mới cưới, người thân của nhân viên mới, hoặc con mới sinh (đăng ký trong 45 ngày từ ngày sinh), thông báo trong 15 ngày đầu tháng tiếp theo. Hiệu lực bảo hiểm người thân tự động chấm dứt khi CBNV nghỉ việc.",
        },
      ],
    },
    contact: {
      sectionTag: "VI · LIÊN HỆ & ĐỘI NGŨ HỖ TRỢ",
      title: "Đội ngũ Chuyên viên Hỗ trợ Viettel IDC — Bolttech & Papaya",
      subtitle:
        "Liên hệ trực tiếp với chuyên viên quản lý hợp đồng hoặc bộ phận tiếp nhận hồ sơ bồi thường của Bolttech Việt Nam và TPA Papaya:",
      col1Title: "Quản lý Hợp đồng & Tư vấn (Bolttech)",
      col2Title: "Hỗ trợ Bồi thường & Nhận Hồ sơ Bản cứng",
      col3Title: "Địa chỉ Văn phòng Bolttech & TPA Papaya",
      northRegion: "Khu vực Hà Nội / Miền Bắc",
      southRegion: "Khu vực TP.HCM / Miền Nam",
      hanoiOffice: "Văn phòng Bolttech Hà Nội",
      hcmOffice: "Văn phòng Bolttech TP. Hồ Chí Minh",
      recipientPrefix: "Người nhận hồ sơ:",
      hanoiAddress:
        "Phòng 3, Tầng 11, Tòa nhà HAREC, Số 4A Láng Hạ, Phường Giảng Võ (Quận Ba Đình), Hà Nội",
      hcmAddress:
        "Tầng 3, Tòa nhà An Khánh, Số 63 Phạm Ngọc Thạch, Phường Xuân Hòa, TP. Hồ Chí Minh",
      ctaTitle: "Cần tra cứu nhanh? Hỏi Trợ lý AI Viettel IDC ngay!",
      ctaDesc:
        "Trợ lý AI đã được nạp toàn bộ 12 tài liệu hợp đồng Viettel IDC (Sổ tay Nhân viên, Sổ tay Người thân, 530 CSYT bảo lãnh, Blacklist PJICO, Quy tắc 383 & 384, App Papaya). Nhấn vào câu hỏi gợi ý bên dưới để thử ngay:",
      suggestedQuestions: [
        "So sánh điểm khác nhau giữa chương trình Nhân viên và Người thân?",
        "Quyền lợi Ngoại trú & Nha khoa Nhóm 1, 2, 3 được chi trả thế nào?",
        "Hồ sơ dưới 10 triệu nộp qua App Papaya Care cần giấy tờ gì?",
        "Quyền lợi Thai sản sinh thường, sinh mổ và trợ cấp viện công?",
        "Danh sách phòng khám nằm trong Blacklist mới nhất của PJICO?",
        "Cho tôi xin link tải Giấy yêu cầu bồi thường và Biên bản tai nạn?",
      ],
      openChatBtn: "Mở khung chat Trợ lý AI 24/7",
      hotlinePrefix: "Hotline TPA Papaya (Bảo lãnh & App):",
    },
    chatbot: {
      headerTitle: "Trợ lý Bảo hiểm Viettel IDC AI",
      headerSub: "Đã nạp 12 tài liệu Nhân viên & Người thân (2026–2027)",
      welcomeMsg:
        "Xin chào! Tôi là **Trợ lý AI của Bolttech Việt Nam** phụ trách chương trình bảo hiểm **Viettel IDC (01/10/2026 – 30/09/2027)**.\n\nTôi đã được nạp toàn bộ **12 tài liệu gốc** của chương trình:\n- Quyền lợi **Nhân viên** & **Người thân** (Nhóm 1, Nhóm 2, Nhóm 3)\n- **15 Quyền lợi mở rộng** & **6 điểm mới 2026–2027**\n- Hướng dẫn **App Papaya Care** (< 10 triệu) & Hồ sơ bản cứng\n- Tra cứu **530 CSYT bảo lãnh** & **Blacklist PJICO**\n- Cung cấp link tải trực tiếp Sổ tay, Claim Form, Biên bản tai nạn",
      inputPlaceholder: "Hỏi quyền lợi NV/Người thân, viện bảo lãnh, tải biểu mẫu...",
      sendBtn: "Gửi",
      thinking: "Đang tra cứu 12 tài liệu bảo hiểm Viettel IDC...",
      quickPromptsLabel: "Câu hỏi thường gặp:",
      clearChat: "Làm mới hội thoại",
    },
    footer: {
      copyright:
        "Bản quyền © 2026 Bolttech Việt Nam · Cổng thông tin Bảo hiểm Sức khỏe & Tai nạn Viettel IDC (2026 – 2027)",
      backToTop: "Lên đầu trang ↑",
    },
  },
  en: {
    brand: {
      company: "Bolttech Vietnam",
      clientSub: "Viettel IDC · 2026 – 2027 Policy",
      skipToContent: "Skip to main content",
    },
    nav: {
      general: "Overview",
      benefits: "Benefits (Staff & Family)",
      documents: "Document Hub (12)",
      claims: "Claims & App",
      notes: "Notes & Exclusions",
      contact: "Contact",
      admin: "Admin",
      lookupDocsBtn: "Search & Download Docs",
    },
    audienceSwitcher: {
      label: "Viewing insurance program for:",
      employee: "Viettel IDC Employees",
      dependent: "Family Dependents",
      compare: "Compare Staff vs. Family",
      employeeBadge: "Employee Policy",
      dependentBadge: "Dependent Policy",
      compareBadge: "Side-by-Side Comparison",
      employeeDesc:
        "For Viettel IDC Employees under labor/probation contracts: Waived waiting period for special/pre-existing diseases, pro-rata maternity waiting period (270/60 days), Group 1 room limit up to 25,000,000 VND/day, and accident medical leave allowance.",
      dependentDesc:
        "For enrolled Biological Parents, Parents-in-law, Legal Spouse, and Children: Waived waiting period if continuously renewed for 1 full year (new enrollees: 365d special/pre-existing, 270d childbirth), Group 1 room limit: 15,000,000 VND/day.",
      compareDesc:
        "Side-by-side comparison of similarities and key differences between the Viettel IDC Employee Policy and Family Dependent Policy (2026–2027).",
    },
    hero: {
      badge: "HEALTH & PERSONAL ACCIDENT INSURANCE · 01/10/2026 – 30/09/2027",
      title: "Viettel IDC Health & Accident Insurance Portal",
      subtitle:
        "Explore Group 1, 2, and 3 coverage for both Employees and Family Dependents, filter and download all 12 official policy documents & claim forms, follow Papaya Care app guides, or ask our 24/7 AI Insurance Advisor.",
      btnBenefits: "Explore Benefits",
      btnDocuments: "12 Documents & Forms Hub",
      btnClaims: "Claims Guide",
      btnChat: "Ask 24/7 AI Advisor",
    },
    general: {
      sectionTag: "I · Policy Overview & 2026 – 2027 Highlights",
      title: "Viettel IDC Group Health & Personal Accident Policy",
      policyBadge: "PJICO · PAPAYA · BOLTTECH",
      items: [
        {
          label: "POLICYHOLDER",
          value: "Viettel IDC",
          sub: "Employee & Family Dependent Program",
        },
        {
          label: "INSURER & TPA",
          value: "PJICO & Papaya",
          sub: "Advised & managed by Bolttech VN",
        },
        {
          label: "POLICY PERIOD",
          value: "01/10/2026 – 30/09/2027",
          sub: "Both days inclusive (12 months)",
        },
        {
          label: "GEOGRAPHICAL SCOPE",
          value: "Accident: Worldwide",
          sub: "Health: Vietnam (Group 1: Asia)",
        },
      ],
      changesTitleEmployee: "6 Key Policy Upgrades for 2026 – 2027 (Employee Program)",
      changesTitleDependent: "5 Key Policy Upgrades for 2026 – 2027 (Family Dependent Program)",
      changesSubtitle:
        "Enhanced coverage terms and newly negotiated benefit extensions for the 2026 – 2027 policy period:",
      changesEmployee: [
        {
          tag: "Employee Group 1 Only",
          title: "CEO / Deputy CEO Room & Board increased to 25,000,000 VND/day",
          desc: "Daily Room & Board limit for Group 1 Employees increased from 15,000,000 VND/day (2026) to 25,000,000 VND/day (2027). (Note: Group 1 Dependents remain at 15,000,000 VND/day).",
        },
        {
          tag: "New Upgrade",
          title: "Diagnostic tests with normal results related to disease symptoms",
          desc: "Group 1 increased from 1,000,000 VND to 1,500,000 VND/year; Groups 2 & 3 expanded from Not Covered to 1,000,000 VND/year.",
        },
        {
          tag: "New Upgrade",
          title: "Alternative brand drugs with identical active ingredients",
          desc: "Covers non-prescribed brand-name medications sharing the exact active ingredient as prescribed drugs (reimbursed up to the market price of the prescribed medicine).",
        },
        {
          tag: "New Upgrade",
          title: "Medical treatment for acne, warts, hair loss, hyperpigmentation & melasma",
          desc: "Covers medically indicated dermatological treatment: Groups 2 & 3 up to 1,000,000 VND/year; Group 1 up to 3,000,000 VND/year.",
        },
        {
          tag: "New Upgrade",
          title: "Pre-admission screening tests (HIV, Syphilis, Hepatitis, COVID)",
          desc: "Covers mandatory hospital screening tests prior to inpatient admission under Inpatient benefits.",
        },
        {
          tag: "New Upgrade",
          title: "Medical supplies & equipment used at clinics during Outpatient visits",
          desc: "Expanded outpatient medical supplies limit: Group 3 up to 1,000,000 VND/yr; Group 2 up to 2,000,000 VND/yr; Group 1 up to 3,000,000 VND/yr.",
        },
      ],
      waitingTitle: "Eligibility & Waiting Periods (Employees vs. Family Dependents)",
      waitingSubtitle:
        "Note: Members continuously insured for a full year under the 2025–2026 policy have their waiting periods WAIVED for renewed equivalent benefits.",
      waitingCols: {
        criteria: "Policy Rule",
        employee: "EMPLOYEE Program (CBNV)",
        dependent: "FAMILY DEPENDENT Program",
      },
      waitingRows: [
        {
          criteria: "Eligible Age & Enrollment Rules",
          employee:
            "15 days to 65 years old with labor/probation contract. Renewal up to under 70 yrs (+50% premium, excludes Death/Disability).",
          dependent:
            "Biological Parents, Parents-in-law, Legal Spouse, Legal Children (15 days – 18 yrs, or up to 25 yrs if in continuous full-time study & excluding maternity). Plan tier <= Employee's tier.",
          highlightDiff: true,
        },
        {
          criteria: "Mid-Term Additions",
          employee: "Added monthly per Viettel IDC HR onboarding list.",
          dependent:
            "Mid-term additions only for: (1) Newlywed spouse, (2) Dependents of newly hired employees, (3) Newborns registered within 45 days of birth (reported within the first 15 days of the following month).",
          highlightDiff: true,
        },
        {
          criteria: "Accidents & Common Illnesses",
          employee: "Waived (0 days)",
          dependent: "Waived (0 days)",
          highlightDiff: false,
        },
        {
          criteria: "Special & Pre-existing Conditions",
          employee: "Waived (0 days)",
          dependent: "365 days (for first-time enrollees; waived if insured for 1 full year in prior term)",
          highlightDiff: true,
        },
        {
          criteria: "Childbirth (Maternity)",
          employee: "Pro-rata 270 days",
          dependent: "Full 270 days",
          highlightDiff: true,
        },
        {
          criteria: "Maternity Complications",
          employee: "Pro-rata 60 days",
          dependent: "Full 60 days",
          highlightDiff: true,
        },
        {
          criteria: "Death / Permanent Disability due to Illness",
          employee: "Common illness / unknown cause: 30 days · Special/pre-existing/maternity: 365 days",
          dependent: "Common illness / unknown cause: 30 days · Special/pre-existing/maternity: 365 days",
          highlightDiff: false,
        },
      ],
    },
    benefits: {
      sectionTag: "II · DETAILED BENEFIT SCHEDULES",
      title: "Coverage by 3 Job Grades & 15 Special Extensions",
      subtitle:
        "Switch between Employee, Family Dependent, or Comparison view to inspect exact limits across Group 1, Group 2, and Group 3.",
      colBenefit: "Benefit Category",
      tabs: {
        overview: "Overview & Accident",
        inpatient: "Inpatient & Surgery",
        maternity: "Maternity & Childbirth",
        outpatient: "Outpatient & Dental",
        extensions: "15 Special Extensions",
      },
      downloadHandbookEmployee: "Employee Handbook (.pdf)",
      downloadHandbookDependent: "Dependent Handbook (.pdf)",
      extensionsTitle: "15 Special Benefit Extensions for Viettel IDC",
      extensionsSubtitle:
        "Items normally excluded under standard policy rules that are specially covered for Viettel IDC Employees and Family Dependents:",
      extensionsList: [
        {
          num: "01",
          title: "Saline Nasal Sprays (Outpatient)",
          limit: "Group 3: 400,000 VND/yr · Groups 1 & 2: 500,000 VND/yr",
          desc: "Covers 0.9% Sodium Chloride, Sterimar, Humer, Marimer, Xisat, etc. prescribed for nasal/sinus treatment.",
        },
        {
          num: "02",
          title: "High-Tech Surgical Instruments (Longo, Stent, Catheter, Mesh, Coblation...)",
          limit: "80% Insurer – 20% Insured Co-payment",
          desc: "Applies to Longo staplers, stents, catheters, hernia mesh, Hummer, plasma, coblation, Shaver, stone baskets, ultrasonic scalpels.",
        },
        {
          num: "03",
          title: "Therapeutic Vitamins & Minerals",
          limit: "Group 3: 400,000 VND/yr · Groups 1 & 2: 500,000 VND/yr",
          desc: "Covered when prescribed alongside primary medication and vitamin cost does not exceed primary medication cost.",
        },
        {
          num: "04",
          title: "Biochemical & Metabolic Abnormalities",
          limit: "Covered under Inpatient / Outpatient limits",
          desc: "Covers hyperlipidemia (high cholesterol), elevated liver enzymes, hypocalcemia, hypokalemia, etc.",
        },
        {
          num: "05",
          title: "Orthopedic Pins, Plates, Screws & Discs (Accident)",
          limit: "80% Insurer – 20% Insured Co-payment",
          desc: "Covers surgical fixation hardware required due to covered accidental injuries.",
        },
        {
          num: "06",
          title: "On-Demand Doctor / Surgery / Delivery Fees at Public Hospitals",
          limit: "Up to 10,000,000 VND/year",
          desc: "Unitemized normal delivery packages count toward Hospitalization; unitemized C-section packages split 50% Room & Board + 50% Surgery.",
        },
        {
          num: "07",
          title: "Surgeon Selection & Scheduled Surgery Time Fees at Public Hospitals",
          limit: "Groups 2 & 3: 3,000,000 VND/yr · Group 1: 5,000,000 VND/yr",
          desc: "Covers fees for choosing a specific surgeon or surgery time slot at public hospitals.",
        },
        {
          num: "08",
          title: "Renal Failure & Hemodialysis",
          limit: "100% with BHYT (50% Co-pay without BHYT)",
          desc: "Reimburses 100% of eligible expenses when combined with Vietnam Social Health Insurance (BHYT).",
        },
        {
          num: "09",
          title: "Surgical Medical Devices & Instruments",
          limit: "80% Insurer – 20% Insured Co-payment",
          desc: "Covers specialized medical instruments and devices used during surgery.",
        },
        {
          num: "10",
          title: "Pre-Surgery Infection Screening Tests",
          limit: "Up to 1,000,000 VND/year",
          desc: "Covers HIV, HBsAg, HBsAb, HCV, Syphilis screening tests required prior to surgery.",
        },
        {
          num: "11",
          title: "Outpatient Consultation & Lab Tests with Diagnosis but No Prescription",
          limit: "Groups 2 & 3: 1,000,000 VND/yr · Group 1: 3,000,000 VND/yr",
          desc: "Covered when a doctor confirms a diagnosis but recommends monitoring without prescribing medication.",
        },
        {
          num: "12",
          title: "Routine Lab Tests During Outpatient Visits",
          limit: "Covered under Outpatient limit",
          desc: "Urinalysis, CBC, blood glucose, lipid panel, liver & kidney function tests are covered if pathology is found and treated.",
        },
        {
          num: "13",
          title: "Normal Diagnostic Test Results Related to Presenting Symptoms",
          limit: "Groups 2 & 3: 1,000,000 VND/yr · Group 1: 1,500,000 VND/yr",
          desc: "2026–2027 Upgrade: Covers doctor-ordered tests for clinical symptoms even when results return normal.",
        },
        {
          num: "14",
          title: "Medical Treatment for Acne, Warts, Hair Loss, Hyperpigmentation & Melasma",
          limit: "Groups 2 & 3: 1,000,000 VND/yr · Group 1: 3,000,000 VND/yr",
          desc: "2026–2027 Upgrade: Covered when medically diagnosed and treated by a physician.",
        },
        {
          num: "15",
          title: "Outpatient Medical Supplies & Equipment Used at Clinics",
          limit: "Group 3: 1M/yr · Group 2: 2M/yr · Group 1: 3M/yr",
          desc: "2026–2027 Upgrade: Covers medical supplies and equipment used at medical facilities during outpatient care.",
        },
      ],
    },
    documents: {
      sectionTag: "III · DOCUMENT & FORM CENTER (ALL 12 OFFICIAL FILES)",
      title: "Smart Document Search by Target Audience & Category",
      subtitle:
        "Filter by target audience (Employee / Dependent / Shared) or type any keyword to preview and download the original PDF and Word (.doc) files.",
      searchPlaceholder:
        "Search documents: e.g. 'dependent handbook', 'claim form', 'accident', 'direct billing', 'blacklist', 'papaya'...",
      audienceFilterLabel: "Target Audience:",
      audienceFilters: {
        all: "All Documents (12)",
        employee: "For Employees",
        dependent: "For Dependents",
        shared: "Shared Forms & Rules",
      },
      categoryFilterLabel: "Category:",
      categoryFilters: {
        all: "All Categories",
        handbook: "Handbooks (2)",
        forms: "Claim Forms (2)",
        network_blacklist: "Network & Blacklist (2)",
        papaya_app: "Papaya Care App (2)",
        rules_exclusions: "PJICO Rules & Exclusions (4)",
      },
      viewOnlineBtn: "Preview Online",
      downloadFileBtn: "Download File",
      noResult: "No documents match your current filters. Try another keyword or click 'Show all 12 documents'.",
      resetFilterBtn: "Show all 12 documents",
    },
    claims: {
      sectionTag: "IV · DIRECT BILLING & CLAIMS GUIDE",
      title: "Cashless Direct Billing & Reimbursement Procedures",
      subtitle:
        "Use direct billing at 530 hospitals nationwide, submit claims under 10M VND via the Papaya Care app, or send hard-copy files to Bolttech Vietnam.",
      tabProcess: "Claims Process Flowchart",
      tabDocs: "Required Claim Documents",
      clickToZoom: "Zoom diagram",
      closeZoom: "Close full screen view",
      channelsTitle: "3 Ways to Use Your Coverage & Submit Claims",
      channels: [
        {
          badge: "Method 1 · Cashless",
          title: "Direct Billing at 530 Medical Facilities",
          desc: "Present your Insurance Card (or Papaya Care e-Card) + National ID / Birth Certificate at the hospital's insurance desk.",
          bullets: [
            "Outpatient / Dental guarantee time: 15 – 30 minutes",
            "Inpatient / Maternity guarantee time: within 24 hours",
            "Children under 18 must be accompanied by a parent",
            "Direct billing not applicable to: Accidents, Emergency, Newborn care & allowances, Pre/Post-hospital visits (pay upfront and claim later)",
          ],
          docLabel: "Download 530 Direct Billing Hospitals (.pdf)",
          docUrl: "/documents/danh-sach-co-so-y-te-bao-lanh-vien-phi.pdf",
        },
        {
          badge: "Method 2 · 100% Online",
          title: "Papaya Care App Submission (Claims < 10,000,000 VND)",
          desc: "For Illness, Dental, and Maternity claims with total requested reimbursement under 10,000,000 VND.",
          bullets: [
            "Log in to Papaya Care using your National ID (CCCD) + OTP code",
            "Take clear photos of medical records, prescriptions, lab results, and VAT invoices",
            "No paper Claim Form required when submitting via the app",
            "Switch easily between Employee and Dependent profiles in one account",
          ],
          docLabel: "Download Papaya Care App Manual (.pdf)",
          docUrl: "/documents/huong-dan-su-dung-app-papaya.pdf",
        },
        {
          badge: "Method 3 · Hard-Copy Filing",
          title: "Bolttech Offices (Claims >= 10M VND or Accident / Death)",
          desc: "Mandatory for claims of 10,000,000 VND or above, and all Accident or Death claims.",
          bullets: [
            "Submission deadline: up to 365 days from treatment date",
            "Turnaround time: 15 working days for assessment + 5 working days for bank transfer",
            "Hanoi: Mr. Duong Hung Chien (0838 830 038) – 11th Fl, HAREC Bldg, 4A Lang Ha",
            "HCMC: Ms. Nguyen Thi Anh Thuyet (0967 740 239) – 3rd Fl, An Khanh Bldg, 63 Pham Ngoc Thach",
          ],
          docLabel: "Download Bilingual Claim Form (.doc)",
          docUrl: "/documents/PJICO-Claimform-TVTA.doc",
        },
      ],
      decreeWarningTitle: "MANDATORY VAT INVOICE TIMING UNDER DECREE 70/2025/NĐ-CP",
      decreeWarningDesc:
        "Pursuant to Government Decree 70/2025/NĐ-CP: All official VAT invoices for medical consultations, hospital stays, and pharmacy purchases MUST be issued ON THE SAME DAY as the examination, hospital discharge, or medication purchase. Prescription medication must be purchased within 05 days of the prescription date.",
      lookupTitle: "Pre-Visit Lookup",
      lookupSubtitle: "Check the hospital network and PJICO blacklist before visiting a clinic:",
      lookupLinks: [
        {
          title: "530 Direct Billing Hospitals Nationwide (Updated 28/10/2026)",
          desc: "Full list of hospitals, clinics, and dental centers supporting cashless billing.",
          url: "/documents/danh-sach-co-so-y-te-bao-lanh-vien-phi.pdf",
          type: "PDF",
        },
        {
          title: "PJICO Blacklisted Medical Facilities (Updated 12/08/2026)",
          desc: "Clinics and hospitals excluded from reimbursement (or covered only with BHYT).",
          url: "/documents/blacklist-co-so-y-te-loai-tru-pjico.pdf",
          type: "WARNING",
        },
        {
          title: "Papaya Care App Installation & Login Guide",
          desc: "How to install Papaya Care and log in with National ID (CCCD) + OTP.",
          url: "/documents/huong-dan-cai-dat-app-papaya.pdf",
          type: "PDF",
        },
        {
          title: "Papaya Care User Manual (23 Pages)",
          desc: "Step-by-step guide to viewing e-cards and filing online claims under 10M VND.",
          url: "/documents/huong-dan-su-dung-app-papaya.pdf",
          type: "PDF",
        },
      ],
      formsTitle: "Downloadable Claim Forms & PJICO Policy Rules",
      formsSubtitle: "Direct download links to official Word (.doc) forms and PJICO rules:",
      formsLinks: [
        {
          title: "PJICO Health Insurance Claim Form",
          subBadge: "Bilingual VI – EN",
          desc: "Official claim form required for hard-copy claim submissions.",
          url: "/documents/PJICO-Claimform-TVTA.doc",
          type: "DOC",
        },
        {
          title: "Accident Report Form (BM.22.2-03)",
          subBadge: "Mandatory for Accidents",
          desc: "Required when claiming medical expenses or leave allowance due to an accident.",
          url: "/documents/pjico-bm-22-2-03-bien-ban-tai-nan.doc",
          type: "DOC",
        },
        {
          title: "22 Health Exclusions & 24 Accident Exclusions Summary",
          subBadge: "Chapter III Rules 383 & 384",
          desc: "Quick reference of PJICO policy exclusion clauses.",
          url: "/documents/loai-tru-bh-suc-khoe.pdf",
          type: "PDF",
        },
      ],
      downloadBtn: "Download",
      quickTipLead: "Quick Tip:",
      quickTipTextBefore: "Ask our",
      quickTipLink: "AI Insurance Advisor",
      quickTipTextAfter:
        "the name of any clinic or hospital to instantly check if it supports direct billing or is on the PJICO Blacklist.",
    },
    notes: {
      sectionTag: "V · IMPORTANT NOTES & EXCLUSIONS",
      title: "10 Essential Rules to Ensure Smooth Claim Reimbursement",
      subtitle:
        "Follow these guidelines to help Viettel IDC Employees and Family Dependents maximize coverage and avoid claim delays:",
      blacklistUrl: "/documents/blacklist-co-so-y-te-loai-tru-pjico.pdf",
      items: [
        {
          bold: "1. Check PJICO's Blacklist Before Every Visit:",
          text: "Do not seek treatment at excluded clinics on the ",
          linkText: "PJICO Blacklist (updated 12/08/2026)",
          afterLink:
            " (including 4 newly added HCMC clinics: Huong Sen Healthcare Tan Binh and 3 La Tra locations). For facilities requiring BHYT co-payment, you must present your state BHYT card.",
        },
        {
          bold: "2. Same-Day VAT Invoices Mandatory (Decree 70/2025/NĐ-CP):",
          text: "Official VAT invoices for consultations, hospitalization, and medicine must be issued on the exact day of visit/discharge. Medication must be bought within 05 days of the prescription date.",
        },
        {
          bold: "3. 10,000,000 VND Threshold for Online vs. Hard-Copy Claims:",
          text: "Claims under 10,000,000 VND (excluding Accident/Death) can be submitted online via the Papaya Care app. Claims of 10,000,000 VND or more, or any Accident/Death claim, must be sent in hard copy to Bolttech Vietnam.",
        },
        {
          bold: "4. Specific Medical Diagnosis Required:",
          text: "Visits concluded as 'unknown cause' or 'routine check-up' are excluded. However, Viettel IDC's policy specially covers diagnosed outpatient visits without medication (1M–3M/yr) and symptom-related normal test results (1M–1.5M/yr).",
        },
        {
          bold: "5. Dental Treatment Requirements:",
          text: "You may visit any licensed dental clinic/hospital that issues valid VAT invoices (except Blacklisted clinics). Root canal treatment and pathological/wisdom tooth extraction require pre-treatment dental X-ray films.",
        },
        {
          bold: "6. Accident Claim Documentation:",
          text: "Requires an Accident Report (Form BM.22.2-03) confirmed by the company/local authority/police. Traffic accidents while driving a vehicle > 50cc or car require a valid Driver's License copy and compliance with alcohol limits.",
        },
        {
          bold: "7. Maternity & C-Section Notes:",
          text: "For C-sections, ensure the medical reason/indication is clearly stated on the discharge summary. Remember to claim the Public Hospital Delivery Allowance (1M VND; or 2M Normal / 3M C-section when BHYT pays > 70% in standard wards).",
        },
        {
          bold: "8. Physiotherapy & Rehabilitation:",
          text: "Covered only when prescribed by a physician with a clear treatment plan and performed at a licensed hospital/medical center (excluded at private traditional medicine/acupuncture clinics).",
        },
        {
          bold: "9. Cancer Coverage Rule:",
          text: "Pre-existing cancer prior to initial policy enrollment is excluded. Cancer onset after joining the policy is covered up to policy limits. Dishonest declaration voids coverage without refund.",
        },
        {
          bold: "10. Family Dependent Policy Rules:",
          text: "Initial family enrollment has concluded. Mid-term additions are restricted to newlywed spouses, dependents of new hires, or newborns (registered within 45 days of birth), reported within the first 15 days of the next month. Dependent coverage terminates when the employee leaves Viettel IDC.",
        },
      ],
    },
    contact: {
      sectionTag: "VI · CONTACT & SUPPORT TEAM",
      title: "Dedicated Viettel IDC Support Team — Bolttech & Papaya",
      subtitle:
        "Reach out directly to Bolttech Vietnam account managers, claims specialists, or the Papaya TPA hotline:",
      col1Title: "Contract Management & Consultation (Bolttech)",
      col2Title: "Claims Support & Hard-Copy Reception",
      col3Title: "Bolttech Offices & Papaya TPA",
      northRegion: "Hanoi / Northern Region",
      southRegion: "HCMC / Southern Region",
      hanoiOffice: "Bolttech Hanoi Office",
      hcmOffice: "Bolttech Ho Chi Minh City Office",
      recipientPrefix: "Attn:",
      hanoiAddress:
        "Room 3, 11th Floor, HAREC Building, 4A Lang Ha, Giang Vo Ward (Ba Dinh), Hanoi",
      hcmAddress:
        "3rd Floor, An Khanh Building, 63 Pham Ngoc Thach, Xuan Hoa Ward, Ho Chi Minh City",
      ctaTitle: "Need instant answers? Ask the Viettel IDC AI Advisor!",
      ctaDesc:
        "Our AI Advisor is loaded with all 12 official Viettel IDC policy documents (Employee Handbook, Dependent Handbook, 530 Direct Billing Hospitals, PJICO Blacklist, Rules 383 & 384, Papaya App Guides). Click a question below:",
      suggestedQuestions: [
        "What are the differences between Employee and Dependent coverage?",
        "How much is covered for Outpatient & Dental under Groups 1, 2, 3?",
        "How do I submit a claim under 10M VND on the Papaya Care app?",
        "What are the Maternity limits for normal delivery and C-section?",
        "Which clinics are on PJICO's latest Blacklist?",
        "Where can I download the Claim Form and Accident Report?",
      ],
      openChatBtn: "Open 24/7 AI Advisor Chat",
      hotlinePrefix: "Papaya TPA Hotline (Direct Billing & App):",
    },
    chatbot: {
      headerTitle: "Viettel IDC AI Insurance Advisor",
      headerSub: "Loaded with all 12 Employee & Dependent Docs (2026–2027)",
      welcomeMsg:
        "Hello! I am the **Bolttech Vietnam AI Advisor** for **Viettel IDC (01/10/2026 – 30/09/2027)**.\n\nI have full access to all **12 official policy documents**:\n- **Employee** & **Family Dependent** benefits (Groups 1, 2, 3)\n- **15 Special Extensions** & **2026–2027 Upgrades**\n- **Papaya Care App** (< 10M VND) & hard-copy claim guides\n- **530 Direct Billing Hospitals** & **PJICO Blacklist**\n- Direct download links for Handbooks, Claim Form & Accident Report",
      inputPlaceholder: "Ask about Employee/Dependent benefits, hospitals, forms...",
      sendBtn: "Send",
      thinking: "Searching 12 Viettel IDC policy documents...",
      quickPromptsLabel: "Suggested questions:",
      clearChat: "Reset chat",
    },
    footer: {
      copyright:
        "Copyright © 2026 Bolttech Vietnam · Viettel IDC Health & Accident Insurance Portal (2026 – 2027)",
      backToTop: "Back to top ↑",
    },
  },
};
