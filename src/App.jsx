import MyCard from './components/myCard'

const App = () => {
   const persons =[
    {
      fullname: "John Doe",
      position: "CEO",
      phone: +2349034286989,
      location: "Los Angeles",
      email: "johndoe@gmail.com",
      image: "https://media.licdn.com/dms/image/C5103AQFl656k2-DwOg/profile-displayphoto-shrink_800_800/0/1517034956958?e=2147483647&v=beta&t=6H_aZri3qcbtlgwTyTKBceuyTEPYW43xGViq5UL4J-w",
    },

    {
      fullname: "Alawode Purity",
      position: "CEO",
      phone: +2349034653427,
      location: "Paris",
      email: "alawodepurity@gmail.com",
      image: "https://img.freepik.com/free-photo/human-face-expressions-emotions-positive-joyful-young-beautiful-female-with-fair-straight-hair-casual-clothing_176420-15188.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=ais"
    },

    {
      fullname: "Moses Peniel",
      position: "CEO",
      phone: +2348180734209,
      location: "USA",
      email: "mosespeniel@gmail.com",
      image: "https://img.freepik.com/free-photo/satisfied-smiling-blonde-young-woman-with-pleased-expression-expresses-happiness-dressed-casual-white-t-shirt_273609-17168.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais"
    },

    {
      fullname: "Glory Favour",
      position: "CEO",
      phone: +2346797308,
      location: "New York",
      email: "gloryfavour@gmail.com",
      image: "https://img.freepik.com/premium-photo/close-up-silly-cute-smiling-brunette-girl-leaning-hands-looking-with-admiration-white_1258-30409.jpg?w=360"
    },

    {
      fullname: "Adegbenro Samiat",
      position: "CEO",
      phone: +2349034563987,
      location: "Canada",
      email: "samiatadegbenro@gmail.com",
      image: "https://img.freepik.com/premium-photo/portrait-joyful-pretty-brunette-girl-looking-amused-smiling-excited-surprised-white_1258-30319.jpg"
    },

    {
      fullname: "Cynthia Mary",
      position: "CEO",
      phone: +234908543278,
      location: "Scotland",
      email: "marycynthia@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbpnxIBV9X__hXdN1blXlRzfuyeGNkhkuWKw&usqp=CAU"
    },

    {
      fullname: "Ogunbayo Oluwafemi",
      position: "CEO",
      phone: +2349034698614,
      location: "Germany",
      email: "ogunbayofemi@gmail.com",
      image: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
    },

    {
      fullname:"Olatunde Raji",
      position: "CEO",
      phone: +2347089543677,
      location: "Australia",
      email: "rajiolatunde@gmail.com",
      image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
    },

    {
      fullname: "Oriyomi Olamilekan",
      position: "CEO",
      phone: +2349157839287,
      location: "Russia",
      email: "oriyomiolamilekan@gmail.com",
      image: "https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D"
    },

    {
      fullname: "Babalola Oyindamola",
      position: "CEO",
      phone: +2349035761987,
      location: "Spain",
      email: "dammiesexy@gmail.com",
      image:"https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg"
    },
   ]
 

  return (
    <>
    <h1> Identification Card.js.</h1>
    <div>
      {persons.map(({fullname, location, phone, email, image, position}, index) => (
       <MyCard key={index}
       fullname={fullname}
       location={location} 
       phone={phone}
       email={email}
       image={image}
       position={position}/>
      )
      )}
    </div>
    
    </>
  );
}

export default App
