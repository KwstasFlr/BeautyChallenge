const $=s=>document.querySelector(s);
const shuffle=a=>{
  a=[...a];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
};

// Ενδεικτική τράπεζα. Πρώτη επιλογή = σωστή.
// Οι επιλογές ανακατεύονται κατά την εμφάνιση.
const bank=[
['Δέρμα','Ποια είναι η εξωτερική στιβάδα του δέρματος;',
['Επιδερμίδα','Χόριο','Υποδόριος ιστός','Μυϊκός ιστός'],
'Η επιδερμίδα αποτελεί την εξωτερική στιβάδα του δέρματος.'],
['Δέρμα','Ποιοι αδένες παράγουν σμήγμα;',
['Σμηγματογόνοι','Ιδρωτοποιοί','Δακρυϊκοί','Σιελογόνοι'],
'Οι σμηγματογόνοι αδένες παράγουν σμήγμα, τη λιπαρή έκκριση του δέρματος.'],
['Δέρμα','Πού βρίσκονται κυρίως οι ίνες κολλαγόνου και ελαστίνης του δέρματος;',
['Στο χόριο','Στην κεράτινη στιβάδα','Στην επιφάνεια του σμήγματος','Στο ελεύθερο άκρο του νυχιού'],
'Το χόριο περιέχει συνδετικό ιστό με ίνες κολλαγόνου και ελαστίνης.'],
['Νύχια','Ποια πρωτεΐνη αποτελεί βασικό συστατικό των νυχιών;',
['Κερατίνη','Αιμοσφαιρίνη','Ινσουλίνη','Μυοσίνη'],
'Η σκληρή κερατίνη είναι βασικό δομικό συστατικό της ονυχαίας πλάκας.'],
['Τρίχα','Ποια φάση του κύκλου της τρίχας είναι φάση ενεργού ανάπτυξης;',
['Αναγενής','Καταγενής','Τελογενής','Φάση απολέπισης'],
'Στην αναγενή φάση πραγματοποιείται ενεργός ανάπτυξη της τρίχας.'],
['Κοσμητολογία','Ένα υδατικό διάλυμα με pH 5 είναι…',
['Όξινο','Ουδέτερο','Αλκαλικό','Χωρίς οξύτητα'],
'Στη συνήθη κλίμακα pH, τιμές κάτω από 7 δηλώνουν όξινο διάλυμα.'],
['Κοσμητολογία','Τι περιγράφει καλύτερα ένα γαλάκτωμα;',
['Διασπορά ενός υγρού σε άλλο μη αναμίξιμο υγρό','Διάλυμα αλατιού σε νερό','Ξηρό μείγμα δύο σκονών','Ένα καθαρό αέριο'],
'Στα γαλακτώματα η μία υγρή φάση είναι διασκορπισμένη σε σταγονίδια μέσα στην άλλη.'],
['Κοσμητολογία','Ποιος είναι ο βασικός ρόλος ενός γαλακτωματοποιητή;',
['Να βοηθά στη σταθερότητα του γαλακτώματος','Να δίνει πάντα άρωμα','Να αποστειρώνει το προϊόν','Να καταργεί την υδατική φάση'],
'Ο γαλακτωματοποιητής βοηθά στη δημιουργία και στη σταθεροποίηση του γαλακτώματος.'],
['Κοσμητολογία','Τι κάνουν οι υγροσκοπικοί παράγοντες, όπως η γλυκερίνη;',
['Προσελκύουν και συγκρατούν νερό','Αφαιρούν μηχανικά τις τρίχες','Χρωματίζουν μόνιμα την τρίχα','Αντικαθιστούν κάθε συντηρητικό'],
'Οι υγροσκοπικοί παράγοντες δεσμεύουν νερό και χρησιμοποιούνται σε ενυδατικές συνθέσεις.'],
['Κοσμητολογία','Γιατί προστίθενται αντιοξειδωτικά σε μια σύνθεση;',
['Για να επιβραδύνουν την οξείδωσή της','Για να μη χρειάζεται συσκευασία','Για να γίνει πάντα αντηλιακή','Για να αποκτήσει υποχρεωτικά χρώμα'],
'Τα αντιοξειδωτικά βοηθούν στην προστασία ευαίσθητων συστατικών από την οξείδωση.'],
['Υγιεινή','Τι επιτυγχάνει ο καθαρισμός ενός εργαλείου;',
['Απομακρύνει ρύπους και υπολείμματα','Εγγυάται μόνος του αποστείρωση','Αντικαθιστά κάθε επόμενο βήμα','Αλλάζει το υλικό του εργαλείου'],
'Ο καθαρισμός απομακρύνει ρύπους. Δεν ταυτίζεται με απολύμανση ή αποστείρωση.'],
['Υγιεινή','Τι διακρίνει την αποστείρωση από την απολύμανση;',
['Περιλαμβάνει την εξάλειψη βακτηριακών σπόρων','Είναι απλό ξέπλυμα','Γίνεται μόνο με άρωμα','Αφορά μόνο ορατούς λεκέδες'],
'Η αποστείρωση εξαλείφει βιώσιμους μικροοργανισμούς, συμπεριλαμβανομένων των βακτηριακών σπόρων.'],
['Υγιεινή','Δοκιμάζεις ένα προϊόν χειλιών από κοινόχρηστο tester. Ποια επιλογή περιορίζει τη μεταφορά μικροβίων;',
['Νέος εφαρμοστής μίας χρήσης, χωρίς δεύτερη εμβάπτιση','Ο ίδιος εφαρμοστής για όλους','Επιστροφή του χρησιμοποιημένου εφαρμοστή στο προϊόν','Ένα γρήγορο φύσημα στον εφαρμοστή'],
'Ο χρησιμοποιημένος εφαρμοστής δεν επιστρέφει στο κοινόχρηστο προϊόν.'],
['Χρώμα','Ποιο χρώμα χρησιμοποιείται συνήθως για οπτική εξουδετέρωση της ερυθρότητας στο μακιγιάζ;',
['Πράσινο','Κόκκινο','Πορτοκαλί','Ροζ'],
'Το πράσινο είναι συμπληρωματικό του κόκκινου στον παραδοσιακό χρωματικό κύκλο.'],
['Μακιγιάζ','Τι πετυχαίνεις με το blending;',
['Πιο ομαλές μεταβάσεις ανάμεσα στις αποχρώσεις','Αποστείρωση των πινέλων','Μόνιμη αλλαγή του υποτόνου','Αλλαγή της ημερομηνίας λήξης'],
'Το blending σβήνει τα έντονα όρια και ενώνει ομαλά τις αποχρώσεις.'],
['Μακιγιάζ','Ποια συνθήκη βοηθά στην αξιολόγηση μιας απόχρωσης foundation;',
['Ουδέτερος, ομοιόμορφος φωτισμός','Έντονος κόκκινος φωτισμός','Σκοτάδι','Μόνο ένα χρωματικό φίλτρο στην κάμερα'],
'Ο ουδέτερος φωτισμός περιορίζει τις χρωματικές αλλοιώσεις στην εικόνα που βλέπουμε.']
];

