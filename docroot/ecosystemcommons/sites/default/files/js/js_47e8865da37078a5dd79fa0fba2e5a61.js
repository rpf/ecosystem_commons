// $Id: jquery.js,v 1.12.2.3 2008/06/25 09:38:39 goba Exp $ 

/*
 * jQuery 1.2.6 - New Wave Javascript
 *
 * Copyright (c) 2008 John Resig (jquery.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Date: 2008-05-24 14:22:17 -0400 (Sat, 24 May 2008)
 * Rev: 5685
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H(){J w=1b.4M,3m$=1b.$;J D=1b.4M=1b.$=H(a,b){I 2B D.17.5j(a,b)};J u=/^[^<]*(<(.|\\s)+>)[^>]*$|^#(\\w+)$/,62=/^.[^:#\\[\\.]*$/,12;D.17=D.44={5j:H(d,b){d=d||S;G(d.16){7[0]=d;7.K=1;I 7}G(1j d=="23"){J c=u.2D(d);G(c&&(c[1]||!b)){G(c[1])d=D.4h([c[1]],b);N{J a=S.61(c[3]);G(a){G(a.2v!=c[3])I D().2q(d);I D(a)}d=[]}}N I D(b).2q(d)}N G(D.1D(d))I D(S)[D.17.27?"27":"43"](d);I 7.6Y(D.2d(d))},5w:"1.2.6",8G:H(){I 7.K},K:0,3p:H(a){I a==12?D.2d(7):7[a]},2I:H(b){J a=D(b);a.5n=7;I a},6Y:H(a){7.K=0;2p.44.1p.1w(7,a);I 7},P:H(a,b){I D.P(7,a,b)},5i:H(b){J a=-1;I D.2L(b&&b.5w?b[0]:b,7)},1K:H(c,a,b){J d=c;G(c.1q==56)G(a===12)I 7[0]&&D[b||"1K"](7[0],c);N{d={};d[c]=a}I 7.P(H(i){R(c 1n d)D.1K(b?7.V:7,c,D.1i(7,d[c],b,i,c))})},1g:H(b,a){G((b==\'2h\'||b==\'1Z\')&&3d(a)<0)a=12;I 7.1K(b,a,"2a")},1r:H(b){G(1j b!="49"&&b!=U)I 7.4E().3v((7[0]&&7[0].2z||S).5F(b));J a="";D.P(b||7,H(){D.P(7.3t,H(){G(7.16!=8)a+=7.16!=1?7.76:D.17.1r([7])})});I a},5z:H(b){G(7[0])D(b,7[0].2z).5y().39(7[0]).2l(H(){J a=7;1B(a.1x)a=a.1x;I a}).3v(7);I 7},8Y:H(a){I 7.P(H(){D(7).6Q().5z(a)})},8R:H(a){I 7.P(H(){D(7).5z(a)})},3v:H(){I 7.3W(19,M,Q,H(a){G(7.16==1)7.3U(a)})},6F:H(){I 7.3W(19,M,M,H(a){G(7.16==1)7.39(a,7.1x)})},6E:H(){I 7.3W(19,Q,Q,H(a){7.1d.39(a,7)})},5q:H(){I 7.3W(19,Q,M,H(a){7.1d.39(a,7.2H)})},3l:H(){I 7.5n||D([])},2q:H(b){J c=D.2l(7,H(a){I D.2q(b,a)});I 7.2I(/[^+>] [^+>]/.11(b)||b.1h("..")>-1?D.4r(c):c)},5y:H(e){J f=7.2l(H(){G(D.14.1f&&!D.4n(7)){J a=7.6o(M),5h=S.3h("1v");5h.3U(a);I D.4h([5h.4H])[0]}N I 7.6o(M)});J d=f.2q("*").5c().P(H(){G(7[E]!=12)7[E]=U});G(e===M)7.2q("*").5c().P(H(i){G(7.16==3)I;J c=D.L(7,"3w");R(J a 1n c)R(J b 1n c[a])D.W.1e(d[i],a,c[a][b],c[a][b].L)});I f},1E:H(b){I 7.2I(D.1D(b)&&D.3C(7,H(a,i){I b.1k(a,i)})||D.3g(b,7))},4Y:H(b){G(b.1q==56)G(62.11(b))I 7.2I(D.3g(b,7,M));N b=D.3g(b,7);J a=b.K&&b[b.K-1]!==12&&!b.16;I 7.1E(H(){I a?D.2L(7,b)<0:7!=b})},1e:H(a){I 7.2I(D.4r(D.2R(7.3p(),1j a==\'23\'?D(a):D.2d(a))))},3F:H(a){I!!a&&D.3g(a,7).K>0},7T:H(a){I 7.3F("."+a)},6e:H(b){G(b==12){G(7.K){J c=7[0];G(D.Y(c,"2A")){J e=c.64,63=[],15=c.15,2V=c.O=="2A-2V";G(e<0)I U;R(J i=2V?e:0,2f=2V?e+1:15.K;i<2f;i++){J d=15[i];G(d.2W){b=D.14.1f&&!d.at.2x.an?d.1r:d.2x;G(2V)I b;63.1p(b)}}I 63}N I(7[0].2x||"").1o(/\\r/g,"")}I 12}G(b.1q==4L)b+=\'\';I 7.P(H(){G(7.16!=1)I;G(b.1q==2p&&/5O|5L/.11(7.O))7.4J=(D.2L(7.2x,b)>=0||D.2L(7.34,b)>=0);N G(D.Y(7,"2A")){J a=D.2d(b);D("9R",7).P(H(){7.2W=(D.2L(7.2x,a)>=0||D.2L(7.1r,a)>=0)});G(!a.K)7.64=-1}N 7.2x=b})},2K:H(a){I a==12?(7[0]?7[0].4H:U):7.4E().3v(a)},7b:H(a){I 7.5q(a).21()},79:H(i){I 7.3s(i,i+1)},3s:H(){I 7.2I(2p.44.3s.1w(7,19))},2l:H(b){I 7.2I(D.2l(7,H(a,i){I b.1k(a,i,a)}))},5c:H(){I 7.1e(7.5n)},L:H(d,b){J a=d.1R(".");a[1]=a[1]?"."+a[1]:"";G(b===12){J c=7.5C("9z"+a[1]+"!",[a[0]]);G(c===12&&7.K)c=D.L(7[0],d);I c===12&&a[1]?7.L(a[0]):c}N I 7.1P("9u"+a[1]+"!",[a[0],b]).P(H(){D.L(7,d,b)})},3b:H(a){I 7.P(H(){D.3b(7,a)})},3W:H(g,f,h,d){J e=7.K>1,3x;I 7.P(H(){G(!3x){3x=D.4h(g,7.2z);G(h)3x.9o()}J b=7;G(f&&D.Y(7,"1T")&&D.Y(3x[0],"4F"))b=7.3H("22")[0]||7.3U(7.2z.3h("22"));J c=D([]);D.P(3x,H(){J a=e?D(7).5y(M)[0]:7;G(D.Y(a,"1m"))c=c.1e(a);N{G(a.16==1)c=c.1e(D("1m",a).21());d.1k(b,a)}});c.P(6T)})}};D.17.5j.44=D.17;H 6T(i,a){G(a.4d)D.3Y({1a:a.4d,31:Q,1O:"1m"});N D.5u(a.1r||a.6O||a.4H||"");G(a.1d)a.1d.37(a)}H 1z(){I+2B 8J}D.1l=D.17.1l=H(){J b=19[0]||{},i=1,K=19.K,4x=Q,15;G(b.1q==8I){4x=b;b=19[1]||{};i=2}G(1j b!="49"&&1j b!="H")b={};G(K==i){b=7;--i}R(;i<K;i++)G((15=19[i])!=U)R(J c 1n 15){J a=b[c],2w=15[c];G(b===2w)6M;G(4x&&2w&&1j 2w=="49"&&!2w.16)b[c]=D.1l(4x,a||(2w.K!=U?[]:{}),2w);N G(2w!==12)b[c]=2w}I b};J E="4M"+1z(),6K=0,5r={},6G=/z-?5i|8B-?8A|1y|6B|8v-?1Z/i,3P=S.3P||{};D.1l({8u:H(a){1b.$=3m$;G(a)1b.4M=w;I D},1D:H(a){I!!a&&1j a!="23"&&!a.Y&&a.1q!=2p&&/^[\\s[]?H/.11(a+"")},4n:H(a){I a.1C&&!a.1c||a.2j&&a.2z&&!a.2z.1c},5u:H(a){a=D.3k(a);G(a){J b=S.3H("6w")[0]||S.1C,1m=S.3h("1m");1m.O="1r/4t";G(D.14.1f)1m.1r=a;N 1m.3U(S.5F(a));b.39(1m,b.1x);b.37(1m)}},Y:H(b,a){I b.Y&&b.Y.2r()==a.2r()},1Y:{},L:H(c,d,b){c=c==1b?5r:c;J a=c[E];G(!a)a=c[E]=++6K;G(d&&!D.1Y[a])D.1Y[a]={};G(b!==12)D.1Y[a][d]=b;I d?D.1Y[a][d]:a},3b:H(c,b){c=c==1b?5r:c;J a=c[E];G(b){G(D.1Y[a]){2U D.1Y[a][b];b="";R(b 1n D.1Y[a])1X;G(!b)D.3b(c)}}N{1U{2U c[E]}1V(e){G(c.5l)c.5l(E)}2U D.1Y[a]}},P:H(d,a,c){J e,i=0,K=d.K;G(c){G(K==12){R(e 1n d)G(a.1w(d[e],c)===Q)1X}N R(;i<K;)G(a.1w(d[i++],c)===Q)1X}N{G(K==12){R(e 1n d)G(a.1k(d[e],e,d[e])===Q)1X}N R(J b=d[0];i<K&&a.1k(b,i,b)!==Q;b=d[++i]){}}I d},1i:H(b,a,c,i,d){G(D.1D(a))a=a.1k(b,i);I a&&a.1q==4L&&c=="2a"&&!6G.11(d)?a+"2X":a},1F:{1e:H(c,b){D.P((b||"").1R(/\\s+/),H(i,a){G(c.16==1&&!D.1F.3T(c.1F,a))c.1F+=(c.1F?" ":"")+a})},21:H(c,b){G(c.16==1)c.1F=b!=12?D.3C(c.1F.1R(/\\s+/),H(a){I!D.1F.3T(b,a)}).6s(" "):""},3T:H(b,a){I D.2L(a,(b.1F||b).6r().1R(/\\s+/))>-1}},6q:H(b,c,a){J e={};R(J d 1n c){e[d]=b.V[d];b.V[d]=c[d]}a.1k(b);R(J d 1n c)b.V[d]=e[d]},1g:H(d,e,c){G(e=="2h"||e=="1Z"){J b,3X={30:"5x",5g:"1G",18:"3I"},35=e=="2h"?["5e","6k"]:["5G","6i"];H 5b(){b=e=="2h"?d.8f:d.8c;J a=0,2C=0;D.P(35,H(){a+=3d(D.2a(d,"57"+7,M))||0;2C+=3d(D.2a(d,"2C"+7+"4b",M))||0});b-=29.83(a+2C)}G(D(d).3F(":4j"))5b();N D.6q(d,3X,5b);I 29.2f(0,b)}I D.2a(d,e,c)},2a:H(f,l,k){J e,V=f.V;H 3E(b){G(!D.14.2k)I Q;J a=3P.54(b,U);I!a||a.52("3E")==""}G(l=="1y"&&D.14.1f){e=D.1K(V,"1y");I e==""?"1":e}G(D.14.2G&&l=="18"){J d=V.50;V.50="0 7Y 7W";V.50=d}G(l.1I(/4i/i))l=y;G(!k&&V&&V[l])e=V[l];N G(3P.54){G(l.1I(/4i/i))l="4i";l=l.1o(/([A-Z])/g,"-$1").3y();J c=3P.54(f,U);G(c&&!3E(f))e=c.52(l);N{J g=[],2E=[],a=f,i=0;R(;a&&3E(a);a=a.1d)2E.6h(a);R(;i<2E.K;i++)G(3E(2E[i])){g[i]=2E[i].V.18;2E[i].V.18="3I"}e=l=="18"&&g[2E.K-1]!=U?"2F":(c&&c.52(l))||"";R(i=0;i<g.K;i++)G(g[i]!=U)2E[i].V.18=g[i]}G(l=="1y"&&e=="")e="1"}N G(f.4g){J h=l.1o(/\\-(\\w)/g,H(a,b){I b.2r()});e=f.4g[l]||f.4g[h];G(!/^\\d+(2X)?$/i.11(e)&&/^\\d/.11(e)){J j=V.1A,66=f.65.1A;f.65.1A=f.4g.1A;V.1A=e||0;e=V.aM+"2X";V.1A=j;f.65.1A=66}}I e},4h:H(l,h){J k=[];h=h||S;G(1j h.3h==\'12\')h=h.2z||h[0]&&h[0].2z||S;D.P(l,H(i,d){G(!d)I;G(d.1q==4L)d+=\'\';G(1j d=="23"){d=d.1o(/(<(\\w+)[^>]*?)\\/>/g,H(b,a,c){I c.1I(/^(aK|4f|7E|aG|4T|7A|aB|3n|az|ay|av)$/i)?b:a+"></"+c+">"});J f=D.3k(d).3y(),1v=h.3h("1v");J e=!f.1h("<au")&&[1,"<2A 7w=\'7w\'>","</2A>"]||!f.1h("<ar")&&[1,"<7v>","</7v>"]||f.1I(/^<(aq|22|am|ak|ai)/)&&[1,"<1T>","</1T>"]||!f.1h("<4F")&&[2,"<1T><22>","</22></1T>"]||(!f.1h("<af")||!f.1h("<ad"))&&[3,"<1T><22><4F>","</4F></22></1T>"]||!f.1h("<7E")&&[2,"<1T><22></22><7q>","</7q></1T>"]||D.14.1f&&[1,"1v<1v>","</1v>"]||[0,"",""];1v.4H=e[1]+d+e[2];1B(e[0]--)1v=1v.5T;G(D.14.1f){J g=!f.1h("<1T")&&f.1h("<22")<0?1v.1x&&1v.1x.3t:e[1]=="<1T>"&&f.1h("<22")<0?1v.3t:[];R(J j=g.K-1;j>=0;--j)G(D.Y(g[j],"22")&&!g[j].3t.K)g[j].1d.37(g[j]);G(/^\\s/.11(d))1v.39(h.5F(d.1I(/^\\s*/)[0]),1v.1x)}d=D.2d(1v.3t)}G(d.K===0&&(!D.Y(d,"3V")&&!D.Y(d,"2A")))I;G(d[0]==12||D.Y(d,"3V")||d.15)k.1p(d);N k=D.2R(k,d)});I k},1K:H(d,f,c){G(!d||d.16==3||d.16==8)I 12;J e=!D.4n(d),40=c!==12,1f=D.14.1f;f=e&&D.3X[f]||f;G(d.2j){J g=/5Q|4d|V/.11(f);G(f=="2W"&&D.14.2k)d.1d.64;G(f 1n d&&e&&!g){G(40){G(f=="O"&&D.Y(d,"4T")&&d.1d)7p"O a3 a1\'t 9V 9U";d[f]=c}G(D.Y(d,"3V")&&d.7i(f))I d.7i(f).76;I d[f]}G(1f&&e&&f=="V")I D.1K(d.V,"9T",c);G(40)d.9Q(f,""+c);J h=1f&&e&&g?d.4G(f,2):d.4G(f);I h===U?12:h}G(1f&&f=="1y"){G(40){d.6B=1;d.1E=(d.1E||"").1o(/7f\\([^)]*\\)/,"")+(3r(c)+\'\'=="9L"?"":"7f(1y="+c*7a+")")}I d.1E&&d.1E.1h("1y=")>=0?(3d(d.1E.1I(/1y=([^)]*)/)[1])/7a)+\'\':""}f=f.1o(/-([a-z])/9H,H(a,b){I b.2r()});G(40)d[f]=c;I d[f]},3k:H(a){I(a||"").1o(/^\\s+|\\s+$/g,"")},2d:H(b){J a=[];G(b!=U){J i=b.K;G(i==U||b.1R||b.4I||b.1k)a[0]=b;N 1B(i)a[--i]=b[i]}I a},2L:H(b,a){R(J i=0,K=a.K;i<K;i++)G(a[i]===b)I i;I-1},2R:H(a,b){J i=0,T,2S=a.K;G(D.14.1f){1B(T=b[i++])G(T.16!=8)a[2S++]=T}N 1B(T=b[i++])a[2S++]=T;I a},4r:H(a){J c=[],2o={};1U{R(J i=0,K=a.K;i<K;i++){J b=D.L(a[i]);G(!2o[b]){2o[b]=M;c.1p(a[i])}}}1V(e){c=a}I c},3C:H(c,a,d){J b=[];R(J i=0,K=c.K;i<K;i++)G(!d!=!a(c[i],i))b.1p(c[i]);I b},2l:H(d,a){J c=[];R(J i=0,K=d.K;i<K;i++){J b=a(d[i],i);G(b!=U)c[c.K]=b}I c.7d.1w([],c)}});J v=9B.9A.3y();D.14={5B:(v.1I(/.+(?:9y|9x|9w|9v)[\\/: ]([\\d.]+)/)||[])[1],2k:/75/.11(v),2G:/2G/.11(v),1f:/1f/.11(v)&&!/2G/.11(v),42:/42/.11(v)&&!/(9s|75)/.11(v)};J y=D.14.1f?"7o":"72";D.1l({71:!D.14.1f||S.70=="6Z",3X:{"R":"9n","9k":"1F","4i":y,72:y,7o:y,9h:"9f",9e:"9d",9b:"99"}});D.P({6W:H(a){I a.1d},97:H(a){I D.4S(a,"1d")},95:H(a){I D.3a(a,2,"2H")},91:H(a){I D.3a(a,2,"4l")},8Z:H(a){I D.4S(a,"2H")},8X:H(a){I D.4S(a,"4l")},8W:H(a){I D.5v(a.1d.1x,a)},8V:H(a){I D.5v(a.1x)},6Q:H(a){I D.Y(a,"8U")?a.8T||a.8S.S:D.2d(a.3t)}},H(c,d){D.17[c]=H(b){J a=D.2l(7,d);G(b&&1j b=="23")a=D.3g(b,a);I 7.2I(D.4r(a))}});D.P({6P:"3v",8Q:"6F",39:"6E",8P:"5q",8O:"7b"},H(c,b){D.17[c]=H(){J a=19;I 7.P(H(){R(J i=0,K=a.K;i<K;i++)D(a[i])[b](7)})}});D.P({8N:H(a){D.1K(7,a,"");G(7.16==1)7.5l(a)},8M:H(a){D.1F.1e(7,a)},8L:H(a){D.1F.21(7,a)},8K:H(a){D.1F[D.1F.3T(7,a)?"21":"1e"](7,a)},21:H(a){G(!a||D.1E(a,[7]).r.K){D("*",7).1e(7).P(H(){D.W.21(7);D.3b(7)});G(7.1d)7.1d.37(7)}},4E:H(){D(">*",7).21();1B(7.1x)7.37(7.1x)}},H(a,b){D.17[a]=H(){I 7.P(b,19)}});D.P(["6N","4b"],H(i,c){J b=c.3y();D.17[b]=H(a){I 7[0]==1b?D.14.2G&&S.1c["5t"+c]||D.14.2k&&1b["5s"+c]||S.70=="6Z"&&S.1C["5t"+c]||S.1c["5t"+c]:7[0]==S?29.2f(29.2f(S.1c["4y"+c],S.1C["4y"+c]),29.2f(S.1c["2i"+c],S.1C["2i"+c])):a==12?(7.K?D.1g(7[0],b):U):7.1g(b,a.1q==56?a:a+"2X")}});H 25(a,b){I a[0]&&3r(D.2a(a[0],b,M),10)||0}J C=D.14.2k&&3r(D.14.5B)<8H?"(?:[\\\\w*3m-]|\\\\\\\\.)":"(?:[\\\\w\\8F-\\8E*3m-]|\\\\\\\\.)",6L=2B 4v("^>\\\\s*("+C+"+)"),6J=2B 4v("^("+C+"+)(#)("+C+"+)"),6I=2B 4v("^([#.]?)("+C+"*)");D.1l({6H:{"":H(a,i,m){I m[2]=="*"||D.Y(a,m[2])},"#":H(a,i,m){I a.4G("2v")==m[2]},":":{8D:H(a,i,m){I i<m[3]-0},8C:H(a,i,m){I i>m[3]-0},3a:H(a,i,m){I m[3]-0==i},79:H(a,i,m){I m[3]-0==i},3o:H(a,i){I i==0},3S:H(a,i,m,r){I i==r.K-1},6D:H(a,i){I i%2==0},6C:H(a,i){I i%2},"3o-4u":H(a){I a.1d.3H("*")[0]==a},"3S-4u":H(a){I D.3a(a.1d.5T,1,"4l")==a},"8z-4u":H(a){I!D.3a(a.1d.5T,2,"4l")},6W:H(a){I a.1x},4E:H(a){I!a.1x},8y:H(a,i,m){I(a.6O||a.8x||D(a).1r()||"").1h(m[3])>=0},4j:H(a){I"1G"!=a.O&&D.1g(a,"18")!="2F"&&D.1g(a,"5g")!="1G"},1G:H(a){I"1G"==a.O||D.1g(a,"18")=="2F"||D.1g(a,"5g")=="1G"},8w:H(a){I!a.3R},3R:H(a){I a.3R},4J:H(a){I a.4J},2W:H(a){I a.2W||D.1K(a,"2W")},1r:H(a){I"1r"==a.O},5O:H(a){I"5O"==a.O},5L:H(a){I"5L"==a.O},5p:H(a){I"5p"==a.O},3Q:H(a){I"3Q"==a.O},5o:H(a){I"5o"==a.O},6A:H(a){I"6A"==a.O},6z:H(a){I"6z"==a.O},2s:H(a){I"2s"==a.O||D.Y(a,"2s")},4T:H(a){I/4T|2A|6y|2s/i.11(a.Y)},3T:H(a,i,m){I D.2q(m[3],a).K},8t:H(a){I/h\\d/i.11(a.Y)},8s:H(a){I D.3C(D.3O,H(b){I a==b.T}).K}}},6x:[/^(\\[) *@?([\\w-]+) *([!*$^~=]*) *(\'?"?)(.*?)\\4 *\\]/,/^(:)([\\w-]+)\\("?\'?(.*?(\\(.*?\\))?[^(]*?)"?\'?\\)/,2B 4v("^([:.#]*)("+C+"+)")],3g:H(a,c,b){J d,1t=[];1B(a&&a!=d){d=a;J f=D.1E(a,c,b);a=f.t.1o(/^\\s*,\\s*/,"");1t=b?c=f.r:D.2R(1t,f.r)}I 1t},2q:H(t,o){G(1j t!="23")I[t];G(o&&o.16!=1&&o.16!=9)I[];o=o||S;J d=[o],2o=[],3S,Y;1B(t&&3S!=t){J r=[];3S=t;t=D.3k(t);J l=Q,3j=6L,m=3j.2D(t);G(m){Y=m[1].2r();R(J i=0;d[i];i++)R(J c=d[i].1x;c;c=c.2H)G(c.16==1&&(Y=="*"||c.Y.2r()==Y))r.1p(c);d=r;t=t.1o(3j,"");G(t.1h(" ")==0)6M;l=M}N{3j=/^([>+~])\\s*(\\w*)/i;G((m=3j.2D(t))!=U){r=[];J k={};Y=m[2].2r();m=m[1];R(J j=0,3i=d.K;j<3i;j++){J n=m=="~"||m=="+"?d[j].2H:d[j].1x;R(;n;n=n.2H)G(n.16==1){J g=D.L(n);G(m=="~"&&k[g])1X;G(!Y||n.Y.2r()==Y){G(m=="~")k[g]=M;r.1p(n)}G(m=="+")1X}}d=r;t=D.3k(t.1o(3j,""));l=M}}G(t&&!l){G(!t.1h(",")){G(o==d[0])d.4s();2o=D.2R(2o,d);r=d=[o];t=" "+t.6v(1,t.K)}N{J h=6J;J m=h.2D(t);G(m){m=[0,m[2],m[3],m[1]]}N{h=6I;m=h.2D(t)}m[2]=m[2].1o(/\\\\/g,"");J f=d[d.K-1];G(m[1]=="#"&&f&&f.61&&!D.4n(f)){J p=f.61(m[2]);G((D.14.1f||D.14.2G)&&p&&1j p.2v=="23"&&p.2v!=m[2])p=D(\'[@2v="\'+m[2]+\'"]\',f)[0];d=r=p&&(!m[3]||D.Y(p,m[3]))?[p]:[]}N{R(J i=0;d[i];i++){J a=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];G(a=="*"&&d[i].Y.3y()=="49")a="3n";r=D.2R(r,d[i].3H(a))}G(m[1]==".")r=D.5m(r,m[2]);G(m[1]=="#"){J e=[];R(J i=0;r[i];i++)G(r[i].4G("2v")==m[2]){e=[r[i]];1X}r=e}d=r}t=t.1o(h,"")}}G(t){J b=D.1E(t,r);d=r=b.r;t=D.3k(b.t)}}G(t)d=[];G(d&&o==d[0])d.4s();2o=D.2R(2o,d);I 2o},5m:H(r,m,a){m=" "+m+" ";J c=[];R(J i=0;r[i];i++){J b=(" "+r[i].1F+" ").1h(m)>=0;G(!a&&b||a&&!b)c.1p(r[i])}I c},1E:H(t,r,h){J d;1B(t&&t!=d){d=t;J p=D.6x,m;R(J i=0;p[i];i++){m=p[i].2D(t);G(m){t=t.8r(m[0].K);m[2]=m[2].1o(/\\\\/g,"");1X}}G(!m)1X;G(m[1]==":"&&m[2]=="4Y")r=62.11(m[3])?D.1E(m[3],r,M).r:D(r).4Y(m[3]);N G(m[1]==".")r=D.5m(r,m[2],h);N G(m[1]=="["){J g=[],O=m[3];R(J i=0,3i=r.K;i<3i;i++){J a=r[i],z=a[D.3X[m[2]]||m[2]];G(z==U||/5Q|4d|2W/.11(m[2]))z=D.1K(a,m[2])||\'\';G((O==""&&!!z||O=="="&&z==m[5]||O=="!="&&z!=m[5]||O=="^="&&z&&!z.1h(m[5])||O=="$="&&z.6v(z.K-m[5].K)==m[5]||(O=="*="||O=="~=")&&z.1h(m[5])>=0)^h)g.1p(a)}r=g}N G(m[1]==":"&&m[2]=="3a-4u"){J e={},g=[],11=/(-?)(\\d*)n((?:\\+|-)?\\d*)/.2D(m[3]=="6D"&&"2n"||m[3]=="6C"&&"2n+1"||!/\\D/.11(m[3])&&"8q+"+m[3]||m[3]),3o=(11[1]+(11[2]||1))-0,d=11[3]-0;R(J i=0,3i=r.K;i<3i;i++){J j=r[i],1d=j.1d,2v=D.L(1d);G(!e[2v]){J c=1;R(J n=1d.1x;n;n=n.2H)G(n.16==1)n.4q=c++;e[2v]=M}J b=Q;G(3o==0){G(j.4q==d)b=M}N G((j.4q-d)%3o==0&&(j.4q-d)/3o>=0)b=M;G(b^h)g.1p(j)}r=g}N{J f=D.6H[m[1]];G(1j f=="49")f=f[m[2]];G(1j f=="23")f=6u("Q||H(a,i){I "+f+";}");r=D.3C(r,H(a,i){I f(a,i,m,r)},h)}}I{r:r,t:t}},4S:H(b,c){J a=[],1t=b[c];1B(1t&&1t!=S){G(1t.16==1)a.1p(1t);1t=1t[c]}I a},3a:H(a,e,c,b){e=e||1;J d=0;R(;a;a=a[c])G(a.16==1&&++d==e)1X;I a},5v:H(n,a){J r=[];R(;n;n=n.2H){G(n.16==1&&n!=a)r.1p(n)}I r}});D.W={1e:H(f,i,g,e){G(f.16==3||f.16==8)I;G(D.14.1f&&f.4I)f=1b;G(!g.24)g.24=7.24++;G(e!=12){J h=g;g=7.3M(h,H(){I h.1w(7,19)});g.L=e}J j=D.L(f,"3w")||D.L(f,"3w",{}),1H=D.L(f,"1H")||D.L(f,"1H",H(){G(1j D!="12"&&!D.W.5k)I D.W.1H.1w(19.3L.T,19)});1H.T=f;D.P(i.1R(/\\s+/),H(c,b){J a=b.1R(".");b=a[0];g.O=a[1];J d=j[b];G(!d){d=j[b]={};G(!D.W.2t[b]||D.W.2t[b].4p.1k(f)===Q){G(f.3K)f.3K(b,1H,Q);N G(f.6t)f.6t("4o"+b,1H)}}d[g.24]=g;D.W.26[b]=M});f=U},24:1,26:{},21:H(e,h,f){G(e.16==3||e.16==8)I;J i=D.L(e,"3w"),1L,5i;G(i){G(h==12||(1j h=="23"&&h.8p(0)=="."))R(J g 1n i)7.21(e,g+(h||""));N{G(h.O){f=h.2y;h=h.O}D.P(h.1R(/\\s+/),H(b,a){J c=a.1R(".");a=c[0];G(i[a]){G(f)2U i[a][f.24];N R(f 1n i[a])G(!c[1]||i[a][f].O==c[1])2U i[a][f];R(1L 1n i[a])1X;G(!1L){G(!D.W.2t[a]||D.W.2t[a].4A.1k(e)===Q){G(e.6p)e.6p(a,D.L(e,"1H"),Q);N G(e.6n)e.6n("4o"+a,D.L(e,"1H"))}1L=U;2U i[a]}}})}R(1L 1n i)1X;G(!1L){J d=D.L(e,"1H");G(d)d.T=U;D.3b(e,"3w");D.3b(e,"1H")}}},1P:H(h,c,f,g,i){c=D.2d(c);G(h.1h("!")>=0){h=h.3s(0,-1);J a=M}G(!f){G(7.26[h])D("*").1e([1b,S]).1P(h,c)}N{G(f.16==3||f.16==8)I 12;J b,1L,17=D.1D(f[h]||U),W=!c[0]||!c[0].32;G(W){c.6h({O:h,2J:f,32:H(){},3J:H(){},4C:1z()});c[0][E]=M}c[0].O=h;G(a)c[0].6m=M;J d=D.L(f,"1H");G(d)b=d.1w(f,c);G((!17||(D.Y(f,\'a\')&&h=="4V"))&&f["4o"+h]&&f["4o"+h].1w(f,c)===Q)b=Q;G(W)c.4s();G(i&&D.1D(i)){1L=i.1w(f,b==U?c:c.7d(b));G(1L!==12)b=1L}G(17&&g!==Q&&b!==Q&&!(D.Y(f,\'a\')&&h=="4V")){7.5k=M;1U{f[h]()}1V(e){}}7.5k=Q}I b},1H:H(b){J a,1L,38,5f,4m;b=19[0]=D.W.6l(b||1b.W);38=b.O.1R(".");b.O=38[0];38=38[1];5f=!38&&!b.6m;4m=(D.L(7,"3w")||{})[b.O];R(J j 1n 4m){J c=4m[j];G(5f||c.O==38){b.2y=c;b.L=c.L;1L=c.1w(7,19);G(a!==Q)a=1L;G(1L===Q){b.32();b.3J()}}}I a},6l:H(b){G(b[E]==M)I b;J d=b;b={8o:d};J c="8n 8m 8l 8k 2s 8j 47 5d 6j 5E 8i L 8h 8g 4K 2y 5a 59 8e 8b 58 6f 8a 88 4k 87 86 84 6d 2J 4C 6c O 82 81 35".1R(" ");R(J i=c.K;i;i--)b[c[i]]=d[c[i]];b[E]=M;b.32=H(){G(d.32)d.32();d.80=Q};b.3J=H(){G(d.3J)d.3J();d.7Z=M};b.4C=b.4C||1z();G(!b.2J)b.2J=b.6d||S;G(b.2J.16==3)b.2J=b.2J.1d;G(!b.4k&&b.4K)b.4k=b.4K==b.2J?b.6c:b.4K;G(b.58==U&&b.5d!=U){J a=S.1C,1c=S.1c;b.58=b.5d+(a&&a.2e||1c&&1c.2e||0)-(a.6b||0);b.6f=b.6j+(a&&a.2c||1c&&1c.2c||0)-(a.6a||0)}G(!b.35&&((b.47||b.47===0)?b.47:b.5a))b.35=b.47||b.5a;G(!b.59&&b.5E)b.59=b.5E;G(!b.35&&b.2s)b.35=(b.2s&1?1:(b.2s&2?3:(b.2s&4?2:0)));I b},3M:H(a,b){b.24=a.24=a.24||b.24||7.24++;I b},2t:{27:{4p:H(){55();I},4A:H(){I}},3D:{4p:H(){G(D.14.1f)I Q;D(7).2O("53",D.W.2t.3D.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("53",D.W.2t.3D.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3D";I D.W.1H.1w(7,19)}},3N:{4p:H(){G(D.14.1f)I Q;D(7).2O("51",D.W.2t.3N.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("51",D.W.2t.3N.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3N";I D.W.1H.1w(7,19)}}}};D.17.1l({2O:H(c,a,b){I c=="4X"?7.2V(c,a,b):7.P(H(){D.W.1e(7,c,b||a,b&&a)})},2V:H(d,b,c){J e=D.W.3M(c||b,H(a){D(7).4e(a,e);I(c||b).1w(7,19)});I 7.P(H(){D.W.1e(7,d,e,c&&b)})},4e:H(a,b){I 7.P(H(){D.W.21(7,a,b)})},1P:H(c,a,b){I 7.P(H(){D.W.1P(c,a,7,M,b)})},5C:H(c,a,b){I 7[0]&&D.W.1P(c,a,7[0],Q,b)},2m:H(b){J c=19,i=1;1B(i<c.K)D.W.3M(b,c[i++]);I 7.4V(D.W.3M(b,H(a){7.4Z=(7.4Z||0)%i;a.32();I c[7.4Z++].1w(7,19)||Q}))},7X:H(a,b){I 7.2O(\'3D\',a).2O(\'3N\',b)},27:H(a){55();G(D.2Q)a.1k(S,D);N D.3A.1p(H(){I a.1k(7,D)});I 7}});D.1l({2Q:Q,3A:[],27:H(){G(!D.2Q){D.2Q=M;G(D.3A){D.P(D.3A,H(){7.1k(S)});D.3A=U}D(S).5C("27")}}});J x=Q;H 55(){G(x)I;x=M;G(S.3K&&!D.14.2G)S.3K("69",D.27,Q);G(D.14.1f&&1b==1S)(H(){G(D.2Q)I;1U{S.1C.7V("1A")}1V(3e){3B(19.3L,0);I}D.27()})();G(D.14.2G)S.3K("69",H(){G(D.2Q)I;R(J i=0;i<S.4W.K;i++)G(S.4W[i].3R){3B(19.3L,0);I}D.27()},Q);G(D.14.2k){J a;(H(){G(D.2Q)I;G(S.3f!="68"&&S.3f!="1J"){3B(19.3L,0);I}G(a===12)a=D("V, 7A[7U=7S]").K;G(S.4W.K!=a){3B(19.3L,0);I}D.27()})()}D.W.1e(1b,"43",D.27)}D.P(("7R,7Q,43,85,4y,4X,4V,7P,"+"7O,7N,89,53,51,7M,2A,"+"5o,7L,7K,8d,3e").1R(","),H(i,b){D.17[b]=H(a){I a?7.2O(b,a):7.1P(b)}});J F=H(a,c){J b=a.4k;1B(b&&b!=c)1U{b=b.1d}1V(3e){b=c}I b==c};D(1b).2O("4X",H(){D("*").1e(S).4e()});D.17.1l({67:D.17.43,43:H(g,d,c){G(1j g!=\'23\')I 7.67(g);J e=g.1h(" ");G(e>=0){J i=g.3s(e,g.K);g=g.3s(0,e)}c=c||H(){};J f="2P";G(d)G(D.1D(d)){c=d;d=U}N{d=D.3n(d);f="6g"}J h=7;D.3Y({1a:g,O:f,1O:"2K",L:d,1J:H(a,b){G(b=="1W"||b=="7J")h.2K(i?D("<1v/>").3v(a.4U.1o(/<1m(.|\\s)*?\\/1m>/g,"")).2q(i):a.4U);h.P(c,[a.4U,b,a])}});I 7},aL:H(){I D.3n(7.7I())},7I:H(){I 7.2l(H(){I D.Y(7,"3V")?D.2d(7.aH):7}).1E(H(){I 7.34&&!7.3R&&(7.4J||/2A|6y/i.11(7.Y)||/1r|1G|3Q/i.11(7.O))}).2l(H(i,c){J b=D(7).6e();I b==U?U:b.1q==2p?D.2l(b,H(a,i){I{34:c.34,2x:a}}):{34:c.34,2x:b}}).3p()}});D.P("7H,7G,7F,7D,7C,7B".1R(","),H(i,o){D.17[o]=H(f){I 7.2O(o,f)}});J B=1z();D.1l({3p:H(d,b,a,c){G(D.1D(b)){a=b;b=U}I D.3Y({O:"2P",1a:d,L:b,1W:a,1O:c})},aE:H(b,a){I D.3p(b,U,a,"1m")},aD:H(c,b,a){I D.3p(c,b,a,"3z")},aC:H(d,b,a,c){G(D.1D(b)){a=b;b={}}I D.3Y({O:"6g",1a:d,L:b,1W:a,1O:c})},aA:H(a){D.1l(D.60,a)},60:{1a:5Z.5Q,26:M,O:"2P",2T:0,7z:"4R/x-ax-3V-aw",7x:M,31:M,L:U,5Y:U,3Q:U,4Q:{2N:"4R/2N, 1r/2N",2K:"1r/2K",1m:"1r/4t, 4R/4t",3z:"4R/3z, 1r/4t",1r:"1r/as",4w:"*/*"}},4z:{},3Y:H(s){s=D.1l(M,s,D.1l(M,{},D.60,s));J g,2Z=/=\\?(&|$)/g,1u,L,O=s.O.2r();G(s.L&&s.7x&&1j s.L!="23")s.L=D.3n(s.L);G(s.1O=="4P"){G(O=="2P"){G(!s.1a.1I(2Z))s.1a+=(s.1a.1I(/\\?/)?"&":"?")+(s.4P||"7u")+"=?"}N G(!s.L||!s.L.1I(2Z))s.L=(s.L?s.L+"&":"")+(s.4P||"7u")+"=?";s.1O="3z"}G(s.1O=="3z"&&(s.L&&s.L.1I(2Z)||s.1a.1I(2Z))){g="4P"+B++;G(s.L)s.L=(s.L+"").1o(2Z,"="+g+"$1");s.1a=s.1a.1o(2Z,"="+g+"$1");s.1O="1m";1b[g]=H(a){L=a;1W();1J();1b[g]=12;1U{2U 1b[g]}1V(e){}G(i)i.37(h)}}G(s.1O=="1m"&&s.1Y==U)s.1Y=Q;G(s.1Y===Q&&O=="2P"){J j=1z();J k=s.1a.1o(/(\\?|&)3m=.*?(&|$)/,"$ap="+j+"$2");s.1a=k+((k==s.1a)?(s.1a.1I(/\\?/)?"&":"?")+"3m="+j:"")}G(s.L&&O=="2P"){s.1a+=(s.1a.1I(/\\?/)?"&":"?")+s.L;s.L=U}G(s.26&&!D.4O++)D.W.1P("7H");J n=/^(?:\\w+:)?\\/\\/([^\\/?#]+)/;G(s.1O=="1m"&&O=="2P"&&n.11(s.1a)&&n.2D(s.1a)[1]!=5Z.al){J i=S.3H("6w")[0];J h=S.3h("1m");h.4d=s.1a;G(s.7t)h.aj=s.7t;G(!g){J l=Q;h.ah=h.ag=H(){G(!l&&(!7.3f||7.3f=="68"||7.3f=="1J")){l=M;1W();1J();i.37(h)}}}i.3U(h);I 12}J m=Q;J c=1b.7s?2B 7s("ae.ac"):2B 7r();G(s.5Y)c.6R(O,s.1a,s.31,s.5Y,s.3Q);N c.6R(O,s.1a,s.31);1U{G(s.L)c.4B("ab-aa",s.7z);G(s.5S)c.4B("a9-5R-a8",D.4z[s.1a]||"a7, a6 a5 a4 5N:5N:5N a2");c.4B("X-9Z-9Y","7r");c.4B("9W",s.1O&&s.4Q[s.1O]?s.4Q[s.1O]+", */*":s.4Q.4w)}1V(e){}G(s.7m&&s.7m(c,s)===Q){s.26&&D.4O--;c.7l();I Q}G(s.26)D.W.1P("7B",[c,s]);J d=H(a){G(!m&&c&&(c.3f==4||a=="2T")){m=M;G(f){7k(f);f=U}1u=a=="2T"&&"2T"||!D.7j(c)&&"3e"||s.5S&&D.7h(c,s.1a)&&"7J"||"1W";G(1u=="1W"){1U{L=D.6X(c,s.1O,s.9S)}1V(e){1u="5J"}}G(1u=="1W"){J b;1U{b=c.5I("7g-5R")}1V(e){}G(s.5S&&b)D.4z[s.1a]=b;G(!g)1W()}N D.5H(s,c,1u);1J();G(s.31)c=U}};G(s.31){J f=4I(d,13);G(s.2T>0)3B(H(){G(c){c.7l();G(!m)d("2T")}},s.2T)}1U{c.9P(s.L)}1V(e){D.5H(s,c,U,e)}G(!s.31)d();H 1W(){G(s.1W)s.1W(L,1u);G(s.26)D.W.1P("7C",[c,s])}H 1J(){G(s.1J)s.1J(c,1u);G(s.26)D.W.1P("7F",[c,s]);G(s.26&&!--D.4O)D.W.1P("7G")}I c},5H:H(s,a,b,e){G(s.3e)s.3e(a,b,e);G(s.26)D.W.1P("7D",[a,s,e])},4O:0,7j:H(a){1U{I!a.1u&&5Z.9O=="5p:"||(a.1u>=7e&&a.1u<9N)||a.1u==7c||a.1u==9K||D.14.2k&&a.1u==12}1V(e){}I Q},7h:H(a,c){1U{J b=a.5I("7g-5R");I a.1u==7c||b==D.4z[c]||D.14.2k&&a.1u==12}1V(e){}I Q},6X:H(a,c,b){J d=a.5I("9J-O"),2N=c=="2N"||!c&&d&&d.1h("2N")>=0,L=2N?a.9I:a.4U;G(2N&&L.1C.2j=="5J")7p"5J";G(b)L=b(L,c);G(c=="1m")D.5u(L);G(c=="3z")L=6u("("+L+")");I L},3n:H(a){J s=[];G(a.1q==2p||a.5w)D.P(a,H(){s.1p(3u(7.34)+"="+3u(7.2x))});N R(J j 1n a)G(a[j]&&a[j].1q==2p)D.P(a[j],H(){s.1p(3u(j)+"="+3u(7))});N s.1p(3u(j)+"="+3u(D.1D(a[j])?a[j]():a[j]));I s.6s("&").1o(/%20/g,"+")}});D.17.1l({1N:H(c,b){I c?7.2g({1Z:"1N",2h:"1N",1y:"1N"},c,b):7.1E(":1G").P(H(){7.V.18=7.5D||"";G(D.1g(7,"18")=="2F"){J a=D("<"+7.2j+" />").6P("1c");7.V.18=a.1g("18");G(7.V.18=="2F")7.V.18="3I";a.21()}}).3l()},1M:H(b,a){I b?7.2g({1Z:"1M",2h:"1M",1y:"1M"},b,a):7.1E(":4j").P(H(){7.5D=7.5D||D.1g(7,"18");7.V.18="2F"}).3l()},78:D.17.2m,2m:H(a,b){I D.1D(a)&&D.1D(b)?7.78.1w(7,19):a?7.2g({1Z:"2m",2h:"2m",1y:"2m"},a,b):7.P(H(){D(7)[D(7).3F(":1G")?"1N":"1M"]()})},9G:H(b,a){I 7.2g({1Z:"1N"},b,a)},9F:H(b,a){I 7.2g({1Z:"1M"},b,a)},9E:H(b,a){I 7.2g({1Z:"2m"},b,a)},9D:H(b,a){I 7.2g({1y:"1N"},b,a)},9M:H(b,a){I 7.2g({1y:"1M"},b,a)},9C:H(c,a,b){I 7.2g({1y:a},c,b)},2g:H(k,j,i,g){J h=D.77(j,i,g);I 7[h.36===Q?"P":"36"](H(){G(7.16!=1)I Q;J f=D.1l({},h),p,1G=D(7).3F(":1G"),46=7;R(p 1n k){G(k[p]=="1M"&&1G||k[p]=="1N"&&!1G)I f.1J.1k(7);G(p=="1Z"||p=="2h"){f.18=D.1g(7,"18");f.33=7.V.33}}G(f.33!=U)7.V.33="1G";f.45=D.1l({},k);D.P(k,H(c,a){J e=2B D.28(46,f,c);G(/2m|1N|1M/.11(a))e[a=="2m"?1G?"1N":"1M":a](k);N{J b=a.6r().1I(/^([+-]=)?([\\d+-.]+)(.*)$/),2b=e.1t(M)||0;G(b){J d=3d(b[2]),2M=b[3]||"2X";G(2M!="2X"){46.V[c]=(d||1)+2M;2b=((d||1)/e.1t(M))*2b;46.V[c]=2b+2M}G(b[1])d=((b[1]=="-="?-1:1)*d)+2b;e.3G(2b,d,2M)}N e.3G(2b,a,"")}});I M})},36:H(a,b){G(D.1D(a)||(a&&a.1q==2p)){b=a;a="28"}G(!a||(1j a=="23"&&!b))I A(7[0],a);I 7.P(H(){G(b.1q==2p)A(7,a,b);N{A(7,a).1p(b);G(A(7,a).K==1)b.1k(7)}})},9X:H(b,c){J a=D.3O;G(b)7.36([]);7.P(H(){R(J i=a.K-1;i>=0;i--)G(a[i].T==7){G(c)a[i](M);a.7n(i,1)}});G(!c)7.5A();I 7}});J A=H(b,c,a){G(b){c=c||"28";J q=D.L(b,c+"36");G(!q||a)q=D.L(b,c+"36",D.2d(a))}I q};D.17.5A=H(a){a=a||"28";I 7.P(H(){J q=A(7,a);q.4s();G(q.K)q[0].1k(7)})};D.1l({77:H(b,a,c){J d=b&&b.1q==a0?b:{1J:c||!c&&a||D.1D(b)&&b,2u:b,41:c&&a||a&&a.1q!=9t&&a};d.2u=(d.2u&&d.2u.1q==4L?d.2u:D.28.5K[d.2u])||D.28.5K.74;d.5M=d.1J;d.1J=H(){G(d.36!==Q)D(7).5A();G(D.1D(d.5M))d.5M.1k(7)};I d},41:{73:H(p,n,b,a){I b+a*p},5P:H(p,n,b,a){I((-29.9r(p*29.9q)/2)+0.5)*a+b}},3O:[],48:U,28:H(b,c,a){7.15=c;7.T=b;7.1i=a;G(!c.3Z)c.3Z={}}});D.28.44={4D:H(){G(7.15.2Y)7.15.2Y.1k(7.T,7.1z,7);(D.28.2Y[7.1i]||D.28.2Y.4w)(7);G(7.1i=="1Z"||7.1i=="2h")7.T.V.18="3I"},1t:H(a){G(7.T[7.1i]!=U&&7.T.V[7.1i]==U)I 7.T[7.1i];J r=3d(D.1g(7.T,7.1i,a));I r&&r>-9p?r:3d(D.2a(7.T,7.1i))||0},3G:H(c,b,d){7.5V=1z();7.2b=c;7.3l=b;7.2M=d||7.2M||"2X";7.1z=7.2b;7.2S=7.4N=0;7.4D();J e=7;H t(a){I e.2Y(a)}t.T=7.T;D.3O.1p(t);G(D.48==U){D.48=4I(H(){J a=D.3O;R(J i=0;i<a.K;i++)G(!a[i]())a.7n(i--,1);G(!a.K){7k(D.48);D.48=U}},13)}},1N:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1N=M;7.3G(0,7.1t());G(7.1i=="2h"||7.1i=="1Z")7.T.V[7.1i]="9m";D(7.T).1N()},1M:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1M=M;7.3G(7.1t(),0)},2Y:H(a){J t=1z();G(a||t>7.15.2u+7.5V){7.1z=7.3l;7.2S=7.4N=1;7.4D();7.15.45[7.1i]=M;J b=M;R(J i 1n 7.15.45)G(7.15.45[i]!==M)b=Q;G(b){G(7.15.18!=U){7.T.V.33=7.15.33;7.T.V.18=7.15.18;G(D.1g(7.T,"18")=="2F")7.T.V.18="3I"}G(7.15.1M)7.T.V.18="2F";G(7.15.1M||7.15.1N)R(J p 1n 7.15.45)D.1K(7.T.V,p,7.15.3Z[p])}G(b)7.15.1J.1k(7.T);I Q}N{J n=t-7.5V;7.4N=n/7.15.2u;7.2S=D.41[7.15.41||(D.41.5P?"5P":"73")](7.4N,n,0,1,7.15.2u);7.1z=7.2b+((7.3l-7.2b)*7.2S);7.4D()}I M}};D.1l(D.28,{5K:{9l:9j,9i:7e,74:9g},2Y:{2e:H(a){a.T.2e=a.1z},2c:H(a){a.T.2c=a.1z},1y:H(a){D.1K(a.T.V,"1y",a.1z)},4w:H(a){a.T.V[a.1i]=a.1z+a.2M}}});D.17.2i=H(){J b=0,1S=0,T=7[0],3q;G(T)ao(D.14){J d=T.1d,4a=T,1s=T.1s,1Q=T.2z,5U=2k&&3r(5B)<9c&&!/9a/i.11(v),1g=D.2a,3c=1g(T,"30")=="3c";G(T.7y){J c=T.7y();1e(c.1A+29.2f(1Q.1C.2e,1Q.1c.2e),c.1S+29.2f(1Q.1C.2c,1Q.1c.2c));1e(-1Q.1C.6b,-1Q.1C.6a)}N{1e(T.5X,T.5W);1B(1s){1e(1s.5X,1s.5W);G(42&&!/^t(98|d|h)$/i.11(1s.2j)||2k&&!5U)2C(1s);G(!3c&&1g(1s,"30")=="3c")3c=M;4a=/^1c$/i.11(1s.2j)?4a:1s;1s=1s.1s}1B(d&&d.2j&&!/^1c|2K$/i.11(d.2j)){G(!/^96|1T.*$/i.11(1g(d,"18")))1e(-d.2e,-d.2c);G(42&&1g(d,"33")!="4j")2C(d);d=d.1d}G((5U&&(3c||1g(4a,"30")=="5x"))||(42&&1g(4a,"30")!="5x"))1e(-1Q.1c.5X,-1Q.1c.5W);G(3c)1e(29.2f(1Q.1C.2e,1Q.1c.2e),29.2f(1Q.1C.2c,1Q.1c.2c))}3q={1S:1S,1A:b}}H 2C(a){1e(D.2a(a,"6V",M),D.2a(a,"6U",M))}H 1e(l,t){b+=3r(l,10)||0;1S+=3r(t,10)||0}I 3q};D.17.1l({30:H(){J a=0,1S=0,3q;G(7[0]){J b=7.1s(),2i=7.2i(),4c=/^1c|2K$/i.11(b[0].2j)?{1S:0,1A:0}:b.2i();2i.1S-=25(7,\'94\');2i.1A-=25(7,\'aF\');4c.1S+=25(b,\'6U\');4c.1A+=25(b,\'6V\');3q={1S:2i.1S-4c.1S,1A:2i.1A-4c.1A}}I 3q},1s:H(){J a=7[0].1s;1B(a&&(!/^1c|2K$/i.11(a.2j)&&D.1g(a,\'30\')==\'93\'))a=a.1s;I D(a)}});D.P([\'5e\',\'5G\'],H(i,b){J c=\'4y\'+b;D.17[c]=H(a){G(!7[0])I;I a!=12?7.P(H(){7==1b||7==S?1b.92(!i?a:D(1b).2e(),i?a:D(1b).2c()):7[c]=a}):7[0]==1b||7[0]==S?46[i?\'aI\':\'aJ\']||D.71&&S.1C[c]||S.1c[c]:7[0][c]}});D.P(["6N","4b"],H(i,b){J c=i?"5e":"5G",4f=i?"6k":"6i";D.17["5s"+b]=H(){I 7[b.3y()]()+25(7,"57"+c)+25(7,"57"+4f)};D.17["90"+b]=H(a){I 7["5s"+b]()+25(7,"2C"+c+"4b")+25(7,"2C"+4f+"4b")+(a?25(7,"6S"+c)+25(7,"6S"+4f):0)}})})();',62,669,'|||||||this|||||||||||||||||||||||||||||||||||if|function|return|var|length|data|true|else|type|each|false|for|document|elem|null|style|event||nodeName|||test|undefined||browser|options|nodeType|fn|display|arguments|url|window|body|parentNode|add|msie|css|indexOf|prop|typeof|call|extend|script|in|replace|push|constructor|text|offsetParent|cur|status|div|apply|firstChild|opacity|now|left|while|documentElement|isFunction|filter|className|hidden|handle|match|complete|attr|ret|hide|show|dataType|trigger|doc|split|top|table|try|catch|success|break|cache|height||remove|tbody|string|guid|num|global|ready|fx|Math|curCSS|start|scrollTop|makeArray|scrollLeft|max|animate|width|offset|tagName|safari|map|toggle||done|Array|find|toUpperCase|button|special|duration|id|copy|value|handler|ownerDocument|select|new|border|exec|stack|none|opera|nextSibling|pushStack|target|html|inArray|unit|xml|bind|GET|isReady|merge|pos|timeout|delete|one|selected|px|step|jsre|position|async|preventDefault|overflow|name|which|queue|removeChild|namespace|insertBefore|nth|removeData|fixed|parseFloat|error|readyState|multiFilter|createElement|rl|re|trim|end|_|param|first|get|results|parseInt|slice|childNodes|encodeURIComponent|append|events|elems|toLowerCase|json|readyList|setTimeout|grep|mouseenter|color|is|custom|getElementsByTagName|block|stopPropagation|addEventListener|callee|proxy|mouseleave|timers|defaultView|password|disabled|last|has|appendChild|form|domManip|props|ajax|orig|set|easing|mozilla|load|prototype|curAnim|self|charCode|timerId|object|offsetChild|Width|parentOffset|src|unbind|br|currentStyle|clean|float|visible|relatedTarget|previousSibling|handlers|isXMLDoc|on|setup|nodeIndex|unique|shift|javascript|child|RegExp|_default|deep|scroll|lastModified|teardown|setRequestHeader|timeStamp|update|empty|tr|getAttribute|innerHTML|setInterval|checked|fromElement|Number|jQuery|state|active|jsonp|accepts|application|dir|input|responseText|click|styleSheets|unload|not|lastToggle|outline|mouseout|getPropertyValue|mouseover|getComputedStyle|bindReady|String|padding|pageX|metaKey|keyCode|getWH|andSelf|clientX|Left|all|visibility|container|index|init|triggered|removeAttribute|classFilter|prevObject|submit|file|after|windowData|inner|client|globalEval|sibling|jquery|absolute|clone|wrapAll|dequeue|version|triggerHandler|oldblock|ctrlKey|createTextNode|Top|handleError|getResponseHeader|parsererror|speeds|checkbox|old|00|radio|swing|href|Modified|ifModified|lastChild|safari2|startTime|offsetTop|offsetLeft|username|location|ajaxSettings|getElementById|isSimple|values|selectedIndex|runtimeStyle|rsLeft|_load|loaded|DOMContentLoaded|clientTop|clientLeft|toElement|srcElement|val|pageY|POST|unshift|Bottom|clientY|Right|fix|exclusive|detachEvent|cloneNode|removeEventListener|swap|toString|join|attachEvent|eval|substr|head|parse|textarea|reset|image|zoom|odd|even|before|prepend|exclude|expr|quickClass|quickID|uuid|quickChild|continue|Height|textContent|appendTo|contents|open|margin|evalScript|borderTopWidth|borderLeftWidth|parent|httpData|setArray|CSS1Compat|compatMode|boxModel|cssFloat|linear|def|webkit|nodeValue|speed|_toggle|eq|100|replaceWith|304|concat|200|alpha|Last|httpNotModified|getAttributeNode|httpSuccess|clearInterval|abort|beforeSend|splice|styleFloat|throw|colgroup|XMLHttpRequest|ActiveXObject|scriptCharset|callback|fieldset|multiple|processData|getBoundingClientRect|contentType|link|ajaxSend|ajaxSuccess|ajaxError|col|ajaxComplete|ajaxStop|ajaxStart|serializeArray|notmodified|keypress|keydown|change|mouseup|mousedown|dblclick|focus|blur|stylesheet|hasClass|rel|doScroll|black|hover|solid|cancelBubble|returnValue|wheelDelta|view|round|shiftKey|resize|screenY|screenX|relatedNode|mousemove|prevValue|originalTarget|offsetHeight|keyup|newValue|offsetWidth|eventPhase|detail|currentTarget|cancelable|bubbles|attrName|attrChange|altKey|originalEvent|charAt|0n|substring|animated|header|noConflict|line|enabled|innerText|contains|only|weight|font|gt|lt|uFFFF|u0128|size|417|Boolean|Date|toggleClass|removeClass|addClass|removeAttr|replaceAll|insertAfter|prependTo|wrap|contentWindow|contentDocument|iframe|children|siblings|prevAll|wrapInner|nextAll|outer|prev|scrollTo|static|marginTop|next|inline|parents|able|cellSpacing|adobeair|cellspacing|522|maxLength|maxlength|readOnly|400|readonly|fast|600|class|slow|1px|htmlFor|reverse|10000|PI|cos|compatible|Function|setData|ie|ra|it|rv|getData|userAgent|navigator|fadeTo|fadeIn|slideToggle|slideUp|slideDown|ig|responseXML|content|1223|NaN|fadeOut|300|protocol|send|setAttribute|option|dataFilter|cssText|changed|be|Accept|stop|With|Requested|Object|can|GMT|property|1970|Jan|01|Thu|Since|If|Type|Content|XMLHTTP|th|Microsoft|td|onreadystatechange|onload|cap|charset|colg|host|tfoot|specified|with|1_|thead|leg|plain|attributes|opt|embed|urlencoded|www|area|hr|ajaxSetup|meta|post|getJSON|getScript|marginLeft|img|elements|pageYOffset|pageXOffset|abbr|serialize|pixelLeft'.split('|'),0,{}));
// $Id: drupal.js,v 1.41.2.4 2009/07/21 08:59:10 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
// $Id: wysiwyg.init.js,v 1.3.2.1 2010/11/13 18:53:22 sun Exp $

jQuery.support = jQuery.support || {}; // D6- only.

Drupal.wysiwyg = Drupal.wysiwyg || { 'instances': {} };

Drupal.wysiwyg.editor = Drupal.wysiwyg.editor || { 'init': {}, 'attach': {}, 'detach': {}, 'instance': {} };

Drupal.wysiwyg.plugins = Drupal.wysiwyg.plugins || {};

(function ($) {
  // Determine support for queryCommandEnabled().
  // An exception should be thrown for non-existing commands.
  // Safari and Chrome (WebKit based) return -1 instead.
  try {
    document.queryCommandEnabled('__wysiwygTestCommand');
    $.support.queryCommandEnabled = false;
  }
  catch (error) {
    $.support.queryCommandEnabled = true;
  }
})(jQuery);
;
// $Id: tabledrag.js,v 1.13.2.5 2009/06/18 12:24:24 goba Exp $

/**
 * Drag and drop table rows with field manipulation.
 *
 * Using the drupal_add_tabledrag() function, any table with weights or parent
 * relationships may be made into draggable tables. Columns containing a field
 * may optionally be hidden, providing a better user experience.
 *
 * Created tableDrag instances may be modified with custom behaviors by
 * overriding the .onDrag, .onDrop, .row.onSwap, and .row.onIndent methods.
 * See blocks.js for an example of adding additional functionality to tableDrag.
 */
Drupal.behaviors.tableDrag = function(context) {
  for (var base in Drupal.settings.tableDrag) {
    if (!$('#' + base + '.tabledrag-processed', context).size()) {
      var tableSettings = Drupal.settings.tableDrag[base];

      $('#' + base).filter(':not(.tabledrag-processed)').each(function() {
        // Create the new tableDrag instance. Save in the Drupal variable
        // to allow other scripts access to the object.
        Drupal.tableDrag[base] = new Drupal.tableDrag(this, tableSettings);
      });

      $('#' + base).addClass('tabledrag-processed');
    }
  }
};

/**
 * Constructor for the tableDrag object. Provides table and field manipulation.
 *
 * @param table
 *   DOM object for the table to be made draggable.
 * @param tableSettings
 *   Settings for the table added via drupal_add_dragtable().
 */
Drupal.tableDrag = function(table, tableSettings) {
  var self = this;

  // Required object variables.
  this.table = table;
  this.tableSettings = tableSettings;
  this.dragObject = null; // Used to hold information about a current drag operation.
  this.rowObject = null; // Provides operations for row manipulation.
  this.oldRowElement = null; // Remember the previous element.
  this.oldY = 0; // Used to determine up or down direction from last mouse move.
  this.changed = false; // Whether anything in the entire table has changed.
  this.maxDepth = 0; // Maximum amount of allowed parenting.
  this.rtl = $(this.table).css('direction') == 'rtl' ? -1 : 1; // Direction of the table.

  // Configure the scroll settings.
  this.scrollSettings = { amount: 4, interval: 50, trigger: 70 };
  this.scrollInterval = null;
  this.scrollY = 0;
  this.windowHeight = 0;

  // Check this table's settings to see if there are parent relationships in
  // this table. For efficiency, large sections of code can be skipped if we
  // don't need to track horizontal movement and indentations.
  this.indentEnabled = false;
  for (group in tableSettings) {
    for (n in tableSettings[group]) {
      if (tableSettings[group][n]['relationship'] == 'parent') {
        this.indentEnabled = true;
      }
      if (tableSettings[group][n]['limit'] > 0) {
        this.maxDepth = tableSettings[group][n]['limit'];
      }
    }
  }
  if (this.indentEnabled) {
    this.indentCount = 1; // Total width of indents, set in makeDraggable.
    // Find the width of indentations to measure mouse movements against.
    // Because the table doesn't need to start with any indentations, we
    // manually append 2 indentations in the first draggable row, measure
    // the offset, then remove.
    var indent = Drupal.theme('tableDragIndentation');
    // Match immediate children of the parent element to allow nesting.
    var testCell = $('> tbody > tr.draggable:first td:first, > tr.draggable:first td:first', table).prepend(indent).prepend(indent);
    this.indentAmount = $('.indentation', testCell).get(1).offsetLeft - $('.indentation', testCell).get(0).offsetLeft;
    $('.indentation', testCell).slice(0, 2).remove();
  }

  // Make each applicable row draggable.
  // Match immediate children of the parent element to allow nesting.
  $('> tr.draggable, > tbody > tr.draggable', table).each(function() { self.makeDraggable(this); });

  // Hide columns containing affected form elements.
  this.hideColumns();

  // Add mouse bindings to the document. The self variable is passed along
  // as event handlers do not have direct access to the tableDrag object.
  $(document).bind('mousemove', function(event) { return self.dragRow(event, self); });
  $(document).bind('mouseup', function(event) { return self.dropRow(event, self); });
};

/**
 * Hide the columns containing form elements according to the settings for
 * this tableDrag instance.
 */
Drupal.tableDrag.prototype.hideColumns = function(){
  for (var group in this.tableSettings) {
    // Find the first field in this group.
    for (var d in this.tableSettings[group]) {
      var field = $('.' + this.tableSettings[group][d]['target'] + ':first', this.table);
      if (field.size() && this.tableSettings[group][d]['hidden']) {
        var hidden = this.tableSettings[group][d]['hidden'];
        var cell = field.parents('td:first');
        break;
      }
    }

    // Hide the column containing this field.
    if (hidden && cell[0] && cell.css('display') != 'none') {
      // Add 1 to our indexes. The nth-child selector is 1 based, not 0 based.
      // Match immediate children of the parent element to allow nesting.
      var columnIndex = $('> td', cell.parent()).index(cell.get(0)) + 1;
      var headerIndex = $('> td:not(:hidden)', cell.parent()).index(cell.get(0)) + 1;
      $('> thead > tr, > tbody > tr, > tr', this.table).each(function(){
        var row = $(this);
        var parentTag = row.parent().get(0).tagName.toLowerCase();
        var index = (parentTag == 'thead') ? headerIndex : columnIndex;

        // Adjust the index to take into account colspans.
        row.children().each(function(n) {
          if (n < index) {
            index -= (this.colSpan && this.colSpan > 1) ? this.colSpan - 1 : 0;
          }
        });
        if (index > 0) {
          cell = row.children(':nth-child(' + index + ')');
          if (cell[0].colSpan > 1) {
            // If this cell has a colspan, simply reduce it.
            cell[0].colSpan = cell[0].colSpan - 1;
          }
          else {
            // Hide table body cells, but remove table header cells entirely
            // (Safari doesn't hide properly).
            parentTag == 'thead' ? cell.remove() : cell.css('display', 'none');
          }
        }
      });
    }
  }
};

/**
 * Find the target used within a particular row and group.
 */
Drupal.tableDrag.prototype.rowSettings = function(group, row) {
  var field = $('.' + group, row);
  for (delta in this.tableSettings[group]) {
    var targetClass = this.tableSettings[group][delta]['target'];
    if (field.is('.' + targetClass)) {
      // Return a copy of the row settings.
      var rowSettings = new Object();
      for (var n in this.tableSettings[group][delta]) {
        rowSettings[n] = this.tableSettings[group][delta][n];
      }
      return rowSettings;
    }
  }
};

/**
 * Take an item and add event handlers to make it become draggable.
 */
Drupal.tableDrag.prototype.makeDraggable = function(item) {
  var self = this;

  // Create the handle.
  var handle = $('<a href="#" class="tabledrag-handle"><div class="handle">&nbsp;</div></a>').attr('title', Drupal.t('Drag to re-order'));
  // Insert the handle after indentations (if any).
  if ($('td:first .indentation:last', item).after(handle).size()) {
    // Update the total width of indentation in this entire table.
    self.indentCount = Math.max($('.indentation', item).size(), self.indentCount);
  }
  else {
    $('td:first', item).prepend(handle);
  }

  // Add hover action for the handle.
  handle.hover(function() {
    self.dragObject == null ? $(this).addClass('tabledrag-handle-hover') : null;
  }, function() {
    self.dragObject == null ? $(this).removeClass('tabledrag-handle-hover') : null;
  });

  // Add the mousedown action for the handle.
  handle.mousedown(function(event) {
    // Create a new dragObject recording the event information.
    self.dragObject = new Object();
    self.dragObject.initMouseOffset = self.getMouseOffset(item, event);
    self.dragObject.initMouseCoords = self.mouseCoords(event);
    if (self.indentEnabled) {
      self.dragObject.indentMousePos = self.dragObject.initMouseCoords;
    }

    // If there's a lingering row object from the keyboard, remove its focus.
    if (self.rowObject) {
      $('a.tabledrag-handle', self.rowObject.element).blur();
    }

    // Create a new rowObject for manipulation of this row.
    self.rowObject = new self.row(item, 'mouse', self.indentEnabled, self.maxDepth, true);

    // Save the position of the table.
    self.table.topY = self.getPosition(self.table).y;
    self.table.bottomY = self.table.topY + self.table.offsetHeight;

    // Add classes to the handle and row.
    $(this).addClass('tabledrag-handle-hover');
    $(item).addClass('drag');

    // Set the document to use the move cursor during drag.
    $('body').addClass('drag');
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }

    // Hack for IE6 that flickers uncontrollably if select lists are moved.
    if (navigator.userAgent.indexOf('MSIE 6.') != -1) {
      $('select', this.table).css('display', 'none');
    }

    // Hack for Konqueror, prevent the blur handler from firing.
    // Konqueror always gives links focus, even after returning false on mousedown.
    self.safeBlur = false;

    // Call optional placeholder function.
    self.onDrag();
    return false;
  });

  // Prevent the anchor tag from jumping us to the top of the page.
  handle.click(function() {
    return false;
  });

  // Similar to the hover event, add a class when the handle is focused.
  handle.focus(function() {
    $(this).addClass('tabledrag-handle-hover');
    self.safeBlur = true;
  });

  // Remove the handle class on blur and fire the same function as a mouseup.
  handle.blur(function(event) {
    $(this).removeClass('tabledrag-handle-hover');
    if (self.rowObject && self.safeBlur) {
      self.dropRow(event, self);
    }
  });

  // Add arrow-key support to the handle.
  handle.keydown(function(event) {
    // If a rowObject doesn't yet exist and this isn't the tab key.
    if (event.keyCode != 9 && !self.rowObject) {
      self.rowObject = new self.row(item, 'keyboard', self.indentEnabled, self.maxDepth, true);
    }

    var keyChange = false;
    switch (event.keyCode) {
      case 37: // Left arrow.
      case 63234: // Safari left arrow.
        keyChange = true;
        self.rowObject.indent(-1 * self.rtl);
        break;
      case 38: // Up arrow.
      case 63232: // Safari up arrow.
        var previousRow = $(self.rowObject.element).prev('tr').get(0);
        while (previousRow && $(previousRow).is(':hidden')) {
          previousRow = $(previousRow).prev('tr').get(0);
        }
        if (previousRow) {
          self.safeBlur = false; // Do not allow the onBlur cleanup.
          self.rowObject.direction = 'up';
          keyChange = true;

          if ($(item).is('.tabledrag-root')) {
            // Swap with the previous top-level row..
            var groupHeight = 0;
            while (previousRow && $('.indentation', previousRow).size()) {
              previousRow = $(previousRow).prev('tr').get(0);
              groupHeight += $(previousRow).is(':hidden') ? 0 : previousRow.offsetHeight;
            }
            if (previousRow) {
              self.rowObject.swap('before', previousRow);
              // No need to check for indentation, 0 is the only valid one.
              window.scrollBy(0, -groupHeight);
            }
          }
          else if (self.table.tBodies[0].rows[0] != previousRow || $(previousRow).is('.draggable')) {
            // Swap with the previous row (unless previous row is the first one
            // and undraggable).
            self.rowObject.swap('before', previousRow);
            self.rowObject.interval = null;
            self.rowObject.indent(0);
            window.scrollBy(0, -parseInt(item.offsetHeight));
          }
          handle.get(0).focus(); // Regain focus after the DOM manipulation.
        }
        break;
      case 39: // Right arrow.
      case 63235: // Safari right arrow.
        keyChange = true;
        self.rowObject.indent(1 * self.rtl);
        break;
      case 40: // Down arrow.
      case 63233: // Safari down arrow.
        var nextRow = $(self.rowObject.group).filter(':last').next('tr').get(0);
        while (nextRow && $(nextRow).is(':hidden')) {
          nextRow = $(nextRow).next('tr').get(0);
        }
        if (nextRow) {
          self.safeBlur = false; // Do not allow the onBlur cleanup.
          self.rowObject.direction = 'down';
          keyChange = true;

          if ($(item).is('.tabledrag-root')) {
            // Swap with the next group (necessarily a top-level one).
            var groupHeight = 0;
            nextGroup = new self.row(nextRow, 'keyboard', self.indentEnabled, self.maxDepth, false);
            if (nextGroup) {
              $(nextGroup.group).each(function () {groupHeight += $(this).is(':hidden') ? 0 : this.offsetHeight});
              nextGroupRow = $(nextGroup.group).filter(':last').get(0);
              self.rowObject.swap('after', nextGroupRow);
              // No need to check for indentation, 0 is the only valid one.
              window.scrollBy(0, parseInt(groupHeight));
            }
          }
          else {
            // Swap with the next row.
            self.rowObject.swap('after', nextRow);
            self.rowObject.interval = null;
            self.rowObject.indent(0);
            window.scrollBy(0, parseInt(item.offsetHeight));
          }
          handle.get(0).focus(); // Regain focus after the DOM manipulation.
        }
        break;
    }

    if (self.rowObject && self.rowObject.changed == true) {
      $(item).addClass('drag');
      if (self.oldRowElement) {
        $(self.oldRowElement).removeClass('drag-previous');
      }
      self.oldRowElement = item;
      self.restripeTable();
      self.onDrag();
    }

    // Returning false if we have an arrow key to prevent scrolling.
    if (keyChange) {
      return false;
    }
  });

  // Compatibility addition, return false on keypress to prevent unwanted scrolling.
  // IE and Safari will supress scrolling on keydown, but all other browsers
  // need to return false on keypress. http://www.quirksmode.org/js/keys.html
  handle.keypress(function(event) {
    switch (event.keyCode) {
      case 37: // Left arrow.
      case 38: // Up arrow.
      case 39: // Right arrow.
      case 40: // Down arrow.
        return false;
    }
  });
};

