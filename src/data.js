const descriptions = {
    1: <span> With the increasing number of publications in Academia, it has become quite difficult to make literature reviews and conventional manual methods do not seem to cope with this problem. In this paper, we introduce an automated literature review system to ease the literature review process for academics with reference graphs, abstract and full document summaries, paper clusters by keywords, abstracts and abstract summaries combined in a system. The output of the introduced system may be a good tool to explore or keep up with developments in research fields. <p><a href='https://cataltasz.github.io/WebInterface' target="_blank">Demo Website</a></p></span>,
    2: <span>The development of e-commerce has created new shopping trends of customers. In online shopping environments, product reviews play a critical role in the choice of customers. Online reviews are additionally valuable for the manufacturers and the vendors by providing easily accessible feedback to them. In this study, a text analysis method is proposed to find the defective features of the products by detecting features with negative opinion tendency in the clustered customer reviews. The output of the proposed model, the extracted defects, may provide a strong source of guidance both for consumers in purchase decisions and for producers in product improvement. <p><a href='https://github.com/SevcanDogramaci/AmazonReviewProject' target="_blank">Project Repository</a></p></span>,
    3: <span>IOT Camera Sensor Fusion for Agriculture</span>,
    4: <span>A dashboard developed using MERN stack to track data for IOTCam</span>,
    5: <span>An AI agent that plays Mangala Game using MinMax</span>,
    6: <span>An Android Word Keeper app for English users which allows users to retrieve and store detailed information about a word. </span>,
    7: <span>A solution for Taxi Fare Prediction Challange on Kaggle, uses LightGBM, KNN, Random Forest Algorithms <p><a href='https://github.com/cataltasz/TaxiFarePredictionML' target="_blank">Project Repository</a></p></span>,
    8: <span>A solution for Diabetes Classification Challange on Kaggle, uses KNN to solve the problem <p><a href='https://github.com/cataltasz/KNNonDiabetes' target="_blank">Project Repository</a></p></span>,
    9: <span>A database and its client application designed to satisfy document request needs of users.</span>,
    10: <span>A 16-bit MIPS Processor Simulator developed in Java</span>,
}
export const items = {
    1: {id: 1, img: "assets/academic-graph.jpg", title: "Academic Graph", 
        description: descriptions[1], 
        tags: ["NLP", "Machine Learning", "Text Summarization"]},
    2: {id: 2, img: "assets/arewp.jpg", title: "Amazon Review Project", 
        description: descriptions[2], 
        tags: ["NLP", "DBSCAN", "Text Processing"]},
    3: {id: 3, img: "assets/iotcam.jpg", title: "IOTCam", 
        description: descriptions[3], 
        tags: ["IOT", "Sensors", "MQTT"]},
    4: {id: 4, img: "assets/iot-dashboard.png", title: "IOTCam Dashboard", 
        description: descriptions[4], 
        tags: ["React", "MongoDB", "IOTCam"]},
    5: {id: 5, img: "assets/mangala.jpg", title: "Mangala Smart Agent",
        description: descriptions[5], 
        tags: ["AI", "MinMax", "Mangala"]},
    6: {id: 6, img: "assets/depo.jpeg", title: "Android-Word Keeper", 
        description: descriptions[6], 
        tags: ["Android", "SQLite3", "API Calls"]},
    7: {id: 7, img: "assets/taxi.png", title: "Taxi Fare Prediction",
        description: descriptions[7], 
        tags: ["Machine Learning", "KNN", "LightGBM"]},
    8: {id: 8, img: "assets/diabetes.png", title: "KNN on Diabetes Dataset",
        description: descriptions[8], 
        tags: ["Machine Learning", "KNN", "Preprocessing"]},
    9: {id: 9, img: "assets/dbreq.png", title: "Document Request DB System", 
        description: descriptions[9], 
        tags: ["MS SQL Server", "Java", "Database Design"]},
    10: {id: 10, img: "assets/mips.png", title: "MIPS Simulator", 
        description: descriptions[10], 
        tags: ["MIPS", "Processor"]},
}
export const data = {
    a: {
        id: "a",
        title: "Featured",
        projects: [ 1, 2,3,4,5,6]
    }, 

    b: {
        id: "b",
        title: "ML/NLP",
        projects: [1,2,7,8]
    }, 
    
    c: {
        id: "c",
        title: "Course Projects",
        projects: [3,5,6,9,10]
    }
};