const fun=[
['Έχεις πέντε λεπτά πριν φύγεις. Ποια είναι η κίνησή σου;',
['Λίγα και αγαπημένα. Έτοιμο!','Μια απρόσμενη πινελιά χρώματος','Το μικρό μου τελετουργικό φροντίδας','Ένα στοιχείο που τραβάει το βλέμμα']],
['Η ιδανική beauty γωνιά σου μοιάζει με…',
['Καθαρό ράφι με τα απολύτως απαραίτητα','Εργαστήριο γεμάτο χρώματα','Ήρεμο καταφύγιο με απαλή μουσική','Καμαρίνι πριν από την πρεμιέρα']],
['Σου δίνουν μια παλέτα χωρίς κανόνες. Τι κάνεις;',
['Βρίσκω δύο τόνους που ταιριάζουν παντού','Δοκιμάζω τον πιο περίεργο συνδυασμό','Παίζω με απαλές υφές, με την ησυχία μου','Δημιουργώ το look της βραδιάς']],
['Ποια φράση σε εκφράζει σήμερα;',
['Λιγότερα βήματα, περισσότερος χρόνος','Κι αν δοκιμάσω κάτι άλλο;','Πρώτα μια ανάσα και λίγη φροντίδα','Σήμερα θέλω να κάνω είσοδο']],
['Το beauty mood σου θα είχε soundtrack…',
['Ένα αγαπημένο ακουστικό κομμάτι','Μια playlist που αλλάζει συνέχεια','Ήρεμη μουσική για ένα μικρό διάλειμμα','Το τραγούδι που ανεβάζει την ένταση']]
];

