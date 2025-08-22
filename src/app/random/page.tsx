"use client";

import { useEffect, useState } from "react";
import Te from "./te";
import Soal from "./soal";

const Test = () => {
  const [n, setN] = useState<any>(0);
  const [ch, setCh] = useState(0);
  const [ok, setOk] = useState<number[]>([]);
  const [end, setEnd] = useState(false);
  const [spinner, setSpinner] = useState(true);

  function getRndInteger(min: number, max: number) {
    let nu = Math.floor(Math.random() * (max - min + 1)) + min;
    let po = ok.find((e: any) => {
      return e === nu;
    });
    while (po) {
      if (ok.length === 89) {
        return setEnd(true);
      }
      nu = Math.floor(Math.random() * (max - min + 1)) + min;
      po = ok.find((e: any) => {
        return e === nu;
      });
    }
    setOk([...ok, nu]);
    return nu;
  }

  useEffect(() => {
    console.log(ch);
    const test = getRndInteger(1, 89);
    setN(test);
  }, [ch]);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 1000);
  }, []);

  if (end) {
    return (
      <>
        <div
          className="container text-center h-screen flex flex-col gap-8 justify-center items-center 
                      text-white font-semibold "
        >
          <div className=" lg:text-3xl text-xl">
            همه سوالا رو مرور کردی، اگه میخوای از اول مرور کنی روی دکمه زیر بزن
          </div>
          <button
            onClick={() => {
              setEnd(false);
              setCh(0);
              setOk([]);
            }}
            className=" bg-rose-700 text-slate-200 px-3 py-1 rounded-lg lg:text-2xl text-xl focus:bg-slate-600 hover:bg-slate-600
                            transition-all duration-100 cursor-pointer"
          >
            شروع مجدد
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={`container text-center`}>
        {spinner && (
          <div role="status" className="flex justify-center items-center h-screen">
            <svg
              aria-hidden="true"
              className="w-15 h-15 text-slate-400 animate-spin fill-rose-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <div>
          <Te ch={ch} id={1} n={n} setCh={setCh}>
            <Soal id={1} p="ب">
              <div id="soal1">
                <span>۱- شبنم خونی (Auspitz sign) از علائم اختصاصی کدام بیماری پوستی میباشد؟</span>
                <span>پمفیگوس </span>
                <span>پسوریازیس</span>
                <span>دمل </span>
                <span>درماتیت</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={2} n={n} setCh={setCh}>
            <Soal id={2} p="ج">
              <div id="soal2">
                <span>۲- شایع&zwnj;ترین نوع پسوریازیس کدام است؟</span>
                <span>پسوریازیس معکوس </span>
                <span>پسوریازیس قطره&zwnj;ای</span>
                <span>پسوریازیس پلاکی </span>
                <span>پسوریازیس اریترودرمی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={3} n={n} setCh={setCh}>
            <Soal id={3} p="ب">
              <div id="soal3">
                <span>۳- کدام مورد مشخصه&zwnj;ی پسوریازیس پلاکی می&zwnj;باشد؟</span>
                <span>بثورات وزیکول&zwnj;دار </span>
                <span>ضایعات قرمز با پوسته&zwnj;ریزی نقره&zwnj;ای</span>
                <span>لکه&zwnj;های پورپورایی </span>
                <span>تاول&zwnj;های چرکی منتشر</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={4} n={n} setCh={setCh}>
            <Soal id={4} p="ج">
              <div id="soal4">
                <span>
                  ۴- در ارزیابی ناخن بیمار مبتلا به پسوریازیس، کدام یافته شایع&zwnj;تر است؟
                </span>
                <span>آبی شدن بستر ناخن </span>
                <span>خونریزی زیر ناخن</span>
                <span>pitting (فرورفتگی نقطه&zwnj;ای) </span>
                <span>رشد بیش&zwnj;ازحد کوتیکول</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={5} n={n} setCh={setCh}>
            <Soal id={5} p="د">
              <div id="soal5">
                <span>
                  ۵- کدام دارو از دسته درمان&zwnj;های سیستمیک در موارد شدید پسوریازیس است؟
                </span>
                <span>ایبوپروفن </span>
                <span>آموکسی&zwnj;سیلین</span>
                <span>آزیترومایسین </span>
                <span>متوتروکسات</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={6} n={n} setCh={setCh}>
            <Soal id={6} p="ج">
              <div id="soal6">
                <span>۶- از مهم&zwnj;ترین عواملی که می&zwnj;تواند باعث تشدید پسوریازیس شود؟</span>
                <span>نور خورشید </span>
                <span>فعالیت بدنی پایین</span>
                <span>استرس&zwnj;ها </span>
                <span>خواب ناکافی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={7} n={n} setCh={setCh}>
            <Soal id={7} p="ج">
              <div id="soal7">
                <span>
                  ۷- بهترین پاسخ به بیماری که نگران مسری بودن پسوریازیس می&zwnj;باشد چیست؟
                </span>
                <span>تماس پوستی آن را منتقل می&zwnj;کند. </span>
                <span>فقط از طریق خون منتقل می&zwnj;شود.</span>
                <span>این بیماری خودایمنی بوده و مسری نمی&zwnj;باشد. </span>
                <span>اگر زخم شود مسری می&zwnj;شود.</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={8} n={n} setCh={setCh}>
            <Soal id={8} p="ب">
              <div id="soal8">
                <span>۸- در پسوریازیس، پدیده&zwnj;ی "کوبنر" به چه معناست؟</span>
                <span>ایجاد زخم در محل خارش </span>
                <span>بروز ضایعه پسوریازیس در محل آسیب یا خراش قبلی پوست</span>
                <span>پوسته&zwnj;ریزی ضایعه در محل مفصل </span>
                <span>افتادن ناگهانی ناخن</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={9} n={n} setCh={setCh}>
            <Soal id={9} p="ب">
              <div id="soal9">
                <span>۹- کدام یک از موارد زیر جزو درمان&zwnj;های موضعی رایج در پسوریازیس است؟</span>
                <span>آلوپورینول </span>
                <span>ویتامین D (کلسيپوتریول)</span>
                <span>متوترکسات خوراکی </span>
                <span>اشعه تراپی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={10} n={n} setCh={setCh}>
            <Soal id={10} p="ج">
              <div id="soal10">
                <span>۱۰- در مراقبت از پوست بیمار مبتلا به پسوریازیس، کدام گزینه میباشد؟</span>
                <span>استفاده صابون&zwnj;های ضدعفونی&zwnj;کننده </span>
                <span>سرد نگه&zwnj;داشتن پوست ناحیه</span>
                <span>استفاده از گلیسیرین قبل از برداشتن پلاک&zwnj;ها </span>
                <span>شامپوهای ضدقارچ قوی برای پسوریازیس سر</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={11} n={n} setCh={setCh}>
            <Soal id={11} p="الف">
              <div id="soal11">
                <span>۱۱- اولین ضایعات بیماری پمفیگوس در کجا تشکیل میشود؟</span>
                <span>در دهان </span>
                <span>در پوست گردن</span>
                <span>در دست&zwnj;ها </span>
                <span>در صورت</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={12} n={n} setCh={setCh}>
            <Soal id={12} p="د">
              <div id="soal12">
                <span>۱۲- اکانتولیز چیست؟</span>
                <span>از بین رفتن بافت همبند </span>
                <span>سر خوردن بافت&zwnj;های اپیدرم روی هم</span>
                <span>جمع شدن مایع بین بافت های اپیدرم </span>
                <span>همه موارد</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={13} n={n} setCh={setCh}>
            <Soal id={13} p="الف">
              <div id="soal13">
                <span>
                  ۱۳- کشیدن پوست فرد و .......... و ........... را علامت نیکولسکی می&zwnj;نامند.
                </span>
                <span>جدا شدن لایه پوست - ایجاد تاول </span>
                <span>هایپرپیگمانتاسیون - ایجاد تاول</span>
                <span>جدا شدن لایه پوست - هایپرپیگمانتاسیون </span>
                <span>هایپرپیگمانتاسیون - تجمع مایع و ادم</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={14} n={n} setCh={setCh}>
            <Soal id={14} p="ج">
              <div id="soal14">
                <span>۱۴- در پمفیگوس شدید، اولین اقدام دارویی چیست؟</span>
                <span>داروی سرکوب کننده سیستم ایمنی </span>
                <span>ترکیبات طلا</span>
                <span>کورتیکواستروییدتراپی سیستمیک با دوز بالا </span>
                <span>همه موارد</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={15} n={n} setCh={setCh}>
            <Soal id={15} p="ج">
              <div id="soal15">
                <span>۱۵- شایع ترین تومور خوش خیم پوست چیست؟</span>
                <span>میخچه </span>
                <span>کالوس (پینه)</span>
                <span>کراتوز های سبورئیک </span>
                <span>کراتوز های اکتینیک</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={16} n={n} setCh={setCh}>
            <Soal id={16} p="ب">
              <div id="soal16">
                <span>۱۶- راه افتراق کراتوز های اکتینیک از سبورئیک چیست ؟</span>
                <span>کراتوز اکتینیک به رنگ قرمز برنزه و بصورت زگیل های چرب روی تنه میباشد.</span>
                <span>
                  کراتوز اکتینیک به رنگ قرمز متمایل به قهوه ای تا خاکستری گرد و نامنظم و خشک و پوسته
                  مانند می&zwnj;باشد.
                </span>
                <span>
                  کراتوز اکتینیک به رنگ قرمز متمایل به قهوه ای تا خاکستری گرد و منظم و چرب
                  می&zwnj;باشد.
                </span>
                <span>
                  کراتوز اکتینیک بیشتر در افراد مسن و چشم قهوه ای دیده میشود اما کراتوز سبورئیک در
                  سفید پوستان بور
                </span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={17} n={n} setCh={setCh}>
            <Soal id={17} p="ب">
              <div id="soal17">
                <span>
                  ۱۷- خال&zwnj;های پیگمانته معمولاً به چه دلیل ایجاد و در چه صورت بدخیم محسوب
                  میشوند؟
                </span>
                <span>به دلیل افزایش تعداد کراتینوسیت&zwnj;ها - قطری بزرگ تر از ۴ میلی متر</span>
                <span>به دلیل افزایش تعداد ملانوسیت&zwnj;ها - قطری بزرگ تر از ۶ میلی متر</span>
                <span>به دلیل افزایش مرکل ها- ریزش موی روی خال</span>
                <span>به دلیل افزایش سلول های لانگرهانس- رنگ ثابت خال</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={18} n={n} setCh={setCh}>
            <Soal id={18} p="الف">
              <div id="soal18">
                <span>
                  ۱۸- کدام یک از ضایعات زیر بیشترین احتمال تبدیل شدن به ضایعات بدخیم را دارد؟
                </span>
                <span>لوکوپلاکیا </span>
                <span>کراتوز های سبورئیک</span>
                <span>کالوس </span>
                <span>زگیل ها</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={19} n={n} setCh={setCh}>
            <Soal id={19} p="ب">
              <div id="soal19">
                <span>
                  ۱۹- کدام نوع انتشار در سطح اپیدرم است و به درمان پاسخ بهتری می&zwnj;دهد؟
                </span>
                <span>شعاعی </span>
                <span>عمودی</span>
                <span>مورب </span>
                <span>هیچ کدام</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={20} n={n} setCh={setCh}>
            <Soal id={20} p="د">
              <div id="soal20">
                <span>
                  ۲۰- ملانوم، از طریق جریان خون به کدام اندام&zwnj;ها متاستاز می&zwnj;دهد؟
                </span>
                <span>کبد </span>
                <span>ریه</span>
                <span>استخوان </span>
                <span>همه موارد</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={21} n={n} setCh={setCh}>
            <Soal id={21} p="ب">
              <div id="soal21">
                <span>۲۱- مهم ترین دلیل scc چیست؟</span>
                <span>اختلال ژنتیکی </span>
                <span>نور آفتاب</span>
                <span>سابقه ی ابتلا به سرطان پوست </span>
                <span>ضعف سیستم ایمنی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={22} n={n} setCh={setCh}>
            <Soal id={22} p="الف">
              <div id="soal22">
                <span>۲۲- شایعترین تومور بدخیم پوست کدام است؟</span>
                <span>BCC </span>
                <span>SCC</span>
                <span>ملانوما </span>
                <span>سارکوما</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={23} n={n} setCh={setCh}>
            <Soal id={23} p="د">
              <div id="soal23">
                <span>۲۳- مهم ترین کلید تشخیصی BCC چیست؟</span>
                <span>خم های مزمن با حاشیه ی مرواریدی </span>
                <span>خوردگی بافت های اطراف محل ضایعه</span>
                <span>عروق تلانژکتاتیک در سطح ضایعه </span>
                <span>گزینه الف و ج</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={24} n={n} setCh={setCh}>
            <Soal id={24} p="ج">
              <div id="soal24">
                <span>
                  ۲۴- در ضایعات متعدد و ضایعات با حدود نامشخص SCC از چه روش درمانی استفاده میکنیم؟
                </span>
                <span>الکتروسرجری </span>
                <span>شیمی درمانی</span>
                <span>رادیوتراپی </span>
                <span>کورتاژ ضایعات</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={25} n={n} setCh={setCh}>
            <Soal id={25} p="د">
              <div id="soal25">
                <span>
                  ۲۵- در درمان ملاسما یا ماسک حاملگی پماد جایگزین هیدروکوئینون در مواقعی که فرد
                  حساسیت داشته باشد چیست؟
                </span>
                <span>نئودرم </span>
                <span>لایسل</span>
                <span>ترتینوئین </span>
                <span>درمالیفت</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={26} n={n} setCh={setCh}>
            <Soal id={26} p="ب">
              <div id="soal26">
                <span>
                  ۲۶- کدام یک از اختلالات پیگمانتاسیون با یک اختلال اتوایمیون میتواند همراه باشد؟
                </span>
                <span>ملاسما </span>
                <span>ویتیلیگو</span>
                <span>فرکلی </span>
                <span>لنتیگو</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={27} n={n} setCh={setCh}>
            <Soal id={27} p="ب">
              <div id="soal27">
                <span>۲۷- لکه های مارال پترن در ملاسما کدام نواحی را درگیر میکنند؟</span>
                <span>پیشانی و کف سر </span>
                <span>گونه ها و پل بینی</span>
                <span>دوقسمت فک تحتانی </span>
                <span>خط چشم تا گوش</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={28} n={n} setCh={setCh}>
            <Soal id={28} p="ب">
              <div id="soal28">
                <span>۲۸- در فرکلی چه تغیییرات پوستی رخ میدهد؟</span>
                <span>افزایش فعالیت ملانوسیت ها با تکثیر ملانین </span>
                <span>افزایش فعالیت ملانوسیت ها با تولید ملانین</span>
                <span>تخریب ملانوسیت ها به صورت موضعی </span>
                <span>کاهش فعالیت ملانوسیت ها و کاهش ملانین</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={29} n={n} setCh={setCh}>
            <Soal id={29} p="الف">
              <div id="soal29">
                <span>۲۹- ملاسما یا ماسک حاملگی میتواند ناشی از مصرف کدام دارو ایجاد میشود؟</span>
                <span>داروهای ocp </span>
                <span>داروهای Nsaid</span>
                <span>داروهای ضد افسردگی </span>
                <span>آنتی بیوتیک&zwnj;ها</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={30} n={n} setCh={setCh}>
            <Soal id={30} p="ب">
              <div id="soal30">
                <span>۳۰- کدام گزینه جز آسیب های متوسط در سوختگی محسوب می شوند؟</span>
                <span>سوختگی های همراه با تروما، دیابت یا ایدز</span>
                <span>سوختگی های چشم، گوش، دست و پاها که اختلال در عملکرد ایجاد نمی کنند</span>
                <span>سوختگی های چشم، گوش، دست و پاها که اختلال در عملکر ایجاد می کنند</span>
                <span>سوختگی های الکتریکی بیشتر از هزار ولتاژ</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={31} n={n} setCh={setCh}>
            <Soal id={31} p="ج">
              <div id="soal31">
                <span>
                  ۳۱- کدام موارد از تغییرات پاتوفیزیولوژیک در مرحله هیپوولمیک سوختگی می باشد؟
                </span>
                <span>تاکی کاردی_هایپو کالمی_ پلی اوری </span>
                <span>برادی کاردی_هایپر کالمی_ اولیگوری</span>
                <span>تاکی کاردی_ هایپر کالمی_ اولیگوری </span>
                <span>برادی کاردی_ هایپو کالمی_ پلی اوری</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={32} n={n} setCh={setCh}>
            <Soal id={32} p="ب">
              <div id="soal32">
                <span>۳۲- به ترتیب از مرکز به خارج چ نواحی را در زخم سوختگی مشاهده میکنیم؟</span>
                <span>ناحیه استاز_ ناحیه انعقادی_ ناحیه هایپرمی </span>
                <span>ناحیه انعقادی_ ناحیه استاز_ناحیه هایپرمی</span>
                <span>ناحیه انعقادی_ ناحیه هایپرمی_ ناحیه استاز </span>
                <span>ناحیه استاز_ ناحیه هایپرمی_ ناحیه استاز</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={33} n={n} setCh={setCh}>
            <Soal id={33} p="ج">
              <div id="soal33">
                <span>۳۳- درسوختگی الکتریکی وسعت ضایعه به کدام مورد بستگی دارد؟</span>
                <span>غلظت مواد </span>
                <span>ضخامت پوست</span>
                <span>مدت تماس </span>
                <span>میزان بافت تحت تماس</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={34} n={n} setCh={setCh}>
            <Soal id={34} p="ب">
              <div id="soal34">
                <span>۳۴- در کدام یک از درجه های سوختگی تاول وجود ندارد؟</span>
                <span>درجه دوم </span>
                <span>درجه اول</span>
                <span>درجه چهارم </span>
                <span>درجه سوم</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={35} n={n} setCh={setCh}>
            <Soal id={35} p="الف">
              <div id="soal35">
                <span>۳۵- عروق سوخته در کدام درجه سوختگی مشاهده میشود؟</span>
                <span>درجه سوم </span>
                <span>درجه دوم</span>
                <span>درجه چهارم </span>
                <span>درجه اول</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={36} n={n} setCh={setCh}>
            <Soal id={36} p="ب">
              <div id="soal36">
                <span>۳۶- مهمترین قانون تعیین وسعت سوختگی کدام است؟</span>
                <span>قانون کف ها </span>
                <span>قانون نه ها</span>
                <span>قانون لاندوبرودر </span>
                <span>هیچکدام</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={37} n={n} setCh={setCh}>
            <Soal id={37} p="ج">
              <div id="soal37">
                <span>
                  ۳۷- کدام&zwnj; یک از موارد زیر به&zwnj;تنهایی معیار بستری شدن بیمار دچار سوختگی در
                  بیمارستان محسوب می&zwnj;شود؟
                </span>
                <span>سوختگی درجه دو به میزان ۵٪ </span>
                <span>سوختگی درجه سه به میزان ۳٪</span>
                <span>سوختگی درجه سه به میزان ۶٪ </span>
                <span>سوختگی درجه دو در ناحیه تنه به میزان ۱۰٪</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={38} n={n} setCh={setCh}>
            <Soal id={38} p="ب">
              <div id="soal38">
                <span>
                  ۳۸- در بیماران با سوختگی صورت، کدام&zwnj;یک از موارد زیر می&zwnj;تواند
                  نشان&zwnj;دهنده نیاز فوری به اینتوباسیون باشد؟
                </span>
                <span>تعداد تنفس ۱۶ در دقیقه </span>
                <span>صدای نازک و دورگه</span>
                <span>کاهش اشتها </span>
                <span>تعریق زیاد</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={39} n={n} setCh={setCh}>
            <Soal id={39} p="ج">
              <div id="soal39">
                <span>
                  ۳۹- در سوختگی ناحیه مفصل، کدام&zwnj;یک از اقدامات زیر به عنوان بخشی از درمان
                  سرپایی توصیه می&zwnj;شود؟
                </span>
                <span>ثابت نگه&zwnj;داشتن کامل مفصل برای جلوگیری از درد </span>
                <span>استفاده از یخ برای کاهش التهاب</span>
                <span>انجام ورزش&zwnj;های دامنه حرکتی (ROM) </span>
                <span>بستن مفصل با باند کشی سفت</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={40} n={n} setCh={setCh}>
            <Soal id={40} p="ج">
              <div id="soal40">
                <span>
                  ۴۰- بیمار ۳۷ساله با در صد سوختگی ۶۵درصد و با وزن ۷۰ کیلو گرم به اورژانس منتقل شده
                  است در ۲۴ساعت اول طبق فرمول پارکلند چه مقدار مایع &zwnj; و چه نوع مایع نیاز دارد؟
                </span>
                <span>۱۴۵۰۰cc رینگر </span>
                <span>۱۳۰۰۰cc رینگر لاکتات و کلوئید</span>
                <span>۱۴۰۰۰cc رینگر لاکتات </span>
                <span>۱۴۰۰۰cc رینگر لاکتات و کلوئید</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={41} n={n} setCh={setCh}>
            <Soal id={41} p="ب">
              <div id="soal41">
                <span>
                  ۴۱- کدام روش هیدروتراپی برای بیماران با وضعت همودینامیکی ناپایدار ممنوعیت دارد؟
                </span>
                <span>اسپری کردن آب </span>
                <span>هیدروتراپی در وان</span>
                <span>شستشوی ملایم با آب و صابون </span>
                <span>استفاده از سرم فیزیولوژی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={42} n={n} setCh={setCh}>
            <Soal id={42} p="ج">
              <div id="soal42">
                <span>۴۲- یکی از معایب پانسمان باز در مقایسه با پانسمان بسته چیست؟</span>
                <span>مشاهده بهتر زخم </span>
                <span>تسهیل در مراقبت از زخم</span>
                <span>احتمال هایپوترم </span>
                <span>نیاز به تجهیزات کمتر</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={43} n={n} setCh={setCh}>
            <Soal id={43} p="ب">
              <div id="soal43">
                <span>۴۳- از معایب داروی سیلور کدام است؟</span>
                <span>عدم تعادل الکترولیتی </span>
                <span>ایجاد ظاهری خاکستری و لزج</span>
                <span>فعالیت ضد میکروبی گسترده </span>
                <span>استفاده آسان</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={44} n={n} setCh={setCh}>
            <Soal id={44} p="الف">
              <div id="soal44">
                <span>۴۴- مراقب پرستاری مهم در هنگام استفاده از نیترات نقره کدام است ؟</span>
                <span>مرطوب کردن پانسمان </span>
                <span>استفاده از آنتی بیوتیک</span>
                <span>رنگی نشدن پانسمان </span>
                <span>کنترل درد</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={45} n={n} setCh={setCh}>
            <Soal id={45} p="ج">
              <div id="soal45">
                <span>۴۵- کدام گزینه از اهداف اصلی پیوند پوست در بیماران دچار سوختگی نیست؟</span>
                <span>بستن ناحیه باز زخم </span>
                <span>جلوگیری از عفونت</span>
                <span>پیشگیری از درد حاد </span>
                <span>بازگرداندن عملکرد و ظاهر ناحیه</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={46} n={n} setCh={setCh}>
            <Soal id={46} p="ج">
              <div id="soal46">
                <span>
                  ۴۶- در مراقبت&zwnj;های پرستاری پس از پیوند پوست کدام یک از اقدامات زیر بیشترین نقش
                  را در پیشگیری از جابجایی گرافت دارد؟
                </span>
                <span>تجویز آنتی بیوتیک </span>
                <span>کنترل سطح قند خون</span>
                <span>تثبیت گرافت با بانداژ و آتل </span>
                <span>افزایش پروتئین در رژیم غذایی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={47} n={n} setCh={setCh}>
            <Soal id={47} p="د">
              <div id="soal47">
                <span>
                  ۴۷- یکی از مهمترین اهداف استفاده از لباس&zwnj;های فشاری در بیماران پس از پیوند
                  پوست چیست؟
                </span>
                <span>کاهش درد و تورم </span>
                <span>پیشگیری از انقباض مفاصل</span>
                <span>جلوگیری از عفونت </span>
                <span>کاهش تشکیل اسکار و بدشکلی پوست</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={48} n={n} setCh={setCh}>
            <Soal id={48} p="ج">
              <div id="soal48">
                <span>
                  ۴۸- در صورت مشاهده پوست پیوندی با رنگ بنفش و سرد بودن ناحیه پرستار باید کدام اقدام
                  را در اولویت قرار دهد؟
                </span>
                <span>تجویز مسکن </span>
                <span>بالا نگه داشتن عضو</span>
                <span>اطلاع فوری به جراح </span>
                <span>تعویض پانسمان با تکنیک استریل</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={49} n={n} setCh={setCh}>
            <Soal id={49} p="الف">
              <div id="soal49">
                <span>۴۹- در مورد گرافت پوست مش شده (mesh graft)کدام عبارت صحیح تر است؟</span>
                <span>سطح بیشتری را پوشش میدهد اما زیبایی کمتری دارد.</span>
                <span>نیاز به مراقبت خاصی ندارد و زودتر ترمیم می&zwnj;شود.</span>
                <span>فقط در نواحی دارای حرکت زیاد استفاده می&zwnj;شود.</span>
                <span>به دلیل حفره ها احتمال عفونت آن کمتر از سایر گرافت هاست.</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={50} n={n} setCh={setCh}>
            <Soal id={50} p="ج">
              <div id="soal50">
                <span>
                  ۵۰- کدام یک از موارد زیر بیشتر با ترشحات چشمی فراوان، خارش و قرمزی چشم (بدون
                  درگیری اولیه پلک) همراه است؟
                </span>
                <span>بلفاریت قدامی </span>
                <span>شالازیون</span>
                <span>کنژنکتیویت </span>
                <span>بلفاریت خلفی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={51} n={n} setCh={setCh}>
            <Soal id={51} p="ج">
              <div id="soal51">
                <span>۵۱- گل مژه (Sty) به التهاب کدام غدد در لبه پلک گفته می&zwnj;شود؟</span>
                <span>غدد اشکی </span>
                <span>غدد میبومین</span>
                <span>غدد زایس و مول </span>
                <span>غدد عروقی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={52} n={n} setCh={setCh}>
            <Soal id={52} p="ب">
              <div id="soal52">
                <span>۵۲- قسمت قدامی حاشیه پلک، کدام غدد را شامل می&zwnj;شود؟</span>
                <span>میبومین </span>
                <span>زایس و مول</span>
                <span>اشکی </span>
                <span>عروقی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={53} n={n} setCh={setCh}>
            <Soal id={53} p="ب">
              <div id="soal53">
                <span>۵۳- عامل اصلی ایجاد گل مژه معمولاً کدام میکروارگانیسم است؟</span>
                <span>استرپتوکوک </span>
                <span>استافیلوکوک</span>
                <span>ویروس&zwnj;ها </span>
                <span>قارچ&zwnj;ها</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={54} n={n} setCh={setCh}>
            <Soal id={54} p="ب">
              <div id="soal54">
                <span>۵۴- گل مژه خارجی، التهاب کدام غدد است و حرکت آن به کدام سمت است؟</span>
                <span>میبومین، به سمت داخل </span>
                <span>زایس و مول، به سمت پوست</span>
                <span>میبومین، به سمت پوست </span>
                <span>زایس و مول، به سمت داخل</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={55} n={n} setCh={setCh}>
            <Soal id={55} p="ج">
              <div id="soal55">
                <span>۵۵- شالازیون (Chalazion) به کدام نوع التهاب مربوط می&zwnj;شود؟</span>
                <span>گل مژه خارجی </span>
                <span>عفونت حاد غدد زایس</span>
                <span>التهاب مزمن غیرچرکی غدد میبومین </span>
                <span>عفونت حاد غدد مول</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={56} n={n} setCh={setCh}>
            <Soal id={56} p="ج">
              <div id="soal56">
                <span>۵۶- کدام یک از علائم زیر در گل مژه مشاهده نمی&zwnj;شود؟</span>
                <span>قرمزی </span>
                <span>تورم</span>
                <span>کاهش بینایی ناگهانی </span>
                <span>درد</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={57} n={n} setCh={setCh}>
            <Soal id={57} p="ب">
              <div id="soal57">
                <span>۵۷- درمان اولیه و معمول گل مژه، کدام گزینه است؟</span>
                <span>انسزیون ناحیه </span>
                <span>کمپرس گرم و مرطوب</span>
                <span>آنتی&zwnj;بیوتیک تزریقی </span>
                <span>جراحی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={58} n={n} setCh={setCh}>
            <Soal id={58} p="ج">
              <div id="soal58">
                <span>۵۸- اگر شالازیون بزرگ شود، چه عارضه&zwnj;ای ممکن است ایجاد کند؟</span>
                <span>گلوکوم </span>
                <span>آب مروارید</span>
                <span>فشار به قرنیه و استیگماتیسم </span>
                <span>خشکی چشم</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={59} n={n} setCh={setCh}>
            <Soal id={59} p="ب">
              <div id="soal59">
                <span>
                  ۵۹- در شالازیون&zwnj;های غیرعفونی، کدام روش درمانی ممکن است استفاده شود؟
                </span>
                <span>آنتی&zwnj;بیوتیک خوراکی </span>
                <span>تزریق داخل ضایعه&zwnj;ای کورتیکواستروئیدها</span>
                <span>جراحی فوری </span>
                <span>کمپرس سرد</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={60} n={n} setCh={setCh}>
            <Soal id={60} p="د">
              <div id="soal60">
                <span>۶۰- تراخم نوعی بیماری ......... و بسیار مسری ملتحمه و ....... است.</span>
                <span>عفونی - عدسی </span>
                <span>اتوایمیون - قرنیه</span>
                <span>اتوایمیون - صلبیه </span>
                <span>عفونی &ndash; قرنیه</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={61} n={n} setCh={setCh}>
            <Soal id={61} p="ج">
              <div id="soal61">
                <span>
                  ۶۱- رویش نابجای مژه، زخم و پارگی قرنیه از علائم کدام یک از بیماری های التهابی چشم
                  میباشد؟
                </span>
                <span>بلفاریت حاد </span>
                <span>یووئیت</span>
                <span>تراخم </span>
                <span>گلوکوم</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={62} n={n} setCh={setCh}>
            <Soal id={62} p="ب">
              <div id="soal62">
                <span>۶۲- عامل بیماری تراخم ........ می&zwnj;باشد.</span>
                <span>کلامیدیا پنومونی </span>
                <span>کلامیدیا تراکوماتیس</span>
                <span>کلامیدیا پسی&zwnj;تاسی </span>
                <span>کلامیدیا آبورتوس</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={63} n={n} setCh={setCh}>
            <Soal id={63} p="ج">
              <div id="soal63">
                <span>
                  ۶۳- چسبندگی ناشی از یووئیت چه خلفی باشد چه قدامی، باعث ........ می&zwnj;شود.
                </span>
                <span>اختلال در خروج مایع زلالیه </span>
                <span>کاهش دید</span>
                <span>فتوفوبی و اشک ریزش </span>
                <span>شل شدن چشم</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={64} n={n} setCh={setCh}>
            <Soal id={64} p="د">
              <div id="soal64">
                <span>
                  ۶۴- از شایع ترین بیماری هایی که در افراد بی بضاعت شیوع دارد، در کدام یک از موارد
                  زیر می&zwnj;باشد؟
                </span>
                <span>بلفاریت </span>
                <span>تراخم</span>
                <span>یووئیت </span>
                <span>گل&zwnj;مژه</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={65} n={n} setCh={setCh}>
            <Soal id={65} p="الف">
              <div id="soal65">
                <span>
                  ۶۵- بیماری به علت مسدود شدن غدد چربی، برجستگی روی پلک&zwnj;اش مشاهده می&zwnj;شود.
                  این عارضه ناشی از چیست؟ و نتیجه کدام یک از بیماری های التهابی چشم می&zwnj;باشد؟
                </span>
                <span>شالازیون - بلفاریت اولسراتیو </span>
                <span>شالازیون - بلفاریت سبورئیک</span>
                <span>اکتروپیون - بلفاریت اولسراتیو </span>
                <span>اکتروپیون - بلفاریت سبورئیک</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={66} n={n} setCh={setCh}>
            <Soal id={66} p="الف">
              <div id="soal66">
                <span>۶۶- به عفونت مشیمیه ناشی از یووئیت ....... می&zwnj;گویند.</span>
                <span>کوروئیدیت </span>
                <span>سیکلیت</span>
                <span>آیریت </span>
                <span>گل&zwnj;مژه</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={67} n={n} setCh={setCh}>
            <Soal id={67} p="ب">
              <div id="soal67">
                <span>
                  ۶۷- کدام یک از بیماری&zwnj;های التهابی چشم می&zwnj;تواند به انواع عفونی، آلرژیک،
                  ترومایی و توکسیک تقسیم بندی شود؟
                </span>
                <span>بلفاریت </span>
                <span>یووئیت</span>
                <span>تراخم </span>
                <span>گل&zwnj;مژه</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={68} n={n} setCh={setCh}>
            <Soal id={68} p="ج">
              <div id="soal68">
                <span>
                  ۶۸- دومین نوع التهابات چشمی یووئیت ........ می&zwnj;باشد که در ۸۰ درصد موارد
                  معمولا ....... طرفه است.
                </span>
                <span>خلفی - دو طرفه </span>
                <span>بینابینی - یک طرفه</span>
                <span>بینابینی- دو طرفه </span>
                <span>قدامی - یک طرفه</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={69} n={n} setCh={setCh}>
            <Soal id={69} p="د">
              <div id="soal69">
                <span>
                  ۶۹- جدا کردن فرد بیمار از سایرین، برای کدام یک از بیماری های التهابی چشم انجام
                  می&zwnj;شود؟
                </span>
                <span>بلفاریت سبورئیک </span>
                <span>یووئیت</span>
                <span>بلفاریت اولسراتیو </span>
                <span>تراخم</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={70} n={n} setCh={setCh}>
            <Soal id={70} p="ب">
              <div id="soal70">
                <span>۷۰- روش فیكو در جراحی کاتاراکت به چه صورت عمل می&zwnj;کند؟</span>
                <span>انجماد عدسی و خارج کردن آن</span>
                <span>خرد کردن عدسی با ارتعاشات و سپس شستشو و خارج کردن آن</span>
                <span>استفاده از آنزیم برای حل کردن عدسی </span>
                <span>جایگذاری لنز داخل چشمی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={71} n={n} setCh={setCh}>
            <Soal id={71} p="د">
              <div id="soal71">
                <span>۷۱- کدام یک از عوارض لنزهای داخل چشمی بعد از عمل کاتاراکت است؟</span>
                <span>کاهش فشار داخل چشم </span>
                <span>بهبود تطابق عدسی</span>
                <span>جلوگیری از یووئیت </span>
                <span>آسیب به اندوتلیوم قرنیه</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={72} n={n} setCh={setCh}>
            <Soal id={72} p="ج">
              <div id="soal72">
                <span>
                  ۷۲- استفاده از چه نوع لنزی پس از جراحی کاتاراکت برای دید بهتر و جلوگیری از مشکلات
                  عدسی برداشته شده توصیه می&zwnj;شود؟
                </span>
                <span>عینک&zwnj;های ضخیم </span>
                <span>لنزهای تماسی</span>
                <span>لنزهای داخل چشمی </span>
                <span>عینک&zwnj;های آفتابی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={73} n={n} setCh={setCh}>
            <Soal id={73} p="الف">
              <div id="soal73">
                <span>۷۳- علت ایجاد گلوکوم در کاتاراکت&zwnj; چیست؟</span>
                <span>انسداد کانال شلم </span>
                <span>عفونت چشم</span>
                <span>اختلال در کروئید </span>
                <span>التهاب قرنیه</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={74} n={n} setCh={setCh}>
            <Soal id={74} p="ب">
              <div id="soal74">
                <span>
                  ۷۴- کدام یک از درمان&zwnj;های طبی زیر برای به تاخیر افتادن کاتاراکت استفاده
                  می&zwnj;شود؟
                </span>
                <span>املاح ید و ویتامین ها </span>
                <span>قطره آنتوسيانوزايد</span>
                <span>تزریق نیتروژن </span>
                <span>تزریق آنزیم آلفا کيموتريپسين</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={75} n={n} setCh={setCh}>
            <Soal id={75} p="الف">
              <div id="soal75">
                <span>۷۵- شایع ترین نوع کاتاراکت کدام است؟</span>
                <span>نوکلئار </span>
                <span>کورتیکال</span>
                <span>کپسولار </span>
                <span>پریفرال</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={76} n={n} setCh={setCh}>
            <Soal id={76} p="ج">
              <div id="soal76">
                <span>
                  ۷۶- جذب سیستمیک رنگ مو و مواد شیمیایی جزو کدام یک از دسته های کاتاراکت طبقه بندی
                  میشود؟
                </span>
                <span>داروها </span>
                <span>اشعه های یونیزان</span>
                <span>تروماتیک </span>
                <span>بیماری های خاص</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={77} n={n} setCh={setCh}>
            <Soal id={77} p="ب">
              <div id="soal77">
                <span>۷۷- پدیده ژلار به چه معناست؟</span>
                <span>دیدن هاله رنگی اطراف اشیاء </span>
                <span>خیرگی در منابع نوری</span>
                <span>زردتر دیدن اطراف </span>
                <span>وجود نقاط تاریک در میدان بینایی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={78} n={n} setCh={setCh}>
            <Soal id={78} p="ج">
              <div id="soal78">
                <span>۷۸- در کدام یک از انواع کاتاراکت احتمال ایجاد یووئیت وجود دارد؟</span>
                <span>کاتاراکت متورم </span>
                <span>کاتاراکت رسیده</span>
                <span>کاتاراکت فوق رسیده </span>
                <span>کاتاراکت ثانویه</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={79} n={n} setCh={setCh}>
            <Soal id={79} p="د">
              <div id="soal79">
                <span>۷۹- کدام گزینه در مورد کاناراکت صحیح می باشد؟</span>
                <span>کدورت تدریجی و دردناک عدسی می باشد </span>
                <span>وجود هاله رنگی در مراحل پیشرفته بیماری</span>
                <span>تغییر قدرت انکساری به صورت تبدیل نزدیک بینی به دوربینی </span>
                <span>دید بهتر در نور کم</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={80} n={n} setCh={setCh}>
            <Soal id={80} p="ج">
              <div id="soal80">
                <span>۸۰- مهم&zwnj;ترین ویژگی گلوکوم اولیه با زاویه باز چیست؟</span>
                <span>شروع ناگهانی و درد شدید </span>
                <span>علامت&zwnj;دار بودن از ابتدا</span>
                <span>سیر تدریجی و بدون علامت تا مراحل پایانی </span>
                <span>کاهش شدید بینایی در ابتدا</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={81} n={n} setCh={setCh}>
            <Soal id={81} p="ب">
              <div id="soal81">
                <span>۸۱- کدام جراحی باعث ایجاد راه خروج دائمی مایع از چشم می&zwnj;شود؟</span>
                <span>ترابکولوپلاستی </span>
                <span>ترابکولکتومی</span>
                <span>ایریدکتومی </span>
                <span>لیزر PRK</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={82} n={n} setCh={setCh}>
            <Soal id={82} p="ج">
              <div id="soal82">
                <span>۸۲- کدام&zwnj;یک از انواع گلوکوم یک اورژانس چشمی محسوب می&zwnj;شود؟</span>
                <span>گلوکوم با زاویه باز </span>
                <span>گلوکوم مادرزادی</span>
                <span>گلوکوم حاد با زاویه بسته </span>
                <span>آب مروارید پیشرفته</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={83} n={n} setCh={setCh}>
            <Soal id={83} p="ب">
              <div id="soal83">
                <span>۸۳- کدام&zwnj;یک از موارد زیر از علائم گلوکوم حاد با زاویه بسته است؟</span>
                <span>دید لوله تفنگی </span>
                <span>درد شدید چشم و تهوع</span>
                <span>کاهش تدریجی دید محیطی </span>
                <span>عدم وجود علامت تا مراحل پایانی بیماری</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={84} n={n} setCh={setCh}>
            <Soal id={84} p="ج">
              <div id="soal84">
                <span>
                  ۸۴- در گلوکوم اولیه با زاویه باز، کدام&zwnj;یک از ویژگی&zwnj;های زیر صحیح است؟
                </span>
                <span>بیماری یک&zwnj;طرفه و با علائم حاد است.</span>
                <span>افزایش ناگهانی فشار داخل چشم رخ می&zwnj;دهد.</span>
                <span>بیماری دوطرفه و بدون علائم واضح تا مراحل پیشرفته است.</span>
                <span>انسداد کامل زاویه فیلترکننده مایع زلالیه مشاهده می&zwnj;شود.</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={85} n={n} setCh={setCh}>
            <Soal id={85} p="ب">
              <div id="soal85">
                <span>۸۵- در گلوکوم مادرزادی اولیه، علت اصلی بیماری چیست؟</span>
                <span>آسیب به دیسک اپتیک در دوران بارداری </span>
                <span>ناهنجاری در رشد سیستم تخلیه&zwnj;کننده مایع زلالیه</span>
                <span>عفونت&zwnj;های چشمی پس از تولد </span>
                <span>استفاده از داروهای سیکلوپلژیک در نوزادی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={86} n={n} setCh={setCh}>
            <Soal id={86} p="ج">
              <div id="soal86">
                <span>۸۶- مانیتول ۲۰٪ در درمان گلوکوم چه کاربردی دارد؟</span>
                <span>کاهش التهاب </span>
                <span>افزایش خونرسانی</span>
                <span>کاهش سریع فشار چشم </span>
                <span>کاهش تولید زلالیه </span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={87} n={n} setCh={setCh}>
            <Soal id={87} p="ب">
              <div id="soal87">
                <span>
                  ۸۷- مهم&zwnj;ترین هدف از بالا آوردن زیر سر بیمار پس از عمل جراحی گلوکوم چیست؟
                </span>
                <span>کاهش درد چشم </span>
                <span>جلوگیری از ورود خون به چشم</span>
                <span>افزایش جذب زلالیه </span>
                <span>تسریع در ترمیم برش جراحی</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={88} n={n} setCh={setCh}>
            <Soal id={88} p="ج">
              <div id="soal88">
                <span>
                  ۸۸- در گلوکوم حاد با زاویه بسته، استفاده از داروهای سیکلوپلژیک چه عارضه&zwnj;ای
                  دارد؟
                </span>
                <span>افزایش تخلیه زلالیه </span>
                <span>باز کردن زاویه فیلترکننده</span>
                <span>افزایش فشار چشم </span>
                <span>کاهش مردمک</span>
              </div>
            </Soal>
          </Te>
          <Te ch={ch} id={89} n={n} setCh={setCh}>
            <Soal id={89} p="الف">
              <div id="soal89">
                <span>
                  ۸۹- در معاینه بیمار مشکوک به گلوکوم، استفاده از تونومتر چه اطلاعاتی می&zwnj;دهد؟
                </span>
                <span>میزان فشار داخل چشم </span>
                <span>ضخامت شبکیه</span>
                <span>قدرت تمرکز چشم </span>
                <span>وسعت دید محیطی</span>
              </div>
            </Soal>
          </Te>
        </div>
      </div>
    </>
  );
};

export default Test;