/**
 * Mousemove event handler, bound to document.
 */
Drupal.tableDrag.prototype.dragRow = function(event, self) {
  if (self.dragObject) {
    self.currentMouseCoords = self.mouseCoords(event);

    var y = self.currentMouseCoords.y - self.dragObject.initMouseOffset.y;
    var x = self.currentMouseCoords.x - self.dragObject.initMouseOffset.x;

    // Check for row swapping and vertical scrolling.
    if (y != self.oldY) {
      self.rowObject.direction = y > self.oldY ? 'down' : 'up';
      self.oldY = y; // Update the old value.

      // Check if the window should be scrolled (and how fast).
      var scrollAmount = self.checkScroll(self.currentMouseCoords.y);
      // Stop any current scrolling.
      clearInterval(self.scrollInterval);
      // Continue scrolling if the mouse has moved in the scroll direction.
      if (scrollAmount > 0 && self.rowObject.direction == 'down' || scrollAmount < 0 && self.rowObject.direction == 'up') {
        self.setScroll(scrollAmount);
      }

      // If we have a valid target, perform the swap and restripe the table.
      var currentRow = self.findDropTargetRow(x, y);
      if (currentRow) {
        if (self.rowObject.direction == 'down') {
          self.rowObject.swap('after', currentRow, self);
        }
        else {
          self.rowObject.swap('before', currentRow, self);
        }
        self.restripeTable();
      }
    }

    // Similar to row swapping, handle indentations.
    if (self.indentEnabled) {
      var xDiff = self.currentMouseCoords.x - self.dragObject.indentMousePos.x;
      // Set the number of indentations the mouse has been moved left or right.
      var indentDiff = Math.round(xDiff / self.indentAmount * self.rtl);
      // Indent the row with our estimated diff, which may be further
      // restricted according to the rows around this row.
      var indentChange = self.rowObject.indent(indentDiff);
      // Update table and mouse indentations.
      self.dragObject.indentMousePos.x += self.indentAmount * indentChange * self.rtl;
      self.indentCount = Math.max(self.indentCount, self.rowObject.indents);
    }

    return false;
  }
};