const moods=[
['Η δύναμη του απλού','Ξέρεις ποια λίγα πράγματα σου φτιάχνουν τη διάθεση. Το δικό σου beauty mood έχει άνεση, καθαρότητα και χρόνο για καφέ.'],
['Χρώμα εκτός προγράμματος','Η περιέργεια κερδίζει! Για εσένα μια παλέτα είναι αφορμή για παιχνίδι και οι κανόνες χωράνε λίγη δημιουργική ερμηνεία.'],
['Το τελετουργικό της φροντίδας','Σήμερα η απόλαυση είναι στη διαδικασία. Χαμηλώνεις την ένταση, φροντίζεις τον εαυτό σου και αφήνεις τον καθρέφτη να περιμένει.'],
['Λίγη παραπάνω λάμψη','Ένα στοιχείο αρκεί για να δώσεις χαρακτήρα. Το mood σου λέει «ας κάνουμε τη συνηθισμένη μέρα λίγο πιο γιορτινή».']
];

const names={
fun:'Για τον χαβαλέ',learn:'Γνώσεις ομορφιάς',exam:'Εξάσκηση ΕΟΠΠΕΠ',
study:'Μελέτη',archive:'Το αρχείο μου'
};
const KEY='beauty-challenge-v1';
let state={mode:'exam',sessions:{},history:[],notes:{}},notice='';

try{
  const v=JSON.parse(localStorage.getItem(KEY));
  if(v&&v.version===1&&v.sessions&&Array.isArray(v.history))state=v;
}catch{}
state.mode='exam';
state.notes=state.notes||{};

const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({
  '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
}[c]));

function save(){
  try{localStorage.setItem(KEY,JSON.stringify({...state,version:1}))}
  catch{notice='Η αποθήκευση δεν είναι διαθέσιμη. Η πρόοδος κρατιέται όσο μένει ανοιχτή η σελίδα.'}
}

function create(mode){
  const ids=mode==='fun'?fun.map((_,i)=>i):
    shuffle(bank.map((_,i)=>i)).slice(0,mode==='exam'?10:5);
  return{
    id:Date.now()+'-'+Math.random(),mode,ids,
    orders:ids.map(()=>mode==='fun'?[0,1,2,3]:shuffle([0,1,2,3])),
    answers:ids.map(()=>null),locked:ids.map(()=>false),
    pos:0,done:false,deadline:mode==='exam'?Date.now()+15*60*1000:null
  };
}

function finish(s){
  if(s.done)return;
  s.done=true;
  s.correct=s.mode==='fun'?null:s.answers.filter(x=>x===0).length;
  if(!state.history.some(h=>h.id===s.id)){
    state.history.unshift({
      id:s.id,mode:s.mode,correct:s.correct,total:s.ids.length,
      finishedAt:Date.now(),snapshot:JSON.parse(JSON.stringify(s))
    });
  }
  save();
}

function checkExpiry(){
  const s=state.sessions.exam;
  if(s&&!s.done&&Date.now()>=s.deadline){finish(s);return true}
  return false;
}

function progress(){
  const h=state.history,study=h.filter(x=>x.mode!=='fun');
  const total=study.reduce((n,x)=>n+x.total,0);
  const correct=study.reduce((n,x)=>n+x.correct,0);
  $('#rounds').textContent=h.length;
  $('#accuracy').textContent=total?Math.round(correct/total*100)+'%':'—';
  $('#recent').textContent=h.length?'Τελευταίο: '+names[h[0].mode]:'Δεν έχει ολοκληρωθεί ακόμη κάποιος γύρος.';
  $('#storage').textContent=notice||'Η πρόοδος αποθηκεύεται μόνο σε αυτόν τον browser.';
}

function clockText(s){
  const t=Math.max(0,Math.ceil((s.deadline-Date.now())/1000));
  return String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0');
}

