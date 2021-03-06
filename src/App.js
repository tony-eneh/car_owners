import React from 'react';
import './App.css';
import FiltersList from './Components/FiltersList/FiltersList';
import CarsList from './Components/CarsList/CarsList';

function App() {
  let filters = [
    { 
      id: 1,
      start_year: 1991,
      end_year: 2009,
      gender: "male",
      countries: [
      "Brazil",
      "Ireland",
      "Egypt",
      "Poland",
      "Niger",
      "Greece",
      "Peru"
      ],
      colors: [
      "Green",
      "Violet",
      "Yellow",
      "Blue"
      ]},
    { 
      id: 2,
      start_year: 1990,
      end_year: 2010,
      gender: "",
      countries: [
      "Russia",
      "Portugal",
      "Vietnam",
      "Croatia",
      "Uganda",
      "Iran"
      ],
      colors: [
      "Teal",
      "Maroon",
      "Red"
      ]},
    {
      id: 3,
      start_year: 2001,
      end_year: 2009,
      gender: "female",
      countries: [ ],
      colors: [
      "Red",
      "Aquamarine",
      "Orange",
      "Mauv"
      ]}
  ];

const cars = [{ "_id" : ("5eb53258b455afbe20d4599b"), "id" : 3, "first_name" : "Sissy", "last_name" : "Willbourne", "email" : "swillbourne2@xinhuanet.com", "country" : "Bolivia", "car_model" : "Lexus", "car_model_year" : 2004, "car_color" : "Puce", "gender" : "Female", "job_title" : "Staff Accountant I", "bio" : "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui." }
,{ "_id" : ("5eb53258b455afbe20d459a7"), "id" : 16, "first_name" : "Quintus", "last_name" : "Winkworth", "email" : "qwinkworthf@nih.gov", "country" : "Peru", "car_model" : "Lexus", "car_model_year" : 2011, "car_color" : "Teal", "gender" : "Male", "job_title" : "Help Desk Technician", "bio" : "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula." }
,{ "_id" : ("5eb53258b455afbe20d459cc"), "id" : 56, "first_name" : "Nicholle", "last_name" : "Farnin", "email" : "nfarnin1j@webs.com", "country" : "Russia", "car_model" : "Lexus", "car_model_year" : 2005, "car_color" : "Turquoise", "gender" : "Female", "job_title" : "VP Marketing", "bio" : "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa." }
,{ "_id" : ("5eb53258b455afbe20d459e0"), "id" : 75, "first_name" : "Laughton", "last_name" : "Sloane", "email" : "lsloane22@i2i.jp", "country" : "China", "car_model" : "Lexus", "car_model_year" : 2006, "car_color" : "Pink", "gender" : "Male", "job_title" : "Assistant Media Planner", "bio" : "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius." }
,{ "_id" : ("5eb53258b455afbe20d459e4"), "id" : 76, "first_name" : "Garrik", "last_name" : "Stowell", "email" : "gstowell23@sourceforge.net", "country" : "Philippines", "car_model" : "Lexus", "car_model_year" : 1995, "car_color" : "Aquamarine", "gender" : "Male", "job_title" : "Analyst Programmer", "bio" : "Pellentesque viverra pede ac diam." }
,{ "_id" : ("5eb53258b455afbe20d45a37"), "id" : 161, "first_name" : "Thane", "last_name" : "Poundesford", "email" : "tpoundesford4g@toplist.cz", "country" : "Thailand", "car_model" : "Lexus", "car_model_year" : 2011, "car_color" : "Orange", "gender" : "Male", "job_title" : "Software Test Engineer IV", "bio" : "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris." }
,{ "_id" : ("5eb53258b455afbe20d45a81"), "id" : 235, "first_name" : "Roderich", "last_name" : "Silverthorne", "email" : "rsilverthorne6i@livejournal.com", "country" : "United States", "car_model" : "Lexus", "car_model_year" : 2002, "car_color" : "Fuscia", "gender" : "Male", "job_title" : "Programmer Analyst I", "bio" : "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci." }
,{ "_id" : ("5eb53258b455afbe20d45ae2"), "id" : 332, "first_name" : "Lyle", "last_name" : "Beagrie", "email" : "lbeagrie97@edublogs.org", "country" : "Estonia", "car_model" : "Lexus", "car_model_year" : 1999, "car_color" : "Fuscia", "gender" : "Male", "job_title" : "Clinical Specialist", "bio" : "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." }
,{ "_id" : ("5eb53258b455afbe20d45af8"), "id" : 354, "first_name" : "Tony", "last_name" : "Quinnet", "email" : "tquinnet9t@vkontakte.ru", "country" : "China", "car_model" : "Lexus", "car_model_year" : 2005, "car_color" : "Purple", "gender" : "Male", "job_title" : "VP Sales", "bio" : "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede." }
,{ "_id" : ("5eb53258b455afbe20d45b17"), "id" : 384, "first_name" : "Terrence", "last_name" : "Pietruszka", "email" : "tpietruszkaan@zimbio.com", "country" : "France", "car_model" : "Lexus", "car_model_year" : 2005, "car_color" : "Yellow", "gender" : "Male", "job_title" : "Research Nurse", "bio" : "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla." }
,{ "_id" : ("5eb53258b455afbe20d45b92"), "id" : 506, "first_name" : "Catherin", "last_name" : "Stoodale", "email" : "cstoodalee1@sohu.com", "country" : "Peru", "car_model" : "Lexus", "car_model_year" : 2005, "car_color" : "Pink", "gender" : "Female", "job_title" : "Recruiting Manager", "bio" : "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus." }
,{ "_id" : ("5eb53258b455afbe20d45ba5"), "id" : 527, "first_name" : "Alfreda", "last_name" : "Guillerman", "email" : "aguillermanem@cmu.edu", "country" : "Philippines", "car_model" : "Lexus", "car_model_year" : 2003, "car_color" : "Turquoise", "gender" : "Female", "job_title" : "Food Chemist", "bio" : "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque." }
,{ "_id" : ("5eb53258b455afbe20d45be8"), "id" : 595, "first_name" : "Rudyard", "last_name" : "Eberle", "email" : "reberlegi@myspace.com", "country" : "Madagascar", "car_model" : "Lexus", "car_model_year" : 2009, "car_color" : "Puce", "gender" : "Male", "job_title" : "Assistant Media Planner", "bio" : "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh." }
,{ "_id" : ("5eb53258b455afbe20d45c42"), "id" : 682, "first_name" : "Wynn", "last_name" : "Eslinger", "email" : "weslingerix@paypal.com", "country" : "Philippines", "car_model" : "Lexus", "car_model_year" : 2012, "car_color" : "Mauv", "gender" : "Male", "job_title" : "Accounting Assistant IV", "bio" : "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique." }
,{ "_id" : ("5eb53258b455afbe20d45c76"), "id" : 737, "first_name" : "Trixi", "last_name" : "Spinnace", "email" : "tspinnacekg@canalblog.com", "country" : "Philippines", "car_model" : "Lexus", "car_model_year" : 2012, "car_color" : "Teal", "gender" : "Female", "job_title" : "Recruiter", "bio" : "Suspendisse potenti. In eleifend quam a odio." }
,{ "_id" : ("5eb53258b455afbe20d45c80"), "id" : 745, "first_name" : "Stillmann", "last_name" : "Halpine", "email" : "shalpineko@barnesandnoble.com", "country" : "Sri Lanka", "car_model" : "Lexus", "car_model_year" : 1997, "car_color" : "Orange", "gender" : "Male", "job_title" : "Environmental Specialist", "bio" : "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo." }
,{ "_id" : ("5eb53258b455afbe20d45cda"), "id" : 837, "first_name" : "Brien", "last_name" : "Vescovo", "email" : "bvescovon8@china.com.cn", "country" : "Indonesia", "car_model" : "Lexus", "car_model_year" : 2009, "car_color" : "Fuscia", "gender" : "Male", "job_title" : "Executive Secretary", "bio" : "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." }
,{ "_id" : ("5eb53258b455afbe20d45cf8"), "id" : 866, "first_name" : "Britt", "last_name" : "McColgan", "email" : "bmccolgano1@jiathis.com", "country" : "North Korea", "car_model" : "Lexus", "car_model_year" : 2013, "car_color" : "Blue", "gender" : "Female", "job_title" : "Technical Writer", "bio" : "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla." }
,{ "_id" : ("5eb53258b455afbe20d45d22"), "id" : 908, "first_name" : "Maren", "last_name" : "Cholwell", "email" : "mcholwellp7@unesco.org", "country" : "China", "car_model" : "Lexus", "car_model_year" : 2008, "car_color" : "Goldenrod", "gender" : "Female", "job_title" : "Social Worker", "bio" : "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio." }
,{ "_id" : ("5eb53258b455afbe20d45d72"), "id" : 987, "first_name" : "Dalton", "last_name" : "Burness", "email" : "dburnessre@dot.gov", "country" : "Ukraine", "car_model" : "Lexus", "car_model_year" : 2000, "car_color" : "Crimson", "gender" : "Male", "job_title" : "Computer Systems Analyst IV", "bio" : "Sed ante." }
]

  return (
    <div className="App">
      <FiltersList filters={filters} />
      <CarsList cars={cars} />
    </div>
  );
}

export default App;
