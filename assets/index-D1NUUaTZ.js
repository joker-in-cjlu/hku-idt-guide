(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerPolicy&&(i.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?i.credentials="include":c.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(c){if(c.ep)return;c.ep=!0;const i=n(c);fetch(c.href,i)}})();const De={};let G=null;function R(e,t){De[e]=t}function ee(e){window.location.hash="#"+e}function Ie(){const e=window.location.hash.slice(1)||"/home",t=e.indexOf("?");return t<0?e:e.slice(0,t)}function We(){const e=()=>{const t=Ie(),n=De[t];G&&(G(),G=null),n&&(G=n()||null)};window.addEventListener("hashchange",e),e()}const ue=[{date:"2026-08-06",endDate:"2026-08-14",title:"硕士课程选课时间(Course Selection)",type:"adddrop",tentative:!1},{date:"2026-09-01",endDate:"",title:"第一学期开学 · 首日授课",type:"teaching",tentative:!1},{date:"2026-09-01",endDate:"2026-09-14",title:"第一学期加退选(Add/Drop)",type:"adddrop",tentative:!1},{date:"2026-10-01",endDate:"",title:"国庆节公众假期",type:"holiday",tentative:!1},{date:"2026-10-12",endDate:"2026-10-17",title:"阅读周 Reading Week(停课)",type:"reading",tentative:!1},{date:"2026-10-19",endDate:"",title:"重阳节公众假期",type:"holiday",tentative:!1},{date:"2026-11-30",endDate:"",title:"第一学期最后授课日",type:"teaching",tentative:!1},{date:"2026-12-01",endDate:"2026-12-07",title:"复习周 Revision Period",type:"revision",tentative:!1},{date:"2026-12-08",endDate:"2026-12-23",title:"第一学期考试周",type:"exam",tentative:!1},{date:"2026-12-24",endDate:"2027-01-17",title:"圣诞及新年学期假",type:"holiday",tentative:!1},{date:"2027-01-18",endDate:"",title:"第二学期开学 · 首日授课",type:"teaching",tentative:!1},{date:"2027-01-18",endDate:"2027-02-01",title:"第二学期加退选(Add/Drop)",type:"adddrop",tentative:!1},{date:"2027-02-05",endDate:"2027-02-11",title:"农历新年假期",type:"holiday",tentative:!0},{date:"2027-03-08",endDate:"2027-03-13",title:"阅读周 Reading Week(停课)",type:"reading",tentative:!0},{date:"2027-04-03",endDate:"2027-04-09",title:"清明 / 复活节假期",type:"holiday",tentative:!0},{date:"2027-05-01",endDate:"",title:"第二学期最后授课日",type:"teaching",tentative:!0},{date:"2027-05-03",endDate:"2027-05-08",title:"复习周 Revision Period",type:"revision",tentative:!0},{date:"2027-05-10",endDate:"2027-05-29",title:"第二学期考试周",type:"exam",tentative:!0},{date:"2027-06-21",endDate:"2027-08-07",title:"暑校教学时段(选修)",type:"teaching",tentative:!0}],H={teaching:{label:"教学",color:"#00573f"},adddrop:{label:"选课/加退选",color:"#1a56b8"},reading:{label:"阅读周",color:"#7a5195"},revision:{label:"复习周",color:"#b8741a"},exam:{label:"考试",color:"#c0392b"},holiday:{label:"假期",color:"#2e8b57"}},Ue=[{name:"2026-27 第一学期",start:"2026-09-01",end:"2026-12-23"},{name:"2026-27 第二学期",start:"2027-01-18",end:"2027-05-29"}],pe=[{code:"IDAT7211",title:"Innovation and R & D Principle",titleZh:"创新与研发原理",list:"A",credits:6,semester:"1&2",desc:"聚焦创新设计原理与基础技术:技术发明史与现代生活、设计流程与创意思维、设计简报与规格制定、物联网(IoT)概念。培养产品设计中的创造性、分析性与批判性思维,并运用建模工具进行表达沟通。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7212",title:"Mechatronic Systems Engineering",titleZh:"机电一体化系统工程",list:"A",credits:6,semester:"1&2",desc:"融合机械、电子与软件工程:基于模型的机电系统设计、多域建模与仿真、鲁棒控制方法、性能分析评估、系统诊断与维护、IoT 应用。学生需通过迷你项目开发具体的机电一体化产品。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7213",title:"UAV Design, Navigation and Control",titleZh:"无人机设计、导航与控制",list:"A",credits:6,semester:"1&2",desc:"探索小型无人机关键技术:传感器标定、GPS/IMU 导航、视觉-惯性导航、激光雷达导航、非线性动态逆与最优控制,并在真实无人机平台上开展前沿导航控制实验。",prereq:"良好的 MATLAB、C/C++ 编程能力与动手实践经验",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7214",title:"Advanced Technologies and Materials for Product Development",titleZh:"产品开发先进技术与材料",list:"A",credits:6,semester:"2",desc:"面向产品开发的先进制造技术与新型材料:2026-27 课表新增开课(第二学期,周五下午)。课程详情与 List 归属以学院最终公布大纲为准。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7215",title:"Computer Programming for Product Development and Applications",titleZh:"产品开发计算机编程与应用",list:"A",credits:6,semester:"1",desc:"面向产品开发的实用编程技能:基础编程技术及其在软件控制、Web 应用与 IoT 中的应用;另涵盖 Excel 编程,释放其在数据挖掘与数据库集成等日常场景中的能力。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7221",title:"Data Analytics and Artificial Intelligence for Design Engineering and Business",titleZh:"设计工程与商业的数据分析与人工智能",list:"A",credits:6,semester:"2",desc:"涵盖 AI 与机器学习、价值工程与产品成本、产品分析与项目管理:项目管理作为战略工具的核心要素与实务方法论,并运用数据分析概念解读定量数据、支撑设计决策。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7222",title:"Advanced CADCAM and AI Driven Manufacturing Systems",titleZh:"先进 CADCAM 与 AI 驱动制造系统",list:"A",credits:6,semester:"1",desc:"26 级新增 List A 课程:先进计算机辅助设计/制造与人工智能驱动的智能制造系统。2026-27 课表已排课(第一学期),课程详情以学院公布大纲为准。",prereq:"",exclusive:"",cef:!1,isNew2026:!0,movedToB2026:!1},{code:"IDAT7223",title:"Ergonomic Design and Multimedia Technologies",titleZh:"人因工程设计与多媒体技术",list:"A",credits:6,semester:"TBD",desc:"26 级新增 List A 课程(待大学最终批准):人因工程设计原则与多媒体技术在产品开发中的融合应用。课程详情以学院公布大纲为准。",prereq:"",exclusive:"",cef:!1,isNew2026:!0,movedToB2026:!1},{code:"IDAT7224",title:"Deep Learning in Engineering Technology",titleZh:"工程技术中的深度学习",list:"A",credits:6,semester:"1&2",desc:"26 级新增 List A 课程:深度神经网络在工程技术场景中的应用。2026-27 课表两学期均排课,课程详情以学院公布大纲为准。",prereq:"",exclusive:"",cef:!1,isNew2026:!0,movedToB2026:!1},{code:"IDAT7225",title:"Fundamentals of AI for Object Detection and Classification",titleZh:"目标检测与分类的人工智能基础",list:"A",credits:6,semester:"2",desc:"26 级新增 List A 课程:面向目标检测与分类的人工智能基础(2026-27 官方课表课名,原拟题目为自主机器人与智能控制)。2026-27 课表已排课(第二学期),课程详情以学院公布大纲为准。",prereq:"",exclusive:"",cef:!1,isNew2026:!0,movedToB2026:!1},{code:"MECH6034",title:"Computer-aided Product Development (CAPD)",titleZh:"计算机辅助产品开发",list:"B",credits:6,semester:"1&2",desc:"产品开发方法论、计算机辅助设计、触觉形状建模、逆向工程、增材制造与快速模具;理解制造成本约束,并运用相关技术开发简单产品。",prereq:"",exclusive:"",cef:!0,isNew2026:!1,movedToB2026:!0},{code:"COMP7503",title:"Multimedia Technologies",titleZh:"多媒体技术",list:"B",credits:6,semester:"1&2",desc:"多媒体计算的基本概念与新兴技术:媒体数据获取、感知编码原理、媒体处理与操作、多媒体内容组织与分析,构建完整多媒体应用。",prereq:"",exclusive:"",cef:!0,isNew2026:!1,movedToB2026:!0},{code:"COMP7506",title:"Smart Phone Apps Development",titleZh:"智能手机应用开发",list:"B",credits:6,semester:"1&2",desc:"智能手机 App 的设计与技术要点:小屏交互、硬件传感器运用,介绍 Android(Java)与 iOS(Swift)现代开发环境,指导学生开发自己的 App。",prereq:"具备基础编程知识",exclusive:"COMP3330 交互式移动应用设计与编程",cef:!0,isNew2026:!1,movedToB2026:!0},{code:"IDAT7217",title:"Advanced Topics in Innovative Design and Technology A",titleZh:"创新设计与科技高级专题 A",list:"B",credits:6,semester:"1",desc:"选取创新设计与科技前沿专题并应用于相关问题,具体题目于开课学期初公布。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7218",title:"Advanced Topics in Innovative Design and Technology B",titleZh:"创新设计与科技高级专题 B",list:"B",credits:6,semester:"2",desc:"选取创新设计与科技前沿专题并应用于相关问题,具体题目于开课学期初公布。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7219",title:"Smart Building Technology",titleZh:"智能建筑技术",list:"B",credits:6,semester:"TBD",desc:"应用 IoT 技术(硬件、软件与连接)管理 HVAC、照明与安防系统;实时采集并分析楼宇运营数据,改善楼宇运维与保养。2026-27 全量课表未见排课。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7220",title:"STEM Education",titleZh:"STEM 教育",list:"B",credits:6,semester:"1&2",desc:"STEM 整合式、项目式教学理念:通过阅读、视频、教学设计与系列迷你项目,学习课程整合实践与学生自主学习的最佳做法。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MECH6010",title:"Service Behaviour of Materials",titleZh:"材料服役行为",list:"B",credits:6,semester:"1&2",desc:"蠕变、断裂、疲劳与腐蚀等材料服役行为的物理基础与预测;通过微观组织调控改善工程材料(含工程塑料与复合材料)服役性能。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MECH6046",title:"Microsystems for Energy, Biomedical and Consumer Electronics Applications",titleZh:"能源、生医与消费电子微系统",list:"B",credits:6,semester:"1&2",desc:"MEMS 与微流控系统的工作原理、设计、材料、制造与封装,及其在能源、机械与生物医学工程中的应用,含丰富案例教学。",prereq:"",exclusive:"修过 MECH6032 者不可选",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MECH6047",title:"Finite Element Analysis in Mechanics",titleZh:"力学有限元分析",list:"B",credits:6,semester:"TBD",desc:"有限元基本概念与流程:桁架/梁/平面/板问题弹性分析、热-力耦合、模态与动力分析、几何与材料非线性、接触分析,含主流软件实操。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MECH7010",title:"Contemporary Robotics",titleZh:"当代机器人",list:"B",credits:6,semester:"1&2",desc:"现代机器人系统核心技术:系统组成与工作原理、传感与驱动单元、运动学建模、感知估计与实时控制,涵盖移动机器人、无人机、无人驾驶与软体机器人前沿。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MECH7012",title:"Principles of Engineering Management",titleZh:"工程管理原理",list:"B",credits:6,semester:"TBD",desc:"工程管理基本原理与方法:系统工程、运营计划与控制、ERP 系统、供应链、绿色管理、商业伦理、风险与危机管理。",prereq:"",exclusive:"",cef:!0,isNew2026:!1,movedToB2026:!1},{code:"DASE7111",title:"Data-driven Optimization",titleZh:"数据驱动优化",list:"B",credits:6,semester:"1",desc:"智能优化算法总览:遗传算法、模拟退火、禁忌搜索、粒子群、蚁群算法与动态系统优化策略,含供应链、物流、制造与服务业案例。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"DASE7139",title:"Cyber-physical Systems",titleZh:"信息物理系统",list:"B",credits:6,semester:"1&2",desc:"CPS 导论:传感器与传感网络、机器人与自动化、CPS 通信、数据分析、数字孪生、云计算与系统集成,以讲座+项目方式开展。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"DASE7034",title:"Operational Research",titleZh:"运筹学",list:"B",credits:6,semester:"1&2",desc:"运筹学方法论:问题分析、建模与求解;数学规划在物流运输中的应用、设备更新模型、投资风险分析、排队论与事件仿真。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"DASE7128",title:"Human Factors Engineering",titleZh:"人因工程",list:"B",credits:6,semester:"2",desc:"人因工程学原理与应用:人体测量学、认知与感知特性、人机界面设计、工作环境与安全设计,提升产品与系统的可用性。2026-27 课表新增开课,详情以学院公布大纲为准。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"COMP7103",title:"Data Mining",titleZh:"数据挖掘",list:"B",credits:6,semester:"1&2",desc:"数据挖掘主流方法与 OLAP:体系结构、数据预处理、关联规则、分类、聚类、数据挖掘系统与语言、Web/空间/时态高级挖掘。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"DASC7606",title:"Deep Learning",titleZh:"深度学习",list:"B",credits:6,semester:"1&2",desc:"深度神经网络及其在 NLP、图像处理、金融预测、博弈与机器人中的应用:线性/逻辑回归、网络训练、RNN、CNN、生成模型、深度强化学习与伦理议题。",prereq:"建议具备算法、微积分、线性代数与编程基础",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"COMP7404",title:"Computational Intelligence and Machine Learning",titleZh:"计算智能与机器学习",list:"B",credits:6,semester:"1&2",desc:"AI/ML 的数学与算法框架:搜索与启发式搜索、约束满足、博弈、监督/非监督学习、降维、学习理论、强化学习、迁移学习与 AI 伦理。",prereq:"建议具备数据结构、概率、线代与编程基础",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"COMP7408",title:"Distributed Ledger and Blockchain Technology",titleZh:"分布式账本与区块链技术",list:"B",credits:6,semester:"1&2",desc:"区块链核心技术要素与智能合约、许可链/非许可链变体与主流平台,探讨安全性、效率与可扩展性,以及加密货币与金融应用。",prereq:"COMP7906 或 ICOM6045,并具备编程经验",exclusive:"",cef:!0,isNew2026:!1,movedToB2026:!1},{code:"COMP7802",title:"Introduction to Financial Computing",titleZh:"金融计算导论",list:"B",credits:6,semester:"1",desc:"投资银行领域的金融计算:收益率曲线构建实务、金融建模与现代风险管理,结合金融产品知识、金融数学与计算技术。",prereq:"无需金融背景;需 Excel 操作能力,基础微积分与数值计算为佳",exclusive:"",cef:!0,isNew2026:!1,movedToB2026:!1},{code:"COMP7901",title:"Legal Protection of Digital Property",titleZh:"数字产权法律保护",list:"B",credits:6,semester:"2",desc:"面向计算机专业人员的数字财产法律保护:软件与网站版权、软件与算法专利、个人数据保护等议题及法律解决方案。",prereq:"",exclusive:"COMP3311 计算法律面面观 / ECOM6004 IT 与电商法律",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"COMP7906",title:"Introduction to Cyber Security",titleZh:"网络安全导论",list:"B",credits:6,semester:"1&2",desc:"网络世界中信息与数据的保护方法(含隐私议题):安全导论、网络攻击与威胁、密码算法及应用、网络安全与基础设施。",prereq:"建议具备 CS 数学、应用统计与 Python 基础",exclusive:"ICOM6045 电子商务安全基础",cef:!0,isNew2026:!1,movedToB2026:!1},{code:"ELEC6092",title:"Green Project Management",titleZh:"绿色项目管理",list:"B",credits:6,semester:"TBD",desc:"绿色项目的范围与价值:使命目标澄清、审计与可行性研究、项目计划与控制系统工具、合同管理(策略/文件/招标)、现场实施与质量安全环境管理。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"ELEC6601",title:"Industrial Marketing",titleZh:"工业营销",list:"B",credits:6,semester:"TBD",desc:"B2B 营销:价值链、营销机会与策略、渠道关系、销售管理、营销传播、客户计划、商业伦理与危机管理,以案例与项目驱动学习。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"ELEC6603",title:"Success in Industrial Entrepreneurship",titleZh:"工业创业成功之道",list:"B",credits:6,semester:"1",desc:"创业框架:识别资源/能力/环境与机会、商业计划书、新创企业融资、风险平衡与分阶段融资、组织创建,结合案例与项目实践。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"ELEC6604",title:"Neural Networks, Fuzzy Systems and Genetic Algorithms",titleZh:"神经网络、模糊系统与遗传算法",list:"B",credits:6,semester:"1",desc:"应用人工智能三大主题导论:神经网络、模糊系统与遗传算法的基本概念、技术及在各类工程问题中的应用。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"ELEC6098",title:"Electronic and Mobile Commerce",titleZh:"电子与移动商务",list:"B",credits:6,semester:"1&2",desc:"电商与移动商务的技术、商业与管理知识:B2C/B2B 模式、定位技术、RFID、GPS、移动网络、电子支付、NFC、二维码、AR 等前沿应用。",prereq:"",exclusive:"ELEC6078 / ELEC6086",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MEDD8860",title:"Emerging Technologies in STEM Education",titleZh:"STEM 教育新兴技术",list:"B",credits:6,semester:"1",desc:"纵览 STEM 教育中当前与新兴的工具、实践与主题,回顾跨学科整合的历史发展,展望未来课堂的数字技术趋势。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"MEDD8914",title:"Implementing STEM/STEAM-rich Making: Opportunities and Challenges",titleZh:"STEM/STEAM 创客教育实施",list:"B",credits:6,semester:"TBD",desc:"建构主义与创客文化:通过动手活动探索创客实践路径,以 SWOT 分析与资金申请书撰写检验实施机遇与挑战,培养 STEM 教育领导力。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"TDLL6024",title:"Teaching and Learning with Digital Technology",titleZh:"数字技术与教学",list:"B",credits:6,semester:"1",desc:"信息技术教学应用总览:从计算机辅助教程到学习对象、认知工具与协作技术,强调支撑技术整合的学习理论与教育情境。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"TDLL6333",title:"Mobile and Ubiquitous Technology in Education",titleZh:"教育中的移动与泛在技术",list:"B",credits:6,semester:"2",desc:"移动/泛在技术对教育与培训的影响:次世代学习系统潜力,并实践设计开发简单的移动教育应用(面向对象编程+云端集成)。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"TDLL7341",title:"Game-based Learning Environments",titleZh:"游戏化学习环境",list:"B",credits:6,semester:"1",desc:"数字游戏化学习(DGBL)理念:商业游戏与专用教育游戏的教育学考量,教育游戏的现状趋势及设计、实施与评估方法。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"TDLL7349",title:"Data Science and Learning Analytics",titleZh:"数据科学与学习分析",list:"B",credits:6,semester:"1",desc:"数据科学核心概念与学习分析/教育数据挖掘:数据预处理与存储、推断与预测分析、机器学习、文本与网络分析、可视化、数据伦理。",prereq:"建议具备本科统计学基础",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"CIVL6054",title:"Engineering for Transport Systems",titleZh:"运输系统工程",list:"B",credits:6,semester:"1",desc:"运输系统的工程视角:交通基础设施发展、运输方式选型、固定轨道系统、运输领域技术应用。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"CIVL6061",title:"Special Topic in Environmental Engineering A",titleZh:"环境工程专题 A",list:"B",credits:6,semester:"1",desc:"提供环境工程热点方向的深入学习机会,具体题目于开课学期初公布。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"CIVL6062",title:"Special Topic in Environmental Engineering B",titleZh:"环境工程专题 B",list:"B",credits:6,semester:"2",desc:"提供环境工程热点方向的深入学习机会,具体题目于开课学期初公布。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"CIVL7005",title:"Sustainable Construction Technology: Principles and Practices",titleZh:"可持续建造技术:原理与实践",list:"B",credits:6,semester:"TBD",desc:"可持续建造语境下的技术知识:可持续建造概念、系统理论、技术创新理论、技术类型与应用、技术选择与管理策略。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"CIVL7006",title:"Optimization Techniques for Transportation Applications",titleZh:"交通应用优化技术",list:"B",credits:6,semester:"2",desc:"求解交通问题的优化方法:线性规划、非线性规划、网络优化与整数规划。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"CIVL7016",title:"Land Transport and the Environment",titleZh:"陆上交通与环境",list:"B",credits:6,semester:"TBD",desc:"陆上运输系统:铁路与道路建设、铁路噪声排放与消减、道路的空气/噪声/水污染及测量、估算与治理方法。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"URBA6001",title:"Foundations in Spatial Data Analysis",titleZh:"空间数据分析基础",list:"B",credits:6,semester:"TBD",desc:"智慧城市的空间数据基础:多源传感器空间数据获取、AI 应用、GIS 与 BIM 空间分析技术,面向规划/测绘/建筑/工程等专业背景。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"URBA6002",title:"Urban Big Data Analytics",titleZh:"城市大数据分析",list:"B",credits:6,semester:"2",desc:"城市大数据处理、分析与建模进阶:概念框架、方法论与软件工具,应用城市模型解释现状并预测未来变化。",prereq:"URBA6011 城市数据分析编程基础",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"URBA6009",title:"Artificial Intelligence for Future Cities",titleZh:"未来城市的人工智能",list:"B",credits:6,semester:"2",desc:"编程、计算思维与 AI 导论:关键算法与数据结构、编程技能,以及如何用软件与智能技术解决城市问题。",prereq:"URBA6011 城市数据分析编程基础",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"URBA6011",title:"Programming and Foundations in Urban Data Analysis",titleZh:"城市数据分析编程基础",list:"B",credits:6,semester:"1",desc:"城市数据分析的编程与基础知识:空间数据获取、GIS/BIM 分析技术,为 URBA6002/URBA6009 的先修课。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"RECO7605",title:"Information Management",titleZh:"信息管理",list:"B",credits:6,semester:"1",desc:"信息化与供应链管理:信息/人力/资金/资源流、制造与建造供应链、效率与响应、IT 集成、跨组织文化与契约议题。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7100",title:"Dissertation",titleZh:"毕业论文(毕业设计)",list:"capstone",credits:24,semester:"full",desc:"24 学分毕业设计:在工学院或相关学院导师指导下,个人或小组完成设计、实验或分析研究课题;需参加研讨会并提交完整书面报告。适用于 2025/26 及以后入学者。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1},{code:"IDAT7101",title:"Capstone project",titleZh:"顶点项目(毕业项目)",list:"capstone",credits:24,semester:"full",desc:"毕业项目:在导师指导下完成综合性项目研究与实践,无固定上课时间。据 0727 版官方课表新增,两学期均开设;学分与适用入学年级待官方确认(暂按与 IDAT7100 一致处理)。",prereq:"",exclusive:"",cef:!1,isNew2026:!1,movedToB2026:!1}],Se={total:72,courseCredits:48,listAMin:24,disciplineMin:36,electiveMax:12,dissertation:24,self_choose:12};function S(e){return pe.find(t=>t.code===e)||null}function Re(e){switch(e){case"1":return"第一学期";case"2":return"第二学期";case"1&2":return"两学期均开";case"full":return"全年";default:return"学期待定"}}const U=24*60*60*1e3;function k(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function ne(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${s}`}function Y(){return ne(new Date)}function Ye(e){const t=k(ne(new Date));return Math.round((k(e)-t)/U)}function Le(e){const t=k(e);for(const n of Ue){const s=k(n.start),c=k(n.end);if(t>=s&&t<=c){const i=Math.floor((t-s)/(7*U))+1;return{name:n.name,week:i}}}return null}function je(e){const t=Y();return ue.filter(s=>(s.endDate||s.date)>=t).sort((s,c)=>s.date<c.date?-1:1).slice(0,e)}function P(e){const t=String(Math.floor(e/60)).padStart(2,"0"),n=String(e%60).padStart(2,"0");return`${t}:${n}`}function te(e){const[t,n]=e.split(":").map(Number);return t*60+(n||0)}const J=["周一","周二","周三","周四","周五","周六","周日"],Fe=[{path:"/home",label:"首页",icon:"🏠"},{path:"/calendar",label:"校历",icon:"📅"},{path:"/commute",label:"地鐵",icon:"🚇"},{path:"/courses",label:"课程",icon:"📚"},{path:"/schedule",label:"课表",icon:"🗓"}];function j(){const e=Ie(),t=document.getElementById("tabbar");t.innerHTML=Fe.map(n=>`
    <a class="tab-item ${e===n.path?"active":""}" data-path="${n.path}">
      <span class="tab-icon">${n.icon}</span>
      <span>${n.label}</span>
    </a>
  `).join(""),t.onclick=n=>{const s=n.target.closest(".tab-item");s&&ee(s.dataset.path)}}function _e(){const e=document.getElementById("page-container"),t=Y(),c=`${t} 星期${["日","一","二","三","四","五","六"][new Date().getDay()]}`,i=Le(t),r=Se,d=je(3).map(o=>({title:o.title+(o.tentative?"(暂定)":""),color:H[o.type].color,days:Ye(o.date),dateText:o.endDate?`${o.date} 至 ${o.endDate}`:o.date})),f=i?`${i.name} · 第 ${i.week} 周`:d.length?`距「${d[0].title}」还有 ${d[0].days} 天`:"假期中,好好充电";e.innerHTML=`
    <div class="hero" style="background:linear-gradient(135deg,#22c0dc,#1aa3c0);border-radius:0 0 16px 16px;padding:24px 16px 20px;color:#fff">
      <div style="font-size:11px;opacity:0.85">MSc(Eng) Innovative Design & Technology · 26 级</div>
      <div style="font-size:20px;font-weight:700;margin-top:8px">${c}</div>
      <div style="font-size:13px;margin-top:4px;opacity:0.95">${f}</div>
    </div>
    <div style="display:flex;flex-wrap:wrap;padding:8px 8px 0">
      <div class="entry-card" data-path="/calendar" style="background:#2e6f5c"><div class="ec-name">校历</div><div class="ec-sub">2026-27 学期节点</div></div>
      <div class="entry-card" data-path="/commute" style="background:#31597f"><div class="ec-name">地铁</div><div class="ec-sub">多条线路实时监控</div></div>
      <div class="entry-card" data-path="/courses" style="background:#6b5b95"><div class="ec-name">选课</div><div class="ec-sub">List A/B 课程库</div></div>
      <div class="entry-card" data-path="/schedule" style="background:#8a6d3b"><div class="ec-name">课表</div><div class="ec-sub">备注重要信息</div></div>
    </div>
    <div class="card">
      <div class="card-title">毕业学分结构(72 ~ 84 学分)</div>
      <div style="display:flex;align-items:baseline;margin-bottom:12px">
        <span style="font-size:28px;font-weight:700;color:#00573f;margin-right:8px">${r.total} ~ ${r.total+r.self_choose}</span>
        <span style="font-size:12px;color:#6b7280">学分 = 课程 ${r.courseCredits} + 毕业论文 ${r.dissertation} + 自由选择 ${r.self_choose}</span>
      </div>
      <div style="display:flex;justify-content:space-between;background:#f4f8f6;border-radius:12px;padding:12px 8px">
        <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:600;color:#00573f">≥ ${r.listAMin}</div><div style="font-size:10px;color:#6b7280;margin-top:2px">List A 核心课</div></div>
        <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:600;color:#00573f">≥ ${r.disciplineMin}</div><div style="font-size:10px;color:#6b7280;margin-top:2px">学科课(A+B)</div></div>
        <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:600;color:#00573f">≤ ${r.electiveMax}</div><div style="font-size:10px;color:#6b7280;margin-top:2px">外学科选修</div></div>
        <div style="flex:1;text-align:center"><div style="font-size:15px;font-weight:600;color:#00573f">${r.dissertation}</div><div style="font-size:10px;color:#6b7280;margin-top:2px">毕业论文</div></div>
      </div>
      <div style="margin-top:12px;text-align:center"><span class="btn-plain" id="go-courses">去选课,自动算学分</span></div>
    </div>
    <div class="card" style="border-left:4px solid #e6a23c">
      <div class="card-title">26 级课程变更提示</div>
      <div style="font-size:12px;color:#5b5f66;line-height:1.8">
        · 新增 List A:IDAT7222 先进CADCAM与AI制造 / IDAT7223 人因设计与多媒体 / IDAT7224 深度学习工程技术 / IDAT7225 目标检测与分类AI基础<br>
        · IDAT7216 功能设计与知识产权法已从课程列表移除(2026-27 课表不再开设)<br>
        · MECH6034 / COMP7503 / COMP7506 自 26 级起转入 List B(待大学批准)<br>
        · 总学分要求统一为 72-84 学分
      </div>
    </div>
    <div class="section-title">近期关键节点</div>
    ${d.map(o=>`
      <div class="card" style="display:flex;align-items:center;padding:14px 16px;margin-top:0">
        <div style="width:8px;height:8px;border-radius:50%;background:${o.color};margin-right:12px;flex-shrink:0"></div>
        <div style="flex:1"><div style="font-size:13px;color:#1f2430">${o.title}</div><div style="font-size:11px;color:#8a8f99;margin-top:2px">${o.dateText}</div></div>
        <div style="font-size:12px;color:#00573f;font-weight:600;flex-shrink:0">${o.days>0?o.days+" 天后":o.days===0?"今天":"进行中"}</div>
      </div>
    `).join("")}
    <div class="muted" style="text-align:center;padding:16px 20px 24px">数据来源:HKU 官方学年日历与课程大纲;暂定节点以官方最终公布为准</div>
  `;const u=document.createElement("style");u.textContent=".entry-card{width:calc(50% - 12px);margin:4px 6px;border-radius:12px;padding:14px 12px;color:#fff;cursor:pointer}.ec-name{font-size:16px;font-weight:600}.ec-sub{font-size:11px;opacity:0.9;margin-top:4px}",e.prepend(u),e.querySelectorAll(".entry-card").forEach(o=>{o.onclick=()=>ee(o.dataset.path)});const x=document.getElementById("go-courses");x&&(x.onclick=()=>ee("/courses")),j()}let y={year:2026,month:9,selected:"",eventMap:{}};function Xe(){const e={};return ue.forEach(t=>{const n=H[t.type],s=k(t.date),c=t.endDate?k(t.endDate):s;let i=s,r=0;for(;i<=c&&r<400;){const d=ne(i);e[d]||(e[d]=[]),e[d].push({title:t.title,type:t.type,color:n.color,label:n.label,tentative:t.tentative,rangeText:t.endDate?`${t.date} 至 ${t.endDate}`:t.date}),i=new Date(i.getTime()+U),r++}}),e}function fe(){const e=document.getElementById("page-container"),{year:t,month:n,selected:s}=y,c=Y(),i=y.eventMap,r=new Date(t,n-1,1),d=(r.getDay()+6)%7,f=new Date(r.getTime()-d*U),u=[];for(let l=0;l<6;l++){const a=[];for(let m=0;m<7;m++){const g=new Date(f.getTime()+(l*7+m)*U),B=ne(g),ae=i[B]||[];a.push({key:B,day:g.getDate(),inMonth:g.getMonth()+1===n,isToday:B===c,isSelected:B===s,dots:ae.slice(0,3).map(se=>se.color)})}u.push(a)}const x=String(n).padStart(2,"0"),o=`${t}-${x}-01`,v=`${t}-${x}-31`,h={},A=[];ue.forEach(l=>{const a=l.endDate||l.date;if(l.date<=v&&a>=o&&!h[l.title]){h[l.title]=!0;const m=H[l.type];A.push({title:l.title,color:m.color,label:m.label,tentative:l.tentative,date:l.date,dateText:l.endDate?`${l.date} 至 ${l.endDate}`:l.date})}}),A.sort((l,a)=>l.date<a.date?-1:1);const M=(i[s]||[]).map(l=>({...l,title:l.title+(l.tentative?"(暂定)":"")})),p=Object.keys(H).map(l=>({label:H[l].label,color:H[l].color}));e.innerHTML=`
    <style>
      .cal-card{padding:16px 10px}
      .cal-head{display:flex;align-items:center;justify-content:space-between;padding:0 8px 12px}
      .cal-title{font-size:15px;font-weight:600;color:#14312a}
      .cal-nav{font-size:12px;color:#00573f;padding:4px 10px;cursor:pointer}
      .cal-row{display:flex}
      .cal-cell{flex:1;min-width:0;text-align:center;padding:6px 0 4px;border-radius:8px;cursor:pointer}
      .cal-cell.head{font-size:11px;color:#8a8f99;cursor:default}
      .cal-day{font-size:13px;color:#1f2430}
      .cal-cell.dim .cal-day{color:#c4c8ce}
      .cal-cell.today .cal-day{color:#00573f;font-weight:700}
      .cal-cell.selected{background:#00573f}
      .cal-cell.selected .cal-day{color:#fff;font-weight:600}
      .cal-dots{display:flex;justify-content:center;height:6px;margin-top:2px}
      .dot{width:4px;height:4px;border-radius:50%;margin:0 1px}
      .legend{display:flex;flex-wrap:wrap;padding:10px 8px 0;border-top:1px solid #eef0f2;margin-top:8px}
      .legend-item{display:flex;align-items:center;font-size:10px;color:#6b7280;margin:0 12px 6px 0}
      .legend-item .dot{margin-right:4px;width:6px;height:6px}
      .ev-bar{width:4px;min-height:28px;border-radius:2px;margin-right:10px;flex-shrink:0}
    </style>
    <div class="card cal-card">
      <div class="cal-head">
        <div class="cal-nav" id="cal-prev">‹ 上月</div>
        <div class="cal-title">${t} 年 ${n} 月</div>
        <div class="cal-nav" id="cal-next">下月 ›</div>
      </div>
      <div class="cal-row">${["一","二","三","四","五","六","日"].map(l=>`<div class="cal-cell head">${l}</div>`).join("")}</div>
      ${u.map(l=>`<div class="cal-row">${l.map(a=>`
        <div class="cal-cell ${a.inMonth?"":"dim"} ${a.isToday?"today":""} ${a.isSelected?"selected":""}" data-date="${a.key}">
          <div class="cal-day">${a.day}</div>
          <div class="cal-dots">${a.dots.map(m=>`<div class="dot" style="background:${m}"></div>`).join("")}</div>
        </div>
      `).join("")}</div>`).join("")}
      <div class="legend">${p.map(l=>`<div class="legend-item"><div class="dot" style="background:${l.color}"></div>${l.label}</div>`).join("")}</div>
    </div>
    <div class="section-title">${s} 当日安排</div>
    ${M.length?`<div class="card">${M.map(l=>`
      <div style="display:flex;align-items:flex-start;padding:6px 0">
        <div class="ev-bar" style="background:${l.color}"></div>
        <div><div style="font-size:13px;color:#1f2430">${l.title}</div><div style="font-size:11px;color:#8a8f99;margin-top:2px">${l.label} · ${l.rangeText}</div></div>
      </div>
    `).join("")}</div>`:'<div class="card" style="text-align:center;color:#8a8f99;font-size:12px">当日无校历事件</div>'}
    <div class="section-title">${n} 月事件一览</div>
    ${A.map(l=>`
      <div class="card" style="display:flex;align-items:flex-start;padding:14px 16px;margin-top:0">
        <div class="ev-bar" style="background:${l.color}"></div>
        <div><div style="font-size:13px;color:#1f2430">${l.title}${l.tentative?"(暂定)":""}</div><div style="font-size:11px;color:#8a8f99;margin-top:2px">${l.label} · ${l.dateText}</div></div>
      </div>
    `).join("")}
    <div class="muted" style="text-align:center;padding:16px 20px 24px">第一学期节点为官方公布;第二学期部分节点标注「暂定」,以大学最终公布为准</div>
  `,e.querySelectorAll(".cal-cell:not(.head)").forEach(l=>{l.onclick=()=>{y.selected=l.dataset.date,fe()}}),document.getElementById("cal-prev").onclick=()=>{be(-1)},document.getElementById("cal-next").onclick=()=>{be(1)},j()}function be(e){y.month+=e,y.month<1&&(y.month=12,y.year--),y.month>12&&(y.month=1,y.year++),fe()}function Ge(){y.eventMap=Xe();const e=Y(),t=k(e);y.year=t.getFullYear(),y.month=t.getMonth()+1,y.selected=e,fe()}const W=[{code:"ISL",name:"港島綫",nameEn:"Island Line",color:"#007dc3",up:"堅尼地城",down:"柴灣"},{code:"TWL",name:"荃灣綫",nameEn:"Tsuen Wan Line",color:"#e60012",up:"中環",down:"荃灣"},{code:"KTL",name:"觀塘綫",nameEn:"Kwun Tong Line",color:"#00a650",up:"黃埔",down:"調景嶺"},{code:"TKL",name:"將軍澳綫",nameEn:"Tseung Kwan O Line",color:"#7b3b98",up:"北角",down:"寶琳/康城"},{code:"TCL",name:"東涌綫",nameEn:"Tung Chung Line",color:"#f7943c",up:"香港",down:"東涌"},{code:"EAL",name:"東鐵綫",nameEn:"East Rail Line",color:"#53b7e8",up:"金鐘",down:"羅湖/落馬洲"},{code:"TML",name:"屯馬綫",nameEn:"Tuen Ma Line",color:"#923011",up:"屯門",down:"烏溪沙"},{code:"SIL",name:"南港島綫",nameEn:"South Island Line",color:"#c1cd23",up:"金鐘",down:"海怡半島"},{code:"AEL",name:"機場快綫",nameEn:"Airport Express",color:"#00838a",up:"香港",down:"博覽館"},{code:"DRL",name:"迪士尼綫",nameEn:"Disneyland Resort Line",color:"#f273b0",up:"欣澳",down:"迪士尼"}],Je=[{code:"HKU",name:"香港大學",nameEn:"HKU",line:"ISL"},{code:"ADM",name:"金鐘",nameEn:"Admiralty",line:"ISL"},{code:"CEN",name:"中環",nameEn:"Central",line:"ISL"},{code:"ADM",name:"金鐘",nameEn:"Admiralty",line:"TWL"},{code:"CEN",name:"中環",nameEn:"Central",line:"TWL"},{code:"JOR",name:"佐敦",nameEn:"Jordan",line:"TWL"}],ze={ISL:[{code:"KET",name:"堅尼地城"},{code:"HKU",name:"香港大學"},{code:"SYP",name:"西營盤"},{code:"SHW",name:"上環"},{code:"CEN",name:"中環"},{code:"ADM",name:"金鐘"},{code:"WAC",name:"灣仔"},{code:"CAB",name:"銅鑼灣"},{code:"TIH",name:"天后"},{code:"FOH",name:"炮台山"},{code:"NOP",name:"北角"},{code:"QUB",name:"鰂魚涌"},{code:"TAK",name:"太古"},{code:"SWH",name:"西灣河"},{code:"SKW",name:"筲箕灣"},{code:"HFC",name:"杏花邨"},{code:"CHW",name:"柴灣"}],EAL:[{code:"ADM",name:"金鐘"},{code:"EXC",name:"會展"},{code:"HUH",name:"紅磡"},{code:"MKK",name:"旺角東"},{code:"KLR",name:"九龍塘"},{code:"TAW",name:"大圍"},{code:"SHT",name:"沙田"},{code:"FOT",name:"火炭"},{code:"RAC",name:"馬場"},{code:"UNI",name:"大學"},{code:"TAP",name:"大埔墟"},{code:"TWO",name:"太和"},{code:"FAN",name:"粉嶺"},{code:"SHS",name:"上水"},{code:"LOW",name:"羅湖"},{code:"LMC",name:"落馬洲"}],TWL:[{code:"CEN",name:"中環"},{code:"ADM",name:"金鐘"},{code:"TST",name:"尖沙咀"},{code:"JOR",name:"佐敦"},{code:"YMT",name:"油麻地"},{code:"MOK",name:"旺角"},{code:"PRE",name:"太子"},{code:"SSP",name:"深水埗"},{code:"CSW",name:"長沙灣"},{code:"LCK",name:"荔枝角"},{code:"MEF",name:"美孚"},{code:"LAK",name:"荔景"},{code:"KWF",name:"葵芳"},{code:"KWH",name:"葵興"},{code:"TWH",name:"大窩口"},{code:"TSW",name:"荃灣"}],TML:[{code:"TUM",name:"屯門"},{code:"SIH",name:"兆康"},{code:"TIS",name:"天水圍"},{code:"LOP",name:"朗屏"},{code:"YUL",name:"元朗"},{code:"KSR",name:"錦上路"},{code:"TWW",name:"荃灣西"},{code:"MEF",name:"美孚"},{code:"NAC",name:"南昌"},{code:"AUS",name:"柯士甸"},{code:"ETS",name:"尖東"},{code:"HUH",name:"紅磡"},{code:"HOM",name:"何文田"},{code:"TKW",name:"土瓜灣"},{code:"SUW",name:"宋皇臺"},{code:"KAT",name:"啟德"},{code:"DIH",name:"鑽石山"},{code:"HIK",name:"顯徑"},{code:"TAW",name:"大圍"},{code:"CKT",name:"車公廟"},{code:"STW",name:"沙田圍"},{code:"CIO",name:"第一城"},{code:"SHM",name:"石門"},{code:"TAP",name:"大水坑"},{code:"HEO",name:"恆安"},{code:"MAO",name:"馬鞍山"},{code:"WKS",name:"烏溪沙"}],TCL:[{code:"HOK",name:"香港"},{code:"KOW",name:"九龍"},{code:"OLY",name:"奧運"},{code:"NAC",name:"南昌"},{code:"LAK",name:"荔景"},{code:"TSY",name:"青衣"},{code:"SUN",name:"欣澳"},{code:"TUC",name:"東涌"}],KTL:[{code:"WHA",name:"黃埔"},{code:"HOM",name:"何文田"},{code:"YMT",name:"油麻地"},{code:"MOK",name:"旺角"},{code:"PRE",name:"太子"},{code:"SKM",name:"石硤尾"},{code:"KLT",name:"九龍塘"},{code:"LOF",name:"樂富"},{code:"WTS",name:"黃大仙"},{code:"DIH",name:"鑽石山"},{code:"CHH",name:"彩虹"},{code:"KOB",name:"九龍灣"},{code:"NTK",name:"牛頭角"},{code:"KT",name:"觀塘"},{code:"LAT",name:"藍田"},{code:"YAT",name:"油塘"},{code:"TIK",name:"調景嶺"}],TKL:[{code:"NOP",name:"北角"},{code:"QUB",name:"鰂魚涌"},{code:"YAT",name:"油塘"},{code:"TIK",name:"調景嶺"},{code:"TKO",name:"將軍澳"},{code:"HAH",name:"坑口"},{code:"POA",name:"寶琳"},{code:"LHP",name:"康城"}],SIL:[{code:"ADM",name:"金鐘"},{code:"OCP",name:"海洋公園"},{code:"WCH",name:"黃竹坑"},{code:"LET",name:"利東"},{code:"SOH",name:"海怡半島"}],AEL:[{code:"HOK",name:"香港"},{code:"KOW",name:"九龍"},{code:"TSY",name:"青衣"},{code:"AIR",name:"機場"},{code:"AWE",name:"博覽館"}],DRL:[{code:"SUN",name:"欣澳"},{code:"DNY",name:"迪士尼"}]},Ve="https://rt.data.gov.hk/v1/transport/mtr";async function Qe(e,t){const n=`${Ve}/getSchedule.php?line=${e}&sta=${t}`,s=await fetch(n);if(!s.ok)throw new Error(`API error: ${s.status}`);return s.json()}let T="ISL",w="",D=null,q=!1;function me(){const e=W.find(i=>i.code===T),t=ze[T]||[],n=Je,s=document.getElementById("page-container");s.innerHTML=`
    <style>
      .mtr-page { padding: 12px 16px 4px; }
      .mtr-page .page-title { font-size: 18px; font-weight: 700; color: #14312a; }
      .mtr-page .page-sub { font-size: 11px; color: #8a8f99; margin-top: 4px; }
      .line-selector { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
      .line-chip { font-size: 11px; padding: 5px 12px; border-radius: 999px; color: #fff; cursor: pointer; opacity: 0.45; transition: opacity .2s; white-space: nowrap; }
      .line-chip.on { opacity: 1; box-shadow: 0 2px 6px rgba(0,0,0,0.15); }
      .fav-section { margin-top: 16px; }
      .fav-section .section-label { font-size: 12px; font-weight: 600; color: #6b7280; margin-bottom: 8px; }
      .fav-row { display: flex; flex-wrap: wrap; gap: 8px; }
      .fav-chip { font-size: 12px; padding: 6px 14px; border-radius: 8px; background: #fff; border: 1px solid #eef0f2; cursor: pointer; transition: all .2s; display: flex; align-items: center; gap: 4px; }
      .fav-chip:active { background: #f0fdf6; border-color: #22c0dc; }
      .fav-chip .fav-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
      .station-list { margin-top: 14px; }
      .station-list .section-label { font-size: 12px; font-weight: 600; color: #6b7280; margin-bottom: 8px; }
      .station-grid { display: flex; flex-wrap: wrap; gap: 6px; }
      .station-chip { font-size: 12px; padding: 5px 12px; border-radius: 8px; background: #fff; border: 1px solid #eef0f2; cursor: pointer; }
      .station-chip.active { background: #22c0dc; color: #fff; border-color: #22c0dc; }
      .arrival-card { background: #fff; border-radius: 16px; margin-top: 14px; padding: 16px; box-shadow: 0 2px 8px rgba(0,45,32,0.04); }
      .arrival-card .sta-header { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
      .arrival-card .sta-name { font-size: 16px; font-weight: 600; color: #14312a; }
      .arrival-card .sta-code { font-size: 11px; color: #8a8f99; }
      .arrival-card .dir-section { margin-bottom: 12px; }
      .arrival-card .dir-label { font-size: 11px; font-weight: 600; color: #6b7280; margin-bottom: 6px; display: flex; align-items: center; gap: 4px; }
      .arrival-card .dir-arrow { font-size: 12px; }
      .arrival-card .train-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid #f5f6f8; }
      .arrival-card .train-row:last-child { border-bottom: none; }
      .arrival-card .train-time { font-size: 22px; font-weight: 700; min-width: 42px; text-align: center; }
      .arrival-card .train-time.soon { color: #e60012; }
      .arrival-card .train-time.near { color: #f59e0b; }
      .arrival-card .train-time.ok { color: #22c0dc; }
      .arrival-card .train-info { flex: 1; }
      .arrival-card .train-dest { font-size: 14px; font-weight: 500; color: #1f2430; }
      .arrival-card .train-plat { font-size: 11px; color: #8a8f99; margin-top: 1px; }
      .arrival-card .train-seq { font-size: 10px; color: #8a8f99; background: #f5f6f8; border-radius: 999px; padding: 2px 8px; }
      .arrival-card .empty-state { text-align: center; padding: 24px 0; color: #8a8f99; font-size: 13px; }
      .arrival-card .empty-icon { font-size: 36px; margin-bottom: 8px; }
      .arrival-card .error-state { text-align: center; padding: 16px 0; color: #ef4444; font-size: 12px; }
      .arrival-card .retry-btn { display: inline-block; margin-top: 8px; padding: 6px 16px; font-size: 11px; color: #22c0dc; border: 1px solid #22c0dc; border-radius: 999px; cursor: pointer; }
      .status-dot { width: 6px; height: 6px; border-radius: 50%; display: inline-block; }
      .status-dot.live { background: #22c55e; animation: mtr-pulse 2s infinite; }
      .status-dot.error { background: #ef4444; }
      @keyframes mtr-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

      .map-section { margin-top: 16px; padding: 0 0 20px; }
      .map-section .section-label { font-size: 12px; font-weight: 600; color: #6b7280; margin-bottom: 4px; }
      .mtr-map-thumb { width: 100%; border-radius: 12px; cursor: pointer; box-shadow: 0 2px 8px rgba(0,45,32,0.08); transition: transform .2s; }
      .mtr-map-thumb:active { transform: scale(0.98); }

      .zoom-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 9999; display: flex; flex-direction: column; touch-action: none; }
      .zoom-overlay .zoom-close { position: fixed; top: 16px; right: 16px; z-index: 10001; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.2); color: #fff; font-size: 20px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; }
      .zoom-overlay .zoom-hint { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 10001; font-size: 11px; color: rgba(255,255,255,0.5); pointer-events: none; }
      .zoom-overlay .zoom-container { flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; }
      .zoom-overlay .zoom-image { max-width: 95vw; max-height: 95vh; object-fit: contain; transition: transform .1s ease-out; transform-origin: center center; user-select: none; -webkit-user-drag: none; }
    </style>

    <div class="mtr-page">
      <div class="page-title">港鐵實時到站</div>
      <div class="page-sub">數據來源：data.gov.hk，每 30 秒自動更新</div>

      <div class="line-selector">
        ${W.map(i=>`
          <span class="line-chip ${i.code===T?"on":""}" data-line="${i.code}" style="background:${i.color}">${i.name}</span>
        `).join("")}
      </div>

      <div class="fav-section">
        <div class="section-label">⭐ 常用車站</div>
        <div class="fav-row">
          ${n.map(i=>{const r=W.find(d=>d.code===i.line);return`<span class="fav-chip" data-station="${i.code}" data-line="${i.line}">
              <span class="fav-dot" style="background:${r?r.color:"#999"}"></span>${i.name}
            </span>`}).join("")}
        </div>
      </div>

      <div class="station-list">
        <div class="section-label">${e?e.name+" 車站":"選擇車站"}</div>
        <div class="station-grid">
          ${t.map(i=>`
            <span class="station-chip ${i.code===w?"active":""}" data-station="${i.code}">${i.name}</span>
          `).join("")}
        </div>
      </div>

      <div id="arrival-panel"></div>

      <div class="map-section" id="map-section">
        <div class="section-label">🗺️ 港鐵路綫圖</div>
        <div style="font-size:11px;color:#8a8f99;margin-bottom:8px">點擊圖片可放大查看，支援縮放與拖拽</div>
        <img id="mtr-map-img" class="mtr-map-thumb" src="/hku-idt-guide/mtr-route-map.jpg" alt="港鐵路綫圖" />
      </div>
    </div>
  `,s.querySelectorAll(".line-chip").forEach(i=>{i.onclick=()=>{i.dataset.line!==T&&(T=i.dataset.line,w="",me())}});const c=(i,r)=>{w===i&&T===r||(T=r,w=i,me())};s.querySelectorAll(".fav-chip").forEach(i=>{i.onclick=()=>c(i.dataset.station,i.dataset.line)}),s.querySelectorAll(".station-chip").forEach(i=>{i.onclick=()=>c(i.dataset.station,T)}),w&&nt(),et(),j()}function et(){const e=document.getElementById("mtr-map-img");e&&(e.onclick=()=>tt())}function tt(){const e=document.querySelector(".zoom-overlay");e&&e.remove();const t=document.createElement("div");t.className="zoom-overlay",t.innerHTML=`
    <button class="zoom-close">✕</button>
    <div class="zoom-container" id="zoom-container">
      <img class="zoom-image" id="zoom-image" src="/hku-idt-guide/mtr-route-map.jpg" alt="港鐵路綫圖" />
    </div>
    <div class="zoom-hint">滑鼠滾輪 / 雙指縮放，拖拽移動</div>
  `,document.body.appendChild(t);const n=t.querySelector("#zoom-image"),s=t.querySelector("#zoom-container"),c=t.querySelector(".zoom-close");let i=1,r=0,d=0,f=0,u=!1,x=0,o=0,v=0,h=0;function A(){n.style.transform=`translate(${r}px, ${d}px) scale(${i})`;const p=t.querySelector(".zoom-hint");p&&(p.textContent=`${Math.round(i*100)}% · 滑鼠滾輪/雙指縮放，拖拽移動`)}s.addEventListener("wheel",p=>{p.preventDefault();const l=n.getBoundingClientRect();p.clientX-l.left,p.clientY-l.top;const a=i;i=Math.min(5,Math.max(.5,i-p.deltaY*.002));const m=i/a;r=p.clientX-(p.clientX-r)*m,d=p.clientY-(p.clientY-d)*m,A()},{passive:!1}),n.addEventListener("mousedown",p=>{u=!0,x=p.clientX,o=p.clientY,v=r,h=d,n.style.cursor="grabbing",p.preventDefault()}),window.addEventListener("mousemove",p=>{u&&(r=v+(p.clientX-x),d=h+(p.clientY-o),A())}),window.addEventListener("mouseup",()=>{u=!1,n.style.cursor="grab"}),s.addEventListener("touchstart",p=>{p.touches.length===2?f=Math.hypot(p.touches[0].clientX-p.touches[1].clientX,p.touches[0].clientY-p.touches[1].clientY):p.touches.length===1&&(u=!0,x=p.touches[0].clientX,o=p.touches[0].clientY,v=r,h=d)},{passive:!1}),s.addEventListener("touchmove",p=>{if(p.preventDefault(),p.touches.length===2){const l=Math.hypot(p.touches[0].clientX-p.touches[1].clientX,p.touches[0].clientY-p.touches[1].clientY);if(f){const a=i;i=Math.min(5,Math.max(.5,i*(l/f)));const m=i/a,g=(p.touches[0].clientX+p.touches[1].clientX)/2,B=(p.touches[0].clientY+p.touches[1].clientY)/2;r=g-(g-r)*m,d=B-(B-d)*m,A()}f=l}else p.touches.length===1&&u&&(r=v+(p.touches[0].clientX-x),d=h+(p.touches[0].clientY-o),A())},{passive:!1}),s.addEventListener("touchend",()=>{u=!1,f=0}),n.addEventListener("dblclick",()=>{i=1,r=0,d=0,A()});const M=()=>t.remove();c.onclick=M,t.addEventListener("click",p=>{p.target===t&&M()}),document.addEventListener("keydown",function p(l){l.key==="Escape"&&(M(),document.removeEventListener("keydown",p))}),n.style.cursor="grab"}function nt(){var s;const e=document.getElementById("arrival-panel");if(!e)return;const t=(s=ze[T])==null?void 0:s.find(c=>c.code===w),n=W.find(c=>c.code===T);e.innerHTML=`
    <div class="arrival-card">
      <div class="sta-header">
        <span style="display:inline-block;width:4px;height:18px;border-radius:2px;background:${n?n.color:"#999"}"></span>
        <span class="sta-name">${t?t.name:w}</span>
        <span class="sta-code">${w}</span>
        <span style="flex:1"></span>
        <span class="status-dot live" id="status-dot"></span>
        <span style="font-size:10px;color:#8a8f99" id="status-text">更新中…</span>
      </div>
      <div id="arrival-content">
        <div class="empty-state">
          <div class="empty-icon">⏳</div>
          <div>載入中…</div>
        </div>
      </div>
    </div>
  `,ve()}function Ae(e){const t=document.getElementById("status-dot"),n=document.getElementById("status-text");!t||!n||(e?(t.className="status-dot live",n.textContent=at(new Date)):(t.className="status-dot error",n.textContent="載入失敗"))}async function ve(){if(q)return;q=!0;const e=document.getElementById("arrival-content");if(!e){q=!1;return}const t=w,n=T;try{const s=await Qe(n,t),c=it(s,n,t);if(!c||c.length===0)e.innerHTML=`
        <div class="empty-state">
          <div class="empty-icon">🚇</div>
          <div>暫無到站數據</div>
          <div style="font-size:10px;margin-top:4px">可能為非營運時段或資料暫未更新</div>
        </div>`;else{const i=c.filter(d=>d.dir==="UP"),r=c.filter(d=>d.dir==="DOWN");e.innerHTML=`
        ${Ee(i)}
        ${Ee(r)}
      `}Ae(!0)}catch(s){console.error("MTR API error:",s),e.innerHTML=`
      <div class="error-state">
        <div>⚠️ 無法載入到站數據</div>
        <div style="font-size:10px;margin-top:4px">${s.message}</div>
        <span class="retry-btn" onclick="window._mtrRetry && window._mtrRetry()">重新載入</span>
      </div>`,Ae(!1),window._mtrRetry=()=>ve()}finally{q=!1}}function Ee(e){if(!e.length)return"";const t=e[0].dir,n=W.find(i=>i.code===T),s=t==="UP"?n?n.up:"上行":n?n.down:"下行";return`
    <div class="dir-section">
      <div class="dir-label"><span class="dir-arrow">${t==="UP"?"↑":"↓"}</span> 往 ${s}</div>
      ${e.slice(0,4).map((i,r)=>{let d="ok";i.min<=2?d="soon":i.min<=5&&(d="near");const f=i.min===0?"到站":`${i.min}分`;return`
          <div class="train-row">
            <span class="train-time ${d}">${f}</span>
            <div class="train-info">
              <div class="train-dest">${i.dest||"—"}</div>
              <div class="train-plat">${i.plat?i.plat+" 號月台":""}${i.time?" · "+i.time:""}</div>
            </div>
            ${r===0?'<span class="train-seq">即將到站</span>':`<span class="train-seq">第${r+1}班</span>`}
          </div>`}).join("")}
    </div>`}function it(e,t,n){const s=(e==null?void 0:e.data)||e||{},c=`${t}-${n}`,i=s[c]||Object.values(s)[0]||{},r=[];return["UP","DOWN"].forEach(d=>{const f=i[d];!f||!Array.isArray(f)||f.forEach(u=>{r.push({dir:d,dest:u.dest||"",plat:u.plat||u.platform||"",min:parseInt(u.ttnt)??0,seq:parseInt(u.seq)||0,time:u.time||""})})}),r.sort((d,f)=>d.min-f.min),r}function at(e){return e.toLocaleTimeString("zh-HK",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function st(){return T="ISL",w="",D&&(clearInterval(D),D=null),q=!1,delete window._mtrRetry,me(),D=setInterval(()=>{w&&document.getElementById("arrival-content")&&ve()},3e4),()=>{D&&(clearInterval(D),D=null),q=!1,delete window._mtrRetry}}const ge="idt_selection",ie="idt_slots";function Ne(e,t){try{const n=localStorage.getItem(e);return n===null?t:JSON.parse(n)}catch{return t}}function F(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch{return!1}}function Z(){return Ne(ge,[])}function ot(e){return Z().indexOf(e)>=0}function Oe(e){const t=Z();t.indexOf(e)<0&&(t.push(e),F(ge,t))}function xe(e){const t=Z().filter(n=>n!==e);return F(ge,t)}function C(){return Ne(ie,[])}function He(e){const t=C(),n=Object.assign({},e,{id:Date.now()+"_"+Math.floor(Math.random()*1e3)});return t.push(n),F(ie,t)?n:null}function he(e){const t=C().filter(n=>n.code!==e);return F(ie,t)}function $e(e,t){const n=C(),s=n.findIndex(c=>c.id===e);return s<0?!1:(n[s]=Object.assign({},n[s],t),F(ie,n))}const ct={COMP7103:[{term:1,section:"1B",day:"THU",start:"19:00",end:"21:50",venue:"CPD-3.04",instructor:""},{term:1,section:"1C",day:"THU",start:"09:00",end:"11:50",venue:"",instructor:""},{term:1,section:"1A",day:"",start:"",end:"",venue:"",instructor:""},{term:2,section:"2D",day:"FRI",start:"19:00",end:"21:50",venue:"KB223",instructor:""},{term:2,section:"2E",day:"MON",start:"19:00",end:"21:50",venue:"KB223",instructor:""}],COMP7404:[{term:1,section:"1A",day:"WED",start:"19:00",end:"21:50",venue:"",instructor:"Schnieders,Dirk"},{term:1,section:"1B",day:"FRI",start:"19:00",end:"21:50",venue:"",instructor:"Xu,Dong"},{term:2,section:"2C",day:"TUE",start:"19:00",end:"21:50",venue:"CPD-3.04",instructor:""},{term:2,section:"2D",day:"WED",start:"19:00",end:"21:50",venue:"CPD-3.04",instructor:""},{term:2,section:"2E",day:"TUE",start:"19:00",end:"21:50",venue:"",instructor:""}],COMP7408:[{term:1,section:"1A",day:"TUE",start:"09:00",end:"11:50",venue:"",instructor:""},{term:2,section:"2A",day:"SAT",start:"14:00",end:"16:50",venue:"MWT1",instructor:""}],COMP7503:[{term:1,section:"1A",day:"MON",start:"19:00",end:"21:50",venue:"LE1",instructor:"Luo,Tao"},{term:1,section:"1B",day:"FRI",start:"19:00",end:"21:50",venue:"MWT2",instructor:""},{term:2,section:"2C",day:"MON",start:"19:00",end:"21:50",venue:"CPD-3.04",instructor:"Luo,Tao"}],COMP7506:[{term:1,section:"1A",day:"MON",start:"19:00",end:"21:50",venue:"CYCC501",instructor:"Chim,Tat Wing"},{term:2,section:"2B",day:"THU",start:"19:00",end:"21:50",venue:"KB223",instructor:"Chim,Tat Wing"},{term:2,section:"2C",day:"WED",start:"14:00",end:"16:50",venue:"",instructor:""},{term:2,section:"2D",day:"TUE",start:"14:00",end:"16:50",venue:"",instructor:""}],COMP7802:[{term:1,section:"1A",day:"TUE",start:"19:00",end:"21:50",venue:"MWT2",instructor:""},{term:1,section:"1B",day:"",start:"",end:"",venue:"",instructor:"Ng,Tat Lun"},{term:1,section:"1C",day:"",start:"",end:"",venue:"",instructor:""}],COMP7901:[{term:2,section:"2A",day:"THU",start:"19:00",end:"21:50",venue:"CPD-LG.18",instructor:"Pun,Kwok Hung"}],COMP7906:[{term:1,section:"1A",day:"",start:"",end:"",venue:"",instructor:"Yiu,Siu Wai Russell"},{term:1,section:"1B",day:"TUE",start:"19:00",end:"21:50",venue:"LE1",instructor:""},{term:2,section:"2C",day:"TUE",start:"19:00",end:"21:50",venue:"LE1",instructor:""}],DASC7606:[{term:1,section:"1B",day:"THU",start:"19:00",end:"21:50",venue:"MWT2",instructor:""},{term:1,section:"1C",day:"THU",start:"14:00",end:"16:50",venue:"",instructor:""},{term:1,section:"1A",day:"",start:"",end:"",venue:"",instructor:""},{term:2,section:"2D",day:"SAT",start:"19:00",end:"21:50",venue:"CYCP1",instructor:""},{term:2,section:"2E",day:"THU",start:"19:00",end:"21:50",venue:"",instructor:""}],DASE7034:[{term:1,section:"1A",day:"FRI",start:"15:00",end:"17:50",venue:"MWT7",instructor:"Wang,Junwei"},{term:1,section:"1B",day:"SAT",start:"14:30",end:"17:20",venue:"KK201",instructor:"Wang,Junwei"},{term:2,section:"2C",day:"SAT",start:"14:00",end:"16:50",venue:"CBA",instructor:"Wang,Junwei"}],DASE7111:[{term:1,section:"1A",day:"FRI",start:"19:00",end:"21:50",venue:"KKLG109",instructor:"Wang,Junwei"}],DASE7128:[{term:2,section:"2A",day:"FRI",start:"14:00",end:"16:50",venue:"",instructor:"Or,Ka Lun"}],DASE7139:[{term:1,section:"1A",day:"WED",start:"19:00",end:"21:50",venue:"HW103",instructor:"Chen,Jiangcheng"},{term:2,section:"2B",day:"WED",start:"19:00",end:"21:50",venue:"HW103",instructor:"Chen,Jiangcheng"}],ELEC6098:[{term:1,section:"1A",day:"MON",start:"19:00",end:"21:50",venue:"TT404",instructor:"Ng,Hon; Wu,Ho Chun"},{term:1,section:"1B",day:"WED",start:"16:00",end:"18:50",venue:"",instructor:"Ng,Hon; Wu,Ho Chun"},{term:2,section:"2C",day:"SAT",start:"09:00",end:"15:50",venue:"MB217",instructor:"Sin,Chiu Shun Charleston"}],ELEC6603:[{term:1,section:"1A",day:"THU",start:"15:00",end:"17:50",venue:"",instructor:""},{term:1,section:"1B",day:"THU",start:"19:00",end:"21:50",venue:"KB223",instructor:""}],ELEC6604:[{term:1,section:"1A",day:"MON",start:"13:00",end:"15:50",venue:"",instructor:"Pang,Kwok Hung Grantham"},{term:1,section:"1B",day:"FRI",start:"13:00",end:"15:50",venue:"",instructor:"Pang,Kwok Hung Grantham"}],IDAT7100:[{term:1,section:"1A",day:"",start:"",end:"",venue:"",instructor:""},{term:2,section:"2A",day:"",start:"",end:"",venue:"",instructor:""}],IDAT7101:[{term:1,section:"1A",day:"",start:"",end:"",venue:"",instructor:""},{term:2,section:"2A",day:"",start:"",end:"",venue:"",instructor:""}],IDAT7211:[{term:1,section:"1A",day:"MON",start:"16:00",end:"18:20",venue:"MWT2",instructor:""},{term:2,section:"2A",day:"THU",start:"16:00",end:"18:20",venue:"CPD-LG.07",instructor:""}],IDAT7212:[{term:1,section:"1A",day:"TUE",start:"19:00",end:"21:20",venue:"LE2",instructor:"Ali,Zulfiqar"},{term:2,section:"2A",day:"TUE",start:"19:00",end:"21:20",venue:"LE5",instructor:"Ali,Zulfiqar"}],IDAT7213:[{term:1,section:"1A",day:"THU",start:"12:00",end:"14:50",venue:"MWT2",instructor:"Lu,Peng; Zhang,Fu"},{term:2,section:"2A",day:"FRI",start:"19:00",end:"21:20",venue:"",instructor:"Wang,Liuping; Zhang,Fu"}],IDAT7214:[{term:2,section:"2A",day:"FRI",start:"15:00",end:"17:20",venue:"CBA",instructor:"Ali,Zulfiqar"}],IDAT7215:[{term:1,section:"1A",day:"THU",start:"19:00",end:"21:20",venue:"KKLG109",instructor:"Ali,Zulfiqar"}],IDAT7217:[{term:1,section:"1A",day:"FRI",start:"15:00",end:"17:20",venue:"MB201",instructor:"Ali,Zulfiqar"}],IDAT7218:[{term:2,section:"2A",day:"THU",start:"19:00",end:"21:20",venue:"KK201",instructor:"Ali,Zulfiqar; Chan,Chi Keung"}],IDAT7220:[{term:1,section:"1A",day:"SAT",start:"10:00",end:"12:20",venue:"TT403",instructor:"Gonda,Donn Emmanuel Ventura"},{term:2,section:"2A",day:"SAT",start:"10:00",end:"12:20",venue:"KK201",instructor:"Gonda,Donn Emmanuel Ventura"}],IDAT7221:[{term:2,section:"2A",day:"MON",start:"19:00",end:"21:20",venue:"CPD-LG.09",instructor:"Chan,Chi Keung"}],IDAT7222:[{term:1,section:"1A",day:"MON",start:"19:00",end:"21:20",venue:"",instructor:"Ali,Zulfiqar; Chan,Chi Keung"}],IDAT7224:[{term:1,section:"1A",day:"FRI",start:"19:00",end:"21:20",venue:"KK201",instructor:"Chan,Chi Keung"},{term:2,section:"2A",day:"WED",start:"19:00",end:"21:20",venue:"KK201",instructor:"Chan,Chi Keung"}],IDAT7225:[{term:2,section:"2A",day:"WED",start:"19:00",end:"21:20",venue:"KK102",instructor:"Jiang,Zhongliang"}],MECH6010:[{term:1,section:"1A/1B",day:"TUE",start:"19:00",end:"21:20",venue:"CYPP2",instructor:"Chen,Yue; Lu,Yang"},{term:2,section:"2C/2D",day:"WED",start:"12:00",end:"14:20",venue:"CPD-2.40",instructor:"Chen,Yue; Lu,Yang"}],MECH6034:[{term:1,section:"1A/1C",day:"TUE",start:"15:00",end:"17:20",venue:"CYPP2",instructor:"Chan,Chi Keung; Chen,Yong Hua"},{term:1,section:"1B/1D",day:"THU",start:"16:00",end:"18:20",venue:"",instructor:"Chan,Chi Keung; Chen,Yong Hua"},{term:2,section:"2A",day:"MON",start:"15:00",end:"17:20",venue:"RHT",instructor:"Chan,Chi Keung; Chen,Yong Hua"}],MECH6046:[{term:1,section:"1A/1B",day:"FRI",start:"15:00",end:"17:20",venue:"",instructor:"Shin,Dongmyeong; Xu,Lizhi"},{term:2,section:"2A/2B",day:"FRI",start:"19:00",end:"21:20",venue:"MWT1",instructor:"Shin,Dongmyeong; Xu,Lizhi"}],MECH7010:[{term:1,section:"1A/1B",day:"FRI",start:"19:00",end:"21:20",venue:"MWT1",instructor:"Chen,Yong Hua; Zhang,Fu"},{term:2,section:"2A/2B",day:"TUE",start:"16:00",end:"18:20",venue:"CPD-3.25",instructor:"Chen,Yong Hua; Zhang,Fu"}],RECO7605:[{term:1,section:"1A",day:"",start:"",end:"",venue:"",instructor:"Wang,Jing"}],CIVL6054:[{term:1,section:"1A",day:"THU",start:"19:00",end:"21:20",venue:"LE9",instructor:"Luk,Kapo Rose Maria; Mak,Chai Kwong; Yan,Xintao"}],CIVL6061:[{term:1,section:"1A",day:"TUE",start:"10:00",end:"12:20",venue:"MB167",instructor:"Chui,Ting Fong May; Shih,Kaimin; Zhang,Tong"}],CIVL6062:[{term:2,section:"2A",day:"THU",start:"19:00",end:"21:20",venue:"CYCP1",instructor:""}],CIVL7006:[{term:2,section:"2A",day:"FRI",start:"19:00",end:"21:20",venue:"LE7",instructor:"Szeto,Wai Yuen"}],MEDD8860:[{term:1,section:"1A",day:"FRI",start:"18:00",end:"20:50",venue:"MW550",instructor:""}],TDLL6024:[{term:1,section:"1A",day:"TUE",start:"14:00",end:"16:50",venue:"RM101",instructor:"Underwood,Thomas Edward"},{term:1,section:"1B",day:"THU",start:"14:00",end:"16:50",venue:"RM101",instructor:"Underwood,Thomas Edward"},{term:1,section:"1C",day:"SAT",start:"09:00",end:"11:50",venue:"RM101",instructor:"Underwood,Thomas Edward"}],TDLL6333:[{term:2,section:"2A",day:"MON",start:"18:30",end:"21:20",venue:"RM104",instructor:"Underwood,Thomas Edward"}],TDLL7341:[{term:1,section:"1A",day:"WED",start:"18:30",end:"21:20",venue:"RM101",instructor:"Kwong,Cheuk Yin Chad"}],TDLL7349:[{term:1,section:"1A",day:"FRI",start:"18:30",end:"21:20",venue:"RM301",instructor:"Lin,Jionghao"}],URBA6002:[{term:2,section:"2A",day:"MON",start:"15:00",end:"16:50",venue:"LE1",instructor:"Ma,Jun; Zhao,Zhan"}],URBA6009:[{term:2,section:"2A",day:"WED",start:"15:00",end:"16:50",venue:"TT403",instructor:"Ma,Jun"}],URBA6011:[{term:1,section:"1A",day:"WED",start:"14:00",end:"15:50",venue:"",instructor:"Song,Yimeng"},{term:1,section:"1B",day:"WED",start:"14:00",end:"15:50",venue:"",instructor:"Song,Yimeng"}]},rt={MON:"周一",TUE:"周二",WED:"周三",THU:"周四",FRI:"周五",SAT:"周六",SUN:"周日"};function dt(e){return ct[e]||[]}function Pe(e){return rt[e]||""}const qe=()=>document.getElementById("modal-container");function ye({title:e,content:t,confirmText:n="确定",cancelText:s="取消",onConfirm:c,onCancel:i}){qe().innerHTML=`
    <div class="modal-mask" id="modal-mask">
      <div class="modal">
        <div class="modal-title">${e||""}</div>
        ${t?`<div style="font-size:13px;color:#5b5f66;margin-bottom:12px">${t}</div>`:""}
        <div class="modal-btns">
          <div class="m-btn cancel" id="modal-cancel">${s}</div>
          <div class="m-btn confirm" id="modal-confirm">${n}</div>
        </div>
      </div>
    </div>`,document.getElementById("modal-cancel").onclick=()=>{ce(),i&&i()},document.getElementById("modal-confirm").onclick=()=>{ce(),c&&c()},document.getElementById("modal-mask").onclick=r=>{r.target===r.currentTarget&&(ce(),i&&i())}}function ce(){qe().innerHTML=""}let we=null;function b(e,t=2e3){const n=document.getElementById("toast-container");n.innerHTML=`<div class="toast show">${e}</div>`,clearTimeout(we),we=setTimeout(()=>{n.innerHTML=""},t)}const lt={MON:1,TUE:2,WED:3,THU:4,FRI:5,SAT:6,SUN:7};function Ze(e){return dt(e).filter(t=>t.day&&t.start&&t.end)}function Be(e,t){return{code:e,term:t.term,section:t.section,day:lt[t.day],startMin:te(t.start),endMin:te(t.end),location:t.venue||"",instructor:t.instructor||""}}function pt(e){return`Sem ${e.term} · ${e.section} · ${Pe(e.day)} ${e.start}-${e.end}${e.venue?" · "+e.venue:""}${e.instructor?" · "+e.instructor:""}`}function mt(e){return C().filter(t=>t.day===e.day&&!(t.endMin<=e.startMin||t.startMin>=e.endMin)&&(!t.term||!e.term||t.term===e.term))}function re(e,t){Oe(e),t&&He(t),b(t?"已选课,时间已同步到课表":"已加入选课")}function Me(e,t,n){if(!t){re(e,null),n&&n();return}const s=mt(t);if(!s.length){re(e,t),n&&n();return}const c=[];s.forEach(d=>{c.indexOf(d.code)<0&&c.push(d.code)});const i=c.map(d=>{const f=S(d);return f?`${d} ${f.titleZh}`:d}),r=s.map(d=>`<div style="padding:4px 0;color:#c0392b">· ${d.code} ${ft(d.day)} ${P(d.startMin)}-${P(d.endMin)}${d.location?" @"+d.location:""}</div>`).join("");ye({title:"上课时间冲突",content:`以下已添加课程与 <b>${e}</b> 时间重叠:<div style="margin:8px 0">${r}</div>冲突课程:<b>${i.join("、")}</b><br/>确认后将移除上述课程(含选课与课表时段),改为添加 ${e}。`,confirmText:"取代旧课程",cancelText:"保留原课表",onConfirm:()=>{c.forEach(d=>{d!==e&&xe(d),he(d)}),re(e,t),n&&n()},onCancel:()=>{b("已取消,课表未变动"),n&&n()}})}const ut=["","周一","周二","周三","周四","周五","周六","周日"];function ft(e){return ut[e]||""}function vt(e){const t=S(e);if(!t||!t.exclusive)return[];const n=Z(),s=[];return n.forEach(c=>{if(c!==e&&t.exclusive.indexOf(c)>=0){const i=S(c);s.push({code:c,name:i?i.titleZh:""})}}),s}function gt(e,t){const n=vt(e);if(n.length){const s=n.map(c=>`${c.code} ${c.name}`).join("、");ye({title:"课程互斥提示",content:`<div style="font-size:12px;color:#5b5f66;line-height:1.8">
        该课程与已选课程存在互斥关系:<br>
        <b style="color:#c0392b">${s}</b><br><br>
        确认选课将移出上述课程(含课表时段),并加入 <b>${e}</b>。
      </div>`,confirmText:"取代旧课程",cancelText:"保留原课表",onConfirm:()=>{n.forEach(c=>{xe(c.code),he(c.code)}),Ce(e,t)},onCancel:()=>{b("已取消,课表未变动"),t&&t()}});return}Ce(e,t)}function Ce(e,t){const n=Ze(e);if(!n.length){Oe(e),b("已加入选课(该课程暂无固定上课时间)"),t&&t();return}if(n.length===1){Me(e,Be(e,n[0]),t);return}let s=0;const c=n.map((i,r)=>`<label style="display:flex;align-items:flex-start;gap:8px;padding:7px 0;border-bottom:1px solid #f0f1f4;cursor:pointer">
      <input type="radio" name="enroll-sec" value="${r}" ${r===0?"checked":""} style="margin-top:2px" />
      <span style="font-size:12px;color:#14312a;line-height:1.5">${pt(i)}</span>
    </label>`).join("");ye({title:`选择 ${e} 的班次`,content:`<div style="max-height:260px;overflow-y:auto">${c}</div>`,confirmText:"确定选课",cancelText:"取消",onConfirm:()=>Me(e,Be(e,n[s]),t)}),document.querySelectorAll('input[name="enroll-sec"]').forEach(i=>{i.onchange=()=>{s=Number(i.value)}})}function xt(e,t){xe(e),he(e),b("已移出选课,课表时段同步删除"),t&&t()}function ht(e){const t=Ze(e);if(!t.length)return"";const n=[];return t.forEach(s=>{const c=`S${s.term} ${Pe(s.day)} ${s.start}-${s.end}`;n.indexOf(c)<0&&n.push(c)}),n.slice(0,3).join(" / ")+(n.length>3?" …":"")}let de="",L="all",V="all";function N(){const e=document.getElementById("page-container"),t=Z();let n=0,s=0,c=0;t.forEach(o=>{const v=pe.find(h=>h.code===o);!v||v.list==="capstone"||(c+=v.credits,v.list==="A"&&(n+=v.credits),(v.list==="A"||v.list==="B")&&(s+=v.credits))});const i=de.trim().toLowerCase(),r=pe.filter(o=>!(L!=="all"&&L!=="selected"&&o.list!==L||L==="selected"&&t.indexOf(o.code)<0||V!=="all"&&o.semester!=="1&2"&&o.semester!==V||i&&(o.code+o.title+o.titleZh+(o.exclusive||"")).toLowerCase().indexOf(i)<0)).map(o=>({...o,semText:Re(o.semester),timeText:ht(o.code),selected:t.indexOf(o.code)>=0})),d=[{key:"all",label:"全部"},{key:"A",label:"List A 核心"},{key:"B",label:"List B 选修"},{key:"capstone",label:"毕业设计"},{key:"selected",label:"已选择"}],f=[{key:"all",label:"全部学期"},{key:"1",label:"第一学期"},{key:"2",label:"第二学期"}],u=Se;e.innerHTML=`
    <style>
      .search-bar{padding:12px 16px 0}
      .search-input{width:100%;background:#fff;border:none;border-radius:999px;padding:10px 16px;font-size:13px;box-shadow:0 2px 8px rgba(0,45,32,0.06);outline:none}
      .tabs{display:flex;padding:12px 16px 0;flex-wrap:wrap;gap:8px}
      .ftab{font-size:12px;color:#4b5563;background:#fff;border-radius:999px;padding:5px 14px;cursor:pointer}
      .ftab.active{background:#00573f;color:#fff;font-weight:600}
      .course-card{cursor:pointer}
      .course-code{font-size:14px;font-weight:700;color:#00573f;margin-right:8px}
      .course-title{font-size:15px;font-weight:600;color:#1f2430;margin-top:6px}
      .course-en{font-size:11px;color:#8a8f99;margin-top:2px}
      .course-meta{font-size:11px;color:#6b7280;margin-top:8px}
      .course-time{font-size:11px;color:#00573f;margin-top:4px}
      .course-foot{display:flex;align-items:center;justify-content:space-between;margin-top:10px}
      .select-btn{font-size:12px;color:#00573f;background:#eef5f1;border-radius:999px;padding:5px 14px;cursor:pointer}
      .select-btn.selected{background:#00573f;color:#fff}
      .credit-bar{position:fixed;left:0;right:0;bottom:calc(56px + env(safe-area-inset-bottom, 0px));background:#fff;border-top:1px solid #e8eaee;display:flex;align-items:center;padding:10px 16px;z-index:20}
      .credit-info{display:flex;flex:1;justify-content:space-around}
      .cc{text-align:center}
      .cc-num{font-size:15px;font-weight:700;color:#c0392b}
      .cc-req{font-size:10px;color:#8a8f99}
      .cc.ok .cc-num{color:#00573f}
      .cc.fixed .cc-num{color:#6b7280}
      .cc-label{font-size:10px;color:#8a8f99}
      .credit-action{font-size:13px;color:#00573f;font-weight:600;padding:8px 0 8px 12px;cursor:pointer}
    </style>
    <div class="search-bar"><input class="search-input" id="course-search" placeholder="搜索课程代码 / 中英文名称" value="${de}" /></div>
    <div class="tabs">${d.map(o=>`<span class="ftab ${L===o.key?"active":""}" data-list="${o.key}">${o.label}</span>`).join("")}</div>
    <div class="tabs">${f.map(o=>`<span class="ftab ${V===o.key?"active":""}" data-sem="${o.key}">${o.label}</span>`).join("")}</div>
    ${r.length?r.map(o=>`
      <div class="card course-card" data-code="${o.code}">
        <div style="display:flex;align-items:center;flex-wrap:wrap">
          <span class="course-code">${o.code}</span>
          ${o.list==="A"?'<span class="tag">List A</span>':o.list==="B"?'<span class="tag tag-gray">List B</span>':'<span class="tag tag-warn">毕业设计</span>'}
          ${o.isNew2026?'<span class="tag tag-new">26级新增</span>':""}
          ${o.movedToB2026?'<span class="tag tag-warn">26级转List B</span>':""}
        </div>
        <div class="course-title">${o.titleZh}</div>
        <div class="course-en">${o.title}</div>
        <div class="course-meta">${o.credits} 学分 · ${o.semText}${o.cef?' · <span style="color:#b8741a">CEF 可报销</span>':""}</div>
        <div class="course-time">${o.timeText?"🕒 "+o.timeText:"🕒 时间待定"}</div>
        ${o.exclusive?`<div style="font-size:11px;color:#c0392b;margin-top:6px">⚠ 互斥: ${o.exclusive}</div>`:""}
        <div class="course-foot">
          <div class="select-btn ${o.selected?"selected":""}" data-toggle="${o.code}">${o.selected?"已选 ✓":"+ 选课"}</div>
        </div>
      </div>
    `).join(""):'<div class="card" style="text-align:center;color:#8a8f99;font-size:12px">没有匹配的课程,换个关键词试试</div>'}
    ${t.length?`
      <div class="credit-bar">
        <div class="credit-info">
          <div class="cc ${n>=u.listAMin?"ok":""}"><span class="cc-num">${n}</span><span class="cc-req">/${u.listAMin}</span><div class="cc-label">List A</div></div>
          <div class="cc ${s>=u.disciplineMin?"ok":""}"><span class="cc-num">${s}</span><span class="cc-req">/${u.disciplineMin}</span><div class="cc-label">学科课</div></div>
          <div class="cc ${c>=u.courseCredits?"ok":""}"><span class="cc-num">${c}</span><span class="cc-req">/${u.courseCredits}</span><div class="cc-label">课程学分</div></div>
          <div class="cc fixed"><span class="cc-num">+${u.dissertation}</span><div class="cc-label">毕业论文</div></div>
        </div>
        <div class="credit-action" id="go-schedule">排课表 ›</div>
      </div>
      <div style="height:60px"></div>
    `:""}
  `,document.getElementById("course-search").oninput=o=>{de=o.target.value,N()},e.querySelectorAll("[data-list]").forEach(o=>{o.onclick=()=>{L=o.dataset.list,N()}}),e.querySelectorAll("[data-sem]").forEach(o=>{o.onclick=()=>{V=o.dataset.sem,N()}}),e.querySelectorAll("[data-toggle]").forEach(o=>{o.onclick=v=>{const h=o.dataset.toggle;ot(h)?xt(h,N):gt(h,N)}});const x=document.getElementById("go-schedule");x&&(x.onclick=()=>ee("/schedule")),j()}function yt(){N()}const Q=8*60,le=22*60,ke=["#00573f","#31597f","#6b5b95","#8a6d3b","#7a5195","#9c4f4f","#2e6f5c","#3d6e9e"];let O=!1,z=!1,E=null,K="all",I={courseIndex:0,dayIndex:0,startTime:"18:30",endTime:"21:30",location:""};function $(){const e=document.getElementById("page-container"),t=Le(Y()),n=C().filter(a=>K==="all"||!a.term||a.term===Number(K)),s=Z().map(a=>S(a)).filter(Boolean),c=s.map(a=>`${a.code} ${a.titleZh}`),i={};let r=0;const d=n.map(a=>{const m=S(a.code);return a.code in i||(i[a.code]=ke[r%ke.length],r++),{id:a.id,code:a.code,name:m?m.titleZh:"",location:a.location,instructor:a.instructor||"",term:a.term||0,section:a.section||"",note:a.note||"",leftPct:Math.round((a.day-1)*100/7*1e3)/1e3,top:a.startMin-Q,height:Math.max(a.endMin-a.startMin,40),color:i[a.code],timeText:`${P(a.startMin)}-${P(a.endMin)}`}}),f=[];for(let a=Q/60;a<le/60;a++)f.push(a);const u=le-Q;e.innerHTML=`
    <style>
      .sched-head{display:flex;justify-content:space-between;align-items:center;padding:12px 16px}
      .sched-title{font-size:18px;font-weight:700;color:#14312a}
      .sched-sub{font-size:11px;color:#8a8f99;margin-top:2px}
      .sched-actions{display:flex;gap:8px}
      .act{font-size:12px;padding:6px 12px;border-radius:8px;cursor:pointer}
      .act.plain{color:#00573f;background:#eef5f1}
      .act.primary{color:#fff;background:#00573f}
      .grid-head{display:flex;padding:0 0 4px 32px}
      .day-head{flex:1;text-align:center;font-size:11px;color:#6b7280}
      .day-head.weekend{color:#c0392b}
      .sched-scroll{height:${Math.min(u*.7,500)}px;overflow-y:auto;position:relative;margin:0 8px}
      .grid{display:flex;position:relative}
      .time-col{width:32px;flex-shrink:0}
      .time-cell{height:60px;font-size:9px;color:#8a8f99;text-align:right;padding-right:4px}
      .days-wrap{position:relative;flex:1;border-left:1px solid #eef0f2}
      .day-col{position:absolute;top:0;bottom:0;border-right:1px solid #f5f6f8}
      .h-line{position:absolute;left:0;right:0;height:1px;background:#f5f6f8}
      .block{position:absolute;width:calc(100%/7 - 2px);border-radius:6px;padding:3px 4px;overflow:hidden;cursor:pointer;color:#fff;font-size:10px}
      .block-code{font-weight:600;font-size:10px;word-break:break-all;line-height:1.25}
      .block-name{font-size:9px;opacity:0.9;line-height:1.3}
      .block-time{opacity:0.85;font-size:9px}
      .block-loc{opacity:0.8;font-size:9px}
      .block-note{opacity:0.95;font-size:9px;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .term-tabs{display:flex;gap:8px;padding:0 16px 8px}
      .term-tab{font-size:12px;color:#4b5563;background:#fff;border-radius:999px;padding:4px 14px;cursor:pointer}
      .term-tab.active{background:#00573f;color:#fff;font-weight:600}
      .empty-hint{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#8a8f99;font-size:13px}
      .empty-sub{font-size:11px;margin-top:4px}
      .pk-row{display:flex;align-items:center;padding:10px 0;border-bottom:1px solid #f0f1f4}
      .pk-label{font-size:13px;color:#14312a;width:50px;flex-shrink:0}
      .pk-value{font-size:13px;color:#00573f}
      .pk-select,.pk-input{flex:1;border:1px solid #e8eaee;border-radius:8px;padding:8px 10px;font-size:13px;outline:none}
    </style>
    <div class="sched-head">
      <div><div class="sched-title">每周课表</div><div class="sched-sub">${t?`${t.name} · 第 ${t.week} 周`:"当前不在教学周内"}</div></div>
      <div class="sched-actions">
        ${d.length?'<div class="act plain" id="copy-btn">复制</div>':""}

        <div class="act primary" id="add-btn">+ 添加</div>
      </div>
    </div>
    <div class="term-tabs">${[{k:"all",l:"全部"},{k:"1",l:"第一学期"},{k:"2",l:"第二学期"}].map(a=>`<span class="term-tab ${K===a.k?"active":""}" data-term="${a.k}">${a.l}</span>`).join("")}</div>
    <div class="grid-head">${J.map((a,m)=>`<div class="day-head ${m>=5?"weekend":""}">${a}</div>`).join("")}</div>
    <div class="sched-scroll">
      <div class="grid">
        <div class="time-col">${f.map(a=>`<div class="time-cell">${a}:00</div>`).join("")}</div>
        <div class="days-wrap" style="height:${u}px">
          ${J.map((a,m)=>`<div class="day-col" style="left:${m*100/7}%;width:${100/7}%"></div>`).join("")}
          ${f.map((a,m)=>`<div class="h-line" style="top:${m*60}px"></div>`).join("")}
          ${d.map(a=>`<div class="block" data-id="${a.id}" style="left:${a.leftPct}%;top:${a.top}px;height:${a.height}px;background:${a.color}"><div class="block-code">${a.code}</div>${a.name?`<div class="block-name">${a.name}</div>`:""}<div class="block-time">${a.term?`S${a.term} `:""}${a.timeText}</div>${a.location?`<div class="block-loc">${a.location}</div>`:""}${a.instructor?`<div class="block-loc">${a.instructor}</div>`:""}${a.note?`<div class="block-note">📝 ${a.note}</div>`:""}</div>`).join("")}
          ${d.length===0?'<div class="empty-hint"><div>课表还是空的</div><div class="empty-sub">在「课程」页点「+ 选课」自动同步,或点右上角「+ 添加」手动录入</div></div>':""}
        </div>
      </div>
    </div>
    <div class="muted" style="text-align:center;padding:10px 16px">点击课程块可添加备注</div>
    ${O?`
      <div class="modal-mask" id="add-mask">
        <div class="modal" style="padding:20px">
          <div class="modal-title">添加上课时段</div>
          ${s.length?`
            <div class="pk-row"><span class="pk-label">课程</span><select class="pk-select" id="pk-course">${c.map((a,m)=>`<option value="${m}" ${I.courseIndex===m?"selected":""}>${a}</option>`).join("")}</select></div>
            <div class="pk-row"><span class="pk-label">星期</span><select class="pk-select" id="pk-day">${J.map((a,m)=>`<option value="${m}" ${I.dayIndex===m?"selected":""}>${a}</option>`).join("")}</select></div>
            <div class="pk-row"><span class="pk-label">开始</span><input type="time" class="pk-input" id="pk-start" value="${I.startTime}" min="08:00" max="22:00" /></div>
            <div class="pk-row"><span class="pk-label">结束</span><input type="time" class="pk-input" id="pk-end" value="${I.endTime}" min="08:00" max="22:00" /></div>
            <div class="pk-row"><span class="pk-label">地点</span><input class="pk-input" id="pk-loc" placeholder="如 CB313 / 线上(选填)" value="${I.location}" /></div>
            <div class="pk-row"><span class="pk-label">备注</span><input class="pk-input" id="pk-note" placeholder="选填" value="${I.note||""}" maxlength="200" /></div>
            <div class="modal-btns"><div class="m-btn cancel" id="add-cancel">取消</div><div class="m-btn confirm" id="add-save">保存</div></div>
          `:'<div style="text-align:center;color:#8a8f99;font-size:13px;padding:20px 0">请先在「课程」页加入选课</div><div class="modal-btns"><div class="m-btn cancel" id="add-cancel">关闭</div></div>'}
        </div>
      </div>
    `:""}
    ${z&&E?`
      <div class="modal-mask" id="note-mask">
        <div class="modal" style="padding:20px">
          <div class="modal-title">课程备注</div>
          <div style="font-size:13px;color:#14312a;margin-bottom:12px">${E.code} ${(S(E.code)||{}).titleZh||""}</div>
          <textarea class="pk-input" id="note-input" placeholder="备注内容（如作业截止、考试日期等）" style="width:100%;min-height:80px;resize:vertical" maxlength="200">${E.note}</textarea>
          <div class="modal-btns">
            ${E.note?'<div class="m-btn cancel" id="note-clear" style="background:#c0392b;color:#fff">清除备注</div>':""}
            <div class="m-btn cancel" id="note-cancel">取消</div>
            <div class="m-btn confirm" id="note-save">保存</div>
          </div>
        </div>
      </div>
    `:""}
  `,e.querySelectorAll("[data-term]").forEach(a=>{a.onclick=()=>{K=a.dataset.term,$()}}),document.getElementById("add-btn").onclick=()=>{O=!0,$()};const x=document.getElementById("add-cancel");x&&(x.onclick=()=>{O=!1,$()});const o=document.getElementById("add-mask");o&&(o.onclick=a=>{a.target===o&&(O=!1,$())});const v=document.getElementById("add-save");v&&(v.onclick=()=>{const a=Number(document.getElementById("pk-course").value),m=Number(document.getElementById("pk-day").value),g=document.getElementById("pk-start").value,B=document.getElementById("pk-end").value,ae=document.getElementById("pk-loc").value,se=document.getElementById("pk-note").value,_=te(g),X=te(B);if(X<=_){b("结束时间需晚于开始时间");return}if(_<Q||X>le){b("时段需在 08:00-22:00 之间");return}const Te=m+1;if(C().some(oe=>oe.day===Te&&!(oe.endMin<=_||oe.startMin>=X))){b("该时段与已有课程冲突");return}const Ke=s[a];He({code:Ke.code,day:Te,startMin:_,endMin:X,location:ae.trim(),note:se.trim()}),O=!1,I={courseIndex:a,dayIndex:m,startTime:g,endTime:B,location:"",note:""},b("已添加"),$()}),e.querySelectorAll(".block").forEach(a=>{a.onclick=()=>{const m=C().find(g=>g.id===a.dataset.id);E=m?{id:m.id,code:m.code,note:m.note||""}:null,z=!0,$()}});const h=document.getElementById("note-save"),A=document.getElementById("note-cancel"),M=document.getElementById("note-clear"),p=document.getElementById("note-mask");h&&(h.onclick=()=>{const a=document.getElementById("note-input");$e(E.id,{note:a.value.trim()}),z=!1,E=null,b("备注已保存"),$()}),A&&(A.onclick=()=>{z=!1,E=null,$()}),M&&(M.onclick=()=>{$e(E.id,{note:""}),z=!1,E=null,b("备注已清除"),$()}),p&&(p.onclick=a=>{a.target===p&&(z=!1,E=null,$())});const l=document.getElementById("copy-btn");l&&(l.onclick=()=>{const a=C().slice().sort((m,g)=>m.day-g.day||m.startMin-g.startMin).map(m=>{const g=S(m.code);return`${J[m.day-1]} ${P(m.startMin)}-${P(m.endMin)} ${m.code} ${g?g.titleZh:""}${m.location?" @"+m.location:""}${m.note?" 📝"+m.note:""}`});navigator.clipboard.writeText(a.join(`
`)).then(()=>b("已复制到剪贴板")).catch(()=>b("复制失败"))}),j()}function Tt(){O=!1,K="all",$()}R("/home",_e);R("/calendar",Ge);R("/commute",st);R("/courses",yt);R("/schedule",Tt);We();
