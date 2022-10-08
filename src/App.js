import logo from "./logo.svg";
import "./App.css";
import LogoItem from "./components/LogoItem";

function App() {
  return (
    <div className="App">
      <h1>Foundational</h1>
      <LogoItem
        link="https://www.aam.com/"
        logo="https://cdn.phenompeople.com/CareerConnectResources/AAMAUS/en_us/mobile/assets/images/v-1625218070975-footer-logo.png"
      />
      <LogoItem
        link="https://www.gm.com/"
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_of_General_Motors.svg/1200px-Logo_of_General_Motors.svg.png"
      />
      <LogoItem
        link="https://www.energy.gov/"
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Seal_of_the_United_States_Department_of_Energy.svg/1200px-Seal_of_the_United_States_Department_of_Energy.svg.png"
      />
      <LogoItem
        link="https://www.mathworks.com/"
        logo="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1426005180/j7ytodfbs2synikmskfy.png"
      />
      <LogoItem
        link="https://www.dspace.com/en/inc/home.cfm"
        logo="https://www.dspace.com/img/logo.svg"
      />

      <LogoItem
        link="https://www.bosch.ca/"
        logo="https://assets.bosch.com/media/global/bosch_group/our_figures/brands/bosch-brand-bosch_res_1280x720.png"
      />
      <LogoItem
        link="https://www.tesa.com/en"
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/TESA-Logo.svg/1280px-TESA-Logo.svg.png"
      />
      <LogoItem
        link="https://www.bosch.ca/"
        logo="https://assets.bosch.com/media/global/bosch_group/our_figures/brands/bosch-brand-bosch_res_1280x720.png"
      />

      <h1>Benefactors</h1>
      <LogoItem
        link="https://www.multimatic.com/"
        logo="https://pbs.twimg.com/profile_images/1102540695276011520/biPAnTCU_400x400.png"
      />
      <LogoItem
        link="https://www.fev.com/"
        logo="https://getlogovector.com/wp-content/uploads/2020/06/fev-group-gmbh-logo-vector.png"
      />
      <LogoItem
        link="https://www.forbes.com/?sh=4f1237282254"
        logo="https://i.forbesimg.com/media/assets/forbes_1200x1200.jpg"
      />
      <LogoItem
        link="https://www.rosenberger.com/"
        logo="https://products.rosenberger.com/media/image/Rosenberger_Logo_red_RGB_1000px.png"
      />
      <LogoItem
        link="https://www.jaguar.ca/en/index.html"
        logo="https://upload.wikimedia.org/wikipedia/en/b/b4/Jaguar_2012_logo.png"
      />
      <LogoItem
        link="https://www.landrover.ca/en/index.html"
        logo="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/LandRover.svg/1200px-LandRover.svg.png"
      />
      <LogoItem
        link="https://www.facebook.com/mississaugacarcarecenter/"
        logo="https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/299980705_501722815287502_9086257506211023448_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kbeTIs0UEN4AX9vdCsG&_nc_ht=scontent.fyzd1-2.fna&oh=00_AT8u_YZ6fJuq5g-oWCZNrjzHZPJSmdpT-Cw12TE_PsZuUg&oe=6344D830"
      />
      <LogoItem
        link="https://hexagon.com/company/divisions/manufacturing-intelligence"
        logo="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1397184218/3f14a4853a8375f7845f5500dc8ecef2.gif"
      />
      <LogoItem
        link="https://www.deluxautomobiles.com/"
        logo="https://tdrpmimages.azureedge.net/photos/201705/1121/1851/1e73fcaf-cc95-430b-b1f2-c1b062a3e206.jpg"
      />
      <LogoItem
        link="https://www.iewc.com/"
        logo="data:image/png;base64,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"
      />
      <LogoItem
        link="https://guayaki.com/"
        logo="https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Guayak%C3%AD_corporate_logo.svg/1200px-Guayak%C3%AD_corporate_logo.svg.png"
      />
      <LogoItem
        link="https://www.javelin-tech.com/3d/"
        logo="https://www.javelin-tech.com/3d/wp-content/uploads/javelin-logo-1.png"
      />
      <h1>Evergreen</h1>
      <LogoItem
        link="https://uwaterloo.ca/engineering-endowment-foundation/"
        logo="https://uwaterloo.ca/engineering-endowment-foundation/sites/ca.engineering-endowment-foundation/files/uploads/images/weef_logo_yellow_0.png"
      />
      <LogoItem
        link="https://www.engsoc.uwaterloo.ca/"
        logo="https://www.engsoc.uwaterloo.ca/wp-content/uploads/2018/01/cropped-EngSoc_Square_Logo-300x300.png"
      />
      <LogoItem
        link="https://www.fastenal.com/"
        logo="https://crafter.fastenal.com/static-assets/images/fcom/fastenal-logo-blue-white.png"
      />
      <LogoItem
        link="https://www.snapon.com/"
        logo="https://cdn.worldvectorlogo.com/logos/snap-on.svg"
      />
      <LogoItem
        link="https://www.geotab.com/"
        logo="https://www.geotab.com//images/geotabShareImage.jpg"
      />
    </div>
  );
}

export default App;