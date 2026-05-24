const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// 1. Manually read and parse .env.local
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
  console.error("Error: .env.local file not found in the workspace root!");
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    const key = match[1];
    let value = match[2] || '';
    // remove surrounding quotes if any
    if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
      value = value.substring(1, value.length - 1);
    }
    if (value.length > 0 && value.charAt(0) === "'" && value.charAt(value.length - 1) === "'") {
      value = value.substring(1, value.length - 1);
    }
    envVars[key] = value.trim();
  }
});

const supabaseUrl = envVars['NEXT_PUBLIC_SUPABASE_URL'];
const supabaseKey = envVars['NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'];

if (!supabaseUrl || !supabaseKey) {
  console.error("Error: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY is missing in .env.local!");
  process.exit(1);
}

console.log("Supabase URL:", supabaseUrl);
console.log("Connecting to Supabase...");

const supabase = createClient(supabaseUrl, supabaseKey);

// 2. Default data arrays to seed
const DEFAULT_SHOHIBUL = [
  "Een Sumarni binti Umar",
  "Rizal Nugraha bin Dwi  Priyono dan Keluarga",
  "Itang Dahyar bin Umar dan Keluarga",
  "Kory Anggraeni binti Itang",
  "Citra Maulidiah binti Bakhtiar",
  "Acep Roni bin Umar dan Keluarga",
  "Khusnul Yusran Taufik bin Acep",
  "Yadi Rusmaryadi bin Ewen Ruswandi",
  "Ade Maryati binti Umar",
  "Rezki Novansyah bin Sonny",
  "Vani Marindani binti Yadi",
  "Revandra adhyasta alkhalifi bin rezki novansyah",
  "Rasheza kamila zahra binti rezki novansyah",
  "Rindu Mayangsari Binti Titing Sukarti"
];

const DEFAULT_RECIPIENTS = [
  "BI APON",
  "BI ISOH",
  "CEP BALAN",
  "MANG AOM",
  "PIAH",
  "BI WATI",
  "CEU ODAH",
  "YAYAH ETI DEDI",
  "YAYAH PA TETEN",
  "CEU ROHAYA",
  "BI ANI",
  "PA IDI",
  "BU AI TIRAI",
  "NYAI",
  "DEDE ASIH",
  "UA TITI",
  "LILIS",
  "EVA/WOWO",
  "ACID",
  "IWAN",
  "EDI",
  "NENG SARAH",
  "CEU EMI",
  "UJANG",
  "DADANG",
  "ENJAH",
  "NENG JAJA",
  "BU IIS",
  "CEU IDA",
  "IMAS",
  "BI ILAH",
  "AJA",
  "IDA C. EUNCAS",
  "MANG ENTANG",
  "CEU ENGKON",
  "U. DOMRET",
  "UMAN",
  "NENG NAI",
  "ETET",
  "C. ENCAS",
  "MANG AMANG",
  "BI YATI",
  "ERNA",
  "BI EKAS",
  "ENENG",
  "ENUNG",
  "DEN WAWAN",
  "BI ISUR",
  "MANG OSO",
  "ABO",
  "UUH",
  "BU IMAS",
  "BU MIMAH",
  "BU IRAH",
  "PA H IMIN",
  "MANG YOYO",
  "RD RUHIYAT",
  "NENG CICI",
  "AI CEU TATI",
  "TINI",
  "IKEU",
  "OPIK",
  "CEU. NEUNEU",
  "UPI",
  "NENG ADIS",
  "BU HJ. ENTIN",
  "BU UKUN",
  "NENG RANI",
  "BU HJ TATIK",
  "MANG ADANG",
  "CEU ETI ODAH",
  "KIKI",
  "PA IDO",
  "TINAH",
  "BI ERAS",
  "YULI",
  "NINING",
  "SARI",
  "ENTI",
  "MANG KOMAR",
  "ENTUT",
  "CEU RODIAH",
  "CEU YUYU",
  "IDA",
  "KIKI/ATE",
  "NANI",
  "TATANG",
  "BU NENENG",
  "PA DADANG",
  "PA H. IDEN",
  "YADI K. ODAN",
  "MANAH",
  "CEU ATIK",
  "CUCU",
  "UCU",
  "NENG DERA",
  "YANI (M. SENA)",
  "NENG PRIDA",
  "BI EULIS",
  "NENG WULAN",
  "BU ATIN",
  "CEU ENOH",
  "DEWI",
  "NENG KINOY",
  "MA ONOH",
  "BI TIA",
  "MA DIAH",
  "AGUS",
  "PA AYEH",
  "JANG JETO",
  "DIDI",
  "MA II",
  "NENG API",
  "RITA",
  "H. ONENG",
  "UJANG",
  "H. ENCANG",
  "H. ENCENG",
  "EWANG",
  "MANG ANAN",
  "BI EMBOT",
  "NENENG",
  "PA ENDING",
  "BI EUNEUNG",
  "IFAN",
  "MAS WIWIN",
  "H. ALI",
  "ENDA",
  "UCU BEAS",
  "BI AAH",
  "JOIS",
  "GEUGEU",
  "MANG AMAN",
  "YATI",
  "NYAI CEU UNA",
  "LINA/ASEP",
  "UJANG (B. EPON)",
  "ONOH",
  "IMAS/EDI",
  "BI AI",
  "EUIS YUYU",
  "TATANG GAS",
  "EPI",
  "BI ADE",
  "AMOH",
  "BI OKOM",
  "BI TUTI",
  "BI ADE",
  "CEU SUMARNI",
  "CEU IYU",
  "BI WATI",
  "LUKI",
  "MANG ENDANG",
  "NANDANG",
  "MA DAIS",
  "ASKA",
  "MANG ENANG",
  "NENG DIAS",
  "BU AI",
  "ENDI",
  "BI OYOH",
  "UJANG DAWEU",
  "ANAH",
  "AMI",
  "AGUS CEU ENDE",
  "ALIT",
  "BU TITIN",
  "P. UJANG / SARAH",
  "ACANG",
  "BU WIWIN",
  "OOM",
  "BI DADAH",
  "NANO",
  "ADE BI ATIK",
  "BU PIAH",
  "DANDAN",
  "FERI",
  "BI KEUIS",
  "UTE",
  "DEDI",
  "IMAS YANTI",
  "HERU",
  "DADI / EEN",
  "AGUS BOBI",
  "NANDANG PANOONGAN",
  "MANG NANA CISARADAN"
];

