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
// $Id: user.js,v 1.6 2007/09/12 18:29:32 goba Exp $

/**
 * Attach handlers to evaluate the strength of any password fields and to check
 * that its confirmation is correct.
 */
Drupal.behaviors.password = function(context) {
  var translate = Drupal.settings.password;
  $("input.password-field:not(.password-processed)", context).each(function() {
    var passwordInput = $(this).addClass('password-processed');
    var parent = $(this).parent();
    // Wait this number of milliseconds before checking password.
    var monitorDelay = 700;

    // Add the password strength layers.
    $(this).after('<span class="password-strength"><span class="password-title">'+ translate.strengthTitle +'</span> <span class="password-result"></span></span>').parent();
    var passwordStrength = $("span.password-strength", parent);
    var passwordResult = $("span.password-result", passwordStrength);
    parent.addClass("password-parent");

    // Add the password confirmation layer.
    var outerItem  = $(this).parent().parent();
    $("input.password-confirm", outerItem).after('<span class="password-confirm">'+ translate["confirmTitle"] +' <span></span></span>').parent().addClass("confirm-parent");
    var confirmInput = $("input.password-confirm", outerItem);
    var confirmResult = $("span.password-confirm", outerItem);
    var confirmChild = $("span", confirmResult);

    // Add the description box at the end.
    $(confirmInput).parent().after('<div class="password-description"></div>');
    var passwordDescription = $("div.password-description", $(this).parent().parent()).hide();

    // Check the password fields.
    var passwordCheck = function () {
      // Remove timers for a delayed check if they exist.
      if (this.timer) {
        clearTimeout(this.timer);
      }

      // Verify that there is a password to check.
      if (!passwordInput.val()) {
        passwordStrength.css({ visibility: "hidden" });
        passwordDescription.hide();
        return;
      }

      // Evaluate password strength.

      var result = Drupal.evaluatePasswordStrength(passwordInput.val());
      passwordResult.html(result.strength == "" ? "" : translate[result.strength +"Strength"]);

      // Map the password strength to the relevant drupal CSS class.
      var classMap = { low: "error", medium: "warning", high: "ok" };
      var newClass = classMap[result.strength] || "";

      // Remove the previous styling if any exists; add the new class.
      if (this.passwordClass) {
        passwordResult.removeClass(this.passwordClass);
        passwordDescription.removeClass(this.passwordClass);
      }
      passwordDescription.html(result.message);
      passwordResult.addClass(newClass);
      if (result.strength == "high") {
        passwordDescription.hide();
      }
      else {
        passwordDescription.addClass(newClass);
      }
      this.passwordClass = newClass;

      // Check that password and confirmation match.

      // Hide the result layer if confirmation is empty, otherwise show the layer.
      confirmResult.css({ visibility: (confirmInput.val() == "" ? "hidden" : "visible") });

      var success = passwordInput.val() == confirmInput.val();

      // Remove the previous styling if any exists.
      if (this.confirmClass) {
        confirmChild.removeClass(this.confirmClass);
      }

      // Fill in the correct message and set the class accordingly.
      var confirmClass = success ? "ok" : "error";
      confirmChild.html(translate["confirm"+ (success ? "Success" : "Failure")]).addClass(confirmClass);
      this.confirmClass = confirmClass;

      // Show the indicator and tips.
      passwordStrength.css({ visibility: "visible" });
      passwordDescription.show();
    };

    // Do a delayed check on the password fields.
    var passwordDelayedCheck = function() {
      // Postpone the check since the user is most likely still typing.
      if (this.timer) {
        clearTimeout(this.timer);
      }

      // When the user clears the field, hide the tips immediately.
      if (!passwordInput.val()) {
        passwordStrength.css({ visibility: "hidden" });
        passwordDescription.hide();
        return;
      }

      // Schedule the actual check.
      this.timer = setTimeout(passwordCheck, monitorDelay);
    };
    // Monitor keyup and blur events.
    // Blur must be used because a mouse paste does not trigger keyup.
    passwordInput.keyup(passwordDelayedCheck).blur(passwordCheck);
    confirmInput.keyup(passwordDelayedCheck).blur(passwordCheck);
  });
};

/**
 * Evaluate the strength of a user's password.
 *
 * Returns the estimated strength and the relevant output message.
 */
