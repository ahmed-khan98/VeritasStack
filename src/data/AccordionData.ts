
interface DataType {
  tab_id: string;
  tab_id_2: string;
  question: string;
  answer: string;
}[]

const accordion_data: DataType[] = [
  {
    tab_id: "One", 
    tab_id_2: "Six", 
    question: "Is domain and hosting included in this package ?",
    answer: "No, Domain & Hosting are a company's property registered to their name, that is provided by the client but we would also provide the hosting as per client request Please feel free to contact our support anytime and discuss your requirements in details.",
  },
  {
    tab_id: "Two", 
    tab_id_2: "Seseven", 
    question: "Will you help me define the scope of the website",
    answer: "Yes Definitely, We are here to help you define your scope and provide you with best solution. Please feel free to contact our support anytime and discuss your requirements in details.",
  },
  {
    tab_id: "Three", 
    tab_id_2: "Eight", 
    question: "Are testing and deployment included in the package?",
    answer: "Yes. We deliver the best quality fully tested products and ready to launch/deploy on the server.",
  },
  {
    tab_id: "Four", 
    tab_id_2: "Nine", 
    question: "can you setup business emails of my domain?",
    answer: "Yes, we can setup your business emails whatever you would like to integrate.",
  },
  {
    tab_id: "Five", 
    tab_id_2: "Nine1", 
    question: "Will you guide me properly how to manage the website after its completion",
    answer: "Yes, We will guide you properly until you are completely satisfied and confident enough to use the website on your own.",
  },
  {
    tab_id: "six", 
    tab_id_2: "Nine2", 
    question: "Are you available 24/7 for support?",
    answer: "Yes, We are 24/7 available for your query. Please feel free to contact our support anytime and discuss your requirements in details",
  },
  {
    tab_id: "seven", 
    tab_id_2: "Nine3", 
    question: "Will I get all the source code at the end of the project ?",
    answer: "Upon completion of the project, complete source code along with Administrator accesses for all accounts used is handed over to the client.",
  }
]
export default accordion_data