async function seed() {
  try {
    // 1. Seed Config table
    console.log("\n1. Seeding qurban_config table...");
    const configPayload = {
      config_key: "default",
      event_title: "Kupon Daging Qurban",
      event_sub: "Eid Al-Adha 1447 H / 2026 M",
      event_date: "📅 Mei 2026",
      event_time: "🕒 12.00 WIB - Selesai",
      event_loc: "📍 Rumah Bapak Itang",
      shohibul_title: "SHOHIBUL KURBAN (KEL. BESAR H. UMAR SUMARYA 2026)",
      footer_text: "*Harap membawa kupon ini saat pengambilan daging. Jazakumullah Khair.",
      design: {
        primaryColor: "#2d5a27",
        secondaryColor: "#fdfbf7",
        textColor: "#111111",
        borderColor: "#2d5a27",
        borderStyle: "double",
        bannerColor: "#cbdcc8",
        bannerTextColor: "#2d5a27",
        accentGold: true
      },
      updated_at: new Date().toISOString()
    };

    const { error: configErr } = await supabase
      .from("qurban_config")
      .upsert(configPayload, { onConflict: "config_key" });

    if (configErr) {
      throw new Error("Failed to seed qurban_config: " + configErr.message);
    }
    console.log("✓ successfully seeded qurban_config!");

    // 2. Seed Recipients
    console.log("\n2. Seeding recipients table...");
    // Delete existing recipients
    const { error: delRecErr } = await supabase.from("recipients").delete().neq("id", -1);
    if (delRecErr) {
      console.warn("Warning deleting existing recipients:", delRecErr.message);
    }

    const recipientsRows = DEFAULT_RECIPIENTS.map(name => ({ name }));
    const { error: recErr } = await supabase.from("recipients").insert(recipientsRows);
    if (recErr) {
      throw new Error("Failed to seed recipients: " + recErr.message);
    }
    console.log(`✓ successfully seeded ${DEFAULT_RECIPIENTS.length} recipients!`);

    // 3. Seed Shohibul
    console.log("\n3. Seeding shohibul table...");
    // Delete existing shohibul
    const { error: delShohErr } = await supabase.from("shohibul").delete().neq("id", -1);
    if (delShohErr) {
      console.warn("Warning deleting existing shohibul:", delShohErr.message);
    }

    const shohibulRows = DEFAULT_SHOHIBUL.map(name => ({ name }));
    const { error: shohErr } = await supabase.from("shohibul").insert(shohibulRows);
    if (shohErr) {
      throw new Error("Failed to seed shohibul: " + shohErr.message);
    }
    console.log(`✓ successfully seeded ${DEFAULT_SHOHIBUL.length} shohibul!`);

    console.log("\n🎉 ALL DATA SEEDED SUCCESSFULLY TO SUPABASE CLOUD DATABASE!");
  } catch (err) {
    console.error("\n❌ Seeding failed:", err.message);
  }
}

seed();