Drupal.evaluatePasswordStrength = function(value) {
  var strength = "", msg = "", translate = Drupal.settings.password;

  var hasLetters = value.match(/[a-zA-Z]+/);
  var hasNumbers = value.match(/[0-9]+/);
  var hasPunctuation = value.match(/[^a-zA-Z0-9]+/);
  var hasCasing = value.match(/[a-z]+.*[A-Z]+|[A-Z]+.*[a-z]+/);

  // Check if the password is blank.
  if (!value.length) {
    strength = "";
    msg = "";
  }
  // Check if length is less than 6 characters.
  else if (value.length < 6) {
    strength = "low";
    msg = translate.tooShort;
  }
  // Check if password is the same as the username (convert both to lowercase).
  else if (value.toLowerCase() == translate.username.toLowerCase()) {
    strength  = "low";
    msg = translate.sameAsUsername;
  }
  // Check if it contains letters, numbers, punctuation, and upper/lower case.
  else if (hasLetters && hasNumbers && hasPunctuation && hasCasing) {
    strength = "high";
  }
  // Password is not secure enough so construct the medium-strength message.
  else {
    // Extremely bad passwords still count as low.
    var count = (hasLetters ? 1 : 0) + (hasNumbers ? 1 : 0) + (hasPunctuation ? 1 : 0) + (hasCasing ? 1 : 0);
    strength = count > 1 ? "medium" : "low";

    msg = [];
    if (!hasLetters || !hasCasing) {
      msg.push(translate.addLetters);
    }
    if (!hasNumbers) {
      msg.push(translate.addNumbers);
    }
    if (!hasPunctuation) {
      msg.push(translate.addPunctuation);
    }
    msg = translate.needsMoreVariation +"<ul><li>"+ msg.join("</li><li>") +"</li></ul>";
  }

  return { strength: strength, message: msg };
};

/**
 * Set the client's system timezone as default values of form fields.
 */
Drupal.setDefaultTimezone = function() {
  var offset = new Date().getTimezoneOffset() * -60;
  $("#edit-date-default-timezone, #edit-user-register-timezone").val(offset);
};

/**
 * On the admin/user/settings page, conditionally show all of the
 * picture-related form elements depending on the current value of the
 * "Picture support" radio buttons.
 */
Drupal.behaviors.userSettings = function (context) {
  $('div.user-admin-picture-radios input[type=radio]:not(.userSettings-processed)', context).addClass('userSettings-processed').click(function () {
    $('div.user-admin-picture-settings', context)[['hide', 'show'][this.value]]();
  });
};

;
// $Id: date_timezone.js,v 1.1.4.2.2.1 2008/06/20 12:25:30 karens Exp $
/**
 * Set the client's system time zone as default values of form fields.
 */
Drupal.setDefaultTimezone = function() {
  var dateString = Date();
  // In some client environments, date strings include a time zone 
  // abbreviation which can be interpreted by PHP.
  var matches = Date().match(/\(([A-Z]{3,5})\)/);
  var abbreviation = matches ? matches[1] : 0;

  // For all other client environments, the abbreviation is set to "0" 
  // and the current offset from UTC and daylight saving time status are 
  // used to guess the time zone.
  var dateNow = new Date();
  var offsetNow = dateNow.getTimezoneOffset() * -60;

  // Use January 1 and July 1 as test dates for determining daylight 
  // saving time status by comparing their offsets.
  var dateJan = new Date(dateNow.getFullYear(), 0, 1, 12, 0, 0, 0);
  var dateJul = new Date(dateNow.getFullYear(), 6, 1, 12, 0, 0, 0);
  var offsetJan = dateJan.getTimezoneOffset() * -60;
  var offsetJul = dateJul.getTimezoneOffset() * -60;

  // If the offset from UTC is identical on January 1 and July 1, 
  // assume daylight saving time is not used in this time zone.
  if (offsetJan == offsetJul) {
    var isDaylightSavingTime = '';
  }
  // If the maximum annual offset is equivalent to the current offset, 
  // assume daylight saving time is in effect.
  else if (Math.max(offsetJan, offsetJul) == offsetNow) {
    var isDaylightSavingTime = 1;
  }
  // Otherwise, assume daylight saving time is not in effect.
  else {
    var isDaylightSavingTime = 0;
  }

  // Submit request to the user/timezone callback and set the form field 
  // to the response time zone.
  var path = 'user/timezone/' + abbreviation + '/' + offsetNow + '/' + isDaylightSavingTime;
  $.getJSON(Drupal.settings.basePath, { q: path, date: dateString }, function (data) {
    if (data) {
      $("#edit-date-default-timezone, #edit-user-register-timezone, #edit-timezone-name").val(data);
    }
  });
};;
// $Id: password_policy.js,v 1.2 2008/02/10 16:35:40 miglius Exp $