/**
 * Mouseup event handler, bound to document.
 * Blur event handler, bound to drag handle for keyboard support.
 */
Drupal.tableDrag.prototype.dropRow = function(event, self) {
  // Drop row functionality shared between mouseup and blur events.
  if (self.rowObject != null) {
    var droppedRow = self.rowObject.element;
    // The row is already in the right place so we just release it.
    if (self.rowObject.changed == true) {
      // Update the fields in the dropped row.
      self.updateFields(droppedRow);

      // If a setting exists for affecting the entire group, update all the
      // fields in the entire dragged group.
      for (var group in self.tableSettings) {
        var rowSettings = self.rowSettings(group, droppedRow);
        if (rowSettings.relationship == 'group') {
          for (n in self.rowObject.children) {
            self.updateField(self.rowObject.children[n], group);
          }
        }
      }

      self.rowObject.markChanged();
      if (self.changed == false) {
        $(Drupal.theme('tableDragChangedWarning')).insertAfter(self.table).hide().fadeIn('slow');
        self.changed = true;
      }
    }

    if (self.indentEnabled) {
      self.rowObject.removeIndentClasses();
    }
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }
    $(droppedRow).removeClass('drag').addClass('drag-previous');
    self.oldRowElement = droppedRow;
    self.onDrop();
    self.rowObject = null;
  }

  // Functionality specific only to mouseup event.
  if (self.dragObject != null) {
    $('.tabledrag-handle', droppedRow).removeClass('tabledrag-handle-hover');

    self.dragObject = null;
    $('body').removeClass('drag');
    clearInterval(self.scrollInterval);

    // Hack for IE6 that flickers uncontrollably if select lists are moved.
    if (navigator.userAgent.indexOf('MSIE 6.') != -1) {
      $('select', this.table).css('display', 'block');
    }
  }
};

/**
 * Get the position of an element by adding up parent offsets in the DOM tree.
 */
Drupal.tableDrag.prototype.getPosition = function(element){
  var left = 0;
  var top  = 0;
  // Because Safari doesn't report offsetHeight on table rows, but does on table
  // cells, grab the firstChild of the row and use that instead.
  // http://jacob.peargrove.com/blog/2006/technical/table-row-offsettop-bug-in-safari
  if (element.offsetHeight == 0) {
    element = element.firstChild; // a table cell
  }

  while (element.offsetParent){
    left   += element.offsetLeft;
    top    += element.offsetTop;
    element = element.offsetParent;
  }

  left += element.offsetLeft;
  top  += element.offsetTop;

  return {x:left, y:top};
};

/**
 * Get the mouse coordinates from the event (allowing for browser differences).
 */
Drupal.tableDrag.prototype.mouseCoords = function(event){
  if (event.pageX || event.pageY) {
    return {x:event.pageX, y:event.pageY};
  }
  return {
    x:event.clientX + document.body.scrollLeft - document.body.clientLeft,
    y:event.clientY + document.body.scrollTop  - document.body.clientTop
  };
};

/**
 * Given a target element and a mouse event, get the mouse offset from that
 * element. To do this we need the element's position and the mouse position.
 */
Drupal.tableDrag.prototype.getMouseOffset = function(target, event) {
  var docPos   = this.getPosition(target);
  var mousePos = this.mouseCoords(event);
  return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
};

/**
 * Find the row the mouse is currently over. This row is then taken and swapped
 * with the one being dragged.
 *
 * @param x
 *   The x coordinate of the mouse on the page (not the screen).
 * @param y
 *   The y coordinate of the mouse on the page (not the screen).
 */
Drupal.tableDrag.prototype.findDropTargetRow = function(x, y) {
  var rows = this.table.tBodies[0].rows;
  for (var n=0; n<rows.length; n++) {
    var row = rows[n];
    var indentDiff = 0;
    // Safari fix see Drupal.tableDrag.prototype.getPosition()
    if (row.offsetHeight == 0) {
      var rowY = this.getPosition(row.firstChild).y;
      var rowHeight = parseInt(row.firstChild.offsetHeight)/2;
    }
    // Other browsers.
    else {
      var rowY = this.getPosition(row).y;
      var rowHeight = parseInt(row.offsetHeight)/2;
    }

    // Because we always insert before, we need to offset the height a bit.
    if ((y > (rowY - rowHeight)) && (y < (rowY + rowHeight))) {
      if (this.indentEnabled) {
        // Check that this row is not a child of the row being dragged.
        for (n in this.rowObject.group) {
          if (this.rowObject.group[n] == row) {
            return null;
          }
        }
      }
      // Check that swapping with this row is allowed.
      if (!this.rowObject.isValidSwap(row)) {
        return null;
      }

      // We may have found the row the mouse just passed over, but it doesn't
      // take into account hidden rows. Skip backwards until we find a draggable
      // row.
      while ($(row).is(':hidden') && $(row).prev('tr').is(':hidden')) {
        row = $(row).prev('tr').get(0);
      }
      return row;
    }
  }
  return null;
};

/**
 * After the row is dropped, update the table fields according to the settings
 * set for this table.
 *
 * @param changedRow
 *   DOM object for the row that was just dropped.
 */
Drupal.tableDrag.prototype.updateFields = function(changedRow) {
  for (var group in this.tableSettings) {
    // Each group may have a different setting for relationship, so we find
    // the source rows for each seperately.
    this.updateField(changedRow, group);
  }
};

/**
 * After the row is dropped, update a single table field according to specific
 * settings.
 *
 * @param changedRow
 *   DOM object for the row that was just dropped.
 * @param group
 *   The settings group on which field updates will occur.
 */
Drupal.tableDrag.prototype.updateField = function(changedRow, group) {
  var rowSettings = this.rowSettings(group, changedRow);

  // Set the row as it's own target.
  if (rowSettings.relationship == 'self' || rowSettings.relationship == 'group') {
    var sourceRow = changedRow;
  }
  // Siblings are easy, check previous and next rows.
  else if (rowSettings.relationship == 'sibling') {
    var previousRow = $(changedRow).prev('tr').get(0);
    var nextRow = $(changedRow).next('tr').get(0);
    var sourceRow = changedRow;
    if ($(previousRow).is('.draggable') && $('.' + group, previousRow).length) {
      if (this.indentEnabled) {
        if ($('.indentations', previousRow).size() == $('.indentations', changedRow)) {
          sourceRow = previousRow;
        }
      }
      else {
        sourceRow = previousRow;
      }
    }
    else if ($(nextRow).is('.draggable') && $('.' + group, nextRow).length) {
      if (this.indentEnabled) {
        if ($('.indentations', nextRow).size() == $('.indentations', changedRow)) {
          sourceRow = nextRow;
        }
      }
      else {
        sourceRow = nextRow;
      }
    }
  }
  // Parents, look up the tree until we find a field not in this group.
  // Go up as many parents as indentations in the changed row.
  else if (rowSettings.relationship == 'parent') {
    var previousRow = $(changedRow).prev('tr');
    while (previousRow.length && $('.indentation', previousRow).length >= this.rowObject.indents) {
      previousRow = previousRow.prev('tr');
    }
    // If we found a row.
    if (previousRow.length) {
      sourceRow = previousRow[0];
    }
    // Otherwise we went all the way to the left of the table without finding
    // a parent, meaning this item has been placed at the root level.
    else {
      // Use the first row in the table as source, because it's garanteed to
      // be at the root level. Find the first item, then compare this row
      // against it as a sibling.
      sourceRow = $('tr.draggable:first').get(0);
      if (sourceRow == this.rowObject.element) {
        sourceRow = $(this.rowObject.group[this.rowObject.group.length - 1]).next('tr.draggable').get(0);
      }
      var useSibling = true;
    }
  }

  // Because we may have moved the row from one category to another,
  // take a look at our sibling and borrow its sources and targets.
  this.copyDragClasses(sourceRow, changedRow, group);
  rowSettings = this.rowSettings(group, changedRow);

  // In the case that we're looking for a parent, but the row is at the top
  // of the tree, copy our sibling's values.
  if (useSibling) {
    rowSettings.relationship = 'sibling';
    rowSettings.source = rowSettings.target;
  }

  var targetClass = '.' + rowSettings.target;
  var targetElement = $(targetClass, changedRow).get(0);

  // Check if a target element exists in this row.
  if (targetElement) {
    var sourceClass = '.' + rowSettings.source;
    var sourceElement = $(sourceClass, sourceRow).get(0);
    switch (rowSettings.action) {
      case 'depth':
        // Get the depth of the target row.
        targetElement.value = $('.indentation', $(sourceElement).parents('tr:first')).size();
        break;
      case 'match':
        // Update the value.
        targetElement.value = sourceElement.value;
        break;
      case 'order':
        var siblings = this.rowObject.findSiblings(rowSettings);
        if ($(targetElement).is('select')) {
          // Get a list of acceptable values.
          var values = new Array();
          $('option', targetElement).each(function() {
            values.push(this.value);
          });
          var maxVal = values[values.length - 1];
          // Populate the values in the siblings.
          $(targetClass, siblings).each(function() {
            // If there are more items than possible values, assign the maximum value to the row. 
            if (values.length > 0) {
              this.value = values.shift();
            }
            else {
              this.value = maxVal;
            }
          });
        }
        else {
          // Assume a numeric input field.
          var weight = parseInt($(targetClass, siblings[0]).val()) || 0;
          $(targetClass, siblings).each(function() {
            this.value = weight;
            weight++;
          });
        }
        break;
    }
  }
};

/**
 * Copy all special tableDrag classes from one row's form elements to a
 * different one, removing any special classes that the destination row
 * may have had.
 */
Drupal.tableDrag.prototype.copyDragClasses = function(sourceRow, targetRow, group) {
  var sourceElement = $('.' + group, sourceRow);
  var targetElement = $('.' + group, targetRow);
  if (sourceElement.length && targetElement.length) {
    targetElement[0].className = sourceElement[0].className;
  }
};

Drupal.tableDrag.prototype.checkScroll = function(cursorY) {
  var de  = document.documentElement;
  var b  = document.body;

  var windowHeight = this.windowHeight = window.innerHeight || (de.clientHeight && de.clientWidth != 0 ? de.clientHeight : b.offsetHeight);
  var scrollY = this.scrollY = (document.all ? (!de.scrollTop ? b.scrollTop : de.scrollTop) : (window.pageYOffset ? window.pageYOffset : window.scrollY));
  var trigger = this.scrollSettings.trigger;
  var delta = 0;

  // Return a scroll speed relative to the edge of the screen.
  if (cursorY - scrollY > windowHeight - trigger) {
    delta = trigger / (windowHeight + scrollY - cursorY);
    delta = (delta > 0 && delta < trigger) ? delta : trigger;
    return delta * this.scrollSettings.amount;
  }
  else if (cursorY - scrollY < trigger) {
    delta = trigger / (cursorY - scrollY);
    delta = (delta > 0 && delta < trigger) ? delta : trigger;
    return -delta * this.scrollSettings.amount;
  }
};

Drupal.tableDrag.prototype.setScroll = function(scrollAmount) {
  var self = this;

  this.scrollInterval = setInterval(function() {
    // Update the scroll values stored in the object.
    self.checkScroll(self.currentMouseCoords.y);
    var aboveTable = self.scrollY > self.table.topY;
    var belowTable = self.scrollY + self.windowHeight < self.table.bottomY;
    if (scrollAmount > 0 && belowTable || scrollAmount < 0 && aboveTable) {
      window.scrollBy(0, scrollAmount);
    }
  }, this.scrollSettings.interval);
};

Drupal.tableDrag.prototype.restripeTable = function() {
  // :even and :odd are reversed because jquery counts from 0 and
  // we count from 1, so we're out of sync.
  // Match immediate children of the parent element to allow nesting.
  $('> tbody > tr.draggable, > tr.draggable', this.table)
    .filter(':odd').filter('.odd')
      .removeClass('odd').addClass('even')
    .end().end()
    .filter(':even').filter('.even')
      .removeClass('even').addClass('odd');
};

/**
 * Stub function. Allows a custom handler when a row begins dragging.
 */
Drupal.tableDrag.prototype.onDrag = function() {
  return null;
};

/**
 * Stub function. Allows a custom handler when a row is dropped.
 */
Drupal.tableDrag.prototype.onDrop = function() {
  return null;
};

/**
 * Constructor to make a new object to manipulate a table row.
 *
 * @param tableRow
 *   The DOM element for the table row we will be manipulating.
 * @param method
 *   The method in which this row is being moved. Either 'keyboard' or 'mouse'.
 * @param indentEnabled
 *   Whether the containing table uses indentations. Used for optimizations.
 * @param maxDepth
 *   The maximum amount of indentations this row may contain.
 * @param addClasses
 *   Whether we want to add classes to this row to indicate child relationships.
 */
Drupal.tableDrag.prototype.row = function(tableRow, method, indentEnabled, maxDepth, addClasses) {
  this.element = tableRow;
  this.method = method;
  this.group = new Array(tableRow);
  this.groupDepth = $('.indentation', tableRow).size();
  this.changed = false;
  this.table = $(tableRow).parents('table:first').get(0);
  this.indentEnabled = indentEnabled;
  this.maxDepth = maxDepth;
  this.direction = ''; // Direction the row is being moved.

  if (this.indentEnabled) {
    this.indents = $('.indentation', tableRow).size();
    this.children = this.findChildren(addClasses);
    this.group = $.merge(this.group, this.children);
    // Find the depth of this entire group.
    for (var n = 0; n < this.group.length; n++) {
      this.groupDepth = Math.max($('.indentation', this.group[n]).size(), this.groupDepth);
    }
  }
};

/**
 * Find all children of rowObject by indentation.
 *
 * @param addClasses
 *   Whether we want to add classes to this row to indicate child relationships.
 */
Drupal.tableDrag.prototype.row.prototype.findChildren = function(addClasses) {
  var parentIndentation = this.indents;
  var currentRow = $(this.element, this.table).next('tr.draggable');
  var rows = new Array();
  var child = 0;
  while (currentRow.length) {
    var rowIndentation = $('.indentation', currentRow).length;
    // A greater indentation indicates this is a child.
    if (rowIndentation > parentIndentation) {
      child++;
      rows.push(currentRow[0]);
      if (addClasses) {
        $('.indentation', currentRow).each(function(indentNum) {
          if (child == 1 && (indentNum == parentIndentation)) {
            $(this).addClass('tree-child-first');
          }
          if (indentNum == parentIndentation) {
            $(this).addClass('tree-child');
          }
          else if (indentNum > parentIndentation) {
            $(this).addClass('tree-child-horizontal');
          }
        });
      }
    }
    else {
      break;
    }
    currentRow = currentRow.next('tr.draggable');
  }
  if (addClasses && rows.length) {
    $('.indentation:nth-child(' + (parentIndentation + 1) + ')', rows[rows.length - 1]).addClass('tree-child-last');
  }
  return rows;
};

/**
 * Ensure that two rows are allowed to be swapped.
 *
 * @param row
 *   DOM object for the row being considered for swapping.
 */
Drupal.tableDrag.prototype.row.prototype.isValidSwap = function(row) {
  if (this.indentEnabled) {
    var prevRow, nextRow;
    if (this.direction == 'down') {
      prevRow = row;
      nextRow = $(row).next('tr').get(0);
    }
    else {
      prevRow = $(row).prev('tr').get(0);
      nextRow = row;
    }
    this.interval = this.validIndentInterval(prevRow, nextRow);

    // We have an invalid swap if the valid indentations interval is empty.
    if (this.interval.min > this.interval.max) {
      return false;
    }
  }

  // Do not let an un-draggable first row have anything put before it.
  if (this.table.tBodies[0].rows[0] == row && $(row).is(':not(.draggable)')) {
    return false;
  }

  return true;
};

/**
 * Perform the swap between two rows.
 *
 * @param position
 *   Whether the swap will occur 'before' or 'after' the given row.
 * @param row
 *   DOM element what will be swapped with the row group.
 */
Drupal.tableDrag.prototype.row.prototype.swap = function(position, row) {
  $(row)[position](this.group);
  this.changed = true;
  this.onSwap(row);
};

/**
 * Determine the valid indentations interval for the row at a given position
 * in the table.
 *
 * @param prevRow
 *   DOM object for the row before the tested position
 *   (or null for first position in the table).
 * @param nextRow
 *   DOM object for the row after the tested position
 *   (or null for last position in the table).
 */
Drupal.tableDrag.prototype.row.prototype.validIndentInterval = function (prevRow, nextRow) {
  var minIndent, maxIndent;

  // Minimum indentation:
  // Do not orphan the next row.
  minIndent = nextRow ? $('.indentation', nextRow).size() : 0;

  // Maximum indentation:
  if (!prevRow || $(this.element).is('.tabledrag-root')) {
    // Do not indent the first row in the table or 'root' rows..
    maxIndent = 0;
  }
  else {
    // Do not go deeper than as a child of the previous row.
    maxIndent = $('.indentation', prevRow).size() + ($(prevRow).is('.tabledrag-leaf') ? 0 : 1);
    // Limit by the maximum allowed depth for the table.
    if (this.maxDepth) {
      maxIndent = Math.min(maxIndent, this.maxDepth - (this.groupDepth - this.indents));
    }
  }

  return {'min':minIndent, 'max':maxIndent};
}

/**
 * Indent a row within the legal bounds of the table.
 *
 * @param indentDiff
 *   The number of additional indentations proposed for the row (can be
 *   positive or negative). This number will be adjusted to nearest valid
 *   indentation level for the row.
 */
Drupal.tableDrag.prototype.row.prototype.indent = function(indentDiff) {
  // Determine the valid indentations interval if not available yet.
  if (!this.interval) {
    prevRow = $(this.element).prev('tr').get(0);
    nextRow = $(this.group).filter(':last').next('tr').get(0);
    this.interval = this.validIndentInterval(prevRow, nextRow);
  }

  // Adjust to the nearest valid indentation.
  var indent = this.indents + indentDiff;
  indent = Math.max(indent, this.interval.min);
  indent = Math.min(indent, this.interval.max);
  indentDiff = indent - this.indents;

  for (var n = 1; n <= Math.abs(indentDiff); n++) {
    // Add or remove indentations.
    if (indentDiff < 0) {
      $('.indentation:first', this.group).remove();
      this.indents--;
    }
    else {
      $('td:first', this.group).prepend(Drupal.theme('tableDragIndentation'));
      this.indents++;
    }
  }
  if (indentDiff) {
    // Update indentation for this row.
    this.changed = true;
    this.groupDepth += indentDiff;
    this.onIndent();
  }

  return indentDiff;
};

/**
 * Find all siblings for a row, either according to its subgroup or indentation.
 * Note that the passed in row is included in the list of siblings.
 *
 * @param settings
 *   The field settings we're using to identify what constitutes a sibling.
 */
Drupal.tableDrag.prototype.row.prototype.findSiblings = function(rowSettings) {
  var siblings = new Array();
  var directions = new Array('prev', 'next');
  var rowIndentation = this.indents;
  for (var d in directions) {
    var checkRow = $(this.element)[directions[d]]();
    while (checkRow.length) {
      // Check that the sibling contains a similar target field.
      if ($('.' + rowSettings.target, checkRow)) {
        // Either add immediately if this is a flat table, or check to ensure
        // that this row has the same level of indentaiton.
        if (this.indentEnabled) {
          var checkRowIndentation = $('.indentation', checkRow).length
        }

        if (!(this.indentEnabled) || (checkRowIndentation == rowIndentation)) {
          siblings.push(checkRow[0]);
        }
        else if (checkRowIndentation < rowIndentation) {
          // No need to keep looking for siblings when we get to a parent.
          break;
        }
      }
      else {
        break;
      }
      checkRow = $(checkRow)[directions[d]]();
    }
    // Since siblings are added in reverse order for previous, reverse the
    // completed list of previous siblings. Add the current row and continue.
    if (directions[d] == 'prev') {
      siblings.reverse();
      siblings.push(this.element);
    }
  }
  return siblings;
};

/**
 * Remove indentation helper classes from the current row group.
 */
Drupal.tableDrag.prototype.row.prototype.removeIndentClasses = function() {
  for (n in this.children) {
    $('.indentation', this.children[n])
      .removeClass('tree-child')
      .removeClass('tree-child-first')
      .removeClass('tree-child-last')
      .removeClass('tree-child-horizontal');
  }
};

/**
 * Add an asterisk or other marker to the changed row.
 */
Drupal.tableDrag.prototype.row.prototype.markChanged = function() {
  var marker = Drupal.theme('tableDragChangedMarker');
  var cell = $('td:first', this.element);
  if ($('span.tabledrag-changed', cell).length == 0) {
    cell.append(marker);
  }
};

/**
 * Stub function. Allows a custom handler when a row is indented.
 */
Drupal.tableDrag.prototype.row.prototype.onIndent = function() {
  return null;
};

/**
 * Stub function. Allows a custom handler when a row is swapped.
 */
Drupal.tableDrag.prototype.row.prototype.onSwap = function(swappedRow) {
  return null;
};

Drupal.theme.prototype.tableDragChangedMarker = function () {
  return '<span class="warning tabledrag-changed">*</span>';
};

Drupal.theme.prototype.tableDragIndentation = function () {
  return '<div class="indentation">&nbsp;</div>';
};

Drupal.theme.prototype.tableDragChangedWarning = function () {
  return '<div class="warning">' + Drupal.theme('tableDragChangedMarker') + ' ' + Drupal.t("Changes made in this table will not be saved until the form is submitted.") + '</div>';
};
;
/* $Id: admin_menu.js,v 1.7.2.9 2010/02/20 23:53:18 sun Exp $ */

$(document).ready(function() {
  if (!$('#admin-menu').length) {
    return;
  }

  // Apply margin-top if enabled; directly applying marginTop doesn't work in IE.
  if (Drupal && Drupal.settings && Drupal.settings.admin_menu) {
    if (Drupal.settings.admin_menu.margin_top) {
      $('body').addClass('admin-menu');
    }
    if (Drupal.settings.admin_menu.position_fixed) {
      $('#admin-menu').css('position', 'fixed');
    }
    // Move page tabs into administration menu.
    if (Drupal.settings.admin_menu.tweak_tabs) {
      $('ul.tabs.primary li').each(function() {
        $(this).addClass('admin-menu-tab').appendTo('#admin-menu > ul');
      });
      $('ul.tabs.secondary').appendTo('#admin-menu > ul > li.admin-menu-tab.active').removeClass('secondary');
    }
    // Collapse fieldsets on Modules page. For why multiple selectors see #111719.
    if (Drupal.settings.admin_menu.tweak_modules) {
      $('#system-modules fieldset:not(.collapsed), #system-modules-1 fieldset:not(.collapsed)').addClass('collapsed');
    }
  }

  // Hover emulation for IE 6.
  if ($.browser.msie && parseInt(jQuery.browser.version) == 6) {
    $('#admin-menu li').hover(function() {
      $(this).addClass('iehover');
    }, function() {
      $(this).removeClass('iehover');
    });
  }

  // Delayed mouseout.
  $('#admin-menu li').hover(function() {
    // Stop the timer.
    clearTimeout(this.sfTimer);
    // Display child lists.
    $('> ul', this).css({left: 'auto', display: 'block'})
      // Immediately hide nephew lists.
      .parent().siblings('li').children('ul').css({left: '-999em', display: 'none'});
  }, function() {
    // Start the timer.
    var uls = $('> ul', this);
    this.sfTimer = setTimeout(function() {
      uls.css({left: '-999em', display: 'none'});
    }, 400);
  });
});
;
// $Id: ajax_load.js,v 1.14 2010/12/02 20:19:22 markuspetrux Exp $

(function ($) {

Drupal.AjaxLoad = Drupal.AjaxLoad || { externalStyles: [], externalScripts: [], loadPending: [] };

/**
 * Load JavaScript and CSS files and data.
 */
Drupal.AjaxLoad.loadFiles = function (target, response) {
  // Initialize the list of currently loaded external stylesheets.
  if (!Drupal.AjaxLoad.externalStyles.length) {
    if (Drupal.settings.AjaxLoad && Drupal.settings.AjaxLoad['css']) {
      $.each(Drupal.settings.AjaxLoad['css'], function(i, path) {
        Drupal.AjaxLoad.externalStyles.push(path);
      });
    }
    else {
      $('link[type="text/css"]').each(function() {
        Drupal.AjaxLoad.externalStyles.push($(this).attr('href'));
      });
    }
  }

  // Initialize the list of currently loaded external scripts.
  if (!Drupal.AjaxLoad.externalScripts.length) {
    if (Drupal.settings.AjaxLoad && Drupal.settings.AjaxLoad['scripts']) {
      $.each(Drupal.settings.AjaxLoad['scripts'], function(i, path) {
        Drupal.AjaxLoad.externalScripts.push(path);
      });
    }
    else {
      $('script[src]').each(function() {
        Drupal.AjaxLoad.externalScripts.push($(this).attr('src'));
      });
    }
  }

  // Handle scripts. Do this first so that behaviors can access them easily.
  if (response.scripts) {
    // Each Ajax operation needs its own counter.
    var index = Drupal.AjaxLoad.loadPending.length;
    Drupal.AjaxLoad.loadPending[index] = 0;
    if (!response.__customSettings && response.scripts.setting) {
      $.extend(true, Drupal.settings, response.scripts.setting);
    }
    // Inline scripts will be handled separately.
    var types = ['core', 'module', 'theme'];
    $.each(types, function (i, type) {
      if (response.scripts[type]) {
        $.each(response.scripts[type], function (src, data) {
          // Load scripts.
          src = Drupal.settings.basePath + src;
          // Test if the script already exists.
          var found = false;
          for (var j = 0; j < Drupal.AjaxLoad.externalScripts.length; j++) {
            if (Drupal.AjaxLoad.externalScripts[j].indexOf(src) == 0) {
              found = true;
              break;
            }
          }
          if (!found) {
            Drupal.AjaxLoad.loadPending[index]++;
            $.getScript(src, function () {
              Drupal.AjaxLoad.externalScripts.push(src);
              Drupal.AjaxLoad.loadComplete(index, target, response);
            });
          }
        });
      }
    });
    // Ensure Drupal behaviors are attached to new content, even when no
    // new external scripts have been loaded.
    if (Drupal.AjaxLoad.loadPending[index] == 0) {
      Drupal.attachBehaviors(target);
      // Ensure inline scripts are parsed after all external scripts have loaded.
      Drupal.AjaxLoad.loadInline(response);
    }
  }

  // Handle stylesheets.
  if (response.css) {
    var types = ['module', 'theme'];
    $.each(response.css, function (media, files) {
      $.each(types, function (i, type) {
        if (files[type]) {
          $.each(files[type], function (src, data) {
            // Load stylesheets.
            src = Drupal.settings.basePath + src;
            // Test if the stylesheet already exists.
            var found = false;
            for (var j = 0; j < Drupal.AjaxLoad.externalStyles.length; j++) {
              if (Drupal.AjaxLoad.externalStyles[j].indexOf(src) == 0) {
                found = true;
                break;
              }
            }
            if (!found) {
              Drupal.AjaxLoad.externalStyles.push(src);
              $('<link type="text/css" rel="stylesheet" media="' + media + '" href="' + src + '" />').appendTo('head');
            }
          });
        }
      });
    });
  }
};

/**
 * Parse inline scripts after all external scripts have loaded.
 */
Drupal.AjaxLoad.loadInline = function(response) {
  // Handle inline scripts.
  if (response.scripts.inline) {
    $.each(response.scripts.inline, function (i, script) {
      // document.write calls would mess things up.
      if (script.code.indexOf('document.write') == -1) {
        eval(script.code);
      }
    });
  }
};

/**
 * When all scripts have loaded, attach behaviors.
 */
Drupal.AjaxLoad.loadComplete = function(index, target, response) {
  Drupal.AjaxLoad.loadPending[index]--;
  if (Drupal.AjaxLoad.loadPending[index] == 0) {
    Drupal.attachBehaviors(target);
    // Ensure inline scripts are parsed after all external scripts have loaded.
    Drupal.AjaxLoad.loadInline(response);
  }
};

})(jQuery);
;
// $Id: og.js,v 1.9.2.3 2010/01/24 14:44:56 amitaibu Exp $

// Content type form
Drupal.behaviors.og_content_type = function() {
  // Disable the group limit textarea if the content type is not a standard group post
  $('input[name="og_content_type_usage"]').click(function(){
    if (!$('#edit-og-content-type-usage-group-post-standard').attr('checked')) {
      $('#edit-og-max-groups').attr('disabled','disabled');
    } else {
      $('#edit-og-max-groups').removeAttr('disabled');
    }
  });
  
  // Initial check to see if content type is standard group post
  if (!$('#edit-og-content-type-usage-group-post-standard').attr('checked')) {
    $('#edit-og-max-groups').attr('disabled','disabled');
  };
}


Drupal.verticalTabs = Drupal.verticalTabs || {};

Drupal.verticalTabs.og_nodeapi = function() {
  var values = [];
  $('.vertical-tabs-og_nodeapi #edit-og-groups :selected')
    .each(function (i, selected) {
      values[i] = $(selected).text();
    });

  return values.join(', ');
}

