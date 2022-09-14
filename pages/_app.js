import '../styles/globals.scss'
import Head from 'next/head'
import { NameList, LastNames, professionList, Countries } from '../resources/resources'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp() {

  const [dp, setDp] = useState()
  const [thumb, setThumb] = useState()

  const [fname, setfName] = useState(NameList[Math.round(Math.random() * NameList.length)]);
  const [fullName, setfullName] = useState('')
  const [parentage, setParentage] = useState()
  const [dob, setDob] = useState()
  const [gender, setGender] = useState()
  const [ssn, setSsn] = useState()
  const [color, setColor] = useState()
  const [spouse, setSpouse] = useState()
  const [xp, setXp] = useState()
  const [profession, setProfession] = useState()

  const [citizenOf, setCitizenOf] = useState()
  const [state1, setState1] = useState()
  const [state2, setState2] = useState()

  const [stateUpdater, setStateUpdater] = useState()

  const lname = NameList[Math.round(Math.random() * NameList.length)];
  const surName = LastNames[Math.round(Math.random() * LastNames.length)];

  const router = useRouter()

  const parentName = NameList[Math.round(Math.random() * NameList.length)];

  const SpouseName = NameList[Math.round(Math.random() * NameList.length)];

  const genderList = ['Male', 'Female', 'Transgender', 'Neutral'];

  const colorList = ['LIGHT', 'FARE', 'TAN', 'DARK']

  const ssn_v1 = Math.round(Math.random(10, 90) * 1000);
  const ssn_v2 = Math.round(Math.random(10, 90) * 1000);
  const ssn_v3 = Math.round(Math.random(10, 90) * 1000);
  const ssn_v4 = Math.round(Math.random(10, 90) * 1000);

  const day = Math.round(Math.random(30) * 10);
  const month = Math.round(Math.random(12) * 10);
  const year = Math.round(Math.random() * (2000 - 1970 + 1) + 1970);

  const randomCunt = Math.round(Math.random() * Countries.length)

  const SavePdf = () => {
    window.print()
  }

  useEffect(() => {
    setThumb("https://thispersondoesnotexist.com/favicon.png")
    setDp("https://thispersondoesnotexist.com/image")
    setfName(fname);
    if ((fname + ' ' + lname + ' ' + surName).length > 18) {
      setfullName(fname + ' ' + lname)
    }
    else {
      setfullName(fname + ' ' + lname + ' ' + surName);
    }
    setParentage(lname + ' ' + parentName + ' ' + surName)
    setDob(day + '/' + month + '/' + year)
    setGender(genderList[Math.round(Math.random() * genderList.length)])
    setSsn(ssn_v1 + '-' + ssn_v2 + '-' + ssn_v3 + '-' + ssn_v4)
    setColor(colorList[Math.round(Math.random() * colorList.length)])
    setSpouse(SpouseName + ' ' + fname + ' ' + surName)
    setProfession(professionList[Math.round(Math.random() * professionList.length)])
    setXp(Math.round(Math.random(1, 9) * 10))

    setCitizenOf(Countries[randomCunt].country)
    setState1(Countries[randomCunt].cities[1])
    setState2(Countries[randomCunt].cities[2])

  }, [stateUpdater])


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ONLY IDENTITY</title>
        <link rel="icon" type='image/png' href={thumb} />
        <meta name="description" content="Fake Profiles Generator" />
      </Head>
      <div className="master-container">
        <div className="logo">
          <h1>ONLY <span>IDENTITY</span></h1>
        </div>
        <div className="card">
          <div suppressHydrationWarning style={{ backgroundImage: `url(${`https://countryflagsapi.com/png/${citizenOf}`})`, backgroundSize: '' }} className="card-front">
            <div className="backdrop">
              <div className="citizen-of">
                <img src={`https://countryflagsapi.com/png/${citizenOf}`} alt="" />
                <h1>CITIZEN OF {citizenOf}</h1>
              </div>
              <div className="section-1">
                <div className="picture">
                  <img src={dp} />
                </div>
                <div className="fields">
                  <div className="fullname">
                    <h6>FULL NAME</h6>
                    <h3 >{fullName}</h3>
                  </div>
                  <div className="dob">
                    <h6>D.O.B</h6>
                    <h3>{dob}</h3>
                  </div>
                  <div className="gender">
                    <h6>GENDER</h6>
                    <h3 >{gender}</h3>
                  </div>
                </div>
              </div>
              <div className="section-2">
                <div className="signature">
                  <h2 suppressHydrationWarning >{fname}.</h2>
                </div>
                <div className="fields-2">

                  <div className="residence">
                    <h6>PRIMARY RESIDENCE</h6>
                    <h3>{state1}, {citizenOf}</h3>
                  </div>
                  <div className="contact">
                    <h6>PRIMARY CONTACT NUMBER</h6>
                    <h3>00-99254856</h3>
                  </div>
                  <div className="ssn">
                    <h6>SSN</h6>
                    <h3>{ssn}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div suppressHydrationWarning style={{ backgroundImage: `url(${`https://countryflagsapi.com/png/${citizenOf}`})`, backgroundSize: '' }} className="card-back">
            <div className="backdrop">
              <div className="citizen-of">
                <img src={`https://countryflagsapi.com/png/${citizenOf}`} alt="" />
                <h1>CITIZEN OF {citizenOf}</h1>
              </div>
              <div className="section-1">
                <div className="fields-2">
                  <div className="so-do">
                    <h6>SON /DAUGHTER OF</h6>
                    <h3 suppressHydrationWarning>{parentage}</h3>
                  </div>
                  <div className="color">
                    <h6>COLOR</h6>
                    <h3 suppressHydrationWarning >{color}</h3>
                  </div>
                  <div className="ralationship-status">
                    <h6>RELATIONSHIP STATUS</h6>
                    <h3 suppressHydrationWarning>MARRIED TO {spouse}</h3>
                  </div>
                  <div className="profession">
                    <h6>PROFESSION</h6>
                    <h3>{profession}</h3>
                  </div>
                  <div className="experience">
                    <h6>EXPERIENCE</h6>
                    <h3>{xp} YEARS</h3>
                  </div>
                  <div className="education">
                    <h6>EDUCATION INSTITUTE ATTENDED</h6>
                    <h3>UNIVERSITY OF {state2}</h3>
                  </div>
                  {/* <div className="ssn">
                    <h6>SSN</h6>
                    <h3>{ssn}</h3>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => { SavePdf() }} className='save-pdf'>DOWNLOAD PDF</button>
        <button onClick={() => { router.reload(window.location.pathname) }} className='next-profile'>NEXT PROFILE >></button>
      </div>
      <div className="footer">
        <p>THIS WEB APP IS DEVELOPED AND OWNED BY <a href='https://www.linkedin.com/in/haseebqureshiishere/'>HASEEB QURESHI</a></p>
      </div>
    </>
  )
}

export default MyApp