function render(){
  checkExpiry();
  document.querySelectorAll('[data-mode]').forEach(b=>{
    b.setAttribute('aria-pressed',String(b.dataset.mode===state.mode));
  });
  $('#modeName').textContent=names[state.mode];
  progress();

  if(state.mode==='study'){study();return}
  if(state.mode==='archive'){archive();return}

  let s=state.sessions[state.mode];
  if(!s&&state.mode==='exam'){
    $('#stage').innerHTML=`
      <div class="intro">
        <span class="tag">Προετοιμασία ΕΟΠΠΕΠ</span>
        <h2>Εξάσκηση για την πιστοποίηση.</h2>
        <p>10 ερωτήσεις πολλαπλής επιλογής · 15 λεπτά.
        Μπορείς να αλλάζεις απαντήσεις και να μετακινείσαι
        ανάμεσα στις ερωτήσεις. Η διόρθωση εμφανίζεται στο τέλος.</p>
        <p class="muted">Δείγμα 16 πρωτότυπων ερωτήσεων·
        δεν είναι η πλήρης επίσημη τράπεζα.
        Ο χρόνος και η μορφή ανήκουν σε αυτό το quiz.</p>
        <button class="primary" data-action="start">Ξεκίνα την εξάσκηση →</button>
      </div>`;
    return;
  }
  if(!s){s=state.sessions[state.mode]=create(state.mode);save()}
  if(s.done){results(s);return}

  const i=s.pos,isFun=s.mode==='fun';
  const q=isFun?fun[s.ids[i]]:bank[s.ids[i]];
  const title=isFun?q[0]:q[1],opts=isFun?q[1]:q[2],checked=s.locked[i];

  $('#stage').innerHTML=`
    <div class="question-meta">
      <span class="tag">${isFun?'Χωρίς σωστό ή λάθος':q[0]}</span>
      <span>${i+1} / ${s.ids.length}
        ${s.mode==='exam'?`<span id="timer" class="timer" aria-label="Υπόλοιπος χρόνος">${clockText(s)}</span>`:''}
      </span>
    </div>
    <progress max="${s.ids.length}" value="${s.answers.filter(a=>a!==null).length}"
      aria-label="Απαντημένες ερωτήσεις"></progress>
    <h2 tabindex="-1" id="questionTitle">${title}</h2>
    <div class="answers">
      ${s.orders[i].map(a=>`
        <button class="answer ${s.answers[i]===a?'selected':''}
          ${checked&&a===0?'correct':''}
          ${checked&&s.answers[i]===a&&a!==0?'wrong':''}"
          data-answer="${a}" aria-pressed="${s.answers[i]===a}" ${checked?'disabled':''}>
          ${opts[a]}
          ${checked&&a===0?'<span>✓ Σωστό</span>':''}
          ${checked&&s.answers[i]===a&&a!==0?'<span>× Η επιλογή σου</span>':''}
        </button>`).join('')}
    </div>
    <div class="feedback" role="status">
      ${checked?`<strong>${s.answers[i]===0?'Σωστά!':'Μια χρήσιμη υπενθύμιση'}</strong><p>${q[3]}</p>`:
        isFun?'Διάλεξε αυτό που σου ταιριάζει σήμερα.':
        s.mode==='exam'?'Η διόρθωση θα εμφανιστεί μετά την ολοκλήρωση.':
        'Διάλεξε απάντηση και δες την εξήγηση.'}
    </div>
    <div class="actions">
      <button class="quiet" data-action="prev" ${i===0?'disabled':''}>← Πίσω</button>
      ${s.mode==='learn'&&!checked?
        `<button class="primary" data-action="check" ${s.answers[i]===null?'disabled':''}>Έλεγχος απάντησης</button>`:
        `<button class="primary" data-action="next" ${s.mode!=='exam'&&s.answers[i]===null?'disabled':''}>
          ${i===s.ids.length-1?(s.mode==='exam'?'Έλεγχος ολοκλήρωσης':'Δες το αποτέλεσμα'):'Συνέχεια →'}
        </button>`}
    </div>
    ${s.mode==='exam'?`
      <nav class="question-nav" aria-label="Μετακίνηση στις ερωτήσεις">
        ${s.ids.map((_,n)=>`
          <button data-jump="${n}" class="${s.answers[n]!==null?'answered':''}"
            aria-label="Ερώτηση ${n+1}${s.answers[n]!==null?', απαντημένη':''}"
            ${n===i?'aria-current="step"':''}>${n+1}</button>`).join('')}
      </nav>
      <p class="small muted">Ο χρόνος συνεχίζει αν αλλάξεις ενότητα ή κλείσεις τη σελίδα.</p>`:''}`;
}