Drupal.verticalTabs.og = function() {
  var type = $('.vertical-tabs-og input[type=radio]:checked').val();
  
  switch (type) {
    case 'group':
      return Drupal.t('Group node');
      break;
      
    case 'omitted':
      return Drupal.t('May not be posted into a group.');
      break;
      
    case 'group_post_standard':
      return Drupal.t('Standard group post');
      break;
      
    case 'group_post_wiki':
      return Drupal.t('Wiki group post');
      break;
  }
}
;
// $Id: panels.js,v 1.2.4.1 2009/10/05 22:40:35 merlinofchaos Exp $

(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
// Javascript for user_relationships_ui.module

// Creating our own namespace for the module
Drupal.user_relationships_ui = {};

if (Drupal.jsEnabled) {
  $(document).ready(function() {
    // Any links that we have created in the ui module are
    // Given a click handler so you can display the popup correctly
    $('a.user_relationships_popup_link').click(function(e) {
      var buttoncode = e.which ? e.which : e.button; // msie specific checks does not support e.which
      // If position is fixed, allow for %'s.
      position = Drupal.settings.user_relationships_ui.position.position;
      left = Drupal.settings.user_relationships_ui.position.left;
      xtop = Drupal.settings.user_relationships_ui.position.top;
      
      if(position == "fixed") {
        // If left is defined in a % (.5) calculate left requirement
        if(left <= 1) {
          // Window width * desired - UI width
          left = Math.round(($(window).width()*left) - ($("#user_relationships_popup_form").width()/2));
        }
        // If top is define in a % (.33) calculate top requirement
        if(xtop <= 1) {
          // Window height * desired - UI height (which is an unknown)
          xtop = Math.round(($(window).height()*xtop));// - ($("#user_relationships_popup_form").height()/2));
        }
      } else {
      left = (e.pageX ? e.pageX : e.clientX) + Number(left); // msie specific checks does not support e.page
      if (left + $("#user_relationships_popup_form").width() > $(window).width()) {
        left = (e.pageX ? e.pageX : e.clientX) - $("#user_relationships_popup_form").width();
      }
        xtop = (e.pageY ? e.pageY : e.clientY) + Number(xtop); // msie specific checks does not support e.page
      }
      var href = $(this).attr('href'); // Where we send the ajax request.
      Drupal.user_relationships_ui.showForm(href, position, left, xtop);
      return false;
    });
  });
}

/**
 * Function to display the pertinent form for the user
 *
 * @param href
 *      Ajax url where we will retrieve the form
 * @param pageX
 *      Left value for the event
 * @param pageY
 *      Top value for the event
 */
Drupal.user_relationships_ui.showForm = function(href, position, left, top) {
  // Making sure that any currently open popups will be hidden.
  Drupal.user_relationships_ui.hidePopup();
  // Putting the animation into this

  $('#user_relationships_popup_form')
    .css({top: top + 'px', left: left + 'px', position: position})
    .html(Drupal.user_relationships_ui.loadingAnimation())
    .slideDown();
  // Adding ajax to the href because we need to determine between ajax and regular
  if (href.indexOf('?') == -1) {
    href += '?';
  };
  href += '&ajax=1';
  // Making the ajax request to the server to retrieve the form.
  $.get(href, function(result) {
    $('#user_relationships_popup_form').html(result).slideDown();
    // Making sure the cancel link on each form in the popup closes the popup.
    $('#user_relationships_popup_form a').click(function() {
      Drupal.user_relationships_ui.hidePopup();
      return false;
    });
    //Prevent users from clicking submit button twice
    Drupal.user_relationships_ui.formCheck();
  });
};

/**
 * Function used to return the html that is used to build the.
 * Loading animation when a form is requested by the user.
 */
Drupal.user_relationships_ui.loadingAnimation = function() {
  var html = '<div>';
  html += '<div style="text-align: center; font-weight: bold;">';
  html += Drupal.t('Form Loading');
  html += '</div>';
  html += '<img src="' + Drupal.settings.user_relationships_ui['loadingimage'] + '" border="0" height="20" width="200" />';
  html += '</div>';
  return html;
}

/**
 * Helper function to hide the popup form
 */
Drupal.user_relationships_ui.hidePopup = function() {
  $('#user_relationships_popup_form').slideUp();
}

/**
 * Prevent users from clicking a submit button twice - borrowed from http://drupal.org/project/newswire - thanks, fellows :)
 */
Drupal.user_relationships_ui.formCheck = function() {
  // only apply this to node and comment and new user registration forms
  var forms = $("#user_relationships_popup_form #edit-submit");
  // insert the saving div now to cache it for better performance and to show the loading image
  $('<div id="user_relationships_popup_form_saving"><p class="user_relationships_popup_form_saving">' + Drupal.t('Saving...') + '</p></div>').insertAfter(forms);
  forms.click(function() {
    $(this).siblings("input[type=submit]").hide();
    $(this).hide();
    $("#user_relationships_popup_form_saving").show();
    var notice = function() {
      $('<p id="user_relationships_popup_form_saving_notice">' + Drupal.t('Not saving? Please wait a few seconds, reload this page, and try again.') + '</p>').appendTo("#user_relationships_popup_form_saving").fadeIn();
    };
    // append notice if form saving isn't work, perhaps a timeout issue
    setTimeout(notice, 60000);
  });
};

$(document).ready(function() {
  $('#edit-is-oneway').click(function () {
    if ($('#edit-is-oneway').attr('checked')) {
      $('#edit-is-reciprocal-wrapper').slideDown('slow');
    }
    else {
      $('#edit-is-reciprocal-wrapper').slideUp('slow');
    }
  });
  
  if (!$('#edit-is-oneway').attr('checked')) {
    $('#edit-is-reciprocal-wrapper').hide();
  }
});
;
/**
 * The heartbeat object.
 */
Drupal.heartbeat = Drupal.heartbeat || {};

Drupal.heartbeat.moreLink = null;

/**
 * wait().
 *   Function that shows throbber while waiting a response.
 */
Drupal.heartbeat.wait = function(element, parentSelector) {

  // We wait for a server response and show a throbber 
  // by adding the class heartbeat-messages-waiting.
  Drupal.heartbeat.moreLink = $(element).parents(parentSelector);
  // Disable double-clicking.
  if (Drupal.heartbeat.moreLink.is('.heartbeat-messages-waiting')) {      
    return false;
  }
  Drupal.heartbeat.moreLink.addClass('heartbeat-messages-waiting');
  
}

/**
 * doneWaiting().
 *   Function that is triggered if waiting period is over, to start
 *   normal behavior again.
 */
Drupal.heartbeat.doneWaiting = function() {
  Drupal.heartbeat.moreLink.removeClass('heartbeat-messages-waiting');
}

/**
 * getOlderMessages().
 *   Fetch older messages with ajax.
 */
Drupal.heartbeat.getOlderMessages = function(element, page) {
  Drupal.heartbeat.wait(element, '.heartbeat-more-messages-wrapper');
  $.post(element.href, {block: page ? 0 : 1, ajax: 1}, Drupal.heartbeat.appendMessages);
}

/**
 * pollMessages().
 *   Function that checks and fetches newer messages to the
 *   current stream.
 */
Drupal.heartbeat.pollMessages = function(stream) {

  var stream_selector = '#heartbeat-stream-' + stream;
  
  if ($(stream_selector).length > 0) {
    var href = Drupal.settings.basePath + 'heartbeat/js/poll';
    var uaids = new Array();
    var beats = $(stream_selector + ' .beat-item');
    var firstUaid = 0;
    
    if (beats.length > 0) {    
      firstUaid = $(beats.get(0)).attr('id').replace("beat-item-", "");
      
      beats.each(function(i) {  
        var uaid = parseInt($(this).attr('id').replace("beat-item-", ""));
        uaids.push(uaid);
      });
    }
    
    var post = {
      latestUaid: firstUaid, 
      language: Drupal.settings.heartbeat_language, 
      stream: stream, 
      uaids: uaids.join(',')
    };
    $.event.trigger('heartbeatBeforePoll', [post]); 
    if (firstUaid) {
      $.post(href, post, Drupal.heartbeat.prependMessages);
    }
  }
}

/**
 * appendMessages().
 *   Function that appends older messages to the stream.
 */
Drupal.heartbeat.appendMessages = function(data) {
  
  var result = Drupal.parseJson(data);
  
  var wrapper = Drupal.heartbeat.moreLink.parents('.heartbeat-messages-wrapper');
  Drupal.heartbeat.moreLink.remove();
  wrapper.append(result['data']);
  Drupal.heartbeat.doneWaiting();
    
  // Reattach behaviors for new added html
  Drupal.attachBehaviors($('.heartbeat-messages-wrapper'));
  
}

/**
 * prependMessages().
 *   Append messages to the front of the stream. This done for newer 
 *   messages, often with the auto poller.
 */
Drupal.heartbeat.prependMessages = function(data) {

  var result = Drupal.parseJson(data);
  var stream_selector = '#heartbeat-stream-' + result['stream'];

  // Update the times in the stream
  if (result['time_updates'] != undefined) {
    var time_updates = result['time_updates'];
    for (uaid in time_updates) {
      $(stream_selector + ' #beat-item-' + uaid).find('.heartbeat_times').html(time_updates[uaid]);
    }
  }

  // Append the messages
  if (result['data'] != '') {
    $(stream_selector + ' .heartbeat-messages-wrapper').prepend(result['data']);
    // Reattach behaviors for new added html
    Drupal.attachBehaviors($(stream_selector + ' .heartbeat-messages-wrapper'));
  }
}

/**
 * splitGroupedMessage().
 * 
 * Splits a grouped message into separate ones.
 * 
 * @param Integer uaid
 *   The user activity Id for the grouped message.
 * @param Array uaids
 *   The standalone user activity Ids involved in the grouped message.
 */
Drupal.heartbeat.splitGroupedMessage = function(uaid, uaids) {
  if (uaids == null) {
    $("#beat-item-" + uaid).show('slow');
    $("#beat-item-" + uaid + "-ungrouped").hide('slow');  
  }
  else {
    $("#beat-item-" + uaid).hide('slow');
    $("#beat-item-" + uaid + "-ungrouped").show('slow'); 
  }
}

/**
 * Document onReady().
 */
$(document).ready(function() {
  var span = 0;
  if (Drupal.settings.heartbeatPollNewerMessages != undefined) {
    for (n in Drupal.settings.heartbeatPollNewerMessages) {
      if (parseInt(Drupal.settings.heartbeatPollNewerMessages[n]) > 0) {
        var interval = (Drupal.settings.heartbeatPollNewerMessages[n] * 1000) + span;
        var poll = setInterval('Drupal.heartbeat.pollMessages("' + n + '")', interval);
        span += 100;
      }
    }  
  }
});;
// $Id: pathauto.js,v 1.4.2.2 2010/02/10 21:50:30 greggles Exp $
if (Drupal.jsEnabled) {
  $(document).ready(function() {
    if ($("#edit-pathauto-perform-alias").size() && $("#edit-pathauto-perform-alias").attr("checked")) {
      // Disable input and hide its description.
      $("#edit-path").attr("disabled","disabled");
      $("#edit-path-wrapper > div.description").hide(0);
    }
    $("#edit-pathauto-perform-alias").bind("click", function() {
      if ($("#edit-pathauto-perform-alias").attr("checked")) {
        // Auto-alias checked; disable input.
        $("#edit-path").attr("disabled","disabled");
        $("#edit-path-wrapper > div[class=description]").slideUp('fast');
      }
      else {
        // Auto-alias unchecked; enable input.
        $("#edit-path").removeAttr("disabled");
        $("#edit-path")[0].focus();
        $("#edit-path-wrapper > div[class=description]").slideDown('fast');
      }
    });
  });

  Drupal.verticalTabs = Drupal.verticalTabs || {};

  Drupal.verticalTabs.path = function() {
    var path = $('#edit-path').val();
    var automatic = $('#edit-pathauto-perform-alias').attr('checked');

    if (automatic) {
      return Drupal.t('Automatic alias');
    }
    if (path) {
      return Drupal.t('Alias: @alias', { '@alias': path });
    }
    else {
      return Drupal.t('No alias');
    }
  }
}
;
// $Id: filefield.js,v 1.28 2010/12/08 21:08:25 quicksketch Exp $

/**
 * Auto-attach standard client side file input validation.
 */
Drupal.behaviors.filefieldValidateAutoAttach = function(context) {
  $("input[type=file]", context).bind('change', Drupal.filefield.validateExtensions);
};


/**
 * Prevent FileField uploads when using buttons not intended to upload.
 */
Drupal.behaviors.filefieldButtons = function(context) {
  $('input.form-submit', context).bind('mousedown', Drupal.filefield.disableFields);
  $('div.filefield-element input.form-submit', context).bind('mousedown', Drupal.filefield.progressBar);
};

/**
 * Open links to files within the node form in a new window.
 */
Drupal.behaviors.filefieldPreviewLinks = function(context) {
  $('div.filefield-element div.widget-preview a', context).click(Drupal.filefield.openInNewWindow).attr('target', '_blank');
}

/**
 * Admin enhancement: only show the "Files listed by default" when needed.
 */
Drupal.behaviors.filefieldAdmin = function(context) {
  var $listField = $('div.filefield-list-field', context);
  if ($listField.size()) {
    $listField.find('input').change(function() {
      if (this.checked) {
        if (this.value == 0) {
          $('#edit-list-default-wrapper').css('display', 'none');
        }
        else {
          $('#edit-list-default-wrapper').css('display', 'block');
        }
      }
    }).change();
  }
};

/**
 * Utility functions for use by FileField.
 * @param {Object} event
 */
Drupal.filefield = {
  validateExtensions: function(event) {
    // Remove any previous errors.
    $('.file-upload-js-error').remove();

    var fieldName = this.name.replace(/^files\[([a-z0-9_]+)_\d+\]$/, '$1');
    var extensions = '';
    if (Drupal.settings.filefield && Drupal.settings.filefield[fieldName]) {
      extensions = Drupal.settings.filefield[fieldName].replace(/[, ]+/g, '|');
    }
    if (extensions.length > 1 && this.value.length > 0) {
      var extensionPattern = new RegExp('\\.(' + extensions + ')$', 'gi');
      if (!extensionPattern.test(this.value)) {
        var error = Drupal.t("The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.",
          { '%filename' : this.value, '%extensions' : extensions.replace(/\|/g, ', ') }
        );
        $(this).before('<div class="messages error file-upload-js-error">' + error + '</div>');
        this.value = '';
        return false;
      }
    }
  },
  disableFields: function(event) {
    var clickedButton = this;

    // Only disable upload fields for AHAH buttons.
    if (!$(clickedButton).hasClass('ahah-processed')) {
      return;
    }

    // Check if we're working with an "Upload" button.
    var $enabledFields = [];
    if ($(this).parents('div.filefield-element').size() > 0) {
      $enabledFields = $(this).parents('div.filefield-element').find('input.form-file');
    }
    // Otherwise we're probably dealing with CCK's "Add another item" button.
    else if ($(this).parents('div.content-add-more').size() > 0) {
      $enabledFields = $(this).parent().parent().find('input.form-file');
    }

    var $disabledFields = $('div.filefield-element input.form-file').not($enabledFields);

    // Disable upload fields other than the one we're currently working with.
    $disabledFields.attr('disabled', 'disabled');

    // All the other mousedown handlers (like AHAH) are excuted before any
    // timeout functions will be called, so this effectively re-enables
    // the filefields after the AHAH process is complete even though it only
    // has a 1 millisecond timeout.
    setTimeout(function(){
      $disabledFields.attr('disabled', '');
    }, 1000);
  },
  progressBar: function(event) {
    var clickedButton = this;
    var $progressId = $(clickedButton).parents('div.filefield-element').find('input.filefield-progress');
    if ($progressId.size()) {
      var originalName = $progressId.attr('name');

      // Replace the name with the required identifier.
      $progressId.attr('name', originalName.match(/APC_UPLOAD_PROGRESS|UPLOAD_IDENTIFIER/)[0]);

      // Restore the original name after the upload begins.
      setTimeout(function() {
        $progressId.attr('name', originalName);
      }, 1000);
    }

    // Show the progress bar if the upload takes longer than 3 seconds.
    setTimeout(function() {
      $(clickedButton).parents('div.filefield-element').find('div.ahah-progress-bar').slideDown();
    }, 500);
  },
  openInNewWindow: function(event) {
    window.open(this.href, 'filefieldPreview', 'toolbar=0,scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,width=500,height=550');
    return false;
  }
};
;
// $Id: jquery.form.js,v 1.2 2007/11/19 10:05:48 goba Exp $

/*
 * jQuery Form Plugin
 * version: 2.01 (10/31/2007)
 * @requires jQuery v1.1 or later
 *
 * Examples at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(5($){$.7.1j=5(o){2(P o==\'5\')o={L:o};o=$.2h({1h:4.X(\'2i\')||1E.2u.3D(),I:4.X(\'2g\')||\'29\'},o||{});3 p={};$.M.N(\'R.2P.2L\',[4,o,p]);2(p.1Q)6 4;3 a=4.1z(o.2r);2(o.V){H(3 n 3u o.V)a.C({z:n,A:o.V[n]})}2(o.28&&o.28(a,4,o)===E)6 4;$.M.N(\'R.K.36\',[a,4,o,p]);2(p.1Q)6 4;3 q=$.1x(a);2(o.I.31()==\'29\'){o.1h+=(o.1h.2Z(\'?\')>=0?\'&\':\'?\')+q;o.V=B}8 o.V=q;3 r=4,U=[];2(o.1r)U.C(5(){r.1r()});2(o.1o)U.C(5(){r.1o()});2(!o.18&&o.14){3 u=o.L||5(){};U.C(5(a){2(4.1N)$(o.14).X("1M",a).1N().D(u,1L);8 $(o.14).2t(a).D(u,1L)})}8 2(o.L)U.C(o.L);o.L=5(a,b){H(3 i=0,F=U.G;i<F;i++)U[i](a,b,r)};3 v=$(\'19:3v\',4).15();3 w=E;H(3 j=0;j<v.G;j++)2(v[j])w=T;2(o.2f||w){2($.1i.3o&&o.2a)$.3l(o.2a,1l);8 1l()}8 $.3h(o);$.M.N(\'R.K.3f\',[4,o]);6 4;5 1l(){3 d=r[0];3 f=$.2h({},$.39,o);3 h=\'35\'+$.7.1j.1a++;3 i=$(\'<2f 33="\'+h+\'" z="\'+h+\'" />\');3 j=i[0];3 k=$.1i.20&&1E.20.30()<9;2($.1i.1X||k)j.2Y=\'2W:E;1w.2U("");\';i.2S({2R:\'2Q\',23:\'-24\',1R:\'-24\'});3 l={Z:B,1b:B,2K:0,2J:\'n/a\',2H:5(){},2F:5(){},2E:5(){}};3 g=f.2B;2(g&&!$.1O++)$.M.N("2x");2(g)$.M.N("2w",[l,f]);3 m=0;3 n=0;1f(5(){i.2v(\'1n\');j.1K?j.1K(\'1J\',12):j.2s(\'1I\',12,E);3 a=d.1H?\'1H\':\'2q\';3 t=r.X(\'14\');r.X({14:h,2g:\'3C\',2i:f.1h});d[a]=\'3B/R-V\';2(f.1G)1f(5(){n=T;12()},f.1G);d.K();r.X(\'14\',t)},10);5 12(){2(m++)6;j.2o?j.2o(\'1J\',12):j.3A(\'1I\',12,E);3 a=T;3z{2(n)3x\'1G\';3 b,O;O=j.2n?j.2n.1w:j.2l?j.2l:j.1w;l.Z=O.1n?O.1n.1M:B;l.1b=O.2k?O.2k:O;2(f.18==\'2j\'||f.18==\'3s\'){3 c=O.1D(\'1C\')[0];b=c?c.A:l.Z;2(f.18==\'2j\')3r("V = "+b);8 $.3q(b)}8 2(f.18==\'2m\'){b=l.1b;2(!b&&l.Z!=B)b=2d(l.Z)}8{b=l.Z}}3p(e){a=E;$.3n(f,l,\'2b\',e)}2(a){f.L(b,\'L\');2(g)$.M.N("3m",[l,f])}2(g)$.M.N("3k",[l,f]);2(g&&!--$.1O)$.M.N("3j");2(f.27)f.27(l,a?\'L\':\'2b\');1f(5(){i.3i();l.1b=B},3g)};5 2d(s,a){2(1E.26){a=25 26(\'3d.3c\');a.3b=\'E\';a.3a(s)}8 a=(25 38()).37(s,\'1A/2m\');6(a&&a.22&&a.22.1e!=\'34\')?a:B}}};$.7.1j.1a=0;$.7.W=5(a){6 4.21().K(1m).D(5(){4.1u=$.7.W.1a++;$.7.W.1t[4.1u]=a;$(":K,19:Y",4).1Z(1s)})};$.7.W.1a=1;$.7.W.1t={};5 1s(e){3 a=4.R;a.Q=4;2(4.I==\'Y\'){2(e.1Y!=S){a.11=e.1Y;a.16=e.2X}8 2(P $.7.1U==\'5\'){3 b=$(4).1U();a.11=e.1V-b.1R;a.16=e.1W-b.23}8{a.11=e.1V-4.2V;a.16=e.1W-4.32}}1f(5(){a.Q=a.11=a.16=B},10)};5 1m(){3 a=4.1u;3 b=$.7.W.1t[a];$(4).1j(b);6 E};$.7.21=5(){4.1T(\'K\',1m);6 4.D(5(){$(":K,19:Y",4).1T(\'1Z\',1s)})};$.7.1z=5(b){3 a=[];2(4.G==0)6 a;3 c=4[0];3 d=b?c.1D(\'*\'):c.2T;2(!d)6 a;H(3 i=0,F=d.G;i<F;i++){3 e=d[i];3 n=e.z;2(!n)1v;2(b&&c.Q&&e.I=="Y"){2(!e.1d&&c.Q==e)a.C({z:n+\'.x\',A:c.11},{z:n+\'.y\',A:c.16});1v}3 v=$.15(e,T);2(v&&v.1c==1g){H(3 j=0,1S=v.G;j<1S;j++)a.C({z:n,A:v[j]})}8 2(v!==B&&P v!=\'S\')a.C({z:n,A:v})}2(!b&&c.Q){3 f=c.1D("19");H(3 i=0,F=f.G;i<F;i++){3 g=f[i];3 n=g.z;2(n&&!g.1d&&g.I=="Y"&&c.Q==g)a.C({z:n+\'.x\',A:c.11},{z:n+\'.y\',A:c.16})}}6 a};$.7.2O=5(a){6 $.1x(4.1z(a))};$.7.2N=5(b){3 a=[];4.D(5(){3 n=4.z;2(!n)6;3 v=$.15(4,b);2(v&&v.1c==1g){H(3 i=0,F=v.G;i<F;i++)a.C({z:n,A:v[i]})}8 2(v!==B&&P v!=\'S\')a.C({z:4.z,A:v})});6 $.1x(a)};$.7.15=5(a){H(3 b=[],i=0,F=4.G;i<F;i++){3 c=4[i];3 v=$.15(c,a);2(v===B||P v==\'S\'||(v.1c==1g&&!v.G))1v;v.1c==1g?$.3e(b,v):b.C(v)}6 b};$.15=5(b,c){3 n=b.z,t=b.I,13=b.1e.1F();2(P c==\'S\')c=T;2(c&&(!n||b.1d||t==\'17\'||t==\'2M\'||(t==\'1q\'||t==\'1B\')&&!b.1p||(t==\'K\'||t==\'Y\')&&b.R&&b.R.Q!=b||13==\'J\'&&b.1y==-1))6 B;2(13==\'J\'){3 d=b.1y;2(d<0)6 B;3 a=[],1k=b.2I;3 e=(t==\'J-2e\');3 f=(e?d+1:1k.G);H(3 i=(e?d:0);i<f;i++){3 g=1k[i];2(g.2c){3 v=$.1i.1X&&!(g.2G[\'A\'].3t)?g.1A:g.A;2(e)6 v;a.C(v)}}6 a}6 b.A};$.7.1o=5(){6 4.D(5(){$(\'19,J,1C\',4).2p()})};$.7.2p=$.7.2D=5(){6 4.D(5(){3 t=4.I,13=4.1e.1F();2(t==\'1A\'||t==\'3w\'||13==\'1C\')4.A=\'\';8 2(t==\'1q\'||t==\'1B\')4.1p=E;8 2(13==\'J\')4.1y=-1})};$.7.1r=5(){6 4.D(5(){2(P 4.17==\'5\'||(P 4.17==\'2C\'&&!4.17.3y))4.17()})};$.7.2A=5(b){2(b==S)b=T;6 4.D(5(){4.1d=!b})};$.7.J=5(b){2(b==S)b=T;6 4.D(5(){3 t=4.I;2(t==\'1q\'||t==\'1B\')4.1p=b;8 2(4.1e.1F()==\'1P\'){3 a=$(4).2z(\'J\');2(b&&a[0]&&a[0].I==\'J-2e\'){a.2y(\'1P\').J(E)}4.2c=b}})}})(3E);',62,227,'||if|var|this|function|return|fn|else|||||||||||||||||||||||||||name|value|null|push|each|false|max|length|for|type|select|submit|success|event|trigger|doc|typeof|clk|form|undefined|true|callbacks|data|ajaxForm|attr|image|responseText||clk_x|cb|tag|target|fieldValue|clk_y|reset|dataType|input|counter|responseXML|constructor|disabled|tagName|setTimeout|Array|url|browser|ajaxSubmit|ops|fileUpload|submitHandler|body|clearForm|checked|checkbox|resetForm|clickHandler|optionHash|formPluginId|continue|document|param|selectedIndex|formToArray|text|radio|textarea|getElementsByTagName|window|toLowerCase|timeout|encoding|load|onload|attachEvent|arguments|innerHTML|evalScripts|active|option|veto|left|jmax|unbind|offset|pageX|pageY|msie|offsetX|click|opera|ajaxFormUnbind|documentElement|top|1000px|new|ActiveXObject|complete|beforeSubmit|GET|closeKeepAlive|error|selected|toXml|one|iframe|method|extend|action|json|XMLDocument|contentDocument|xml|contentWindow|detachEvent|clearFields|enctype|semantic|addEventListener|html|location|appendTo|ajaxSend|ajaxStart|find|parent|enable|global|object|clearInputs|setRequestHeader|getResponseHeader|attributes|getAllResponseHeaders|options|statusText|status|serialize|button|fieldSerialize|formSerialize|pre|absolute|position|css|elements|write|offsetLeft|javascript|offsetY|src|indexOf|version|toUpperCase|offsetTop|id|parsererror|jqFormIO|validate|parseFromString|DOMParser|ajaxSettings|loadXML|async|XMLDOM|Microsoft|merge|notify|100|ajax|remove|ajaxStop|ajaxComplete|get|ajaxSuccess|handleError|safari|catch|globalEval|eval|script|specified|in|file|password|throw|nodeType|try|removeEventListener|multipart|POST|toString|jQuery'.split('|'),0,{}))
;
// $Id: ahah.js,v 1.7.2.1 2008/02/11 14:46:27 goba Exp $

/**
 * Provides AJAX-like page updating via AHAH (Asynchronous HTML and HTTP).
 *
 * AHAH is a method of making a request via Javascript while viewing an HTML
 * page. The request returns a small chunk of HTML, which is then directly
 * injected into the page.
 *
 * Drupal uses this file to enhance form elements with #ahah[path] and
 * #ahah[wrapper] properties. If set, this file will automatically be included
 * to provide AHAH capabilities.
 */

/**
 * Attaches the ahah behavior to each ahah form element.
 */
Drupal.behaviors.ahah = function(context) {
  for (var base in Drupal.settings.ahah) {
    if (!$('#'+ base + '.ahah-processed').size()) {
      var element_settings = Drupal.settings.ahah[base];

      $(element_settings.selector).each(function() {
        element_settings.element = this;
        var ahah = new Drupal.ahah(base, element_settings);
      });

      $('#'+ base).addClass('ahah-processed');
    }
  }
};

/**
 * AHAH object.
 */
Drupal.ahah = function(base, element_settings) {
  // Set the properties for this object.
  this.element = element_settings.element;
  this.selector = element_settings.selector;
  this.event = element_settings.event;
  this.keypress = element_settings.keypress;
  this.url = element_settings.url;
  this.wrapper = '#'+ element_settings.wrapper;
  this.effect = element_settings.effect;
  this.method = element_settings.method;
  this.progress = element_settings.progress;
  this.button = element_settings.button || { };

  if (this.effect == 'none') {
    this.showEffect = 'show';
    this.hideEffect = 'hide';
    this.showSpeed = '';
  }
  else if (this.effect == 'fade') {
    this.showEffect = 'fadeIn';
    this.hideEffect = 'fadeOut';
    this.showSpeed = 'slow';
  }
  else {
    this.showEffect = this.effect + 'Toggle';
    this.hideEffect = this.effect + 'Toggle';
    this.showSpeed = 'slow';
  }

  // Record the form action and target, needed for iFrame file uploads.
  var form = $(this.element).parents('form');
  this.form_action = form.attr('action');
  this.form_target = form.attr('target');
  this.form_encattr = form.attr('encattr');

  // Set the options for the ajaxSubmit function.
  // The 'this' variable will not persist inside of the options object.
  var ahah = this;
  var options = {
    url: ahah.url,
    data: ahah.button,
    beforeSubmit: function(form_values, element_settings, options) {
      return ahah.beforeSubmit(form_values, element_settings, options);
    },
    success: function(response, status) {
      // Sanity check for browser support (object expected).
      // When using iFrame uploads, responses must be returned as a string.
      if (typeof(response) == 'string') {
        response = Drupal.parseJson(response);
      }
      return ahah.success(response, status);
    },
    complete: function(response, status) {
      if (status == 'error' || status == 'parsererror') {
        return ahah.error(response, ahah.url);
      }
    },
    dataType: 'json',
    type: 'POST'
  };

  // Bind the ajaxSubmit function to the element event.
  $(element_settings.element).bind(element_settings.event, function() {
    $(element_settings.element).parents('form').ajaxSubmit(options);
    return false;
  });
  // If necessary, enable keyboard submission so that AHAH behaviors
  // can be triggered through keyboard input as well as e.g. a mousedown
  // action.
  if (element_settings.keypress) {
    $(element_settings.element).keypress(function(event) {
      // Detect enter key.
      if (event.keyCode == 13) {
        $(element_settings.element).trigger(element_settings.event);
        return false;
      }
    });
  }
};

/**
 * Handler for the form redirection submission.
 */
Drupal.ahah.prototype.beforeSubmit = function (form_values, element, options) {
  // Disable the element that received the change.
  $(this.element).addClass('progress-disabled').attr('disabled', true);

  // Insert progressbar or throbber.
  if (this.progress.type == 'bar') {
    var progressBar = new Drupal.progressBar('ahah-progress-' + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ahah-progress ahah-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  }
  else if (this.progress.type == 'throbber') {
    this.progress.element = $('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      $('.throbber', this.progress.element).after('<div class="message">' + this.progress.message + '</div>')
    }
    $(this.element).after(this.progress.element);
  }
};

/**
 * Handler for the form redirection completion.
 */
Drupal.ahah.prototype.success = function (response, status) {
  var wrapper = $(this.wrapper);
  var form = $(this.element).parents('form');
  // Manually insert HTML into the jQuery object, using $() directly crashes
  // Safari with long string lengths. http://dev.jquery.com/ticket/1152
  var new_content = $('<div></div>').html(response.data);

  // Restore the previous action and target to the form.
  form.attr('action', this.form_action);
  this.form_target ? form.attr('target', this.form_target) : form.removeAttr('target');
  this.form_encattr ? form.attr('target', this.form_encattr) : form.removeAttr('encattr');

  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  $(this.element).removeClass('progress-disabled').attr('disabled', false);

  // Add the new content to the page.
  Drupal.freezeHeight();
  if (this.method == 'replace') {
    wrapper.empty().append(new_content);
  }
  else {
    wrapper[this.method](new_content);
  }

  // Immediately hide the new content if we're using any effects.
  if (this.showEffect != 'show') {
    new_content.hide();
  }

  // Determine what effect use and what content will receive the effect, then
  // show the new content. For browser compatibility, Safari is excluded from
  // using effects on table rows.
  if (($.browser.safari && $("tr.ahah-new-content", new_content).size() > 0)) {
    new_content.show();
  }
  else if ($('.ahah-new-content', new_content).size() > 0) {
    $('.ahah-new-content', new_content).hide();
    new_content.show();
    $(".ahah-new-content", new_content)[this.showEffect](this.showSpeed);
  }
  else if (this.showEffect != 'show') {
    new_content[this.showEffect](this.showSpeed);
  }

  // Attach all javascript behaviors to the new content, if it was successfully
  // added to the page, this if statement allows #ahah[wrapper] to be optional.
  if (new_content.parents('html').length > 0) {
    Drupal.attachBehaviors(new_content);
  }

  Drupal.unfreezeHeight();
};

/**
 * Handler for the form redirection error.
 */
Drupal.ahah.prototype.error = function (response, uri) {
  alert(Drupal.ahahError(response, uri));
  // Resore the previous action and target to the form.
  $(this.element).parent('form').attr( { action: this.form_action, target: this.form_target} );
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  // Undo hide.
  $(this.wrapper).show();
  // Re-enable the element.
  $(this.element).removeClass('progess-disabled').attr('disabled', false);
};
;
// $Id: progress.js,v 1.20 2008/01/04 11:53:21 goba Exp $

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || "GET";
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  this.element = document.createElement('div');
  this.element.id = id;
  this.element.className = 'progress';
  $(this.element).html('<div class="bar"><div class="filled"></div></div>'+
                       '<div class="percentage"></div>'+
                       '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage +'%');
    $('div.percentage', this.element).html(percentage +'%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer
        pb.timer = setTimeout(function() { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ahahError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = document.createElement('div');
  error.className = 'error';
  error.innerHTML = string;

  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};
;
// $Id: location_autocomplete.js,v 1.3 2008/12/02 22:50:21 bdragon Exp $

/**
 * Twiddle the province autocomplete whenever the user changes the country.
 */
Drupal.behaviors.location = function(context) {
  $('select.location_auto_country:not(.location-processed)', context).change(function(e) {
    var obj = this;
    var input = null;
    var result = this.className.match(/(location_auto_join_[^ ]*)/);
    if (result) {
      input = $('.location_auto_province.' + result)
    }
    else {
      // No joining class found, fallback to searching the immediate area.
      input = $('.location_auto_province', $(this).parents('fieldset:first, .views-exposed-form:first'))
    }

    if (input && input.length) {
      //Unbind events on province field and empty its value
      input.unbind().val('');
      input.each(function(i) {
        //Get the (hidden) *-autocomplete input element
        var input_autocomplete = $('#' + this.id + '-autocomplete');
        // Update autocomplete url
        input_autocomplete.val(input_autocomplete.val().substr(0, input_autocomplete.val().lastIndexOf('/') + 1) + $(obj).val());
        // Mark as not processed.
        input_autocomplete.removeClass('autocomplete-processed');
      });
      // Reprocess.
      Drupal.behaviors.autocomplete(document);
    }
  }).addClass('location-processed');
};
;
// $Id: textarea.js,v 1.22 2008/01/17 19:31:56 goba Exp $

Drupal.behaviors.textarea = function(context) {
  $('textarea.resizable:not(.textarea-processed)', context).each(function() {
    // Avoid non-processed teasers.
    if ($(this).is(('textarea.teaser:not(.teaser-processed)'))) {
      return false;  
    }
    var textarea = $(this).addClass('textarea-processed'), staticOffset = null;

    // When wrapping the text area, work around an IE margin bug.  See:
    // http://jaspan.com/ie-inherited-margin-bug-form-elements-and-haslayout
    $(this).wrap('<div class="resizable-textarea"><span></span></div>')
      .parent().append($('<div class="grippie"></div>').mousedown(startDrag));

    var grippie = $('div.grippie', $(this).parent())[0];
    grippie.style.marginRight = (grippie.offsetWidth - $(this)[0].offsetWidth) +'px';

    function startDrag(e) {
      staticOffset = textarea.height() - e.pageY;
      textarea.css('opacity', 0.25);
      $(document).mousemove(performDrag).mouseup(endDrag);
      return false;
    }

    function performDrag(e) {
      textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
      return false;
    }

    function endDrag(e) {
      $(document).unbind("mousemove", performDrag).unbind("mouseup", endDrag);
      textarea.css('opacity', 1);
    }
  });
};
;
// $Id: ckeditor-3.0.js,v 1.2.4.10 2010/12/29 20:01:49 twod Exp $
(function($) {

Drupal.wysiwyg.editor.init.ckeditor = function(settings) {
  // Plugins must only be loaded once. Only the settings from the first format
  // will be used but they're identical anyway.
  var registeredPlugins = {};
  for (var format in settings) {
    if (Drupal.settings.wysiwyg.plugins[format]) {
      // Register native external plugins.
      // Array syntax required; 'native' is a predefined token in JavaScript.
      for (var pluginName in Drupal.settings.wysiwyg.plugins[format]['native']) {
        if (!registeredPlugins[pluginName]) {
          var plugin = Drupal.settings.wysiwyg.plugins[format]['native'][pluginName];
          CKEDITOR.plugins.addExternal(pluginName, plugin.path, plugin.fileName);
          registeredPlugins[pluginName] = true;
        }
      }
      // Register Drupal plugins.
      for (var pluginName in Drupal.settings.wysiwyg.plugins[format].drupal) {
        if (!registeredPlugins[pluginName]) {
          Drupal.wysiwyg.editor.instance.ckeditor.addPlugin(pluginName, Drupal.settings.wysiwyg.plugins[format].drupal[pluginName], Drupal.settings.wysiwyg.plugins.drupal[pluginName]);
          registeredPlugins[pluginName] = true;
        }
      }
    }
  }
};


/**
 * Attach this editor to a target element.
 */
Drupal.wysiwyg.editor.attach.ckeditor = function(context, params, settings) {
  // Apply editor instance settings.
  CKEDITOR.config.customConfig = '';

  settings.on = {
    instanceReady: function(ev) {
      var editor = ev.editor;
      // Get a list of block, list and table tags from CKEditor's XHTML DTD.
      // @see http://docs.cksource.com/CKEditor_3.x/Developers_Guide/Output_Formatting.
      var dtd = CKEDITOR.dtd;
      var tags = CKEDITOR.tools.extend({}, dtd.$block, dtd.$listItem, dtd.$tableContent);
      // Set source formatting rules for each listed tag except <pre>.
      // Linebreaks can be inserted before or after opening and closing tags.
      if (settings.apply_source_formatting) {
        // Mimic FCKeditor output, by breaking lines between tags.
        for (var tag in tags) {
          if (tag == 'pre') {
            continue;
          }
          this.dataProcessor.writer.setRules(tag, {
            indent: true,
            breakBeforeOpen: true,
            breakAfterOpen: false,
            breakBeforeClose: false,
            breakAfterClose: true
          });
        }
      }
      else {
        // CKEditor adds default formatting to <br>, so we want to remove that
        // here too.
        tags.br = 1;
        // No indents or linebreaks;
        for (var tag in tags) {
          if (tag == 'pre') {
            continue;
          }
          this.dataProcessor.writer.setRules(tag, {
            indent: false,
            breakBeforeOpen: false,
            breakAfterOpen: false,
            breakBeforeClose: false,
            breakAfterClose: false
          });
        }
      }
    },

    pluginsLoaded: function(ev) {
      // Override the conversion methods to let Drupal plugins modify the data.
      var editor = ev.editor;
      if (editor.dataProcessor && Drupal.settings.wysiwyg.plugins[params.format]) {
        editor.dataProcessor.toHtml = CKEDITOR.tools.override(editor.dataProcessor.toHtml, function(originalToHtml) {
          // Convert raw data for display in WYSIWYG mode.
          return function(data, fixForBody) {
            for (var plugin in Drupal.settings.wysiwyg.plugins[params.format].drupal) {
              if (typeof Drupal.wysiwyg.plugins[plugin].attach == 'function') {
                data = Drupal.wysiwyg.plugins[plugin].attach(data, Drupal.settings.wysiwyg.plugins.drupal[plugin], editor.name);
                data = Drupal.wysiwyg.instances[params.field].prepareContent(data);
              }
            }
            return originalToHtml.call(this, data, fixForBody);
          };
        });
        editor.dataProcessor.toDataFormat = CKEDITOR.tools.override(editor.dataProcessor.toDataFormat, function(originalToDataFormat) {
          // Convert WYSIWYG mode content to raw data.
          return function(data, fixForBody) {
            data = originalToDataFormat.call(this, data, fixForBody);
            for (var plugin in Drupal.settings.wysiwyg.plugins[params.format].drupal) {
              if (typeof Drupal.wysiwyg.plugins[plugin].detach == 'function') {
                data = Drupal.wysiwyg.plugins[plugin].detach(data, Drupal.settings.wysiwyg.plugins.drupal[plugin], editor.name);
              }
            }
            return data;
          };
        });
      }
    },

    selectionChange: function (event) {
      if (Drupal.settings.wysiwyg.plugins[params.format]) {
        $.each(Drupal.settings.wysiwyg.plugins[params.format].drupal, function (name) {
          var plugin = Drupal.wysiwyg.plugins[name];
          if ($.isFunction(plugin.isNode)) {
            var node = event.data.selection.getSelectedElement();
            var state = plugin.isNode(node ? node.$ : null) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF;
            event.editor.getCommand(name).setState(state);
          }
        });
      }
    },

    focus: function(ev) {
      Drupal.wysiwyg.activeId = ev.editor.name;
    }
  };

  // Attach editor.
  CKEDITOR.replace(params.field, settings);
};

/**
 * Detach a single or all editors.
 *
 * @todo 3.x: editor.prototype.getInstances() should always return an array
 *   containing all instances or the passed in params.field instance, but
 *   always return an array to simplify all detach functions.
 */
Drupal.wysiwyg.editor.detach.ckeditor = function(context, params) {
  if (typeof params != 'undefined') {
    var instance = CKEDITOR.instances[params.field];
    if (instance) {
      instance.destroy();
    }
  }
  else {
    for (var instanceName in CKEDITOR.instances) {
      CKEDITOR.instances[instanceName].destroy();
    }
  }
};

Drupal.wysiwyg.editor.instance.ckeditor = {
  addPlugin: function(pluginName, settings, pluginSettings) {
    CKEDITOR.plugins.add(pluginName, {
      // Wrap Drupal plugin in a proxy pluygin.
      init: function(editor) {
        if (settings.css) {
          editor.on('mode', function(ev) {
            if (ev.editor.mode == 'wysiwyg') {
              // Inject CSS files directly into the editing area head tag.
              $('head', $('#cke_contents_' + ev.editor.name + ' iframe').eq(0).contents()).append('<link rel="stylesheet" href="' + settings.css + '" type="text/css" >');
            }
          });
        }
        if (typeof Drupal.wysiwyg.plugins[pluginName].invoke == 'function') {
          var pluginCommand = {
            exec: function (editor) {
              var data = { format: 'html', node: null, content: '' };
              var selection = editor.getSelection();
              if (selection) {
                data.node = selection.getSelectedElement();
                if (data.node) {
                  data.node = data.node.$;
                }
                if (selection.getType() == CKEDITOR.SELECTION_TEXT) {
                  if (CKEDITOR.env.ie) {
                    data.content = selection.getNative().createRange().text;
                  }
                  else {
                    data.content = selection.getNative().toString();
                  }
                }
                else if (data.node) {
                  // content is supposed to contain the "outerHTML".
                  data.content = data.node.parentNode.innerHTML;
                }
              }
              Drupal.wysiwyg.plugins[pluginName].invoke(data, pluginSettings, editor.name);
            }
          };
          editor.addCommand(pluginName, pluginCommand);
        }
        editor.ui.addButton(pluginName, {
          label: settings.iconTitle,
          command: pluginName,
          icon: settings.icon
        });

        // @todo Add button state handling.
      }
    });
  },
  prepareContent: function(content) {
    // @todo Don't know if we need this yet.
    return content;
  },
  insert: function(content) {
    content = this.prepareContent(content);
    CKEDITOR.instances[this.field].insertHtml(content);
  }
};

})(jQuery);
;
// $Id: none.js,v 1.6.2.1 2010/02/13 23:58:41 sun Exp $
(function($) {

/**
 * Attach this editor to a target element.
 *
 * @param context
 *   A DOM element, supplied by Drupal.attachBehaviors().
 * @param params
 *   An object containing input format parameters. Default parameters are:
 *   - editor: The internal editor name.
 *   - theme: The name/key of the editor theme/profile to use.
 *   - field: The CSS id of the target element.
 * @param settings
 *   An object containing editor settings for all enabled editor themes.
 */
Drupal.wysiwyg.editor.attach.none = function(context, params, settings) {
  if (params.resizable) {
    $('#' + params.field).addClass('resizable');
    $('#' + params.field).css({display: ''});
    if (Drupal.behaviors.textarea) {
      Drupal.behaviors.textarea();
    }
  }
};

/**
 * Detach a single or all editors.
 *
 * @param context
 *   A DOM element, supplied by Drupal.attachBehaviors().
 * @param params
 *   (optional) An object containing input format parameters. If defined,
 *   only the editor instance in params.field should be detached. Otherwise,
 *   all editors should be detached and saved, so they can be submitted in
 *   AJAX/AHAH applications.
 */
Drupal.wysiwyg.editor.detach.none = function(context, params) {
  if (typeof params != 'undefined') {
    var $textarea = $('#' + params.field, context).removeClass('textarea-processed');
    var $div = $textarea.parents('div.resizable-textarea');
    $div.before($textarea);
    $div.remove();
  }
};

/**
 * Instance methods for plain text areas.
 */
Drupal.wysiwyg.editor.instance.none = {
  insert: function(content) {
    var editor = document.getElementById(this.field);

    // IE support.
    if (document.selection) {
      editor.focus();
      var sel = document.selection.createRange();
      sel.text = content;
    }
    // Mozilla/Firefox/Netscape 7+ support.
    else if (editor.selectionStart || editor.selectionStart == '0') {
      var startPos = editor.selectionStart;
      var endPos = editor.selectionEnd;
      editor.value = editor.value.substring(0, startPos) + content + editor.value.substring(endPos, editor.value.length);
    }
    // Fallback, just add to the end of the content.
    else {
      editor.value += content;
    }
  }
};

})(jQuery);
;
// $Id: break.js,v 1.6.2.1 2010/02/13 23:58:41 sun Exp $
(function ($) {

// @todo Array syntax required; 'break' is a predefined token in JavaScript.
Drupal.wysiwyg.plugins['break'] = {

  /**
   * Return whether the passed node belongs to this plugin.
   */
  isNode: function(node) {
    return ($(node).is('img.wysiwyg-break'));
  },

  /**
   * Execute the button.
   */
  invoke: function(data, settings, instanceId) {
    if (data.format == 'html') {
      // Prevent duplicating a teaser break.
      if ($(data.node).is('img.wysiwyg-break')) {
        return;
      }
      var content = this._getPlaceholder(settings);
    }
    else {
      // Prevent duplicating a teaser break.
      // @todo data.content is the selection only; needs access to complete content.
      if (data.content.match(/<!--break-->/)) {
        return;
      }
      var content = '<!--break-->';
    }
    if (typeof content != 'undefined') {
      Drupal.wysiwyg.instances[instanceId].insert(content);
    }
  },

  /**
   * Replace all <!--break--> tags with images.
   */
  attach: function(content, settings, instanceId) {
    content = content.replace(/<!--break-->/g, this._getPlaceholder(settings));
    return content;
  },

  /**
   * Replace images with <!--break--> tags in content upon detaching editor.
   */
  detach: function(content, settings, instanceId) {
    var $content = $('<div>' + content + '</div>'); // No .outerHTML() in jQuery :(
    // #404532: document.createComment() required or IE will strip the comment.
    // #474908: IE 8 breaks when using jQuery methods to replace the elements.
    // @todo Add a generic implementation for all Drupal plugins for this.
    $.each($('img.wysiwyg-break', $content), function (i, elem) {
      elem.parentNode.insertBefore(document.createComment('break'), elem);
      elem.parentNode.removeChild(elem);
    });
    return $content.html();
  },

  /**
   * Helper function to return a HTML placeholder.
   */
  _getPlaceholder: function (settings) {
    return '<img src="' + settings.path + '/images/spacer.gif" alt="&lt;--break-&gt;" title="&lt;--break--&gt;" class="wysiwyg-break drupal-content" />';
  }
};

})(jQuery);
;
// Node authoring form for group posts
Drupal.behaviors.og_access_group_post = function() {
  
  /* Node authoring form for group content -Disable the public checkbox if no groups are selected in in Audience */
    $('.og-audience').click(function() {
      // Audience can be checkboxes, a simple select, or have optgroup (optgroups busted ATM. help wanted)
      var cnt;
      if ( $('.og-audience .form-checkbox').size() > 0) {
        cnt = $('input.og-audience:checked').size();  
      }
      else {
        cnt = $('.og-audience option:selected').size();      
      }
      if (cnt > 0) {
        $('#edit-og-public').removeAttr("disabled");
      }
      else {
        $('#edit-og-public').attr("disabled", "disabled");
      }
    });

    // Set initial value
    if ( $('.og-audience .form-checkbox').size() > 0 ) {
      // The checkbox way of showing audience.      
      if ( $('input.og-audience:checked').size() < 1) {
        $('#edit-og-public').attr("disabled", "disabled");
      }    
    }
    else {
      // The select way of showing audience.
      if ($('.og-audience option').size() > 0 && $('.og-audience option:selected').size() < 1) {
        $('#edit-og-public').attr("disabled", "disabled");
      }        
    }
}


// Node authoring form for group homepages
Drupal.behaviors.og_access_group_node = function() {
    /* Don't allow "private group" and "Open subscription" at the same time 
     * This is just for improved UI. You may change it if you need this combination.
     */
    $("#edit-og-private").click(function() { 
      if ($("#edit-og-private:checked").val()) {
        $("input[Name='og_selective']:nth(0)").removeAttr('checked').attr('disabled','disabled');
      }
      else {
        $("input[Name='og_selective']:nth(0)").removeAttr('disabled');
      }
    });

    $("input[Name='og_selective']").click(function() {
        // If Open is selected.
        if ($("input[Name='og_selective']:checked").val() == 0) {
          $("#edit-og-private").removeAttr("checked").attr('disabled','disabled');
        }
        else {
          $("#edit-og-private").removeAttr("disabled");
        }
    });

    if ($("#edit-og-private:checked").val()) {
        $("input[Name='og_selective']:nth(0)").removeAttr('checked').attr('disabled','disabled');
    }
    
    $("#edit-og-private").click(function() { 
      if ($("#edit-og-private:checked").val()) {
        $("#edit-og-directory").removeAttr("checked").attr('disabled','disabled');
      }
      else {
        $("#edit-og-directory").removeAttr('disabled');
      }
    });

    /*
     * Don't allow "private group" and "list in groups directory" at the same time 
     * This is just for improved UI. You may change it if you need this combination.
     */
    $("#edit-og-directory").click(function() {
      if ($("#edit-og-directory:checked").val()) {
        $("#edit-og-private").attr('disabled','disabled');
      }
      else {
        $("#edit-og-private").removeAttr('disabled');
      }
    });
    
    if ($("#edit-og-directory:checked").val() && !$("#edit-og-private:checked").val()) {
        $("#edit-og-private").attr('disabled','disabled');
    }
    if ($("#edit-og-private:checked").val() && !$("#edit-og-directory:checked").val()) {
        $("#edit-og-directory").attr('disabled','disabled');
    }
}
  
    
  /* admin og settings form, "Node Authoring Form - Visibilty of Posts"
   * Disable "Visible within the targeted groups and on other pages" if private groups set to "always private"
   * Disable "Visible only within the targeted groups" if private groups set to "always public"
   */
Drupal.behaviors.og_access_admin_settings = function() {
  $("input[Name='og_private_groups']").click(function() {
      if ( $("input[Name='og_private_groups']:checked").val() == 1 ) {
        $("input[name='og_visibility']:nth(0)").removeAttr('disabled');
        $("input[name='og_visibility']:nth(1)").attr('disabled','disabled');
      }
      else if ( $("input[Name='og_private_groups']:checked").val() == 0 ) {
        $("input[name='og_visibility']:nth(0)").attr('disabled','disabled');
        $("input[name='og_visibility']:nth(1)").removeAttr('disabled');  
      }
      else { 
        $("input[name='og_visibility']:nth(0)").removeAttr('disabled');  
        $("input[name='og_visibility']:nth(1)").removeAttr('disabled');  
      }
    }
  );

  // Set intial value.
  if ( $("input[Name='og_private_groups']:checked").val() == 1 ) {
    $("input[name='og_visibility']:nth(0)").removeAttr('disabled');
    $("input[name='og_visibility']:nth(1)").attr('disabled','disabled');
  }
  else if ( $("input[Name='og_private_groups']:checked").val() == 0 ) {
      $("input[name='og_visibility']:nth(0)").attr('disabled','disabled');
      $("input[name='og_visibility']:nth(1)").removeAttr('disabled');  
  }
  
    /* "Group details - Private Groups"
     * Disable "always public" if Node authoring visibility set to "Visible only within the targeted groups"
     * Disable "always private" if Node authoring visibility set to "Visible within the targeted groups and on other pages"
     */
    $("input[Name='og_visibility']").click(function() {
      if ($("input[Name='og_visibility']:checked").val() == 0) {
          $("input[name='og_private_groups']:nth(0)").attr('disabled','disabled');
          $("input[name='og_private_groups']:nth(1)").removeAttr('disabled');
        }
        else if ($("input[Name='og_visibility']:checked").val() == 1) {
          $("input[name='og_private_groups']:nth(0)").removeAttr('disabled');
          $("input[name='og_private_groups']:nth(1)").attr('disabled','disabled');
        } 
        else {
          $("input[name='og_private_groups']:nth(0)").removeAttr('disabled');
          $("input[name='og_private_groups']:nth(1)").removeAttr('disabled');
        }
      }
    );

    // Set initial value.
    if ($("input[Name='og_visibility']:checked").val() == 0) {
        $("input[name='og_private_groups']:nth(0)").attr('disabled','disabled');
        $("input[name='og_private_groups']:nth(1)").removeAttr('disabled');
    }
    else if ($("input[Name='og_visibility']:checked").val() == 1) {
        $("input[name='og_private_groups']:nth(0)").removeAttr('disabled');
        $("input[name='og_private_groups']:nth(1)").attr('disabled','disabled');     
    }
};
;
// $Id: collapse.js,v 1.17 2008/01/29 10:58:25 goba Exp $

/**
 * Toggle the visibility of a fieldset using smooth animations
 */
Drupal.toggleFieldset = function(fieldset) {
  if ($(fieldset).is('.collapsed')) {
    // Action div containers are processed separately because of a IE bug
    // that alters the default submit button behavior.
    var content = $('> div:not(.action)', fieldset);
    $(fieldset).removeClass('collapsed');
    content.hide();
    content.slideDown( {
      duration: 'fast',
      easing: 'linear',
      complete: function() {
        Drupal.collapseScrollIntoView(this.parentNode);
        this.parentNode.animating = false;
        $('div.action', fieldset).show();
      },
      step: function() {
        // Scroll the fieldset into view
        Drupal.collapseScrollIntoView(this.parentNode);
      }
    });
  }
  else {
    $('div.action', fieldset).hide();
    var content = $('> div:not(.action)', fieldset).slideUp('fast', function() {
      $(this.parentNode).addClass('collapsed');
      this.parentNode.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = self.innerHeight || document.documentElement.clientHeight || $('body')[0].clientHeight || 0;
  var offset = self.pageYOffset || document.documentElement.scrollTop || $('body')[0].scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    } else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = function (context) {
  $('fieldset.collapsible > legend:not(.collapse-processed)', context).each(function() {
    var fieldset = $(this.parentNode);
    // Expand if there are errors inside
    if ($('input.error, textarea.error, select.error', fieldset).size() > 0) {
      fieldset.removeClass('collapsed');
    }

    // Turn the legend into a clickable link and wrap the contents of the fieldset
    // in a div for easier animation
    var text = this.innerHTML;
      $(this).empty().append($('<a href="#">'+ text +'</a>').click(function() {
        var fieldset = $(this).parents('fieldset:first')[0];
        // Don't animate multiple times
        if (!fieldset.animating) {
          fieldset.animating = true;
          Drupal.toggleFieldset(fieldset);
        }
        return false;
      }))
      .after($('<div class="fieldset-wrapper"></div>')
      .append(fieldset.children(':not(legend):not(.action)')))
      .addClass('collapse-processed');
  });
};
;
// $Id: autocomplete.js,v 1.23 2008/01/04 11:53:21 goba Exp $

/**
 * Attaches the autocomplete behavior to all required fields
 */
Drupal.behaviors.autocomplete = function (context) {
  var acdb = [];
  $('input.autocomplete:not(.autocomplete-processed)', context).each(function () {
    var uri = this.value;
    if (!acdb[uri]) {
      acdb[uri] = new Drupal.ACDB(uri);
    }
    var input = $('#' + this.id.substr(0, this.id.length - 13))
      .attr('autocomplete', 'OFF')[0];
    $(input.form).submit(Drupal.autocompleteSubmit);
    new Drupal.jsAC(input, acdb[uri]);
    $(this).addClass('autocomplete-processed');
  });
};

/**
 * Prevents the form from submitting if the suggestions popup is open
 * and closes the suggestions popup when doing so.
 */
Drupal.autocompleteSubmit = function () {
  return $('#autocomplete').each(function () {
    this.owner.hidePopup();
  }).size() == 0;
};

/**
 * An AutoComplete object
 */
Drupal.jsAC = function (input, db) {
  var ac = this;
  this.input = input;
  this.db = db;

  $(this.input)
    .keydown(function (event) { return ac.onkeydown(this, event); })
    .keyup(function (event) { ac.onkeyup(this, event); })
    .blur(function () { ac.hidePopup(); ac.db.cancel(); });

};

/**
 * Handler for the "keydown" event
 */
Drupal.jsAC.prototype.onkeydown = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 40: // down arrow
      this.selectDown();
      return false;
    case 38: // up arrow
      this.selectUp();
      return false;
    default: // all other keys
      return true;
  }
};

/**
 * Handler for the "keyup" event
 */
Drupal.jsAC.prototype.onkeyup = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 16: // shift
    case 17: // ctrl
    case 18: // alt
    case 20: // caps lock
    case 33: // page up
    case 34: // page down
    case 35: // end
    case 36: // home
    case 37: // left arrow
    case 38: // up arrow
    case 39: // right arrow
    case 40: // down arrow
      return true;

    case 9:  // tab
    case 13: // enter
    case 27: // esc
      this.hidePopup(e.keyCode);
      return true;

    default: // all other keys
      if (input.value.length > 0)
        this.populatePopup();
      else
        this.hidePopup(e.keyCode);
      return true;
  }
};

/**
 * Puts the currently highlighted suggestion into the autocomplete field
 */
Drupal.jsAC.prototype.select = function (node) {
  this.input.value = node.autocompleteValue;
};

/**
 * Highlights the next suggestion
 */
Drupal.jsAC.prototype.selectDown = function () {
  if (this.selected && this.selected.nextSibling) {
    this.highlight(this.selected.nextSibling);
  }
  else {
    var lis = $('li', this.popup);
    if (lis.size() > 0) {
      this.highlight(lis.get(0));
    }
  }
};

/**
 * Highlights the previous suggestion
 */
Drupal.jsAC.prototype.selectUp = function () {
  if (this.selected && this.selected.previousSibling) {
    this.highlight(this.selected.previousSibling);
  }
};

/**
 * Highlights a suggestion
 */
Drupal.jsAC.prototype.highlight = function (node) {
  if (this.selected) {
    $(this.selected).removeClass('selected');
  }
  $(node).addClass('selected');
  this.selected = node;
};

/**
 * Unhighlights a suggestion
 */
Drupal.jsAC.prototype.unhighlight = function (node) {
  $(node).removeClass('selected');
  this.selected = false;
};

/**
 * Hides the autocomplete suggestions
 */
Drupal.jsAC.prototype.hidePopup = function (keycode) {
  // Select item if the right key or mousebutton was pressed
  if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
    this.input.value = this.selected.autocompleteValue;
  }
  // Hide popup
  var popup = this.popup;
  if (popup) {
    this.popup = null;
    $(popup).fadeOut('fast', function() { $(popup).remove(); });
  }
  this.selected = false;
};

/**
 * Positions the suggestions popup and starts a search
 */
Drupal.jsAC.prototype.populatePopup = function () {
  // Show popup
  if (this.popup) {
    $(this.popup).remove();
  }
  this.selected = false;
  this.popup = document.createElement('div');
  this.popup.id = 'autocomplete';
  this.popup.owner = this;
  $(this.popup).css({
    marginTop: this.input.offsetHeight +'px',
    width: (this.input.offsetWidth - 4) +'px',
    display: 'none'
  });
  $(this.input).before(this.popup);

  // Do search
  this.db.owner = this;
  this.db.search(this.input.value);
};

/**
 * Fills the suggestion popup with any matches received
 */
Drupal.jsAC.prototype.found = function (matches) {
  // If no value in the textfield, do not show the popup.
  if (!this.input.value.length) {
    return false;
  }

  // Prepare matches
  var ul = document.createElement('ul');
  var ac = this;
  for (key in matches) {
    var li = document.createElement('li');
    $(li)
      .html('<div>'+ matches[key] +'</div>')
      .mousedown(function () { ac.select(this); })
      .mouseover(function () { ac.highlight(this); })
      .mouseout(function () { ac.unhighlight(this); });
    li.autocompleteValue = key;
    $(ul).append(li);
  }

  // Show popup with matches, if any
  if (this.popup) {
    if (ul.childNodes.length > 0) {
      $(this.popup).empty().append(ul).show();
    }
    else {
      $(this.popup).css({visibility: 'hidden'});
      this.hidePopup();
    }
  }
};

Drupal.jsAC.prototype.setStatus = function (status) {
  switch (status) {
    case 'begin':
      $(this.input).addClass('throbbing');
      break;
    case 'cancel':
    case 'error':
    case 'found':
      $(this.input).removeClass('throbbing');
      break;
  }
};

/**
 * An AutoComplete DataBase object
 */
Drupal.ACDB = function (uri) {
  this.uri = uri;
  this.delay = 300;
  this.cache = {};
};

/**
 * Performs a cached and delayed search
 */
Drupal.ACDB.prototype.search = function (searchString) {
  var db = this;
  this.searchString = searchString;

  // See if this key has been searched for before
  if (this.cache[searchString]) {
    return this.owner.found(this.cache[searchString]);
  }

  // Initiate delayed search
  if (this.timer) {
    clearTimeout(this.timer);
  }
  this.timer = setTimeout(function() {
    db.owner.setStatus('begin');

    // Ajax GET request for autocompletion
    $.ajax({
      type: "GET",
      url: db.uri +'/'+ Drupal.encodeURIComponent(searchString),
      dataType: 'json',
      success: function (matches) {
        if (typeof matches['status'] == 'undefined' || matches['status'] != 0) {
          db.cache[searchString] = matches;
          // Verify if these are still the matches the user wants to see
          if (db.searchString == searchString) {
            db.owner.found(matches);
          }
          db.owner.setStatus('found');
        }
      },
      error: function (xmlhttp) {
        alert(Drupal.ahahError(xmlhttp, db.uri));
      }
    });
  }, this.delay);
};

/**
 * Cancels the current autocomplete request
 */
Drupal.ACDB.prototype.cancel = function() {
  if (this.owner) this.owner.setStatus('cancel');
  if (this.timer) clearTimeout(this.timer);
  this.searchString = '';
};
;
/* $Id: gmap.js,v 1.16.2.1 2010/04/08 13:40:19 rooby Exp $ */

/**
 * @file
 * Drupal to Google Maps API bridge.
 */

/*global $, Drupal, GLatLng, GSmallZoomControl, GLargeMapControl, GMap2 */
/*global GMapTypeControl, GSmallMapControl, G_HYBRID_MAP, G_NORMAL_MAP */
/*global G_PHYSICAL_MAP, G_SATELLITE_MAP, GHierarchicalMapTypeControl */
/*global GKeyboardHandler, GLatLngBounds, GMenuMapTypeControl, GEvent */
/*global GOverviewMapControl, GScaleControl, GUnload */

(function () { // BEGIN closure
  var handlers = {};
  var maps = {};
  var ajaxoffset = 0;

  Drupal.gmap = {

    /**
     * Retrieve a map object for use by a non-widget.
     * Use this if you need to be able to fire events against a certain map
     * which you have the mapid for.
     * Be a good GMap citizen! Remember to send change()s after modifying variables!
     */
    getMap: function (mapid) {
      if (maps[mapid]) {
        return maps[mapid];
      }
      else {
        // Perhaps the user passed a widget id instead?
        mapid = mapid.split('-').slice(1, -1).join('-');
        if (maps[mapid]) {
          return maps[mapid];
        }
      }
      return false;
    },

    unloadMap: function (mapid) {
      delete maps[mapid];
    },

    addHandler: function (handler, callback) {
      if (!handlers[handler]) {
        handlers[handler] = [];
      }
      handlers[handler].push(callback);
    },

    globalChange: function (name, userdata) {
      for (var mapid in Drupal.settings.gmap) {
        if (Drupal.settings.gmap.hasOwnProperty(mapid)) {
          maps[mapid].change(name, -1, userdata);
        }
      }
    },

    setup: function (settings) {
      var obj = this;

      var initcallback = function (mapid) {
        return (function () {
          maps[mapid].change("bootstrap_options", -1);
          maps[mapid].change("boot", -1);
          maps[mapid].change("init", -1);
          // Send some changed events to fire up the rest of the initial settings..
          maps[mapid].change("maptypechange", -1);
          maps[mapid].change("controltypechange", -1);
          maps[mapid].change("alignchange", -1);
          // Set ready to put the event system into action.
          maps[mapid].ready = true;
          maps[mapid].change("ready", -1);
        });
      };

      if (settings || (Drupal.settings && Drupal.settings.gmap)) {
        var mapid = obj.id.split('-');
        if (Drupal.settings['gmap_remap_widgets']) {
          if (Drupal.settings['gmap_remap_widgets'][obj.id]) {
            jQuery.each(Drupal.settings['gmap_remap_widgets'][obj.id].classes, function() {
              jQuery(obj).addClass(this);
            });
            mapid = Drupal.settings['gmap_remap_widgets'][obj.id].id.split('-');
          }
        }
        var instanceid = mapid.pop();
        mapid.shift();
        mapid = mapid.join('-');
        var control = instanceid.replace(/\d+$/, '');

        // Lazy init the map object.
        if (!maps[mapid]) {
          if (settings) {
            maps[mapid] = new Drupal.gmap.map(settings);
          }
          else {
            maps[mapid] = new Drupal.gmap.map(Drupal.settings.gmap[mapid]);
          }
          // Prepare the initialization callback.
          var callback = initcallback(mapid);
          setTimeout(callback, 0);
        }

        if (handlers[control]) {
          for (var i = 0; i < handlers[control].length; i++) {
            handlers[control][i].call(maps[mapid], obj);
          }
        }
        else {
          // Element with wrong class?
        }
      }
    }
  };

  jQuery.fn.createGMap = function (settings, mapid) {
    return this.each(function () {
      if (!mapid) {
        mapid = 'auto' + ajaxoffset + 'ajax';
        ajaxoffset++;
      }
      settings.id = mapid;
      $(this)
        .attr('id', 'gmap-' + mapid + '-gmap0')
        .css('width', settings.width)
        .css('height', settings.height)
        .addClass('gmap-control')
        .addClass('gmap-gmap')
        .addClass('gmap')
        .addClass('gmap-map')
        .addClass('gmap-' + mapid + '-gmap')
        .addClass('gmap-processed')
        .each(function() {Drupal.gmap.setup.call(this, settings)});
    });
  };

})(); // END closure

Drupal.gmap.factory = {};

Drupal.gmap.map = function (v) {
  this.vars = v;
  this.map = undefined;
  this.ready = false;
  var _bindings = {};

  /**
   * Register interest in a change.
   */
  this.bind = function (name, callback) {
    if (!_bindings[name]) {
      _bindings[name] = [];
    }
    return _bindings[name].push(callback) - 1;
  };

  /**
   * Change notification.
   * Interested parties can act on changes.
   */
  this.change = function (name, id, userdata) {
    var c;
    if (_bindings[name]) {
      for (c = 0; c < _bindings[name].length; c++) {
        if (c !== id) {
          _bindings[name][c](userdata);
        }
      }
    }
    if (name !== 'all') {
      this.change('all', -1, name, userdata);
    }
  };

  /**
   * Deferred change notification.
   * This will cause a change notification to be tacked on to the *end* of the event queue.
   */
  this.deferChange = function (name, id, userdata) {
    var obj = this;
    // This will move the function call to the end of the event loop.
    setTimeout(function () {
      obj.change(name, id, userdata);
    }, 0);
  };
};

////////////////////////////////////////
//             Map widget             //
////////////////////////////////////////
Drupal.gmap.addHandler('gmap', function (elem) {
  var obj = this;

  var _ib = {};


  // Respond to incoming zooms
  _ib.zoom = obj.bind("zoom", function () {
    obj.map.setZoom(obj.vars.zoom);
  });

  // Respond to incoming moves
  _ib.move = obj.bind("move", function () {
    obj.map.panTo(new GLatLng(obj.vars.latitude, obj.vars.longitude));
  });

  // Respond to incoming map type changes
  _ib.mtc = obj.bind("maptypechange", function () {
    var i;
    for (i = 0; i < obj.opts.mapTypeNames.length; i++) {
      if (obj.opts.mapTypeNames[i] === obj.vars.maptype) {
        obj.map.setMapType(obj.opts.mapTypes[i]);
        break;
      }
    }
  });

  // Respond to incoming width changes.
  _ib.width = obj.bind("widthchange", function (w) {
    obj.map.getContainer().style.width = w;
    obj.map.checkResize();
  });
  // Send out outgoing width changes.
  // N/A
  // Respond to incoming height changes.
  _ib.height = obj.bind("heightchange", function (h) {
    obj.map.getContainer().style.height = h;
    obj.map.checkResize();
  });
  // Send out outgoing height changes.
  // N/A

  // Respond to incoming control type changes.
  _ib.ctc = obj.bind("controltypechange", function () {
    if (obj.currentcontrol) {
      obj.map.removeControl(obj.currentcontrol);
    }
    if (obj.vars.controltype === 'Micro') {
      obj.map.addControl(obj.currentcontrol = new GSmallZoomControl());
    }
    else if (obj.vars.controltype === 'Small') {
      obj.map.addControl(obj.currentcontrol = new GSmallMapControl());
    }
    else if (obj.vars.controltype === 'Large') {
      obj.map.addControl(obj.currentcontrol = new GLargeMapControl());
    }
  });
  // Send out outgoing control type changes.
  // N/A

  obj.bind("bootstrap_options", function () {
    // Bootup options.
    var opts = {}; // Object literal GMapOptions
    obj.opts = opts;

    // Null out the enabled types.
    opts.mapTypes = [];
    opts.mapTypeNames = [];

    // Load google map types.
    if (obj.vars.baselayers.Map) {
      opts.mapTypes.push(G_NORMAL_MAP);
      opts.mapTypeNames.push('Map');
    }
    if (obj.vars.baselayers.Satellite) {
      opts.mapTypes.push(G_SATELLITE_MAP);
      opts.mapTypeNames.push('Satellite');
    }
    if (obj.vars.baselayers.Hybrid) {
      opts.mapTypes.push(G_HYBRID_MAP);
      opts.mapTypeNames.push('Hybrid');
    }
    if (obj.vars.baselayers.Physical) {
      opts.mapTypes.push(G_PHYSICAL_MAP);
      opts.mapTypeNames.push('Physical');
    }

  });

  obj.bind("boot", function () {
    obj.map = new GMap2(elem, obj.opts);
  });

  obj.bind("init", function () {
    var map = obj.map;

    // Map type control
    if (obj.vars.mtc === 'standard') {
      map.addControl(new GMapTypeControl());
    }
    else if (obj.vars.mtc === 'hier') {
      map.addControl(new GHierarchicalMapTypeControl());
    }
    else if (obj.vars.mtc === 'menu') {
      map.addControl(new GMenuMapTypeControl());
    }

    if (obj.vars.behavior.overview) {
      map.addControl(new GOverviewMapControl());
    }
    if (obj.vars.behavior.googlebar) {
      map.enableGoogleBar();
    }
    if (obj.vars.behavior.scale) {
      map.addControl(new GScaleControl());
    }
    if (obj.vars.behavior.nodrag) {
      map.disableDragging();
    }
    else if (!obj.vars.behavior.nokeyboard) {
      obj._kbdhandler = new GKeyboardHandler(map);
    }
    if (obj.vars.extent) {
      var c = obj.vars.extent;
      var extent = new GLatLngBounds(new GLatLng(c[0][0], c[0][1]), new GLatLng(c[1][0], c[1][1]));
      obj.vars.latitude = extent.getCenter().lat();
      obj.vars.longitude = extent.getCenter().lng();
      obj.vars.zoom = map.getBoundsZoomLevel(extent);
    }
    if (obj.vars.behavior.collapsehack) {
      // Modify collapsable fieldsets to make maps check dom state when the resize handle
      // is clicked. This may not necessarily be the correct thing to do in all themes,
      // hence it being a behavior.
      setTimeout(function () {
        var r = function () {
          map.checkResize();
          map.setCenter(new GLatLng(obj.vars.latitude, obj.vars.longitude), obj.vars.zoom);
        };
        $(elem).parents('fieldset.collapsible').children('legend').children('a').click(r);
        // Would be nice, but doesn't work.
        //$(elem).parents('fieldset.collapsible').children('.fieldset-wrapper').scroll(r);
      }, 0);
    }
    map.setCenter(new GLatLng(obj.vars.latitude, obj.vars.longitude), obj.vars.zoom);

    if (!obj.vars.nocontzoom) {
      map.enableDoubleClickZoom();
      map.enableContinuousZoom();
    }
    if (!obj.vars.behavior.nomousezoom) {
      map.enableScrollWheelZoom();
    }

    // Send out outgoing zooms
    GEvent.addListener(map, "zoomend", function (oldzoom, newzoom) {
      obj.vars.zoom = newzoom;
      obj.change("zoom", _ib.zoom);
    });

    // Send out outgoing moves
    GEvent.addListener(map, "moveend", function () {
      var coord = map.getCenter();
      obj.vars.latitude = coord.lat();
      obj.vars.longitude = coord.lng();
      obj.change("move", _ib.move);
    });

    // Send out outgoing map type changes.
    GEvent.addListener(map, "maptypechanged", function () {
      // If the map isn't ready yet, ignore it.
      if (obj.ready) {
        var type = map.getCurrentMapType();
        var i;
        for (i = 0; i < obj.opts.mapTypes.length; i++) {
          if (obj.opts.mapTypes[i] === type) {
            obj.vars.maptype = obj.opts.mapTypeNames[i];
          }
        }
        obj.change("maptypechange", _ib.mtc);
      }
    });

  });
});

////////////////////////////////////////
//            Zoom widget             //
////////////////////////////////////////
Drupal.gmap.addHandler('zoom', function (elem) {
  var obj = this;
  // Respond to incoming zooms
  var binding = obj.bind("zoom", function () {
    elem.value = obj.vars.zoom;
  });
  // Send out outgoing zooms
  $(elem).change(function () {
    obj.vars.zoom = parseInt(elem.value, 10);
    obj.change("zoom", binding);
  });
});

////////////////////////////////////////
//          Latitude widget           //
////////////////////////////////////////
Drupal.gmap.addHandler('latitude', function (elem) {
  var obj = this;
  // Respond to incoming movements.
  var binding = obj.bind("move", function () {
    elem.value = '' + obj.vars.latitude;
  });
  // Send out outgoing movements.
  $(elem).change(function () {
    obj.vars.latitude = Number(this.value);
    obj.change("move", binding);
  });
});

////////////////////////////////////////
//         Longitude widget           //
////////////////////////////////////////
Drupal.gmap.addHandler('longitude', function (elem) {
  var obj = this;
  // Respond to incoming movements.
  var binding = obj.bind("move", function () {
    elem.value = '' + obj.vars.longitude;
  });
  // Send out outgoing movements.
  $(elem).change(function () {
    obj.vars.longitude = Number(this.value);
    obj.change("move", binding);
  });
});

////////////////////////////////////////
//          Latlon widget             //
////////////////////////////////////////
Drupal.gmap.addHandler('latlon', function (elem) {
  var obj = this;
  // Respond to incoming movements.
  var binding = obj.bind("move", function () {
    elem.value = '' + obj.vars.latitude + ',' + obj.vars.longitude;
  });
  // Send out outgoing movements.
  $(elem).change(function () {
    var t = this.value.split(',');
    obj.vars.latitude = Number(t[0]);
    obj.vars.longitude = Number(t[1]);
    obj.change("move", binding);
  });
});

////////////////////////////////////////
//          Maptype widget            //
////////////////////////////////////////
Drupal.gmap.addHandler('maptype', function (elem) {
  var obj = this;
  // Respond to incoming movements.
  var binding = obj.bind("maptypechange", function () {
    elem.value = obj.vars.maptype;
  });
  // Send out outgoing movements.
  $(elem).change(function () {
    obj.vars.maptype = elem.value;
    obj.change("maptypechange", binding);
  });
});

(function () { // BEGIN CLOSURE
  var re = /([0-9.]+)\s*(em|ex|px|in|cm|mm|pt|pc|%)/;
  var normalize = function (str) {
    var ar;
    if ((ar = re.exec(str.toLowerCase()))) {
      return ar[1] + ar[2];
    }
    return null;
  };
  ////////////////////////////////////////
  //           Width widget             //
  ////////////////////////////////////////
  Drupal.gmap.addHandler('width', function (elem) {
    var obj = this;
    // Respond to incoming width changes.
    var binding = obj.bind("widthchange", function (w) {
      elem.value = normalize(w);
    });
    // Send out outgoing width changes.
    $(elem).change(function () {
      var n;
      if ((n = normalize(elem.value))) {
        elem.value = n;
        obj.change('widthchange', binding, n);
      }
    });
    obj.bind('init', function () {
      $(elem).change();
    });
  });

  ////////////////////////////////////////
  //           Height widget            //
  ////////////////////////////////////////
  Drupal.gmap.addHandler('height', function (elem) {
    var obj = this;
    // Respond to incoming height changes.
    var binding = obj.bind("heightchange", function (h) {
      elem.value = normalize(h);
    });
    // Send out outgoing height changes.
    $(elem).change(function () {
      var n;
      if ((n = normalize(elem.value))) {
        elem.value = n;
        obj.change('heightchange', binding, n);
      }
    });
    obj.bind('init', function () {
      $(elem).change();
    });
  });

})(); // END CLOSURE

////////////////////////////////////////
//        Control type widget         //
////////////////////////////////////////
Drupal.gmap.addHandler('controltype', function (elem) {
  var obj = this;
  // Respond to incoming height changes.
  var binding = obj.bind("controltypechange", function () {
    elem.value = obj.vars.controltype;
  });
  // Send out outgoing height changes.
  $(elem).change(function () {
    obj.vars.controltype = elem.value;
    obj.change("controltypechange", binding);
  });
});

// Map cleanup.
if (Drupal.jsEnabled) {
  $(document).unload(GUnload);
}

Drupal.behaviors.GMap = function (context) {
  if (Drupal.settings && Drupal.settings['gmap_remap_widgets']) {
    jQuery.each(Drupal.settings['gmap_remap_widgets'], function(key, val) {
      $('#'+ key).addClass('gmap-control');
    });
  }
  $('.gmap-control:not(.gmap-processed)', context).addClass('gmap-processed').each(function () {Drupal.gmap.setup.call(this)});
};
;
/* $Id: marker.js,v 1.4.2.1 2010/04/08 13:40:19 rooby Exp $ */

/**
 * @file
 * Common marker routines.
 */

/*global $, Drupal, GEvent, GInfoWindowTab, GLatLng, GLatLngBounds */

Drupal.gmap.addHandler('gmap', function (elem) {
  var obj = this;

  obj.bind('init', function () {
    if (obj.vars.behavior.autozoom) {
      obj.bounds = new GLatLngBounds();
    }
  });

  obj.bind('addmarker', function (marker) {
    var m = Drupal.gmap.factory.marker(new GLatLng(marker.latitude, marker.longitude), marker.opts);
    marker.marker = m;
    GEvent.addListener(m, 'click', function () {
      obj.change('clickmarker', -1, marker);
    });
    if (obj.vars.behavior.highlight) {
      GEvent.addListener(m, 'mouseover', function () {
        var highlightColor = '#' + obj.vars.styles.highlight_color;
        highlightMarker(obj.map, marker, 'hoverHighlight', highlightColor);
      });
      GEvent.addListener(m, 'mouseout', function () {
        unHighlightMarker(obj.map, marker, 'hoverHighlight');
      });
    }
    if (obj.vars.behavior.extramarkerevents) {
      GEvent.addListener(m, 'mouseover', function () {
        obj.change('mouseovermarker', -1, marker);
      });
      GEvent.addListener(m, 'mouseout', function () {
        obj.change('mouseoutmarker', -1, marker);
      });
      GEvent.addListener(m, 'dblclick', function () {
        obj.change('dblclickmarker', -1, marker);
      });
    }
    /**
     * Perform a synthetic marker click on this marker on load.
     */
    if (marker.autoclick || (marker.options && marker.options.autoclick)) {
      obj.deferChange('clickmarker', -1, marker);
    }
    if (obj.vars.behavior.autozoom) {
      obj.bounds.extend(marker.marker.getPoint());
    }
    // If the highlight arg option is used in views highlight the marker.
    if (marker.opts.highlight == 1) {
      highlightMarker(obj.map, marker, 'viewHighlight', marker.opts.highlightcolor);
    }
  });

  // Default marker actions.
  obj.bind('clickmarker', function (marker) {
    // Local/stored content
    if (marker.text) {
      marker.marker.openInfoWindowHtml(marker.text);
    }
    // AJAX content
    if (marker.rmt) {
      var uri = marker.rmt;
      // If there was a callback, prefix that.
      // (If there wasn't, marker.rmt was the FULL path.)
      if (obj.vars.rmtcallback) {
        uri = obj.vars.rmtcallback + '/' + marker.rmt;
      }
      // @Bevan: I think it makes more sense to do it in this order.
      // @Bevan: I don't like your choice of variable btw, seems to me like
      // @Bevan: it belongs in the map object, or at *least* somewhere in
      // @Bevan: the gmap settings proper...
      //if (!marker.text && Drupal.settings.loadingImage) {
      //  marker.marker.openInfoWindowHtml(Drupal.settings.loadingImage);
      //}
      $.get(uri, {}, function (data) {
        marker.marker.openInfoWindowHtml(data);
      });
    }
    // Tabbed content
    else if (marker.tabs) {
      var infoWinTabs = [];
      for (var m in marker.tabs) {
        if (marker.tabs.hasOwnProperty(m)) {
          infoWinTabs.push(new GInfoWindowTab(m, marker.tabs[m]));
        }
      }
      marker.marker.openInfoWindowTabsHtml(infoWinTabs);
    }
    // No content -- marker is a link
    else if (marker.link) {
      open(marker.link, '_self');
    }
  });

  obj.bind('markersready', function () {
    // If we are autozooming, set the map center at this time.
    if (obj.vars.behavior.autozoom) {
      if (!obj.bounds.isEmpty()) {
        obj.map.setCenter(obj.bounds.getCenter(), Math.min(obj.map.getBoundsZoomLevel(obj.bounds), obj.vars.maxzoom));
      }
    }
  });

  obj.bind('clearmarkers', function () {
    // Reset bounds if autozooming
    // @@@ Perhaps we should have a bounds for both markers and shapes?
    if (obj.vars.behavior.autozoom) {
      obj.bounds = new GLatLngBounds();
    }
  });

  // @@@ TODO: Some sort of bounds handling for deletemarker? We'd have to walk the whole thing to figure out the new bounds...
});
;
/* $Id: highlight.js,v 1.1.2.1 2010/04/08 13:40:19 rooby Exp $ */

/**
 * @file
 * Common marker highlighting routines.
 */

/**
 * Highlights marker on rollover.
 * Removes highlight on previous marker.
 *
 * Creates a "circle" using 20-sided GPolygon at the given point
 * Circle polygon object is global variable as there is only one highlighted marker at a time
 * and we want to remove the previously placed polygon before placing a new one.
 * 
 * Original code "Google Maps JavaScript API Example"
 */
highlightMarker = function (map, currentMarker, highlightID, color) {
  var markerPoint = currentMarker.marker.getPoint();
  var polyPoints = Array();

  var mapNormalProj = G_NORMAL_MAP.getProjection();
  var mapZoom = map.getZoom();
  var clickedPixel = mapNormalProj.fromLatLngToPixel(markerPoint, mapZoom);

  var polySmallRadius = 20;
  var polyNumSides = 20;
  var polySideLength = 18;

  for (var a = 0; a < (polyNumSides + 1); a++) {
    var aRad = polySideLength * a * (Math.PI/180);
    var polyRadius = polySmallRadius; 
    var pixelX = clickedPixel.x + polyRadius * Math.cos(aRad);
    var pixelY = clickedPixel.y + polyRadius * Math.sin(aRad);
    var polyPixel = new GPoint(pixelX, pixelY);
    var polyPoint = mapNormalProj.fromPixelToLatLng(polyPixel, mapZoom);
    polyPoints.push(polyPoint);
  }
  // Using GPolygon(points,  strokeColor?,  strokeWeight?,  strokeOpacity?,  fillColor?,  fillOpacity?)
  map.highlightID = new GPolygon(polyPoints, color, 2, 0, color, 0.5);
  map.addOverlay(map.highlightID);
};

unHighlightMarker = function (map, currentMarker, highlightID) {
  if (map.highlightID) {
    map.removeOverlay(map.highlightID);
    delete map.highlightID;
  }
};
;
/* $Id: gmap_marker.js,v 1.3 2009/02/11 18:40:31 bdragon Exp $ */

/**
 * @file
 * GMap Markers
 * GMap API version -- No manager
 */

/*global Drupal, GMarker */

// Replace to override marker creation
Drupal.gmap.factory.marker = function (loc, opts) {
  return new GMarker(loc, opts);
};

Drupal.gmap.addHandler('gmap', function (elem) {
  var obj = this;

  obj.bind('addmarker', function (marker) {
    obj.map.addOverlay(marker.marker);
  });

  obj.bind('delmarker', function (marker) {
    obj.map.removeOverlay(marker.marker);
  });

  obj.bind('clearmarkers', function () {
    // @@@ Maybe don't nuke ALL overlays?
    obj.map.clearOverlays();
  });
});
;
/* $Id: poly.js,v 1.3 2009/02/11 18:36:04 bdragon Exp $ */

/**
 * @file
 * GPolyLine / GPolygon manager
 */

/*global Drupal, GLatLng, GPoint */

Drupal.gmap.map.prototype.poly = {};

/**
 * Distance in pixels between 2 points.
 */
Drupal.gmap.map.prototype.poly.distance = function (point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};

/**
 * Circle -- Following projection.
 */
Drupal.gmap.map.prototype.poly.computeCircle = function (obj, center, point2) {
  var numSides = 36;
  var sideInc = 10; // 360 / 20 = 18 degrees
  var convFactor = Math.PI / 180;
  var points = [];
  var radius = obj.poly.distance(center, point2);
  // 36 sided poly ~= circle
  for (var i = 0; i <= numSides; i++) {
    var rad = i * sideInc * convFactor;
    var x = center.x + radius * Math.cos(rad);
    var y = center.y + radius * Math.sin(rad);
    //points.push(obj.map.getCurrentMapType().getProjection().fromPixelToLatLng(new GPoint(x,y),obj.map.getZoom()));
    points.push(new GPoint(x, y));
  }
  return points;
};

Drupal.gmap.map.prototype.poly.calcPolyPoints = function (center, radM, numPoints, sAngle) {
  if (!numPoints) {
    numPoints = 32;
  }
  if (!sAngle) {
    sAngle = 0;
  }

  var d2r = Math.PI / 180.0;
  var r2d = 180.0 / Math.PI;
  var angleRad = sAngle * d2r;
  // earth semi major axis is about 6378137 m
  var latScale = radM / 6378137 * r2d;
  var lngScale = latScale / Math.cos(center.latRadians());

  var angInc = 2 * Math.PI / numPoints;
  var points = [];
  for (var i = 0; i < numPoints; i++) {
    var lat = parseFloat(center.lat()) + latScale * Math.sin(angleRad);
    var lng = parseFloat(center.lng()) + lngScale * Math.cos(angleRad);
    points.push(new GLatLng(lat, lng));
    angleRad += angInc;
  }

  // close the shape and return it
  points.push(points[0]);
  return points;
};
;
/* $Id: locpick.js,v 1.4.2.1 2010/04/01 13:26:27 rooby Exp $ */

/**
 * @file
 * Location chooser interface.
 */

/*global $, Drupal, GEvent, GLatLng, GMarker */

Drupal.gmap.addHandler('gmap', function (elem) {
  var obj = this;

  var binding = obj.bind("locpickchange", function () {
    if (obj.locpick_coord) {
      GEvent.trigger(obj.map, "click", null, obj.locpick_coord);
    }
  });

  obj.bind("locpickremove", function () {
    obj.map.removeOverlay(obj.locpick_point);
    obj.locpick_coord = null;
    obj.change('locpickchange', -1);
  });

  obj.bind("init", function () {
    if (obj.vars.behavior.locpick) {
      obj.locpick_coord = new GLatLng(obj.vars.latitude, obj.vars.longitude);

      GEvent.addListener(obj.map, "click", function (overlay, point) {
        obj.map.checkResize();
        if (!overlay) {
          if (!obj.locpick_point) {
            obj.map.addOverlay(obj.locpick_point = new GMarker(point, {draggable: true}));
          }
          obj.locpick_point.setLatLng(point);
          GEvent.addListener(obj.locpick_point, 'drag', function () {
            obj.locpick_coord = obj.locpick_point.getLatLng();
            obj.change('locpickchange', binding);
          });
          GEvent.addListener(obj.locpick_point, 'dragend', function () {
            obj.locpick_coord = obj.locpick_point.getLatLng();
            obj.change('locpickchange', binding);
          });
          obj.locpick_coord = point;
          obj.map.panTo(point);
          obj.change('locpickchange', binding);
        }
        else {
          // Unsetting the location
          obj.change('locpickremove', -1);
        }
      });
    }
  });

  obj.bind("ready", function () {
    // Fake a click to set the initial point, if one was set.
    if (obj.vars.behavior.locpick) {
      if (!obj.locpick_invalid) {
        obj.change('locpickchange', -1);
      }
    }
  });

});

Drupal.gmap.addHandler('locpick_latitude', function (elem) {
  var obj = this;

  obj.bind("init", function () {
    if (elem.value !== '') {
      obj.vars.latitude = Number(elem.value);
      obj.locpick_coord = new GLatLng(obj.vars.latitude, obj.vars.longitude);
    }
    else {
      obj.locpick_coord = null;
      obj.locpick_invalid = true;
    }
  });

  var binding = obj.bind("locpickchange", function () {
    if (obj.locpick_coord) {
      elem.value = obj.locpick_coord.lat();
    }
    else {
      elem.value = '';
    }
  });

  $(elem).change(function () {
    if (elem.value !== '') {
      if (obj.locpick_coord) {
        obj.locpick_coord = new GLatLng(Number(elem.value), obj.locpick_coord.lng());
        obj.change('locpickchange', binding);
      }
      else {
        obj.locpick_coord = new GLatLng(Number(elem.value), 0.0);
      }
    }
    else {
      obj.change('locpickremove', -1);
    }
  });
});

Drupal.gmap.addHandler('locpick_longitude', function (elem) {
  var obj = this;

  obj.bind("init", function () {
    if (elem.value !== '') {
      obj.vars.longitude = Number(elem.value);
      obj.locpick_coord = new GLatLng(obj.vars.latitude, obj.vars.longitude);
    }
    else {
      obj.locpick_invalid = true;
    }
  });

  var binding = obj.bind("locpickchange", function () {
    if (obj.locpick_coord) {
      elem.value = obj.locpick_coord.lng();
    }
    else {
      elem.value = '';
    }
  });

  $(elem).change(function () {
    if (elem.value !== '') {
      if (obj.locpick_coord) {
        obj.locpick_coord = new GLatLng(obj.locpick_coord.lat(), Number(elem.value));
        obj.change('locpickchange', binding);
      }
      else {
        obj.locpick_coord = new GLatLng(0.0, Number(elem.value));
      }
    }
    else {
      obj.change('locpickremove', -1);
    }
  });
});
;
// $Id: tableheader.js,v 1.16.2.2 2009/03/30 12:48:09 goba Exp $

Drupal.tableHeaderDoScroll = function() {
  if (typeof(Drupal.tableHeaderOnScroll)=='function') {
    Drupal.tableHeaderOnScroll();
  }
};

Drupal.behaviors.tableHeader = function (context) {
  // This breaks in anything less than IE 7. Prevent it from running.
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {
    return;
  }

  // Keep track of all cloned table headers.
  var headers = [];

  $('table.sticky-enabled thead:not(.tableHeader-processed)', context).each(function () {
    // Clone thead so it inherits original jQuery properties.
    var headerClone = $(this).clone(true).insertBefore(this.parentNode).wrap('<table class="sticky-header"></table>').parent().css({
      position: 'fixed',
      top: '0px'
    });

    headerClone = $(headerClone)[0];
    headers.push(headerClone);

    // Store parent table.
    var table = $(this).parent('table')[0];
    headerClone.table = table;
    // Finish initialzing header positioning.
    tracker(headerClone);

    $(table).addClass('sticky-table');
    $(this).addClass('tableHeader-processed');
  });

  // Define the anchor holding var.
  var prevAnchor = '';

  // Track positioning and visibility.
  function tracker(e) {
    // Save positioning data.
    var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (e.viewHeight != viewHeight) {
      e.viewHeight = viewHeight;
      e.vPosition = $(e.table).offset().top - 4;
      e.hPosition = $(e.table).offset().left;
      e.vLength = e.table.clientHeight - 100;
      // Resize header and its cell widths.
      var parentCell = $('th', e.table);
      $('th', e).each(function(index) {
        var cellWidth = parentCell.eq(index).css('width');
        // Exception for IE7.
        if (cellWidth == 'auto') {
          cellWidth = parentCell.get(index).clientWidth +'px';
        }
        $(this).css('width', cellWidth);
      });
      $(e).css('width', $(e.table).css('width'));
    }

    // Track horizontal positioning relative to the viewport and set visibility.
    var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
    var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - e.vPosition;
    var visState = (vOffset > 0 && vOffset < e.vLength) ? 'visible' : 'hidden';
    $(e).css({left: -hScroll + e.hPosition +'px', visibility: visState});

    // Check the previous anchor to see if we need to scroll to make room for the header.
    // Get the height of the header table and scroll up that amount.
    if (prevAnchor != location.hash) {
      if (location.hash != '') {
        var offset = $('td' + location.hash).offset();
        if (offset) {
          var top = offset.top;
          var scrollLocation = top - $(e).height();
          $('body, html').scrollTop(scrollLocation);
        }
      }
      prevAnchor = location.hash;
    }
  }

  // Only attach to scrollbars once, even if Drupal.attachBehaviors is called
  //  multiple times.
  if (!$('body').hasClass('tableHeader-processed')) {
    $('body').addClass('tableHeader-processed');
    $(window).scroll(Drupal.tableHeaderDoScroll);
    $(document.documentElement).scroll(Drupal.tableHeaderDoScroll);
  }

  // Track scrolling.
  Drupal.tableHeaderOnScroll = function() {
    $(headers).each(function () {
      tracker(this);
    });
  };

  // Track resizing.
  var time = null;
  var resize = function () {
    // Ensure minimum time between adjustments.
    if (time) {
      return;
    }
    time = setTimeout(function () {
      $('table.sticky-header').each(function () {
        // Force cell width calculation.
        this.viewHeight = 0;
        tracker(this);
      });
      // Reset timer
      time = null;
    }, 250);
  };
  $(window).resize(resize);
};
;
/*
 * jQuery UI 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */(function(C){var I=C.fn.remove,D=C.browser.mozilla&&(parseFloat(C.browser.version)<1.9);C.ui={version:"1.6",plugin:{add:function(K,L,N){var M=C.ui[K].prototype;for(var J in N){M.plugins[J]=M.plugins[J]||[];M.plugins[J].push([L,N[J]])}},call:function(J,L,K){var N=J.plugins[L];if(!N){return }for(var M=0;M<N.length;M++){if(J.options[N[M][0]]){N[M][1].apply(J.element,K)}}}},contains:function(L,K){var J=C.browser.safari&&C.browser.version<522;if(L.contains&&!J){return L.contains(K)}if(L.compareDocumentPosition){return !!(L.compareDocumentPosition(K)&16)}while(K=K.parentNode){if(K==L){return true}}return false},cssCache:{},css:function(J){if(C.ui.cssCache[J]){return C.ui.cssCache[J]}var K=C('<div class="ui-gen">').addClass(J).css({position:"absolute",top:"-5000px",left:"-5000px",display:"block"}).appendTo("body");C.ui.cssCache[J]=!!((!(/auto|default/).test(K.css("cursor"))||(/^[1-9]/).test(K.css("height"))||(/^[1-9]/).test(K.css("width"))||!(/none/).test(K.css("backgroundImage"))||!(/transparent|rgba\(0, 0, 0, 0\)/).test(K.css("backgroundColor"))));try{C("body").get(0).removeChild(K.get(0))}catch(L){}return C.ui.cssCache[J]},hasScroll:function(M,K){if(C(M).css("overflow")=="hidden"){return false}var J=(K&&K=="left")?"scrollLeft":"scrollTop",L=false;if(M[J]>0){return true}M[J]=1;L=(M[J]>0);M[J]=0;return L},isOverAxis:function(K,J,L){return(K>J)&&(K<(J+L))},isOver:function(O,K,N,M,J,L){return C.ui.isOverAxis(O,N,J)&&C.ui.isOverAxis(K,M,L)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(D){var F=C.attr,E=C.fn.removeAttr,H="http://www.w3.org/2005/07/aaa",A=/^aria-/,B=/^wairole:/;C.attr=function(K,J,L){var M=L!==undefined;return(J=="role"?(M?F.call(this,K,J,"wairole:"+L):(F.apply(this,arguments)||"").replace(B,"")):(A.test(J)?(M?K.setAttributeNS(H,J.replace(A,"aaa:"),L):F.call(this,K,J.replace(A,"aaa:"))):F.apply(this,arguments)))};C.fn.removeAttr=function(J){return(A.test(J)?this.each(function(){this.removeAttributeNS(H,J.replace(A,""))}):E.call(this,J))}}C.fn.extend({remove:function(){C("*",this).add(this).each(function(){C(this).triggerHandler("remove")});return I.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var J;if((C.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){J=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(C.curCSS(this,"position",1))&&(/(auto|scroll)/).test(C.curCSS(this,"overflow",1)+C.curCSS(this,"overflow-y",1)+C.curCSS(this,"overflow-x",1))}).eq(0)}else{J=this.parents().filter(function(){return(/(auto|scroll)/).test(C.curCSS(this,"overflow",1)+C.curCSS(this,"overflow-y",1)+C.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!J.length?C(document):J}});C.extend(C.expr[":"],{data:function(K,L,J){return C.data(K,J[3])},tabbable:function(L,M,K){var N=L.nodeName.toLowerCase();function J(O){return !(C(O).is(":hidden")||C(O).parents(":hidden").length)}return(L.tabIndex>=0&&(("a"==N&&L.href)||(/input|select|textarea|button/.test(N)&&"hidden"!=L.type&&!L.disabled))&&J(L))}});function G(M,N,O,L){function K(Q){var P=C[M][N][Q]||[];return(typeof P=="string"?P.split(/,?\s+/):P)}var J=K("getter");if(L.length==1&&typeof L[0]=="string"){J=J.concat(K("getterSetter"))}return(C.inArray(O,J)!=-1)}C.widget=function(K,J){var L=K.split(".")[0];K=K.split(".")[1];C.fn[K]=function(P){var N=(typeof P=="string"),O=Array.prototype.slice.call(arguments,1);if(N&&P.substring(0,1)=="_"){return this}if(N&&G(L,K,P,O)){var M=C.data(this[0],K);return(M?M[P].apply(M,O):undefined)}return this.each(function(){var Q=C.data(this,K);(!Q&&!N&&C.data(this,K,new C[L][K](this,P)));(Q&&N&&C.isFunction(Q[P])&&Q[P].apply(Q,O))})};C[L]=C[L]||{};C[L][K]=function(O,N){var M=this;this.widgetName=K;this.widgetEventPrefix=C[L][K].eventPrefix||K;this.widgetBaseClass=L+"-"+K;this.options=C.extend({},C.widget.defaults,C[L][K].defaults,C.metadata&&C.metadata.get(O)[K],N);this.element=C(O).bind("setData."+K,function(Q,P,R){return M._setData(P,R)}).bind("getData."+K,function(Q,P){return M._getData(P)}).bind("remove",function(){return M.destroy()});this._init()};C[L][K].prototype=C.extend({},C.widget.prototype,J);C[L][K].getterSetter="option"};C.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName)},option:function(L,M){var K=L,J=this;if(typeof L=="string"){if(M===undefined){return this._getData(L)}K={};K[L]=M}C.each(K,function(N,O){J._setData(N,O)})},_getData:function(J){return this.options[J]},_setData:function(J,K){this.options[J]=K;if(J=="disabled"){this.element[K?"addClass":"removeClass"](this.widgetBaseClass+"-disabled")}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(K,L,M){var J=(K==this.widgetEventPrefix?K:this.widgetEventPrefix+K);L=L||C.event.fix({type:J,target:this.element[0]});return this.element.triggerHandler(J,[L,M],this.options[K])}};C.widget.defaults={disabled:false};C.ui.mouse={_mouseInit:function(){var J=this;this.element.bind("mousedown."+this.widgetName,function(K){return J._mouseDown(K)}).bind("click."+this.widgetName,function(K){if(J._preventClickEvent){J._preventClickEvent=false;return false}});if(C.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(C.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(L){(this._mouseStarted&&this._mouseUp(L));this._mouseDownEvent=L;var K=this,M=(L.which==1),J=(typeof this.options.cancel=="string"?C(L.target).parents().add(L.target).filter(this.options.cancel).length:false);if(!M||J||!this._mouseCapture(L)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){K.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(L)&&this._mouseDelayMet(L)){this._mouseStarted=(this._mouseStart(L)!==false);if(!this._mouseStarted){L.preventDefault();return true}}this._mouseMoveDelegate=function(N){return K._mouseMove(N)};this._mouseUpDelegate=function(N){return K._mouseUp(N)};C(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);if(!C.browser.safari){L.preventDefault()}return true},_mouseMove:function(J){if(C.browser.msie&&!J.button){return this._mouseUp(J)}if(this._mouseStarted){this._mouseDrag(J);return J.preventDefault()}if(this._mouseDistanceMet(J)&&this._mouseDelayMet(J)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,J)!==false);(this._mouseStarted?this._mouseDrag(J):this._mouseUp(J))}return !this._mouseStarted},_mouseUp:function(J){C(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=true;this._mouseStop(J)}return false},_mouseDistanceMet:function(J){return(Math.max(Math.abs(this._mouseDownEvent.pageX-J.pageX),Math.abs(this._mouseDownEvent.pageY-J.pageY))>=this.options.distance)},_mouseDelayMet:function(J){return this.mouseDelayMet},_mouseStart:function(J){},_mouseDrag:function(J){},_mouseStop:function(J){},_mouseCapture:function(J){return true}};C.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);
/*
 * jQuery UI Draggable 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	ui.core.js
 */(function(A){A.widget("ui.draggable",A.extend({},A.ui.mouse,{_init:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.cssNamespace&&this.element.addClass(this.options.cssNamespace+"-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return }this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(B){var C=this.options;if(this.helper||C.disabled||A(B.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(B);if(!this.handle){return false}return true},_mouseStart:function(B){var C=this.options;this.helper=this._createHelper(B);this._cacheHelperProportions();if(A.ui.ddmanager){A.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};A.extend(this.offset,{click:{left:B.pageX-this.offset.left,top:B.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});if(C.cursorAt){this._adjustOffsetFromHelper(C.cursorAt)}this.originalPosition=this._generatePosition(B);if(C.containment){this._setContainment()}this._propagate("start",B);this._cacheHelperProportions();if(A.ui.ddmanager&&!C.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,B)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(B,true);return true},_mouseDrag:function(B,C){this.position=this._generatePosition(B);this.positionAbs=this._convertPositionTo("absolute");if(!C){this.position=this._propagate("drag",B)||this.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(A.ui.ddmanager){A.ui.ddmanager.drag(this,B)}return false},_mouseStop:function(C){var D=false;if(A.ui.ddmanager&&!this.options.dropBehaviour){var D=A.ui.ddmanager.drop(this,C)}if((this.options.revert=="invalid"&&!D)||(this.options.revert=="valid"&&D)||this.options.revert===true||(A.isFunction(this.options.revert)&&this.options.revert.call(this.element,D))){var B=this;A(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){B._propagate("stop",C);B._clear()})}else{this._propagate("stop",C);this._clear()}return false},_getHandle:function(B){var C=!this.options.handle||!A(this.options.handle,this.element).length?true:false;A(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==B.target){C=true}});return C},_createHelper:function(C){var D=this.options;var B=A.isFunction(D.helper)?A(D.helper.apply(this.element[0],[C])):(D.helper=="clone"?this.element.clone():this.element);if(!B.parents("body").length){B.appendTo((D.appendTo=="parent"?this.element[0].parentNode:D.appendTo))}if(B[0]!=this.element[0]&&!(/(fixed|absolute)/).test(B.css("position"))){B.css("position","absolute")}return B},_adjustOffsetFromHelper:function(B){if(B.left!=undefined){this.offset.click.left=B.left+this.margins.left}if(B.right!=undefined){this.offset.click.left=this.helperProportions.width-B.right+this.margins.left}if(B.top!=undefined){this.offset.click.top=B.top+this.margins.top}if(B.bottom!=undefined){this.offset.click.top=this.helperProportions.height-B.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var B=this.offsetParent.offset();if((this.offsetParent[0]==document.body&&A.browser.mozilla)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&A.browser.msie)){B={top:0,left:0}}return{top:B.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:B.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var B=this.element.position();return{top:B.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:B.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var E=this.options;if(E.containment=="parent"){E.containment=this.helper[0].parentNode}if(E.containment=="document"||E.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,A(E.containment=="document"?document:window).width()-this.offset.relative.left-this.offset.parent.left-this.helperProportions.width-this.margins.left-(parseInt(this.element.css("marginRight"),10)||0),(A(E.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.offset.relative.top-this.offset.parent.top-this.helperProportions.height-this.margins.top-(parseInt(this.element.css("marginBottom"),10)||0)]}if(!(/^(document|window|parent)$/).test(E.containment)){var C=A(E.containment)[0];var D=A(E.containment).offset();var B=(A(C).css("overflow")!="hidden");this.containment=[D.left+(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.offset.relative.left-this.offset.parent.left-this.margins.left,D.top+(parseInt(A(C).css("borderTopWidth"),10)||0)-this.offset.relative.top-this.offset.parent.top-this.margins.top,D.left+(B?Math.max(C.scrollWidth,C.offsetWidth):C.offsetWidth)-(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.offset.relative.left-this.offset.parent.left-this.helperProportions.width-this.margins.left,D.top+(B?Math.max(C.scrollHeight,C.offsetHeight):C.offsetHeight)-(parseInt(A(C).css("borderTopWidth"),10)||0)-this.offset.relative.top-this.offset.parent.top-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(D,F){if(!F){F=this.position}var C=D=="absolute"?1:-1;var B=this[(this.cssPosition=="absolute"?"offset":"scroll")+"Parent"],E=(/(html|body)/i).test(B[0].tagName);return{top:(F.top+this.offset.relative.top*C+this.offset.parent.top*C+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(E?0:B.scrollTop()))*C+this.margins.top*C),left:(F.left+this.offset.relative.left*C+this.offset.parent.left*C+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():(E?0:B.scrollLeft()))*C+this.margins.left*C)}},_generatePosition:function(D){var G=this.options,C=this[(this.cssPosition=="absolute"?"offset":"scroll")+"Parent"],H=(/(html|body)/i).test(C[0].tagName);var B={top:(D.pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(H?0:C.scrollTop()))),left:(D.pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():H?0:C.scrollLeft()))};if(!this.originalPosition){return B}if(this.containment){if(B.left<this.containment[0]){B.left=this.containment[0]}if(B.top<this.containment[1]){B.top=this.containment[1]}if(B.left>this.containment[2]){B.left=this.containment[2]}if(B.top>this.containment[3]){B.top=this.containment[3]}}if(G.grid){var F=this.originalPosition.top+Math.round((B.top-this.originalPosition.top)/G.grid[1])*G.grid[1];B.top=this.containment?(!(F<this.containment[1]||F>this.containment[3])?F:(!(F<this.containment[1])?F-G.grid[1]:F+G.grid[1])):F;var E=this.originalPosition.left+Math.round((B.left-this.originalPosition.left)/G.grid[0])*G.grid[0];B.left=this.containment?(!(E<this.containment[0]||E>this.containment[2])?E:(!(E<this.containment[0])?E-G.grid[0]:E+G.grid[0])):E}return B},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_propagate:function(C,B){A.ui.plugin.call(this,C,[B,this._uiHash()]);if(C=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return this.element.triggerHandler(C=="drag"?C:"drag"+C,[B,this._uiHash()],this.options[C])},plugins:{},_uiHash:function(B){return{helper:this.helper,position:this.position,absolutePosition:this.positionAbs,options:this.options}}}));A.extend(A.ui.draggable,{version:"1.6",defaults:{appendTo:"parent",axis:false,cancel:":input",connectToSortable:false,containment:false,cssNamespace:"ui",cursor:"default",cursorAt:null,delay:0,distance:1,grid:false,handle:false,helper:"original",iframeFix:false,opacity:1,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:null}});A.ui.plugin.add("draggable","connectToSortable",{start:function(B,D){var C=A(this).data("draggable");C.sortables=[];A(D.options.connectToSortable).each(function(){A(this+"").each(function(){if(A.data(this,"sortable")){var E=A.data(this,"sortable");C.sortables.push({instance:E,shouldRevert:E.options.revert});E._refreshItems();E._propagate("activate",B,C)}})})},stop:function(B,D){var C=A(this).data("draggable");A.each(C.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;C.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(B);this.instance.element.triggerHandler("sortreceive",[B,A.extend(this.instance._ui(),{sender:C.element})],this.instance.options["receive"]);this.instance.options.helper=this.instance.options._helper;if(C.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._propagate("deactivate",B,C)}})},drag:function(C,F){var E=A(this).data("draggable"),B=this;var D=function(I){var N=this.offset.click.top,M=this.offset.click.left;var G=this.positionAbs.top,K=this.positionAbs.left;var J=I.height,L=I.width;var O=I.top,H=I.left;return A.ui.isOver(G+N,K+M,O,H,J,L)};A.each(E.sortables,function(G){if(D.call(E,this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=A(B).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return F.helper[0]};C.target=this.instance.currentItem[0];this.instance._mouseCapture(C,true);this.instance._mouseStart(C,true,true);this.instance.offset.click.top=E.offset.click.top;this.instance.offset.click.left=E.offset.click.left;this.instance.offset.parent.left-=E.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=E.offset.parent.top-this.instance.offset.parent.top;E._propagate("toSortable",C)}if(this.instance.currentItem){this.instance._mouseDrag(C)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._mouseStop(C,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}E._propagate("fromSortable",C)}}})}});A.ui.plugin.add("draggable","cursor",{start:function(C,D){var B=A("body");if(B.css("cursor")){D.options._cursor=B.css("cursor")}B.css("cursor",D.options.cursor)},stop:function(B,C){if(C.options._cursor){A("body").css("cursor",C.options._cursor)}}});A.ui.plugin.add("draggable","iframeFix",{start:function(B,C){A(C.options.iframeFix===true?"iframe":C.options.iframeFix).each(function(){A('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(A(this).offset()).appendTo("body")})},stop:function(B,C){A("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});A.ui.plugin.add("draggable","opacity",{start:function(C,D){var B=A(D.helper);if(B.css("opacity")){D.options._opacity=B.css("opacity")}B.css("opacity",D.options.opacity)},stop:function(B,C){if(C.options._opacity){A(C.helper).css("opacity",C.options._opacity)}}});A.ui.plugin.add("draggable","scroll",{start:function(C,D){var E=D.options;var B=A(this).data("draggable");if(B.scrollParent[0]!=document&&B.scrollParent[0].tagName!="HTML"){B.overflowOffset=B.scrollParent.offset()}},drag:function(D,E){var F=E.options,B=false;var C=A(this).data("draggable");if(C.scrollParent[0]!=document&&C.scrollParent[0].tagName!="HTML"){if((C.overflowOffset.top+C.scrollParent[0].offsetHeight)-D.pageY<F.scrollSensitivity){C.scrollParent[0].scrollTop=B=C.scrollParent[0].scrollTop+F.scrollSpeed}else{if(D.pageY-C.overflowOffset.top<F.scrollSensitivity){C.scrollParent[0].scrollTop=B=C.scrollParent[0].scrollTop-F.scrollSpeed}}if((C.overflowOffset.left+C.scrollParent[0].offsetWidth)-D.pageX<F.scrollSensitivity){C.scrollParent[0].scrollLeft=B=C.scrollParent[0].scrollLeft+F.scrollSpeed}else{if(D.pageX-C.overflowOffset.left<F.scrollSensitivity){C.scrollParent[0].scrollLeft=B=C.scrollParent[0].scrollLeft-F.scrollSpeed}}}else{if(D.pageY-A(document).scrollTop()<F.scrollSensitivity){B=A(document).scrollTop(A(document).scrollTop()-F.scrollSpeed)}else{if(A(window).height()-(D.pageY-A(document).scrollTop())<F.scrollSensitivity){B=A(document).scrollTop(A(document).scrollTop()+F.scrollSpeed)}}if(D.pageX-A(document).scrollLeft()<F.scrollSensitivity){B=A(document).scrollLeft(A(document).scrollLeft()-F.scrollSpeed)}else{if(A(window).width()-(D.pageX-A(document).scrollLeft())<F.scrollSensitivity){B=A(document).scrollLeft(A(document).scrollLeft()+F.scrollSpeed)}}}if(B!==false&&A.ui.ddmanager&&!F.dropBehaviour){A.ui.ddmanager.prepareOffsets(C,D)}if(B!==false&&C.cssPosition=="absolute"&&C.scrollParent[0]!=document&&A.ui.contains(C.scrollParent[0],C.offsetParent[0])){C.offset.parent=C._getParentOffset()}if(B!==false&&C.cssPosition=="relative"&&!(C.scrollParent[0]!=document&&C.scrollParent[0]!=C.offsetParent[0])){C.offset.relative=C._getRelativeOffset()}}});A.ui.plugin.add("draggable","snap",{start:function(B,D){var C=A(this).data("draggable");C.snapElements=[];A(D.options.snap.constructor!=String?(D.options.snap.items||":data(draggable)"):D.options.snap).each(function(){var F=A(this);var E=F.offset();if(this!=C.element[0]){C.snapElements.push({item:this,width:F.outerWidth(),height:F.outerHeight(),top:E.top,left:E.left})}})},drag:function(M,K){var E=A(this).data("draggable");var Q=K.options.snapTolerance;var P=K.absolutePosition.left,O=P+E.helperProportions.width,D=K.absolutePosition.top,C=D+E.helperProportions.height;for(var N=E.snapElements.length-1;N>=0;N--){var L=E.snapElements[N].left,J=L+E.snapElements[N].width,I=E.snapElements[N].top,S=I+E.snapElements[N].height;if(!((L-Q<P&&P<J+Q&&I-Q<D&&D<S+Q)||(L-Q<P&&P<J+Q&&I-Q<C&&C<S+Q)||(L-Q<O&&O<J+Q&&I-Q<D&&D<S+Q)||(L-Q<O&&O<J+Q&&I-Q<C&&C<S+Q))){if(E.snapElements[N].snapping){(E.options.snap.release&&E.options.snap.release.call(E.element,M,A.extend(E._uiHash(),{snapItem:E.snapElements[N].item})))}E.snapElements[N].snapping=false;continue}if(K.options.snapMode!="inner"){var B=Math.abs(I-C)<=Q;var R=Math.abs(S-D)<=Q;var G=Math.abs(L-O)<=Q;var H=Math.abs(J-P)<=Q;if(B){K.position.top=E._convertPositionTo("relative",{top:I-E.helperProportions.height,left:0}).top}if(R){K.position.top=E._convertPositionTo("relative",{top:S,left:0}).top}if(G){K.position.left=E._convertPositionTo("relative",{top:0,left:L-E.helperProportions.width}).left}if(H){K.position.left=E._convertPositionTo("relative",{top:0,left:J}).left}}var F=(B||R||G||H);if(K.options.snapMode!="outer"){var B=Math.abs(I-D)<=Q;var R=Math.abs(S-C)<=Q;var G=Math.abs(L-P)<=Q;var H=Math.abs(J-O)<=Q;if(B){K.position.top=E._convertPositionTo("relative",{top:I,left:0}).top}if(R){K.position.top=E._convertPositionTo("relative",{top:S-E.helperProportions.height,left:0}).top}if(G){K.position.left=E._convertPositionTo("relative",{top:0,left:L}).left}if(H){K.position.left=E._convertPositionTo("relative",{top:0,left:J-E.helperProportions.width}).left}}if(!E.snapElements[N].snapping&&(B||R||G||H||F)){(E.options.snap.snap&&E.options.snap.snap.call(E.element,M,A.extend(E._uiHash(),{snapItem:E.snapElements[N].item})))}E.snapElements[N].snapping=(B||R||G||H||F)}}});A.ui.plugin.add("draggable","stack",{start:function(B,C){var D=A.makeArray(A(C.options.stack.group)).sort(function(F,E){return(parseInt(A(F).css("zIndex"),10)||C.options.stack.min)-(parseInt(A(E).css("zIndex"),10)||C.options.stack.min)});A(D).each(function(E){this.style.zIndex=C.options.stack.min+E});this[0].style.zIndex=C.options.stack.min+D.length}});A.ui.plugin.add("draggable","zIndex",{start:function(C,D){var B=A(D.helper);if(B.css("zIndex")){D.options._zIndex=B.css("zIndex")}B.css("zIndex",D.options.zIndex)},stop:function(B,C){if(C.options._zIndex){A(C.helper).css("zIndex",C.options._zIndex)}}})})(jQuery);
/*
 * jQuery UI Droppable 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 */(function(A){A.widget("ui.droppable",{_init:function(){var C=this.options,B=C.accept;this.isover=0;this.isout=1;this.options.accept=this.options.accept&&A.isFunction(this.options.accept)?this.options.accept:function(D){return D.is(B)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};A.ui.ddmanager.droppables[this.options.scope]=A.ui.ddmanager.droppables[this.options.scope]||[];A.ui.ddmanager.droppables[this.options.scope].push(this);(this.options.cssNamespace&&this.element.addClass(this.options.cssNamespace+"-droppable"))},destroy:function(){var B=A.ui.ddmanager.droppables[this.options.scope];for(var C=0;C<B.length;C++){if(B[C]==this){B.splice(C,1)}}this.element.removeClass("ui-droppable-disabled").removeData("droppable").unbind(".droppable")},_setData:function(B,C){if(B=="accept"){this.options.accept=C&&A.isFunction(C)?C:function(D){return D.is(accept)}}else{A.widget.prototype._setData.apply(this,arguments)}},_activate:function(C){var B=A.ui.ddmanager.current;A.ui.plugin.call(this,"activate",[C,this.ui(B)]);if(B){this.element.triggerHandler("dropactivate",[C,this.ui(B)],this.options.activate)}},_deactivate:function(C){var B=A.ui.ddmanager.current;A.ui.plugin.call(this,"deactivate",[C,this.ui(B)]);if(B){this.element.triggerHandler("dropdeactivate",[C,this.ui(B)],this.options.deactivate)}},_over:function(C){var B=A.ui.ddmanager.current;if(!B||(B.currentItem||B.element)[0]==this.element[0]){return }if(this.options.accept.call(this.element,(B.currentItem||B.element))){A.ui.plugin.call(this,"over",[C,this.ui(B)]);this.element.triggerHandler("dropover",[C,this.ui(B)],this.options.over)}},_out:function(C){var B=A.ui.ddmanager.current;if(!B||(B.currentItem||B.element)[0]==this.element[0]){return }if(this.options.accept.call(this.element,(B.currentItem||B.element))){A.ui.plugin.call(this,"out",[C,this.ui(B)]);this.element.triggerHandler("dropout",[C,this.ui(B)],this.options.out)}},_drop:function(C,D){var B=D||A.ui.ddmanager.current;if(!B||(B.currentItem||B.element)[0]==this.element[0]){return false}var E=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var F=A.data(this,"droppable");if(F.options.greedy&&A.ui.intersect(B,A.extend(F,{offset:F.element.offset()}),F.options.tolerance)){E=true;return false}});if(E){return false}if(this.options.accept.call(this.element,(B.currentItem||B.element))){A.ui.plugin.call(this,"drop",[C,this.ui(B)]);this.element.triggerHandler("drop",[C,this.ui(B)],this.options.drop);return this.element}return false},plugins:{},ui:function(B){return{draggable:(B.currentItem||B.element),helper:B.helper,position:B.position,absolutePosition:B.positionAbs,options:this.options,element:this.element}}});A.extend(A.ui.droppable,{version:"1.6",defaults:{accept:"*",activeClass:null,cssNamespace:"ui",greedy:false,hoverClass:null,scope:"default",tolerance:"intersect"}});A.ui.intersect=function(O,I,M){if(!I.offset){return false}var D=(O.positionAbs||O.position.absolute).left,C=D+O.helperProportions.width,L=(O.positionAbs||O.position.absolute).top,K=L+O.helperProportions.height;var F=I.offset.left,B=F+I.proportions.width,N=I.offset.top,J=N+I.proportions.height;switch(M){case"fit":return(F<D&&C<B&&N<L&&K<J);break;case"intersect":return(F<D+(O.helperProportions.width/2)&&C-(O.helperProportions.width/2)<B&&N<L+(O.helperProportions.height/2)&&K-(O.helperProportions.height/2)<J);break;case"pointer":var G=((O.positionAbs||O.position.absolute).left+(O.clickOffset||O.offset.click).left),H=((O.positionAbs||O.position.absolute).top+(O.clickOffset||O.offset.click).top),E=A.ui.isOver(H,G,N,F,I.proportions.height,I.proportions.width);return E;break;case"touch":return((L>=N&&L<=J)||(K>=N&&K<=J)||(L<N&&K>J))&&((D>=F&&D<=B)||(C>=F&&C<=B)||(D<F&&C>B));break;default:return false;break}};A.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(E,G){var B=A.ui.ddmanager.droppables[E.options.scope];var F=G?G.type:null;var H=(E.currentItem||E.element).find(":data(droppable)").andSelf();droppablesLoop:for(var D=0;D<B.length;D++){if(B[D].options.disabled||(E&&!B[D].options.accept.call(B[D].element,(E.currentItem||E.element)))){continue}for(var C=0;C<H.length;C++){if(H[C]==B[D].element[0]){B[D].proportions.height=0;continue droppablesLoop}}B[D].visible=B[D].element.css("display")!="none";if(!B[D].visible){continue}B[D].offset=B[D].element.offset();B[D].proportions={width:B[D].element[0].offsetWidth,height:B[D].element[0].offsetHeight};if(F=="dragstart"||F=="sortactivate"){B[D]._activate.call(B[D],G)}}},drop:function(B,C){var D=false;A.each(A.ui.ddmanager.droppables[B.options.scope],function(){if(!this.options){return }if(!this.options.disabled&&this.visible&&A.ui.intersect(B,this,this.options.tolerance)){D=this._drop.call(this,C)}if(!this.options.disabled&&this.visible&&this.options.accept.call(this.element,(B.currentItem||B.element))){this.isout=1;this.isover=0;this._deactivate.call(this,C)}});return D},drag:function(B,C){if(B.options.refreshPositions){A.ui.ddmanager.prepareOffsets(B,C)}A.each(A.ui.ddmanager.droppables[B.options.scope],function(){if(this.options.disabled||this.greedyChild||!this.visible){return }var E=A.ui.intersect(B,this,this.options.tolerance);var G=!E&&this.isover==1?"isout":(E&&this.isover==0?"isover":null);if(!G){return }var F;if(this.options.greedy){var D=this.element.parents(":data(droppable):eq(0)");if(D.length){F=A.data(D[0],"droppable");F.greedyChild=(G=="isover"?1:0)}}if(F&&G=="isover"){F["isover"]=0;F["isout"]=1;F._out.call(F,C)}this[G]=1;this[G=="isout"?"isover":"isout"]=0;this[G=="isover"?"_over":"_out"].call(this,C);if(F&&G=="isout"){F["isout"]=0;F["isover"]=1;F._over.call(F,C)}})}};A.ui.plugin.add("droppable","activeClass",{activate:function(B,C){A(this).addClass(C.options.activeClass)},deactivate:function(B,C){A(this).removeClass(C.options.activeClass)},drop:function(B,C){A(this).removeClass(C.options.activeClass)}});A.ui.plugin.add("droppable","hoverClass",{over:function(B,C){A(this).addClass(C.options.hoverClass)},out:function(B,C){A(this).removeClass(C.options.hoverClass)},drop:function(B,C){A(this).removeClass(C.options.hoverClass)}})})(jQuery);
/*
 * jQuery UI Sortable 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	ui.core.js
 */(function(A){A.widget("ui.sortable",A.extend({},A.ui.mouse,{_init:function(){var B=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?(/left|right/).test(this.items[0].item.css("float")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var B=this.items.length-1;B>=0;B--){this.items[B].item.removeData("sortable-item")}},_mouseCapture:function(E,F){if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(E);var D=null,C=this,B=A(E.target).parents().each(function(){if(A.data(this,"sortable-item")==C){D=A(this);return false}});if(A.data(E.target,"sortable-item")==C){D=A(E.target)}if(!D){return false}if(this.options.handle&&!F){var G=false;A(this.options.handle,D).find("*").andSelf().each(function(){if(this==E.target){G=true}});if(!G){return false}}this.currentItem=D;this._removeCurrentsFromItems();return true},_mouseStart:function(D,E,B){var F=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(D);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");A.extend(this.offset,{click:{left:D.pageX-this.offset.left,top:D.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});if(F.cursorAt){this._adjustOffsetFromHelper(F.cursorAt)}this.originalPosition=this._generatePosition(D);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(F.containment){this._setContainment()}this._propagate("start",D);if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!B){for(var C=this.containers.length-1;C>=0;C--){this.containers[C]._propagate("activate",D,this)}}if(A.ui.ddmanager){A.ui.ddmanager.current=this}if(A.ui.ddmanager&&!F.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,D)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(D);return true},_mouseDrag:function(E){this.position=this._generatePosition(E);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}A.ui.plugin.call(this,"sort",[E,this._ui()]);this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var C=this.items.length-1;C>=0;C--){var D=this.items[C],B=D.item[0],F=this._intersectsWithPointer(D);if(!F){continue}if(B!=this.currentItem[0]&&this.placeholder[F==1?"next":"prev"]()[0]!=B&&!A.ui.contains(this.placeholder[0],B)&&(this.options.type=="semi-dynamic"?!A.ui.contains(this.element[0],B):true)){this.direction=F==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(D)){this.options.sortIndicator.call(this,E,D)}else{break}this._propagate("change",E);break}}this._contactContainers(E);if(A.ui.ddmanager){A.ui.ddmanager.drag(this,E)}this._trigger("sort",E,this._ui());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(C,D){if(!C){return }if(A.ui.ddmanager&&!this.options.dropBehaviour){A.ui.ddmanager.drop(this,C)}if(this.options.revert){var B=this;var E=B.placeholder.offset();B.reverting=true;A(this.helper).animate({left:E.left-this.offset.parent.left-B.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:E.top-this.offset.parent.top-B.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){B._clear(C)})}else{this._clear(C,D)}return false},cancel:function(){if(this.dragging){this._mouseUp();if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var B=this.containers.length-1;B>=0;B--){this.containers[B]._propagate("deactivate",null,this);if(this.containers[B].containerCache.over){this.containers[B]._propagate("out",null,this);this.containers[B].containerCache.over=0}}}if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}A.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){A(this.domPosition.prev).after(this.currentItem)}else{A(this.domPosition.parent).prepend(this.currentItem)}return true},serialize:function(D){var B=this._getItemsAsjQuery(D&&D.connected);var C=[];D=D||{};A(B).each(function(){var E=(A(D.item||this).attr(D.attribute||"id")||"").match(D.expression||(/(.+)[-=_](.+)/));if(E){C.push((D.key||E[1]+"[]")+"="+(D.key&&D.expression?E[1]:E[2]))}});return C.join("&")},toArray:function(D){var B=this._getItemsAsjQuery(D&&D.connected);var C=[];D=D||{};B.each(function(){C.push(A(D.item||this).attr(D.attribute||"id")||"")});return C},_intersectsWith:function(K){var D=this.positionAbs.left,C=D+this.helperProportions.width,J=this.positionAbs.top,I=J+this.helperProportions.height;var E=K.left,B=E+K.width,L=K.top,H=L+K.height;var M=this.offset.click.top,G=this.offset.click.left;var F=(J+M)>L&&(J+M)<H&&(D+G)>E&&(D+G)<B;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>K[this.floating?"width":"height"])){return F}else{return(E<D+(this.helperProportions.width/2)&&C-(this.helperProportions.width/2)<B&&L<J+(this.helperProportions.height/2)&&I-(this.helperProportions.height/2)<H)}},_intersectsWithPointer:function(D){var E=A.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,D.top,D.height),C=A.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,D.left,D.width),G=E&&C,B=this._getDragVerticalDirection(),F=this._getDragHorizontalDirection();if(!G){return false}return this.floating?(((F&&F=="right")||B=="down")?2:1):(B&&(B=="down"?2:1))},_intersectsWithSides:function(E){var C=A.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,E.top+(E.height/2),E.height),D=A.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,E.left+(E.width/2),E.width),B=this._getDragVerticalDirection(),F=this._getDragHorizontalDirection();if(this.floating&&F){return((F=="right"&&D)||(F=="left"&&!D))}else{return B&&((B=="down"&&C)||(B=="up"&&!C))}},_getDragVerticalDirection:function(){var B=this.positionAbs.top-this.lastPositionAbs.top;return B!=0&&(B>0?"down":"up")},_getDragHorizontalDirection:function(){var B=this.positionAbs.left-this.lastPositionAbs.left;return B!=0&&(B>0?"right":"left")},refresh:function(B){this._refreshItems(B);this.refreshPositions()},_getItemsAsjQuery:function(G){var C=this;var B=[];var E=[];if(this.options.connectWith&&G){for(var F=this.options.connectWith.length-1;F>=0;F--){var I=A(this.options.connectWith[F]);for(var D=I.length-1;D>=0;D--){var H=A.data(I[D],"sortable");if(H&&H!=this&&!H.options.disabled){E.push([A.isFunction(H.options.items)?H.options.items.call(H.element):A(H.options.items,H.element).not(".ui-sortable-helper"),H])}}}}E.push([A.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):A(this.options.items,this.element).not(".ui-sortable-helper"),this]);for(var F=E.length-1;F>=0;F--){E[F][0].each(function(){B.push(this)})}return A(B)},_removeCurrentsFromItems:function(){var D=this.currentItem.find(":data(sortable-item)");for(var C=0;C<this.items.length;C++){for(var B=0;B<D.length;B++){if(D[B]==this.items[C].item[0]){this.items.splice(C,1)}}}},_refreshItems:function(B){this.items=[];this.containers=[this];var H=this.items;var M=this;var F=[[A.isFunction(this.options.items)?this.options.items.call(this.element[0],B,{item:this.currentItem}):A(this.options.items,this.element),this]];if(this.options.connectWith){for(var E=this.options.connectWith.length-1;E>=0;E--){var J=A(this.options.connectWith[E]);for(var D=J.length-1;D>=0;D--){var G=A.data(J[D],"sortable");if(G&&G!=this&&!G.options.disabled){F.push([A.isFunction(G.options.items)?G.options.items.call(G.element[0],B,{item:this.currentItem}):A(G.options.items,G.element),G]);this.containers.push(G)}}}}for(var E=F.length-1;E>=0;E--){var I=F[E][1];var C=F[E][0];for(var D=0,K=C.length;D<K;D++){var L=A(C[D]);L.data("sortable-item",I);H.push({item:L,instance:I,width:0,height:0,left:0,top:0})}}},refreshPositions:function(B){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var D=this.items.length-1;D>=0;D--){var E=this.items[D];if(E.instance!=this.currentContainer&&this.currentContainer&&E.item[0]!=this.currentItem[0]){continue}var C=this.options.toleranceElement?A(this.options.toleranceElement,E.item):E.item;if(!B){if(this.options.accurateIntersection){E.width=C.outerWidth();E.height=C.outerHeight()}else{E.width=C[0].offsetWidth;E.height=C[0].offsetHeight}}var F=C.offset();E.left=F.left;E.top=F.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var D=this.containers.length-1;D>=0;D--){var F=this.containers[D].element.offset();this.containers[D].containerCache.left=F.left;this.containers[D].containerCache.top=F.top;this.containers[D].containerCache.width=this.containers[D].element.outerWidth();this.containers[D].containerCache.height=this.containers[D].element.outerHeight()}}},_createPlaceholder:function(D){var B=D||this,E=B.options;if(!E.placeholder||E.placeholder.constructor==String){var C=E.placeholder;E.placeholder={element:function(){var F=A(document.createElement(B.currentItem[0].nodeName)).addClass(C||B.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!C){F.style.visibility="hidden";document.body.appendChild(F);F.innerHTML=B.currentItem[0].innerHTML.replace(/name\=\"[^\"\']+\"/g,"").replace(/jQuery[0-9]+\=\"[^\"\']+\"/g,"");document.body.removeChild(F)}return F},update:function(F,G){if(C&&!E.forcePlaceholderSize){return }if(!G.height()){G.height(B.currentItem.innerHeight()-parseInt(B.currentItem.css("paddingTop")||0,10)-parseInt(B.currentItem.css("paddingBottom")||0,10))}if(!G.width()){G.width(B.currentItem.innerWidth()-parseInt(B.currentItem.css("paddingLeft")||0,10)-parseInt(B.currentItem.css("paddingRight")||0,10))}}}}B.placeholder=A(E.placeholder.element.call(B.element,B.currentItem));B.currentItem.after(B.placeholder);E.placeholder.update(B,B.placeholder)},_contactContainers:function(D){for(var C=this.containers.length-1;C>=0;C--){if(this._intersectsWith(this.containers[C].containerCache)){if(!this.containers[C].containerCache.over){if(this.currentContainer!=this.containers[C]){var H=10000;var G=null;var E=this.positionAbs[this.containers[C].floating?"left":"top"];for(var B=this.items.length-1;B>=0;B--){if(!A.ui.contains(this.containers[C].element[0],this.items[B].item[0])){continue}var F=this.items[B][this.containers[C].floating?"left":"top"];if(Math.abs(F-E)<H){H=Math.abs(F-E);G=this.items[B]}}if(!G&&!this.options.dropOnEmpty){continue}this.currentContainer=this.containers[C];G?this.options.sortIndicator.call(this,D,G,null,true):this.options.sortIndicator.call(this,D,null,this.containers[C].element,true);this._propagate("change",D);this.containers[C]._propagate("change",D,this);this.options.placeholder.update(this.currentContainer,this.placeholder)}this.containers[C]._propagate("over",D,this);this.containers[C].containerCache.over=1}}else{if(this.containers[C].containerCache.over){this.containers[C]._propagate("out",D,this);this.containers[C].containerCache.over=0}}}},_createHelper:function(C){var D=this.options;var B=A.isFunction(D.helper)?A(D.helper.apply(this.element[0],[C,this.currentItem])):(D.helper=="clone"?this.currentItem.clone():this.currentItem);if(!B.parents("body").length){A(D.appendTo!="parent"?D.appendTo:this.currentItem[0].parentNode)[0].appendChild(B[0])}if(B[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(B[0].style.width==""||D.forceHelperSize){B.width(this.currentItem.width())}if(B[0].style.height==""||D.forceHelperSize){B.height(this.currentItem.height())}return B},_adjustOffsetFromHelper:function(B){if(B.left!=undefined){this.offset.click.left=B.left+this.margins.left}if(B.right!=undefined){this.offset.click.left=this.helperProportions.width-B.right+this.margins.left}if(B.top!=undefined){this.offset.click.top=B.top+this.margins.top}if(B.bottom!=undefined){this.offset.click.top=this.helperProportions.height-B.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var B=this.offsetParent.offset();if((this.offsetParent[0]==document.body&&A.browser.mozilla)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&A.browser.msie)){B={top:0,left:0}}return{top:B.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:B.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var B=this.currentItem.position();return{top:B.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:B.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var E=this.options;if(E.containment=="parent"){E.containment=this.helper[0].parentNode}if(E.containment=="document"||E.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,A(E.containment=="document"?document:window).width()-this.offset.relative.left-this.offset.parent.left-this.margins.left-(parseInt(this.currentItem.css("marginRight"),10)||0),(A(E.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.offset.relative.top-this.offset.parent.top-this.margins.top-(parseInt(this.currentItem.css("marginBottom"),10)||0)]}if(!(/^(document|window|parent)$/).test(E.containment)){var C=A(E.containment)[0];var D=A(E.containment).offset();var B=(A(C).css("overflow")!="hidden");this.containment=[D.left+(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.offset.relative.left-this.offset.parent.left-this.margins.left,D.top+(parseInt(A(C).css("borderTopWidth"),10)||0)-this.offset.relative.top-this.offset.parent.top-this.margins.top,D.left+(B?Math.max(C.scrollWidth,C.offsetWidth):C.offsetWidth)-(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.offset.relative.left-this.offset.parent.left-this.margins.left,D.top+(B?Math.max(C.scrollHeight,C.offsetHeight):C.offsetHeight)-(parseInt(A(C).css("borderTopWidth"),10)||0)-this.offset.relative.top-this.offset.parent.top-this.margins.top]}},_convertPositionTo:function(D,F){if(!F){F=this.position}var C=D=="absolute"?1:-1;var B=this[(this.cssPosition=="absolute"?"offset":"scroll")+"Parent"],E=(/(html|body)/i).test(B[0].tagName);return{top:(F.top+this.offset.relative.top*C+this.offset.parent.top*C+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(E?0:B.scrollTop()))*C+this.margins.top*C),left:(F.left+this.offset.relative.left*C+this.offset.parent.left*C+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():(E?0:B.scrollLeft()))*C+this.margins.left*C)}},_generatePosition:function(D){var G=this.options,C=this[(this.cssPosition=="absolute"?"offset":"scroll")+"Parent"],H=(/(html|body)/i).test(C[0].tagName);var B={top:(D.pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(H?0:C.scrollTop()))),left:(D.pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():(H?0:C.scrollLeft())))};if(!this.originalPosition){return B}if(this.containment){if(B.left<this.containment[0]){B.left=this.containment[0]}if(B.top<this.containment[1]){B.top=this.containment[1]}if(B.left+this.helperProportions.width>this.containment[2]){B.left=this.containment[2]-this.helperProportions.width}if(B.top+this.helperProportions.height>this.containment[3]){B.top=this.containment[3]-this.helperProportions.height}}if(G.grid){var F=this.originalPosition.top+Math.round((B.top-this.originalPosition.top)/G.grid[1])*G.grid[1];B.top=this.containment?(!(F<this.containment[1]||F>this.containment[3])?F:(!(F<this.containment[1])?F-G.grid[1]:F+G.grid[1])):F;var E=this.originalPosition.left+Math.round((B.left-this.originalPosition.left)/G.grid[0])*G.grid[0];B.left=this.containment?(!(E<this.containment[0]||E>this.containment[2])?E:(!(E<this.containment[0])?E-G.grid[0]:E+G.grid[0])):E}return B},_rearrange:function(G,F,C,E){C?C[0].appendChild(this.placeholder[0]):F.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?F.item[0]:F.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var D=this,B=this.counter;window.setTimeout(function(){if(B==D.counter){D.refreshPositions(!E)}},0)},_clear:function(C,D){this.reverting=false;if(!this._noFinalSort){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var B in this._storedCSS){if(this._storedCSS[B]=="auto"||this._storedCSS[B]=="static"){this._storedCSS[B]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0]){this._propagate("update",C,null,D)}if(!A.ui.contains(this.element[0],this.currentItem[0])){this._propagate("remove",C,null,D);for(var B=this.containers.length-1;B>=0;B--){if(A.ui.contains(this.containers[B].element[0],this.currentItem[0])){this.containers[B]._propagate("update",C,this,D);this.containers[B]._propagate("receive",C,this,D)}}}for(var B=this.containers.length-1;B>=0;B--){this.containers[B]._propagate("deactivate",C,this,D);if(this.containers[B].containerCache.over){this.containers[B]._propagate("out",C,this);this.containers[B].containerCache.over=0}}this.dragging=false;if(this.cancelHelperRemoval){this._propagate("beforeStop",C,null,D);this._propagate("stop",C,null,D);return false}this._propagate("beforeStop",C,null,D);this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.options.helper!="original"){this.helper.remove()}this.helper=null;this._propagate("stop",C,null,D);return true},_propagate:function(F,B,C,D){A.ui.plugin.call(this,F,[B,this._ui(C)]);var E=!D?this.element.triggerHandler(F=="sort"?F:"sort"+F,[B,this._ui(C)],this.options[F]):true;if(E===false){this.cancel()}},plugins:{},_ui:function(C){var B=C||this;return{helper:B.helper,placeholder:B.placeholder||A([]),position:B.position,absolutePosition:B.positionAbs,item:B.currentItem,sender:C?C.element:null}}}));A.extend(A.ui.sortable,{getter:"serialize toArray",version:"1.6",defaults:{accurateIntersection:true,appendTo:"parent",cancel:":input",delay:0,distance:1,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,helper:"original",items:"> *",scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,sortIndicator:A.ui.sortable.prototype._rearrange,tolerance:"default",zIndex:1000}});A.ui.plugin.add("sortable","cursor",{start:function(D,E){var C=A("body"),B=A(this).data("sortable");if(C.css("cursor")){B.options._cursor=C.css("cursor")}C.css("cursor",B.options.cursor)},beforeStop:function(C,D){var B=A(this).data("sortable");if(B.options._cursor){A("body").css("cursor",B.options._cursor)}}});A.ui.plugin.add("sortable","opacity",{start:function(D,E){var C=E.helper,B=A(this).data("sortable");if(C.css("opacity")){B.options._opacity=C.css("opacity")}C.css("opacity",B.options.opacity)},beforeStop:function(C,D){var B=A(this).data("sortable");if(B.options._opacity){A(D.helper).css("opacity",B.options._opacity)}}});A.ui.plugin.add("sortable","scroll",{start:function(C,D){var B=A(this).data("sortable"),E=B.options;if(B.scrollParent[0]!=document&&B.scrollParent[0].tagName!="HTML"){B.overflowOffset=B.scrollParent.offset()}},sort:function(D,E){var C=A(this).data("sortable"),F=C.options,B=false;if(C.scrollParent[0]!=document&&C.scrollParent[0].tagName!="HTML"){if((C.overflowOffset.top+C.scrollParent[0].offsetHeight)-D.pageY<F.scrollSensitivity){C.scrollParent[0].scrollTop=B=C.scrollParent[0].scrollTop+F.scrollSpeed}else{if(D.pageY-C.overflowOffset.top<F.scrollSensitivity){C.scrollParent[0].scrollTop=B=C.scrollParent[0].scrollTop-F.scrollSpeed}}if((C.overflowOffset.left+C.scrollParent[0].offsetWidth)-D.pageX<F.scrollSensitivity){C.scrollParent[0].scrollLeft=B=C.scrollParent[0].scrollLeft+F.scrollSpeed}else{if(D.pageX-C.overflowOffset.left<F.scrollSensitivity){C.scrollParent[0].scrollLeft=B=C.scrollParent[0].scrollLeft-F.scrollSpeed}}}else{if(D.pageY-A(document).scrollTop()<F.scrollSensitivity){B=A(document).scrollTop(A(document).scrollTop()-F.scrollSpeed)}else{if(A(window).height()-(D.pageY-A(document).scrollTop())<F.scrollSensitivity){B=A(document).scrollTop(A(document).scrollTop()+F.scrollSpeed)}}if(D.pageX-A(document).scrollLeft()<F.scrollSensitivity){B=A(document).scrollLeft(A(document).scrollLeft()-F.scrollSpeed)}else{if(A(window).width()-(D.pageX-A(document).scrollLeft())<F.scrollSensitivity){B=A(document).scrollLeft(A(document).scrollLeft()+F.scrollSpeed)}}}if(B!==false&&A.ui.ddmanager&&!F.dropBehaviour){A.ui.ddmanager.prepareOffsets(C,D)}if(B!==false&&C.cssPosition=="absolute"&&C.scrollParent[0]!=document&&A.ui.contains(C.scrollParent[0],C.offsetParent[0])){C.offset.parent=C._getParentOffset()}if(B!==false&&C.cssPosition=="relative"&&!(C.scrollParent[0]!=document&&C.scrollParent[0]!=C.offsetParent[0])){C.offset.relative=C._getRelativeOffset()}}});A.ui.plugin.add("sortable","zIndex",{start:function(D,E){var C=E.helper,B=A(this).data("sortable");if(C.css("zIndex")){B.options._zIndex=C.css("zIndex")}C.css("zIndex",B.options.zIndex)},beforeStop:function(C,D){var B=A(this).data("sortable");if(B.options._zIndex){A(D.helper).css("zIndex",B.options._zIndex=="auto"?"":B.options._zIndex)}}})})(jQuery);
// $Id: context_reaction_block.js,v 1.1.2.23 2010/08/05 20:09:11 yhahn Exp $

Drupal.behaviors.contextReactionBlock = function(context) {
  $('form.context-editor:not(.context-block-processed)')
    .addClass('context-block-processed')
    .each(function() {
      var id = $(this).attr('id');
      Drupal.contextBlockEditor = Drupal.contextBlockEditor || {};
      $(this).bind('init.pageEditor', function(event) {
        Drupal.contextBlockEditor[id] = new DrupalContextBlockEditor($(this));
      });
      $(this).bind('start.pageEditor', function(event, context) {
        // Fallback to first context if param is empty.
        if (!context) {
          context = $(this).data('defaultContext');
        }
        Drupal.contextBlockEditor[id].editStart($(this), context);
      });
      $(this).bind('end.pageEditor', function(event) {
        Drupal.contextBlockEditor[id].editFinish();
      });
    });

  //
  // Admin Form =======================================================
  //
  // ContextBlockForm: Init.
  $('#context-blockform:not(.processed)').each(function() {
    $(this).addClass('processed');
    Drupal.contextBlockForm = new DrupalContextBlockForm($(this));
    Drupal.contextBlockForm.setState();
  });

  // ContextBlockForm: Attach block removal handlers.
  // Lives in behaviors as it may be required for attachment to new DOM elements.
  $('#context-blockform a.remove:not(.processed)').each(function() {
    $(this).addClass('processed');
    $(this).click(function() {
      $(this).parents('tr').eq(0).remove();
      Drupal.contextBlockForm.setState();
      return false;
    });
  });
};

/**
 * Context block form. Default form for editing context block reactions.
 */
DrupalContextBlockForm = function(blockForm) {
  this.state = {};

  this.setState = function() {
    $('table.context-blockform-region', blockForm).each(function() {
      var region = $(this).attr('id').split('context-blockform-region-')[1];
      var blocks = [];
      $('tr', $(this)).each(function() {
        var bid = $(this).attr('id');
        blocks.push(bid);
      });
      Drupal.contextBlockForm.state[region] = blocks;
    });

    // Serialize here and set form element value.
    $('form input.context-blockform-state').val(JSON.stringify(this.state));

    // Hide enabled blocks from selector that are used
    $('table.context-blockform-region tr').each(function() {
      var bid = $(this).attr('id');
      $('div.context-blockform-selector input[value='+bid+']').parents('div.form-item').eq(0).hide();
    });
    // Show blocks in selector that are unused
    $('div.context-blockform-selector input').each(function() {
      var bid = $(this).val();
      if ($('table.context-blockform-region tr#'+bid).size() === 0) {
        $(this).parents('div.form-item').eq(0).show();
      }
    });
  };

  // Tabledrag
  // Add additional handlers to update our blocks.
  $.each(Drupal.settings.tableDrag, function(base) {
    var table = $('#' + base + ':not(.processed)', blockForm);
    if (table && table.is('.context-blockform-region')) {
      table.addClass('processed');
      table.bind('mouseup', function(event) {
        Drupal.contextBlockForm.setState();
        return;
      });
    }
  });

  // Add blocks to a region
  $('td.blocks a', blockForm).each(function() {
    $(this).click(function() {
      var region = $(this).attr('href').split('#')[1];
      var selected = $("div.context-blockform-selector input:checked");
      if (selected.size() > 0) {
        selected.each(function() {
          // create new block markup
          var block = document.createElement('tr');
          var text = $(this).parents('div.form-item').eq(0).hide().children('label').text();
          $(block).attr('id', $(this).attr('value')).addClass('draggable');
          $(block).html("<td>"+ text + "<input class='block-weight' /></td><td><a href='' class='remove'>X</a></td>");

          // add block item to region
          var base = "context-blockform-region-"+ region;
          Drupal.tableDrag[base].makeDraggable(block);
          $('table#'+base).append(block);
          Drupal.attachBehaviors($('table#'+base));

          Drupal.contextBlockForm.setState();
          $(this).removeAttr('checked');
        });
      }
      return false;
    });
  });
};

/**
 * Context block editor. AHAH editor for live block reaction editing.
 */
DrupalContextBlockEditor = function(editor) {
  this.editor = editor;
  this.state = {};
  this.blocks = {};
  this.regions = {};

  // Category selector handler.
  // Also set to "Choose a category" option as browsers can retain
  // form values from previous page load.
  $('select.context-block-browser-categories', editor).change(function() {
    var category = $(this).val();
    var params = {
      containment: 'document',
      revert: true,
      dropOnEmpty: true,
      placeholder: 'draggable-placeholder',
      forcePlaceholderSize: true,
      helper: 'clone',
      appendTo: 'body',
      connectWith: ($.ui.version === '1.6') ? ['.ui-sortable'] : '.ui-sortable'
    };
    $('div.category', editor).hide().sortable('destroy');
    $('div.category-'+category, editor).show().sortable(params);
  });
  $('select.context-block-browser-categories', editor).val(0).change();

  return this;
};

DrupalContextBlockEditor.prototype.initBlocks = function(blocks) {
  var self = this;
  this.blocks = blocks;
  blocks.each(function() {
    $(this).addClass('draggable');
    $(this).prepend($('<a class="context-block-handle"></a>'));
    $(this).prepend($('<a class="context-block-remove"></a>').click(function() {
      $(this).parents('div.block').eq(0).fadeOut('medium', function() {
        $(this).remove();
        self.updateBlocks();
      });
      return false;
    }));
  });
};

DrupalContextBlockEditor.prototype.initRegions = function(regions) {
  this.regions = regions;
};

/**
  * Update UI to match the current block states.
  */
DrupalContextBlockEditor.prototype.updateBlocks = function() {
  var browser = $('div.context-block-browser');

  // For all enabled blocks, mark corresponding addables as having been added.
  $('div.block, div.admin-block').each(function() {
    var bid = $(this).attr('id').split('block-')[1]; // Ugh.
    $('#context-block-addable-'+bid, browser).draggable('disable').addClass('context-block-added').removeClass('context-block-addable');
  });
  // For all hidden addables with no corresponding blocks, mark as addable.
  $('.context-block-item', browser).each(function() {
    var bid = $(this).attr('id').split('context-block-addable-')[1];
    if ($('#block-'+bid).size() === 0) {
      $(this).draggable('enable').removeClass('context-block-added').addClass('context-block-addable');
    }
  });

  // Mark empty regions.
  $(this.regions).each(function() {
    if ($('div.block:has(a.context-block)', this).size() > 0) {
      $(this).removeClass('context-block-region-empty');
    }
    else {
      $(this).addClass('context-block-region-empty');
    }
  });
};

/**
  * Live update a region.
  */
DrupalContextBlockEditor.prototype.updateRegion = function(event, ui, region, op) {
  switch (op) {
    case 'over':
      $(region).removeClass('context-block-region-empty');
      break;
    case 'out':
      if (
        $('div.draggable-placeholder', region).size() === 0 &&
        $('div.block:has(a.context-block)', region).size() == 1 &&
        $('div.block:has(a.context-block)', region).attr('id') == ui.item.attr('id')
      ) {
        $(region).addClass('context-block-region-empty');
      }
      break;
  }
};

/**
  * Remove script elements while dragging & dropping.
  */
DrupalContextBlockEditor.prototype.scriptFix = function(event, ui, editor, context) {
  if ($('script', ui.item)) {
    var placeholder = $(Drupal.settings.contextBlockEditor.scriptPlaceholder);
    var label = $('div.handle label', ui.item).text();
    placeholder.children('strong').html(label);
    $('script', ui.item).parent().empty().append(placeholder);
  }
};

/**
  * Add a block to a region through an AHAH load of the block contents.
  */
DrupalContextBlockEditor.prototype.addBlock = function(event, ui, editor, context) {
  var self = this;
  if (ui.item.is('.context-block-addable')) {
    var bid = ui.item.attr('id').split('context-block-addable-')[1];

    // Construct query params for our AJAX block request.
    var params = Drupal.settings.contextBlockEditor.params;
    params.context_block = bid + ',' + context;

    // Replace item with loading block.
    var blockLoading = $('<div class="context-block-item context-block-loading"><span class="icon"></span></div>');
    ui.item.addClass('context-block-added');
    ui.item.after(blockLoading);
    ui.sender.append(ui.item);

    $.getJSON(Drupal.settings.contextBlockEditor.path, params, function(data) {
      if (data.status) {
        var newBlock = $(data.block);
        if ($('script', newBlock)) {
          $('script', newBlock).remove();
        }
        blockLoading.fadeOut(function() {
          $(this).replaceWith(newBlock);
          self.initBlocks(newBlock);
          self.updateBlocks();
          $.each(data.css, function(k, v){
            var cssfile = Drupal.settings.basePath + v;
            if ($('head link[href $='+cssfile+']').length === 0 ) {
              $('head').append('<link type="text/css" rel="stylesheet" media="all" href="' + cssfile + " />'");
            }
          });
          Drupal.attachBehaviors();
        });
      }
      else {
        blockLoading.fadeOut(function() { $(this).remove(); });
      }
    });
  }
  else if (ui.item.is(':has(a.context-block)')) {
    self.updateBlocks();
  }
};

/**
  * Update form hidden field with JSON representation of current block visibility states.
  */
DrupalContextBlockEditor.prototype.setState = function() {
  var self = this;

  $(this.regions).each(function() {
    var region = $('a.context-block-region', this).attr('id').split('context-block-region-')[1];
    var blocks = [];
    $('a.context-block', $(this)).each(function() {
      if ($(this).attr('class').indexOf('edit-') != -1) {
        var bid = $(this).attr('id').split('context-block-')[1];
        var context = $(this).attr('class').split('edit-')[1].split(' ')[0];
        context = context ? context : 0;
        var block = {'bid': bid, 'context': context};
        blocks.push(block);
      }
    });
    self.state[region] = blocks;
  });

  // Serialize here and set form element value.
  $('input.context-block-editor-state', this.editor).val(JSON.stringify(this.state));
};

/**
  * Disable text selection.
  */
DrupalContextBlockEditor.prototype.disableTextSelect = function() {
  if ($.browser.safari) {
    $('div.block:has(a.context-block):not(:has(input,textarea))').css('WebkitUserSelect','none');
  }
  else if ($.browser.mozilla) {
    $('div.block:has(a.context-block):not(:has(input,textarea))').css('MozUserSelect','none');
  }
  else if ($.browser.msie) {
    $('div.block:has(a.context-block):not(:has(input,textarea))').bind('selectstart.contextBlockEditor', function() { return false; });
  }
  else {
    $(this).bind('mousedown.contextBlockEditor', function() { return false; });
  }
};

/**
  * Enable text selection.
  */
DrupalContextBlockEditor.prototype.enableTextSelect = function() {
  if ($.browser.safari) {
    $('*').css('WebkitUserSelect','');
  }
  else if ($.browser.mozilla) {
    $('*').css('MozUserSelect','');
  }
  else if ($.browser.msie) {
    $('*').unbind('selectstart.contextBlockEditor');
  }
  else {
    $(this).unbind('mousedown.contextBlockEditor');
  }
};

/**
  * Start editing. Attach handlers, begin draggable/sortables.
  */
DrupalContextBlockEditor.prototype.editStart = function(editor, context) {
  var self = this;

  // This is redundant to the start handler found in context_ui.js.
  // However it's necessary that we trigger this class addition before
  // we call .sortable() as the empty regions need to be visible.
  $(document.body).addClass('context-editing');
  this.editor.addClass('context-editing');

  this.disableTextSelect();
  this.initBlocks($('div.block:has(a.context-block.edit-'+context+')'));
  this.initRegions($('a.context-block-region').parent());
  this.updateBlocks();

  // First pass, enable sortables on all regions.
  $(this.regions).each(function() {
    var region = $(this);
    var params = {
      containment: 'document',
      revert: true,
      dropOnEmpty: true,
      placeholder: 'draggable-placeholder',
      forcePlaceholderSize: true,
      items: '> div.block:has(a.context-block.editable)',
      handle: 'a.context-block-handle',
      start: function(event, ui) { self.scriptFix(event, ui, editor, context); },
      stop: function(event, ui) { self.addBlock(event, ui, editor, context); },
      receive: function(event, ui) { self.addBlock(event, ui, editor, context); },
      over: function(event, ui) { self.updateRegion(event, ui, region, 'over'); },
      out: function(event, ui) { self.updateRegion(event, ui, region, 'out'); }
    };
    region.sortable(params);
  });

  // Second pass, hook up all regions via connectWith to each other.
  $(this.regions).each(function() {
    $(this).sortable('option', 'connectWith', ['.ui-sortable']);
  });

  // Terrible, terrible workaround for parentoffset issue in Safari.
  // The proper fix for this issue has been committed to jQuery UI, but was
  // not included in the 1.6 release. Therefore, we do a browser agent hack
  // to ensure that Safari users are covered by the offset fix found here:
  // http://dev.jqueryui.com/changeset/2073.
  if ($.ui.version === '1.6' && $.browser.safari) {
    $.browser.mozilla = true;
  }
};

/**
  * Finish editing. Remove handlers.
  */
DrupalContextBlockEditor.prototype.editFinish = function() {
  this.editor.removeClass('context-editing');
  this.enableTextSelect();

  // Remove UI elements.
  $(this.blocks).each(function() {
    $('a.context-block-handle, a.context-block-remove', this).remove();
    $(this).removeClass('draggable');
  });
  this.regions.sortable('destroy');

  this.setState();

  // Unhack the user agent.
  if ($.ui.version === '1.6' && $.browser.safari) {
    $.browser.mozilla = false;
  }
};
;
// $Id: jquery.bgiframe.min.js,v 1.1.2.1 2010/07/03 03:00:39 sociotech Exp $

/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2007-06-19 20:25:28 -0500 (Tue, 19 Jun 2007) $
 * $Rev: 2111 $
 *
 * Version 2.1
 */
;(function($){$.fn.bgIframe=$.fn.bgiframe=function(s){if($.browser.msie&&parseInt($.browser.version)<=6){s=$.extend({top:'auto',left:'auto',width:'auto',height:'auto',opacity:true,src:'javascript:false;'},s||{});var prop=function(n){return n&&n.constructor==Number?n+'px':n;},html='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+'style="display:block;position:absolute;z-index:-1;'+(s.opacity!==false?'filter:Alpha(Opacity=\'0\');':'')+'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+'"/>';return this.each(function(){if($('> iframe.bgiframe',this).length==0)this.insertBefore(document.createElement(html),this.firstChild);});}return this;};if(!$.browser.version)$.browser.version=navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)[1];})(jQuery);;
// $Id: hoverIntent.js,v 1.1.2.1 2010/07/03 03:00:39 sociotech Exp $

;(function($){
	/* hoverIntent by Brian Cherne */
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// next three lines copied from jQuery.hover, ignore children onMouseOver/onMouseOut
			var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
			while ( p && p != this ) { try { p = p.parentNode; } catch(e) { p = this; } }
			if ( p == this ) { return false; }

			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// else e.type == "onmouseover"
			if (e.type == "mouseover") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "onmouseout"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.mouseover(handleHover).mouseout(handleHover);
	};
	
})(jQuery);;
// $Id: supposition.js,v 1.1 2009/08/19 04:28:07 sociotech Exp $

/*
 * Supposition v0.2 - an optional enhancer for Superfish jQuery menu widget
 *
 * Copyright (c) 2008 Joel Birch - based mostly on work by Jesse Klaasse and credit goes largely to him.
 * Special thanks to Karl Swedberg for valuable input.
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 */

(function($){

	$.fn.supposition = function(){
		var $w = $(window), /*do this once instead of every onBeforeShow call*/
			_offset = function(dir) {
				return window[dir == 'y' ? 'pageYOffset' : 'pageXOffset']
				|| document.documentElement && document.documentElement[dir=='y' ? 'scrollTop' : 'scrollLeft']
			    || document.body[dir=='y' ? 'scrollTop' : 'scrollLeft'];
			},
			onInit = function(){
				/* I haven't touched this bit - needs work as there are still z-index issues */
				$topNav = $('li',this);
				var cZ=parseInt($topNav.css('z-index')) + $topNav.length;
				$topNav.each(function() {
					$(this).css({zIndex:--cZ});
				});
			},
			onHide = function(){
				this.css({marginTop:'',marginLeft:''});
			},
			onBeforeShow = function(){
				this.each(function(){
					var $u = $(this);
					$u.css('display','block');
					var menuWidth = $u.width(),
						parentWidth = $u.parents('ul').width(),
						totalRight = $w.width() + _offset('x'),
						menuRight = $u.offset().left + menuWidth;
					if (menuRight > totalRight) {
						$u.css('margin-left', ($u.parents('ul').length == 1 ? totalRight - menuRight : -(menuWidth + parentWidth)) + 'px');
					}

					var windowHeight = $w.height(),
						offsetTop = $u.offset().top,
						menuHeight = $u.height(),
						baseline = windowHeight + _offset('y');
					var expandUp = (offsetTop + menuHeight > baseline);
					if (expandUp) {
						$u.css('margin-top',baseline - (menuHeight + offsetTop));
					}
					$u.css('display','none');
				});
			};
		
		return this.each(function() {
			var o = $.fn.superfish.o[this.serial]; /* get this menu's options */
			
			/* if callbacks already set, store them */
			var _onInit = o.onInit,
				_onBeforeShow = o.onBeforeShow,
				_onHide = o.onHide;
				
			$.extend($.fn.superfish.o[this.serial],{
				onInit		: function() {
					onInit.call(this); /* fire our Supposition callback */
					_onInit.call(this); /* fire stored callbacks */
				},
				onBeforeShow: function() {
					onBeforeShow.call(this); /* fire our Supposition callback */
					_onBeforeShow.call(this); /* fire stored callbacks */
				},
				onHide		: function() {
					onHide.call(this); /* fire our Supposition callback */
					_onHide.call(this); /* fire stored callbacks */
				}
			});
		});
	};

})(jQuery);;
// $Id: supersubs.js,v 1.1 2009/08/19 04:28:07 sociotech Exp $

/*
 * Supersubs v0.2b - jQuery plugin
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 *
 * This plugin automatically adjusts submenu widths of suckerfish-style menus to that of
 * their longest list item children. If you use this, please expect bugs and report them
 * to the jQuery Google Group with the word 'Superfish' in the subject line.
 *
 */

;(function($){ // $ will refer to jQuery within this closure

	$.fn.supersubs = function(options){
		var opts = $.extend({}, $.fn.supersubs.defaults, options);
		// return original object to support chaining
		return this.each(function() {
			// cache selections
			var $$ = $(this);
			// support metadata
			var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
			// get the font size of menu.
			// .css('fontSize') returns various results cross-browser, so measure an em dash instead
			var fontsize = $('<li id="menu-fontsize">&#8212;</li>').css({
				'padding' : 0,
				'position' : 'absolute',
				'top' : '-999em',
				'width' : 'auto'
			}).appendTo($$).width(); //clientWidth is faster, but was incorrect here
			// remove em dash
			$('#menu-fontsize').remove();
			// cache all ul elements
			$ULs = $$.find('ul');
			// loop through each ul in menu
			$ULs.each(function(i) {	
				// cache this ul
				var $ul = $ULs.eq(i);
				// get all (li) children of this ul
				var $LIs = $ul.children();
				// get all anchor grand-children
				var $As = $LIs.children('a');
				// force content to one line and save current float property
				var liFloat = $LIs.css('white-space','nowrap').css('float');
				// remove width restrictions and floats so elements remain vertically stacked
				var emWidth = $ul.add($LIs).add($As).css({
					'float' : 'none',
					'width'	: 'auto'
				})
				// this ul will now be shrink-wrapped to longest li due to position:absolute
				// so save its width as ems. Clientwidth is 2 times faster than .width() - thanks Dan Switzer
				.end().end()[0].clientWidth / fontsize;
				// add more width to ensure lines don't turn over at certain sizes in various browsers
				emWidth += o.extraWidth;
				// restrict to at least minWidth and at most maxWidth
				if (emWidth > o.maxWidth)		{ emWidth = o.maxWidth; }
				else if (emWidth < o.minWidth)	{ emWidth = o.minWidth; }
				emWidth += 'em';
				// set ul to width in ems
				$ul.css('width',emWidth);
				// restore li floats to avoid IE bugs
				// set li width to full width of this ul
				// revert white-space to normal
				$LIs.css({
					'float' : liFloat,
					'width' : '100%',
					'white-space' : 'normal'
				})
				// update offset position of descendant ul to reflect new width of parent
				.each(function(){
					var $childUl = $('>ul',this);
					var offsetDirection = $childUl.css('left')!==undefined ? 'left' : 'right';
					$childUl.css(offsetDirection,emWidth);
				});
			});
			
		});
	};
	// expose defaults
	$.fn.supersubs.defaults = {
		minWidth		: 9,		// requires em unit.
		maxWidth		: 25,		// requires em unit.
		extraWidth		: 0			// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
	};
	
})(jQuery); // plugin code ends
;
// $Id: superfish.js,v 1.1 2009/08/19 04:28:07 sociotech Exp $

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
;
// $Id: script.js,v 1.1.2.6 2010/07/03 03:00:39 sociotech Exp $

Drupal.behaviors.fusionEqualheights = function (context) {
  if (jQuery().equalHeights) {
    $("#header-top-wrapper div.equal-heights div.content").equalHeights();
    $("#header-group-wrapper div.equal-heights div.content").equalHeights();
    $("#preface-top-wrapper div.equal-heights div.content").equalHeights();
    $("#preface-bottom div.equal-heights div.content").equalHeights();
    $("#sidebar-first div.equal-heights div.content").equalHeights();
    $("#content-top div.equal-heights div.content").equalHeights();
    $("#content-region div.equal-heights div.content").equalHeights();
    $("#content-bottom div.equal-heights div.content").equalHeights();
    $("#node-top div.equal-heights div.content").equalHeights();
    $("#node-bottom div.equal-heights div.content").equalHeights();
    $("#sidebar-last div.equal-heights div.content").equalHeights();
    $("#postscript-top div.equal-heights div.content").equalHeights();
    $("#postscript-bottom-wrapper div.equal-heights div.content").equalHeights();
    $("#footer-wrapper div.equal-heights div.content").equalHeights();
  }
};

Drupal.behaviors.fusionIE6fixes = function (context) {
  // IE6 & less-specific functions
  // Add hover class to primary menu li elements on hover
  if ($.browser.msie && ($.browser.version < 7)) {
    $('form input.form-submit').hover(function() {
      $(this).addClass('hover');
      }, function() {
        $(this).removeClass('hover');
    });
    $('#primary-menu ul.sf-menu li.expanded').hover(function() {
      $(this).addClass('hover');
      }, function() {
        $(this).removeClass('hover');
    });
    $('.sf-menu li').hover(function() {
      $(this).addClass('hover');
      }, function() {
        $(this).removeClass('hover');
    });
    $('#search input#search_header').hover(function() {
      $(this).addClass('hover');
      }, function() {
        $(this).removeClass('hover');
    });
  };
};

Drupal.behaviors.fusionOverlabel = function (context) {
  if (jQuery().overlabel) {
    $("div.fusion-horiz-login label").overlabel();
  }
};

Drupal.behaviors.fusionSuperfish = function (context) {
  $("#primary-menu ul.sf-menu").superfish({
    hoverClass:  'sfHover',
    delay:       250,
    animation:   {opacity:'show',height:'show'},
    speed:       'fast',
    autoArrows:  false,
    dropShadows: false,
    disableHI:   true
  }).supposition();
};

Drupal.behaviors.fusionSuperfishBlocks = function (context) {
  $("div.block ul.sf-menu").superfish({
    hoverClass:  'sfHover',
    delay:       250,
    animation:   {opacity:'show',height:'show'},
    speed:       'fast',
    autoArrows:  false,
    dropShadows: false,
    disableHI:   true
  }).supposition();
};

Drupal.behaviors.fusionGridMask = function (context) {
  if ($('body.grid-mask-enabled').size() > 0) {
    var grid_width_pos = parseInt($('body').attr('class').indexOf('grid-width-')) + 11;
    var grid_width = $('body').attr('class').substring(grid_width_pos, grid_width_pos + 2);
    var grid = '<div id="grid-mask-overlay" class="full-width"><div class="row">';
    for (i = 1; i <= grid_width; i++) {
      grid += '<div class="block grid' + grid_width + '-1"><div class="inner"></div></div>';
    }
    grid += '</div></div>';
    $('body.grid-mask-enabled').prepend(grid);
    $('#grid-mask-overlay .row').addClass('grid' + grid_width + '-' + grid_width);
    $('#grid-mask-overlay .block .inner').height($('body').height());
  }
};

Drupal.behaviors.fusionGridMaskToggle = function (context) {
  if ($('body.grid-mask-enabled').size() > 0) {
    $('body.grid-mask-enabled').prepend('<div id="grid-mask-toggle">grid</div>');
    $('div#grid-mask-toggle')
      .toggle( function () {
        $(this).toggleClass('grid-on');
        $('body').toggleClass('grid-mask');
      },
      function() {
        $(this).toggleClass('grid-on');
        $('body').toggleClass('grid-mask');
      });
  }
};

Drupal.behaviors.fusionPanelsShowEdit = function (context) {
  // Sets parent row and block elements to have "overflow: visible" if editing Panel page
  if ($("#panels-edit-display-form").size() > 0 || $("#page-manager-edit").size() > 0) {
    $("#panels-edit-display-form").parents('.row, .block').css("overflow", "visible");
    $("#page-manager-edit").parents('.row, .block').css("overflow", "visible");
  }
};

Drupal.behaviors.fusionScreenshotpreview = function (context) {
  // Displays Skinr previews
  if ($('span.preview-icon').size() > 0) {
    // configure distance of preview from the cursor
    var xOffset = 20;
    var yOffset = 0;
  
    $('span.preview-icon').hover(function(e){
      var img_class = this.id;
      var caption = $(this).parent().text();
      // add preview markup
      $('body').append('<div id="screenshot">' +
                       '<div class="screenshot-preview ' + img_class + '" alt="preview"></div>' + 
                       '<div class="screenshot-caption">' + caption + '</div>' +
                       '</div>');
      $("#screenshot").hide();  // hide preview until dimensions are set
      $("#screenshot").css("left", (e.pageX + xOffset) + "px").css("top", (e.pageY + yOffset) + "px");  // set initial preview position
      // load image in order to set preview dimensions
      var img = new Image();
      img.onload = function() {
        var caption_height = parseFloat($("#screenshot .screenshot-caption").css("height"));
        $("#screenshot").css("height", img.height + caption_height);
        $("#screenshot").css("width", img.width);
        $("#screenshot ." + img_class).css("height", img.height);
        $("#screenshot ." + img_class).css("width", img.width);
        $("#screenshot .screenshot-caption").css("width", img.width - 10);
        $("#screenshot").fadeIn("fast");  // now show preview
      }
      img.src = $("." + img_class).css("background-image").replace(/^url|[\(\)\"]/g, '');
    },
    function(){
      $("#screenshot").remove();
    });
    // adjust preview position with cursor movement
    $("span.preview-icon").mousemove(function(e){
      $("#screenshot").css("left", (e.pageX + xOffset) + "px").css("top", (e.pageY + yOffset) + "px");
    });
  }
};
;
