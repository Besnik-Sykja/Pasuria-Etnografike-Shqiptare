
function showHyrja() {
  content.innerHTML = `
    <div class="div-hyrja1" style=" display: flex; justify-content: center; padding: 30px;">
      <div class="slider-container">
        <div class="image-box">
          <div class="slider-images" id="slider-track">
            <img id="img-current" src="images/image8.jpg" alt="Slide 1">
            <img id="img-next" src="images/image2.jpg" alt="Slide 2">
          </div>
          <div class="nav-buttons">
            <button class="nav-btn" onclick="prevSlide()">&#10094;</button>
            <button class="nav-btn" onclick="nextSlide()">&#10095;</button>
          </div>
        </div>
        <div class="caption" id="caption">Foto</div>
      </div>
    </div>
    <div class="extra-below-slider" style="margin-top: 20px;">
    <p style="margin-top:50px; font-weight:bold; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">🌄 Krahina Veriore</p>
    <p style="text-align: left; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">Krahina Veriore përfshin qytete si Shkodra, Kukësi, Tropoja, dhe Puka. Kjo zonë është e njohur për malet madhështore si Alpet Shqiptare, traditat e lashta të Kanunit, dhe vallet e fuqishme veriore. Kultura në veri është e lidhur ngushtë me burrërinë, nderin dhe mikpritjen. Peizazhet e egra dhe të bukura si Thethi dhe Valbona janë ndër atraksionet më të mëdha turistike.</p>
    
    <p style="margin-top:100px; font-weight:bold; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">🌿 Krahina e Mesme</p>
    <p style="text-align: left; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">Në këtë krahinë ndodhet kryeqyteti, Tirana, dhe qytete të tjera si Durrësi, Elbasani dhe Kruja. Është një zonë që kombinon modernitetin me traditën. Tirana është zemra e zhvillimit urban dhe kulturor, ndërsa qytete historike si Kruja janë të lidhura ngushtë me figurat e rëndësishme si Gjergj Kastrioti Skënderbeu. Krahina e Mesme shquhet për përzierjen e kulturave dhe për historinë e pasur.</p>
    </div>
        

    <div class="div-hyrja2">
       <p class="paragraph-tema">Mirë se vini në botën e pasurisë etnografike shqiptare</p>
      <p class="paragraph-vazhdim">
        Shqipëria është një vend me një trashëgimi kulturore të pasur dhe të larmishme, ku traditat janë ruajtur me kujdes brez pas brezi. 
        Etnografia shqiptare përfshin zakonet, veshjet tradicionale, punimet artizanale, këngët, vallet dhe mënyrën e jetesës që pasqyrojnë shpirtin dhe historinë e popullit tonë.
        Nga kostumet shumëngjyrëshe të jugut, te qeleshet dhe lahutat e veriut, çdo krahinë ka veçoritë e saj që e bëjnë unike.
        Kjo faqe synon të sjellë më afër vizitorit thesaret kulturore që kanë formuar identitetin shqiptar ndër shekuj.
        Zbuloni më shumë rreth jetës tradicionale shqiptare, dhe njihuni me pasurinë shpirtërore që vazhdon të frymëzojë edhe në ditët e sotme.
      </p>
     <img style="width:100%; height:300px;" src="images/tipime.png">
    </div>

    <div class="div-hyrja3">
    <video width="115%" height="auto" controls loop muted autoplay>
     <source src="images/video1.mp4" type="video/mp4">
    </video>
    <div class="class-p">🌅 Krahina Jugore</div>
    <div class="class-p1">Krahina Jugore përfshin qytete si Gjirokastra, Berati, Vlora, Saranda dhe Korça. Është e njohur për trashëgiminë kulturore dhe arkitekturën karakteristike. Gjirokastra dhe Berati janë qytete-muze të mbrojtura nga UNESCO. Bregdeti jugor është i famshëm për bukuritë natyrore, detin kristal dhe kulinarinë tradicionale. Muzika labe dhe polifonia janë pasuri të rralla shpirtërore të kësaj krahine.</div>
    </div>
  `;
  initSlideshow();
}