/**
 * Attach handlers to evaluate the strength of any password fields and to check
 * that its confirmation is correct.
 */
Drupal.behaviors.password = function(context) {
  var translate = Drupal.settings.password_policy;
  $("input.password-field:not(.password-processed)", context).each(function() {
    var passwordInput = $(this).addClass('password-processed');
    var parent = $(this).parent();
    // Wait this number of milliseconds before checking password.
    var monitorDelay = 700;

    // Add the password strength layers.
    $(this).after('<span class="password-strength"><span class="password-title">'+ translate.strengthTitle +'</span> <span class="password-result"></span></span>').parent();
    var passwordStrength = $("span.password-strength", parent);
    var passwordResult = $("span.password-result", passwordStrength);
    parent.addClass("password-parent");

    // Add the password confirmation layer.
    var outerItem  = $(this).parent().parent();
    $("input.password-confirm", outerItem).after('<span class="password-confirm">'+ translate["confirmTitle"] +' <span></span></span>').parent().addClass("confirm-parent");
    var confirmInput = $("input.password-confirm", outerItem);
    var confirmResult = $("span.password-confirm", outerItem);
    var confirmChild = $("span", confirmResult);

    // Add the description box at the end.
    $(confirmInput).parent().after('<div class="password-description"></div>');
    var passwordDescription = $("div.password-description", $(this).parent().parent()).hide();

    // Check the password fields.
    var passwordCheck = function () {
      // Remove timers for a delayed check if they exist.
      if (this.timer) {
        clearTimeout(this.timer);
      }

      // Verify that there is a password to check.
      if (!passwordInput.val()) {
        passwordStrength.css({ visibility: "hidden" });
        passwordDescription.hide();
        return;
      }

      // Evaluate password strength.

      var result = Drupal.evaluatePasswordStrength(passwordInput.val());
      passwordResult.html(result.strength == "" ? "" : translate[result.strength +"Strength"]);

      // Map the password strength to the relevant drupal CSS class.
      var classMap = { low: "error", medium: "warning", high: "ok" };
      var newClass = classMap[result.strength] || "";

      // Remove the previous styling if any exists; add the new class.
      if (this.passwordClass) {
        passwordResult.removeClass(this.passwordClass);
        passwordDescription.removeClass(this.passwordClass);
      }
      passwordDescription.html(result.message);
      passwordResult.addClass(newClass);
      if (result.strength == "high") {
        passwordDescription.hide();
      }
      else {
        passwordDescription.addClass(newClass);
      }
      this.passwordClass = newClass;

      // Check that password and confirmation match.

      // Hide the result layer if confirmation is empty, otherwise show the layer.
      confirmResult.css({ visibility: (confirmInput.val() == "" ? "hidden" : "visible") });

      var success = passwordInput.val() == confirmInput.val();

      // Remove the previous styling if any exists.
      if (this.confirmClass) {
        confirmChild.removeClass(this.confirmClass);
      }

      // Fill in the correct message and set the class accordingly.
      var confirmClass = success ? "ok" : "error";
      confirmChild.html(translate["confirm"+ (success ? "Success" : "Failure")]).addClass(confirmClass);
      this.confirmClass = confirmClass;

      // Show the indicator and tips.
      passwordStrength.css({ visibility: "visible" });
      passwordDescription.show();
    };

    // Do a delayed check on the password fields.
    var passwordDelayedCheck = function() {
      // Postpone the check since the user is most likely still typing.
      if (this.timer) {
        clearTimeout(this.timer);
      }

      // When the user clears the field, hide the tips immediately.
      if (!passwordInput.val()) {
        passwordStrength.css({ visibility: "hidden" });
        passwordDescription.hide();
        return;
      }

      // Schedule the actual check.
      this.timer = setTimeout(passwordCheck, monitorDelay);
    };
    // Monitor keyup and blur events.
    // Blur must be used because a mouse paste does not trigger keyup.
    passwordInput.keyup(passwordDelayedCheck).blur(passwordCheck);
    confirmInput.keyup(passwordDelayedCheck).blur(passwordCheck);
  });
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
/* $Id: icon.js,v 1.6 2009/02/11 20:14:39 bdragon Exp $ */

/**
 * @file
 * GIcon manager for GMap.
 * Required for markers to operate properly.
 */

/*global $, Drupal, GIcon, GPoint, GSize, G_DEFAULT_ICON */

/**
 * Get the GIcon corresponding to a setname / sequence.
 * There is only one GIcon for each slot in the sequence.
 * The marker set wraps around when reaching the end of the sequence.
 * @@@ TODO: Move this directly into the preparemarker event binding.
 */
Drupal.gmap.getIcon = function (setname, sequence) {
  var othimg = ['printImage', 'mozPrintImage', 'printShadow', 'transparent'];
  // If no setname, return google's default icon.
  if (!setname) {
    return G_DEFAULT_ICON;
  }
  if (!this.gicons) {
    this.gicons = {};
  }

  // If no sequence, synthesise one.
  if (!sequence) {
    // @TODO make this per-map.
    if (!this.sequences) {
      this.sequences = {};
    }
    if (!this.sequences[setname]) {
      this.sequences[setname] = -1;
    }
    this.sequences[setname]++;
    sequence = this.sequences[setname];
  }

  if (!this.gicons[setname]) {
    if (!Drupal.gmap.icons[setname]) {
      alert('Request for invalid marker set ' + setname + '!');
    }
    this.gicons[setname] = [];
    var q = Drupal.gmap.icons[setname];
    var p, t;
    for (var i = 0; i < q.sequence.length; i++) {
      t = new GIcon();
      p = Drupal.gmap.iconpath + q.path;
      t.image = p + q.sequence[i].f;
      if (q.shadow.f !== '') {
        t.shadow = p + q.shadow.f;
        t.shadowSize = new GSize(q.shadow.w, q.shadow.h);
      }
      t.iconSize = new GSize(q.sequence[i].w, q.sequence[i].h);
      t.iconAnchor = new GPoint(q.anchorX, q.anchorY);
      t.infoWindowAnchor = new GPoint(q.infoX, q.infoY);
      for (var j = 0; j < othimg.length; j++) {
        if (q[othimg[j]] !== '') {
          t[othimg[j]] = p + q[othimg[j]];
        }
      }
      // @@@ imageMap?
      this.gicons[setname][i] = t;
    }
    delete Drupal.gmap.icons[setname];
  }
  // TODO: Random, other cycle methods.
  return this.gicons[setname][sequence % this.gicons[setname].length];
};

/**
 * JSON callback to set up the icon defs.
 * When doing the JSON call, the data comes back in a packed format.
 * We need to expand it and file it away in a more useful format.
 */
Drupal.gmap.iconSetup = function () {
  Drupal.gmap.icons = {};
  var m = Drupal.gmap.icondata;
  var filef, filew, fileh, files;
  for (var path in m) {
    if (m.hasOwnProperty(path)) {
      // Reconstitute files array
      filef = m[path].f;
      filew = Drupal.gmap.expandArray(m[path].w, filef.length);
      fileh = Drupal.gmap.expandArray(m[path].h, filef.length);
      files = [];
      for (var i = 0; i < filef.length; i++) {
        files[i] = {f : filef[i], w : filew[i], h : fileh[i]};
      }

      for (var ini in m[path].i) {
        if (m[path].i.hasOwnProperty(ini)) {
          $.extend(Drupal.gmap.icons, Drupal.gmap.expandIconDef(m[path].i[ini], path, files));
        }
      }
    }
  }
};

/**
 * Expand a compressed array.
 * This will pad arr up to len using the last value of the old array.
 */
Drupal.gmap.expandArray = function (arr, len) {
  var d = arr[0];
  for (var i = 0; i < len; i++) {
    if (!arr[i]) {
      arr[i] = d;
    }
    else {
      d = arr[i];
    }
  }
  return arr;
};

/**
 * Expand icon definition.
 * This helper function is the reverse of the packer function found in
 * gmap_markerinfo.inc.
 */
Drupal.gmap.expandIconDef = function (c, path, files) {
  var decomp = ['key', 'name', 'sequence', 'anchorX', 'anchorY', 'infoX',
    'infoY', 'shadow', 'printImage', 'mozPrintImage', 'printShadow',
    'transparent'];
  var fallback = ['', '', [], 0, 0, 0, 0, {f: '', h: 0, w: 0}, '', '', '', ''];
  var imagerep = ['shadow', 'printImage', 'mozPrintImage', 'printShadow',
    'transparent'];
  var defaults = {};
  var sets = [];
  var i, j;
  // Part 1: Defaults / Markersets
  // Expand arrays and fill in missing ones with fallbacks
  for (i = 0; i < decomp.length; i++) {
    if (!c[0][i]) {
      c[0][i] = [ fallback[i] ];
    }
    c[0][i] = Drupal.gmap.expandArray(c[0][i], c[0][0].length);
  }
  for (i = 0; i < c[0][0].length; i++) {
    for (j = 0; j < decomp.length; j++) {
      if (i === 0) {
        defaults[decomp[j]] = c[0][j][i];
      }
      else {
        if (!sets[i - 1]) {
          sets[i - 1] = {};
        }
        sets[i - 1][decomp[j]] = c[0][j][i];
      }
    }
  }
  for (i = 0; i < sets.length; i++) {
    for (j = 0; j < decomp.length; j++) {
      if (sets[i][decomp[j]] === fallback[j]) {
        sets[i][decomp[j]] = defaults[decomp[j]];
      }
    }
  }
  var icons = {};
  for (i = 0; i < sets.length; i++) {
    var key = sets[i].key;
    icons[key] = sets[i];
    icons[key].path = path;
    delete icons[key].key;
    delete sets[i];
    for (j = 0; j < icons[key].sequence.length; j++) {
      icons[key].sequence[j] = files[icons[key].sequence[j]];
    }
    for (j = 0; j < imagerep.length; j++) {
      if (typeof(icons[key][imagerep[j]]) === 'number') {
        icons[key][imagerep[j]] = files[icons[key][imagerep[j]]];
      }
    }
  }
  return icons;
};

/**
 * We attach ourselves if we find a map somewhere needing markers.
 * Note: Since we broadcast our ready event to all maps, it doesn't
 * matter which one we attached to!
 */
Drupal.gmap.addHandler('gmap', function (elem) {
  var obj = this;

  obj.bind('init', function () {
    // Only expand once.
    if (!Drupal.gmap.icons) {
      Drupal.gmap.iconSetup();
    }
  });

  obj.bind('ready', function () {
    // Compatibility event.
    if (Drupal.gmap.icondata) {
      obj.deferChange('iconsready', -1);
    }
  });

  if (!obj.vars.behavior.customicons) {
    // Provide icons to markers.
    obj.bind('preparemarker', function (marker) {
      marker.opts.icon = Drupal.gmap.getIcon(marker.markername, marker.offset);
    });
  }
});
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
/* $Id: markerloader_static.js,v 1.3 2009/02/11 19:30:22 bdragon Exp $ */

/**
 * @file
 * GMap Marker Loader
 * Static markers.
 * This is a simple marker loader to read markers from the map settings array.
 * Commonly used with macros.
 */

/*global Drupal */

// Add a gmap handler
Drupal.gmap.addHandler('gmap', function (elem) {
  var obj = this;
  var marker, i;
  if (obj.vars.markers) {
    // Inject markers as soon as the icon loader is ready.
    obj.bind('iconsready', function () {
      for (i = 0; i < obj.vars.markers.length; i++) {
        marker = obj.vars.markers[i];
        if (!marker.opts) {
          marker.opts = {};
        }
        // Pass around the object, bindings can change it if necessary.
        obj.change('preparemarker', -1, marker);
        // And add it.
        obj.change('addmarker', -1, marker);
      }
      obj.change('markersready', -1);
    });
  }
});
;
/*
 * jQuery UI 1.6
 *
 * Copyright (c) 2008 AUTHORS.txt (http://ui.jquery.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
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
 */
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
 */
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
 */
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