import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
          title="FullStack JavaScript Certified"
          description="En 6 mois seulement, deveniens dès maintenant un développeur Fullstack JavaScript expert en développement web moderne, mobile et jeux vidéos en 2022 et pas l'année prochaine!"
          backgroundImg="js.jpg"
          leftBtnText="Commande personnalisée"
          rightBtnText="Commandez Immédiatement"
        />
        <Section           
          title="FullStack Python Certified"
          description=""
          backgroundImg="py.jpg"
          leftBtnText="Commande personnalisée"
          rightBtnText="Commandez Immédiatement"  
        />
        <Section           
          title="Fullstack C# Developer"
          description=""
          backgroundImg="cs.jpg"
          leftBtnText="Commande personnalisée"
          rightBtnText="Commandez Immédiatement"  
        />
        <Section          
          title="3D Game Developer Certified"
          description="Un jeux célèbre de strategie originaire d'Afrique développé en réalité augmenté pour vous entretenir alors que vous degustez Instinct"
          backgroundImg="3dgamedev.jpg"
          leftBtnText="Commande personnalisée"
          rightBtnText="Commandez Immédiatement"
        />
        <Section          
          title="Junior Ingeneer Hollidays Class"
          description="Ces classes offrent des programmes funs, engageants et éducatifs en technologie pour fournir aux enfants les compétences fondamentales du 21e siècle"
          backgroundImg="juniorengineer.jpg"
          leftBtnText="Commande personnalisée"
          rightBtnText="Commandez Immédiatement"
        />
          {/* <Section        
            title="Graphic Designer Certified"
            description="Plus de 12 machines que vous avez déja chez vous toutes compatibles à nous capsules"
            backgroundImg="home.jpg"
            leftBtnText="Commande personnalisée"/>
            <Section        
              title="Fourniture de logiciels"
              description="Plus de 12 machines que vous avez déja chez vous toutes compatibles à nous capsules"
              backgroundImg="home.jpg"
              leftBtnText="Commande personnalisée"/> */}
            <SoftwareList> 
              <ItemTextHome>
                  <h1>Fourniture & installation de Logiciels</h1>
                  <p>Nous fournissons et installons tous les logiciels pour Windows, MacOS et applications Mobile Android et IOS </p>
              </ItemTextHome> 
              <h3>3D</h3>           
                <p>
                  <a href=""><img src="images/3ds-max.png" alt=""/> <span>3ds Max 2022</span></a>
                  <a href=""><img src="images/catia.png" alt=""/> Catia 2022</a>
                  <a href=""><img src="images/c4d.png" alt=""/> Cinema 4D 2022</a>
                  <a href=""><img src="images/daz.png" alt=""/> DAZ 2022</a>
                  <a href=""><img src="images/houdini.png" alt=""/> Houdini 2022</a>
                  <a href=""><img src="images/inventor.png" alt=""/> Inventor 2022</a>
                  <a href=""><img src="images/keyshot.png" alt=""/> KeyShot 2022</a>
                  <a href=""><img src="images/maya.png" alt=""/> Maya 2022</a>
                </p>
                
                <br/> 

                <p>
                  <a href=""><img src="images/mobu.png" alt=""/> MotionBuilder 2017</a>
                  <a href=""><img src="images/modo.png" alt=""/> Modo 2022</a>
                  <a href=""><img src="images/marvelous.png" alt=""/> Marcelous Design 2022</a>
                  {/* <a href=""><img src="images/clo.png" alt=""/> <span>CLO</span></a> */}
                  <a href=""><img src="images/iclone.png" alt=""/> <span>Iclone 2022</span></a>
                  <a href=""><img src="images/cc.png" alt=""/> Character Creator 2022</a>
                  <a href=""><img src="images/poser.png" alt=""/> Poser 2022</a>
                  <a href=""><img src="images/realflow.png" alt=""/> RealFlow 2022</a>
                </p>
                
                <br/> 

                <p>
                  <a href=""><img src="images/rhino3d.png" alt=""/> Rhino 3D 2022</a>
                  <a href=""><img src="images/sculptris.png" alt=""/> Sculptris 2022</a>
                  <a href=""><img src="images/solidworks.png" alt=""/> SolidWorks 2022</a>
                  <a href=""><img src="images/3dscan.png" alt=""/> 3DScan 2022</a>  
                  <a href=""><img src="images/vue.png" alt=""/> Vue 2022</a>
                  <a href=""><img src="images/zbrush.png" alt=""/> ZBrush 2022</a>
                </p>   

                <h3>Architecture & BIM</h3>           
                <p>
                  <a href=""><img src="images/allplan.png" alt=""/> <span> Allplan 2022</span></a>
                  <a href=""><img src="images/archicad.png" alt=""/> ArchiCAD 2022</a>
                  <a href=""><img src="images/autocad.png" alt=""/> AutoCAD 2022</a>
                  <a href=""><img src="images/autocad.png" alt=""/> AutoCAD électrotech 2022</a>
                  <a href=""><img src="images/artlantis.png" alt=""/> Artlantis 2022</a>
                  {/* <a href=""><img src="images/covadis.png" alt=""/> Covadis</a> */}
                  {/* <a href=""><img src="images/bimoffice.png" alt=""/> BIM Office</a> */}
                  <a href=""><img src="images/revit.png" alt=""/> Revit 2022</a>
                </p>
                
                <br/> 

                <p>
                  <a href=""><img src="images/revit.png" alt=""/> RevitMEP 2022</a>
                  <a href=""><img src="images/sketchup.png" alt=""/> SketchUp 2022</a>
                  <a href=""><img src="images/solibri.png" alt=""/> Solibri 2022</a>
                </p>   

                <h3>Infographie</h3>           
                <p>
                  {/* <a href=""><img src="images/captivate.png" alt=""/> <span>Captivate</span></a> */}
                  <a href=""><img src="images/coreldraw.png" alt=""/> Corel Draw 2022</a>
                  <a href=""><img src="images/corelpainter.png" alt=""/> Corel Painter 2022</a>
                  <a href=""><img src="images/illustrator.png" alt=""/>Adobe Illustrator CC 2022</a>
                  <a href=""><img src="images/indesign.png" alt=""/> InDesign CC 2022</a>
                  <a href=""><img src="images/inkscape.png" alt=""/> Inkscape </a>
                  <a href=""><img src="images/photoshop.png" alt=""/>Adobe Photoshop CC 2022</a>
                </p>
                
                <br/> 

                <p>
                  <a href=""><img src="images/procreate.png" alt=""/> Procreate</a>
                  <a href=""><img src="images/quarkxpress.png" alt=""/> QuarkXpress</a>
                  <a href=""><img src="images/sketch.png" alt=""/> Sketch</a>
                  <a href=""><img src="images/xd.png" alt=""/>Adobe XD CC 2022</a>
                </p>

                <h3>Programmation Réseau Electronique & Cyber Sécurity</h3>           
                <p>
                  <a href=""><img src="images/msvs.png" alt=""/> <span>Visual Studio 2019</span></a>
                  {/* <a href=""><img src="images/qt.png" alt=""/> Qt</a> */}
                  <a href=""><img src="images/arduino.png" alt=""/> Arduino</a>
                  <a href=""><img src="images/windev.png" alt=""/> Windev</a>
                  {/* <a href=""><img src="images/rasberri.png" alt=""/> Rasberri py</a> */}
                  {/* <a href=""><img src="images/sqlqerver.png" alt=""/> Sql Server</a> */}
                  {/* <a href=""><img src="images/oracle.png" alt=""/> Oracle</a> */}
                  <a href=""><img src="images/scratch.png" alt=""/> Scratch</a> 
                  <a href=""><img src="images/parallelemac.png" alt=""/> ParalleleMac</a>                   
                  <a href=""><img src="images/vmware.png" alt=""/> VMWare</a>
                  <a href=""><img src="images/driverpack.png" alt=""/> DriverPack</a>
                </p>

                <h3>Bureautique et Système d'exploitation</h3>           
                <p>
                  <a href=""><img src="images/access.png" alt=""/> <span>Office Access 2019</span></a>
                  <a href=""><img src="images/excel.png" alt=""/>Office Excel 2019</a>
                  <a href=""><img src="images/publisher.png" alt=""/>Office Publisher 2019</a>
                  <a href=""><img src="images/powerpoint.png" alt=""/>Office Powerpoint 2019</a>
                  {/* <a href=""><img src="images/outlook.png" alt=""/> Outlook</a> */}
                  <a href=""><img src="images/word.png" alt=""/>Office Word 2019</a>
                  <a href=""><img src="images/project.png" alt=""/>Office Project 2019</a>
                  <a href=""><img src="images/visio.png" alt=""/>Office Visio 2019</a>
                  </p>
                  
                  <br/>

                  <p>
                  <a href=""><img src="images/lotusnote.png" alt=""/> Lotus Notes</a>
                  <a href=""><img src="images/openoffice.png" alt=""/> Open Office</a>
                  <a href=""><img src="images/filemaker.png" alt=""/> FileMaker Pro</a>
                  <a href=""><img src="images/win7.png" alt=""/> Windows 7 86x 64x</a>
                  <a href=""><img src="images/win10.png" alt=""/> Windows 10 64x</a>
                  <a href=""><img src="images/win11.png" alt=""/> Windows 11 64x</a>
                  <a href=""><img src="images/win10.png" alt=""/> Windows Entreprise 64x </a>
                  <a href=""><img src="images/win10.png" alt=""/> Windows Server 64x</a>
                  </p>

                  <h3>Business Comptabilité & Droit </h3>           
                <p>
                  <a href=""><img src="images/bib.png" alt=""/> <span>Business in a box</span></a>
                  <a href=""><img src="images/sage.png" alt=""/> Sage 100 Comptabilité</a>
                  <a href=""><img src="images/sage.png" alt=""/> Sage 100 Gestion Commerciale</a>
                  <a href=""><img src="images/sage.png" alt=""/> Sage 100 Paie</a>
                  <a href=""><img src="images/keynote.png" alt=""/> Keynote</a>
                  <a href=""><img src="images/libreoffice.png" alt=""/> LibreOffice</a>
                  {/* <a href=""><img src="images/linuxrh.png" alt=""/> Linux Red Hat</a> */}
                  {/* <a href=""><img src="images/linuxu.png" alt=""/> Linux Ubuntu</a> */}
                  {/* <a href=""><img src="images/linuxk.png" alt=""/> Linux Kali</a> */}
                </p>

                <h3>Production Musicale MAO Djing</h3>           
                <p>
                  <a href=""><img src="images/live.png" alt=""/> <span>Ableton Live 10</span></a>
                  <a href=""><img src="images/audition.png" alt=""/>Adobe Audition CC 2022</a>
                  <a href=""><img src="images/cubase.png" alt=""/> Cubase</a>
                  <a href=""><img src="images/flstudio.png" alt=""/> FL Studio</a>
                  {/* <a href=""><img src="images/komplete.png" alt=""/> Komplete</a> */}
                  <a href=""><img src="images/kontakt.png" alt=""/> Kontakt</a>
                  {/* <a href=""><img src="images/logicpro.png" alt=""/> Logic Pro</a> */}
                  <a href=""><img src="images/mainstage.png" alt=""/> Mainstage</a>
                  {/* <a href=""><img src="images/maschine.png" alt=""/> Maschine</a> */}
                  </p>
                  
                  <br/>

                  <p>
                  {/* <a href=""><img src="images/protools.png" alt=""/> Pro Tools</a> */}
                  <a href=""><img src="images/reason.png" alt=""/> Reason</a>
                  {/* <a href=""><img src="images/protools.png" alt=""/> Pro Tools</a> */}
                  <a href=""><img src="images/rekordbox.png" alt=""/> Rekordbox</a>
                  <a href=""><img src="images/seratodj.png" alt=""/> Serato DJ</a>
                  {/* <a href=""><img src="images/virtualdj.png" alt=""/> Virtual DJ</a> */}
                  <a href=""><img src="images/studioone.png" alt=""/> Studio One</a>
                  </p>

                  {/* <h3>Photographie</h3>           
                <p>
                  <a href=""><img src="images/aperture.png" alt=""/> <span>Aperture</span></a>
                  <a href=""><img src="images/cameraraw.png" alt=""/> Camera Raw</a>
                  <a href=""><img src="images/captureone.png" alt=""/> Capture One</a>
                  <a href=""><img src="images/dxo.png" alt=""/> DXO</a>
                  <a href=""><img src="images/niksoftware.png" alt=""/> Nik Software</a>
                  </p> */}

                  <h3>Production Video</h3>           
                <p>
                  <a href=""><img src="images/aftereffect.png" alt=""/> <span>Adobe After Effects cc 2022</span></a>
                  {/* <a href=""><img src="images/amc.png" alt=""/> Avid Media Composer</a> */}
                  <a href=""><img src="images/avidstudio.png" alt=""/> Avid Studio</a>
                  <a href=""><img src="images/corelvideostudiopro.png" alt=""/> Corel VideoStudio Pro</a>
                  <a href=""><img src="images/davinciresolve.png" alt=""/> DaVinci Resolve</a>
                  <a href=""><img src="images/edius.png" alt=""/> Edius</a>
                  <a href=""><img src="images/motion5.png" alt=""/> Motion 5</a>
                  <a href=""><img src="images/nuke.png" alt=""/> Nuke</a>
                  </p>
                  
                  <br/>

                  <p>
                  {/* <a href=""><img src="images/premiereelements.png" alt=""/> Première Elements</a> */}
                  <a href=""><img src="images/prmierepro.png" alt=""/>Adobe Première Pro CC 2022</a>
                  <a href=""><img src="images/speedgrade.png" alt=""/> SpeedGrade</a>
                  <a href=""><img src="images/vegaspro.png" alt=""/> Vegas Pro</a>
                  {/* <a href=""><img src="images/imovie.png" alt=""/> iMovie</a> */}
                  </p>
                  <br/>
                  <br/>  
                
            {/* <MyTable>
                
                <table>
                <thead>
                    <th>kong</th>
                    <th>Roger</th>
                </thead>
                <tbody>
                    <tr><img src="images/Mini-logo2.png" alt=""/> Kong</tr>
                    <td><img src="images/Mini-logo2.png" alt=""/> Arsene</td>
                        <td><img src="images/Mini-logo2.png" alt=""/> Arsene</td>
                </tbody>
              </table>
            </MyTable> */}
            
            </SoftwareList>
            <Footer>
              <br/>
                <li><a href="">Instinct &copy; Copyrignt 2014 - 2022</a></li>
                <li><a href="">Privacy & Legal</a></li>
                <li><a href="">Contact</a></li>
            </Footer>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10; 
`

const Footer = styled.div`
    background: #353535;
    list-style: none;
    padding: 20px;

    li{
      padding: 5px;
    }
  
`
const ItemTextHome = styled.div`
    padding: 10vh;
    text-align: center;
    z-index: -1; 

   

    p {
        margin: 8px;
    }
    `


const SoftwareList = styled.div`
    background: #353535;
    diplay:flex;

    img{
      // padding: 0 10px;
      // margin: 10px 0 ;
    }

    h3{
      margin-top: 8vh;
      padding: 10px
    }

    a{
      // padding: 0 5px;
      margin: 10px;   
      margin-top: 50px;
      align-item: left;   
    }

  
`
const MyTable = styled.div`    
    justify-content: center;
    align-items: center;
    margin: 0 100px;

    td{
      padding: 0 20px;
    }
`