function showVeriu() {
  localStorage.setItem('activeSection', 'veriut');
  content.innerHTML = 
  `
  <div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
      <h1 style="color: #2c3e50;">Shtrirja Gjeografike e Shqipërisë së Veriut</h1>
      <p style="line-height: 1.6;">Shqipëria e Veriut shquhet për një peizazh të pasur natyror dhe një pozicion strategjik që e bën një nga rajonet më të rëndësishme nga ana gjeografike dhe historike. Ky rajon paraqet një kombinim unik të relievit të larmishëm dhe kushteve klimatike të veçanta, të cilat kanë ndikuar ndjeshëm në zhvillimin kulturor dhe etnografik të trevave veriore shqiptare.</p>
  
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">1. Pozita Gjeografike</h2>
        <p style="line-height: 1.6;">Shqipëria e Veriut shtrihet në pjesën veriore të territorit shqiptar dhe kufizohet me Malin e Zi dhe Kosovën në veri, ndërsa në lindje kufizohet me Maqedoninë e Veriut. Nga ana jugore, ajo përfshin kufirin e saj natyror me Shqipërinë e Mesme. Pozita e saj gjeografike është strategjike, pasi ky rajon ndodhet në një kryqëzim të rëndësishëm që lidh Ballkanin Perëndimor me pjesën tjetër të Evropës. Përgjatë historisë, ky vendndodhje e ka bërë Shqipërinë e Veriut një urë lidhëse mes kulturave të ndryshme dhe një zonë me rëndësi strategjike për tregtinë dhe komunikimin ndërkombëtar.</p>
      </section>
  
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">2. Relievi</h2>
        <p style="line-height: 1.6;">Shqipëria e Veriut paraqet një shumëllojshmëri të madhe të formave të relievit, të cilat ndahen kryesisht në dy kategori kryesore:</p>
        <ul style="margin-left: 20px;">
          <li><strong>Relievi i ulët:</strong> Përfaqësohet nga fusha dhe ultësira që ndodhen kryesisht përgjatë brigjeve të lumit Drin dhe zonave afër bregdetit Adriatik. Këto hapësira janë të favorshme për bujqësinë dhe për vendbanimet e mëdha.</li>
          <li><strong>Relievi i lartë:</strong> Pjesa më e madhe e Shqipërisë së Veriut përbëhet nga male dhe zona kodrinore të ashpra, me vargmale të njohura si Alpet Shqiptare. Majat e larta si Jezerca dhe majat e Thethit krijojnë një peizazh mbresëlënës dhe e bëjnë këtë zonë një destinacion të rëndësishëm për turizmin malor.</li>
        </ul>
      </section>
  
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">3. Klima</h2>
        <p style="line-height: 1.6;">Klima e Shqipërisë së Veriut është kryesisht mesdhetare me ndikime kontinentale. Dimrat janë të ftohtë dhe me reshje të dendura dëbore, sidomos në zonat malore, ndërsa verërat janë të nxehta dhe të thata në ultësira. Përveç klimës së përgjithshme, ky rajon përmban edhe mikroklima të ndryshme, të cilat ndikohen nga lartësia mbi nivelin e detit, afërsia me ujërat dhe orientimi i terrenit. Për shembull, zonat e thella malore si Thethi dhe Valbona karakterizohen nga një klimë alpine me dimra të ashpër dhe verëra të freskëta, ndërsa ultësirat pranë bregdetit kanë një klimë më të butë.</p>
      </section>
  
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
      <h1 style="color: #2c3e50;">Pasuria Kulturore e Shqipërisë së Veriut</h1>
      <p style="line-height: 1.6;">Shqipëria e Veriut është një nga trevat më të pasura nga ana etnografike, ku ndërthuren traditat e lashta me elementët unikë të kulturës shqiptare. Kjo pasuri shfaqet në mënyra të ndryshme, duke u ndarë kryesisht në dy kategori kryesore: pasuria kulturore materiale dhe pasuria kulturore shpirtërore.</p>
  
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">1. Pasuria Kulturore Materiale</h2>
        <p style="line-height: 1.6;">Materiale Pasuria kulturore materiale e Shqipërisë së Veriut pasqyrohet në arkitekturën e saj të veçantë dhe në objektet tradicionale që kanë ruajtur vlerën dhe identitetin e tyre ndër shekuj.</p>
        <ul style="margin-left: 20px;">
          <li><strong>Ndërtesat dhe Monumentet:</strong> Ky rajon është i njohur për kullat karakteristike, struktura të fortifikuara që kanë shërbyer si banesa dhe qendra mbrojtjeje për familjet e mëdha. Disa prej kullave më të njohura ndodhen në Theth, Vermosh dhe Dukagjin. Gjithashtu, kalatë e vjetra si Kalaja e Rozafës në Shkodër përfaqësojnë një trashëgimi të rëndësishme historike dhe kulturore.</li>
          <li><strong>Objektet dhe Veshjet Tradicionale:</strong> Shqipëria e Veriut është e pasur me artizanat dhe objekte të punuara me dorë, si qilimat, kostumet tradicionale dhe armët e dekoruara. Veshjet tradicionale të veriut, si xhubleta e grave dhe tirqet e burrave, janë ndër më të njohurat dhe mbartin simbolikën e identitetit të kësaj zone.</li>
        </ul>
      </section>
  
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">2. Pasuria Kulturore Shpirtërore</h2>
        <p style="line-height: 1.6;">Përveç trashëgimisë materiale, Shqipëria e Veriut mbart një pasuri të jashtëzakonshme shpirtërore, e cila manifestohet përmes zakoneve, artit dhe besimit. Kjo pasuri shfaqet në mënyra të ndryshme, duke u ndarë kryesisht në dy kategori kryesore: pasuria kulturore materiale dhe pasuria kulturore shpirtërore.</p>
        <ul style="margin-left: 20px;">
          <li><strong>Traditat dhe Zakonet:</strong> Mikpritja është një vlerë thelbësore e kulturës veriore, ku besa dhe nderi luajnë një rol kyç në marrëdhëniet shoqërore. Po ashtu, Kanuni i Lekë Dukagjinit, një kod zakonor i trashëguar brez pas brezi, ka ndikuar thellësisht në mënyrën e jetesës së komuniteteve veriore.</li>
          <li><strong>Arti dhe Besimi:</strong> Këngët epike dhe rapsodët janë një pjesë e rëndësishme e kulturës shpirtërore të veriut, duke ruajtur historinë dhe identitetin përmes vargjeve dhe lahutës. Nga ana tjetër, besimi ka qenë një shtyllë e rëndësishme për këtë rajon, ku ndikimi i krishterimit dhe islamit ka formësuar jetën shpirtërore të banorëve.</li>
        </ul>
      </section>
  
  
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
      <h1 style="color: #2c3e50;">Historia e Shqipërisë së Veriut</h1>
      <p style="line-height: 1.6;">
          Historia e Shqipërisë së Veriut është një pasqyrë e pasur dhe e larmishme e ngjarjeve, figurave dhe traditave që kanë formësuar identitetin kombëtar shqiptar. Kjo histori është e mbushur me ngjarje të rëndësishme, luftëra, heroizëm dhe një trashëgimi kulturore që vazhdon të jetë e gjallë edhe sot.
      </p>
    
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">1. Ngjarjet më të rëndësishme historike</h2>
        <ul style="margin-left: 20px;">
          <li><strong>Luftërat kundër Perandorisë Osmane:</strong> Gjatë shekujve XV-XIX, Shqipëria e Veriut ishte një vatër e qëndresës kundër pushtimit osman. Kryengritjet e shumta dhe rezistenca e popullsisë së veriut luajtën një rol të rëndësishëm në mbajtjen gjallë të identitetit kombëtar.</li>
          <li><strong>Pashallëku i Shkodrës (1757-1831):</strong> Në fundin e shekullit XVIII dhe fillimin e shekullit XIX, Shqipëria e Veriut ishte qendra e një pashallëku të fuqishëm, i cili në disa raste sfidoi edhe vetë autoritetin e Portës së Lartë.</li>
          <li><strong>Lidhja Shqiptare e Prizrenit (1878):</strong> Një nga momentet kyçe të historisë së kombit, ku patriotët shqiptarë nga veriu luajtën rol kryesor në përballjen me vendimet e Fuqive të Mëdha që cenonin territoret shqiptare.</li>
          <li><strong>Lufta e Parë dhe e Dytë Botërore:</strong> Shqipëria e Veriut pati një angazhim të madh në rezistencën ndaj pushtuesve të huaj, duke prodhuar figura patriotike dhe lëvizje që ndikuan në fatin e kombit.</li>
        </ul>
      </section>
    
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">2. Figura të shquara dhe ndikimi i tyre</h2>
        <ul style="margin-left: 20px;">
          <li><strong>Ramadan Zaskoci:</strong> Një nga figurat e spikatura të rezistencës shqiptare, strateg i shquar dhe simbol i qëndresës në Veri.</li>
          <li><strong>Mehmed Pashë Bushatlliu:</strong> Udhëheqës i Pashallëkut të Shkodrës, krijoi një qeverisje të pavarur nga Porta e Lartë dhe fuqizoi Shkodrën si qendër politike.</li>
          <li><strong>Ded Gjo Luli:</strong> Udhëheqës i kryengritjes së Malësive, simbol i guximit dhe qëndresës kundër Perandorisë Osmane.</li>
          <li><strong>Isa Boletini:</strong> Patriot i flaktë, pjesëmarrës në Lidhjen e Prizrenit dhe në shpalljen e Pavarësisë së Shqipërisë, luftëtar për mbrojtjen e trojeve shqiptare.</li>
        </ul>
      </section>
    
  
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
      <h1 style="color: #2c3e50;">Pasuria Etnografike </h1>
      <p style="line-height: 1.6;">Shqipëria e Veriut shquhet për pasurinë e saj etnografike, e cila ka ruajtur autenticitetin dhe traditat brez pas brezi. Kultura e kësaj zone është e pasur dhe e larmishme, duke u reflektuar në muzikë, vallëzim, art, artizanat, folklor dhe gjuhë. Këto elemente janë pjesë e identitetit kombëtar dhe dëshmojnë lashtësinë e kulturës shqiptare.</p>
    
     <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">1. Muzika</h2>
        <p style="line-height: 1.6;">Muzika e Veriut të Shqipërisë është një nga elementet më autentike të trashëgimisë sonë kulturore. Ajo karakterizohet nga polifonia dhe epika, ku lahuta është instrumenti kryesor që shoqëron kangët epike, të cilat përshkruajnë heroizmin dhe qëndresën. Gjithashtu, çiftelia dhe sharkia janë instrumente të tjera tradicionale që i japin muzikës një tingull të veçantë.</p>
      </section>
    
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">2. Vallëzimi</h2>
        <p style="line-height: 1.6;">Vallët popullore të Shqipërisë së Veriut janë plot dinamizëm dhe energji. Një nga vallët më të njohura është "Vallja e Logut", e cila kërcehet në dasma dhe festa tradicionale, shoqëruar nga tingujt ritmikë të instrumenteve popullore. Valltarët shpeshherë vishen me veshje tradicionale si xhamadanë, çakçirë dhe plisa të bardhë.</p>
      </section>
    
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">3. Arti</h2>
        <p style="line-height: 1.6;">Arti në Shqipërinë e Veriut ka një shprehje të pasur në pikturë, gdhendje dhe arkitekturë tradicionale. Kullat e Veriut janë një nga manifestimet më autentike të artit arkitektonik, duke simbolizuar njëkohësisht mbrojtjen dhe traditën. Po ashtu, muralet e kishave dhe xhamive të zonës janë dëshmi e një arti të pasur dhe shpirtëror.</p>
      </section>
    
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">4. Artizanati</h2>
        <p style="line-height: 1.6;">Artizanati është një pasuri e madhe e Shqipërisë së Veriut, duke përmbledhur punime në dru, gdhendje guri, endje dhe qendisje. Gratë e zonës janë mjeshtre në krijimin e qilimave dhe sixhadeve me motive tradicionale, ndërsa burrat merren me punimin e veglave muzikore dhe armëve të dekoruara. Kjo traditë vijon të ruhet me kujdes, duke pasur një vlerë të madhe kulturore.</p>
      </section>
    
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">5. Folklori</h2>
        <p style="line-height: 1.6;">Folklori i Veriut është i pasur me legjenda, mite dhe tregime popullore që transmetohen nga brezi në brez. Eposi i Kreshnikëve është një nga trashëgimitë më të çmuara, duke përshkruar historitë heroike të kreshnikëve shqiptarë. Gjithashtu, kanuni i Lekë Dukagjinit ka luajtur një rol të rëndësishëm në rregullimin e jetës shoqërore dhe ruajtjen e traditave.</p>
      </section>
    
      <section style="margin-bottom: 30px;">
       <h2 style="  color: #34495e;">6. Gjuha</h2>
        <p style="line-height: 1.6;">Gjuha shqipe në Veri të Shqipërisë ruan disa nga tiparet më autentike të dialektit geg. Ky dialekt ka pasur një ndikim të madh në letërsinë dhe poezinë popullore, duke ruajtur fjalë dhe shprehje arkaike që reflektojnë lashtësinë e gjuhës sonë. Gjuha ka qenë dhe mbetet një shtyllë e rëndësishme në ruajtjen e identitetit kombëtar.</p>
      </section>
    
  
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px";
        >
      <h1 style="color: #2c3e50;">Kuzhina Tradicionale e Shqipërisë së Veriut</h1>
      <p style="line-height: 1.6;">
        Kuzhina e Shqipërisë së Veriut përfaqëson një nga shtyllat kryesore të pasurisë etnografike shqiptare, duke mishëruar shekuj traditë, autenticitet dhe shije të veçanta. Kjo zonë, e njohur për kulturën e saj të pasur dhe mënyrën e jetesës së lidhur ngushtë me natyrën, ka trashëguar një kuzhinë të bazuar në produkte vendase, përgatitje të thjeshta, por plot shije dhe vlera ushqyese.
      </p>
    
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">1. Gatimet Tradicionale më të Spikatura</h2>
        <p style="line-height: 1.6;">
          Një nga simbolet kryesore të kulinarisë veriore është flija, një pjatë unike që përgatitet me petë të holla të lyera me ajkë dhe të pjekura në saç. Kjo është një recetë tradicionale që kërkon durim dhe përkushtim, duke pasqyruar mikpritjen dhe rëndësinë e familjes në kulturën veriore.
        </p>
        <p style="line-height: 1.6;">
          Po aq e njohur është edhe kaçamaku, një gatim i thjeshtë, por shumë i dashur, i përgatitur nga mielli i misrit dhe i shoqëruar shpesh me djathë të bardhë ose kos. Ky ushqim i ngrohtë dhe i shijshëm ka qenë prej shekujsh një burim energjie për banorët e këtyre viseve.
        </p>
      </section>
    
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">2. Mishi dhe Produktet e Bulmetit</h2>
        <p style="line-height: 1.6;">
          Kuzhina e veriut është e pasur me pjata të bazuara në mish, sidomos atë të qengjit, dhisë dhe lopës. Mishi i thatë është një nga përgatitjet më të veçanta, ku mishi ruhet për periudha të gjata përmes tharjes dhe kriposjes, duke u shndërruar në një delikatesë të shijshme.
        </p>
        <p style="line-height: 1.6;">
          Një tjetër gatim me bazë mishi është peshku i tharë, i njohur sidomos në zonat pranë liqeneve dhe lumenjve. Përgatitja e tij e veçantë e bën atë një pjesë të rëndësishme të kuzhinës tradicionale.
        </p>
        <p style="line-height: 1.6;">
          Ndër produktet e bulmetit, veçohen djathi i Sharrit dhe kos i deleve, të cilët shquhen për shijen e tyre të pasur dhe përdorimin e gjerë në kuzhinën veriore.
        </p>
      </section>
    
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">3. Byrekët dhe Brumat</h2>
        <p style="line-height: 1.6;">
          Byrekët janë një pjesë e pandashme e traditës kulinare veriore. Byreku me kungull dhe byreku me mish janë ndër më të preferuarit, duke sjellë një kombinim perfekt mes shijes dhe vlerave ushqyese.
        </p>
        <p style="line-height: 1.6;">
          Një tjetër brumë i famshëm është piteja me mish ose piteja me ajkë, e cila është një specialitet i përgatitur në raste festash dhe gëzimesh familjare.
        </p>
      </section>
    
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">4. Ëmbëlsirat Tradicionale</h2>
        <p style="line-height: 1.6;">
          Në aspektin e ëmbëlsirave, hallva me miell misri dhe tullumëza janë ndër ëmbëlsirat më të njohura në veri. Ato kanë një shije karakteristike dhe një përgatitje të thjeshtë, por të mbushur me traditë dhe dashuri.
        </p>
  
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
      <h1 style="color: #2c3e50;">Letërsia e Shqipërisë së Veriut</h1>
      <p style="line-height: 1.6;">
        Shqipëria e Veriut është një thesar i pasur kulturor dhe etnografik, ku letërsia ka luajtur një rol të rëndësishëm në ruajtjen dhe përcjelljen e identitetit të kësaj treve ndër shekuj. Traditat, zakonet dhe mënyra e jetesës së malësorëve të Veriut janë përjetësuar në rrëfime, legjenda dhe krijimtari letrare, duke e bërë këtë rajon një burim të pashtershëm frymëzimi për shkrimtarët më të mëdhenj shqiptarë.
      </p>
    
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">1. Rrëfime, Legjenda dhe Tregime ndër Shekuj</h2>
        <p style="line-height: 1.6;">
          Letërsia gojore dhe e shkruar e Veriut ka pasqyruar heroizmin, besën dhe normat morale të shqiptarëve ndër shekuj. Legjendat për heronjtë si Gjergj Elez Alia dhe historitë mbi besën dhe nderin kanë kaluar brez pas brezi, duke formësuar identitetin kulturor të kësaj zone. Rrëfimet epike, si ato të Eposit të Kreshnikëve, janë një dëshmi e fuqishme e botës shpirtërore të shqiptarëve të Veriut. Ato janë jo vetëm një pasqyrim i historisë dhe traditave, por edhe një burim i pashtershëm për studimet etnografike.
        </p>
      </section>
    
      <section style="margin-bottom: 30px;">
        <h2 style="  color: #34495e;">2. Shkrimtarët më të Mëdhenj të Shqipërisë së Veriut</h2>
        <p style="line-height: 1.6;">
          Një ndër zërat më të fuqishëm të letërsisë veriore shqiptare është Millosh Gjergj Nikolla – Migjeni. Me veprat e tij të thella dhe kritike, ai pasqyroi realitetin e vështirë të Veriut të Shqipërisë në fillim të shekullit XX. Poezitë dhe prozat e tij shpalosin dhimbjen e varfërisë, pabarazisë dhe përpjekjes për ndryshim.
        </p>
        <p style="line-height: 1.6;">
          Një tjetër figurë e shquar është Atë Gjergj Fishta, autori i epopeve madhështore shqiptare, ku përmes <em>Lahutës së Malcisë</em> ai lartësoi heroizmin e malësorëve, qëndresën kundër pushtuesve dhe besnikërinë ndaj traditave.
        </p>
        <p style="line-height: 1.6;">
          Po ashtu, Ndre Mjeda është një nga shkrimtarët dhe poetët më të rëndësishëm të Veriut, i njohur për lirikën e tij që mishëron thelbin e folklorit dhe traditës malësore. Poezitë e tij, të mbushura me simbolikë dhe figura letrare të pasura, përqendrohen në temat e atdhedashurisë, nderit dhe besnikërisë.
        </p>
        <p style="line-height: 1.6;">
          Veprat e tij si <em>Poezi</em> dhe <em>Kreshnikët</em> janë një pasqyrim i thellë i natyrës shpirtërore të shqiptarëve të Veriut, që ndonëse jetonin në kushte të vështira, kurrë nuk humbën dashurinë dhe krenarinë për vendin e tyre.
        </p>
        <p style="line-height: 1.6;">
          Ernest Koliqi ishte një tjetër shkrimtar që pati një ndikim të jashtëzakonshëm në formimin e identitetit kombëtar shqiptar në shekullin XX. Në veprat e tij, ai trajtonte natyrën njerëzore, pasionet dhe moralin, duke e parë letërsinë si mjet për ruajtjen dhe pasurimin e kulturës shqiptare.
        </p>
        <p style="line-height: 1.6;">
          Një nga veprat më të njohura të tij, <em>Shqipëria dhe Shqiptarët</em>, pasqyron dëshirën e tij për një Shqipëri të bashkuar dhe të zhvilluar. Koliqi ishte një urë lidhëse mes pasurisë kulturore të Veriut dhe realitetit të përditshëm shqiptar.
        </p>
        <p style="line-height: 1.6;">
          Mihal Grameno, një tjetër figurë me ndikim, njihet për veprat e tij që pasqyrojnë realitetin e luftës dhe të sakrificës për atdheun. Ai kontribuoi në pasurimin e folklorit dhe në mbrojtjen e identitetit kombëtar shqiptar përmes fjalës së shkruar.
        </p>
      </section>
    </div>
    </div>
  `;
  }

  function showMesme() {
    localStorage.setItem('activeSection', 'mesme');
    content.innerHTML = `
  <div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
      <h2 style="  color: #34495e;">Relievi në shqiprinë e mesme</h2>
      <h3>Relievi i lartë</h3>
      <ul style="margin-left: 20px;">
        <li>Në lindje dhe juglindje ndodhen zona malore dhe kodrinore, si Mali i Dajtit (1,613 m), që është simbol i Tiranës, si dhe malet e Shëngjergjit dhe Elbasanit.</li>
        <li>Këto zona kanë pyje, burime natyrore dhe janë të njohura për turizmin malor.</li>
      </ul>
    
      <h3>Relievi i ulët</h3>
      <ul style="margin-left: 20px;">
        <li>Në perëndim ndodhet Ultësira Bregdetare, e cila është kryesisht fushore. Kjo zonë është shumë pjellore dhe përdoret për bujqësi, veçanërisht për prodhimin e ullinjve, agrumeve dhe perimeve.</li>
        <li>Fushat e Myzeqesë dhe ato pranë Tiranës e Durrësit kanë qenë historikisht të rëndësishme për jetën dhe zhvillimin ekonomik të rajonit.</li>
      </ul>
    
      <h2 style="  color: #34495e;">Klima</h2>
      <p style="line-height: 1.6;">Shqipëria e Mesme ka klimë mesdhetare me ndikime kontinentale.</p>
      <ul style="margin-left: 20px;">
        <li><strong>Vera:</strong> e nxehtë dhe e thatë, sidomos në zonat fushore dhe bregdetare. Temperaturat mund të arrijnë 38-40°C.</li>
        <li><strong>Dimri:</strong> i butë dhe me reshje, sidomos në zonat malore ku ka edhe dëborë.</li>
      </ul>
    
      <h3>Mikroklimat – Ndryshimet e vogla, por të rëndësishme!</h3>
      <ul style="margin-left: 20px;">
        <li><strong>Zonat bregdetare (Durrësi, Kavaja):</strong> temperatura më të larta dhe më shumë lagështi.</li>
        <li><strong>Zonat kodrinore dhe malore (Dajti, Martaneshi, Shëngjergji):</strong> temperatura më të freskëta dhe më shumë reshje shiu e dëbore.</li>
        <li><strong>Ultësira pranë lumenjve (Shkumbini, Erzeni, Ishmi):</strong> kushte për mjegull gjatë dimrit dhe toka të lagështa të favorshme për bujqësi.</li>
      </ul>
    
      <p style="line-height: 1.6;"><strong>Shqipëria e Mesme</strong> ka një pozitë gjeografike shumë të rëndësishme, një reliev të larmishëm që kombinon male, kodra dhe fusha pjellore, si dhe një klimë të butë mesdhetare që e bën këtë zonë të pasur për jetesë, bujqësi dhe turizëm.</p>
    
      <p style="line-height: 1.6;"><em>Pa këtë pjesë të Shqipërisë, vendi ynë nuk do të ishte i njëjtë!</em></p>
  
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
      <h2 style="  color: #34495e;">Pasuria Kulturore e Shqipërisë së Mesme</h2>
      <p style="line-height: 1.6;">
        Pasuria kulturore e Shqipërisë së Mesme është si një mozaik i gjallë që ruan kujtesën e brezave. Objektet arkeologjike, si kalatë e hershme, amfiteatri i Durrësit apo rrënojat e Petrelës, flasin për qytetërime të lashta që kanë lënë gjurmë të forta në histori.
      </p>
      <p style="line-height: 1.6;">
        Punimet artizanale – si qeramika e zbukuruar, punimet në dru apo zbukurimet e veshjeve popullore – tregojnë mjeshtërinë dhe estetikën e kësaj treve.
      </p>
      <p style="line-height: 1.6;">
        Nga ana tjetër, pasuria shpirtërore jeton nëpër festa si Dita e Verës në Elbasan, që sjell gëzim, ngjyra dhe shpresë, apo në besimet dhe ritet fetare që përcillen me respekt në çdo familje.
      </p>
      <p style="line-height: 1.6;">
        Këto zakone dhe simbole e bëjnë këtë krahinë të mos jetë thjesht një vend në hartë, por një kujtim i gjallë i shpirtit shqiptar.
      </p>
      <blockquote>
        “Çdo festë, çdo objekt i lashtë, çdo rite i harruar është një fjalë e gjallë në gjuhën e kujtesës sonë!"
      </blockquote>
  
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
      <h2 style="  color: #34495e;">Historia – Heroizmi në Shqipërinë e Mesme</h2>
  
  <h3>Principata e Kastriotëve</h3>
  <p style="line-height: 1.6;">
    Shqipëria e Mesme ka luajtur një rol kyç në historinë e kombit, sidomos gjatë periudhës së Skënderbeut dhe Principatës së Kastriotëve.
  </p>
  
  <h3>Kruja – Kryeqendra e Rezistencës</h3>
  <ul style="margin-left: 20px;">
    <li>Kryeqyteti i principatës ishte Kruja, nga ku Skënderbeu organizoi rezistencën kundër osmanëve.</li>
    <li>Kruja ishte një qytet i fortifikuar që qëndroi si një simbol i lirisë për shqiptarët.</li>
  </ul>
  
  <h3>Betejat e Skënderbeut në Shqipërinë e Mesme</h3>
  <p style="line-height: 1.6;">Shqipëria e Mesme ishte një fushëbetejë e rëndësishme gjatë luftës kundër Perandorisë Osmane.</p>
  <ul style="margin-left: 20px;">
    <li><strong>Beteja e Tiranës (1462):</strong> U zhvillua pranë fushës së Tiranës, ku Skënderbeu arriti një nga fitoret më të rëndësishme kundër osmanëve.</li>
    <li><strong>Beteja e Vajkalit (1465):</strong> Në këtë betejë afër Elbasanit, Skënderbeu përdori një strategji të zgjuar për të thyer ushtrinë osmane.</li>
    <li><strong>Beteja e Mollës së Kuqe:</strong> Një tjetër betejë historike që ndihmoi në mbajtjen e Shqipërisë së Mesme jashtë kontrollit osman për shumë vite.</li>
  </ul>
  
  <h3>Figura të shquara historike nga Shqipëria e Mesme</h3>
  <ul style="margin-left: 20px;">
    <li><strong>Skënderbeu (Gjergj Kastrioti):</strong> Heroi kombëtar, që e bëri Krujën simbol të qëndresës shqiptare.</li>
    <li><strong>Topiasit (Karl Topia):</strong> Një nga sundimtarët e Shqipërisë së Mesme, që drejtoi Durrësin dhe mbrojti qytetin nga sulmet e huaja.</li>
  </ul>
  
  <p style="line-height: 1.6;">
    Shqipëria e Mesme është një pasuri e madhe, qoftë në letërsi apo në histori. Nga rrëfimet popullore te betejat heroike, nga legjendat te romanet e mëdhenj, kjo trevë ka luajtur një rol kyç në formësimin e identitetit shqiptar.
  </p>
  
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
     <h2 style="  color: #34495e;">Artizanati – Piktura dhe Punimi i Drurit</h2>
  
  <h3>Piktura</h3>
  <ul style="margin-left: 20px;">
    <li><strong>Ikonografia e Elbasanit:</strong> Një nga trashëgimitë më të mëdha artistike, ku mjeshtër të mëdhenj si Onufri krijuan vepra të mrekullueshme me ngjyra të ndezura dhe motive fetare.</li>
    <li>Piktorë të tjerë më vonë e zhvilluan këtë art edhe në objekte të tjera si dyert e drurit, tavane të dekoruara dhe orendi tradicionale.</li>
  </ul>
  
  <h3>Punimi i Drurit</h3>
  <ul style="margin-left: 20px;">
    <li><strong>Kruja dhe Tirana:</strong> Të njohura për mjeshtërinë e gdhendjes së drurit, veçanërisht për mobiliet tradicionale dhe dyert artistike.</li>
    <li>Sot, ky art vazhdon të ruhet nga artizanë që punojnë nëpër pazare dhe dyqane tradicionale.</li>
  </ul>
  
  <h2 style="  color: #34495e;">Muzika Tradicionale Qytetare – Stilet dhe Ndikimet</h2>
  <h3>Stili Muzikor</h3>
  <ul style="margin-left: 20px;">
    <li>Kjo muzikë ka një melodi të ëmbël dhe ritme të ngadalta, shpesh të shoqëruara me instrumente si çiftelia, fyelli dhe violinë.</li>
    <li>Një nga karakteristikat kryesore është kënga lirike qytetare, e cila shpesh flet për dashurinë, jetën familjare dhe nostalgjinë.</li>
  </ul>
  
  <h3>Ndikimet e Jashtme</h3>
  <ul style="margin-left: 20px;">
    <li>Muzika qytetare ka pasur ndikime nga muzika osmane dhe italiane, sidomos në mënyrën e interpretimit dhe përdorimin e disa instrumenteve si klarineta dhe fizarmonika.</li>
    <li>Ndikimet orientale ndihen në melizmat dhe ornamentet vokale, ndërsa ndikimet evropiane janë të dukshme në format muzikore dhe tekstet poetike.</li>
  </ul>
  
  <h2 style="  color: #34495e;">Veshjet Tradicionale – Diversiteti dhe Ruajtja e Traditës</h2>
  
  <h3>Për femrat</h3>
  <ul style="margin-left: 20px;">
    <li>Gratë mbanin fustane të gjata, të qëndisura me motive tradicionale dhe jelekë të stolisur me monedha argjendi.</li>
    <li>Shamia e bardhë ose e kuqe përdorej si simbol i martesës ose statusit familjar.</li>
  </ul>
  
  <h3>Për burrat</h3>
  <ul style="margin-left: 20px;">
    <li>Qeleshja ishte pjesë e veshjeve të përditshme dhe ceremoniale.</li>
  </ul>
  
  <h3>Ruajtja e Traditës</h3>
  <p style="line-height: 1.6;">
    Sot, veshjet tradicionale përdoren kryesisht në evente kulturore, dasma dhe festivale folklorike, por gjithnjë e më shumë po ringjallen në modën moderne dhe dizajnin e veshjeve të stilizuara.
  </p>
  
  <h3>Le të jemi krenarë për trashëgiminë tonë!</h3>
  <p style="line-height: 1.6;">
    Etnografia e Shqipërisë së Mesme është një pasuri e madhe që duhet ruajtur dhe vlerësuar. Nga artizanati i mjeshtërve të drurit, te tingujt e ëmbël të muzikës qytetare, e deri te veshjet që pasqyrojnë shpirtin e kësaj treve – gjithçka tregon identitetin dhe bukurinë e kulturës sonë!
  </p>
    
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px";
        >
     <h1 style="color: #2c3e50;">Kuzhina Tradicionale e Shqipërisë së Veriut</h1>
  <p style="line-height: 1.6;">
    Kuzhina e Shqipërisë së Veriut përfaqëson një nga shtyllat kryesore të pasurisë etnografike shqiptare, duke mishëruar shekuj traditë, autenticitet dhe shije të veçanta. Kjo zonë, e njohur për kulturën e saj të pasur dhe mënyrën e jetesës së lidhur ngushtë me natyrën, ka trashëguar një kuzhinë të bazuar në produkte vendase, përgatitje të thjeshta, por plot shije dhe vlera ushqyese.
  </p>
  
  <section style="margin-bottom: 30px;">
    <h2 style="  color: #34495e;">1. Gatimet Tradicionale më të Spikatura</h2>
    <p style="line-height: 1.6;">
      Një nga simbolet kryesore të kulinarisë veriore është flija, një pjatë unike që përgatitet me petë të holla të lyera me ajkë dhe të pjekura në saç. Kjo është një recetë tradicionale që kërkon durim dhe përkushtim, duke pasqyruar mikpritjen dhe rëndësinë e familjes në kulturën veriore.
    </p>
    <p style="line-height: 1.6;">
      Po aq e njohur është edhe kaçamaku, një gatim i thjeshtë, por shumë i dashur, i përgatitur nga mielli i misrit dhe i shoqëruar shpesh me djathë të bardhë ose kos. Ky ushqim i ngrohtë dhe i shijshëm ka qenë prej shekujsh një burim energjie për banorët e këtyre viseve.
    </p>
  </section>
  
  <section style="margin-bottom: 30px;">
    <h2 style="  color: #34495e;">2. Mishi dhe Produktet e Bulmetit</h2>
    <p style="line-height: 1.6;">
      Kuzhina e veriut është e pasur me pjata të bazuara në mish, sidomos atë të qengjit, dhisë dhe lopës. Mishi i thatë është një nga përgatitjet më të veçanta, ku mishi ruhet për periudha të gjata përmes tharjes dhe kriposjes, duke u shndërruar në një delikatesë të shijshme.
    </p>
    <p style="line-height: 1.6;">
      Një tjetër gatim me bazë mishi është peshku i tharë, i njohur sidomos në zonat pranë liqeneve dhe lumenjve. Përgatitja e tij e veçantë e bën atë një pjesë të rëndësishme të kuzhinës tradicionale.
    </p>
    <p style="line-height: 1.6;">
      Ndër produktet e bulmetit, veçohen djathi i Sharrit dhe kos i deleve, të cilët shquhen për shijen e tyre të pasur dhe përdorimin e gjerë në kuzhinën veriore.
    </p>
  </section>
  
  <section style="margin-bottom: 30px;">
   <h2 style="  color: #34495e;">3. Byrekët dhe Brumat</h2>
    <p style="line-height: 1.6;">
      Byrekët janë një pjesë e pandashme e traditës kulinare veriore. Byreku me kungull dhe byreku me mish janë ndër më të preferuarit, duke sjellë një kombinim perfekt mes shijes dhe vlerave ushqyese.
    </p>
    <p style="line-height: 1.6;">
      Një tjetër brumë i famshëm është piteja me mish ose piteja me ajkë, e cila është një specialitet i përgatitur në raste festash dhe gëzimesh familjare.
    </p>
  </section>
  
  <section style="margin-bottom: 30px;">
    <h2 style="  color: #34495e;">4. Ëmbëlsirat Tradicionale</h2>
    <p style="line-height: 1.6;">
      Në aspektin e ëmbëlsirave, hallva me miell misri dhe tullumëza janë ndër ëmbëlsirat më të njohura në veri. Ato kanë një shije karakteristike dhe një përgatitje të thjeshtë, por të mbushur me traditë dhe dashuri.
    </p>
  
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
     <h2 style="  color: #34495e;">Letërsia – Rrëfime dhe shkrimtarë të mëdhenj</h2>
  
  
      <h3>Rrëfimet dhe Legjendat – Pasuria e Traditës</h3>
      <p style="line-height: 1.6;">Shqipëria e Mesme është e mbushur me rrëfime e legjenda që kanë mbijetuar brez pas brezi.</p>
      
      
          <h4>Legjenda e “Vorrit të Ashikut”</h4>
          <p style="line-height: 1.6;">Varri i kushtohej një çifti të dashuruarish që kishin rënë në ujdi të arratiseshin ngase fiset e tyre ishin në hasmëri, por u kapën. Djali, duke kuptuar se nuk kishin shpëtim, vrau të dashurën dhe më pas veten, duke lënë amanet që të varroseshin bashkë.</p>
      
  
      
          <h4>Legjenda e Syrit të Ciklopit (Shkëmbi i Kavajës – Durrës)</h4>
          <p style="line-height: 1.6;">Në zonën e Kavajës, pranë detit, ndodhet një shkëmb i veçantë që njihet si Syri i Ciklopit. Sipas legjendës, aty jetonte një përbindësh njësysh (ciklop), që terrorizonte banorët dhe rrëmbente vajzat e reja.</p>
          <p style="line-height: 1.6;">Një ditë, një djalë i ri e trim e sfidoi ciklopin dhe e vrau, duke ia nxjerrë syrin dhe duke e hedhur në det. Thuhet se që atëherë, në det shfaqet një dritë e çuditshme gjatë natës – syri i ciklopit që ende kërkon hakmarrje.</p>
     
  
  
  
      <h3>Letërsia e Bejtexhinjeve</h3>
      <p style="line-height: 1.6;">Letërsia e bejtexhinjve u zhvillua në shekujt XVIII–XIX në Shqipërinë e Mesme dhe Jug, nën ndikimin e letërsisë orientale. Shkruhej në shqip me alfabet arab dhe trajtonte tema fetare, morale, dashurie e satirike. Poetët më të njohur janë Nezim Frakulla dhe Hasan Zyko Kamberi. Kjo letërsi ndihmoi në ruajtjen e gjuhës shqipe dhe i parapriu Rilindjes Kombëtare.</p>
  
  
  
      <h3>Ndikimi i shkrimtarëve të mëdhenj</h3>
      <p style="line-height: 1.6;">Shqipëria e Mesme mund të mos ketë nxjerrë shkrimtarë të mëdhenj si Kadare apo Agolli, por kjo nuk do të thotë që letërsia e saj nuk ka qenë e pasur. Në fakt, këta dy gjigantë të letërsisë shqipe, ndonëse nga Jugu, kanë lënë gjurmë të mëdha edhe në letërsinë që trajton Shqipërinë e Mesme.</p>
      
      
          <h4>Ismail Kadare</h4>
          <ul style="margin-left: 20px;">
              <li>Në veprat e tij, Kadare shpesh përshkruan Tiranën, Durrësin dhe qytetet e Shqipërisë së Mesme si pjesë e narrativës së tij epike.</li>
              <li>Ai sjell figura historike, si Skënderbeun dhe Ali Pashën, duke na kujtuar se historia është gjithmonë e gjallë në këtë trevë.</li>
          </ul>
      
  
      
          <h4>Dritëro Agolli – “Njeriu me top” & “Shkëlqimi dhe rënia e shokut Zylo”</h4>
          <ul style="margin-left: 20px;">
              <li>Agolli ka sjellë me humor dhe realizëm një pasqyrë të shoqërisë shqiptare, duke trajtuar edhe mentalitetin e Shqipërisë së Mesme.</li>
          </ul>
      
  
  
  
      <h3>Roli i Anekdotave</h3>
      <p style="line-height: 1.6;">Anekdotat në letërsinë e Shqipërisë së Mesme shërbejnë për të përcjellë mençurinë popullore, për të kritikuar shoqërinë dhe për të argëtuar. Me humor dhe mesazh, ato ruajnë gjuhën dhe kulturën shqiptare, sidomos në qytete si Tirana, Elbasani e Durrësi, ku anekdotat përdoren më së shumti.</p>
    </div>
    </div>
    
    `;
   
  }

  function showJugu() {
    localStorage.setItem('activeSection', 'jugut');
    content.innerHTML = `
    <div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
      <h2 style="  color: #34495e;">Shtrirja Gjeografike në shqirinë e jugut</h2>
          <p style="line-height: 1.6;">Shqipëria e Jugut ka një sipërfaqe prej rreth 12,989 km², që përbën rreth 45% të sipërfaqes totale të Shqipërisë (28,748 km²).</p>
      
          
              <h3>1. Kufijtë</h3>
              <p style="line-height: 1.6;">Shqipëria e Jugut shtrihet nga pjesa qendrore e vendit deri në kufirin jugor me Greqinë, duke përfshirë zona me karakteristika të ndryshme gjeografike dhe kulturore.</p>
              <ul style="margin-left: 20px;">
                  <li><strong>Në veri</strong>, kufizohet me Shqipërinë e Mesme, ku përfshihen qarqet Elbasan dhe Durrës. Këto zona shënojnë një ndarje të natyrshme me lumin Shkumbin, i cili tradicionalisht ka shërbyer si një kufi natyror mes Shqipërisë së Mesme dhe Jugut.</li>
                  <li><strong>Në lindje</strong>, kufizohet me Maqedoninë e Veriut dhe Greqinë, me pika kufitare të rëndësishme si Kapshtica (Korçë-Greqi) dhe Kakavija (Gjirokastër-Greqi).</li>
                  <li><strong>Në jug</strong>, kufiri me Greqinë përfshin rajone si Dropulli dhe Përmeti, ku ka edhe një komunitet të konsiderueshëm të minoritetit grek.</li>
                  <li><strong>Në perëndim</strong>, kufizohet nga ujërat e Detit Adriatik dhe Detit Jon, ku ndodhen disa nga plazhet më të bukura të Shqipërisë, si Dhërmiu, Ksamil dhe Borshi.</li>
              </ul>
          
      
          
              <h3>2. Relievi dhe Klima</h3>
              <p style="line-height: 1.6;">Shqipëria e Jugut ka një reliev të larmishëm që përfshin fusha, kodra, male dhe bregdet.</p>
             <ul style="margin-left: 20px;">
                  <li><strong>Fushat</strong>: Fusha e Myzeqesë (pjesërisht në Fier) është një nga zonat më të rëndësishme bujqësore në vend.</li>
                  <li><strong>Malet</strong>: Përfshin disa nga malet më të larta si Mali i Tomorit (2416m), Mali i Gramozit (2523m) dhe Nemërçka (2485m), të cilat ndajnë Shqipërinë me Greqinë dhe Maqedoninë e Veriut.</li>
                  <li><strong>Bregdeti</strong>: Në perëndim, gjenden plazhe të famshme përgjatë rivierës shqiptare, me terrene që alternohen mes gjireve shkëmbore dhe rërës së bardhë.</li>
              </ul>
      
              <h4>Klima</h4>
              <ul style="margin-left: 20px;">
                  <li><strong>Në bregdet</strong> mbizotëron klima mesdhetare me vera të nxehta dhe dimra të butë.</li>
                  <li><strong>Në zonat malore</strong> klima është më e freskët dhe me reshje të mëdha dëbore gjatë dimrit, sidomos në Korçë dhe Gjirokastër.</li>
              </ul>
          
      
          
              <h3>3. Qytetet Kryesore</h3>
              
            
                  <h4>Vlora</h4>
                  <ul style="margin-left: 20px;">
                      <li>Port i rëndësishëm dhe qytet turistik.</li>
                      <li>Është qyteti ku u shpall Pavarësia e Shqipërisë më 28 Nëntor 1912.</li>
                      <li>Ka disa destinacione të famshme si plazhi i Dhërmiut, Llogaraja dhe Karaburuni.</li>
                  </ul>
              
      
             
                  <h4>Fieri</h4>
                  <ul style="margin-left: 20px;">
                      <li>Qendër industriale dhe një nga zonat kryesore të bujqësisë në vend.</li>
                      <li>Aty ndodhet Apolonia, një nga qytetet më të rëndësishme antike ilire dhe romake.</li>
                      <li>Ka rëndësi për industrinë e naftës dhe gazit.</li>
                  </ul>
          
      
             
                  <h4>Berati</h4>
                  <ul style="margin-left: 20px;">
                      <li>I njohur si "Qyteti i një mbi një dritareve", pjesë e UNESCO-s për arkitekturën e tij unike osmane.</li>
                      <li>Ka Kalanë e Beratit dhe lagjet historike Mangalem e Gorica.</li>
                      <li>Është një destinacion kulturor i rëndësishëm.</li>
                      
      
              
                  <h4>Gjirokastra</h4>
                  <ul style="margin-left: 20px;">
                      <li>Qyteti i gurtë, gjithashtu pjesë e UNESCO-s.</li>
                      <li>E njohur për arkitekturën e saj të veçantë, me shtëpi-kala dhe rrugë të shtruara me gurë.</li>
                      <li>Aty ndodhet Kalaja e Gjirokastrës dhe Muzeu i Armëve.</li>
                      <li>Është vendlindja e shkrimtarit të njohur Ismail Kadare.</li>
                  </ul>
             
      
              
                  <h4>Korça</h4>
                  <ul style="margin-left: 20px;">
                      <li>Një nga qytetet më të bukura dhe kulturore të Shqipërisë, quajtur "qyteti i serenatave".</li>
                      <li>Ka një histori të pasur arsimore, pasi aty u hap shkolla e parë shqipe në vitin 1887.</li>
                      <li>Ka një klimë të ftohtë dimërore dhe është destinacion i preferuar për turizëm malor dhe festivale si "Festa e Birrës".</li>
                  </ul>
  
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
     <h2 style="  color: #34495e;">Pasuria Kulturore e Shqipërisë së Jugut</h2>
          <p style="line-height: 1.6;">Shqipëria e Jugut ka një trashëgimi të pasur kulturore që përfshin qytete historike, monumente, tradita, dhe një ndikim të madh në art, muzikë dhe letërsi. Ja disa nga aspektet kryesore:</p>
          
          <h3>1. Qytetet dhe Monumentet Historike</h3>
          <p style="line-height: 1.6;">Shqipëria e Jugut është e pasur me qytete dhe monumente që pasqyrojnë kulturën dhe historinë e saj të lashtë.</p>
          
          <ul style="margin-left: 20px;">
            <li><strong>Berati – Qyteti i Një mbi Një Dritareve</strong>
              <ul style="margin-left: 20px;">
                <li>Pjesë e UNESCO-s për arkitekturën e tij unike otomane.</li>
                <li>Ka Kalanë e Beratit, lagjet historike Mangalem dhe Gorica, dhe muzeun Onufri, ku ruhen ikona të rëndësishme mesjetare.</li>
              </ul>
            </li>
            <li><strong>Gjirokastra – Qyteti i Gurtë</strong>
              <ul style="margin-left: 20px;">
                <li>Pjesë e UNESCO-s, i njohur për arkitekturën e tij me shtëpi-kala.</li>
                <li>Kalaja e Gjirokastrës, ku mbahet edhe Festivali Folklorik Kombëtar çdo pesë vjet.</li>
                <li>Shtëpia-muze e Ismail Kadaresë dhe Enver Hoxhës, që reflektojnë histori të ndryshme të Shqipërisë.</li>
              </ul>
            </li>
            <li><strong>Korça – Qyteti i Kulturës</strong>
              <ul style="margin-left: 20px;">
                <li>Ka qenë një nga qendrat më të rëndësishme arsimore dhe artistike të Shqipërisë.</li>
                <li>Shkolla e Parë Shqipe (1887), një simbol i arsimit në gjuhën shqipe.</li>
                <li>Muzeu i Artit Mesjetar, një nga më të rëndësishmit në Ballkan.</li>
                <li>Festivali i Birrës dhe tradita e serenatave korçare.</li>
              </ul>
            </li>
            <li><strong>Butrinti – Qyteti Antik</strong>
              <ul style="margin-left: 20px;">
                <li>Një nga vendbanimet më të lashta në Shqipëri, me rrënoja që datojnë nga periudha greke, romake dhe bizantine.</li>
                <li>Gjendet në Sarandë dhe është një tjetër pasuri e UNESCO-s.</li>
              </ul>
            </li>
            <li><strong>Apolonia – Qyteti Antik Ilir</strong>
             <ul style="margin-left: 20px;">
                <li>Një qendër e rëndësishme ilire dhe romake, e ndodhur pranë Fierit.</li>
                <li>Ka rrënoja antike të ruajtura mirë, përfshirë amfiteatrin dhe bibliotekën e lashtë.</li>
              </ul>
            </li>
          </ul>
        
          <h3>2. Muzika dhe Vallja Tradicionale</h3>
          <p style="line-height: 1.6;">Muzika dhe vallet popullore të Jugut kanë një stil unik dhe janë të njohura në të gjithë Shqipërinë.</p>
          <ul style="margin-left: 20px;">
            <li>Iso-polifonia shqiptare – Pjesë e trashëgimisë shpirtërore të UNESCO-s, e praktikuar në zonën e Labërisë dhe Dropullit.</li>
            <li>Serenatat korçare – Një zhanër unik i muzikës romantike, i njohur në mbarë Shqipërinë.</li>
            <li>Vallet tradicionale – Vallja e Pogonishtes, Vallja e Devollit, dhe vallet labe janë disa nga më të njohurat.</li>
          </ul>
        
          <h3>3. Letërsia dhe Trashëgimia Gjuhe</h3>
          <p style="line-height: 1.6;">Shqipëria e Jugut ka luajtur një rol kyç në zhvillimin e gjuhës dhe letërsisë shqipe.</p>
          <ul style="margin-left: 20px;">
            <li>Kristoforidhi dhe përpjekjet për unifikimin e gjuhës shqipe.</li>
            <li>Rilindësit shqiptarë, si Naim Frashëri dhe Sami Frashëri, që kanë origjinën nga jugu i Shqipërisë.</li>
            <li>Ismail Kadare, shkrimtari më i njohur shqiptar, i lindur në Gjirokastër.</li>
          </ul>
        
          <h3>4. Festa dhe Tradita Lokale</h3>
          <p style="line-height: 1.6;">Në Shqipërinë e Jugut organizohen shumë festa tradicionale dhe ngjarje kulturore, si:</p>
          <ul style="margin-left: 20px;">
            <li>Festivali Folklorik i Gjirokastrës – Një nga eventet më të mëdha të trashëgimisë kulturore shqiptare.</li>
            <li>Festa e Birrës në Korçë – Një nga festivalet më të njohura të verës.</li>
            <li>Dita e Verës në Përmet – Festë e natyrës dhe kulturës vendase.</li>
          </ul>
        
          <h3>5. Arkitektura dhe Trashëgimia Fetare</h3>
          <ul style="margin-left: 20px;">
            <li>Teqetë e Bektashinjve, sidomos në Berat dhe Korçë, janë pjesë e një tradite të rëndësishme fetare dhe mistike.</li>
            <li>Kishat dhe Manastiret – Manastiri i Ardenicës, Manastiri i Zvernecit dhe kishat bizantine në Voskopoja janë ndër më të rëndësishmet.</li>
          </ul>
  
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
     <h2 style="  color: #34495e;">Historia</h2>
    
      <h3>1. Formimi i Shtetit të Epirit</h3>
      <p style="line-height: 1.6;">• Në periudhën e lashtë, Epir, një rajon që përfshinte pjesë të Shqipërisë së Jugut, ishte një nga shtetet më të fuqishme të Greqisë antike.</p>
      <p style="line-height: 1.6;">• Në shekullin IV p.e.s., dinastia e Eakidëve u bë dominues në këtë rajon. Mbreti Pirro i Epirit, i njohur për fushatat e tij kundër Romës dhe Maqedonisë, është figura më e njohur e këtij shteti.</p>
      <p style="line-height: 1.6;">• Ai zhvilloi një shtet të fuqishëm dhe të organizuar, i cili mori pjesë aktive në luftërat e mëdha të kohës.</p>
    
      <h3>2. Luftërat Ilire-Romake</h3>
      <p style="line-height: 1.6;">• Shqipëria e Jugut, e banuar kryesisht nga ilirët, u përfshi në luftërat me Romën që shpërthyen në shekullin III p.e.s. dhe vazhduan deri në fund të shekullit II p.e.s.</p>
      <p style="line-height: 1.6;">• Një nga ngjarjet më të rëndësishme ishte betejat që u zhvilluan rreth qytetit të Apollonisë. Apollonia ishte një qytet grek që u bë një qendër e rëndësishme e shkencës dhe kulturës, por që gjithashtu pati një rol të madh në luftërat iliro-romake. Pasi Ilirët humbën, Romakët e nënshtruan dhe përfshinë Apolloninë nën administratën romake.</p>
    
      <h3>3. Rilindja Kombëtare dhe Arsimi në Korçë</h3>
      <p style="line-height: 1.6;">• Rilindja Kombëtare e shqiptarëve, një periudhë e rëndësishme e lëvizjes kulturore dhe politike të shekullit XIX, pati një ndikim të fortë në Shqipërinë e Jugut.</p>
      <p style="line-height: 1.6;">• Në qytetin e Korçës, u hap shkolla e parë shqipe, Mësonjëtorja e Korçës, më 7 mars 1887, që shërbeu si një simbol i avancimit të arsimit në gjuhën shqipe. Kjo shkollë dhe aktivitetet e tjera kulturore në qytet, ndihmuan në forcimin e identitetit kombëtar shqiptar.</p>
    
      <h3>4. Shpallja e Pavarësisë në Vlorë</h3>
      <p style="line-height: 1.6;">• Në vitin 1912, Shqipëria shpalli pavarësinë e saj në qytetin e Vlorës, ku u mblodhën përfaqësues të të gjitha trevave shqiptare për të formuar shtetin e ri.</p>
      <p style="line-height: 1.6;">• Shpallja e Pavarësisë u bë në një periudhë të tensionuar, pasi fuqitë evropiane po tentonin të ndanin territoret shqiptare dhe të impononin kontrollin mbi to. Vlora, si një qytet i jugut, ishte një qendër e rëndësishme për zhvillimet politike të atij periudhe. Ismail Qemali, një figurë kyçe e kësaj periudhe, shpalli formimin e shtetit të pavarur shqiptar dhe u bë lideri i parë i tij.</p>
    
      <h3>5. Shqipëria e Jugut gjatë Luftës së Parë Botërore</h3>
      <p style="line-height: 1.6;">• Gjatë Luftës së Parë Botërore, Shqipëria e Jugut u bë një territor strategjik, pasi forcat italiane dhe franceze ndërmorën pushtime të përkohshme në këtë rajon.</p>
      <p style="line-height: 1.6;">• Pas tërheqjes së forcave osmane nga Ballkani, rajoni i Shqipërisë së Jugut, veçanërisht qyteti i Korçës, ra nën administratën franceze për një periudhë të shkurtër. Kjo administratë pati ndikim në organizimin e shoqërisë dhe zhvillimin ekonomik të rajonit gjatë Luftës së Parë Botërore.</p>
    
      <h3>6. Shqipëria e Jugut gjatë Luftës së Dytë Botërore</h3>
      <p style="line-height: 1.6;">• Gjatë Luftës së Dytë Botërore, Shqipëria e Jugut luajti një rol të rëndësishëm në lëvizjen antifashiste dhe në çlirimin nga pushtuesit italianë dhe gjermanë.</p>
      <p style="line-height: 1.6;">• Në qytetin e Vlorës, forcat partizane organizuan operacione të shumta kundër pushtuesve, duke kontribuar në çlirimin e qytetit. Po ashtu, Gjirokastra dhe qytete të tjera të Jugut ishin baza të rëndësishme për luftën partizane dhe organizimin e forcave luftuese. Shqiptarët e Jugut luajtën një rol të madh në ndihmën për çlirimin e Shqipërisë.</p>
  
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
    <h2 style="  color: #34495e;">ETNOGRAFIA</h2>
      <p style="line-height: 1.6;">Etnografia e Shqipërisë së Jugut është një thesar i pasur kulturor që pasqyron traditat, zakonet dhe mënyrën e jetesës së banorëve të kësaj treve. Kjo zonë shquhet për artizanatin e saj të hollë, si punimet në dru, qeramikë dhe tekstile, të cilat mbartin motive unike dhe ngjyra të gjalla që reflektojnë shpirtin krijues të popullit. Kostumet tradicionale, me qëndisje dhe ngjyra të ndezura, janë një tjetër element i spikatur i trashëgimisë etnografike.</p>
    
      <p style="line-height: 1.6;">Muzetë etnografikë të Shqipërisë së Jugut luajnë një rol të rëndësishëm në ruajtjen dhe promovimin e kësaj trashëgimie. Muzeu Etnografik i Beratit, i vendosur në një godinë trishekullore, ofron një pasqyrë të detajuar të jetës tradicionale, duke përfshirë pavijone që tregojnë zejet, përpunimin e ullirit dhe ambientet e shtëpive tipike beratase. Po ashtu, muze të ngjashëm në qytete të tjera si Gjirokastra dhe Vlora, prezantojnë objekte autentike dhe histori që lidhin të shkuarën me të tashmen.</p>
    
      <p style="line-height: 1.6;">Kjo pasuri etnografike është një dëshmi e gjallë e identitetit kombëtar dhe një burim frymëzimi për brezat e ardhshëm. Shqipëria e Jugut, me traditat e saj të rrënjosura thellë, mbetet një perlë kulturore që meriton të zbulohet dhe të vlerësohet.</p>
    
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px";
        >
      <h2 style="  color: #34495e;">KULINARIA</h2>
      <p style="line-height: 1.6;">Kuzhina e Shqipërisë së Jugut është një pasqyrë e pasur e traditave dhe kulturës shqiptare, duke ofruar një larmi pjatash që reflektojnë ndikime të ndryshme historike dhe gjeografike. Ja disa prej pjatave dhe elementeve kulinarë më karakteristikë të këtij rajoni:</p>
    
      <h3>Pjatat tradicionale</h3>
      <ul style="margin-left: 20px;">
        <li><strong>Mëmëligë me miell misri dhe arra:</strong> Një specialitet i kuzhinës jugore, përgatitur me miell misri, arra dhe gjalpë. Shija e saj e veçantë e bën atë një zgjedhje të preferuar në tryezat shqiptare.</li>
        <li><strong>Pula me përshesh:</strong> Një pjatë tradicionale e përdorur shpesh gjatë festave, përgatitur me pulë deti, presh, gjalpë dhe kulaç të thërrmuar. Shija e saj e pasur është një simbol i mikpritjes shqiptare.</li>
        <li><strong>Lakrori:</strong> Është një gatim tradicional shqiptar, veçanërisht i njohur në Jugun e Shqipërisë, sidomos në Korçë. Ai përgatitet me petë të holla të bëra me dorë dhe mbushet me përbërës të ndryshëm si qepë, spinaq, lakër, kungull, apo edhe mish. Ndryshe nga byreku i zakonshëm, lakrori shpesh piqet në saç, nën prush, gjë që i jep një aromë dhe shije karakteristike.</li>
        <li><strong>Revani:</strong> Ëmbëlsirë me bazë të thjeshtë nga mielli dhe veza, që laget me sherbet limoni. Shpesh përgatitet në formë katrore ose drejtkëndëshe.</li>
      </ul>
    
      <h3>Pijet tradicionale</h3>
      <ul style="margin-left: 20px;">
        <li><strong>Rakia:</strong> Një pije alkoolike tradicionale, e prodhuar kryesisht nga rrushi, kumbulla ose mana, e njohur për shijen e saj të fortë dhe aromën karakteristike.</li>
      </ul>
    
      <h3>Mikpritja dhe rëndësia sociale e ushqimit</h3>
      <p style="line-height: 1.6;">Mikpritja është një zakon themelor i shoqërisë shqiptare, dhe shërbimi i ushqimit është pjesë përbërëse e pritjes së mysafirëve. Në shumë raste, vizitorët ftohen të ndajnë një vakt me vendasit, duke theksuar rëndësinë sociale dhe kulturore të ushqimit në këtë rajon.</p>
    
      <p style="line-height: 1.6;">Kuzhina e Shqipërisë së Jugut është një pasuri e vërtetë, që ofron një gamë të gjerë shijesh dhe traditash, duke pasqyruar historinë dhe kulturën e këtij rajoni të veçantë.</p>
    </div>
    <div style="background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;"
        display:flex; flex-direction: row;>
      <h2 style="  color: #34495e;">LETËRSIA</h2>
      <h3>1. Ismail Kadare</h3>
      <p style="line-height: 1.6;">Ismail Kadare është një nga shkrimtarët më të njohur të letërsisë shqipe dhe një figurë ndërkombëtarisht e njohur. Ai ka fituar shumë çmime dhe nderime ndërkombëtare për veprat e tij që shqyrtojnë historinë, politikën dhe shoqërinë shqiptare, shpesh me një stil të thellë, të ngatërruar, dhe të pasur në simbolizëm.</p>
      <h4>Vepra më të njohura:</h4>
      <ul style="margin-left: 20px;">
        <li><strong>"Gjenerali i Ushtrisë së Vdekur" (1963):</strong> Një roman që tregon për një oficer të ushtrisë shqiptare që është dërguar për të gjetur eshtrat e një gjenerali të rënë gjatë Luftës së Parë Botërore.</li>
        <li><strong>"Kronikë në Gur" (1971):</strong> Ky roman është një përshkrim i shoqërisë shqiptare nën regjimin komunist dhe një analizë e thellë e asaj që ndodhi me moralin dhe shpirtin e popullit shqiptar gjatë periudhës së diktaturës.</li>
        <li><strong>"The Palace of Dreams" (1981):</strong> Ky roman është një alegori për totalitarizmin dhe kontrollin absolut të shtetit në jetën e individëve.</li>
      </ul>
    
      <h3>2. Naim Frashëri</h3>
      <p style="line-height: 1.6;">Naim Frashëri është një nga figurat më të shquara të Rilindjes Kombëtare dhe një poet i njohur për poezitë e tij që i dhanë frymëzim luftës për liri dhe pavarësi. Ai është i njohur për mënyrën e pasur poetike dhe për përdorimin e një gjuhe të thjeshtë dhe të kuptueshme që i bëri poezitë e tij të afërta për popullin shqiptar.</p>
      <h4>Vepra më të njohura:</h4>
      <ul style="margin-left: 20px;">
        <li><strong>"Himni i flamurit":</strong> Poezia që flet për rëndësinë e flamurit dhe lirisë së kombit shqiptar.</li>
        <li><strong>"Besa":</strong> Në këtë poezi, Naimi pasqyron ndjenjat e shqiptarëve dhe besimin e patundur në atdhenë dhe traditat e tyre.</li>
        <li><strong>"Ti Shqipëri, më jep nder, më jep emrin Shqipëtar":</strong> Kjo poezi është një shprehje e dashurisë dhe krenarisë kombëtare dhe është bërë një moto për popullin shqiptar.</li>
      </ul>
    
      <h3>3. Petro Marko</h3>
      <p style="line-height: 1.6;">Petro Marko (1913–1991) ishte një nga figurat më të shquara të letërsisë dhe publicistikës shqiptare. Ai ishte një shkrimtar dhe publicist që solli një frymë moderne në letërsinë shqiptare, me veprat e tij që përshkruanin vuajtjet, shpresat dhe luftërat e shqiptarëve.</p>
      <h4>Vepra më të njohura:</h4>
      <ul style="margin-left: 20px;">
        <li><strong>"Hasta La Vista":</strong> Romani më i njohur i tij, një dëshmi e fuqishme e përvojave të tij në Luftën e Spanjës.</li>
        <li><strong>"Një njeri u kthye":</strong> Trajton vuajtjet dhe dilemat morale të individit në një shoqëri të shtypur.</li>
        <li><strong>"Intervistë me vetveten":</strong> Një reflektim i thellë autobiografik mbi jetën, artin dhe shtypjen në diktaturë.</li>
      </ul>
    
      <h3>4. Lasgush Poradeci</h3>
      <p style="line-height: 1.6;">Lasgush Poradeci, me emrin e tij të vërtetë Llazar Gusho, ishte një poet dhe shkrimtar shqiptar që lindi në vitin 1899 në Pogradec. Vepra e tij poetike është thelbësisht filozofike dhe e pasur me imagjinatë, duke pasqyruar natyrën dhe lidhjen e tij të thellë me shqiptarët dhe vendin e tij.</p>
      <h4>Vepra më të njohura:</h4>
      <ul style="margin-left: 20px;">
        <li><strong>"Vallja e Yjve":</strong> Ky vëllim i poezive është i mbushur me tematika të natyrës dhe refleksione filozofike mbi jetën dhe pasurinë shpirtërore të njeriut.</li>
        <li><strong>"Ylli i Zemrës":</strong> Një tjetër koleksion poezish që pasqyron dashurinë dhe lidhjen e poetit me natyrën dhe vendin e tij.</li>
      </ul>
    
      <p style="line-height: 1.6;">Këta katër shkrimtarë kanë ndihmuar në krijimin e letërsisë shqiptare moderne dhe kanë luajtur një rol të rëndësishëm në forcimin e identitetit kombëtar shqiptar përmes veprave të tyre letrare.</p>
    </div>
    </div>
    
    
    
    `;
  
  }

document.getElementById('home-btn').addEventListener('click', showHyrja);
document.getElementById('veriut-btn').addEventListener('click', showVeriu);
document.getElementById('mesme-btn').addEventListener('click', showMesme);
document.getElementById('jugut-btn').addEventListener('click', showJugu);