function results(s){
  const isFun=s.mode==='fun';
  let title,desc;
  if(isFun){
    const counts=[0,0,0,0];
    s.answers.forEach(a=>{if(a!==null)counts[a]++});
    const max=Math.max(...counts),w=counts.indexOf(max);
    [title,desc]=counts.filter(x=>x===max).length>1?
      ['Λίγο απ’ όλα — και σου πάει!',
       'Το mood σου δεν χωράει σε ένα κουτάκι. Σήμερα συνδυάζεις διαφορετικές διαθέσεις και αυτό είναι μέρος του παιχνιδιού.']:
      moods[w];
  }else{
    title=s.correct+' / '+s.ids.length+' σωστές';
    desc=s.correct===s.ids.length?'Τα πήγες εξαιρετικά σε αυτόν τον γύρο.':
      'Δες τη διόρθωση και κράτησε όσα χρειάζονται επανάληψη.';
  }
  $('#stage').innerHTML=`
    <div class="result">
      <span class="result-flower" aria-hidden="true">✳</span>
      <span class="tag">${isFun?'Το σημερινό σου beauty mood':'Ο γύρος ολοκληρώθηκε'}</span>
      <h2 tabindex="-1" id="questionTitle">${title}</h2>
      <p>${desc}</p>
      ${isFun?'<p class="small muted">Μόνο για τον χαβαλέ — δεν είναι αξιολόγηση προσωπικότητας ή εμφάνισης.</p>':''}
      <button class="primary" data-action="restart">${isFun?'Παίξε ξανά':'Νέος γύρος'} ↗</button>
    </div>
    ${isFun?'':`
      <div class="review">
        <h3>Απαντήσεις και εξηγήσεις</h3>
        ${s.ids.map((id,i)=>{
          const q=bank[id],a=s.answers[i];
          return `<details>
            <summary><span class="mark">${a===0?'✓':'↗'}</span>${q[1]}</summary>
            <p>Η επιλογή σου: <strong>${a===null?'Δεν απαντήθηκε':q[2][a]}</strong></p>
            <p>Σωστή απάντηση: <strong>${q[2][0]}</strong></p>
            <p>${q[3]}</p>
          </details>`;
        }).join('')}
      </div>`}`;
}

function study(){
  $('#stage').innerHTML=`
    <span class="tag">Βιβλιοθήκη μελέτης</span>
    <h2>Διάβασε και κράτησε σημειώσεις.</h2>
    <p class="muted">Οι παρακάτω 16 κάρτες είναι το ενδεικτικό υλικό της εφαρμογής.
    Το πλήρες επίσημο αρχείο είναι διαθέσιμο από το κουμπί «Επίσημα θέματα».</p>
    ${bank.map((q,i)=>`
      <details class="study-card">
        <summary>${q[1]}</summary>
        <p><strong>${q[2][0]}</strong></p>
        <p>${q[3]}</p>
        <label for="note-${i}">Οι σημειώσεις μου</label>
        <textarea id="note-${i}" data-note="${i}" maxlength="5000" rows="3">${esc(state.notes[i])}</textarea>
        <small>Αυτόματη αποθήκευση σε αυτόν τον browser.</small>
      </details>`).join('')}`;
}

function archive(){
  $('#stage').innerHTML=`
    <span class="tag">Προσωπική πρόοδος</span>
    <h2>Οι προσπάθειές σου.</h2>
    <p class="muted">Άνοιξε μια προσπάθεια για να ξαναδείς τις απαντήσεις και τις εξηγήσεις.</p>
    ${!state.history.length?'<p class="empty">Δεν έχει ολοκληρωθεί ακόμη κάποιος γύρος.</p>':
      state.history.map((h,i)=>`
        <article class="history-card">
          <div>
            <strong>${names[h.mode]}</strong>
            <p>${h.finishedAt?new Date(h.finishedAt).toLocaleString('el-GR'):'Προσπάθεια προηγούμενης έκδοσης'}
            · ${h.mode==='fun'?'Ολοκληρώθηκε':h.correct+' / '+h.total+' σωστές'}</p>
          </div>
          ${h.snapshot?`<button class="quiet" data-record="${i}">Προβολή →</button>`:
            '<small>Η παλιά έκδοση κρατούσε μόνο το σκορ.</small>'}
        </article>`).join('')}`;
}

function focusQuestion(){
  const el=$('#questionTitle')||$('#stage h2');
  if(el){el.tabIndex=-1;el.focus({preventScroll:true})}
}

document.querySelectorAll('[data-mode]').forEach(b=>{
  b.addEventListener('click',()=>{
    state.mode=b.dataset.mode;
    save();render();
  });
});

document.querySelectorAll('[data-go]').forEach(b=>{
  b.addEventListener('click',()=>{
    state.mode=b.dataset.go;
    save();render();
    $('#stage').scrollIntoView({block:'start'});
    focusQuestion();
  });
});

$('#stage').addEventListener('input',e=>{
  if(e.target.matches('[data-note]')){
    state.notes[e.target.dataset.note]=e.target.value;
    save();
    $('#storage').textContent=notice||'Οι σημειώσεις αποθηκεύτηκαν στον browser.';
  }
});

$('#stage').addEventListener('click',e=>{
  const b=e.target.closest('button');
  if(!b||b.disabled)return;
  if(checkExpiry()){render();return}
  const action=b.dataset.action;

  if(b.hasAttribute('data-record')){
    const h=state.history[Number(b.dataset.record)];
    if(h&&h.snapshot){
      results(h.snapshot);
      $('#stage').insertAdjacentHTML('afterbegin',
        '<button class="quiet" data-action="archiveBack">← Πίσω στο αρχείο</button>');
      const restart=$('[data-action="restart"]');
      if(restart)restart.remove();
      focusQuestion();
    }
    return;
  }
  if(action==='archiveBack'){render();focusQuestion();return}

  if(action==='start'||action==='restart'){
    state.sessions[state.mode]=create(state.mode);
    save();render();focusQuestion();
    return;
  }

  const s=state.sessions[state.mode];
  if(!s||s.done)return;
  const i=s.pos;
  if(b.hasAttribute('data-answer')&&!s.locked[i]){
    s.answers[i]=Number(b.dataset.answer);
  }
  if(b.hasAttribute('data-jump'))s.pos=Number(b.dataset.jump);
  if(action==='prev')s.pos=Math.max(0,i-1);
  if(action==='check'&&s.answers[i]!==null)s.locked[i]=true;

  if(action==='next'){
    if((s.mode==='learn'&&!s.locked[i])||(s.mode==='fun'&&s.answers[i]===null))return;
    if(i<s.ids.length-1)s.pos++;
    else if(s.mode==='exam'){
      const n=s.answers.filter(x=>x===null).length;
      $('#confirmText').textContent=n?
        `Έχεις ${n} αναπάντητες ερωτήσεις. Θέλεις να ολοκληρώσεις; Θα μετρήσουν ως μη σωστές.`:
        'Έχεις απαντήσει σε όλες τις ερωτήσεις. Να εμφανιστεί η διόρθωση;';
      $('#confirm').showModal();
      return;
    }else finish(s);
  }

  save();render();
  if(action==='next'||action==='prev'||b.hasAttribute('data-jump')){
    focusQuestion();
  }else if(b.hasAttribute('data-answer')){
    const selected=$(`[data-answer="${b.dataset.answer}"]`);
    if(selected)selected.focus({preventScroll:true});
  }else if(action==='check'){
    const next=$('[data-action="next"]');
    if(next)next.focus({preventScroll:true});
  }
});

$('#cancelFinish').onclick=()=>$('#confirm').close();
$('#finishExam').onclick=()=>{
  const s=state.sessions.exam;
  if(s)finish(s);
  $('#confirm').close();
  render();focusQuestion();
};

setInterval(()=>{
  if(checkExpiry()){
    if($('#confirm').open)$('#confirm').close();
    render();
  }else{
    const s=state.sessions.exam;
    if(s&&!s.done&&$('#timer'))$('#timer').textContent=clockText(s);
  }
},1000);

render();