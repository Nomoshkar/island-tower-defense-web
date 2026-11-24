var $_=Object.defineProperty;var K_=(n,e)=>{for(var t in e)$_(n,t,{get:e[t],enumerable:!0})};var Z_=0,Ig=1,J_=2;var Ty=1,Fp=2,xs=3,$n=0,Pn=1,tt=2;var es=0,zo=1,$e=2,Lg=3,Dg=4,j_=5,Dr=100,Q_=101,eS=102,Ng=103,Hg=104,tS=200,nS=201,iS=202,sS=203,$f=204,Kf=205,rS=206,oS=207,aS=208,cS=209,lS=210,uS=211,hS=212,dS=213,fS=214,pS=0,mS=1,gS=2,Iu=3,xS=4,yS=5,vS=6,MS=7,wy=0,ES=1,_S=2,Xs=0,zp=1,kp=2,Gp=3,Uc=4,SS=5,Vp=6,Ug="attached",TS="detached",by=300,Vo=301,Wo=302,Zf=303,Jf=304,dh=306,Oi=1e3,oi=1001,xc=1002,an=1003,Lu=1004;var uc=1005;var zn=1006,Wp=1007;var $s=1008;var Ys=1009,wS=1010,bS=1011,Xp=1012,Ay=1013,Vs=1014,ys=1015,Bi=1016,Ry=1017,Cy=1018,Ur=1020,AS=1021,gi=1023,RS=1024,CS=1025,Or=1026,Xo=1027,PS=1028,Py=1029,IS=1030,Iy=1031,Ly=1033,hf=33776,df=33777,ff=33778,pf=33779,Og=35840,Bg=35841,Fg=35842,zg=35843,Dy=36196,kg=37492,Gg=37496,Vg=37808,Wg=37809,Xg=37810,Yg=37811,qg=37812,$g=37813,Kg=37814,Zg=37815,Jg=37816,jg=37817,Qg=37818,ex=37819,tx=37820,nx=37821,mf=36492,ix=36494,sx=36495,LS=36283,rx=36284,ox=36285,ax=36286;var Yo=2300,Fr=2301,gf=2302,cx=2400,lx=2401,ux=2402,DS=2500;var Ny=0,fh=1,Oc=2,Hy=3e3,Br=3001,NS=3200,HS=3201,Uy=0,US=1,kn="",bt="srgb",ln="srgb-linear",Yp="display-p3",ph="display-p3-linear",Du="linear",Nt="srgb",Nu="rec709",Hu="p3";var go=7680;var hx=519,OS=512,BS=513,FS=514,Oy=515,zS=516,kS=517,GS=518,VS=519,yc=35044,sr=35048;var dx="300 es",jf=1035,vs=2e3,Uu=2001,Ks=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fx=1234567,hc=Math.PI/180,qo=180/Math.PI;function xi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function cn(n,e,t){return Math.max(e,Math.min(t,n))}function qp(n,e){return(n%e+e)%e}function WS(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function XS(n,e,t){return n!==e?(t-n)/(e-n):0}function dc(n,e,t){return(1-t)*n+t*e}function YS(n,e,t,i){return dc(n,e,1-Math.exp(-t*i))}function qS(n,e=1){return e-Math.abs(qp(n,e*2)-e)}function $S(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function KS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ZS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function JS(n,e){return n+Math.random()*(e-n)}function jS(n){return n*(.5-Math.random())}function QS(n){n!==void 0&&(fx=n);let e=fx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eT(n){return n*hc}function tT(n){return n*qo}function Qf(n){return(n&n-1)===0&&n!==0}function nT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ou(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function iT(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ts={DEG2RAD:hc,RAD2DEG:qo,generateUUID:xi,clamp:cn,euclideanModulo:qp,mapLinear:WS,inverseLerp:XS,lerp:dc,damp:YS,pingpong:qS,smoothstep:$S,smootherstep:KS,randInt:ZS,randFloat:JS,randFloatSpread:jS,seededRandom:QS,degToRad:eT,radToDeg:tT,isPowerOfTwo:Qf,ceilPowerOfTwo:nT,floorPowerOfTwo:Ou,setQuaternionFromProperEuler:iT,normalize:Lt,denormalize:Qi},te=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],m=i[8],x=s[0],g=s[3],p=s[6],v=s[1],y=s[4],E=s[7],b=s[2],T=s[5],S=s[8];return r[0]=o*x+a*v+l*b,r[3]=o*g+a*y+l*T,r[6]=o*p+a*E+l*S,r[1]=c*x+u*v+d*b,r[4]=c*g+u*y+d*T,r[7]=c*p+u*E+d*S,r[2]=h*x+f*v+m*b,r[5]=h*g+f*y+m*T,r[8]=h*p+f*E+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,m=t*d+i*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xf.makeScale(e,t)),this}rotate(e){return this.premultiply(xf.makeRotation(-e)),this}translate(e,t){return this.premultiply(xf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xf=new ot;function By(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sT(){let n=vc("canvas");return n.style.display="block",n}var px={};function fc(n){n in px||(px[n]=!0,console.warn(n))}var mx=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gx=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jl={[ln]:{transfer:Du,primaries:Nu,toReference:n=>n,fromReference:n=>n},[bt]:{transfer:Nt,primaries:Nu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ph]:{transfer:Du,primaries:Hu,toReference:n=>n.applyMatrix3(gx),fromReference:n=>n.applyMatrix3(mx)},[Yp]:{transfer:Nt,primaries:Hu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(gx),fromReference:n=>n.applyMatrix3(mx).convertLinearToSRGB()}},rT=new Set([ln,ph]),Mt={enabled:!0,_workingColorSpace:ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!rT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Jl[e].toReference,s=Jl[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Jl[n].primaries},getTransfer:function(n){return n===kn?Du:Jl[n].transfer}};function ko(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xo,Bu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xo===void 0&&(xo=vc("canvas")),xo.width=e.width,xo.height=e.height;let i=xo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ko(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ko(t[i]/255)*255):t[i]=ko(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},oT=0,Fu=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vf(s[o].image)):r.push(vf(s[o]))}else r=vf(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function vf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var aT=0,_n=class n extends Ks{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=oi,s=oi,r=zn,o=$s,a=gi,l=Ys,c=n.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=xi(),this.name="",this.source=new Fu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Br?bt:kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==by)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?Br:Hy}set encoding(e){fc("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Br?bt:kn}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=by;_n.DEFAULT_ANISOTROPY=1;var At=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,E=(f+1)/2,b=(p+1)/2,T=(u+h)/4,S=(d+x)/4,I=(m+g)/4;return y>E&&y>b?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=T/i,r=S/i):E>b?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=T/s,r=I/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=S/r,s=I/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ep=class extends Ks{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(fc("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Br?bt:kn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Fu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends ep{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},zu=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tp=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(d!==x||l!==h||c!==f||u!==m){let g=1-a,p=l*h+c*f+u*m+d*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let b=Math.sqrt(y),T=Math.atan2(b,p*v);g=Math.sin(g*T)/b,a=Math.sin(a*T)/b}let E=a*v;if(l=l*g+h*E,c=c*g+f*E,u=u*g+m*E,d=d*g+x*E,g===1-a){let b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-a*f,e[t+2]=c*m+u*f+a*h-l*d,e[t+3]=u*m-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mf.copy(this).projectOnVector(e),this.sub(Mf)}reflect(e){return this.sub(Mf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mf=new w,xx=new Fi,Kn=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ni):Ni.fromBufferAttribute(r,o),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jl.copy(i.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ec),Ql.subVectors(this.max,ec),yo.subVectors(e.a,ec),vo.subVectors(e.b,ec),Mo.subVectors(e.c,ec),Bs.subVectors(vo,yo),Fs.subVectors(Mo,vo),Rr.subVectors(yo,Mo);let t=[0,-Bs.z,Bs.y,0,-Fs.z,Fs.y,0,-Rr.z,Rr.y,Bs.z,0,-Bs.x,Fs.z,0,-Fs.x,Rr.z,0,-Rr.x,-Bs.y,Bs.x,0,-Fs.y,Fs.x,0,-Rr.y,Rr.x,0];return!Ef(t,yo,vo,Mo,Ql)||(t=[1,0,0,0,1,0,0,0,1],!Ef(t,yo,vo,Mo,Ql))?!1:(eu.crossVectors(Bs,Fs),t=[eu.x,eu.y,eu.z],Ef(t,yo,vo,Mo,Ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hs=[new w,new w,new w,new w,new w,new w,new w,new w],Ni=new w,jl=new Kn,yo=new w,vo=new w,Mo=new w,Bs=new w,Fs=new w,Rr=new w,ec=new w,Ql=new w,eu=new w,Cr=new w;function Ef(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Cr.fromArray(n,r);let a=s.x*Math.abs(Cr.x)+s.y*Math.abs(Cr.y)+s.z*Math.abs(Cr.z),l=e.dot(Cr),c=t.dot(Cr),u=i.dot(Cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var cT=new Kn,tc=new w,_f=new w,Tn=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):cT.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tc.subVectors(e,this.center);let t=tc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(tc,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tc.copy(e.center).add(_f)),this.expandByPoint(tc.copy(e.center).sub(_f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ds=new w,Sf=new w,tu=new w,zs=new w,Tf=new w,nu=new w,wf=new w,zr=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ds)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ds.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ds.copy(this.origin).addScaledVector(this.direction,t),ds.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Sf.copy(e).add(t).multiplyScalar(.5),tu.copy(t).sub(e).normalize(),zs.copy(this.origin).sub(Sf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(tu),a=zs.dot(this.direction),l=-zs.dot(tu),c=zs.lengthSq(),u=Math.abs(1-o*o),d,h,f,m;if(u>0)if(d=o*l-a,h=o*a-l,m=r*u,d>=0)if(h>=-m)if(h<=m){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Sf).addScaledVector(tu,h),f}intersectSphere(e,t){ds.subVectors(e.center,this.origin);let i=ds.dot(this.direction),s=ds.dot(ds)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ds)!==null}intersectTriangle(e,t,i,s,r){Tf.subVectors(t,e),nu.subVectors(i,e),wf.crossVectors(Tf,nu);let o=this.direction.dot(wf),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zs.subVectors(this.origin,e);let l=a*this.direction.dot(nu.crossVectors(zs,nu));if(l<0)return null;let c=a*this.direction.dot(Tf.cross(zs));if(c<0||l+c>o)return null;let u=-a*zs.dot(wf);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class n{constructor(e,t,i,s,r,o,a,l,c,u,d,h,f,m,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,f,m,x,g)}set(e,t,i,s,r,o,a,l,c,u,d,h,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Eo.setFromMatrixColumn(e,0).length(),r=1/Eo.setFromMatrixColumn(e,1).length(),o=1/Eo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,m=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,m=c*u,x=c*d;t[0]=h+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,m=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,m=a*u,x=a*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=m*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lT,e,uT)}lookAt(e,t,i){let s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),ks.crossVectors(i,ii),ks.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),ks.crossVectors(i,ii)),ks.normalize(),iu.crossVectors(ii,ks),s[0]=ks.x,s[4]=iu.x,s[8]=ii.x,s[1]=ks.y,s[5]=iu.y,s[9]=ii.y,s[2]=ks.z,s[6]=iu.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],v=i[3],y=i[7],E=i[11],b=i[15],T=s[0],S=s[4],I=s[8],_=s[12],A=s[1],G=s[5],X=s[9],re=s[13],D=s[2],F=s[6],k=s[10],K=s[14],j=s[3],W=s[7],N=s[11],U=s[15];return r[0]=o*T+a*A+l*D+c*j,r[4]=o*S+a*G+l*F+c*W,r[8]=o*I+a*X+l*k+c*N,r[12]=o*_+a*re+l*K+c*U,r[1]=u*T+d*A+h*D+f*j,r[5]=u*S+d*G+h*F+f*W,r[9]=u*I+d*X+h*k+f*N,r[13]=u*_+d*re+h*K+f*U,r[2]=m*T+x*A+g*D+p*j,r[6]=m*S+x*G+g*F+p*W,r[10]=m*I+x*X+g*k+p*N,r[14]=m*_+x*re+g*K+p*U,r[3]=v*T+y*A+E*D+b*j,r[7]=v*S+y*G+E*F+b*W,r[11]=v*I+y*X+E*k+b*N,r[15]=v*_+y*re+E*K+b*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*d-s*c*d-r*a*h+i*c*h+s*a*f-i*l*f)+x*(+t*l*f-t*c*h+r*o*h-s*o*f+s*c*u-r*l*u)+g*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*u-i*c*u)+p*(-s*a*u-t*l*d+t*a*h+s*o*d-i*o*h+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=d*g*c-x*h*c+x*l*f-a*g*f-d*l*p+a*h*p,y=m*h*c-u*g*c-m*l*f+o*g*f+u*l*p-o*h*p,E=u*x*c-m*d*c+m*a*f-o*x*f-u*a*p+o*d*p,b=m*d*l-u*x*l-m*a*h+o*x*h+u*a*g-o*d*g,T=t*v+i*y+s*E+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/T;return e[0]=v*S,e[1]=(x*h*r-d*g*r-x*s*f+i*g*f+d*s*p-i*h*p)*S,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*p+i*l*p)*S,e[3]=(d*l*r-a*h*r-d*s*c+i*h*c+a*s*f-i*l*f)*S,e[4]=y*S,e[5]=(u*g*r-m*h*r+m*s*f-t*g*f-u*s*p+t*h*p)*S,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*S,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*f+t*l*f)*S,e[8]=E*S,e[9]=(m*d*r-u*x*r-m*i*f+t*x*f+u*i*p-t*d*p)*S,e[10]=(o*x*r-m*a*r+m*i*c-t*x*c-o*i*p+t*a*p)*S,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*f-t*a*f)*S,e[12]=b*S,e[13]=(u*x*s-m*d*s+m*i*h-t*x*h-u*i*g+t*d*g)*S,e[14]=(m*a*s-o*x*s-m*i*l+t*x*l+o*i*g-t*a*g)*S,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*h+t*a*h)*S,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,m=r*d,x=o*u,g=o*d,p=a*d,v=l*c,y=l*u,E=l*d,b=i.x,T=i.y,S=i.z;return s[0]=(1-(x+p))*b,s[1]=(f+E)*b,s[2]=(m-y)*b,s[3]=0,s[4]=(f-E)*T,s[5]=(1-(h+p))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(m+y)*S,s[9]=(g-v)*S,s[10]=(1-(h+x))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Eo.set(s[0],s[1],s[2]).length(),o=Eo.set(s[4],s[5],s[6]).length(),a=Eo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hi.copy(this);let c=1/r,u=1/o,d=1/a;return Hi.elements[0]*=c,Hi.elements[1]*=c,Hi.elements[2]*=c,Hi.elements[4]*=u,Hi.elements[5]*=u,Hi.elements[6]*=u,Hi.elements[8]*=d,Hi.elements[9]*=d,Hi.elements[10]*=d,t.setFromRotationMatrix(Hi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=vs){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s),f,m;if(a===vs)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Uu)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=vs){let l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),h=(t+e)*c,f=(i+s)*u,m,x;if(a===vs)m=(o+r)*d,x=-2*d;else if(a===Uu)m=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Eo=new w,Hi=new Ze,lT=new w(0,0,0),uT=new w(1,1,1),ks=new w,iu=new w,ii=new w,yx=new Ze,vx=new Fi,ku=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vx.setFromEuler(this),this.setFromQuaternion(vx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ku.DEFAULT_ORDER="XYZ";var Mc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hT=0,Mx=new w,_o=new Fi,fs=new Ze,su=new w,nc=new w,dT=new w,fT=new Fi,Ex=new w(1,0,0),_x=new w(0,1,0),Sx=new w(0,0,1),pT={type:"added"},mT={type:"removed"},Ht=class n extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new w,t=new ku,i=new Fi,s=new w(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ot}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(Ex,e)}rotateY(e){return this.rotateOnAxis(_x,e)}rotateZ(e){return this.rotateOnAxis(Sx,e)}translateOnAxis(e,t){return Mx.copy(e).applyQuaternion(this.quaternion),this.position.add(Mx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ex,e)}translateY(e){return this.translateOnAxis(_x,e)}translateZ(e){return this.translateOnAxis(Sx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?su.copy(e):su.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),nc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fs.lookAt(nc,su,this.up):fs.lookAt(su,nc,this.up),this.quaternion.setFromRotationMatrix(fs),s&&(fs.extractRotation(s.matrixWorld),_o.setFromRotationMatrix(fs),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mT)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fs.multiply(e.parent.matrixWorld)),e.applyMatrix4(fs),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nc,e,dT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nc,fT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new w(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ui=new w,ps=new w,bf=new w,ms=new w,So=new w,To=new w,Tx=new w,Af=new w,Rf=new w,Cf=new w,ru=!1,Hr=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ui.subVectors(e,t),s.cross(Ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ui.subVectors(s,t),ps.subVectors(i,t),bf.subVectors(e,t);let o=Ui.dot(Ui),a=Ui.dot(ps),l=Ui.dot(bf),c=ps.dot(ps),u=ps.dot(bf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ms)===null?!1:ms.x>=0&&ms.y>=0&&ms.x+ms.y<=1}static getUV(e,t,i,s,r,o,a,l){return ru===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ru=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ms)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ms.x),l.addScaledVector(o,ms.y),l.addScaledVector(a,ms.z),l)}static isFrontFacing(e,t,i,s){return Ui.subVectors(i,t),ps.subVectors(e,t),Ui.cross(ps).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ps.subVectors(this.a,this.b),Ui.cross(ps).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ru===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ru=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;So.subVectors(s,i),To.subVectors(r,i),Af.subVectors(e,i);let l=So.dot(Af),c=To.dot(Af);if(l<=0&&c<=0)return t.copy(i);Rf.subVectors(e,s);let u=So.dot(Rf),d=To.dot(Rf);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(So,o);Cf.subVectors(e,r);let f=So.dot(Cf),m=To.dot(Cf);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(To,a);let g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return Tx.subVectors(r,s),a=(d-u)/(d-u+(f-m)),t.copy(s).addScaledVector(Tx,a);let p=1/(g+x+h);return o=x*p,a=h*p,t.copy(i).addScaledVector(So,o).addScaledVector(To,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gs={h:0,s:0,l:0},ou={h:0,s:0,l:0};function Pf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Mt.workingColorSpace){if(e=qp(e,1),t=cn(t,0,1),i=cn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Pf(o,r,e+1/3),this.g=Pf(o,r,e),this.b=Pf(o,r,e-1/3)}return Mt.toWorkingColorSpace(this,s),this}setStyle(e,t=bt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let i=Fy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}copyLinearToSRGB(e){return this.r=yf(e.r),this.g=yf(e.g),this.b=yf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return Mt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(cn(Cn.r*255,0,255))*65536+Math.round(cn(Cn.g*255,0,255))*256+Math.round(cn(Cn.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(Cn.copy(this),t);let i=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=bt){Mt.fromWorkingColorSpace(Cn.copy(this),e);let t=Cn.r,i=Cn.g,s=Cn.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gs),this.setHSL(Gs.h+e,Gs.s+t,Gs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gs),e.getHSL(ou);let i=dc(Gs.h,ou.h,t),s=dc(Gs.s,ou.s,t),r=dc(Gs.l,ou.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new ye;ye.NAMES=Fy;var gT=0,Zn=class extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=zo,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Kf,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Iu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$f&&(i.blendSrc=this.blendSrc),this.blendDst!==Kf&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Iu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ft=class extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var rn=new w,au=new te,yt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ys,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)au.fromBufferAttribute(this,t),au.applyMatrix3(e),this.setXY(t,au.x,au.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),e}};var Gu=class extends yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Vu=class extends yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Le=class extends yt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var xT=0,mi=new Ze,If=new Ht,wo=new w,si=new Kn,ic=new Kn,yn=new w,Et=class n extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(By(e)?Vu:Gu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,i){return mi.makeTranslation(e,t,i),this.applyMatrix4(mi),this}scale(e,t,i){return mi.makeScale(e,t,i),this.applyMatrix4(mi),this}lookAt(e){return If.lookAt(e),If.updateMatrix(),this.applyMatrix4(If.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Le(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];si.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ic.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(si.min,ic.min),si.expandByPoint(yn),yn.addVectors(si.max,ic.max),si.expandByPoint(yn)):(si.expandByPoint(ic.min),si.expandByPoint(ic.max))}si.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)yn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yn.fromBufferAttribute(a,c),l&&(wo.fromBufferAttribute(e,c),yn.add(wo)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new w,u[A]=new w;let d=new w,h=new w,f=new w,m=new te,x=new te,g=new te,p=new w,v=new w;function y(A,G,X){d.fromArray(s,A*3),h.fromArray(s,G*3),f.fromArray(s,X*3),m.fromArray(o,A*2),x.fromArray(o,G*2),g.fromArray(o,X*2),h.sub(d),f.sub(d),x.sub(m),g.sub(m);let re=1/(x.x*g.y-g.x*x.y);isFinite(re)&&(p.copy(h).multiplyScalar(g.y).addScaledVector(f,-x.y).multiplyScalar(re),v.copy(f).multiplyScalar(x.x).addScaledVector(h,-g.x).multiplyScalar(re),c[A].add(p),c[G].add(p),c[X].add(p),u[A].add(v),u[G].add(v),u[X].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let A=0,G=E.length;A<G;++A){let X=E[A],re=X.start,D=X.count;for(let F=re,k=re+D;F<k;F+=3)y(i[F+0],i[F+1],i[F+2])}let b=new w,T=new w,S=new w,I=new w;function _(A){S.fromArray(r,A*3),I.copy(S);let G=c[A];b.copy(G),b.sub(S.multiplyScalar(S.dot(G))).normalize(),T.crossVectors(I,G);let re=T.dot(u[A])<0?-1:1;l[A*4]=b.x,l[A*4+1]=b.y,l[A*4+2]=b.z,l[A*4+3]=re}for(let A=0,G=E.length;A<G;++A){let X=E[A],re=X.start,D=X.count;for(let F=re,k=re+D;F<k;F+=3)_(i[F+0]),_(i[F+1]),_(i[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new w,r=new w,o=new w,a=new w,l=new w,c=new w,u=new w,d=new w;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)h[m++]=c[f++]}return new yt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wx=new Ze,Pr=new zr,cu=new Tn,bx=new w,bo=new w,Ao=new w,Ro=new w,Lf=new w,lu=new w,uu=new te,hu=new te,du=new te,Ax=new w,Rx=new w,Cx=new w,fu=new w,pu=new w,L=class extends Ht{constructor(e=new Et,t=new ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){lu.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Lf.fromBufferAttribute(d,e),o?lu.addScaledVector(Lf,u):lu.addScaledVector(Lf.sub(t),u))}t.add(lu)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cu.copy(i.boundingSphere),cu.applyMatrix4(r),Pr.copy(e.ray).recast(e.near),!(cu.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(cu,bx)===null||Pr.origin.distanceToSquared(bx)>(e.far-e.near)**2))&&(wx.copy(r).invert(),Pr.copy(e.ray).applyMatrix4(wx),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){let g=h[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let E=v,b=y;E<b;E+=3){let T=a.getX(E),S=a.getX(E+1),I=a.getX(E+2);s=mu(this,p,e,i,c,u,d,T,S,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),y=a.getX(g+1),E=a.getX(g+2);s=mu(this,o,e,i,c,u,d,v,y,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){let g=h[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let E=v,b=y;E<b;E+=3){let T=E,S=E+1,I=E+2;s=mu(this,p,e,i,c,u,d,T,S,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,y=g+1,E=g+2;s=mu(this,o,e,i,c,u,d,v,y,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function yT(n,e,t,i,s,r,o,a){let l;if(e.side===Pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===$n,a),l===null)return null;pu.copy(a),pu.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(pu);return c<t.near||c>t.far?null:{distance:c,point:pu.clone(),object:n}}function mu(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,bo),n.getVertexPosition(l,Ao),n.getVertexPosition(c,Ro);let u=yT(n,e,t,i,bo,Ao,Ro,fu);if(u){s&&(uu.fromBufferAttribute(s,a),hu.fromBufferAttribute(s,l),du.fromBufferAttribute(s,c),u.uv=Hr.getInterpolation(fu,bo,Ao,Ro,uu,hu,du,new te)),r&&(uu.fromBufferAttribute(r,a),hu.fromBufferAttribute(r,l),du.fromBufferAttribute(r,c),u.uv1=Hr.getInterpolation(fu,bo,Ao,Ro,uu,hu,du,new te),u.uv2=u.uv1),o&&(Ax.fromBufferAttribute(o,a),Rx.fromBufferAttribute(o,l),Cx.fromBufferAttribute(o,c),u.normal=Hr.getInterpolation(fu,bo,Ao,Ro,Ax,Rx,Cx,new w),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new w,materialIndex:0};Hr.getNormal(bo,Ao,Ro,d.normal),u.face=d}return u}var Ut=class n extends Et{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(d,2));function m(x,g,p,v,y,E,b,T,S,I,_){let A=E/S,G=b/I,X=E/2,re=b/2,D=T/2,F=S+1,k=I+1,K=0,j=0,W=new w;for(let N=0;N<k;N++){let U=N*G-re;for(let B=0;B<F;B++){let H=B*A-X;W[x]=H*v,W[g]=U*y,W[p]=D,c.push(W.x,W.y,W.z),W[x]=0,W[g]=0,W[p]=T>0?1:-1,u.push(W.x,W.y,W.z),d.push(B/S),d.push(1-N/I),K+=1}}for(let N=0;N<I;N++)for(let U=0;U<S;U++){let B=h+U+F*N,H=h+U+F*(N+1),V=h+(U+1)+F*(N+1),ee=h+(U+1)+F*N;l.push(B,H,ee),l.push(H,V,ee),j+=6}a.addGroup(f,j,_),f+=j,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $o(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Fn(n){let e={};for(let t=0;t<n.length;t++){let i=$o(n[t]);for(let s in i)e[s]=i[s]}return e}function vT(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zy(n){return n.getRenderTarget()===null?n.outputColorSpace:Mt.workingColorSpace}var ai={clone:$o,merge:Fn},MT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ET=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kt=class extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MT,this.fragmentShader=ET,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$o(e.uniforms),this.uniformsGroups=vT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Wu=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=vs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},nn=class extends Wu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Co=-90,Po=1,np=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(Co,Po,e,t);s.layers=this.layers,this.add(s);let r=new nn(Co,Po,e,t);r.layers=this.layers,this.add(r);let o=new nn(Co,Po,e,t);o.layers=this.layers,this.add(o);let a=new nn(Co,Po,e,t);a.layers=this.layers,this.add(a);let l=new nn(Co,Po,e,t);l.layers=this.layers,this.add(l);let c=new nn(Co,Po,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===vs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Xu=class extends _n{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Vo,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ip=class extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(fc("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Br?bt:kn),this.texture=new Xu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ut(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:$o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:es});r.uniforms.tEquirect.value=t;let o=new L(s,r),a=t.minFilter;return t.minFilter===$s&&(t.minFilter=zn),new np(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Df=new w,_T=new w,ST=new ot,ri=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Df.subVectors(i,t).cross(_T.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Df),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ST.getNormalMatrix(e),s=this.coplanarPoint(Df).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ir=new Tn,gu=new w,Ec=class{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vs){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],v=s[13],y=s[14],E=s[15];if(i[0].setComponents(l-r,h-c,g-f,E-p).normalize(),i[1].setComponents(l+r,h+c,g+f,E+p).normalize(),i[2].setComponents(l+o,h+u,g+m,E+v).normalize(),i[3].setComponents(l-o,h-u,g-m,E-v).normalize(),i[4].setComponents(l-a,h-d,g-x,E-y).normalize(),t===vs)i[5].setComponents(l+a,h+d,g+x,E+y).normalize();else if(t===Uu)i[5].setComponents(a,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(gu.x=s.normal.x>0?e.max.x:e.min.x,gu.y=s.normal.y>0?e.max.y:e.min.y,gu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ky(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function TT(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,u){let d=c.array,h=c.usage,f=d.byteLength,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=n.SHORT;else if(d instanceof Uint32Array)x=n.UNSIGNED_INT;else if(d instanceof Int32Array)x=n.INT;else if(d instanceof Int8Array)x=n.BYTE;else if(d instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,d){let h=u.array,f=u._updateRange,m=u.updateRanges;if(n.bindBuffer(d,c),f.count===-1&&m.length===0&&n.bufferSubData(d,0,h),m.length!==0){for(let x=0,g=m.length;x<g;x++){let p=m[x];t?n.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):n.bufferSubData(d,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):n.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}var un=class n extends Et{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let v=p*h-o;for(let y=0;y<c;y++){let E=y*d-r;m.push(E,-v,0),x.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let y=v+c*p,E=v+c*(p+1),b=v+1+c*(p+1),T=v+1+c*p;f.push(y,E,T),f.push(E,b,T)}this.setIndex(f),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},wT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,PT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,HT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$T=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ZT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ew=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tw="gl_FragColor = linearToOutputTexel( gl_FragColor );",nw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,iw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ew=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_w=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ww=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Aw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Iw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ow=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$w=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ib=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Db=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:wT,alphahash_pars_fragment:bT,alphamap_fragment:AT,alphamap_pars_fragment:RT,alphatest_fragment:CT,alphatest_pars_fragment:PT,aomap_fragment:IT,aomap_pars_fragment:LT,batching_pars_vertex:DT,batching_vertex:NT,begin_vertex:HT,beginnormal_vertex:UT,bsdfs:OT,iridescence_fragment:BT,bumpmap_pars_fragment:FT,clipping_planes_fragment:zT,clipping_planes_pars_fragment:kT,clipping_planes_pars_vertex:GT,clipping_planes_vertex:VT,color_fragment:WT,color_pars_fragment:XT,color_pars_vertex:YT,color_vertex:qT,common:$T,cube_uv_reflection_fragment:KT,defaultnormal_vertex:ZT,displacementmap_pars_vertex:JT,displacementmap_vertex:jT,emissivemap_fragment:QT,emissivemap_pars_fragment:ew,colorspace_fragment:tw,colorspace_pars_fragment:nw,envmap_fragment:iw,envmap_common_pars_fragment:sw,envmap_pars_fragment:rw,envmap_pars_vertex:ow,envmap_physical_pars_fragment:yw,envmap_vertex:aw,fog_vertex:cw,fog_pars_vertex:lw,fog_fragment:uw,fog_pars_fragment:hw,gradientmap_pars_fragment:dw,lightmap_fragment:fw,lightmap_pars_fragment:pw,lights_lambert_fragment:mw,lights_lambert_pars_fragment:gw,lights_pars_begin:xw,lights_toon_fragment:vw,lights_toon_pars_fragment:Mw,lights_phong_fragment:Ew,lights_phong_pars_fragment:_w,lights_physical_fragment:Sw,lights_physical_pars_fragment:Tw,lights_fragment_begin:ww,lights_fragment_maps:bw,lights_fragment_end:Aw,logdepthbuf_fragment:Rw,logdepthbuf_pars_fragment:Cw,logdepthbuf_pars_vertex:Pw,logdepthbuf_vertex:Iw,map_fragment:Lw,map_pars_fragment:Dw,map_particle_fragment:Nw,map_particle_pars_fragment:Hw,metalnessmap_fragment:Uw,metalnessmap_pars_fragment:Ow,morphcolor_vertex:Bw,morphnormal_vertex:Fw,morphtarget_pars_vertex:zw,morphtarget_vertex:kw,normal_fragment_begin:Gw,normal_fragment_maps:Vw,normal_pars_fragment:Ww,normal_pars_vertex:Xw,normal_vertex:Yw,normalmap_pars_fragment:qw,clearcoat_normal_fragment_begin:$w,clearcoat_normal_fragment_maps:Kw,clearcoat_pars_fragment:Zw,iridescence_pars_fragment:Jw,opaque_fragment:jw,packing:Qw,premultiplied_alpha_fragment:eb,project_vertex:tb,dithering_fragment:nb,dithering_pars_fragment:ib,roughnessmap_fragment:sb,roughnessmap_pars_fragment:rb,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:ab,shadowmap_vertex:cb,shadowmask_pars_fragment:lb,skinbase_vertex:ub,skinning_pars_vertex:hb,skinning_vertex:db,skinnormal_vertex:fb,specularmap_fragment:pb,specularmap_pars_fragment:mb,tonemapping_fragment:gb,tonemapping_pars_fragment:xb,transmission_fragment:yb,transmission_pars_fragment:vb,uv_pars_fragment:Mb,uv_pars_vertex:Eb,uv_vertex:_b,worldpos_vertex:Sb,background_vert:Tb,background_frag:wb,backgroundCube_vert:bb,backgroundCube_frag:Ab,cube_vert:Rb,cube_frag:Cb,depth_vert:Pb,depth_frag:Ib,distanceRGBA_vert:Lb,distanceRGBA_frag:Db,equirect_vert:Nb,equirect_frag:Hb,linedashed_vert:Ub,linedashed_frag:Ob,meshbasic_vert:Bb,meshbasic_frag:Fb,meshlambert_vert:zb,meshlambert_frag:kb,meshmatcap_vert:Gb,meshmatcap_frag:Vb,meshnormal_vert:Wb,meshnormal_frag:Xb,meshphong_vert:Yb,meshphong_frag:qb,meshphysical_vert:$b,meshphysical_frag:Kb,meshtoon_vert:Zb,meshtoon_frag:Jb,points_vert:jb,points_frag:Qb,shadow_vert:e2,shadow_frag:t2,sprite_vert:n2,sprite_frag:i2},pe={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ji={basic:{uniforms:Fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ye(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Fn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Fn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ye(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Fn([pe.points,pe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Fn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Fn([pe.common,pe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Fn([pe.sprite,pe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Fn([pe.common,pe.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Fn([pe.lights,pe.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ji.physical={uniforms:Fn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var xu={r:0,b:0,g:0};function s2(n,e,t,i,s,r,o){let a=new ye(0),l=r===!0?0:1,c,u,d=null,h=0,f=null;function m(g,p){let v=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?x(a,l):y&&y.isColor&&(x(y,1),v=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===dh)?(u===void 0&&(u=new L(new Ut(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:$o(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Mt.getTransfer(y.colorSpace)!==Nt,(d!==y||h!==y.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,f=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new L(new un(2,2),new kt({name:"BackgroundMaterial",uniforms:$o(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(y.colorSpace)!==Nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,f=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,p){g.getRGB(xu,zy(n)),i.buffers.color.setClear(xu.r,xu.g,xu.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(a,l)},render:m}}function r2(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=g(null),c=l,u=!1;function d(D,F,k,K,j){let W=!1;if(o){let N=x(K,k,F);c!==N&&(c=N,f(c.object)),W=p(D,K,k,j),W&&v(D,K,k,j)}else{let N=F.wireframe===!0;(c.geometry!==K.id||c.program!==k.id||c.wireframe!==N)&&(c.geometry=K.id,c.program=k.id,c.wireframe=N,W=!0)}j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,I(D,F,k,K),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function m(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function x(D,F,k){let K=k.wireframe===!0,j=a[D.id];j===void 0&&(j={},a[D.id]=j);let W=j[F.id];W===void 0&&(W={},j[F.id]=W);let N=W[K];return N===void 0&&(N=g(h()),W[K]=N),N}function g(D){let F=[],k=[],K=[];for(let j=0;j<s;j++)F[j]=0,k[j]=0,K[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:K,object:D,attributes:{},index:null}}function p(D,F,k,K){let j=c.attributes,W=F.attributes,N=0,U=k.getAttributes();for(let B in U)if(U[B].location>=0){let V=j[B],ee=W[B];if(ee===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),V===void 0||V.attribute!==ee||ee&&V.data!==ee.data)return!0;N++}return c.attributesNum!==N||c.index!==K}function v(D,F,k,K){let j={},W=F.attributes,N=0,U=k.getAttributes();for(let B in U)if(U[B].location>=0){let V=W[B];V===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(V=D.instanceColor));let ee={};ee.attribute=V,V&&V.data&&(ee.data=V.data),j[B]=ee,N++}c.attributes=j,c.attributesNum=N,c.index=K}function y(){let D=c.newAttributes;for(let F=0,k=D.length;F<k;F++)D[F]=0}function E(D){b(D,0)}function b(D,F){let k=c.newAttributes,K=c.enabledAttributes,j=c.attributeDivisors;k[D]=1,K[D]===0&&(n.enableVertexAttribArray(D),K[D]=1),j[D]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),j[D]=F)}function T(){let D=c.newAttributes,F=c.enabledAttributes;for(let k=0,K=F.length;k<K;k++)F[k]!==D[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function S(D,F,k,K,j,W,N){N===!0?n.vertexAttribIPointer(D,F,k,j,W):n.vertexAttribPointer(D,F,k,K,j,W)}function I(D,F,k,K){if(i.isWebGL2===!1&&(D.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let j=K.attributes,W=k.getAttributes(),N=F.defaultAttributeValues;for(let U in W){let B=W[U];if(B.location>=0){let H=j[U];if(H===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(H=D.instanceColor)),H!==void 0){let V=H.normalized,ee=H.itemSize,he=t.get(H);if(he===void 0)continue;let fe=he.buffer,He=he.type,Qe=he.bytesPerElement,De=i.isWebGL2===!0&&(He===n.INT||He===n.UNSIGNED_INT||H.gpuType===Ay);if(H.isInterleavedBufferAttribute){let Je=H.data,O=Je.stride,me=H.offset;if(Je.isInstancedInterleavedBuffer){for(let ie=0;ie<B.locationSize;ie++)b(B.location+ie,Je.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Je.meshPerAttribute*Je.count)}else for(let ie=0;ie<B.locationSize;ie++)E(B.location+ie);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let ie=0;ie<B.locationSize;ie++)S(B.location+ie,ee/B.locationSize,He,V,O*Qe,(me+ee/B.locationSize*ie)*Qe,De)}else{if(H.isInstancedBufferAttribute){for(let Je=0;Je<B.locationSize;Je++)b(B.location+Je,H.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Je=0;Je<B.locationSize;Je++)E(B.location+Je);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let Je=0;Je<B.locationSize;Je++)S(B.location+Je,ee/B.locationSize,He,V,ee*Qe,ee/B.locationSize*Je*Qe,De)}}else if(N!==void 0){let V=N[U];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(B.location,V);break;case 3:n.vertexAttrib3fv(B.location,V);break;case 4:n.vertexAttrib4fv(B.location,V);break;default:n.vertexAttrib1fv(B.location,V)}}}}T()}function _(){X();for(let D in a){let F=a[D];for(let k in F){let K=F[k];for(let j in K)m(K[j].object),delete K[j];delete F[k]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;let F=a[D.id];for(let k in F){let K=F[k];for(let j in K)m(K[j].object),delete K[j];delete F[k]}delete a[D.id]}function G(D){for(let F in a){let k=a[F];if(k[D.id]===void 0)continue;let K=k[D.id];for(let j in K)m(K[j].object),delete K[j];delete k[D.id]}}function X(){re(),u=!0,c!==l&&(c=l,f(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:re,dispose:_,releaseStatesOfGeometry:A,releaseStatesOfProgram:G,initAttributes:y,enableAttribute:E,disableUnusedAttributes:T}}function o2(n,e,t,i){let s=i.isWebGL2,r;function o(u){r=u}function a(u,d){n.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,h){if(h===0)return;let f,m;if(s)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,u,d,h),t.update(d,r,h)}function c(u,d,h){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h;m++)this.render(u[m],d[m]);else{f.multiDrawArraysWEBGL(r,u,0,d,0,h);let m=0;for(let x=0;x<h;x++)m+=d[x];t.update(m,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function a2(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,E=o||e.has("OES_texture_float"),b=y&&E,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:b,maxSamples:T}}function c2(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ri,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let v=r?0:i,y=v*4,E=p.clippingState||null;l.value=E,E=u(m,h,y,f);for(let b=0;b!==y;++b)E[b]=t[b];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,E=f;y!==x;++y,E+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function l2(n){let e=new WeakMap;function t(o,a){return a===Zf?o.mapping=Vo:a===Jf&&(o.mapping=Wo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Zf||a===Jf)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ip(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Zs=class extends Wu{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oo=4,Px=[.125,.215,.35,.446,.526,.582],Nr=20,Nf=new Zs,Ix=new ye,Hf=null,Uf=0,Of=0,Lr=(1+Math.sqrt(5))/2,Io=1/Lr,Lx=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Lr,Io),new w(0,Lr,-Io),new w(Io,0,Lr),new w(-Io,0,Lr),new w(Lr,Io,0),new w(-Lr,Io,0)],Ko=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Hf=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hf,Uf,Of),e.scissorTest=!1,yu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vo||e.mapping===Wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hf=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Bi,format:gi,colorSpace:ln,depthBuffer:!1},s=Dx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dx(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u2(r)),this._blurMaterial=h2(r,e,t)}return s}_compileMaterial(e){let t=new L(this._lodPlanes[0],e);this._renderer.compile(t,Nf)}_sceneToCubeUV(e,t,i,s){let a=new nn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ix),u.toneMapping=Xs,u.autoClear=!1;let f=new ft({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),m=new L(new Ut,f),x=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(Ix),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;yu(s,v*y,p>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Vo||e.mapping===Wo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nx());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new L(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;yu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Nf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Lx[(s-1)%Lx.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new L(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Nr-1),x=r/m,g=isFinite(r)?1+Math.floor(u*x):Nr;g>Nr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);let p=[],v=0;for(let S=0;S<Nr;++S){let I=S/x,_=Math.exp(-I*I/2);p.push(_),S===0?v+=_:S<g&&(v+=2*_)}for(let S=0;S<p.length;S++)p[S]=p[S]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-i;let E=this._sizeLods[s],b=3*E*(s>y-Oo?s-y+Oo:0),T=4*(this._cubeSize-E);yu(t,b,T,3*E,2*E),l.setRenderTarget(t),l.render(d,Nf)}};function u2(n){let e=[],t=[],i=[],s=n,r=n-Oo+1+Px.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Oo?l=Px[o-n+Oo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),y=new Float32Array(g*m*f),E=new Float32Array(p*m*f);for(let T=0;T<f;T++){let S=T%3*2/3-1,I=T>2?0:-1,_=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];v.set(_,x*m*T),y.set(h,g*m*T);let A=[T,T,T,T,T,T];E.set(A,p*m*T)}let b=new Et;b.setAttribute("position",new yt(v,x)),b.setAttribute("uv",new yt(y,g)),b.setAttribute("faceIndex",new yt(E,p)),e.push(b),s>Oo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dx(n,e,t){let i=new Sn(n,e,t);return i.texture.mapping=dh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yu(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function h2(n,e,t){let i=new Float32Array(Nr),s=new w(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Nx(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Hx(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function $p(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Zf||l===Jf,u=l===Vo||l===Wo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ko(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new Ko(n));let h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function f2(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function p2(n,e,t,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);for(let m in h.morphAttributes){let x=h.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)e.update(h[m],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],n.ARRAY_BUFFER)}}function c(d){let h=[],f=d.index,m=d.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,E=v.length;y<E;y+=3){let b=v[y+0],T=v[y+1],S=v[y+2];h.push(b,T,T,S,S,b)}}else if(m!==void 0){let v=m.array;x=m.version;for(let y=0,E=v.length/3-1;y<E;y+=3){let b=y+0,T=y+1,S=y+2;h.push(b,T,T,S,S,b)}}else return;let g=new(By(h)?Vu:Gu)(h,1);g.version=x;let p=r.get(d);p&&e.remove(p),r.set(d,g)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function m2(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){n.drawElements(r,m,a,f*l),t.update(m,r,1)}function d(f,m,x){if(x===0)return;let g,p;if(s)g=n,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,a,f*l,x),t.update(m,r,x)}function h(f,m,x){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<x;p++)this.render(f[p]/l,m[p]);else{g.multiDrawElementsWEBGL(r,m,0,a,f,0,x);let p=0;for(let v=0;v<x;v++)p+=m[v];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function g2(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function x2(n,e){return n[0]-e[0]}function y2(n,e){return Math.abs(e[1])-Math.abs(n[1])}function v2(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new At,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){let h=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=f!==void 0?f.length:0,x=r.get(u);if(x===void 0||x.count!==m){let D=function(){X.dispose(),r.delete(u),u.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();let v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],S=u.morphAttributes.color||[],I=0;v===!0&&(I=1),y===!0&&(I=2),E===!0&&(I=3);let _=u.attributes.position.count*I,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let G=new Float32Array(_*A*4*m),X=new zu(G,_,A,m);X.type=ys,X.needsUpdate=!0;let re=I*4;for(let F=0;F<m;F++){let k=b[F],K=T[F],j=S[F],W=_*A*4*F;for(let N=0;N<k.count;N++){let U=N*re;v===!0&&(o.fromBufferAttribute(k,N),G[W+U+0]=o.x,G[W+U+1]=o.y,G[W+U+2]=o.z,G[W+U+3]=0),y===!0&&(o.fromBufferAttribute(K,N),G[W+U+4]=o.x,G[W+U+5]=o.y,G[W+U+6]=o.z,G[W+U+7]=0),E===!0&&(o.fromBufferAttribute(j,N),G[W+U+8]=o.x,G[W+U+9]=o.y,G[W+U+10]=o.z,G[W+U+11]=j.itemSize===4?o.w:1)}}x={count:m,texture:X,size:new te(_,A)},r.set(u,x),u.addEventListener("dispose",D)}let g=0;for(let v=0;v<h.length;v++)g+=h[v];let p=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",p),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=h===void 0?0:h.length,m=i[u.id];if(m===void 0||m.length!==f){m=[];for(let y=0;y<f;y++)m[y]=[y,0];i[u.id]=m}for(let y=0;y<f;y++){let E=m[y];E[0]=y,E[1]=h[y]}m.sort(y2);for(let y=0;y<8;y++)y<f&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(x2);let x=u.morphAttributes.position,g=u.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let E=a[y],b=E[0],T=E[1];b!==Number.MAX_SAFE_INTEGER&&T?(x&&u.getAttribute("morphTarget"+y)!==x[b]&&u.setAttribute("morphTarget"+y,x[b]),g&&u.getAttribute("morphNormal"+y)!==g[b]&&u.setAttribute("morphNormal"+y,g[b]),s[y]=T,p+=T):(x&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),g&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}let v=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function M2(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Yu=class extends _n{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Or,u!==Or&&u!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Or&&(i=Vs),i===void 0&&u===Xo&&(i=Ur),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Gy=new _n,Vy=new Yu(1,1);Vy.compareFunction=Oy;var Wy=new zu,Xy=new tp,Yy=new Xu,Ux=[],Ox=[],Bx=new Float32Array(16),Fx=new Float32Array(9),zx=new Float32Array(4);function ta(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ux[s];if(r===void 0&&(r=new Float32Array(s),Ux[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function mh(n,e){let t=Ox[e];t===void 0&&(t=new Int32Array(e),Ox[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function E2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function S2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function T2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function w2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;zx.set(i),n.uniformMatrix2fv(this.addr,!1,zx),dn(t,i)}}function b2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Fx.set(i),n.uniformMatrix3fv(this.addr,!1,Fx),dn(t,i)}}function A2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Bx.set(i),n.uniformMatrix4fv(this.addr,!1,Bx),dn(t,i)}}function R2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function C2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function P2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function I2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function L2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function D2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function N2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function H2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function U2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Vy:Gy;t.setTexture2D(e||r,s)}function O2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Xy,s)}function B2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Yy,s)}function F2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Wy,s)}function z2(n){switch(n){case 5126:return E2;case 35664:return _2;case 35665:return S2;case 35666:return T2;case 35674:return w2;case 35675:return b2;case 35676:return A2;case 5124:case 35670:return R2;case 35667:case 35671:return C2;case 35668:case 35672:return P2;case 35669:case 35673:return I2;case 5125:return L2;case 36294:return D2;case 36295:return N2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return U2;case 35679:case 36299:case 36307:return O2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return F2}}function k2(n,e){n.uniform1fv(this.addr,e)}function G2(n,e){let t=ta(e,this.size,2);n.uniform2fv(this.addr,t)}function V2(n,e){let t=ta(e,this.size,3);n.uniform3fv(this.addr,t)}function W2(n,e){let t=ta(e,this.size,4);n.uniform4fv(this.addr,t)}function X2(n,e){let t=ta(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Y2(n,e){let t=ta(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function q2(n,e){let t=ta(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $2(n,e){n.uniform1iv(this.addr,e)}function K2(n,e){n.uniform2iv(this.addr,e)}function Z2(n,e){n.uniform3iv(this.addr,e)}function J2(n,e){n.uniform4iv(this.addr,e)}function j2(n,e){n.uniform1uiv(this.addr,e)}function Q2(n,e){n.uniform2uiv(this.addr,e)}function eA(n,e){n.uniform3uiv(this.addr,e)}function tA(n,e){n.uniform4uiv(this.addr,e)}function nA(n,e,t){let i=this.cache,s=e.length,r=mh(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Gy,r[o])}function iA(n,e,t){let i=this.cache,s=e.length,r=mh(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xy,r[o])}function sA(n,e,t){let i=this.cache,s=e.length,r=mh(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Yy,r[o])}function rA(n,e,t){let i=this.cache,s=e.length,r=mh(t,s);hn(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Wy,r[o])}function oA(n){switch(n){case 5126:return k2;case 35664:return G2;case 35665:return V2;case 35666:return W2;case 35674:return X2;case 35675:return Y2;case 35676:return q2;case 5124:case 35670:return $2;case 35667:case 35671:return K2;case 35668:case 35672:return Z2;case 35669:case 35673:return J2;case 5125:return j2;case 36294:return Q2;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return rA}}var sp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=z2(t.type)}},rp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oA(t.type)}},op=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Bf=/(\w+)(\])?(\[|\.)?/g;function kx(n,e){n.seq.push(e),n.map[e.id]=e}function aA(n,e,t){let i=n.name,s=i.length;for(Bf.lastIndex=0;;){let r=Bf.exec(i),o=Bf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kx(t,c===void 0?new sp(a,n,e):new rp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new op(a),kx(t,d)),t=d}}}var Go=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);aA(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Gx(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var cA=37297,lA=0;function uA(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function hA(n){let e=Mt.getPrimaries(Mt.workingColorSpace),t=Mt.getPrimaries(n),i;switch(e===t?i="":e===Hu&&t===Nu?i="LinearDisplayP3ToLinearSRGB":e===Nu&&t===Hu&&(i="LinearSRGBToLinearDisplayP3"),n){case ln:case ph:return[i,"LinearTransferOETF"];case bt:case Yp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Vx(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+uA(n.getShaderSource(e),o)}else return s}function dA(n,e){let t=hA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fA(n,e){let t;switch(e){case zp:t="Linear";break;case kp:t="Reinhard";break;case Gp:t="OptimizedCineon";break;case Uc:t="ACESFilmic";break;case Vp:t="AgX";break;case SS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bo).join(`
`)}function mA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Bo).join(`
`)}function gA(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xA(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Bo(n){return n!==""}function Wx(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(n){return n.replace(yA,MA)}var vA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function MA(n,e){let t=rt[e];if(t===void 0){let i=vA.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ap(t)}var EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yx(n){return n.replace(EA,_A)}function _A(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ty?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xs&&(e="SHADOWMAP_TYPE_VSM"),e}function TA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vo:case Wo:e="ENVMAP_TYPE_CUBE";break;case dh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Wo:e="ENVMAP_MODE_REFRACTION";break}return e}function bA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wy:e="ENVMAP_BLENDING_MULTIPLY";break;case ES:e="ENVMAP_BLENDING_MIX";break;case _S:e="ENVMAP_BLENDING_ADD";break}return e}function AA(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function RA(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=SA(t),c=TA(t),u=wA(t),d=bA(t),h=AA(t),f=t.isWebGL2?"":pA(t),m=mA(t),x=gA(r),g=s.createProgram(),p,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Bo).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Bo).join(`
`),v.length>0&&(v+=`
`)):(p=[qx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),v=[f,qx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xs?"#define TONE_MAPPING":"",t.toneMapping!==Xs?rt.tonemapping_pars_fragment:"",t.toneMapping!==Xs?fA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,dA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=ap(o),o=Wx(o,t),o=Xx(o,t),a=ap(a),a=Wx(a,t),a=Xx(a,t),o=Yx(o),a=Yx(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let E=y+p+o,b=y+v+a,T=Gx(s,s.VERTEX_SHADER,E),S=Gx(s,s.FRAGMENT_SHADER,b);s.attachShader(g,T),s.attachShader(g,S),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function I(X){if(n.debug.checkShaderErrors){let re=s.getProgramInfoLog(g).trim(),D=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(S).trim(),k=!0,K=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,T,S);else{let j=Vx(s,T,"vertex"),W=Vx(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+j+`
`+W)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(D===""||F==="")&&(K=!1);K&&(X.diagnostics={runnable:k,programLog:re,vertexShader:{log:D,prefix:p},fragmentShader:{log:F,prefix:v}})}s.deleteShader(T),s.deleteShader(S),_=new Go(s,g),A=xA(s,g)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(g,cA)),G},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=S,this}var CA=0,cp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new lp(e),t.set(e,i)),i}},lp=class{constructor(e){this.id=CA++,this.code=e,this.usedTimes=0}};function PA(n,e,t,i,s,r,o){let a=new Mc,l=new cp,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function g(_,A,G,X,re){let D=X.fog,F=re.geometry,k=_.isMeshStandardMaterial?X.environment:null,K=(_.isMeshStandardMaterial?t:e).get(_.envMap||k),j=K&&K.mapping===dh?K.image.height:null,W=m[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let N=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,U=N!==void 0?N.length:0,B=0;F.morphAttributes.position!==void 0&&(B=1),F.morphAttributes.normal!==void 0&&(B=2),F.morphAttributes.color!==void 0&&(B=3);let H,V,ee,he;if(W){let Un=ji[W];H=Un.vertexShader,V=Un.fragmentShader}else H=_.vertexShader,V=_.fragmentShader,l.update(_),ee=l.getVertexShaderID(_),he=l.getFragmentShaderID(_);let fe=n.getRenderTarget(),He=re.isInstancedMesh===!0,Qe=re.isBatchedMesh===!0,De=!!_.map,Je=!!_.matcap,O=!!K,me=!!_.aoMap,ie=!!_.lightMap,de=!!_.bumpMap,ne=!!_.normalMap,Be=!!_.displacementMap,Ee=!!_.emissiveMap,C=!!_.metalnessMap,R=!!_.roughnessMap,q=_.anisotropy>0,le=_.clearcoat>0,ae=_.iridescence>0,oe=_.sheen>0,Ie=_.transmission>0,xe=q&&!!_.anisotropyMap,Se=le&&!!_.clearcoatMap,ze=le&&!!_.clearcoatNormalMap,nt=le&&!!_.clearcoatRoughnessMap,ce=ae&&!!_.iridescenceMap,wt=ae&&!!_.iridescenceThicknessMap,dt=oe&&!!_.sheenColorMap,je=oe&&!!_.sheenRoughnessMap,Fe=!!_.specularMap,Re=!!_.specularColorMap,st=!!_.specularIntensityMap,Ct=Ie&&!!_.transmissionMap,jt=Ie&&!!_.thicknessMap,ut=!!_.gradientMap,ge=!!_.alphaMap,z=_.alphaTest>0,ve=!!_.alphaHash,Me=!!_.extensions,Xe=!!F.attributes.uv1,ke=!!F.attributes.uv2,Ot=!!F.attributes.uv3,Bt=Xs;return _.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Bt=n.toneMapping),{isWebGL2:u,shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:H,fragmentShader:V,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:he,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Qe,instancing:He,instancingColor:He&&re.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ln,map:De,matcap:Je,envMap:O,envMapMode:O&&K.mapping,envMapCubeUVHeight:j,aoMap:me,lightMap:ie,bumpMap:de,normalMap:ne,displacementMap:h&&Be,emissiveMap:Ee,normalMapObjectSpace:ne&&_.normalMapType===US,normalMapTangentSpace:ne&&_.normalMapType===Uy,metalnessMap:C,roughnessMap:R,anisotropy:q,anisotropyMap:xe,clearcoat:le,clearcoatMap:Se,clearcoatNormalMap:ze,clearcoatRoughnessMap:nt,iridescence:ae,iridescenceMap:ce,iridescenceThicknessMap:wt,sheen:oe,sheenColorMap:dt,sheenRoughnessMap:je,specularMap:Fe,specularColorMap:Re,specularIntensityMap:st,transmission:Ie,transmissionMap:Ct,thicknessMap:jt,gradientMap:ut,opaque:_.transparent===!1&&_.blending===zo,alphaMap:ge,alphaTest:z,alphaHash:ve,combine:_.combine,mapUv:De&&x(_.map.channel),aoMapUv:me&&x(_.aoMap.channel),lightMapUv:ie&&x(_.lightMap.channel),bumpMapUv:de&&x(_.bumpMap.channel),normalMapUv:ne&&x(_.normalMap.channel),displacementMapUv:Be&&x(_.displacementMap.channel),emissiveMapUv:Ee&&x(_.emissiveMap.channel),metalnessMapUv:C&&x(_.metalnessMap.channel),roughnessMapUv:R&&x(_.roughnessMap.channel),anisotropyMapUv:xe&&x(_.anisotropyMap.channel),clearcoatMapUv:Se&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ze&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:je&&x(_.sheenRoughnessMap.channel),specularMapUv:Fe&&x(_.specularMap.channel),specularColorMapUv:Re&&x(_.specularColorMap.channel),specularIntensityMapUv:st&&x(_.specularIntensityMap.channel),transmissionMapUv:Ct&&x(_.transmissionMap.channel),thicknessMapUv:jt&&x(_.thicknessMap.channel),alphaMapUv:ge&&x(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ne||q),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Xe,vertexUv2s:ke,vertexUv3s:Ot,pointsUvs:re.isPoints===!0&&!!F.attributes.uv&&(De||ge),fog:!!D,useFog:_.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:re.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:B,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&Mt.getTransfer(_.map.colorSpace)===Nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===tt,flipSided:_.side===Pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:Me&&_.extensions.derivatives===!0,extensionFragDepth:Me&&_.extensions.fragDepth===!0,extensionDrawBuffers:Me&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let G in _.defines)A.push(G),A.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(v(A,_),y(A,_),A.push(n.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function v(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function y(_,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function E(_){let A=m[_.type],G;if(A){let X=ji[A];G=ai.clone(X.uniforms)}else G=_.uniforms;return G}function b(_,A){let G;for(let X=0,re=c.length;X<re;X++){let D=c[X];if(D.cacheKey===A){G=D,++G.usedTimes;break}}return G===void 0&&(G=new RA(n,A,_,r),c.push(G)),G}function T(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),_.destroy()}}function S(_){l.remove(_)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:b,releaseProgram:T,releaseShaderCache:S,programs:c,dispose:I}}function IA(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function LA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $x(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kx(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,f,m,x,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=x,p.group=g),e++,p}function a(d,h,f,m,x,g){let p=o(d,h,f,m,x,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,m,x,g){let p=o(d,h,f,m,x,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||LA),i.length>1&&i.sort(h||$x),s.length>1&&s.sort(h||$x)}function u(){for(let d=e,h=n.length;d<h;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function DA(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Kx,n.set(i,[o])):s>=r.length?(o=new Kx,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function NA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ye};break;case"SpotLight":t={position:new w,direction:new w,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new w,halfWidth:new w,halfHeight:new w};break}return n[e.id]=t,t}}}function HA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var UA=0;function OA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function BA(n,e){let t=new NA,i=HA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new w);let r=new w,o=new Ze,a=new Ze;function l(u,d){let h=0,f=0,m=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let x=0,g=0,p=0,v=0,y=0,E=0,b=0,T=0,S=0,I=0,_=0;u.sort(OA);let A=d===!0?Math.PI:1;for(let X=0,re=u.length;X<re;X++){let D=u[X],F=D.color,k=D.intensity,K=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*k*A,f+=F.g*k*A,m+=F.b*k*A;else if(D.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(D.sh.coefficients[W],k);_++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){let N=D.shadow,U=i.get(D);U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,s.directionalShadow[x]=U,s.directionalShadowMap[x]=j,s.directionalShadowMatrix[x]=D.shadow.matrix,E++}s.directional[x]=W,x++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(F).multiplyScalar(k*A),W.distance=K,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,s.spot[p]=W;let N=D.shadow;if(D.map&&(s.spotLightMap[S]=D.map,S++,N.updateMatrices(D),D.castShadow&&I++),s.spotLightMatrix[p]=N.matrix,D.castShadow){let U=i.get(D);U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,s.spotShadow[p]=U,s.spotShadowMap[p]=j,T++}p++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(F).multiplyScalar(k),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),s.rectArea[v]=W,v++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*A),W.distance=D.distance,W.decay=D.decay,D.castShadow){let N=D.shadow,U=i.get(D);U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,U.shadowCameraNear=N.camera.near,U.shadowCameraFar=N.camera.far,s.pointShadow[g]=U,s.pointShadowMap[g]=j,s.pointShadowMatrix[g]=D.shadow.matrix,b++}s.point[g]=W,g++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(k*A),W.groundColor.copy(D.groundColor).multiplyScalar(k*A),s.hemi[y]=W,y++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=f,s.ambient[2]=m;let G=s.hash;(G.directionalLength!==x||G.pointLength!==g||G.spotLength!==p||G.rectAreaLength!==v||G.hemiLength!==y||G.numDirectionalShadows!==E||G.numPointShadows!==b||G.numSpotShadows!==T||G.numSpotMaps!==S||G.numLightProbes!==_)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=v,s.point.length=g,s.hemi.length=y,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=T+S-I,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=_,G.directionalLength=x,G.pointLength=g,G.spotLength=p,G.rectAreaLength=v,G.hemiLength=y,G.numDirectionalShadows=E,G.numPointShadows=b,G.numSpotShadows=T,G.numSpotMaps=S,G.numLightProbes=_,s.version=UA++)}function c(u,d){let h=0,f=0,m=0,x=0,g=0,p=d.matrixWorldInverse;for(let v=0,y=u.length;v<y;v++){let E=u[v];if(E.isDirectionalLight){let b=s.directional[h];b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),h++}else if(E.isSpotLight){let b=s.spot[m];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(E.isRectAreaLight){let b=s.rectArea[x];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let b=s.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){let b=s.hemi[g];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:s}}function Zx(n,e){let t=new BA(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function FA(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Zx(n,e),t.set(r,[l])):o>=a.length?(l=new Zx(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var up=class extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hp=class extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},zA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GA(n,e,t){let i=new Ec,s=new te,r=new te,o=new At,a=new up({depthPacking:HS}),l=new hp,c={},u=t.maxTextureSize,d={[$n]:Pn,[Pn]:$n,[tt]:tt},h=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:zA,fragmentShader:kA}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new Et;m.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new L(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ty;let p=this.type;this.render=function(T,S,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let _=n.getRenderTarget(),A=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),X=n.state;X.setBlending(es),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let re=p!==xs&&this.type===xs,D=p===xs&&this.type!==xs;for(let F=0,k=T.length;F<k;F++){let K=T[F],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let W=j.getFrameExtents();if(s.multiply(W),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,j.mapSize.y=r.y)),j.map===null||re===!0||D===!0){let U=this.type!==xs?{minFilter:an,magFilter:an}:{};j.map!==null&&j.map.dispose(),j.map=new Sn(s.x,s.y,U),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();let N=j.getViewportCount();for(let U=0;U<N;U++){let B=j.getViewport(U);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),X.viewport(o),j.updateMatrices(K,U),i=j.getFrustum(),E(S,I,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===xs&&v(j,I),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(_,A,G)};function v(T,S){let I=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Sn(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(S,null,I,h,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(S,null,I,f,x,null)}function y(T,S,I,_){let A=null,G=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0)A=G;else if(A=I.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let X=A.uuid,re=S.uuid,D=c[X];D===void 0&&(D={},c[X]=D);let F=D[re];F===void 0&&(F=A.clone(),D[re]=F,S.addEventListener("dispose",b)),A=F}if(A.visible=S.visible,A.wireframe=S.wireframe,_===xs?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:d[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let X=n.properties.get(A);X.light=I}return A}function E(T,S,I,_,A){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===xs)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let re=e.update(T),D=T.material;if(Array.isArray(D)){let F=re.groups;for(let k=0,K=F.length;k<K;k++){let j=F[k],W=D[j.materialIndex];if(W&&W.visible){let N=y(T,W,_,A);T.onBeforeShadow(n,T,S,I,re,N,j),n.renderBufferDirect(I,null,re,N,T,j),T.onAfterShadow(n,T,S,I,re,N,j)}}}else if(D.visible){let F=y(T,D,_,A);T.onBeforeShadow(n,T,S,I,re,F,null),n.renderBufferDirect(I,null,re,F,T,null),T.onAfterShadow(n,T,S,I,re,F,null)}}let X=T.children;for(let re=0,D=X.length;re<D;re++)E(X[re],S,I,_,A)}function b(T){T.target.removeEventListener("dispose",b);for(let I in c){let _=c[I],A=T.target.uuid;A in _&&(_[A].dispose(),delete _[A])}}}function VA(n,e,t){let i=t.isWebGL2;function s(){let z=!1,ve=new At,Me=null,Xe=new At(0,0,0,0);return{setMask:function(ke){Me!==ke&&!z&&(n.colorMask(ke,ke,ke,ke),Me=ke)},setLocked:function(ke){z=ke},setClear:function(ke,Ot,Bt,gn,Un){Un===!0&&(ke*=gn,Ot*=gn,Bt*=gn),ve.set(ke,Ot,Bt,gn),Xe.equals(ve)===!1&&(n.clearColor(ke,Ot,Bt,gn),Xe.copy(ve))},reset:function(){z=!1,Me=null,Xe.set(-1,0,0,0)}}}function r(){let z=!1,ve=null,Me=null,Xe=null;return{setTest:function(ke){ke?Qe(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(ke){ve!==ke&&!z&&(n.depthMask(ke),ve=ke)},setFunc:function(ke){if(Me!==ke){switch(ke){case pS:n.depthFunc(n.NEVER);break;case mS:n.depthFunc(n.ALWAYS);break;case gS:n.depthFunc(n.LESS);break;case Iu:n.depthFunc(n.LEQUAL);break;case xS:n.depthFunc(n.EQUAL);break;case yS:n.depthFunc(n.GEQUAL);break;case vS:n.depthFunc(n.GREATER);break;case MS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=ke}},setLocked:function(ke){z=ke},setClear:function(ke){Xe!==ke&&(n.clearDepth(ke),Xe=ke)},reset:function(){z=!1,ve=null,Me=null,Xe=null}}}function o(){let z=!1,ve=null,Me=null,Xe=null,ke=null,Ot=null,Bt=null,gn=null,Un=null;return{setTest:function(Ft){z||(Ft?Qe(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(Ft){ve!==Ft&&!z&&(n.stencilMask(Ft),ve=Ft)},setFunc:function(Ft,On,Ji){(Me!==Ft||Xe!==On||ke!==Ji)&&(n.stencilFunc(Ft,On,Ji),Me=Ft,Xe=On,ke=Ji)},setOp:function(Ft,On,Ji){(Ot!==Ft||Bt!==On||gn!==Ji)&&(n.stencilOp(Ft,On,Ji),Ot=Ft,Bt=On,gn=Ji)},setLocked:function(Ft){z=Ft},setClear:function(Ft){Un!==Ft&&(n.clearStencil(Ft),Un=Ft)},reset:function(){z=!1,ve=null,Me=null,Xe=null,ke=null,Ot=null,Bt=null,gn=null,Un=null}}}let a=new s,l=new r,c=new o,u=new WeakMap,d=new WeakMap,h={},f={},m=new WeakMap,x=[],g=null,p=!1,v=null,y=null,E=null,b=null,T=null,S=null,I=null,_=new ye(0,0,0),A=0,G=!1,X=null,re=null,D=null,F=null,k=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,W=0,N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=W>=1):N.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=W>=2);let U=null,B={},H=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),ee=new At().fromArray(H),he=new At().fromArray(V);function fe(z,ve,Me,Xe){let ke=new Uint8Array(4),Ot=n.createTexture();n.bindTexture(z,Ot),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<Me;Bt++)i&&(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,Xe,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(ve+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return Ot}let He={};He[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),He[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(He[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),He[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Qe(n.DEPTH_TEST),l.setFunc(Iu),Ee(!1),C(Ig),Qe(n.CULL_FACE),ne(es);function Qe(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function De(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function Je(z,ve){return f[z]!==ve?(n.bindFramebuffer(z,ve),f[z]=ve,i&&(z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ve),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function O(z,ve){let Me=x,Xe=!1;if(z)if(Me=m.get(ve),Me===void 0&&(Me=[],m.set(ve,Me)),z.isWebGLMultipleRenderTargets){let ke=z.texture;if(Me.length!==ke.length||Me[0]!==n.COLOR_ATTACHMENT0){for(let Ot=0,Bt=ke.length;Ot<Bt;Ot++)Me[Ot]=n.COLOR_ATTACHMENT0+Ot;Me.length=ke.length,Xe=!0}}else Me[0]!==n.COLOR_ATTACHMENT0&&(Me[0]=n.COLOR_ATTACHMENT0,Xe=!0);else Me[0]!==n.BACK&&(Me[0]=n.BACK,Xe=!0);Xe&&(t.isWebGL2?n.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function me(z){return g!==z?(n.useProgram(z),g=z,!0):!1}let ie={[Dr]:n.FUNC_ADD,[Q_]:n.FUNC_SUBTRACT,[eS]:n.FUNC_REVERSE_SUBTRACT};if(i)ie[Ng]=n.MIN,ie[Hg]=n.MAX;else{let z=e.get("EXT_blend_minmax");z!==null&&(ie[Ng]=z.MIN_EXT,ie[Hg]=z.MAX_EXT)}let de={[tS]:n.ZERO,[nS]:n.ONE,[iS]:n.SRC_COLOR,[$f]:n.SRC_ALPHA,[lS]:n.SRC_ALPHA_SATURATE,[aS]:n.DST_COLOR,[rS]:n.DST_ALPHA,[sS]:n.ONE_MINUS_SRC_COLOR,[Kf]:n.ONE_MINUS_SRC_ALPHA,[cS]:n.ONE_MINUS_DST_COLOR,[oS]:n.ONE_MINUS_DST_ALPHA,[uS]:n.CONSTANT_COLOR,[hS]:n.ONE_MINUS_CONSTANT_COLOR,[dS]:n.CONSTANT_ALPHA,[fS]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(z,ve,Me,Xe,ke,Ot,Bt,gn,Un,Ft){if(z===es){p===!0&&(De(n.BLEND),p=!1);return}if(p===!1&&(Qe(n.BLEND),p=!0),z!==j_){if(z!==v||Ft!==G){if((y!==Dr||T!==Dr)&&(n.blendEquation(n.FUNC_ADD),y=Dr,T=Dr),Ft)switch(z){case zo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $e:n.blendFunc(n.ONE,n.ONE);break;case Lg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case zo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $e:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}E=null,b=null,S=null,I=null,_.set(0,0,0),A=0,v=z,G=Ft}return}ke=ke||ve,Ot=Ot||Me,Bt=Bt||Xe,(ve!==y||ke!==T)&&(n.blendEquationSeparate(ie[ve],ie[ke]),y=ve,T=ke),(Me!==E||Xe!==b||Ot!==S||Bt!==I)&&(n.blendFuncSeparate(de[Me],de[Xe],de[Ot],de[Bt]),E=Me,b=Xe,S=Ot,I=Bt),(gn.equals(_)===!1||Un!==A)&&(n.blendColor(gn.r,gn.g,gn.b,Un),_.copy(gn),A=Un),v=z,G=!1}function Be(z,ve){z.side===tt?De(n.CULL_FACE):Qe(n.CULL_FACE);let Me=z.side===Pn;ve&&(Me=!Me),Ee(Me),z.blending===zo&&z.transparent===!1?ne(es):ne(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);let Xe=z.stencilWrite;c.setTest(Xe),Xe&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),q(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Qe(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(z){X!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),X=z)}function C(z){z!==Z_?(Qe(n.CULL_FACE),z!==re&&(z===Ig?n.cullFace(n.BACK):z===J_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),re=z}function R(z){z!==D&&(j&&n.lineWidth(z),D=z)}function q(z,ve,Me){z?(Qe(n.POLYGON_OFFSET_FILL),(F!==ve||k!==Me)&&(n.polygonOffset(ve,Me),F=ve,k=Me)):De(n.POLYGON_OFFSET_FILL)}function le(z){z?Qe(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function ae(z){z===void 0&&(z=n.TEXTURE0+K-1),U!==z&&(n.activeTexture(z),U=z)}function oe(z,ve,Me){Me===void 0&&(U===null?Me=n.TEXTURE0+K-1:Me=U);let Xe=B[Me];Xe===void 0&&(Xe={type:void 0,texture:void 0},B[Me]=Xe),(Xe.type!==z||Xe.texture!==ve)&&(U!==Me&&(n.activeTexture(Me),U=Me),n.bindTexture(z,ve||He[z]),Xe.type=z,Xe.texture=ve)}function Ie(){let z=B[U];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function je(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(z){ee.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),ee.copy(z))}function Ct(z){he.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),he.copy(z))}function jt(z,ve){let Me=d.get(ve);Me===void 0&&(Me=new WeakMap,d.set(ve,Me));let Xe=Me.get(z);Xe===void 0&&(Xe=n.getUniformBlockIndex(ve,z.name),Me.set(z,Xe))}function ut(z,ve){let Xe=d.get(ve).get(z);u.get(ve)!==Xe&&(n.uniformBlockBinding(ve,Xe,z.__bindingPointIndex),u.set(ve,Xe))}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},U=null,B={},f={},m=new WeakMap,x=[],g=null,p=!1,v=null,y=null,E=null,b=null,T=null,S=null,I=null,_=new ye(0,0,0),A=0,G=!1,X=null,re=null,D=null,F=null,k=null,ee.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Qe,disable:De,bindFramebuffer:Je,drawBuffers:O,useProgram:me,setBlending:ne,setMaterial:Be,setFlipSided:Ee,setCullFace:C,setLineWidth:R,setPolygonOffset:q,setScissorTest:le,activeTexture:ae,bindTexture:oe,unbindTexture:Ie,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:Fe,texImage3D:Re,updateUBOMapping:jt,uniformBlockBinding:ut,texStorage2D:dt,texStorage3D:je,texSubImage2D:ze,texSubImage3D:nt,compressedTexSubImage2D:ce,compressedTexSubImage3D:wt,scissor:st,viewport:Ct,reset:ge}}function WA(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,R){return f?new OffscreenCanvas(C,R):vc("canvas")}function x(C,R,q,le){let ae=1;if((C.width>le||C.height>le)&&(ae=le/Math.max(C.width,C.height)),ae<1||R===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let oe=R?Ou:Math.floor,Ie=oe(ae*C.width),xe=oe(ae*C.height);d===void 0&&(d=m(Ie,xe));let Se=q?m(Ie,xe):d;return Se.width=Ie,Se.height=xe,Se.getContext("2d").drawImage(C,0,0,Ie,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ie+"x"+xe+")."),Se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Qf(C.width)&&Qf(C.height)}function p(C){return a?!1:C.wrapS!==oi||C.wrapT!==oi||C.minFilter!==an&&C.minFilter!==zn}function v(C,R){return C.generateMipmaps&&R&&C.minFilter!==an&&C.minFilter!==zn}function y(C){n.generateMipmap(C)}function E(C,R,q,le,ae=!1){if(a===!1)return R;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=R;if(R===n.RED&&(q===n.FLOAT&&(oe=n.R32F),q===n.HALF_FLOAT&&(oe=n.R16F),q===n.UNSIGNED_BYTE&&(oe=n.R8)),R===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(oe=n.R8UI),q===n.UNSIGNED_SHORT&&(oe=n.R16UI),q===n.UNSIGNED_INT&&(oe=n.R32UI),q===n.BYTE&&(oe=n.R8I),q===n.SHORT&&(oe=n.R16I),q===n.INT&&(oe=n.R32I)),R===n.RG&&(q===n.FLOAT&&(oe=n.RG32F),q===n.HALF_FLOAT&&(oe=n.RG16F),q===n.UNSIGNED_BYTE&&(oe=n.RG8)),R===n.RGBA){let Ie=ae?Du:Mt.getTransfer(le);q===n.FLOAT&&(oe=n.RGBA32F),q===n.HALF_FLOAT&&(oe=n.RGBA16F),q===n.UNSIGNED_BYTE&&(oe=Ie===Nt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function b(C,R,q){return v(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==zn?Math.log2(Math.max(R.width,R.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?R.mipmaps.length:1}function T(C){return C===an||C===Lu||C===uc?n.NEAREST:n.LINEAR}function S(C){let R=C.target;R.removeEventListener("dispose",S),_(R),R.isVideoTexture&&u.delete(R)}function I(C){let R=C.target;R.removeEventListener("dispose",I),G(R)}function _(C){let R=i.get(C);if(R.__webglInit===void 0)return;let q=C.source,le=h.get(q);if(le){let ae=le[R.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(C),Object.keys(le).length===0&&h.delete(q)}i.remove(C)}function A(C){let R=i.get(C);n.deleteTexture(R.__webglTexture);let q=C.source,le=h.get(q);delete le[R.__cacheKey],o.memory.textures--}function G(C){let R=C.texture,q=i.get(C),le=i.get(R);if(le.__webglTexture!==void 0&&(n.deleteTexture(le.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(q.__webglFramebuffer[ae]))for(let oe=0;oe<q.__webglFramebuffer[ae].length;oe++)n.deleteFramebuffer(q.__webglFramebuffer[ae][oe]);else n.deleteFramebuffer(q.__webglFramebuffer[ae]);q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[ae])}else{if(Array.isArray(q.__webglFramebuffer))for(let ae=0;ae<q.__webglFramebuffer.length;ae++)n.deleteFramebuffer(q.__webglFramebuffer[ae]);else n.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ae=0;ae<q.__webglColorRenderbuffer.length;ae++)q.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[ae]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ae=0,oe=R.length;ae<oe;ae++){let Ie=i.get(R[ae]);Ie.__webglTexture&&(n.deleteTexture(Ie.__webglTexture),o.memory.textures--),i.remove(R[ae])}i.remove(R),i.remove(C)}let X=0;function re(){X=0}function D(){let C=X;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),X+=1,C}function F(C){let R=[];return R.push(C.wrapS),R.push(C.wrapT),R.push(C.wrapR||0),R.push(C.magFilter),R.push(C.minFilter),R.push(C.anisotropy),R.push(C.internalFormat),R.push(C.format),R.push(C.type),R.push(C.generateMipmaps),R.push(C.premultiplyAlpha),R.push(C.flipY),R.push(C.unpackAlignment),R.push(C.colorSpace),R.join()}function k(C,R){let q=i.get(C);if(C.isVideoTexture&&Be(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let le=C.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(q,C,R);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+R)}function K(C,R){let q=i.get(C);if(C.version>0&&q.__version!==C.version){ee(q,C,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+R)}function j(C,R){let q=i.get(C);if(C.version>0&&q.__version!==C.version){ee(q,C,R);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+R)}function W(C,R){let q=i.get(C);if(C.version>0&&q.__version!==C.version){he(q,C,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+R)}let N={[Oi]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[xc]:n.MIRRORED_REPEAT},U={[an]:n.NEAREST,[Lu]:n.NEAREST_MIPMAP_NEAREST,[uc]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[Wp]:n.LINEAR_MIPMAP_NEAREST,[$s]:n.LINEAR_MIPMAP_LINEAR},B={[OS]:n.NEVER,[VS]:n.ALWAYS,[BS]:n.LESS,[Oy]:n.LEQUAL,[FS]:n.EQUAL,[GS]:n.GEQUAL,[zS]:n.GREATER,[kS]:n.NOTEQUAL};function H(C,R,q){if(q?(n.texParameteri(C,n.TEXTURE_WRAP_S,N[R.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,N[R.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,N[R.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,U[R.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,U[R.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(R.wrapS!==oi||R.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,T(R.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,T(R.minFilter)),R.minFilter!==an&&R.minFilter!==zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,B[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let le=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===an||R.minFilter!==uc&&R.minFilter!==$s||R.type===ys&&e.has("OES_texture_float_linear")===!1||a===!1&&R.type===Bi&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||i.get(R).__currentAnisotropy)&&(n.texParameterf(C,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy)}}function V(C,R){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,R.addEventListener("dispose",S));let le=R.source,ae=h.get(le);ae===void 0&&(ae={},h.set(le,ae));let oe=F(R);if(oe!==C.__cacheKey){ae[oe]===void 0&&(ae[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ae[oe].usedTimes++;let Ie=ae[C.__cacheKey];Ie!==void 0&&(ae[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&A(R)),C.__cacheKey=oe,C.__webglTexture=ae[oe].texture}return q}function ee(C,R,q){let le=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(le=n.TEXTURE_3D);let ae=V(C,R),oe=R.source;t.bindTexture(le,C.__webglTexture,n.TEXTURE0+q);let Ie=i.get(oe);if(oe.version!==Ie.__version||ae===!0){t.activeTexture(n.TEXTURE0+q);let xe=Mt.getPrimaries(Mt.workingColorSpace),Se=R.colorSpace===kn?null:Mt.getPrimaries(R.colorSpace),ze=R.colorSpace===kn||xe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let nt=p(R)&&g(R.image)===!1,ce=x(R.image,nt,!1,s.maxTextureSize);ce=Ee(R,ce);let wt=g(ce)||a,dt=r.convert(R.format,R.colorSpace),je=r.convert(R.type),Fe=E(R.internalFormat,dt,je,R.colorSpace,R.isVideoTexture);H(le,R,wt);let Re,st=R.mipmaps,Ct=a&&R.isVideoTexture!==!0&&Fe!==Dy,jt=Ie.__version===void 0||ae===!0,ut=b(R,ce,wt);if(R.isDepthTexture)Fe=n.DEPTH_COMPONENT,a?R.type===ys?Fe=n.DEPTH_COMPONENT32F:R.type===Vs?Fe=n.DEPTH_COMPONENT24:R.type===Ur?Fe=n.DEPTH24_STENCIL8:Fe=n.DEPTH_COMPONENT16:R.type===ys&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Or&&Fe===n.DEPTH_COMPONENT&&R.type!==Xp&&R.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Vs,je=r.convert(R.type)),R.format===Xo&&Fe===n.DEPTH_COMPONENT&&(Fe=n.DEPTH_STENCIL,R.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Ur,je=r.convert(R.type))),jt&&(Ct?t.texStorage2D(n.TEXTURE_2D,1,Fe,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Fe,ce.width,ce.height,0,dt,je,null));else if(R.isDataTexture)if(st.length>0&&wt){Ct&&jt&&t.texStorage2D(n.TEXTURE_2D,ut,Fe,st[0].width,st[0].height);for(let ge=0,z=st.length;ge<z;ge++)Re=st[ge],Ct?t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Re.width,Re.height,dt,je,Re.data):t.texImage2D(n.TEXTURE_2D,ge,Fe,Re.width,Re.height,0,dt,je,Re.data);R.generateMipmaps=!1}else Ct?(jt&&t.texStorage2D(n.TEXTURE_2D,ut,Fe,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,dt,je,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,ce.width,ce.height,0,dt,je,ce.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ct&&jt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Fe,st[0].width,st[0].height,ce.depth);for(let ge=0,z=st.length;ge<z;ge++)Re=st[ge],R.format!==gi?dt!==null?Ct?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,ce.depth,dt,Re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Fe,Re.width,Re.height,ce.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,ce.depth,dt,je,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Fe,Re.width,Re.height,ce.depth,0,dt,je,Re.data)}else{Ct&&jt&&t.texStorage2D(n.TEXTURE_2D,ut,Fe,st[0].width,st[0].height);for(let ge=0,z=st.length;ge<z;ge++)Re=st[ge],R.format!==gi?dt!==null?Ct?t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Re.width,Re.height,dt,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Fe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Re.width,Re.height,dt,je,Re.data):t.texImage2D(n.TEXTURE_2D,ge,Fe,Re.width,Re.height,0,dt,je,Re.data)}else if(R.isDataArrayTexture)Ct?(jt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Fe,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,dt,je,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,ce.width,ce.height,ce.depth,0,dt,je,ce.data);else if(R.isData3DTexture)Ct?(jt&&t.texStorage3D(n.TEXTURE_3D,ut,Fe,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,dt,je,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,ce.width,ce.height,ce.depth,0,dt,je,ce.data);else if(R.isFramebufferTexture){if(jt)if(Ct)t.texStorage2D(n.TEXTURE_2D,ut,Fe,ce.width,ce.height);else{let ge=ce.width,z=ce.height;for(let ve=0;ve<ut;ve++)t.texImage2D(n.TEXTURE_2D,ve,Fe,ge,z,0,dt,je,null),ge>>=1,z>>=1}}else if(st.length>0&&wt){Ct&&jt&&t.texStorage2D(n.TEXTURE_2D,ut,Fe,st[0].width,st[0].height);for(let ge=0,z=st.length;ge<z;ge++)Re=st[ge],Ct?t.texSubImage2D(n.TEXTURE_2D,ge,0,0,dt,je,Re):t.texImage2D(n.TEXTURE_2D,ge,Fe,dt,je,Re);R.generateMipmaps=!1}else Ct?(jt&&t.texStorage2D(n.TEXTURE_2D,ut,Fe,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,je,ce)):t.texImage2D(n.TEXTURE_2D,0,Fe,dt,je,ce);v(R,wt)&&y(le),Ie.__version=oe.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function he(C,R,q){if(R.image.length!==6)return;let le=V(C,R),ae=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+q);let oe=i.get(ae);if(ae.version!==oe.__version||le===!0){t.activeTexture(n.TEXTURE0+q);let Ie=Mt.getPrimaries(Mt.workingColorSpace),xe=R.colorSpace===kn?null:Mt.getPrimaries(R.colorSpace),Se=R.colorSpace===kn||Ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ze=R.isCompressedTexture||R.image[0].isCompressedTexture,nt=R.image[0]&&R.image[0].isDataTexture,ce=[];for(let ge=0;ge<6;ge++)!ze&&!nt?ce[ge]=x(R.image[ge],!1,!0,s.maxCubemapSize):ce[ge]=nt?R.image[ge].image:R.image[ge],ce[ge]=Ee(R,ce[ge]);let wt=ce[0],dt=g(wt)||a,je=r.convert(R.format,R.colorSpace),Fe=r.convert(R.type),Re=E(R.internalFormat,je,Fe,R.colorSpace),st=a&&R.isVideoTexture!==!0,Ct=oe.__version===void 0||le===!0,jt=b(R,wt,dt);H(n.TEXTURE_CUBE_MAP,R,dt);let ut;if(ze){st&&Ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,jt,Re,wt.width,wt.height);for(let ge=0;ge<6;ge++){ut=ce[ge].mipmaps;for(let z=0;z<ut.length;z++){let ve=ut[z];R.format!==gi?je!==null?st?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z,0,0,ve.width,ve.height,je,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z,0,0,ve.width,ve.height,je,Fe,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z,Re,ve.width,ve.height,0,je,Fe,ve.data)}}}else{ut=R.mipmaps,st&&Ct&&(ut.length>0&&jt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,jt,Re,ce[0].width,ce[0].height));for(let ge=0;ge<6;ge++)if(nt){st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ce[ge].width,ce[ge].height,je,Fe,ce[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Re,ce[ge].width,ce[ge].height,0,je,Fe,ce[ge].data);for(let z=0;z<ut.length;z++){let Me=ut[z].image[ge].image;st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z+1,0,0,Me.width,Me.height,je,Fe,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z+1,Re,Me.width,Me.height,0,je,Fe,Me.data)}}else{st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,je,Fe,ce[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Re,je,Fe,ce[ge]);for(let z=0;z<ut.length;z++){let ve=ut[z];st?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z+1,0,0,je,Fe,ve.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z+1,Re,je,Fe,ve.image[ge])}}}v(R,dt)&&y(n.TEXTURE_CUBE_MAP),oe.__version=ae.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function fe(C,R,q,le,ae,oe){let Ie=r.convert(q.format,q.colorSpace),xe=r.convert(q.type),Se=E(q.internalFormat,Ie,xe,q.colorSpace);if(!i.get(R).__hasExternalTextures){let nt=Math.max(1,R.width>>oe),ce=Math.max(1,R.height>>oe);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,oe,Se,nt,ce,R.depth,0,Ie,xe,null):t.texImage2D(ae,oe,Se,nt,ce,0,Ie,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ne(R)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ae,i.get(q).__webglTexture,0,de(R)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,ae,i.get(q).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(C,R,q){if(n.bindRenderbuffer(n.RENDERBUFFER,C),R.depthBuffer&&!R.stencilBuffer){let le=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||ne(R)){let ae=R.depthTexture;ae&&ae.isDepthTexture&&(ae.type===ys?le=n.DEPTH_COMPONENT32F:ae.type===Vs&&(le=n.DEPTH_COMPONENT24));let oe=de(R);ne(R)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,le,R.width,R.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,le,R.width,R.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,R.width,R.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(R.depthBuffer&&R.stencilBuffer){let le=de(R);q&&ne(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,R.width,R.height):ne(R)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let le=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ae=0;ae<le.length;ae++){let oe=le[ae],Ie=r.convert(oe.format,oe.colorSpace),xe=r.convert(oe.type),Se=E(oe.internalFormat,Ie,xe,oe.colorSpace),ze=de(R);q&&ne(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Se,R.width,R.height):ne(R)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,Se,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Se,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Qe(C,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),k(R.depthTexture,0);let le=i.get(R.depthTexture).__webglTexture,ae=de(R);if(R.depthTexture.format===Or)ne(R)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(R.depthTexture.format===Xo)ne(R)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function De(C){let R=i.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!R.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Qe(R.__webglFramebuffer,C)}else if(q){R.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[le]),R.__webglDepthbuffer[le]=n.createRenderbuffer(),He(R.__webglDepthbuffer[le],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=n.createRenderbuffer(),He(R.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(C,R,q){let le=i.get(C);R!==void 0&&fe(le.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&De(C)}function O(C){let R=C.texture,q=i.get(C),le=i.get(R);C.addEventListener("dispose",I),C.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=R.version,o.memory.textures++);let ae=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,Ie=g(C)||a;if(ae){q.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer[xe]=[];for(let Se=0;Se<R.mipmaps.length;Se++)q.__webglFramebuffer[xe][Se]=n.createFramebuffer()}else q.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(a&&R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer=[];for(let xe=0;xe<R.mipmaps.length;xe++)q.__webglFramebuffer[xe]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(oe)if(s.drawBuffers){let xe=C.texture;for(let Se=0,ze=xe.length;Se<ze;Se++){let nt=i.get(xe[Se]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ne(C)===!1){let xe=oe?R:[R];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Se=0;Se<xe.length;Se++){let ze=xe[Se];q.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Se]);let nt=r.convert(ze.format,ze.colorSpace),ce=r.convert(ze.type),wt=E(ze.internalFormat,nt,ce,ze.colorSpace,C.isXRRenderTarget===!0),dt=de(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,wt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,q.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),He(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),H(n.TEXTURE_CUBE_MAP,R,Ie);for(let xe=0;xe<6;xe++)if(a&&R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)fe(q.__webglFramebuffer[xe][Se],C,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else fe(q.__webglFramebuffer[xe],C,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(R,Ie)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let xe=C.texture;for(let Se=0,ze=xe.length;Se<ze;Se++){let nt=xe[Se],ce=i.get(nt);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),H(n.TEXTURE_2D,nt,Ie),fe(q.__webglFramebuffer,C,nt,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),v(nt,Ie)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?xe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,le.__webglTexture),H(xe,R,Ie),a&&R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)fe(q.__webglFramebuffer[Se],C,R,n.COLOR_ATTACHMENT0,xe,Se);else fe(q.__webglFramebuffer,C,R,n.COLOR_ATTACHMENT0,xe,0);v(R,Ie)&&y(xe),t.unbindTexture()}C.depthBuffer&&De(C)}function me(C){let R=g(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let le=0,ae=q.length;le<ae;le++){let oe=q[le];if(v(oe,R)){let Ie=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(oe).__webglTexture;t.bindTexture(Ie,xe),y(Ie),t.unbindTexture()}}}function ie(C){if(a&&C.samples>0&&ne(C)===!1){let R=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,le=C.height,ae=n.COLOR_BUFFER_BIT,oe=[],Ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(C),Se=C.isWebGLMultipleRenderTargets===!0;if(Se)for(let ze=0;ze<R.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ze=0;ze<R.length;ze++){oe.push(n.COLOR_ATTACHMENT0+ze),C.depthBuffer&&oe.push(Ie);let nt=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(nt===!1&&(C.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),Se&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ze]),nt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ie]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ie])),Se){let ce=i.get(R[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,q,le,0,0,q,le,ae,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let ze=0;ze<R.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ze]);let nt=i.get(R[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function de(C){return Math.min(s.maxSamples,C.samples)}function ne(C){let R=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Be(C){let R=o.render.frame;u.get(C)!==R&&(u.set(C,R),C.update())}function Ee(C,R){let q=C.colorSpace,le=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===jf||q!==ln&&q!==kn&&(Mt.getTransfer(q)===Nt?a===!1?e.has("EXT_sRGB")===!0&&le===gi?(C.format=jf,C.minFilter=zn,C.generateMipmaps=!1):R=Bu.sRGBToLinear(R):(le!==gi||ae!==Ys)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),R}this.allocateTextureUnit=D,this.resetTextureUnits=re,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Je,this.setupRenderTarget=O,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ne}function XA(n,e,t){let i=t.isWebGL2;function s(r,o=kn){let a,l=Mt.getTransfer(o);if(r===Ys)return n.UNSIGNED_BYTE;if(r===Ry)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Cy)return n.UNSIGNED_SHORT_5_5_5_1;if(r===wS)return n.BYTE;if(r===bS)return n.SHORT;if(r===Xp)return n.UNSIGNED_SHORT;if(r===Ay)return n.INT;if(r===Vs)return n.UNSIGNED_INT;if(r===ys)return n.FLOAT;if(r===Bi)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===AS)return n.ALPHA;if(r===gi)return n.RGBA;if(r===RS)return n.LUMINANCE;if(r===CS)return n.LUMINANCE_ALPHA;if(r===Or)return n.DEPTH_COMPONENT;if(r===Xo)return n.DEPTH_STENCIL;if(r===jf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===PS)return n.RED;if(r===Py)return n.RED_INTEGER;if(r===IS)return n.RG;if(r===Iy)return n.RG_INTEGER;if(r===Ly)return n.RGBA_INTEGER;if(r===hf||r===df||r===ff||r===pf)if(l===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===hf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===df)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ff)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===hf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===df)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ff)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Og||r===Bg||r===Fg||r===zg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Og)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===kg||r===Gg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===kg)return l===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Gg)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vg||r===Wg||r===Xg||r===Yg||r===qg||r===$g||r===Kg||r===Zg||r===Jg||r===jg||r===Qg||r===ex||r===tx||r===nx)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Vg)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wg)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xg)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yg)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qg)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$g)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kg)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zg)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jg)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jg)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qg)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ex)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tx)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nx)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mf||r===ix||r===sx)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===mf)return l===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ix)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sx)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===LS||r===rx||r===ox||r===ax)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===mf)return a.COMPRESSED_RED_RGTC1_EXT;if(r===rx)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ox)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ax)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ur?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var dp=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ve=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},YA={type:"move"},pc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ve;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},fp=class extends Ks{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null,x=t.getContextAttributes(),g=null,p=null,v=[],y=[],E=new te,b=null,T=new nn;T.layers.enable(1),T.viewport=new At;let S=new nn;S.layers.enable(2),S.viewport=new At;let I=[T,S],_=new dp;_.layers.enable(1),_.layers.enable(2);let A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let V=v[H];return V===void 0&&(V=new pc,v[H]=V),V.getTargetRaySpace()},this.getControllerGrip=function(H){let V=v[H];return V===void 0&&(V=new pc,v[H]=V),V.getGripSpace()},this.getHand=function(H){let V=v[H];return V===void 0&&(V=new pc,v[H]=V),V.getHandSpace()};function X(H){let V=y.indexOf(H.inputSource);if(V===-1)return;let ee=v[V];ee!==void 0&&(ee.update(H.inputSource,H.frame,c||o),ee.dispatchEvent({type:H.type,data:H.inputSource}))}function re(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",D);for(let H=0;H<v.length;H++){let V=y[H];V!==null&&(y[H]=null,v[H].disconnect(V))}A=null,G=null,e.setRenderTarget(g),f=null,h=null,d=null,s=null,p=null,B.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",re),s.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let V={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,V),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Sn(f.framebufferWidth,f.framebufferHeight,{format:gi,type:Ys,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let V=null,ee=null,he=null;x.depth&&(he=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=x.stencil?Xo:Or,ee=x.stencil?Ur:Vs);let fe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(fe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new Sn(h.textureWidth,h.textureHeight,{format:gi,type:Ys,depthTexture:new Yu(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let He=e.properties.get(p);He.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),B.setContext(s),B.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(H){for(let V=0;V<H.removed.length;V++){let ee=H.removed[V],he=y.indexOf(ee);he>=0&&(y[he]=null,v[he].disconnect(ee))}for(let V=0;V<H.added.length;V++){let ee=H.added[V],he=y.indexOf(ee);if(he===-1){for(let He=0;He<v.length;He++)if(He>=y.length){y.push(ee),he=He;break}else if(y[He]===null){y[He]=ee,he=He;break}if(he===-1)break}let fe=v[he];fe&&fe.connect(ee)}}let F=new w,k=new w;function K(H,V,ee){F.setFromMatrixPosition(V.matrixWorld),k.setFromMatrixPosition(ee.matrixWorld);let he=F.distanceTo(k),fe=V.projectionMatrix.elements,He=ee.projectionMatrix.elements,Qe=fe[14]/(fe[10]-1),De=fe[14]/(fe[10]+1),Je=(fe[9]+1)/fe[5],O=(fe[9]-1)/fe[5],me=(fe[8]-1)/fe[0],ie=(He[8]+1)/He[0],de=Qe*me,ne=Qe*ie,Be=he/(-me+ie),Ee=Be*-me;V.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ee),H.translateZ(Be),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let C=Qe+Be,R=De+Be,q=de-Ee,le=ne+(he-Ee),ae=Je*De/R*C,oe=O*De/R*C;H.projectionMatrix.makePerspective(q,le,ae,oe,C,R),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function j(H,V){V===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(V.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;_.near=S.near=T.near=H.near,_.far=S.far=T.far=H.far,(A!==_.near||G!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,G=_.far);let V=H.parent,ee=_.cameras;j(_,V);for(let he=0;he<ee.length;he++)j(ee[he],V);ee.length===2?K(_,T,S):_.projectionMatrix.copy(T.projectionMatrix),W(H,_,V)};function W(H,V,ee){ee===null?H.matrix.copy(V.matrixWorld):(H.matrix.copy(ee.matrixWorld),H.matrix.invert(),H.matrix.multiply(V.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(V.projectionMatrix),H.projectionMatrixInverse.copy(V.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=qo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)};let N=null;function U(H,V){if(u=V.getViewerPose(c||o),m=V,u!==null){let ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let he=!1;ee.length!==_.cameras.length&&(_.cameras.length=0,he=!0);for(let fe=0;fe<ee.length;fe++){let He=ee[fe],Qe=null;if(f!==null)Qe=f.getViewport(He);else{let Je=d.getViewSubImage(h,He);Qe=Je.viewport,fe===0&&(e.setRenderTargetTextures(p,Je.colorTexture,h.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(p))}let De=I[fe];De===void 0&&(De=new nn,De.layers.enable(fe),De.viewport=new At,I[fe]=De),De.matrix.fromArray(He.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(He.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),fe===0&&(_.matrix.copy(De.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),he===!0&&_.cameras.push(De)}}for(let ee=0;ee<v.length;ee++){let he=y[ee],fe=v[ee];he!==null&&fe!==void 0&&fe.update(he,V,c||o)}N&&N(H,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),m=null}let B=new ky;B.setAnimationLoop(U),this.setAnimationLoop=function(H){N=H},this.dispose=function(){}}};function qA(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,zy(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,y,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,E)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $A(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){let E=y.program;i.uniformBlockBinding(v,E)}function c(v,y){let E=s[v.id];E===void 0&&(m(v),E=u(v),s[v.id]=E,v.addEventListener("dispose",g));let b=y.program;i.updateUBOMapping(v,b);let T=e.render.frame;r[v.id]!==T&&(h(v),r[v.id]=T)}function u(v){let y=d();v.__bindingPointIndex=y;let E=n.createBuffer(),b=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,b,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let y=s[v.id],E=v.uniforms,b=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,S=E.length;T<S;T++){let I=Array.isArray(E[T])?E[T]:[E[T]];for(let _=0,A=I.length;_<A;_++){let G=I[_];if(f(G,T,_,b)===!0){let X=G.__offset,re=Array.isArray(G.value)?G.value:[G.value],D=0;for(let F=0;F<re.length;F++){let k=re[F],K=x(k);typeof k=="number"||typeof k=="boolean"?(G.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,X+D,G.__data)):k.isMatrix3?(G.__data[0]=k.elements[0],G.__data[1]=k.elements[1],G.__data[2]=k.elements[2],G.__data[3]=0,G.__data[4]=k.elements[3],G.__data[5]=k.elements[4],G.__data[6]=k.elements[5],G.__data[7]=0,G.__data[8]=k.elements[6],G.__data[9]=k.elements[7],G.__data[10]=k.elements[8],G.__data[11]=0):(k.toArray(G.__data,D),D+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,G.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,y,E,b){let T=v.value,S=y+"_"+E;if(b[S]===void 0)return typeof T=="number"||typeof T=="boolean"?b[S]=T:b[S]=T.clone(),!0;{let I=b[S];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return b[S]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(v){let y=v.uniforms,E=0,b=16;for(let S=0,I=y.length;S<I;S++){let _=Array.isArray(y[S])?y[S]:[y[S]];for(let A=0,G=_.length;A<G;A++){let X=_[A],re=Array.isArray(X.value)?X.value:[X.value];for(let D=0,F=re.length;D<F;D++){let k=re[D],K=x(k),j=E%b;j!==0&&b-j<K.boundary&&(E+=b-j),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=K.storage}}}let T=E%b;return T>0&&(E+=b-T),v.__size=E,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){let y=v.target;y.removeEventListener("dispose",g);let E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var _c=class{constructor(e={}){let{canvas:t=sT(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let f=new Uint32Array(4),m=new Int32Array(4),x=null,g=null,p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=Xs,this.toneMappingExposure=1;let y=this,E=!1,b=0,T=0,S=null,I=-1,_=null,A=new At,G=new At,X=null,re=new ye(0),D=0,F=t.width,k=t.height,K=1,j=null,W=null,N=new At(0,0,F,k),U=new At(0,0,F,k),B=!1,H=new Ec,V=!1,ee=!1,he=null,fe=new Ze,He=new te,Qe=new w,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Je(){return S===null?K:1}let O=i;function me(P,Y){for(let J=0;J<P.length;J++){let Q=P[J],Z=t.getContext(Q,Y);if(Z!==null)return Z}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",ve,!1),O===null){let Y=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Y.shift(),O=me(Y,P),O===null)throw me(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ie,de,ne,Be,Ee,C,R,q,le,ae,oe,Ie,xe,Se,ze,nt,ce,wt,dt,je,Fe,Re,st,Ct;function jt(){ie=new f2(O),de=new a2(O,ie,e),ie.init(de),Re=new XA(O,ie,de),ne=new VA(O,ie,de),Be=new g2(O),Ee=new IA,C=new WA(O,ie,ne,Ee,de,Re,Be),R=new l2(y),q=new d2(y),le=new TT(O,de),st=new r2(O,ie,le,de),ae=new p2(O,le,Be,st),oe=new M2(O,ae,le,Be),dt=new v2(O,de,C),nt=new c2(Ee),Ie=new PA(y,R,q,ie,de,st,nt),xe=new qA(y,Ee),Se=new DA,ze=new FA(ie,de),wt=new s2(y,R,q,ne,oe,h,l),ce=new GA(y,oe,de),Ct=new $A(O,Be,de,ne),je=new o2(O,ie,Be,de),Fe=new m2(O,ie,Be,de),Be.programs=Ie.programs,y.capabilities=de,y.extensions=ie,y.properties=Ee,y.renderLists=Se,y.shadowMap=ce,y.state=ne,y.info=Be}jt();let ut=new fp(y,O);this.xr=ut,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let P=ie.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ie.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(P){P!==void 0&&(K=P,this.setSize(F,k,!1))},this.getSize=function(P){return P.set(F,k)},this.setSize=function(P,Y,J=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=P,k=Y,t.width=Math.floor(P*K),t.height=Math.floor(Y*K),J===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(F*K,k*K).floor()},this.setDrawingBufferSize=function(P,Y,J){F=P,k=Y,K=J,t.width=Math.floor(P*J),t.height=Math.floor(Y*J),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(N)},this.setViewport=function(P,Y,J,Q){P.isVector4?N.set(P.x,P.y,P.z,P.w):N.set(P,Y,J,Q),ne.viewport(A.copy(N).multiplyScalar(K).floor())},this.getScissor=function(P){return P.copy(U)},this.setScissor=function(P,Y,J,Q){P.isVector4?U.set(P.x,P.y,P.z,P.w):U.set(P,Y,J,Q),ne.scissor(G.copy(U).multiplyScalar(K).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(P){ne.setScissorTest(B=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){W=P},this.getClearColor=function(P){return P.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(P=!0,Y=!0,J=!0){let Q=0;if(P){let Z=!1;if(S!==null){let _e=S.texture.format;Z=_e===Ly||_e===Iy||_e===Py}if(Z){let _e=S.texture.type,Ue=_e===Ys||_e===Vs||_e===Xp||_e===Ur||_e===Ry||_e===Cy,Ge=wt.getClearColor(),qe=wt.getClearAlpha(),lt=Ge.r,et=Ge.g,it=Ge.b;Ue?(f[0]=lt,f[1]=et,f[2]=it,f[3]=qe,O.clearBufferuiv(O.COLOR,0,f)):(m[0]=lt,m[1]=et,m[2]=it,m[3]=qe,O.clearBufferiv(O.COLOR,0,m))}else Q|=O.COLOR_BUFFER_BIT}Y&&(Q|=O.DEPTH_BUFFER_BIT),J&&(Q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Se.dispose(),ze.dispose(),Ee.dispose(),R.dispose(),q.dispose(),oe.dispose(),st.dispose(),Ct.dispose(),Ie.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Un),ut.removeEventListener("sessionend",Ft),he&&(he.dispose(),he=null),On.stop()};function ge(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let P=Be.autoReset,Y=ce.enabled,J=ce.autoUpdate,Q=ce.needsUpdate,Z=ce.type;jt(),Be.autoReset=P,ce.enabled=Y,ce.autoUpdate=J,ce.needsUpdate=Q,ce.type=Z}function ve(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Me(P){let Y=P.target;Y.removeEventListener("dispose",Me),Xe(Y)}function Xe(P){ke(P),Ee.remove(P)}function ke(P){let Y=Ee.get(P).programs;Y!==void 0&&(Y.forEach(function(J){Ie.releaseProgram(J)}),P.isShaderMaterial&&Ie.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,J,Q,Z,_e){Y===null&&(Y=De);let Ue=Z.isMesh&&Z.matrixWorld.determinant()<0,Ge=W_(P,Y,J,Q,Z);ne.setMaterial(Q,Ue);let qe=J.index,lt=1;if(Q.wireframe===!0){if(qe=ae.getWireframeAttribute(J),qe===void 0)return;lt=2}let et=J.drawRange,it=J.attributes.position,tn=et.start*lt,ni=(et.start+et.count)*lt;_e!==null&&(tn=Math.max(tn,_e.start*lt),ni=Math.min(ni,(_e.start+_e.count)*lt)),qe!==null?(tn=Math.max(tn,0),ni=Math.min(ni,qe.count)):it!=null&&(tn=Math.max(tn,0),ni=Math.min(ni,it.count));let xn=ni-tn;if(xn<0||xn===1/0)return;st.setup(Z,Q,Ge,J,qe);let us,$t=je;if(qe!==null&&(us=le.get(qe),$t=Fe,$t.setIndex(us)),Z.isMesh)Q.wireframe===!0?(ne.setLineWidth(Q.wireframeLinewidth*Je()),$t.setMode(O.LINES)):$t.setMode(O.TRIANGLES);else if(Z.isLine){let ht=Q.linewidth;ht===void 0&&(ht=1),ne.setLineWidth(ht*Je()),Z.isLineSegments?$t.setMode(O.LINES):Z.isLineLoop?$t.setMode(O.LINE_LOOP):$t.setMode(O.LINE_STRIP)}else Z.isPoints?$t.setMode(O.POINTS):Z.isSprite&&$t.setMode(O.TRIANGLES);if(Z.isBatchedMesh)$t.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)$t.renderInstances(tn,xn,Z.count);else if(J.isInstancedBufferGeometry){let ht=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,af=Math.min(J.instanceCount,ht);$t.renderInstances(tn,xn,af)}else $t.render(tn,xn)};function Ot(P,Y,J){P.transparent===!0&&P.side===tt&&P.forceSinglePass===!1?(P.side=Pn,P.needsUpdate=!0,Zl(P,Y,J),P.side=$n,P.needsUpdate=!0,Zl(P,Y,J),P.side=tt):Zl(P,Y,J)}this.compile=function(P,Y,J=null){J===null&&(J=P),g=ze.get(J),g.init(),v.push(g),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),P!==J&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights(y._useLegacyLights);let Q=new Set;return P.traverse(function(Z){let _e=Z.material;if(_e)if(Array.isArray(_e))for(let Ue=0;Ue<_e.length;Ue++){let Ge=_e[Ue];Ot(Ge,J,Z),Q.add(Ge)}else Ot(_e,J,Z),Q.add(_e)}),v.pop(),g=null,Q},this.compileAsync=function(P,Y,J=null){let Q=this.compile(P,Y,J);return new Promise(Z=>{function _e(){if(Q.forEach(function(Ue){Ee.get(Ue).currentProgram.isReady()&&Q.delete(Ue)}),Q.size===0){Z(P);return}setTimeout(_e,10)}ie.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Bt=null;function gn(P){Bt&&Bt(P)}function Un(){On.stop()}function Ft(){On.start()}let On=new ky;On.setAnimationLoop(gn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(P){Bt=P,ut.setAnimationLoop(P),P===null?On.stop():On.start()},ut.addEventListener("sessionstart",Un),ut.addEventListener("sessionend",Ft),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(Y),Y=ut.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,Y,S),g=ze.get(P,v.length),g.init(),v.push(g),fe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),H.setFromProjectionMatrix(fe),ee=this.localClippingEnabled,V=nt.init(this.clippingPlanes,ee),x=Se.get(P,p.length),x.init(),p.push(x),Ji(P,Y,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(j,W),this.info.render.frame++,V===!0&&nt.beginShadows();let J=g.state.shadowsArray;if(ce.render(J,P,Y),V===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),wt.render(x,P),g.setupLights(y._useLegacyLights),Y.isArrayCamera){let Q=Y.cameras;for(let Z=0,_e=Q.length;Z<_e;Z++){let Ue=Q[Z];wg(x,P,Ue,Ue.viewport)}}else wg(x,P,Y);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(y,P,Y),st.resetDefaultState(),I=-1,_=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Ji(P,Y,J,Q){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||H.intersectsSprite(P)){Q&&Qe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(fe);let Ue=oe.update(P),Ge=P.material;Ge.visible&&x.push(P,Ue,Ge,J,Qe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||H.intersectsObject(P))){let Ue=oe.update(P),Ge=P.material;if(Q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Qe.copy(P.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Qe.copy(Ue.boundingSphere.center)),Qe.applyMatrix4(P.matrixWorld).applyMatrix4(fe)),Array.isArray(Ge)){let qe=Ue.groups;for(let lt=0,et=qe.length;lt<et;lt++){let it=qe[lt],tn=Ge[it.materialIndex];tn&&tn.visible&&x.push(P,Ue,tn,J,Qe.z,it)}}else Ge.visible&&x.push(P,Ue,Ge,J,Qe.z,null)}}let _e=P.children;for(let Ue=0,Ge=_e.length;Ue<Ge;Ue++)Ji(_e[Ue],Y,J,Q)}function wg(P,Y,J,Q){let Z=P.opaque,_e=P.transmissive,Ue=P.transparent;g.setupLightsView(J),V===!0&&nt.setGlobalState(y.clippingPlanes,J),_e.length>0&&V_(Z,_e,Y,J),Q&&ne.viewport(A.copy(Q)),Z.length>0&&Kl(Z,Y,J),_e.length>0&&Kl(_e,Y,J),Ue.length>0&&Kl(Ue,Y,J),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function V_(P,Y,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let _e=de.isWebGL2;he===null&&(he=new Sn(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?Bi:Ys,minFilter:$s,samples:_e?4:0})),y.getDrawingBufferSize(He),_e?he.setSize(He.x,He.y):he.setSize(Ou(He.x),Ou(He.y));let Ue=y.getRenderTarget();y.setRenderTarget(he),y.getClearColor(re),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear();let Ge=y.toneMapping;y.toneMapping=Xs,Kl(P,J,Q),C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he);let qe=!1;for(let lt=0,et=Y.length;lt<et;lt++){let it=Y[lt],tn=it.object,ni=it.geometry,xn=it.material,us=it.group;if(xn.side===tt&&tn.layers.test(Q.layers)){let $t=xn.side;xn.side=Pn,xn.needsUpdate=!0,bg(tn,J,Q,ni,xn,us),xn.side=$t,xn.needsUpdate=!0,qe=!0}}qe===!0&&(C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he)),y.setRenderTarget(Ue),y.setClearColor(re,D),y.toneMapping=Ge}function Kl(P,Y,J){let Q=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,_e=P.length;Z<_e;Z++){let Ue=P[Z],Ge=Ue.object,qe=Ue.geometry,lt=Q===null?Ue.material:Q,et=Ue.group;Ge.layers.test(J.layers)&&bg(Ge,Y,J,qe,lt,et)}}function bg(P,Y,J,Q,Z,_e){P.onBeforeRender(y,Y,J,Q,Z,_e),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(y,Y,J,Q,P,_e),Z.transparent===!0&&Z.side===tt&&Z.forceSinglePass===!1?(Z.side=Pn,Z.needsUpdate=!0,y.renderBufferDirect(J,Y,Q,Z,P,_e),Z.side=$n,Z.needsUpdate=!0,y.renderBufferDirect(J,Y,Q,Z,P,_e),Z.side=tt):y.renderBufferDirect(J,Y,Q,Z,P,_e),P.onAfterRender(y,Y,J,Q,Z,_e)}function Zl(P,Y,J){Y.isScene!==!0&&(Y=De);let Q=Ee.get(P),Z=g.state.lights,_e=g.state.shadowsArray,Ue=Z.state.version,Ge=Ie.getParameters(P,Z.state,_e,Y,J),qe=Ie.getProgramCacheKey(Ge),lt=Q.programs;Q.environment=P.isMeshStandardMaterial?Y.environment:null,Q.fog=Y.fog,Q.envMap=(P.isMeshStandardMaterial?q:R).get(P.envMap||Q.environment),lt===void 0&&(P.addEventListener("dispose",Me),lt=new Map,Q.programs=lt);let et=lt.get(qe);if(et!==void 0){if(Q.currentProgram===et&&Q.lightsStateVersion===Ue)return Rg(P,Ge),et}else Ge.uniforms=Ie.getUniforms(P),P.onBuild(J,Ge,y),P.onBeforeCompile(Ge,y),et=Ie.acquireProgram(Ge,qe),lt.set(qe,et),Q.uniforms=Ge.uniforms;let it=Q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(it.clippingPlanes=nt.uniform),Rg(P,Ge),Q.needsLights=Y_(P),Q.lightsStateVersion=Ue,Q.needsLights&&(it.ambientLightColor.value=Z.state.ambient,it.lightProbe.value=Z.state.probe,it.directionalLights.value=Z.state.directional,it.directionalLightShadows.value=Z.state.directionalShadow,it.spotLights.value=Z.state.spot,it.spotLightShadows.value=Z.state.spotShadow,it.rectAreaLights.value=Z.state.rectArea,it.ltc_1.value=Z.state.rectAreaLTC1,it.ltc_2.value=Z.state.rectAreaLTC2,it.pointLights.value=Z.state.point,it.pointLightShadows.value=Z.state.pointShadow,it.hemisphereLights.value=Z.state.hemi,it.directionalShadowMap.value=Z.state.directionalShadowMap,it.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,it.spotShadowMap.value=Z.state.spotShadowMap,it.spotLightMatrix.value=Z.state.spotLightMatrix,it.spotLightMap.value=Z.state.spotLightMap,it.pointShadowMap.value=Z.state.pointShadowMap,it.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.currentProgram=et,Q.uniformsList=null,et}function Ag(P){if(P.uniformsList===null){let Y=P.currentProgram.getUniforms();P.uniformsList=Go.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function Rg(P,Y){let J=Ee.get(P);J.outputColorSpace=Y.outputColorSpace,J.batching=Y.batching,J.instancing=Y.instancing,J.instancingColor=Y.instancingColor,J.skinning=Y.skinning,J.morphTargets=Y.morphTargets,J.morphNormals=Y.morphNormals,J.morphColors=Y.morphColors,J.morphTargetsCount=Y.morphTargetsCount,J.numClippingPlanes=Y.numClippingPlanes,J.numIntersection=Y.numClipIntersection,J.vertexAlphas=Y.vertexAlphas,J.vertexTangents=Y.vertexTangents,J.toneMapping=Y.toneMapping}function W_(P,Y,J,Q,Z){Y.isScene!==!0&&(Y=De),C.resetTextureUnits();let _e=Y.fog,Ue=Q.isMeshStandardMaterial?Y.environment:null,Ge=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ln,qe=(Q.isMeshStandardMaterial?q:R).get(Q.envMap||Ue),lt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,et=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),it=!!J.morphAttributes.position,tn=!!J.morphAttributes.normal,ni=!!J.morphAttributes.color,xn=Xs;Q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(xn=y.toneMapping);let us=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,$t=us!==void 0?us.length:0,ht=Ee.get(Q),af=g.state.lights;if(V===!0&&(ee===!0||P!==_)){let pi=P===_&&Q.id===I;nt.setState(Q,P,pi)}let Qt=!1;Q.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==af.state.version||ht.outputColorSpace!==Ge||Z.isBatchedMesh&&ht.batching===!1||!Z.isBatchedMesh&&ht.batching===!0||Z.isInstancedMesh&&ht.instancing===!1||!Z.isInstancedMesh&&ht.instancing===!0||Z.isSkinnedMesh&&ht.skinning===!1||!Z.isSkinnedMesh&&ht.skinning===!0||Z.isInstancedMesh&&ht.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ht.instancingColor===!1&&Z.instanceColor!==null||ht.envMap!==qe||Q.fog===!0&&ht.fog!==_e||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==nt.numPlanes||ht.numIntersection!==nt.numIntersection)||ht.vertexAlphas!==lt||ht.vertexTangents!==et||ht.morphTargets!==it||ht.morphNormals!==tn||ht.morphColors!==ni||ht.toneMapping!==xn||de.isWebGL2===!0&&ht.morphTargetsCount!==$t)&&(Qt=!0):(Qt=!0,ht.__version=Q.version);let br=ht.currentProgram;Qt===!0&&(br=Zl(Q,Y,Z));let Cg=!1,Qa=!1,cf=!1,An=br.getUniforms(),Ar=ht.uniforms;if(ne.useProgram(br.program)&&(Cg=!0,Qa=!0,cf=!0),Q.id!==I&&(I=Q.id,Qa=!0),Cg||_!==P){An.setValue(O,"projectionMatrix",P.projectionMatrix),An.setValue(O,"viewMatrix",P.matrixWorldInverse);let pi=An.map.cameraPosition;pi!==void 0&&pi.setValue(O,Qe.setFromMatrixPosition(P.matrixWorld)),de.logarithmicDepthBuffer&&An.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&An.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,Qa=!0,cf=!0)}if(Z.isSkinnedMesh){An.setOptional(O,Z,"bindMatrix"),An.setOptional(O,Z,"bindMatrixInverse");let pi=Z.skeleton;pi&&(de.floatVertexTextures?(pi.boneTexture===null&&pi.computeBoneTexture(),An.setValue(O,"boneTexture",pi.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(An.setOptional(O,Z,"batchingTexture"),An.setValue(O,"batchingTexture",Z._matricesTexture,C));let lf=J.morphAttributes;if((lf.position!==void 0||lf.normal!==void 0||lf.color!==void 0&&de.isWebGL2===!0)&&dt.update(Z,J,br),(Qa||ht.receiveShadow!==Z.receiveShadow)&&(ht.receiveShadow=Z.receiveShadow,An.setValue(O,"receiveShadow",Z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ar.envMap.value=qe,Ar.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Qa&&(An.setValue(O,"toneMappingExposure",y.toneMappingExposure),ht.needsLights&&X_(Ar,cf),_e&&Q.fog===!0&&xe.refreshFogUniforms(Ar,_e),xe.refreshMaterialUniforms(Ar,Q,K,k,he),Go.upload(O,Ag(ht),Ar,C)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Go.upload(O,Ag(ht),Ar,C),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&An.setValue(O,"center",Z.center),An.setValue(O,"modelViewMatrix",Z.modelViewMatrix),An.setValue(O,"normalMatrix",Z.normalMatrix),An.setValue(O,"modelMatrix",Z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let pi=Q.uniformsGroups;for(let uf=0,q_=pi.length;uf<q_;uf++)if(de.isWebGL2){let Pg=pi[uf];Ct.update(Pg,br),Ct.bind(Pg,br)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return br}function X_(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Y_(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,Y,J){Ee.get(P.texture).__webglTexture=Y,Ee.get(P.depthTexture).__webglTexture=J;let Q=Ee.get(P);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Y){let J=Ee.get(P);J.__webglFramebuffer=Y,J.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,J=0){S=P,b=Y,T=J;let Q=!0,Z=null,_e=!1,Ue=!1;if(P){let qe=Ee.get(P);qe.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(O.FRAMEBUFFER,null),Q=!1):qe.__webglFramebuffer===void 0?C.setupRenderTarget(P):qe.__hasExternalTextures&&C.rebindTextures(P,Ee.get(P.texture).__webglTexture,Ee.get(P.depthTexture).__webglTexture);let lt=P.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ue=!0);let et=Ee.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(et[Y])?Z=et[Y][J]:Z=et[Y],_e=!0):de.isWebGL2&&P.samples>0&&C.useMultisampledRTT(P)===!1?Z=Ee.get(P).__webglMultisampledFramebuffer:Array.isArray(et)?Z=et[J]:Z=et,A.copy(P.viewport),G.copy(P.scissor),X=P.scissorTest}else A.copy(N).multiplyScalar(K).floor(),G.copy(U).multiplyScalar(K).floor(),X=B;if(ne.bindFramebuffer(O.FRAMEBUFFER,Z)&&de.drawBuffers&&Q&&ne.drawBuffers(P,Z),ne.viewport(A),ne.scissor(G),ne.setScissorTest(X),_e){let qe=Ee.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,qe.__webglTexture,J)}else if(Ue){let qe=Ee.get(P.texture),lt=Y||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,qe.__webglTexture,J||0,lt)}I=-1},this.readRenderTargetPixels=function(P,Y,J,Q,Z,_e,Ue){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ee.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge){ne.bindFramebuffer(O.FRAMEBUFFER,Ge);try{let qe=P.texture,lt=qe.format,et=qe.type;if(lt!==gi&&Re.convert(lt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let it=et===Bi&&(ie.has("EXT_color_buffer_half_float")||de.isWebGL2&&ie.has("EXT_color_buffer_float"));if(et!==Ys&&Re.convert(et)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(et===ys&&(de.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-Q&&J>=0&&J<=P.height-Z&&O.readPixels(Y,J,Q,Z,Re.convert(lt),Re.convert(et),_e)}finally{let qe=S!==null?Ee.get(S).__webglFramebuffer:null;ne.bindFramebuffer(O.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(P,Y,J=0){let Q=Math.pow(2,-J),Z=Math.floor(Y.image.width*Q),_e=Math.floor(Y.image.height*Q);C.setTexture2D(Y,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,P.x,P.y,Z,_e),ne.unbindTexture()},this.copyTextureToTexture=function(P,Y,J,Q=0){let Z=Y.image.width,_e=Y.image.height,Ue=Re.convert(J.format),Ge=Re.convert(J.type);C.setTexture2D(J,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,J.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,J.unpackAlignment),Y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Q,P.x,P.y,Z,_e,Ue,Ge,Y.image.data):Y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Q,P.x,P.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ue,Y.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,Q,P.x,P.y,Ue,Ge,Y.image),Q===0&&J.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,J,Q,Z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let _e=P.max.x-P.min.x+1,Ue=P.max.y-P.min.y+1,Ge=P.max.z-P.min.z+1,qe=Re.convert(Q.format),lt=Re.convert(Q.type),et;if(Q.isData3DTexture)C.setTexture3D(Q,0),et=O.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)C.setTexture2DArray(Q,0),et=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Q.unpackAlignment);let it=O.getParameter(O.UNPACK_ROW_LENGTH),tn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ni=O.getParameter(O.UNPACK_SKIP_PIXELS),xn=O.getParameter(O.UNPACK_SKIP_ROWS),us=O.getParameter(O.UNPACK_SKIP_IMAGES),$t=J.isCompressedTexture?J.mipmaps[Z]:J.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,$t.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,$t.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,P.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,P.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,P.min.z),J.isDataTexture||J.isData3DTexture?O.texSubImage3D(et,Z,Y.x,Y.y,Y.z,_e,Ue,Ge,qe,lt,$t.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(et,Z,Y.x,Y.y,Y.z,_e,Ue,Ge,qe,$t.data)):O.texSubImage3D(et,Z,Y.x,Y.y,Y.z,_e,Ue,Ge,qe,lt,$t),O.pixelStorei(O.UNPACK_ROW_LENGTH,it),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ni),O.pixelStorei(O.UNPACK_SKIP_ROWS,xn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,us),Z===0&&Q.generateMipmaps&&O.generateMipmap(et),ne.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),ne.unbindTexture()},this.resetState=function(){b=0,T=0,S=null,ne.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Yp?"display-p3":"srgb",t.unpackColorSpace=Mt.workingColorSpace===ph?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?Br:Hy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Br?bt:ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},pp=class extends _c{};pp.prototype.isWebGL1Renderer=!0;var qu=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Sc=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Zo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bn=new w,kr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pt=class extends Zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lo,sc=new w,Do=new w,No=new w,Ho=new te,rc=new te,qy=new Ze,vu=new w,oc=new w,Mu=new w,Jx=new te,Ff=new te,jx=new te,Gt=class extends Ht{constructor(e=new Pt){if(super(),this.isSprite=!0,this.type="Sprite",Lo===void 0){Lo=new Et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zo(t,5);Lo.setIndex([0,1,2,0,2,3]),Lo.setAttribute("position",new kr(i,3,0,!1)),Lo.setAttribute("uv",new kr(i,2,3,!1))}this.geometry=Lo,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Do.setFromMatrixScale(this.matrixWorld),qy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),No.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Do.multiplyScalar(-No.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Eu(vu.set(-.5,-.5,0),No,o,Do,s,r),Eu(oc.set(.5,-.5,0),No,o,Do,s,r),Eu(Mu.set(.5,.5,0),No,o,Do,s,r),Jx.set(0,0),Ff.set(1,0),jx.set(1,1);let a=e.ray.intersectTriangle(vu,oc,Mu,!1,sc);if(a===null&&(Eu(oc.set(-.5,.5,0),No,o,Do,s,r),Ff.set(0,1),a=e.ray.intersectTriangle(vu,Mu,oc,!1,sc),a===null))return;let l=e.ray.origin.distanceTo(sc);l<e.near||l>e.far||t.push({distance:l,point:sc.clone(),uv:Hr.getInterpolation(sc,vu,oc,Mu,Jx,Ff,jx,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Eu(n,e,t,i,s,r){Ho.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(rc.x=r*Ho.x-s*Ho.y,rc.y=s*Ho.x+r*Ho.y):rc.copy(Ho),n.copy(e),n.x+=rc.x,n.y+=rc.y,n.applyMatrix4(qy)}var Qx=new w,ey=new At,ty=new At,KA=new w,ny=new Ze,_u=new w,zf=new Tn,iy=new Ze,kf=new zr,$u=class extends L{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ug,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,_u),this.boundingBox.expandByPoint(_u)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,_u),this.boundingSphere.expandByPoint(_u)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zf.copy(this.boundingSphere),zf.applyMatrix4(s),e.ray.intersectsSphere(zf)!==!1&&(iy.copy(s).invert(),kf.copy(e.ray).applyMatrix4(iy),!(this.boundingBox!==null&&kf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ug?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===TS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;ey.fromBufferAttribute(s.attributes.skinIndex,e),ty.fromBufferAttribute(s.attributes.skinWeight,e),Qx.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=ty.getComponent(r);if(o!==0){let a=ey.getComponent(r);ny.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(KA.copy(Qx).applyMatrix4(ny),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Tc=class extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},mp=class extends _n{constructor(e=null,t=1,i=1,s,r,o,a,l,c=an,u=an,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sy=new Ze,ZA=new Ze,Ku=class n{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ZA;sy.multiplyMatrices(a,t[r]),sy.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new mp(t,e,e,gi,ys);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Tc),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},Gr=class extends yt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Uo=new Ze,ry=new Ze,Su=[],oy=new Kn,JA=new Ze,ac=new L,cc=new Tn,Jo=class extends L{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,JA)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Uo),oy.copy(e.boundingBox).applyMatrix4(Uo),this.boundingBox.union(oy)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Uo),cc.copy(e.boundingSphere).applyMatrix4(Uo),this.boundingSphere.union(cc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ac.geometry=this.geometry,ac.material=this.material,ac.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cc.copy(this.boundingSphere),cc.applyMatrix4(i),e.ray.intersectsSphere(cc)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Uo),ry.multiplyMatrices(i,Uo),ac.matrixWorld=ry,ac.raycast(e,Su);for(let o=0,a=Su.length;o<a;o++){let l=Su[o];l.instanceId=r,l.object=this,t.push(l)}Su.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var wc=class extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ay=new w,cy=new w,ly=new Ze,Gf=new zr,Tu=new Tn,jo=class extends Ht{constructor(e=new Et,t=new wc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ay.fromBufferAttribute(t,s-1),cy.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ay.distanceTo(cy);e.setAttribute("lineDistance",new Le(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tu.copy(i.boundingSphere),Tu.applyMatrix4(s),Tu.radius+=r,e.ray.intersectsSphere(Tu)===!1)return;ly.copy(s).invert(),Gf.copy(e.ray).applyMatrix4(ly);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new w,u=new w,d=new w,h=new w,f=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){let p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let y=p,E=v-1;y<E;y+=f){let b=m.getX(y),T=m.getX(y+1);if(c.fromBufferAttribute(g,b),u.fromBufferAttribute(g,T),Gf.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(h);I<e.near||I>e.far||t.push({distance:I,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let y=p,E=v-1;y<E;y+=f){if(c.fromBufferAttribute(g,y),u.fromBufferAttribute(g,y+1),Gf.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},uy=new w,hy=new w,Zu=class extends jo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)uy.fromBufferAttribute(t,s),hy.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+uy.distanceTo(hy);e.setAttribute("lineDistance",new Le(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ju=class extends jo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},bc=class extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dy=new Ze,gp=new zr,wu=new Tn,bu=new w,Js=class extends Ht{constructor(e=new Et,t=new bc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wu.copy(i.boundingSphere),wu.applyMatrix4(s),wu.radius+=r,e.ray.intersectsSphere(wu)===!1)return;dy.copy(s).invert(),gp.copy(e.ray).applyMatrix4(dy);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=h,x=f;m<x;m++){let g=c.getX(m);bu.fromBufferAttribute(d,g),fy(bu,g,l,s,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=h,x=f;m<x;m++)bu.fromBufferAttribute(d,m),fy(bu,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fy(n,e,t,i,s,r,o){let a=gp.distanceSqToPoint(n);if(a<t){let l=new w;gp.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var zi=class extends _n{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new te:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new w,s=[],r=[],o=[],a=new w,l=new Ze;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(cn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(cn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ac=class extends yi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new te,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xp=class extends Ac{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kp(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Au=new w,Vf=new Kp,Wf=new Kp,Xf=new Kp,yp=class extends yi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new w){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Au.subVectors(s[0],s[1]).add(s[0]),c=Au);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Au.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Au),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Vf.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,x,g),Wf.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,x,g),Xf.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(Vf.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Wf.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Xf.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Vf.calc(l),Wf.calc(l),Xf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function py(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function jA(n,e){let t=1-n;return t*t*e}function QA(n,e){return 2*(1-n)*n*e}function eR(n,e){return n*n*e}function mc(n,e,t,i){return jA(n,e)+QA(n,t)+eR(n,i)}function tR(n,e){let t=1-n;return t*t*t*e}function nR(n,e){let t=1-n;return 3*t*t*n*e}function iR(n,e){return 3*(1-n)*n*n*e}function sR(n,e){return n*n*n*e}function gc(n,e,t,i,s){return tR(n,e)+nR(n,t)+iR(n,i)+sR(n,s)}var ju=class extends yi{constructor(e=new te,t=new te,i=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gc(e,s.x,r.x,o.x,a.x),gc(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vp=class extends yi{constructor(e=new w,t=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gc(e,s.x,r.x,o.x,a.x),gc(e,s.y,r.y,o.y,a.y),gc(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qu=class extends yi{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mp=class extends yi{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eh=class extends yi{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(mc(e,s.x,r.x,o.x),mc(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ep=class extends yi{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(mc(e,s.x,r.x,o.x),mc(e,s.y,r.y,o.y),mc(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},th=class extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(py(a,l.x,c.x,u.x,d.x),py(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new te().fromArray(s))}return this}},_p=Object.freeze({__proto__:null,ArcCurve:xp,CatmullRomCurve3:yp,CubicBezierCurve:ju,CubicBezierCurve3:vp,EllipseCurve:Ac,LineCurve:Qu,LineCurve3:Mp,QuadraticBezierCurve:eh,QuadraticBezierCurve3:Ep,SplineCurve:th}),Sp=class extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _p[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new _p[s.type]().fromJSON(s))}return this}},Rc=class extends Sp{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Qu(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new eh(this.currentPoint.clone(),new te(e,t),new te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ju(this.currentPoint.clone(),new te(e,t),new te(i,s),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new th(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Ac(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Tp=class n extends Et{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=cn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new w,h=new te,f=new w,m=new w,x=new w,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=t;v++){let y=i+v*u*s,E=Math.sin(y),b=Math.cos(y);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*E,d.y=e[T].y,d.z=e[T].x*b,o.push(d.x,d.y,d.z),h.x=v/t,h.y=T/(e.length-1),a.push(h.x,h.y);let S=l[3*T+0]*E,I=l[3*T+1],_=l[3*T+0]*b;c.push(S,I,_)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let E=y+v*e.length,b=E,T=E+e.length,S=E+e.length+1,I=E+1;r.push(b,T,I),r.push(S,I,T)}this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Jn=class n extends Tp{constructor(e=1,t=1,i=4,s=8){let r=new Rc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},js=class n extends Et{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new w,u=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(a,3)),this.setAttribute("uv",new Le(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Te=class n extends Et{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],m=0,x=[],g=i/2,p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(f,2));function v(){let E=new w,b=new w,T=0,S=(t-e)/i;for(let I=0;I<=r;I++){let _=[],A=I/r,G=A*(t-e)+e;for(let X=0;X<=s;X++){let re=X/s,D=re*l+a,F=Math.sin(D),k=Math.cos(D);b.x=G*F,b.y=-A*i+g,b.z=G*k,d.push(b.x,b.y,b.z),E.set(F,S,k).normalize(),h.push(E.x,E.y,E.z),f.push(re,1-A),_.push(m++)}x.push(_)}for(let I=0;I<s;I++)for(let _=0;_<r;_++){let A=x[_][I],G=x[_+1][I],X=x[_+1][I+1],re=x[_][I+1];u.push(A,G,re),u.push(G,X,re),T+=6}c.addGroup(p,T,0),p+=T}function y(E){let b=m,T=new te,S=new w,I=0,_=E===!0?e:t,A=E===!0?1:-1;for(let X=1;X<=s;X++)d.push(0,g*A,0),h.push(0,A,0),f.push(.5,.5),m++;let G=m;for(let X=0;X<=s;X++){let D=X/s*l+a,F=Math.cos(D),k=Math.sin(D);S.x=_*k,S.y=g*A,S.z=_*F,d.push(S.x,S.y,S.z),h.push(0,A,0),T.x=F*.5+.5,T.y=k*.5*A+.5,f.push(T.x,T.y),m++}for(let X=0;X<s;X++){let re=b+X,D=G+X;E===!0?u.push(D,D+1,re):u.push(D+1,D,re),I+=3}c.addGroup(p,I,E===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ke=class n extends Te{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cc=class n extends Et{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new w,E=new w,b=new w;for(let T=0;T<t.length;T+=3)f(t[T+0],y),f(t[T+1],E),f(t[T+2],b),l(y,E,b,v)}function l(v,y,E,b){let T=b+1,S=[];for(let I=0;I<=T;I++){S[I]=[];let _=v.clone().lerp(E,I/T),A=y.clone().lerp(E,I/T),G=T-I;for(let X=0;X<=G;X++)X===0&&I===T?S[I][X]=_:S[I][X]=_.clone().lerp(A,X/G)}for(let I=0;I<T;I++)for(let _=0;_<2*(T-I)-1;_++){let A=Math.floor(_/2);_%2===0?(h(S[I][A+1]),h(S[I+1][A]),h(S[I][A])):(h(S[I][A+1]),h(S[I+1][A+1]),h(S[I+1][A]))}}function c(v){let y=new w;for(let E=0;E<r.length;E+=3)y.x=r[E+0],y.y=r[E+1],y.z=r[E+2],y.normalize().multiplyScalar(v),r[E+0]=y.x,r[E+1]=y.y,r[E+2]=y.z}function u(){let v=new w;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let E=g(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(E,1-b)}m(),d()}function d(){for(let v=0;v<o.length;v+=6){let y=o[v+0],E=o[v+2],b=o[v+4],T=Math.max(y,E,b),S=Math.min(y,E,b);T>.9&&S<.1&&(y<.2&&(o[v+0]+=1),E<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,y){let E=v*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function m(){let v=new w,y=new w,E=new w,b=new w,T=new te,S=new te,I=new te;for(let _=0,A=0;_<r.length;_+=9,A+=6){v.set(r[_+0],r[_+1],r[_+2]),y.set(r[_+3],r[_+4],r[_+5]),E.set(r[_+6],r[_+7],r[_+8]),T.set(o[A+0],o[A+1]),S.set(o[A+2],o[A+3]),I.set(o[A+4],o[A+5]),b.copy(v).add(y).add(E).divideScalar(3);let G=g(b);x(T,A+0,v,G),x(S,A+2,y,G),x(I,A+4,E,G)}}function x(v,y,E,b){b<0&&v.x===1&&(o[y]=v.x-1),E.x===0&&E.z===0&&(o[y]=b/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Pc=class n extends Cc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Gn=class extends Rc{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Rc().fromJSON(s))}return this}},rR={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=$y(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,d,h,f;if(i&&(r=uR(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let m=t;m<s;m+=t)d=n[m],h=n[m+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Ic(r,o,t,a,l,f,0),o}};function $y(n,e,t,i,s){let r,o;if(s===ER(n,e,t,i)>0)for(r=e;r<t;r+=i)o=my(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=my(r,n[r],n[r+1],o);return o&&gh(o,o.next)&&(Dc(o),o=o.next),o}function Vr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(gh(t,t.next)||Kt(t.prev,t,t.next)===0)){if(Dc(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ic(n,e,t,i,s,r,o){if(!n)return;!o&&r&&mR(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?aR(n,i,s,r):oR(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Dc(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=cR(Vr(n),e,t),Ic(n,e,t,i,s,r,2)):o===2&&lR(n,e,t,i,s,r):Ic(Vr(n),e,t,i,s,r,1);break}}}function oR(n){let e=n.prev,t=n,i=n.next;if(Kt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,h=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&Fo(s,a,r,l,o,c,m.x,m.y)&&Kt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function aR(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Kt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=a<l?a<c?a:c:l<c?l:c,m=u<d?u<h?u:h:d<h?d:h,x=a>l?a>c?a:c:l>c?l:c,g=u>d?u>h?u:h:d>h?d:h,p=wp(f,m,e,t,i),v=wp(x,g,e,t,i),y=n.prevZ,E=n.nextZ;for(;y&&y.z>=p&&E&&E.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Fo(a,u,l,d,c,h,y.x,y.y)&&Kt(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=f&&E.x<=x&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&Fo(a,u,l,d,c,h,E.x,E.y)&&Kt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Fo(a,u,l,d,c,h,y.x,y.y)&&Kt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=v;){if(E.x>=f&&E.x<=x&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&Fo(a,u,l,d,c,h,E.x,E.y)&&Kt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function cR(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!gh(s,r)&&Ky(s,i,i.next,r)&&Lc(s,r)&&Lc(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Dc(i),Dc(i.next),i=n=r),i=i.next}while(i!==n);return Vr(i)}function lR(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yR(o,a)){let l=Zy(o,a);o=Vr(o,o.next),l=Vr(l,l.next),Ic(o,e,t,i,s,r,0),Ic(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function uR(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=$y(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(xR(c));for(s.sort(hR),r=0;r<s.length;r++)t=dR(s[r],t);return t}function hR(n,e){return n.x-e.x}function dR(n,e){let t=fR(n,e);if(!t)return e;let i=Zy(t,n);return Vr(i,i.next),Vr(t,t.next)}function fR(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>i&&(i=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Fo(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Lc(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&pR(s,t)))&&(s=t,u=d)),t=t.next;while(t!==a);return s}function pR(n,e){return Kt(n.prev,n,e.prev)<0&&Kt(e.next,n,n.next)<0}function mR(n,e,t,i){let s=n;do s.z===0&&(s.z=wp(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,gR(s)}function gR(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function wp(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function xR(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Fo(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function yR(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!vR(n,e)&&(Lc(n,e)&&Lc(e,n)&&MR(n,e)&&(Kt(n.prev,n,e.prev)||Kt(n,e.prev,e))||gh(n,e)&&Kt(n.prev,n,n.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function gh(n,e){return n.x===e.x&&n.y===e.y}function Ky(n,e,t,i){let s=Cu(Kt(n,e,t)),r=Cu(Kt(n,e,i)),o=Cu(Kt(t,i,n)),a=Cu(Kt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ru(n,t,e)||r===0&&Ru(n,i,e)||o===0&&Ru(t,n,i)||a===0&&Ru(t,e,i))}function Ru(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Cu(n){return n>0?1:n<0?-1:0}function vR(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ky(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Lc(n,e){return Kt(n.prev,n,n.next)<0?Kt(n,e,n.next)>=0&&Kt(n,n.prev,e)>=0:Kt(n,e,n.prev)<0||Kt(n,n.next,e)<0}function MR(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Zy(n,e){let t=new bp(n.i,n.x,n.y),i=new bp(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function my(n,e,t,i){let s=new bp(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Dc(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bp(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ER(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var qs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];gy(e),xy(i,e);let o=e.length;t.forEach(gy);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,xy(i,t[l]);let a=rR.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function gy(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function xy(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var vi=class n extends Et{constructor(e=new Gn([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Le(s,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:_R,y,E=!1,b,T,S,I;p&&(y=p.getSpacedPoints(u),E=!0,h=!1,b=p.computeFrenetFrames(u,!1),T=new w,S=new w,I=new w),h||(g=0,f=0,m=0,x=0);let _=a.extractPoints(c),A=_.shape,G=_.holes;if(!qs.isClockWise(A)){A=A.reverse();for(let O=0,me=G.length;O<me;O++){let ie=G[O];qs.isClockWise(ie)&&(G[O]=ie.reverse())}}let re=qs.triangulateShape(A,G),D=A;for(let O=0,me=G.length;O<me;O++){let ie=G[O];A=A.concat(ie)}function F(O,me,ie){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(me,ie)}let k=A.length,K=re.length;function j(O,me,ie){let de,ne,Be,Ee=O.x-me.x,C=O.y-me.y,R=ie.x-O.x,q=ie.y-O.y,le=Ee*Ee+C*C,ae=Ee*q-C*R;if(Math.abs(ae)>Number.EPSILON){let oe=Math.sqrt(le),Ie=Math.sqrt(R*R+q*q),xe=me.x-C/oe,Se=me.y+Ee/oe,ze=ie.x-q/Ie,nt=ie.y+R/Ie,ce=((ze-xe)*q-(nt-Se)*R)/(Ee*q-C*R);de=xe+Ee*ce-O.x,ne=Se+C*ce-O.y;let wt=de*de+ne*ne;if(wt<=2)return new te(de,ne);Be=Math.sqrt(wt/2)}else{let oe=!1;Ee>Number.EPSILON?R>Number.EPSILON&&(oe=!0):Ee<-Number.EPSILON?R<-Number.EPSILON&&(oe=!0):Math.sign(C)===Math.sign(q)&&(oe=!0),oe?(de=-C,ne=Ee,Be=Math.sqrt(le)):(de=Ee,ne=C,Be=Math.sqrt(le/2))}return new te(de/Be,ne/Be)}let W=[];for(let O=0,me=D.length,ie=me-1,de=O+1;O<me;O++,ie++,de++)ie===me&&(ie=0),de===me&&(de=0),W[O]=j(D[O],D[ie],D[de]);let N=[],U,B=W.concat();for(let O=0,me=G.length;O<me;O++){let ie=G[O];U=[];for(let de=0,ne=ie.length,Be=ne-1,Ee=de+1;de<ne;de++,Be++,Ee++)Be===ne&&(Be=0),Ee===ne&&(Ee=0),U[de]=j(ie[de],ie[Be],ie[Ee]);N.push(U),B=B.concat(U)}for(let O=0;O<g;O++){let me=O/g,ie=f*Math.cos(me*Math.PI/2),de=m*Math.sin(me*Math.PI/2)+x;for(let ne=0,Be=D.length;ne<Be;ne++){let Ee=F(D[ne],W[ne],de);fe(Ee.x,Ee.y,-ie)}for(let ne=0,Be=G.length;ne<Be;ne++){let Ee=G[ne];U=N[ne];for(let C=0,R=Ee.length;C<R;C++){let q=F(Ee[C],U[C],de);fe(q.x,q.y,-ie)}}}let H=m+x;for(let O=0;O<k;O++){let me=h?F(A[O],B[O],H):A[O];E?(S.copy(b.normals[0]).multiplyScalar(me.x),T.copy(b.binormals[0]).multiplyScalar(me.y),I.copy(y[0]).add(S).add(T),fe(I.x,I.y,I.z)):fe(me.x,me.y,0)}for(let O=1;O<=u;O++)for(let me=0;me<k;me++){let ie=h?F(A[me],B[me],H):A[me];E?(S.copy(b.normals[O]).multiplyScalar(ie.x),T.copy(b.binormals[O]).multiplyScalar(ie.y),I.copy(y[O]).add(S).add(T),fe(I.x,I.y,I.z)):fe(ie.x,ie.y,d/u*O)}for(let O=g-1;O>=0;O--){let me=O/g,ie=f*Math.cos(me*Math.PI/2),de=m*Math.sin(me*Math.PI/2)+x;for(let ne=0,Be=D.length;ne<Be;ne++){let Ee=F(D[ne],W[ne],de);fe(Ee.x,Ee.y,d+ie)}for(let ne=0,Be=G.length;ne<Be;ne++){let Ee=G[ne];U=N[ne];for(let C=0,R=Ee.length;C<R;C++){let q=F(Ee[C],U[C],de);E?fe(q.x,q.y+y[u-1].y,y[u-1].x+ie):fe(q.x,q.y,d+ie)}}}V(),ee();function V(){let O=s.length/3;if(h){let me=0,ie=k*me;for(let de=0;de<K;de++){let ne=re[de];He(ne[2]+ie,ne[1]+ie,ne[0]+ie)}me=u+g*2,ie=k*me;for(let de=0;de<K;de++){let ne=re[de];He(ne[0]+ie,ne[1]+ie,ne[2]+ie)}}else{for(let me=0;me<K;me++){let ie=re[me];He(ie[2],ie[1],ie[0])}for(let me=0;me<K;me++){let ie=re[me];He(ie[0]+k*u,ie[1]+k*u,ie[2]+k*u)}}i.addGroup(O,s.length/3-O,0)}function ee(){let O=s.length/3,me=0;he(D,me),me+=D.length;for(let ie=0,de=G.length;ie<de;ie++){let ne=G[ie];he(ne,me),me+=ne.length}i.addGroup(O,s.length/3-O,1)}function he(O,me){let ie=O.length;for(;--ie>=0;){let de=ie,ne=ie-1;ne<0&&(ne=O.length-1);for(let Be=0,Ee=u+g*2;Be<Ee;Be++){let C=k*Be,R=k*(Be+1),q=me+de+C,le=me+ne+C,ae=me+ne+R,oe=me+de+R;Qe(q,le,ae,oe)}}}function fe(O,me,ie){l.push(O),l.push(me),l.push(ie)}function He(O,me,ie){De(O),De(me),De(ie);let de=s.length/3,ne=v.generateTopUV(i,s,de-3,de-2,de-1);Je(ne[0]),Je(ne[1]),Je(ne[2])}function Qe(O,me,ie,de){De(O),De(me),De(de),De(me),De(ie),De(de);let ne=s.length/3,Be=v.generateSideWallUV(i,s,ne-6,ne-3,ne-2,ne-1);Je(Be[0]),Je(Be[1]),Je(Be[3]),Je(Be[1]),Je(Be[2]),Je(Be[3])}function De(O){s.push(l[O*3+0]),s.push(l[O*3+1]),s.push(l[O*3+2])}function Je(O){r.push(O.x),r.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return SR(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new _p[s.type]().fromJSON(s)),new n(i,e.options)}},_R={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new te(r,o),new te(a,l),new te(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new te(o,1-l),new te(c,1-d),new te(h,1-m),new te(x,1-p)]:[new te(a,1-l),new te(u,1-d),new te(f,1-m),new te(g,1-p)]}};function SR(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Qo=class n extends Cc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},fn=class n extends Cc{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},pn=class n extends Et{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,f=new w,m=new te;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let p=r+g/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}d+=h}for(let x=0;x<s;x++){let g=x*(i+1);for(let p=0;p<i;p++){let v=p+g,y=v,E=v+i+1,b=v+i+2,T=v+1;a.push(y,E,T),a.push(E,b,T)}}this.setIndex(a),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},nh=class n extends Et{constructor(e=new Gn([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Le(s,3)),this.setAttribute("normal",new Le(r,3)),this.setAttribute("uv",new Le(o,2));function c(u){let d=s.length/3,h=u.extractPoints(t),f=h.shape,m=h.holes;qs.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let v=m[g];qs.isClockWise(v)===!0&&(m[g]=v.reverse())}let x=qs.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){let v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,p=x.length;g<p;g++){let v=x[g],y=v[0]+d,E=v[1]+d,b=v[2]+d;i.push(y,E,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return TR(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function TR(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var qt=class n extends Et{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new w,h=new w,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let v=[],y=p/i,E=0;p===0&&o===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let b=0;b<=t;b++){let T=b/t;d.x=-e*Math.cos(s+T*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(s+T*r)*Math.sin(o+y*a),m.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),g.push(T+E,1-y),v.push(c++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let y=u[p][v+1],E=u[p][v],b=u[p+1][v],T=u[p+1][v+1];(p!==0||o>0)&&f.push(y,E,T),(p!==i-1||l<Math.PI)&&f.push(E,b,T)}this.setIndex(f),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rt=class n extends Et{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new w,d=new w,h=new w;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(m/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;o.push(x,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ih=class extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},se=class extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uy,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mi=class extends se{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return cn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Pu(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function wR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function bR(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function yy(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Jy(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Qs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ap=class extends Qs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cx,endingEnd:cx}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case lx:r=e,a=2*t-i;break;case ux:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lx:o=e,l=2*i-t;break;case ux:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(i-t)/(s-t),x=m*m,g=x*m,p=-h*g+2*h*x-h*m,v=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,E=f*g-f*x;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+v*o[c+b]+y*o[l+b]+E*o[d+b];return r}},Rp=class extends Qs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},Cp=class extends Qs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ei=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pu(t,this.TimeBufferType),this.values=Pu(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Pu(e.times,Array),values:Pu(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Cp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ap(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Yo:t=this.InterpolantFactoryMethodDiscrete;break;case Fr:t=this.InterpolantFactoryMethodLinear;break;case gf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return Fr;case this.InterpolantFactoryMethodSmooth:return gf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&wR(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===gf,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let m=0;m!==i;++m){let x=t[d+m];if(x!==t[h+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=Fr;var er=class extends Ei{};er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Yo;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends Ei{};sh.prototype.ValueTypeName="color";var Ms=class extends Ei{};Ms.prototype.ValueTypeName="number";var Pp=class extends Qs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Fi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ts=class extends Ei{InterpolantFactoryMethodLinear(e){return new Pp(this.times,this.values,this.getValueSize(),e)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.DefaultInterpolation=Fr;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var tr=class extends Ei{};tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Yo;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends Ei{};Es.prototype.ValueTypeName="vector";var rh=class{constructor(e,t=-1,i,s=DS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=xi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(RR(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Ei.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=bR(l);l=yy(l,1,u),c=yy(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let d=u[1],h=s[d];h||(s[d]=h=[]),h.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(d,h,f,m,x){if(f.length!==0){let g=[],p=[];Jy(f,g,p,m),g.length!==0&&x.push(new d(h,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let f={},m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let x=0;x<h[m].morphTargets.length;x++)f[h[m].morphTargets[x]]=-1;for(let x in f){let g=[],p=[];for(let v=0;v!==h[m].morphTargets.length;++v){let y=h[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new Ms(".morphTargetInfluence["+x+"]",g,p))}l=f.length*o}else{let f=".bones["+t[d].name+"]";i(Es,f+".position",h,"pos",s),i(ts,f+".quaternion",h,"rot",s),i(Es,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function AR(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return Es;case"color":return sh;case"quaternion":return ts;case"bool":case"boolean":return er;case"string":return tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function RR(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=AR(n.type);if(n.times===void 0){let t=[],i=[];Jy(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Ws={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ip=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},CR=new Ip,_s=class{constructor(e){this.manager=e!==void 0?e:CR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};_s.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs={},Lp=class extends Error{constructor(e,t){super(e),this.response=t}},Nc=class extends _s{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ws.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(gs[e]!==void 0){gs[e].push({onLoad:t,onProgress:i,onError:s});return}gs[e]=[],gs[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=gs[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=h?parseInt(h):0,m=f!==0,x=0,g=new ReadableStream({start(p){v();function v(){d.read().then(({done:y,value:E})=>{if(y)p.close();else{x+=E.byteLength;let b=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let T=0,S=u.length;T<S;T++){let I=u[T];I.onProgress&&I.onProgress(b)}p.enqueue(E),v()}})}}});return new Response(g)}else throw new Lp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Ws.add(e,c);let u=gs[e];delete gs[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=gs[e];if(u===void 0)throw this.manager.itemError(e),c;delete gs[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Dp=class extends _s{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ws.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=vc("img");function l(){u(),Ws.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var oh=class extends _s{constructor(e){super(e)}load(e,t,i,s){let r=new _n,o=new Dp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},ea=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ah=class extends ea{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Yf=new Ze,vy=new w,My=new w,Hc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;vy.setFromMatrixPosition(e.matrixWorld),t.position.copy(vy),My.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(My),t.updateMatrixWorld(),Yf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Np=class extends Hc{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=qo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ch=class extends ea{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Np}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ey=new Ze,lc=new w,qf=new w,Hp=class extends Hc{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),lc.setFromMatrixPosition(e.matrixWorld),i.position.copy(lc),qf.copy(i.position),qf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(qf),i.updateMatrixWorld(),s.makeTranslation(-lc.x,-lc.y,-lc.z),Ey.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ey)}},Ss=class extends ea{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Hp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Up=class extends Hc{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nr=class extends ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Up}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ir=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var lh=class extends _s{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ws.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ws.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ws.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ws.add(e,l),r.manager.itemStart(e)}};var uh=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_y(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=_y();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function _y(){return(typeof performance>"u"?Date:performance).now()}var Zp="\\[\\]\\.:\\/",PR=new RegExp("["+Zp+"]","g"),Jp="[^"+Zp+"]",IR="[^"+Zp.replace("\\.","")+"]",LR=/((?:WC+[\/:])*)/.source.replace("WC",Jp),DR=/(WCOD+)?/.source.replace("WCOD",IR),NR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jp),HR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jp),UR=new RegExp("^"+LR+DR+NR+HR+"$"),OR=["material","materials","bones","map"],Op=class{constructor(e,t,i){let s=i||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},zt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(PR,"")}static parseTrackName(e){let t=UR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);OR.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=Op;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ZI=new Float32Array(1);var hh=class{constructor(e,t,i=0,s=1/0){this.ray=new zr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Bp(e,this,i,t),i.sort(Sy),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Bp(e[s],this,i,t);return i.sort(Sy),i}};function Sy(n,e){return n.distance-e.distance}function Bp(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Bp(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var na=class n extends L{constructor(){let e=n.SkyShader,t=new kt({name:e.name,uniforms:ai.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Pn,depthWrite:!1});super(new Ut(1,1,1),t),this.isSky=!0}};na.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new w},up:{value:new w(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var xh=class extends L{constructor(e,t={}){super(e),this.isWater=!0;let i=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,u=t.sunDirection!==void 0?t.sunDirection:new w(.70707,.70707,0),d=new ye(t.sunColor!==void 0?t.sunColor:16777215),h=new ye(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new w(0,0,0),m=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:$n,g=t.fog!==void 0?t.fog:!1,p=new ri,v=new w,y=new w,E=new w,b=new Ze,T=new w(0,0,-1),S=new At,I=new w,_=new w,A=new At,G=new Ze,X=new nn,re=new Sn(s,r),D={name:"MirrorShader",uniforms:ai.merge([pe.fog,pe.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ze},sunColor:{value:new ye(8355711)},sunDirection:{value:new w(.70707,.70707,0)},eye:{value:new w},waterColor:{value:new ye(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},F=new kt({name:D.name,uniforms:ai.clone(D.uniforms),vertexShader:D.vertexShader,fragmentShader:D.fragmentShader,lights:!0,side:x,fog:g});F.uniforms.mirrorSampler.value=re.texture,F.uniforms.textureMatrix.value=G,F.uniforms.alpha.value=a,F.uniforms.time.value=l,F.uniforms.normalSampler.value=c,F.uniforms.sunColor.value=d,F.uniforms.waterColor.value=h,F.uniforms.sunDirection.value=u,F.uniforms.distortionScale.value=m,F.uniforms.eye.value=f,i.material=F,i.onBeforeRender=function(k,K,j){if(y.setFromMatrixPosition(i.matrixWorld),E.setFromMatrixPosition(j.matrixWorld),b.extractRotation(i.matrixWorld),v.set(0,0,1),v.applyMatrix4(b),I.subVectors(y,E),I.dot(v)>0)return;I.reflect(v).negate(),I.add(y),b.extractRotation(j.matrixWorld),T.set(0,0,-1),T.applyMatrix4(b),T.add(E),_.subVectors(y,T),_.reflect(v).negate(),_.add(y),X.position.copy(I),X.up.set(0,1,0),X.up.applyMatrix4(b),X.up.reflect(v),X.lookAt(_),X.far=j.far,X.updateMatrixWorld(),X.projectionMatrix.copy(j.projectionMatrix),G.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),G.multiply(X.projectionMatrix),G.multiply(X.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(v,y),p.applyMatrix4(X.matrixWorldInverse),S.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let W=X.projectionMatrix;A.x=(Math.sign(S.x)+W.elements[8])/W.elements[0],A.y=(Math.sign(S.y)+W.elements[9])/W.elements[5],A.z=-1,A.w=(1+W.elements[10])/W.elements[14],S.multiplyScalar(2/S.dot(A)),W.elements[2]=S.x,W.elements[6]=S.y,W.elements[10]=S.z+1-o,W.elements[14]=S.w,f.setFromMatrixPosition(j.matrixWorld);let N=k.getRenderTarget(),U=k.xr.enabled,B=k.shadowMap.autoUpdate;i.visible=!1,k.xr.enabled=!1,k.shadowMap.autoUpdate=!1,k.setRenderTarget(re),k.state.buffers.depth.setMask(!0),k.autoClear===!1&&k.clear(),k.render(K,X),i.visible=!0,k.xr.enabled=U,k.shadowMap.autoUpdate=B,k.setRenderTarget(N);let H=j.viewport;H!==void 0&&k.state.viewport(H)}}};var yh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ci=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},BR=new Zs(-1,1,1,-1,0,1),jp=class extends Et{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}},FR=new jp,rr=class{constructor(e){this._mesh=new L(FR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,BR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Wr=class extends ci{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ai.clone(e.uniforms),this.material=new kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new rr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Bc=class extends ci{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},vh=class extends ci{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Mh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new te);this._width=i.width,this._height=i.height,t=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wr(yh),this.copyPass.material.blending=es,this.clock=new uh}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bc!==void 0&&(o instanceof Bc?i=!0:o instanceof vh&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Eh=class extends ci{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var jy={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ia=class n extends ci{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(r,o,{type:Bi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let h=new Sn(r,o,{type:Bi});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Sn(r,o,{type:Bi});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=jy;this.highPassUniforms=ai.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=yh;this.copyUniforms=ai.clone(u.uniforms),this.blendMaterial=new kt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:$e,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ye,this.oldClearAlpha=1,this.basic=new ft,this.fsQuad=new rr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new kt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ia.BlurDirectionX=new te(1,0);ia.BlurDirectionY=new te(0,1);var Qy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var _h=class extends ci{constructor(){super();let e=Qy;this.uniforms=ai.clone(e.uniforms),this.material=new ih({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new rr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Mt.getTransfer(this._outputColorSpace)===Nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Uc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vp&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ev={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new te(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`};var Fc={distance:40,minDist:24,maxDist:58,elevDeg:38,azimuthDeg:18};var vn=60,sv=.022;var Sh=10,mn=15,rv=[5,10],ov=[7,12];var zc=64,av=12,cv=18,lv=2,uv=7,hv=60,kc=5,Th=20,sa=40,Gc=120;function tv(n,e,t){let i=[],s=Math.PI/180*t;for(let r=0;r<e;r++){let o=r/e*Math.PI*2+s;i.push({x:+(Math.cos(o)*n).toFixed(3),z:+(Math.sin(o)*n).toFixed(3)})}return i}var nv=26,iv=40.5,Qp=6,em=[{ring:0,unlockLevel:0,radius:nv,zones:tv(nv,8,22.5)},{ring:1,unlockLevel:Qp,radius:iv,zones:tv(iv,8,22.5)}],wh=em.flatMap(n=>n.zones),LL=wh.length;var _t={archer:{key:"archer",name:"Archer Tower",icon:"arrow",color:8247392,cost:15,desc:"Rapid single-target arrows",upgradeCosts:[12,28,55],levels:[{damage:8,range:15,fireRate:1},{damage:14,range:16,fireRate:.85},{damage:22,range:17.5,fireRate:.7},{damage:34,range:19,fireRate:.55}]},cannon:{key:"cannon",name:"Cannon Bastion",icon:"bomb",color:16747069,cost:30,desc:"Slow arc shells, area damage",upgradeCosts:[26,48,80],levels:[{damage:24,range:12,fireRate:2.4,aoe:3.2},{damage:38,range:13,fireRate:2.1,aoe:3.5},{damage:58,range:14,fireRate:1.8,aoe:3.8},{damage:85,range:15,fireRate:1.5,aoe:4.2}]},frost:{key:"frost",name:"Frost Spire",icon:"snow",color:7260415,cost:40,desc:"Chilling bolts slow the horde",upgradeCosts:[32,58,90],levels:[{damage:6,range:14,fireRate:1.4,slow:.55,slowDur:2.2},{damage:10,range:15,fireRate:1.25,slow:.5,slowDur:2.4},{damage:16,range:16,fireRate:1.1,slow:.45,slowDur:2.6},{damage:24,range:17,fireRate:.95,slow:.4,slowDur:3,aoe:2.6}]},tesla:{key:"tesla",name:"Storm Obelisk",icon:"bolt",color:13134847,cost:55,desc:"Chain lightning between foes",upgradeCosts:[42,72,115],levels:[{damage:16,range:12,fireRate:1.7,chain:2},{damage:26,range:13,fireRate:1.5,chain:3},{damage:40,range:14,fireRate:1.3,chain:4},{damage:58,range:15,fireRate:1.1,chain:5}]}},Xr=["archer","cannon","frost","tesla"],Vc={archer:{piercing:{name:"Piercing Arrows",desc:"+35% damage and ignores enemy armor."},volley:{name:"Volley",desc:"Fire three arrows at up to three targets."}},cannon:{siege:{name:"Siege Rounds",desc:"+40% damage against bosses and armored foes."},cluster:{name:"Cluster Shells",desc:"Three smaller blast shells per shot."}},frost:{shatter:{name:"Shatter",desc:"+60% damage against chilled enemies."},deepfreeze:{name:"Deep Freeze",desc:"Stronger, longer-lasting chill."}},tesla:{overload:{name:"Overload",desc:"+2 chains and a chance to stun briefly."},tempest:{name:"Tempest",desc:"+25% damage and longer chain links."}}},ns={grunt:{hp:14,speed:2.3,dmg:8,reward:4,size:1,tint:"#b0483a"},runner:{hp:10,speed:4.8,dmg:6,reward:5,size:.92,tint:"#3f9e4f"},bomber:{hp:18,speed:4,dmg:24,reward:9,size:1.05,tint:"#e07830"},brute:{hp:65,speed:1.7,dmg:15,reward:12,size:1.55,tint:"#8a5fb0"},champion:{hp:160,speed:1.25,dmg:22,reward:20,size:1.8,tint:"#4a6fb8"},acolyte:{hp:95,speed:1.55,dmg:10,reward:16,size:1.55,tint:"#7a5aa8"},giant:{hp:380,speed:.95,dmg:34,reward:60,size:3.1,tint:"#c05a2a"},warlord:{hp:2600,speed:.72,dmg:120,reward:300,size:3.4,tint:"#b03040"}},dv=.09,ws={hpBase:380,hpPerWave:.22,reward:60,size:3.1},Yr={hpPerStage:320,reward:45,size:2.2},tm=8.6,fv=["Stone Keep","Reinforced Keep","Twin Bastions","Iron Citadel","Royal Fortress","Sunspire Citadel","Tidal Bastion","Storm Keep","Celestial Citadel"],bs=[{name:"Reinforced Keep",hp:25,income:2,cost:30,range:0,damage:0,fireRate:0,feature:"Reinforced masonry"},{name:"Twin Bastions",hp:30,income:3,cost:60,range:.5,damage:1,fireRate:0,feature:"Corner bastions"},{name:"Iron Citadel",hp:40,income:4,cost:100,range:.5,damage:3,fireRate:-.02,feature:"Iron gatehouse"},{name:"Royal Fortress",hp:50,income:5,cost:160,range:1,damage:2,fireRate:0,feature:"Royal banners"},{name:"Sunspire Citadel",hp:60,income:6,cost:240,range:1,damage:4,fireRate:-.03,feature:"Sunspire crown"},{name:"Tidal Bastion",hp:80,income:8,cost:340,range:1.5,damage:3,fireRate:-.02,feature:"Outer tower terrace"},{name:"Storm Keep",hp:100,income:10,cost:460,range:1,damage:8,fireRate:-.04,feature:"Storm pylons"},{name:"Celestial Citadel",hp:130,income:13,cost:620,range:2,damage:12,fireRate:-.06,feature:"Celestial halo"}],bh={baseRange:10,baseDamage:8,fireRate:1.1},pv=["Ranger","Mounted Knight","Gryphon Rider","Celestial Archon"],nm=[0,1,3,6],mv={speed:7,damage:8,fireRate:1.15,range:16},qr=[{cost:40,speed:9,damage:13,fireRate:1,range:18},{cost:70,speed:11,damage:18,fireRate:.85,range:19},{cost:110,speed:12.5,damage:26,fireRate:.65,range:21},{cost:160,speed:14,damage:34,fireRate:.5,range:22},{cost:220,speed:15.5,damage:44,fireRate:.4,range:23},{cost:300,speed:17,damage:56,fireRate:.32,range:24}],ra={name:"War Rally",cooldown:30,duration:8,fireRate:1.35},As={name:"Sun Nova",cooldown:20,radius:13,damage:50,damagePerLevel:25,stun:1.5,pushback:4},Ah=3.5;var mm={};K_(mm,{bannerTexture:()=>$c,barkNormal:()=>VR,barkRoughness:()=>WR,barkTexture:()=>lm,clothTexture:()=>ua,cobbleNormal:()=>Ih,cobbleRoughness:()=>cm,cobbleTexture:()=>aa,crestTexture:()=>$R,glowSprite:()=>Zt,grassNormal:()=>om,grassTexture:()=>Wc,leafNormal:()=>XR,leafRoughness:()=>YR,leafTexture:()=>um,rockNormal:()=>Ph,rockRoughness:()=>am,rockTexture:()=>Kr,roofTexture:()=>qc,royalTexture:()=>Dh,runeTexture:()=>Nh,sandTexture:()=>Xc,scorchTexture:()=>pm,smokeSprite:()=>Kc,sparkSprite:()=>qR,stoneNormal:()=>ca,stoneRoughness:()=>la,stoneTexture:()=>Rs,waterFoamTexture:()=>dm,waterNormalTexture:()=>hm,woodNormal:()=>Lh,woodRoughness:()=>Yc,woodTexture:()=>Gi});function gv(n,e,t=.78){let i=new Image;i.onload=()=>{let r=n.image,o=r.getContext("2d");o.save(),o.globalAlpha=t,o.drawImage(i,0,0,r.width,r.height),o.restore(),n.needsUpdate=!0},i.onerror=()=>{};let s=document.documentElement.dataset.assetBase||"./public/";i.src=s+"textures/"+e}function Tt(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e||n,t}function or(n,e,t){let i=new zi(n);return i.wrapS=i.wrapT=Oi,i.repeat.set(e||1,t||e||1),i.anisotropy=8,i.colorSpace=bt,i}function Ch(n,e=null){let t=new zi(n);return t.wrapS=t.wrapT=Oi,t.anisotropy=8,t.colorSpace=kn,e&&(t.wrapS=e.wrapS,t.wrapT=e.wrapT,t.repeat.copy(e.repeat),t.anisotropy=e.anisotropy),t}var In=Math.PI*2;function ar(n){let e=n|0;return function(){e=e+1831565813|0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function $r(n,e,t,i,s){let r=new Float32Array(t*i);for(let a=0;a<i;a++)for(let l=0;l<t;l++){let c=Math.imul(l+1,374761393)+Math.imul(a+1,668265263)+Math.imul(s,1442695041);c=Math.imul(c^c>>>13,1274126177),r[a*t+l]=((c^c>>>16)>>>0)/4294967295}let o=new Float32Array(n*e);for(let a=0;a<e;a++){let l=a/e*i,c=Math.floor(l),u=l-c,d=u*u*(3-2*u),h=c%i*t,f=(c+1)%i*t;for(let m=0;m<n;m++){let x=m/n*t,g=Math.floor(x),p=x-g,v=p*p*(3-2*p),y=r[h+g%t],E=r[h+(g+1)%t],b=r[f+g%t],T=r[f+(g+1)%t];o[a*n+m]=y+(E-y)*v+(b+(T-b)*v-(y+(E-y)*v))*d}}return o}function li(n,e,t,i,s,r,o=.5){let a=new Float32Array(n*e),l=1,c=0;for(let u=0;u<s;u++){let d=$r(n,e,t<<u,i<<u,r+u*1013);for(let h=0;h<a.length;h++)a[h]+=d[h]*l;c+=l,l*=o}for(let u=0;u<a.length;u++)a[u]/=c;return a}function sn(n,e,t,i,s,r,o){let a=e-i<0?-1:0,l=e+i>r?1:0,c=t-s<0?-1:0,u=t+s>r?1:0;for(let d=a;d<=l;d++)for(let h=c;h<=u;h++)o(e+d*r,t+h*r)}function at(n){return n<0?0:n>255?255:n|0}function zR(n,e,t){let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}function kR(n,e,t){let i=n.width,s=n.height,r=n.getContext("2d").getImageData(0,0,i,s).data,o=new Float32Array(i*s);for(let u=0,d=0;u<r.length;u+=4,d++)o[d]=r[u]/255;let a=Tt(i,s),l=a.getContext("2d"),c=l.createImageData(i,s);for(let u=0;u<s;u++){let d=u*i,h=(u===0?s-1:u-1)*i,f=(u===s-1?0:u+1)*i;for(let m=0;m<i;m++){let x=m===0?i-1:m-1,g=m===i-1?0:m+1,p=(o[d+x]-o[d+g])*e,v=(o[h+m]-o[f+m])*e,y=1/Math.sqrt(p*p+v*v+1),E=(d+m)*4;c.data[E]=(p*y*.5+.5)*255,c.data[E+1]=(v*y*.5+.5)*255,c.data[E+2]=(y*.5+.5)*255,c.data[E+3]=255}}return l.putImageData(c,0,0),Ch(a,t)}var Vn={};function oa(n,e,t,i,s){if(!Vn[n]){let r=s(),o=or(r.color,e,t);Vn[n]={color:o,normal:kR(r.height,i,o),roughness:Ch(r.roughness,o)}}return Vn[n]}function GR(n,e=1){let t=n&&n.isTexture?n:null,i=t?t.image:n,s=i.width,r=i.height,a=i.getContext("2d").getImageData(0,0,s,r).data,l=Tt(s,r),c=l.getContext("2d"),u=c.createImageData(s,r),d=new Float32Array(s*r);for(let f=0,m=0;f<a.length;f+=4,m++)d[m]=(a[f]*.299+a[f+1]*.587+a[f+2]*.114)/255;for(let f=0;f<r;f++){let m=f*s,x=(f===0?r-1:f-1)*s,g=(f===r-1?0:f+1)*s;for(let p=0;p<s;p++){let v=(m+p)*4,y=p===0?s-1:p-1,E=p===s-1?0:p+1,b=(d[m+y]-d[m+E])*e,T=(d[x+p]-d[g+p])*e,S=1/Math.sqrt(b*b+T*T+1);u.data[v]=(b*S*.5+.5)*255,u.data[v+1]=(T*S*.5+.5)*255,u.data[v+2]=(S*.5+.5)*255,u.data[v+3]=255}}c.putImageData(u,0,0);let h=new zi(l);return h.colorSpace=kn,t?(h.wrapS=t.wrapS,h.wrapT=t.wrapT,h.repeat.copy(t.repeat),h.anisotropy=t.anisotropy):h.wrapS=h.wrapT=Oi,h}var im={};function Wn(n,e){return im[n]||(im[n]=e()),im[n]}function Wc(){return Wn("grass",()=>{let e=Tt(512),t=e.getContext("2d");t.fillStyle="#47562f",t.fillRect(0,0,512,512);function i(s,r,o,a,l){let c=s-o<0?-1:0,u=s+o>512?1:0,d=r-a<0?-1:0,h=r+a>512?1:0;for(let f=c;f<=u;f++)for(let m=d;m<=h;m++)l(s+f*512,r+m*512)}for(let s=0;s<150;s++){let r=Math.random()*512,o=Math.random()*512,a=18+Math.random()*55,l=12+Math.random()*40,c=Math.random()*Math.PI,u=Math.random(),d;u<.45?d=`rgba(${64+Math.random()*16}, ${92+Math.random()*28}, ${44+Math.random()*16}, 0.20)`:u<.78?d=`rgba(${38+Math.random()*14}, ${62+Math.random()*20}, ${32+Math.random()*12}, 0.22)`:d=`rgba(${112+Math.random()*26}, ${108+Math.random()*22}, ${58+Math.random()*18}, 0.18)`,i(r,o,a,l,(h,f)=>{t.save(),t.translate(h,f),t.rotate(c),t.fillStyle=d,t.beginPath(),t.ellipse(0,0,a,l,0,0,Math.PI*2),t.fill(),t.restore()})}t.lineWidth=1;for(let s=0;s<5400;s++){let r=Math.random()*512,o=Math.random()*512,a=3+Math.random()*7,l=(Math.random()-.5)*.9,c=70+Math.random()*26,u=20+Math.random()*18,d=22+Math.random()*18;t.strokeStyle=`hsla(${c}, ${u}%, ${d}%, 0.5)`,i(r,o,6,10,(h,f)=>{t.beginPath(),t.moveTo(h,f),t.lineTo(h+l*a,f-a),t.stroke()})}for(let s=0;s<60;s++){let r=Math.random()*512,o=Math.random()*512,a=Math.random()<.45?"rgba(255,248,225,0.5)":Math.random()<.5?"rgba(255,226,130,0.5)":"rgba(238,168,164,0.4)";i(r,o,3,3,(l,c)=>{t.fillStyle=a,t.beginPath(),t.arc(l,c,1.2+Math.random()*1.3,0,Math.PI*2),t.fill()})}return or(e,12)})}function om(){return Wn("grassN",()=>GR(Wc(),.6))}function Xc(){return Wn("sand",()=>{let n=Tt(256),e=n.getContext("2d");e.fillStyle="#cbb27a",e.fillRect(0,0,256,256);for(let t=0;t<2600;t++){let i=Math.random()<.5?"rgba(255,240,200,0.25)":"rgba(120,100,60,0.22)";e.fillStyle=i,e.fillRect(Math.random()*256,Math.random()*256,2,2)}for(let t=0;t<30;t++)e.fillStyle="rgba(150,128,84,0.18)",e.beginPath(),e.ellipse(Math.random()*256,Math.random()*256,8+Math.random()*22,5+Math.random()*10,0,0,Math.PI*2),e.fill();return or(n,4)})}function Kr(){return oa("rock",3,3,1.8,()=>{let e=Tt(256),t=Tt(256),i=Tt(256),s=e.getContext("2d"),r=t.getContext("2d"),o=i.getContext("2d"),a=li(256,256,4,8,4,1201),l=li(256,256,6,10,3,1202),c=$r(256,256,128,128,1203),u=s.createImageData(256,256),d=r.createImageData(256,256),h=o.createImageData(256,256);for(let m=0;m<256;m++)for(let x=0;x<256;x++){let g=m*256+x,p=g*4,v=.5+.5*Math.sin(In*(m/256*9+(l[g]-.5)*1.25)),E=96+(a[g]*30+v*13+(c[g]-.5)*15);u.data[p]=at(E+5),u.data[p+1]=at(E+1),u.data[p+2]=at(E-7),u.data[p+3]=255;let b=100+a[g]*48+v*25+c[g]*20;d.data[p]=d.data[p+1]=d.data[p+2]=at(b),d.data[p+3]=255;let T=194+a[g]*36+c[g]*18;h.data[p]=h.data[p+1]=h.data[p+2]=at(T),h.data[p+3]=255}s.putImageData(u,0,0),r.putImageData(d,0,0),o.putImageData(h,0,0);let f=ar(1204);for(let m=0;m<34;m++){let x=[],g=0,p=0;for(let b=0;b<7;b++)x.push([g,p]),g+=(f()-.5)*19,p+=5+f()*11;let v=f()*256,y=f()*256,E=.55+f()*1.25;sn(s,v,y,80,110,256,(b,T)=>{s.save(),s.lineCap="round",s.lineJoin="round",s.translate(b,T),s.beginPath(),x.forEach(([S,I],_)=>_?s.lineTo(S,I):s.moveTo(S,I)),s.strokeStyle="rgba(28,27,25,0.50)",s.lineWidth=E,s.stroke(),s.translate(.8,0),s.strokeStyle="rgba(225,219,205,0.15)",s.lineWidth=E*.55,s.stroke(),s.restore()}),sn(r,v,y,80,110,256,(b,T)=>{r.save(),r.lineCap="round",r.lineJoin="round",r.translate(b,T),r.beginPath(),x.forEach(([S,I],_)=>_?r.lineTo(S,I):r.moveTo(S,I)),r.strokeStyle="rgb(38,38,38)",r.lineWidth=E*1.5,r.stroke(),r.restore()})}for(let m=0;m<420;m++){let x=f()*256,g=f()*256,p=.4+f()*1.5,v=f()>.58,y=f()*Math.PI;sn(s,x,g,3,3,256,(E,b)=>{s.fillStyle=v?"rgba(218,215,190,0.22)":"rgba(35,34,31,0.25)",s.beginPath(),s.ellipse(E,b,p*1.7,p,y,0,In),s.fill()})}return{color:e,height:t,roughness:i}}).color}function Ph(){return Kr(),Vn.rock.normal}function am(){return Kr(),Vn.rock.roughness}function Rh(n,e,t,i,s,r){let o=r*.731;n.beginPath();let a=18;for(let l=0;l<a;l++){let c=l/a*In,u=1+.065*Math.sin(c*3+o)+.04*Math.sin(c*5-o*.7),d=e+Math.cos(c)*i*u,h=t+Math.sin(c)*s*u;l===0?n.moveTo(d,h):n.lineTo(d,h)}n.closePath()}function aa(){return oa("cobble",4,4,2.3,()=>{let e=Tt(256),t=Tt(256),i=Tt(256),s=e.getContext("2d"),r=t.getContext("2d"),o=i.getContext("2d"),a=li(256,256,32,32,3,1301),l=$r(256,256,128,128,1302),c=s.createImageData(256,256),u=r.createImageData(256,256),d=o.createImageData(256,256);for(let m=0;m<256*256;m++){let x=m*4,g=a[m]*.7+l[m]*.3;c.data[x]=at(47+g*31),c.data[x+1]=at(45+g*28),c.data[x+2]=at(40+g*24),c.data[x+3]=255,u.data[x]=u.data[x+1]=u.data[x+2]=at(36+g*24),u.data[x+3]=255,d.data[x]=d.data[x+1]=d.data[x+2]=at(218+g*30),d.data[x+3]=255}s.putImageData(c,0,0),r.putImageData(u,0,0),o.putImageData(d,0,0);let h=ar(1303),f=8;for(let m=0;m<f;m++){let x=m*32+16,g=m%2*16;for(let p=0;p<8;p++){let v=p*32+g,y=13.7+h()*1.1,E=13.5+h()*1.2,b=m*31+p*7+1,T=119+h()*35;sn(s,v,x,18,18,256,(S,I)=>{s.save(),s.globalAlpha=.91;let _=s.createRadialGradient(S-y*.3,I-E*.35,1,S,I,y*1.2);_.addColorStop(0,`rgb(${T+28},${T+21},${T+10})`),_.addColorStop(.62,`rgb(${T+8},${T+1},${T-10})`),_.addColorStop(1,`rgb(${T-22},${T-27},${T-32})`),s.fillStyle=_,Rh(s,S,I,y,E,b),s.fill(),s.globalAlpha=1,s.strokeStyle="rgba(30,28,25,0.62)",s.lineWidth=2.2,s.stroke(),s.save(),s.translate(S,I),s.scale(.88,.86),Rh(s,0,0,y,E,b),s.strokeStyle="rgba(240,232,211,0.16)",s.lineWidth=.9,s.stroke(),s.restore(),s.restore()}),sn(r,v,x,18,18,256,(S,I)=>{r.save();let _=r.createRadialGradient(S-y*.25,I-E*.3,1,S,I,y*1.15);_.addColorStop(0,"rgb(228,228,228)"),_.addColorStop(.7,"rgb(192,192,192)"),_.addColorStop(1,"rgb(136,136,136)"),r.fillStyle=_,Rh(r,S,I,y,E,b),r.fill(),r.strokeStyle="rgb(42,42,42)",r.lineWidth=3,r.stroke(),r.restore()}),sn(o,v,x,18,18,256,(S,I)=>{o.save();let _=o.createRadialGradient(S-y*.2,I-E*.2,1,S,I,y);_.addColorStop(0,`rgb(${T+86},${T+86},${T+86})`),_.addColorStop(1,`rgb(${T+56},${T+56},${T+56})`),o.fillStyle=_,Rh(o,S,I,y,E,b),o.fill(),o.restore()})}}return{color:e,height:t,roughness:i}}).color}function Ih(){return aa(),Vn.cobble.normal}function cm(){return aa(),Vn.cobble.roughness}function lm(){let n=oa("bark",2,4,2.3,()=>{let t=Tt(512),i=Tt(512),s=Tt(512),r=t.getContext("2d"),o=i.getContext("2d"),a=s.getContext("2d"),l=li(512,512,6,6,3,1701),c=li(512,512,72,12,3,1702),u=$r(512,512,256,64,1703),d=r.createImageData(512,512),h=o.createImageData(512,512),f=a.createImageData(512,512);for(let x=0;x<262144;x++){let g=x*4,p=1-Math.abs(c[x]*2-1),v=Math.pow(1-p,2.4),y=(l[x]-.5)*31+(u[x]-.5)*13;d.data[g]=at(96+y+p*20-v*35),d.data[g+1]=at(68+y*.72+p*13-v*28),d.data[g+2]=at(44+y*.47+p*8-v*18),d.data[g+3]=255;let E=55+p*116+l[x]*39+u[x]*18-v*27;h.data[g]=h.data[g+1]=h.data[g+2]=at(E),h.data[g+3]=255;let b=174+v*52+u[x]*20;f.data[g]=f.data[g+1]=f.data[g+2]=at(b),f.data[g+3]=255}r.putImageData(d,0,0),o.putImageData(h,0,0),a.putImageData(f,0,0);let m=ar(1704);for(let x=0;x<230;x++){let g=[],p=0,v=0,y=3+Math.floor(m()*5);for(let S=0;S<y;S++)g.push([p,v]),p+=(m()-.5)*6,v+=9+m()*18;let E=m()*512,b=m()*512,T=.55+m()*1.55;sn(r,E,b,55,210,512,(S,I)=>{r.save(),r.translate(S,I),r.lineCap="round",r.lineJoin="round",r.beginPath(),g.forEach(([_,A],G)=>G?r.lineTo(_,A):r.moveTo(_,A)),r.strokeStyle="rgba(31,22,14,0.58)",r.lineWidth=T,r.stroke(),r.translate(.9,0),r.strokeStyle="rgba(211,171,119,0.17)",r.lineWidth=T*.55,r.stroke(),r.restore()}),sn(o,E,b,55,210,512,(S,I)=>{o.save(),o.translate(S,I),o.lineCap="round",o.lineJoin="round",o.beginPath(),g.forEach(([_,A],G)=>G?o.lineTo(_,A):o.moveTo(_,A)),o.strokeStyle="rgb(27,27,27)",o.lineWidth=T*1.45,o.stroke(),o.restore()})}for(let x=0;x<560;x++){let g=m()*512,p=m()*512,v=1.2+m()*3.8,y=.45+m()*1.15,E=(m()-.5)*.35,b=m()>.45;sn(r,g,p,v+2,y+2,512,(T,S)=>{r.beginPath(),r.ellipse(T,S,v,y,E,0,In),r.fillStyle=b?"rgba(192,161,112,0.24)":"rgba(38,26,16,0.34)",r.fill()})}for(let x=0;x<48;x++){let g=m()*512,p=m()*512,v=2+m()*7,y=1.5+m()*4,E=m()*Math.PI;sn(r,g,p,v+2,y+2,512,(b,T)=>{r.beginPath(),r.ellipse(b,T,v,y,E,0,In),r.fillStyle="rgba(142,151,112,0.13)",r.fill()})}return{color:t,height:i,roughness:s}}).color;return gv(n,"bark.jpg",.82),n}function VR(){return lm(),Vn.bark.normal}function WR(){return lm(),Vn.bark.roughness}function sm(n,e,t){n.beginPath(),n.moveTo(-e*.5,0),n.bezierCurveTo(-e*.18,-t,e*.2,-t,e*.5,0),n.bezierCurveTo(e*.18,t,-e*.2,t,-e*.5,0),n.closePath()}function um(){let n=oa("leaf",2,2,1.05,()=>{let t=Tt(512),i=Tt(512),s=Tt(512),r=t.getContext("2d"),o=i.getContext("2d"),a=s.getContext("2d"),l=li(512,512,8,8,4,1801),c=li(512,512,24,24,3,1802),u=$r(512,512,256,256,1803),d=r.createImageData(512,512),h=o.createImageData(512,512),f=a.createImageData(512,512);for(let g=0;g<262144;g++){let p=g*4,v=l[g]*.58+c[g]*.42,y=(u[g]-.5)*13;d.data[p]=at(40+v*31+y*.55),d.data[p+1]=at(72+v*53+y),d.data[p+2]=at(28+v*24+y*.42),d.data[p+3]=255;let E=76+v*48+u[g]*18;h.data[p]=h.data[p+1]=h.data[p+2]=at(E),h.data[p+3]=255;let b=176+v*31+u[g]*15;f.data[p]=f.data[p+1]=f.data[p+2]=at(b),f.data[p+3]=255}r.putImageData(d,0,0),o.putImageData(h,0,0),a.putImageData(f,0,0);let m=ar(1804),x=[[48,91,35],[58,105,39],[70,113,43],[82,119,47],[92,124,52]];for(let g=0;g<135;g++){let p=m()*512,v=m()*512,y=12+m()*19,E=x[Math.floor(m()*x.length)],b=12+Math.floor(m()*15),T=[];for(let S=0;S<b;S++){let I=m()*In,_=Math.sqrt(m())*y,A=(m()-.5)*21;T.push({x:Math.cos(I)*_,y:Math.sin(I)*_*.78,rotation:I+(m()-.5)*1.3,length:5+m()*7,width:1.7+m()*2.3,color:[E[0]+A,E[1]+A,E[2]+A*.6],height:166+m()*51,roughness:174+m()*38})}sn(r,p,v,y+12,y+12,512,(S,I)=>{T.forEach(_=>{r.save(),r.translate(S+_.x,I+_.y),r.rotate(_.rotation),sm(r,_.length,_.width),r.fillStyle=`rgb(${at(_.color[0])},${at(_.color[1])},${at(_.color[2])})`,r.fill(),r.beginPath(),r.moveTo(-_.length*.38,0),r.lineTo(_.length*.38,0),r.strokeStyle="rgba(24,48,18,0.34)",r.lineWidth=.55,r.stroke(),r.restore()})}),sn(o,p,v,y+12,y+12,512,(S,I)=>{T.forEach(_=>{o.save(),o.translate(S+_.x,I+_.y),o.rotate(_.rotation),sm(o,_.length,_.width),o.fillStyle=`rgb(${at(_.height)},${at(_.height)},${at(_.height)})`,o.fill(),o.beginPath(),o.moveTo(-_.length*.38,0),o.lineTo(_.length*.38,0),o.strokeStyle="rgb(112,112,112)",o.lineWidth=.7,o.stroke(),o.restore()})}),sn(a,p,v,y+12,y+12,512,(S,I)=>{T.forEach(_=>{a.save(),a.translate(S+_.x,I+_.y),a.rotate(_.rotation),sm(a,_.length,_.width),a.fillStyle=`rgb(${at(_.roughness)},${at(_.roughness)},${at(_.roughness)})`,a.fill(),a.restore()})})}return{color:t,height:i,roughness:s}}).color;return gv(n,"leaves.jpg",.76),n}function XR(){return um(),Vn.leaf.normal}function YR(){return um(),Vn.leaf.roughness}function rm(n,e,t,i,s,r){let o=ar(r);n.beginPath(),n.moveTo(e+1.5+o()*2,t+1+o()*2),n.lineTo(e+i-1-o()*2,t+1+o()*2),n.lineTo(e+i-1-o()*2,t+s-1-o()*2),n.lineTo(e+1.5+o()*2,t+s-1-o()*2),n.closePath()}function Rs(){return oa("stone",2,2,2.2,()=>{let e=Tt(256),t=Tt(256),i=Tt(256),s=e.getContext("2d"),r=t.getContext("2d"),o=i.getContext("2d"),a=li(256,256,8,8,3,1501),l=$r(256,256,128,128,1502),c=s.createImageData(256,256),u=r.createImageData(256,256),d=o.createImageData(256,256);for(let m=0;m<256*256;m++){let x=m*4,g=a[m]*.7+l[m]*.3;c.data[x]=at(45+g*30),c.data[x+1]=at(48+g*31),c.data[x+2]=at(53+g*32),c.data[x+3]=255,u.data[x]=u.data[x+1]=u.data[x+2]=at(38+g*22),u.data[x+3]=255,d.data[x]=d.data[x+1]=d.data[x+2]=at(226+g*24),d.data[x+3]=255}s.putImageData(c,0,0),r.putImageData(u,0,0),o.putImageData(d,0,0);let h=ar(1503),f=64;for(let m=0;m<4;m++){let x=m%2?f/2:0;for(let g=0;g<4;g++){let p=g*f+(x?-f/2:0),v=m*f,y=m*47+g*13+1,E=Math.round(124+(h()-.5)*25+a[(m*64+20)*256+(p+32+256)%256]*16);if(sn(s,p+f/2,v+f/2,36,36,256,(b,T)=>{s.save(),s.globalAlpha=.94;let S=s.createLinearGradient(b-30,T-30,b+30,T+30);S.addColorStop(0,`rgb(${E+23},${E+26},${E+31})`),S.addColorStop(.55,`rgb(${E+4},${E+8},${E+14})`),S.addColorStop(1,`rgb(${E-23},${E-19},${E-12})`),s.fillStyle=S,rm(s,b-30,T-30,60,60,y),s.fill(),s.globalAlpha=1,s.strokeStyle="rgba(22,25,29,0.60)",s.lineWidth=2.5,s.stroke(),s.strokeStyle="rgba(238,242,244,0.20)",s.lineWidth=1.2,s.beginPath(),s.moveTo(b-27,T-26),s.lineTo(b+26,T-26),s.moveTo(b-27,T-26),s.lineTo(b-27,T+25),s.stroke(),s.strokeStyle="rgba(20,23,27,0.30)",s.beginPath(),s.moveTo(b+27,T+26),s.lineTo(b-26,T+26),s.moveTo(b+27,T+26),s.lineTo(b+27,T-25),s.stroke(),s.restore()}),sn(r,p+f/2,v+f/2,36,36,256,(b,T)=>{r.save();let S=r.createLinearGradient(b-28,T-28,b+28,T+28);S.addColorStop(0,"rgb(228,228,228)"),S.addColorStop(.7,"rgb(194,194,194)"),S.addColorStop(1,"rgb(158,158,158)"),r.fillStyle=S,rm(r,b-30,T-30,60,60,y),r.fill(),r.strokeStyle="rgb(34,34,34)",r.lineWidth=3.5,r.stroke(),r.restore()}),sn(o,p+f/2,v+f/2,36,36,256,(b,T)=>{o.save(),o.fillStyle=`rgb(${E+77},${E+77},${E+77})`,rm(o,b-30,T-30,60,60,y),o.fill(),o.restore()}),h()<.42){let b=p+10+h()*40,T=v+7,S=[[0,0],[(h()-.5)*9,15],[(h()-.5)*15,31],[(h()-.5)*13,48]];sn(s,b,T,20,55,256,(I,_)=>{s.save(),s.translate(I,_),s.beginPath(),S.forEach(([A,G],X)=>X?s.lineTo(A,G):s.moveTo(A,G)),s.strokeStyle="rgba(31,35,40,0.42)",s.lineWidth=.8,s.stroke(),s.restore()}),sn(r,b,T,20,55,256,(I,_)=>{r.save(),r.translate(I,_),r.beginPath(),S.forEach(([A,G],X)=>X?r.lineTo(A,G):r.moveTo(A,G)),r.strokeStyle="rgb(84,84,84)",r.lineWidth=1.4,r.stroke(),r.restore()})}}}return{color:e,height:t,roughness:i}}).color}function ca(){return Rs(),Vn.stone.normal}function la(){return Rs(),Vn.stone.roughness}function Gi(){return oa("wood",2,2,1.15,()=>{let t=Tt(256),i=Tt(256),s=Tt(256),r=t.getContext("2d"),o=i.getContext("2d"),a=s.getContext("2d"),l=li(256,256,8,96,3,1601),c=li(256,256,4,32,3,1602),u=$r(256,256,128,32,1603),d=r.createImageData(256,256),h=o.createImageData(256,256),f=a.createImageData(256,256),m=ar(1604),x=Array.from({length:8},()=>92+m()*33);for(let p=0;p<256;p++){let v=x[Math.floor(p/32)];for(let y=0;y<256;y++){let E=p*256+y,b=E*4,T=.5+.5*Math.sin(In*(p/256*96+(c[E]-.5)*1.7)),S=Math.pow(T,5)*19,I=(l[E]-.5)*24+(u[E]-.5)*12-S;d.data[b]=at(v+26+I),d.data[b+1]=at(v-6+I*.72),d.data[b+2]=at(v-34+I*.48),d.data[b+3]=255;let _=116+l[E]*57+u[E]*25-S*2.1;h.data[b]=h.data[b+1]=h.data[b+2]=at(_),h.data[b+3]=255;let A=174+l[E]*43+u[E]*17;f.data[b]=f.data[b+1]=f.data[b+2]=at(A),f.data[b+3]=255}}r.putImageData(d,0,0),o.putImageData(h,0,0),a.putImageData(f,0,0);function g(p,v,y,E,b,T,S,I=0){p.beginPath();for(let _=0;_<=256;_+=8){let A=v+I+Math.sin(In*_/256*E+b)*y+Math.sin(In*_/256*(E*2+1)-b*.6)*y*.28;_===0?p.moveTo(_,A):p.lineTo(_,A)}p.strokeStyle=T,p.lineWidth=S,p.stroke()}for(let p=0;p<8;p++){let v=p*32;r.fillStyle="rgba(24,14,6,0.68)",r.fillRect(0,v,256,2),r.fillStyle="rgba(238,203,151,0.15)",r.fillRect(0,v+2,256,1),o.fillStyle="rgb(42,42,42)",o.fillRect(0,v,256,3),o.fillStyle="rgb(215,215,215)",o.fillRect(0,v+3,256,1),a.fillStyle="rgb(236,236,236)",a.fillRect(0,v,256,2);for(let y=0;y<27;y++){let E=v+5+m()*22,b=.5+m()*2.2,T=1+Math.floor(m()*3),S=m()*In;g(r,E,b,T,S,`rgba(${48+m()*22},${29+m()*14},${12+m()*9},0.32)`,.55+m()*.65),y%3===0&&g(r,E,b,T,S,"rgba(238,194,133,0.14)",.6,1.1),g(o,E,b,T,S,"rgb(102,102,102)",.8)}for(let y=0;y<2;y++){let E=18+m()*220,b=v+8+m()*16,T=3+m()*3.5,S=1.7+m()*2.2,I=(m()-.5)*.2;sn(r,E,b,T*3,S*3,256,(_,A)=>{r.save(),r.translate(_,A),r.rotate(I);for(let G=4;G>=1;G--)r.beginPath(),r.ellipse(0,0,T*G/2,S*G/2,0,0,In),r.strokeStyle=G===1?"rgba(31,18,7,0.72)":`rgba(48,27,10,${.46-G*.06})`,r.lineWidth=G===1?1.6:.75,r.stroke();r.restore()}),sn(o,E,b,T*3,S*3,256,(_,A)=>{o.beginPath(),o.ellipse(_,A,T*1.8,S*1.8,0,0,In),o.fillStyle="rgb(66,66,66)",o.fill()})}}return{color:t,height:i,roughness:s}}).color}function Lh(){return Gi(),Vn.wood.normal}function Yc(){return Gi(),Vn.wood.roughness}function qc(){return Wn("roof",()=>{let n=Tt(256),e=n.getContext("2d");e.fillStyle="#5c2f28",e.fillRect(0,0,256,256);let t=32,i=32;for(let s=0;s<256;s+=t){let r=s/t%2===0?0:i/2;for(let o=-i;o<256;o+=i){let a=o+r,l=Math.random()*26-13;e.fillStyle=`rgb(${126+l+Math.random()*20}, ${54+l+Math.random()*12}, ${44+l+Math.random()*8})`,e.fillRect(a+2,s+2,i-4,t-4),e.fillStyle="rgba(255,255,255,0.10)",e.fillRect(a+2,s+t-6,i-4,2),e.fillStyle="rgba(0,0,0,0.28)",e.fillRect(a+2,s+2,i-4,2)}}return or(n,2)})}function ua(n,e,t){return Wn("cloth_"+n,()=>{let i=Tt(128),s=i.getContext("2d");s.fillStyle=e,s.fillRect(0,0,128,128);for(let r=0;r<700;r++)s.fillStyle="rgba(0,0,0,0.13)",s.fillRect(Math.random()*128,Math.random()*128,2,2);for(let r=0;r<700;r++)s.fillStyle="rgba(255,255,255,0.05)",s.fillRect(Math.random()*128,Math.random()*128,2,2);return s.strokeStyle=t,s.lineWidth=12,s.globalAlpha=.45,s.beginPath(),s.moveTo(0,128),s.lineTo(128,0),s.stroke(),s.globalAlpha=1,or(i,1)})}function Dh(){return Wn("royal",()=>{let n=Tt(128),e=n.getContext("2d");e.fillStyle="#20355c",e.fillRect(0,0,128,128);for(let t=0;t<400;t++)e.fillStyle="rgba(255,255,255,0.05)",e.fillRect(Math.random()*128,Math.random()*128,2,2);return e.strokeStyle="#e8b64c",e.lineWidth=5,e.strokeRect(5,5,118,118),e.lineWidth=2,e.strokeRect(11,11,106,106),or(n,1)})}function $c(){return Wn("banner",()=>{let n=Tt(128),e=n.getContext("2d");e.fillStyle="#e8b64c",e.fillRect(0,0,128,128),e.fillStyle="#a52a2a",e.fillRect(56,0,16,128),e.fillRect(0,56,128,16),e.fillStyle="rgba(255,255,255,0.18)";for(let t=0;t<200;t++)e.fillRect(Math.random()*128,Math.random()*128,2,2);return or(n,1)})}function hm(){return Wn("waterN",()=>{let e=Tt(256),t=e.getContext("2d"),i=t.createImageData(256,256),r=[[1,2,.55,0],[2,-1,.44,1.7],[2,5,.34,4.7],[3,4,.3,.9],[-4,3,.24,2.8],[5,-2,.2,4.1],[7,6,.13,1.2],[-9,5,.1,3.4],[11,-8,.07,5],[17,13,.045,2.2],[23,-19,.03,.6],[29,17,.022,3.1],[37,-23,.016,5.4],[43,31,.011,1.8],[-31,41,.014,4.2]].map(([a,l,c,u])=>{let d=new Float64Array(256),h=new Float64Array(256),f=new Float64Array(256),m=new Float64Array(256);for(let g=0;g<256;g++){let p=In*a*(g/256)+u,v=In*l*(g/256);d[g]=Math.cos(p),h[g]=Math.sin(p),f[g]=Math.cos(v),m[g]=Math.sin(v)}let x=c*In;return{xCos:d,xSin:h,yCos:f,ySin:m,dx:x*a,dy:x*l}});for(let a=0;a<256;a++)for(let l=0;l<256;l++){let c=0,u=0;for(let h=0;h<r.length;h++){let f=r[h],m=f.xCos[l]*f.yCos[a]-f.xSin[l]*f.ySin[a];c+=m*f.dx,u+=m*f.dy}let d=(a*256+l)*4;i.data[d]=Math.max(0,Math.min(255,128-c*.0075*128)),i.data[d+1]=Math.max(0,Math.min(255,128-u*.0075*128)),i.data[d+2]=255,i.data[d+3]=255}t.putImageData(i,0,0);let o=Ch(e);return o.anisotropy=8,o})}function dm(){return Wn("waterFoam",()=>{let e=Tt(256),t=e.getContext("2d"),i=li(256,256,5,5,4,1901),s=li(256,256,24,24,3,1902),r=li(256,256,12,36,3,1903),o=t.createImageData(256,256);for(let l=0;l<256*256;l++){let u=(1-Math.abs(i[l]*2-1))*.52+s[l]*.3+r[l]*.18,d=zR(.53,.73,u)*(.58+s[l]*.42),h=at(d*255),f=l*4;o.data[f]=o.data[f+1]=o.data[f+2]=h,o.data[f+3]=255}t.putImageData(o,0,0);let a=ar(1904);for(let l=0;l<720;l++){let c=a()*256,u=a()*256,d=.45+a()*1.8,h=.18+a()*.48;sn(t,c,u,d+1,d+1,256,(f,m)=>{t.beginPath(),t.arc(f,m,d,0,In),t.fillStyle=`rgba(255,255,255,${h})`,t.fill()})}return Ch(e)})}function fm(n,e,t,i){let s=Tt(n),r=s.getContext("2d"),o=r.createRadialGradient(n/2,n/2,n*e,n/2,n/2,n/2*.98);i.forEach(l=>o.addColorStop(l[0],l[1])),r.fillStyle=o,r.fillRect(0,0,n,n);let a=new zi(s);return a.colorSpace=bt,a}function Zt(){return Wn("glow",()=>fm(128,0,.5,[[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,0.55)"],[.6,"rgba(255,255,255,0.12)"],[1,"rgba(255,255,255,0)"]]))}function qR(){return Wn("spark",()=>fm(64,0,.35,[[0,"rgba(255,255,255,1)"],[.4,"rgba(255,255,255,0.6)"],[1,"rgba(255,255,255,0)"]]))}function Kc(){return Wn("smoke",()=>{let n=Tt(128),e=n.getContext("2d"),t=e.createRadialGradient(64,64,8,64,64,62);t.addColorStop(0,"rgba(255,255,255,0.65)"),t.addColorStop(.6,"rgba(255,255,255,0.22)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.globalCompositeOperation="destination-out";for(let s=0;s<40;s++){let r=Math.random()*Math.PI*2,o=20+Math.random()*44;e.beginPath(),e.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,6+Math.random()*12,0,Math.PI*2),e.fillStyle="rgba(0,0,0,0.35)",e.fill()}let i=new zi(n);return i.colorSpace=bt,i})}function pm(){return Wn("scorch",()=>fm(128,0,.5,[[0,"rgba(8,6,5,0.85)"],[.55,"rgba(12,10,8,0.5)"],[1,"rgba(12,10,8,0)"]]))}function Nh(n){return Wn("rune_"+n,()=>{let e=Tt(128),t=e.getContext("2d");t.clearRect(0,0,128,128),t.strokeStyle="#ffffff",t.fillStyle="#ffffff",t.lineWidth=9,t.lineCap="round",t.lineJoin="round";let i=64,s=64;switch(n){case"archer":t.beginPath(),t.moveTo(28,100),t.lineTo(100,28),t.stroke(),t.beginPath(),t.moveTo(100,28),t.lineTo(74,30),t.moveTo(100,28),t.lineTo(98,54),t.stroke(),t.beginPath(),t.moveTo(40,88),t.lineTo(52,100),t.moveTo(28,100),t.lineTo(44,116),t.stroke();break;case"cannon":t.beginPath(),t.arc(i,s+8,34,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(76,42),t.quadraticCurveTo(92,26,84,14),t.stroke(),t.beginPath(),t.arc(84,12,6,0,Math.PI*2),t.fill();break;case"frost":for(let o=0;o<6;o++){let a=o/6*Math.PI*2,l=Math.cos(a),c=Math.sin(a);t.beginPath(),t.moveTo(i,s),t.lineTo(i+l*42,s+c*42),t.stroke();for(let u of[.55,.8]){let d=i+l*42*u,h=s+c*42*u,f=a+.6,m=a-.6;t.beginPath(),t.moveTo(d,h),t.lineTo(d+Math.cos(f)*14,h+Math.sin(f)*14),t.moveTo(d,h),t.lineTo(d+Math.cos(m)*14,h+Math.sin(m)*14),t.stroke()}}break;case"tesla":t.beginPath(),t.moveTo(74,14),t.lineTo(44,66),t.lineTo(66,66),t.lineTo(50,114),t.lineTo(92,54),t.lineTo(66,54),t.lineTo(84,14),t.closePath(),t.fill();break}let r=new zi(e);return r.colorSpace=bt,r})}function $R(){return Wn("crest",()=>{let n=Tt(128),e=n.getContext("2d");e.beginPath(),e.moveTo(64,8),e.lineTo(112,26),e.lineTo(104,78),e.quadraticCurveTo(96,108,64,122),e.quadraticCurveTo(32,108,24,78),e.lineTo(16,26),e.closePath();let t=e.createLinearGradient(0,0,0,128);return t.addColorStop(0,"#f3d27a"),t.addColorStop(.5,"#d8a83e"),t.addColorStop(1,"#9a7424"),e.fillStyle=t,e.fill(),e.strokeStyle="#5c451c",e.lineWidth=5,e.stroke(),e.fillStyle="#5c451c",e.fillRect(50,44,28,44),e.beginPath(),e.moveTo(44,46),e.lineTo(64,20),e.lineTo(84,46),e.closePath(),e.fill(),e.fillRect(42,88,44,6),or(n,1)})}var KR=document.getElementById("renderCanvas"),vt=new _c({canvas:KR,antialias:!1,powerPreference:"high-performance"});vt.setSize(window.innerWidth,window.innerHeight);vt.setPixelRatio(Math.min(window.devicePixelRatio||1,1));vt.shadowMap.enabled=!0;vt.shadowMap.type=Fp;vt.shadowMap.autoUpdate=!1;vt.shadowMap.needsUpdate=!0;vt.toneMapping=Uc;vt.toneMappingExposure=.9;var Ne=new Sc;Ne.fog=new qu(14467226,.003);var Vt=new nn(48,window.innerWidth/window.innerHeight,.1,5e3);Vt.position.set(0,28,31);var Em=new na;Em.scale.setScalar(6e3);Ne.add(Em);var lr=new w,jc=Em.material.uniforms;jc.turbidity.value=6;jc.rayleigh.value=1.9;jc.mieCoefficient.value=.005;jc.mieDirectionalG.value=.8;var ZR=22,JR=28,jR=Ts.degToRad(90-ZR),QR=Ts.degToRad(JR);lr.setFromSphericalCoords(1,jR,QR);jc.sunPosition.value.copy(lr);var _m=new Gt(new Pt({map:Zt(),color:16774360,transparent:!0,blending:$e,depthWrite:!1,fog:!1}));_m.scale.setScalar(700);_m.position.copy(lr).multiplyScalar(3200);Ne.add(_m);var Dn=new nr(16766883,3.2);Dn.position.copy(lr).multiplyScalar(180);Dn.castShadow=!0;Dn.shadow.mapSize.set(1024,1024);Dn.shadow.camera.near=20;Dn.shadow.camera.far=420;Dn.shadow.camera.left=-80;Dn.shadow.camera.right=80;Dn.shadow.camera.top=80;Dn.shadow.camera.bottom=-80;Dn.shadow.bias=-4e-4;Dn.shadow.normalBias=.35;Ne.add(Dn);Ne.add(Dn.target);var eC=new ah(12834534,7034422,.95);Ne.add(eC);var xv=new nr(8032456,.55);xv.position.set(-lr.x*120,60,-lr.z*120);Ne.add(xv);var yv=new nr(16767416,.65);yv.position.set(20,55,70);Ne.add(yv);var vv=[];for(let n=0;n<2;n++){let e=new Ss(16777215,0,30,1.8);e.position.set(0,-100,0),Ne.add(e),vv.push(e)}function Mv(n,e,t){let i=vv.find(s=>s.userData.free!==!1);return i?(i.userData.free=!1,i.color.setHex(n),i.intensity=e,i.distance=t||30,i):null}function Sm(n){n&&(n.intensity=0,n.userData.free=!0,n.position.set(0,-100,0))}var xm=512,on=new xh(new un(5e3,5e3),{textureWidth:xm,textureHeight:xm,waterNormals:hm(),sunDirection:lr.clone(),sunColor:16771268,waterColor:668738,distortionScale:6,fog:!0});on.rotation.x=-Math.PI/2;on.position.y=-2.6;on.material.uniforms.size.value=9;on.material.uniforms.uShoreRadius={value:vn};on.material.uniforms.uReflectionStrength={value:1};on.material.uniforms.uFoamColor={value:new ye(15006719)};on.material.uniforms.uShallowColor={value:new ye(3119784)};on.material.uniforms.uDeepColor={value:new ye(671826)};on.material.uniforms.uFoamSampler={value:dm()};on.material.uniforms.uWaterDetail={value:1};on.material.fragmentShader=on.material.fragmentShader.replace("uniform vec3 waterColor;",`uniform vec3 waterColor;
     uniform float uReflectionStrength;
     uniform sampler2D uFoamSampler;
     uniform float uWaterDetail;
     uniform vec3 uFoamColor;
     uniform vec3 uShallowColor;
     uniform vec3 uDeepColor;
     uniform float uShoreRadius;`).replace(/vec4 noise = texture2D\( normalSampler, uv0 \) \+\s*texture2D\( normalSampler, uv1 \) \+\s*texture2D\( normalSampler, uv2 \) \+\s*texture2D\( normalSampler, uv3 \);\s*return noise \* 0\.5 - 1\.0;/,`vec4 noise = texture2D( normalSampler, uv0 ) + texture2D( normalSampler, uv1 );
     float sampleCount = 2.0;
     if ( uWaterDetail > 0.5 ) {
       noise += texture2D( normalSampler, uv2 )
              + texture2D( normalSampler, uv3 );
       sampleCount += 2.0;
       // Weighted extra octaves retain the neutral (0.5, 0.5, 1) centre,
       // unlike simply adding samples, which would tilt every normal.
       vec4 neutral = vec4( 0.5, 0.5, 1.0, 1.0 );
       noise += mix( neutral, texture2D( normalSampler, uv / 37.0 + vec2( time / 13.0, -time / 21.0 ) ), 0.60 );
       noise += mix( neutral, texture2D( normalSampler, uv / 29.0 - vec2( time / 17.0, time / 11.0 ) ), 0.45 );
       sampleCount += 2.0;
     }
     return noise * ( 2.0 / sampleCount ) - 1.0;`).replace("vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );",`vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );
     vec2 fineSlope = texture2D( normalSampler, worldPosition.xz * 0.16 + vec2( time * 0.02, -time * 0.016 ) ).rg * 2.0 - 1.0;
     if ( uWaterDetail > 0.5 ) {
       vec2 crossSlope = texture2D( normalSampler, worldPosition.xz * 0.31 - vec2( time * 0.013, time * 0.019 ) ).rg * 2.0 - 1.0;
       surfaceNormal = normalize( surfaceNormal + vec3( fineSlope.x + crossSlope.x * 0.55, 0.0, fineSlope.y + crossSlope.y * 0.55 ) * 0.38 );
     } else {
       surfaceNormal = normalize( surfaceNormal + vec3( fineSlope.x, 0.0, fineSlope.y ) * 0.20 );
     }`).replace("vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );",`vec3 reflectionSample = vec3( 0.0 );
     if ( uReflectionStrength > 0.001 ) {
       reflectionSample = texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ).rgb;
       // Absorption in the reflected path keeps the sky from turning the
       // whole sea into a bright, colourless mirror.
       reflectionSample = mix( reflectionSample, reflectionSample * vec3( 0.52, 0.70, 0.86 ), 0.55 );
       reflectionSample += vec3( 0.006, 0.018, 0.030 );
     }
     float horizon = pow( 1.0 - clamp( surfaceNormal.y, 0.0, 1.0 ), 2.0 );
     vec3 skyFallback = mix( vec3( 0.10, 0.19, 0.24 ), vec3( 0.38, 0.49, 0.54 ), horizon );
     skyFallback += sunColor * pow( max( dot( reflect( -sunDirection, surfaceNormal ), eyeDirection ), 0.0 ), 48.0 ) * 0.22;
     vec3 reflectedLight = mix(
       skyFallback,
       vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight,
       uReflectionStrength
     );`).replace("vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);",`float shoreDepth = smoothstep( 0.0, 90.0, max( length( worldPosition.xz ) - uShoreRadius, 0.0 ) );
     vec3 waterBody = ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask();
     waterBody = mix( waterBody, uDeepColor, 0.16 + shoreDepth * 0.28 );
     vec3 albedo = mix( waterBody, reflectedLight, reflectance );`).replace("vec3 outgoingLight = albedo;",`vec3 outgoingLight = albedo;

     // Distance deepens the body colour while grazing views retain more
     // reflection, matching the way a real sea fades into blue haze.
     float eyeDist = length( eye - worldPosition.xyz );
     float distanceDepth = smoothstep( 45.0, 420.0, eyeDist );
     outgoingLight = mix( outgoingLight, uDeepColor, ( 0.08 + distanceDepth * 0.20 ) * ( 1.0 - reflectance * 0.55 ) );
     outgoingLight *= vec3( 0.84, 0.94, 1.0 );

     // Broad swell variation plus separate broad/sharp sun highlights.
     float swell = texture2D( normalSampler, worldPosition.xz * 0.045 + vec2( time * 0.006, -time * 0.004 ) ).r;
     outgoingLight *= 0.93 + swell * 0.14;
     vec3 halfVector = normalize( sunDirection + eyeDirection );
     float sunAlignment = max( dot( surfaceNormal, halfVector ), 0.0 );
     float broadGlitter = pow( sunAlignment, 48.0 );
     float sharpGlitter = pow( sunAlignment, 260.0 );
     float glitterVisibility = 0.35 + 0.65 * smoothstep( 0.0, 0.35, surfaceNormal.y );
     outgoingLight += sunColor * ( broadGlitter * 0.07 + sharpGlitter * 0.55 ) * glitterVisibility;

     // ---- shoreline: depth tint, subtle caustics and broken foam ----
     float shoreDist = length( worldPosition.xz ) - uShoreRadius;
     float shallow = 1.0 - smoothstep( 0.0, 18.0, max( shoreDist, 0.0 ) );
     outgoingLight = mix( outgoingLight, uShallowColor, shallow * 0.46 );

     float foamMain = texture2D( uFoamSampler, worldPosition.xz * 0.36 + vec2( time * 0.035, -time * 0.022 ) ).r;
     float foamFine = foamMain;
     if ( uWaterDetail > 0.5 ) {
       foamFine = texture2D( uFoamSampler, worldPosition.xz * 0.91 - vec2( time * 0.061, time * 0.043 ) ).r;
     }
     float foamField = foamMain * 0.68 + foamFine * 0.32;
     float caustic = smoothstep( 0.58, 0.84, foamFine ) * shallow;
     outgoingLight += uShallowColor * caustic * 0.07;

     float foamBand = ( 1.0 - smoothstep( 0.05, 5.8, max( shoreDist, 0.0 ) ) )
                    * smoothstep( -1.2, 0.25, shoreDist );
     float wash = 0.5
                + 0.25 * sin( shoreDist * 2.6 - time * 1.7 + foamField * 5.0 )
                + 0.25 * sin( shoreDist * 5.3 - time * 2.15 - foamField * 3.0 );
     float breakup = smoothstep( 0.24, 0.66, foamField + ( noise.x + noise.z ) * 0.06 );
     float foam = foamBand * max( wash, 0.0 ) * breakup;
     foam = max( foam, smoothstep( 0.45, 0.80, foamField ) * foamBand * 0.35 );
     outgoingLight = mix( outgoingLight, uFoamColor, clamp( foam * 1.20, 0.0, 0.88 ) );`);function Tm(n){on.material.uniforms.uShoreRadius.value=n}Ne.add(on);var tC=on.onBeforeRender,Zc=!1,Uh=0,ym=0,gm=!1;on.onBeforeRender=function(n,e,t){if(gm||(on.material.uniforms.eye.value.setFromMatrixPosition(t.matrixWorld),!Zc||Uh<=0))return;let i=performance.now();if(!(i<ym)){ym=i+1e3/Uh,gm=!0;try{tC.call(this,n,e,t)}finally{gm=!1}}};var Ev=new Ko(vt),_v=new Sc,ur=new na;ur.scale.setScalar(6e3);ur.material.uniforms.turbidity.value=6;ur.material.uniforms.rayleigh.value=1.9;ur.material.uniforms.mieCoefficient.value=.005;ur.material.uniforms.mieDirectionalG.value=.8;ur.material.uniforms.sunPosition.value.copy(lr);_v.add(ur);var nC=Ev.fromScene(_v);Ne.environment=nC.texture;Ev.dispose();ur.material.dispose();var is=new Mh(vt),iC=new Eh(Ne,Vt);is.addPass(iC);var wm=new ia(new te(window.innerWidth,window.innerHeight),.38,.52,.92);is.addPass(wm);is.addPass(new _h);var Oh=new Wr(ev);is.addPass(Oh);var sC={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.2},uCA:{value:.002},uGrain:{value:.028},uSat:{value:1.06},uContrast:{value:1.06},uDamage:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime, uVignette, uCA, uGrain, uSat, uDamage, uContrast;
    varying vec2 vUv;
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }
    void main() {
      vec2 uv = vUv;
      vec2 fromCenter = uv - 0.5;
      float dist = length(fromCenter);
      // Chromatic aberration, stronger at edges
      float ca = uCA * dist;
      vec3 col;
      col.r = texture2D(tDiffuse, uv + fromCenter * ca).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - fromCenter * ca).b;
      // Saturation grade
      float luma = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(luma), col, uSat);
      // Gentle filmic S-curve for punchier contrast
      col = clamp((col - 0.5) * uContrast + 0.5, 0.0, 1.0);
      // Warm lifted shadows (teal-orange cinematic grade)
      col += vec3(0.014, 0.007, -0.010) * (1.0 - luma);
      col = mix(col, col * vec3(1.05, 1.01, 0.94), 0.55);
      // Film grain
      float g = hash(uv * vec2(1920.0, 1080.0) + fract(uTime) * 61.7);
      col += (g - 0.5) * uGrain;
      // Vignette
      col *= smoothstep(0.92, 0.38, dist * (1.0 + uVignette));
      // Damage pulse (red rim)
      if (uDamage > 0.001) {
        float rim = smoothstep(0.25, 0.75, dist);
        col = mix(col, vec3(0.55, 0.02, 0.02), rim * uDamage * 0.8);
      }
      gl_FragColor = vec4(col, 1.0);
    }`},Ps=new Wr(sC);Ps.renderToScreen=!0;is.addPass(Ps);function bm(){let n=vt.getPixelRatio();Oh.material.uniforms.resolution.value.set(1/(window.innerWidth*n),1/(window.innerHeight*n))}bm();var Sv="ironhold_quality",Tv=["auto","high","medium","low"],fa={high:{dprCap:1.5,shadows:!0,shadowMapSize:1024,shadowUpdateHz:15,reflections:!0,waterReflectionHz:18,bloom:!0,fxaa:!0,particleBudget:2400},medium:{dprCap:1,shadows:!0,shadowMapSize:1024,shadowUpdateHz:10,reflections:!0,waterReflectionHz:10,bloom:!0,fxaa:!0,particleBudget:1200},low:{dprCap:.75,shadows:!1,shadowMapSize:0,shadowUpdateHz:0,reflections:!1,waterReflectionHz:0,bloom:!1,fxaa:!1,particleBudget:500}},rC=["high","medium","medium","low"],Am=[fa.high,fa.medium,{...fa.medium,shadowUpdateHz:6,waterReflectionHz:6,economy:!0},fa.low],vm=5,oC=10;function aC(){try{let n=localStorage.getItem(Sv);if(Tv.includes(n))return n}catch{}return"auto"}var Xn=aC(),ha=Xn==="auto"?"medium":Xn,Cs=1,Zr=0,da=0,cr=1e3/60,Mm=!1,Hh=0,Ln=Xn==="auto"?Am[Cs]:fa[Xn];function Jc(n=!0){Ln=Xn==="auto"?Am[Cs]:fa[Xn],ha=Xn==="auto"?rC[Cs]:Xn,document.documentElement.dataset.quality=ha;let e=Math.min(window.devicePixelRatio||1,Ln.dprCap);Math.abs(vt.getPixelRatio()-e)>.001&&(vt.setPixelRatio(e),is.setPixelRatio(e),is.setSize(window.innerWidth,window.innerHeight),bm()),vt.shadowMap.enabled=Ln.shadows,vt.shadowMap.autoUpdate=!1,Dn.castShadow=Ln.shadows,Dn.shadow.mapSize.set(Ln.shadowMapSize,Ln.shadowMapSize),wm.enabled=Ln.bloom,Oh.enabled=Ln.fxaa,Ps.uniforms.uCA.value=ha==="low"?0:.002,Ps.uniforms.uGrain.value=ha==="low"?0:.028,Zc=Ln.reflections,Uh=Ln.waterReflectionHz,on.material.uniforms.uReflectionStrength.value=Zc?1:0,on.material.uniforms.uWaterDetail.value=ha==="low"?0:1,n&&(Hh=0,vt.shadowMap.needsUpdate=vt.shadowMap.enabled,ym=0)}function cC(n=0,e=!1){if(!vt.shadowMap.enabled||Ln.shadowUpdateHz<=0)return!1;let t=Number.isFinite(n)?Math.min(Math.max(n,0),.25):0;Hh+=t;let i=1/Ln.shadowUpdateHz;return!e&&Hh<i?!1:(Hh%=i,vt.shadowMap.needsUpdate=!0,!0)}function Bh(){return Xn}function Rm(n){let e=typeof n=="string"?n.trim().toLowerCase():"";if(!Tv.includes(e))return pa();Xn=e;try{localStorage.setItem(Sv,e)}catch{}return Cs=1,Zr=0,da=0,Mm=!1,Jc(!0),pa()}function pa(){let n=cr>0?1e3/cr:0;return{preset:Xn,quality:ha,auto:Xn==="auto",adaptiveStage:Xn==="auto"?Cs:null,economy:!!Ln.economy,dpr:vt.getPixelRatio(),dprCap:Ln.dprCap,shadows:vt.shadowMap.enabled,shadowMapSize:vt.shadowMap.enabled?Dn.shadow.mapSize.x:0,shadowUpdateHz:vt.shadowMap.enabled?Ln.shadowUpdateHz:0,reflections:Zc,reflectionTextureSize:xm,reflectionUpdateHz:Zc?Uh:0,bloom:wm.enabled,fxaa:Oh.enabled,particleBudget:Ln.particleBudget,frameTimeMs:+cr.toFixed(2),fps:+n.toFixed(1),nextAutoChangeIn:Xn==="auto"?+Math.max(0,vm-Zr).toFixed(1):0}}function wv(n){let e=Number.isFinite(n)?Math.max(n,0):0,t=Math.min(e,.25);if(t>0){let i=t*1e3;if(!Mm)cr=i,Mm=!0;else{let s=1-Math.exp(-t*2.5);cr+=(i-cr)*s}Xn==="auto"&&(Zr+=t,cr>32?(da=0,Zr>=vm&&Cs<Am.length-1&&(Cs++,Zr=0,Jc(!0))):cr<18.5?(da+=t,da>=oC&&Zr>=vm&&Cs>0&&(Cs--,Zr=0,da=0,Jc(!0))):da=0)}cC(t)}Jc(!0);var Mn={dist:Fc.distance,targetDist:Fc.distance,elev:Ts.degToRad(Fc.elevDeg),azimuth:Ts.degToRad(Fc.azimuthDeg)};function bv(n=new w){return n.set(Math.sin(Mn.azimuth)*Math.cos(Mn.elev),Math.sin(Mn.elev),Math.cos(Mn.azimuth)*Math.cos(Mn.elev)).multiplyScalar(Mn.dist)}window.addEventListener("resize",()=>{Vt.aspect=window.innerWidth/window.innerHeight,Vt.updateProjectionMatrix(),Jc(!1),vt.setSize(window.innerWidth,window.innerHeight),is.setSize(window.innerWidth,window.innerHeight),bm()});function Av(n){on.material.uniforms.time.value+=n*.6,Ps.uniforms.uTime.value+=n,Ps.uniforms.uDamage.value=Math.max(0,Ps.uniforms.uDamage.value-n*1.4)}function Fh(n){Ps.uniforms.uDamage.value=Math.min(1,Ps.uniforms.uDamage.value+n)}var M={gold:hv,incomeRate:0,incomeTimer:0,totalGoldEarned:0,wave:1,timeInWave:0,spawnTimer:0,waveBudget:0,spawnRemaining:0,waveActive:!1,intermission:!1,prepTimer:0,waveKills:0,waveLeaks:0,waveStartedAt:0,totalWaves:mn,endless:!1,difficulty:"normal",ascensionLevel:0,ascensionUnlockedShown:!1,gameSpeed:1,cameraShake:!0,reducedMotion:!1,profileHeroDamage:1,profileAbilityCooldown:1,baseHP:Gc,maxBaseHP:Gc,castleLevel:0,castleFireCooldown:0,heroLevel:0,heroFireCooldown:0,abilityCooldown:0,rallyCooldown:0,rallyTimer:0,heroMoving:!1,buildType:"archer",towersBuilt:0,enemies:[],projectiles:[],activeBoss:null,miniBossSpawned:!1,roundBossSpawned:!1,warlordSpawned:!1,warlordKilled:!1,commanderLevel:1,commanderXP:0,pendingBoons:[],boons:{},draftOpen:!1,kills:0,score:0,combo:0,comboTimer:0,bestCombo:0,running:!1,gameOver:!1,victory:!1,paused:!1,elapsed:0,nearTower:null,nearPad:null,selectedTower:null,moveTarget:null,touchMove:{x:0,z:0},hintStage:0};var Qc=new w;function _i(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Qc.copy(e),Qc[i]=0,Qc.normalize();let c=.5*o/(o+a),u=1-Qc.angleTo(n)/l;return Math.sign(Qc[t])===1?u*c:a/(o+a)+c+c*(1-u)}var En=class extends Ut{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new w,l=new w,c=new w(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,f=u.length/6,m=new w,x=.5/s;for(let g=0,p=0;g<u.length;g+=3,p+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*r,u[g+1]=c.y*Math.sign(a.y)+l.y*r,u[g+2]=c.z*Math.sign(a.z)+l.z*r,d[g+0]=l.x,d[g+1]=l.y,d[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),h[p+0]=_i(m,l,"z","y",r,i),h[p+1]=1-_i(m,l,"y","z",r,t);break;case 1:m.set(-1,0,0),h[p+0]=1-_i(m,l,"z","y",r,i),h[p+1]=1-_i(m,l,"y","z",r,t);break;case 2:m.set(0,1,0),h[p+0]=1-_i(m,l,"x","z",r,e),h[p+1]=_i(m,l,"z","x",r,i);break;case 3:m.set(0,-1,0),h[p+0]=1-_i(m,l,"x","z",r,e),h[p+1]=1-_i(m,l,"z","x",r,i);break;case 4:m.set(0,0,1),h[p+0]=1-_i(m,l,"x","y",r,e),h[p+1]=1-_i(m,l,"y","x",r,t);break;case 5:m.set(0,0,-1),h[p+0]=_i(m,l,"x","y",r,e),h[p+1]=1-_i(m,l,"y","x",r,t);break}}};function ss(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Et,c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Rv(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][h]);let m=Rv(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Rv(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let o=new e(r),a=0;for(let c=0;c<n.length;++c)o.set(n[c].array,a),a+=n[c].array.length;let l=new yt(o,t,i);return s!==void 0&&(l.gpuType=s),l}function Cm(n,e){if(e===Ny)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Oc||e===fh){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Oc)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var zh=class extends _s{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Um(t)}),this.register(function(t){return new Xm(t)}),this.register(function(t){return new Ym(t)}),this.register(function(t){return new qm(t)}),this.register(function(t){return new Bm(t)}),this.register(function(t){return new Fm(t)}),this.register(function(t){return new zm(t)}),this.register(function(t){return new km(t)}),this.register(function(t){return new Hm(t)}),this.register(function(t){return new Gm(t)}),this.register(function(t){return new Om(t)}),this.register(function(t){return new Wm(t)}),this.register(function(t){return new Vm(t)}),this.register(function(t){return new Dm(t)}),this.register(function(t){return new $m(t)}),this.register(function(t){return new Km(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ir.extractUrlBase(e);o=ir.resolveURL(c,this.path)}else o=ir.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Nc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Dv){try{o[mt.KHR_BINARY_GLTF]=new Zm(e)}catch(d){s&&s(d);return}r=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new i0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case mt.KHR_MATERIALS_UNLIT:o[d]=new Nm;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[d]=new Jm(r,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[d]=new jm;break;case mt.KHR_MESH_QUANTIZATION:o[d]=new Qm;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function lC(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Dm=class{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ln);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new nr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ss(u),c.distance=d;break;case"spot":c=new ch(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,dr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Nm=class{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return ft}extendParams(e,t,i){let s=[];e.color=new ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}},Hm=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Um=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(a,a)}return Promise.all(r)}},Om=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Bm=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ln)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,bt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Fm=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},zm=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(a[0],a[1],a[2],ln),Promise.all(r)}},km=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Gm=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(a[0],a[1],a[2],ln),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,bt)),Promise.all(r)}},Vm=class{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Wm=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Xm=class{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ym=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},qm=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},$m=class{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,s.mode,s.filter),f})})}else return null}},Km=class{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Si.TRIANGLES&&c.mode!==Si.TRIANGLE_STRIP&&c.mode!==Si.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(let m of d){let x=new Ze,g=new w,p=new Fi,v=new w(1,1,1),y=new Jo(m.geometry,m.material,h);for(let E=0;E<h;E++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,E),l.SCALE&&v.fromBufferAttribute(l.SCALE,E),y.setMatrixAt(E,x.compose(g,p,v));for(let E in l)if(E==="_COLOR_0"){let b=l[E];y.instanceColor=new Gr(b.array,b.itemSize,b.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&m.geometry.setAttribute(E,l[E]);Ht.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Dv="glTF",el=12,Cv={JSON:1313821514,BIN:5130562},Zm=class{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,el),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-el,r=new DataView(e,el),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Cv.JSON){let c=new Uint8Array(e,el+o,a);this.content=i.decode(c)}else if(l===Cv.BIN){let c=el+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Jm=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let d=t0[u]||u.toLowerCase();a[d]=o[u]}for(let u in e.attributes){let d=t0[u]||u.toLowerCase();if(o[u]!==void 0){let h=i.accessors[e.attributes[u]],f=ma[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(f){for(let m in f.attributes){let x=f.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}d(f)},a,c,ln,h)})})}},jm=class{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Qm=class{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}},kh=class extends Qs{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,d=(i-t)/u,h=d*d,f=h*d,m=e*c,x=m-c,g=-2*f+3*h,p=f-h,v=1-g,y=p-h+d;for(let E=0;E!==a;E++){let b=o[x+E+a],T=o[x+E+l]*u,S=o[m+E+a],I=o[m+E]*u;r[E]=v*b+y*T+g*S+p*I}return r}},uC=new Fi,e0=class extends kh{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return uC.fromArray(r).normalize().toArray(r),r}},Si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ma={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pv={9728:an,9729:zn,9984:Lu,9985:Wp,9986:uc,9987:$s},Iv={33071:oi,33648:xc,10497:Oi},Pm={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},t0={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hC={CUBICSPLINE:void 0,LINEAR:Fr,STEP:Yo},Im={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new se({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),n.DefaultMaterial}function Jr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function dr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fC(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(i){let h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(h)}if(s){let h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(h)}if(r){let h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],d=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function pC(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mC(n){let e,t=n.extensions&&n.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lm(t.attributes):e=n.indices+":"+Lm(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Lm(n.targets[i]);return e}function Lm(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function n0(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gC(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var xC=new Ze,i0=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new oh(this.options.manager):this.textureLoader=new lh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Jr(r,a,s),dr(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(ir.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Pm[s.type],a=ma[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new yt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Pm[s.type],c=ma[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(f&&f!==d){let p=Math.floor(h/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(v);y||(x=new c(a,p*f,s.count*f/u),y=new Zo(x,f/u),t.cache.add(v,y)),g=new kr(y,l,h%f/u,m)}else a===null?x=new c(s.count*l):x=new c(a,h,s.count*l),g=new yt(x,l,m);if(s.sparse!==void 0){let p=Pm.SCALAR,v=ma[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,b=new v(o[1],y,s.sparse.count*p),T=new c(o[2],E,s.sparse.count*l);a!==null&&(g=new yt(g.array.slice(),g.itemSize,g.normalized));for(let S=0,I=b.length;S<I;S++){let _=b[S];if(g.setX(_,T[S*l]),l>=2&&g.setY(_,T[S*l+1]),l>=3&&g.setZ(_,T[S*l+2]),l>=4&&g.setW(_,T[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Pv[h.magFilter]||zn,u.minFilter=Pv[h.minFilter]||$s,u.wrapS=Iv[h.wrapS]||Oi,u.wrapT=Iv[h.wrapT]||Oi,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let m=h;t.isImageBitmapLoader===!0&&(m=function(x){let g=new _n(x);g.needsUpdate=!0,h(g)}),t.load(ir.resolveURL(d,r.path),m,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||gC(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[mt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new bc,Zn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new wc,Zn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return se}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){let d=s[mt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{let d=r.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],ln),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,bt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=tt);let u=r.alphaMode||Im.OPAQUE;if(u===Im.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Im.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ft&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new te(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==ft&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ft){let d=r.emissiveFactor;a.emissive=new ye().setRGB(d[0],d[1],d[2],ln)}return r.emissiveTexture!==void 0&&o!==ft&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,bt)),Promise.all(c).then(function(){let d=new o(a);return r.name&&(d.name=r.name),dr(d,r),t.associations.set(d,{materials:e}),r.extensions&&Jr(s,d,r),d})}createUniqueName(e){let t=zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Lv(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=mC(c),d=s[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Lv(new Et,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?dC(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,m=u.length;f<m;f++){let x=u[f],g=o[f],p,v=c[f];if(g.mode===Si.TRIANGLES||g.mode===Si.TRIANGLE_STRIP||g.mode===Si.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new $u(x,v):new L(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Si.TRIANGLE_STRIP?p.geometry=Cm(p.geometry,fh):g.mode===Si.TRIANGLE_FAN&&(p.geometry=Cm(p.geometry,Oc));else if(g.mode===Si.LINES)p=new Zu(x,v);else if(g.mode===Si.LINE_STRIP)p=new jo(x,v);else if(g.mode===Si.LINE_LOOP)p=new Ju(x,v);else if(g.mode===Si.POINTS)p=new Js(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&pC(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),dr(p,r),g.extensions&&Jr(s,p,g),t.assignFinalMaterial(p),d.push(p)}for(let f=0,m=d.length;f<m;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Jr(s,d[0],r),d[0];let h=new Ve;r.extensions&&Jr(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,m=d.length;f<m;f++)h.add(d[f]);return h})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new nn(Ts.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Zs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),dr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let d=o[c];if(d){a.push(d);let h=new Ze;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ku(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){let f=s.channels[d],m=s.samplers[f.sampler],x=f.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,v=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){let h=d[0],f=d[1],m=d[2],x=d[3],g=d[4],p=[];for(let v=0,y=h.length;v<y;v++){let E=h[v],b=f[v],T=m[v],S=x[v],I=g[v];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let _=i._createAnimationTracks(E,b,T,S,I);if(_)for(let A=0;A<_.length;A++)p.push(_[A])}return new rh(r,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,xC)});for(let f=0,m=d.length;f<m;f++)u.add(d[f]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Tc:c.length>1?u=new Ve:c.length===1?u=c[0]:u=new Ht,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),dr(u,r),r.extensions&&Jr(i,u,r),r.matrix!==void 0){let d=new Ze;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Ve;i.name&&(r.name=s.createUniqueName(i.name)),dr(r,i),i.extensions&&Jr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);let c=u=>{let d=new Map;for(let[h,f]of s.associations)(h instanceof Zn||h instanceof _n)&&d.set(h,f);return u.traverse(h=>{let f=s.associations.get(h);f!=null&&d.set(h,f)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];hr[r.path]===hr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(hr[r.path]){case hr.weights:c=Ms;break;case hr.rotation:c=ts;break;case hr.position:case hr.scale:c=Es;break;default:switch(i.itemSize){case 1:c=Ms;break;case 2:case 3:default:c=Es;break}break}let u=s.interpolation!==void 0?hC[s.interpolation]:Fr,d=this._getArrayFromAccessor(i);for(let h=0,f=l.length;h<f;h++){let m=new c(l[h]+"."+hr[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=n0(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof ts?e0:kh;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function yC(n,e,t){let i=e.attributes,s=new Kn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){let u=n0(ma[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new w,l=new w;for(let c=0,u=r.length;c<u;c++){let d=r[c];if(d.POSITION!==void 0){let h=t.json.accessors[d.POSITION],f=h.min,m=h.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),h.normalized){let x=n0(ma[h.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Tn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Lv(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=t0[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Mt.workingColorSpace!==ln&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Mt.workingColorSpace}" not supported.`),dr(n,e),yC(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?fC(n,e.targets,t):n})}var vC=bs.length;function s0(n){return Math.max(0,Math.min(vC,Math.floor(n||0)))}function jr(n){return 1+s0(n)*sv}function tl(n){return vn*jr(n)}function nl(n){return tl(n)-7}function Gh(n){let e=s0(n);return em.flatMap(t=>t.zones.map(i=>({...i,ring:t.ring,unlockLevel:t.unlockLevel,unlocked:e>=t.unlockLevel})))}function Vh(n){return tl(n)+cv}function ga(n){return tl(n)-lv}function Wh(n){let e=Math.max(1,n||1);return Math.max(.8,3.4-e*.16)}function il(n){let e=Math.max(1,n||1);return Math.min(4,1+Math.floor((e-1)/4))}function Nv(n){return il(n)>=4?4:3}function Is(n){let e=s0(n),t=Gc,i=0,s=bh.baseRange,r=bh.baseDamage,o=bh.fireRate,a=fv[0],l="The last free keep";for(let c=0;c<e;c++){let u=bs[c];t+=u.hp,i+=u.income,s+=u.range||0,r+=u.damage||0,o+=u.fireRate||0,a=u.name,l=u.feature||a}return{level:e,name:a,feature:l,maxHP:t,income:i,range:s,damage:r,fireRate:Math.max(.35,o),towerMaxLevel:Math.min(4,e+1)}}function fr(n){let e=Math.max(0,Math.min(6,Math.floor(n||0))),t=0;for(let i=0;i<nm.length;i++)e>=nm[i]&&(t=i);return t}function Ti(n){return pv[fr(n)]}var bi=3e3,Yh=new Float32Array(bi*3),qh=new Float32Array(bi*3),Hv=new Float32Array(bi),Uv=new Float32Array(bi),Ov=new Float32Array(bi),$h=[],wi=[],rl=[];for(let n=0;n<bi;n++)$h.push({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,maxLife:1,size:1,r:1,g:1,b:1,gravity:0,drag:0,fadeIn:.1,shrink:!1,tex:0,floorY:.03});for(let n=bi-1;n>=0;n--)rl.push(n);var Yn=new Et;Yn.setAttribute("position",new yt(Yh,3).setUsage(sr));Yn.setAttribute("aColor",new yt(qh,3).setUsage(sr));Yn.setAttribute("aSize",new yt(Hv,1).setUsage(sr));Yn.setAttribute("aAlpha",new yt(Uv,1).setUsage(sr));Yn.setAttribute("aTex",new yt(Ov,1).setUsage(sr));Yn.boundingSphere=new Tn(new w,500);Yn.setDrawRange(0,0);var MC=new kt({uniforms:{uSmoke:{value:Kc()},uGlow:{value:Zt()}},vertexShader:`
    attribute vec3 aColor;
    attribute float aSize;
    attribute float aAlpha;
    attribute float aTex;
    varying vec3 vColor;
    varying float vAlpha;
    varying float vTex;
    void main() {
      vColor = aColor;
      vAlpha = aAlpha;
      vTex = aTex;
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = aSize * (300.0 / -mv.z);
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:`
    uniform sampler2D uSmoke, uGlow;
    varying vec3 vColor;
    varying float vAlpha;
    varying float vTex;
    void main() {
      vec2 uv = gl_PointCoord;
      float a = vTex < 0.5 ? texture2D(uGlow, uv).a : texture2D(uSmoke, uv).a;
      gl_FragColor = vec4(vColor, a * vAlpha);
      if (gl_FragColor.a < 0.003) discard;
    }`,transparent:!0,depthWrite:!1,blending:$e}),Qr=new Js(Yn,MC);Qr.frustumCulled=!1;Qr.renderOrder=5;Qr.visible=!1;Ne.add(Qr);var Bv=bi,xa=bi;function EC(){for(;wi.length>xa;){let n=wi.pop();$h[n].alive=!1,rl.push(n)}Yn.setDrawRange(0,wi.length),wi.length===0&&(Qr.visible=!1)}function Fv(){let n=pa().particleBudget,e=Math.max(0,Math.min(bi,Bv,n));e!==xa&&(xa=e,EC())}function _C(n){let e=Number(n);return Bv=Number.isFinite(e)?Math.max(0,Math.min(bi,Math.floor(e))):bi,Fv(),xa}function SC(){return wi.length>=xa||rl.length===0?-1:rl.pop()}var Xh=new ye;function zv(n){let e=SC();if(e===-1)return;let t=$h[e];t.alive=!0,t.x=n.x,t.y=n.y,t.z=n.z,t.vx=n.vx||0,t.vy=n.vy||0,t.vz=n.vz||0,t.life=0,t.maxLife=n.life||1,t.size=n.size||1,Xh.setHex(n.color!==void 0?n.color:16777215),t.r=Xh.r,t.g=Xh.g,t.b=Xh.b,t.gravity=n.gravity||0,t.drag=n.drag!==void 0?n.drag:.9,t.fadeIn=n.fadeIn!==void 0?n.fadeIn:.08,t.shrink=!!n.shrink,t.tex=n.smoke?1:0,t.floorY=n.floorY!==void 0?n.floorY:.03,wi.push(e)}function kv(n,e,t={}){let i=Math.max(0,xa-wi.length),s=Math.min(Math.max(0,Math.floor(t.count||8)),i),r=t.color!==void 0?t.color:16777215,o=t.speed!==void 0?t.speed:4,a=t.spread!==void 0?t.spread:1,l=t.up!==void 0?t.up:0,c=t.size||.6,u=t.life||.6,d=t.gravity||0,h=t.drag!==void 0?t.drag:.88;for(let f=0;f<s;f++){let m,x,g,p;if(t.directional){m=t.dirX+(Math.random()-.5)*a,x=t.dirY+(Math.random()-.5)*a,g=t.dirZ+(Math.random()-.5)*a,p=Math.sqrt(m*m+x*x+g*g)||1;let v=o*(.6+Math.random()*.7);m=m/p*v,x=x/p*v,g=g/p*v}else{let v=Math.random()*Math.PI*2,y=Math.pow(Math.random(),.6),E=o*(.4+Math.random()*.9);m=Math.cos(v)*E*y,g=Math.sin(v)*E*y,x=l*E+(Math.random()-.35)*E*.5}zv({x:e.x+(Math.random()-.5)*(t.posJitter||0),y:e.y+(Math.random()-.5)*(t.posJitter||0),z:e.z+(Math.random()-.5)*(t.posJitter||0),vx:m,vy:x,vz:g,color:Array.isArray(r)?r[Math.random()*r.length|0]:r,size:c*(.6+Math.random()*.8),life:u*(.7+Math.random()*.6),gravity:d,drag:h,shrink:t.shrink,smoke:t.smoke,floorY:t.floorY})}}var TC={spark:{count:10,speed:9,up:.5,size:.5,life:.45,gravity:-9,drag:.86},flash:{count:5,speed:2,up:1.5,size:2.4,life:.16,drag:.7,shrink:!0},smoke:{count:7,speed:1.6,up:2.4,size:2.6,life:1.4,drag:.94,smoke:!0},dust:{count:10,speed:3.4,up:1.4,size:1.5,life:.8,drag:.9,smoke:!0},soul:{count:9,speed:1.4,up:3.4,size:.9,life:1.1,drag:.96},frost:{count:12,speed:5,up:1.4,size:.7,life:.7,gravity:-3,drag:.88},magic:{count:10,speed:4,up:2,size:.8,life:.8,drag:.92},gold:{count:10,speed:5,up:4.5,size:.55,life:.9,gravity:-9,drag:.9},fire:{count:6,speed:.6,up:3,size:1.3,life:.6,drag:.92},portal:{count:14,speed:2.5,up:4.5,size:.9,life:.9,drag:.93},nova:{count:60,speed:16,up:.6,size:1.1,life:.9,drag:.9,shrink:!0},ember:{count:1,speed:.4,up:1.1,size:.5,life:3.2,drag:.99},impact:{count:16,speed:12,up:2.2,size:.7,life:.5,gravity:-10,drag:.85},confetti:{count:30,speed:8,up:8,size:.6,life:1.6,gravity:-6,drag:.93},splash:{count:18,speed:5.5,up:2.8,size:1.05,life:.85,gravity:-10,drag:.9,smoke:!0},wake:{count:2,speed:1.1,up:.35,size:1,life:1,drag:.96,smoke:!0}};function wC(n,e,t={}){let i=TC[n];i&&kv(n,e,Object.assign({},i,t))}function sl(n,e){n.clearUpdateRanges&&n.addUpdateRange?(n.clearUpdateRanges(),n.addUpdateRange(0,e)):n.updateRange&&(n.updateRange.offset=0,n.updateRange.count=e),n.needsUpdate=!0}function bC(n){if(Fv(),wi.length===0)return 0;let e=Number.isFinite(n)?Math.max(0,n):0,t=wi.length,i=0;for(let s=0;s<t;s++){let r=wi[s],o=$h[r];if(o.life+=e,o.life>=o.maxLife){o.alive=!1,rl.push(r);continue}let a=Math.pow(o.drag,e*60);o.vx*=a,o.vz*=a,o.vy=o.vy*a+o.gravity*e,o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e,o.y<o.floorY&&o.vy<0&&(o.y=o.floorY,o.vy*=-.3,o.vx*=.7,o.vz*=.7);let l=o.life/o.maxLife,c=l<o.fadeIn?l/o.fadeIn:1-(l-o.fadeIn)/(1-o.fadeIn),u=i*3;Yh[u]=o.x,Yh[u+1]=o.y,Yh[u+2]=o.z,qh[u]=o.r,qh[u+1]=o.g,qh[u+2]=o.b,Hv[i]=o.shrink?o.size*(1-l):o.size*(.7+.3*c),Uv[i]=Math.max(0,c),Ov[i]=o.tex,wi[i]=r,i++}return wi.length=i,Yn.setDrawRange(0,i),i===0?(Qr.visible=!1,0):(Qr.visible=!0,sl(Yn.attributes.position,i*3),sl(Yn.attributes.aColor,i*3),sl(Yn.attributes.aSize,i),sl(Yn.attributes.aAlpha,i),sl(Yn.attributes.aTex,i),i)}var be={emit:wC,burst:kv,spawn:zv,update:bC,setParticleBudget:_C};var tM={value:0};function Ae(n,e,t,i,s=0,r=0,o=0,a=.04,l=2){let c=Math.min(a,n*.45,e*.45,t*.45),u=new L(new En(n,e,t,l,c),i);return u.position.set(s,r,o),u.castShadow=!0,u}function AC(n,e,t=.24,i=.06){let s=new un(n,e,4,6);s.translate(0,-e/2,0);let r=s.getAttribute("position");for(let o=0;o<r.count;o++){let a=r.getX(o),l=r.getY(o),c=Math.max(0,-l/e),u=Math.max(0,1-Math.abs(a)/(n*.2));r.setXYZ(o,a*(1-t*c),l+i*u*c,.04*Math.sin(c*Math.PI)+.025*c*c)}return s.computeVertexNormals(),s}function r0(n,e){let t=new Gn;t.moveTo(0,-e*.3),t.quadraticCurveTo(n*.62,-e*.58,n,0),t.quadraticCurveTo(n*.62,e*.58,0,e*.3),t.closePath();let i=new vi(t,{depth:.055,bevelEnabled:!0,bevelSegments:1,bevelSize:.012,bevelThickness:.012,steps:1});return i.rotateX(Math.PI/2),i.translate(0,.0275,0),i.computeVertexNormals(),i}function _0(n){if(n.getAttribute("aSwayHeight"))return n;let e=n.getAttribute("position"),t=e.count,i=new Float32Array(t),s=new Float32Array(t*3),r=new Float32Array(t*3);for(let o=0;o<t;o++)i[o]=e.getY(o),s[o*3]=1,r[o*3+2]=1;return n.setAttribute("aSwayHeight",new Le(i,1)),n.setAttribute("aSwayRight",new Le(s,3)),n.setAttribute("aSwayForward",new Le(r,3)),n}function mr(n,e,t=.6){return n.userData.sway=!0,n.onBeforeCompile=i=>{i.uniforms.uWindTime=tM,i.vertexShader=`uniform float uWindTime;
attribute float aSwayHeight;
attribute vec3 aSwayRight;
attribute vec3 aSwayForward;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec4 windPos = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
      #else
        vec4 windPos = modelMatrix * vec4(transformed, 1.0);
      #endif
      float swayPhase = uWindTime * 1.8 + windPos.x * 0.33 + windPos.z * 0.41;
      float swayK = smoothstep(${t.toFixed(2)}, ${(t+1.6).toFixed(2)}, aSwayHeight);
      float swayWave = (sin(swayPhase) + sin(swayPhase * 2.7) * 0.35) * ${e.toFixed(3)} * swayK;
      float swayCross = cos(swayPhase * 0.81) * ${(e*.6).toFixed(3)} * swayK;
      #ifdef USE_INSTANCING
        transformed.x += swayWave;
        transformed.z += swayCross;
      #else
        transformed += swayWave * aSwayRight + swayCross * aSwayForward;
      #endif`)},n.customProgramCacheKey=()=>"sway"+e+"_"+t,n}function hl(n){n.updateWorldMatrix(!0,!0);let e=n.matrixWorld.clone().invert(),t=new Map,i=new Set,s={candidates:0,batches:0,merged:0,removed:0,disposedSources:0};n.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||!o.visible||Array.isArray(o.material)||!o.material||o.material.transparent||!o.geometry||o.geometry.morphAttributes.position?.length||o.material.userData.sway&&(!o.geometry.getAttribute("aSwayHeight")||!o.geometry.getAttribute("aSwayRight")||!o.geometry.getAttribute("aSwayForward"))||Object.prototype.hasOwnProperty.call(o,"onBeforeRender")||o.onBeforeRender!==Ht.prototype.onBeforeRender)return;for(let u=o;u&&u!==n;u=u.parent)if(u.userData.noStaticBatch)return;let a=[o.castShadow,o.receiveShadow,o.renderOrder,o.layers.mask,o.frustumCulled].join("|"),l=t.get(o.material);l||(l=new Map,t.set(o.material,l));let c=l.get(a);c||(c={material:o.material,meshes:[]},l.set(a,c)),c.meshes.push(o),s.candidates++});for(let o of t.values())for(let a of o.values()){if(a.meshes.length<2)continue;let l=a.meshes.map(h=>{let f=h.geometry.index?h.geometry.toNonIndexed():h.geometry.clone(),m=e.clone().multiply(h.matrixWorld);if(f.applyMatrix4(m),a.material.userData.sway){let x=new ot().setFromMatrix4(m),g=new w(1,0,0).applyMatrix3(x),p=new w(0,0,1).applyMatrix3(x),v=f.getAttribute("position").count,y=new Float32Array(v*3),E=new Float32Array(v*3);for(let b=0;b<v;b++)y[b*3]=g.x,y[b*3+1]=g.y,y[b*3+2]=g.z,E[b*3]=p.x,E[b*3+1]=p.y,E[b*3+2]=p.z;f.setAttribute("aSwayRight",new Le(y,3)),f.setAttribute("aSwayForward",new Le(E,3))}if(f.getAttribute("normal")||f.computeVertexNormals(),!f.getAttribute("uv")){let x=f.getAttribute("position").count;f.setAttribute("uv",new Le(new Float32Array(x*2),2))}for(let x of Object.keys(f.attributes))["position","normal","uv","aSwayHeight","aSwayRight","aSwayForward"].includes(x)||f.deleteAttribute(x);return f.clearGroups(),f}),c=ss(l,!1);if(l.forEach(h=>h.dispose()),!c)continue;c.computeBoundingBox(),c.computeBoundingSphere();let u=a.meshes[0],d=new L(c,a.material);d.name="static-batch",d.castShadow=u.castShadow,d.receiveShadow=u.receiveShadow,d.renderOrder=u.renderOrder,d.layers.mask=u.layers.mask,d.frustumCulled=u.frustumCulled,n.add(d);for(let h of a.meshes)i.add(h.geometry),h.removeFromParent();s.batches++,s.merged+=a.meshes.length,s.removed+=a.meshes.length-1}let r=new Set;Ne.traverse(o=>{o.isMesh&&o.geometry&&r.add(o.geometry)});for(let o of i)o.userData.persistent||r.has(o)||(o.dispose(),s.disposedSources++);return n.userData.staticBatch=s,s}var id=new se({map:Wc(),normalMap:om(),normalScale:new te(.55,.55),roughness:.97,metalness:0,color:14078644});id.onBeforeCompile=n=>{n.uniforms.uDetailMap={value:id.map},n.vertexShader=`varying vec3 vIHWorldPos;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
     vIHWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=`varying vec3 vIHWorldPos;
uniform sampler2D uDetailMap;
`+n.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
     // second, much smaller-scale sample breaks up tile repetition
     vec3 detail = texture2D(uDetailMap, vMapUv * 3.7 + 0.31).rgb;
     diffuseColor.rgb *= 0.80 + detail * 0.38;
     float m1 = sin(vIHWorldPos.x * 0.071 + vIHWorldPos.z * 0.043);
     float m2 = sin(vIHWorldPos.x * -0.037 + vIHWorldPos.z * 0.079 + 1.7);
     float m3 = sin(vIHWorldPos.x * 0.017 - vIHWorldPos.z * 0.026 + 4.1);
     float macro = (m1 + m2 + m3) / 3.0;
     diffuseColor.rgb *= 1.0 + macro * 0.13;
     // dry, sun-bleached patches
     float dry = smoothstep(0.25, 0.9, sin(vIHWorldPos.x * 0.033 + vIHWorldPos.z * 0.027 + sin(vIHWorldPos.z * 0.051) * 1.8));
     diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.12, 1.04, 0.78), dry * 0.26);
     // slightly richer green in the hollows
     float green = smoothstep(0.2, 0.9, -macro);
     diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.88, 1.06, 0.84), green * 0.22);`)};id.customProgramCacheKey=()=>"ih-ground-macro";var Nn=new Ve;Ne.add(Nn);var Vi=jr(0),Kh=jr(0);Nn.scale.setScalar(Vi);var S0=new L(new js(vn-7,96),id);S0.rotation.x=-Math.PI/2;S0.receiveShadow=!0;Nn.add(S0);var hd=new L(new pn(vn-7.3,vn,96),new se({map:Xc(),roughness:.95}));hd.rotation.x=-Math.PI/2;hd.position.y=-.32;hd.receiveShadow=!0;Nn.add(hd);var nM=new L(new Te(vn,vn-4,15,64,1,!0),new se({map:Kr(),normalMap:Ph(),roughness:1,normalScale:new te(1.6,1.6),side:tt}));nM.position.y=-7.9;Nn.add(nM);var ml=vn,dd=vn+4,gl=-.32,fd=-2.75,RC=-2.6,iM=ml+(dd-ml)*((RC-gl)/(fd-gl));function sM(n,e,t,i,s){let r=new pn(n,e,128,8),o=r.attributes.position,a=t-i;for(let c=0;c<o.count;c++){let d=(Math.hypot(o.getX(c),o.getY(c))-n)/(e-n);o.setZ(c,-a*d)}r.computeVertexNormals();let l=new L(r,s);return l.rotation.x=-Math.PI/2,l.position.y=t,l.receiveShadow=!0,l}var CC=new se({map:Xc(),roughness:.9,color:14207140}),PC=new se({map:Xc(),roughness:.7,color:10127210});Nn.add(sM(ml,dd,gl,fd,CC));var rM=vn+1.5,IC=(rM-ml)/(dd-ml),LC=gl-(gl-fd)*IC+.012;Nn.add(sM(rM,dd,LC,fd+.012,PC));Tm(iM*Vi);var T0=new L(new Ke(vn-4,24,48),new se({map:Kr(),roughness:1}));T0.rotation.x=Math.PI;T0.position.y=-26;Nn.add(T0);var pd=new se({map:aa(),normalMap:Ih(),roughnessMap:cm(),normalScale:new te(1.1,1.1),roughness:.95,metalness:.02,color:14206892,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),md=new L(new pn(8.5,15.5,64),pd);md.rotation.x=-Math.PI/2;md.position.y=.03;md.receiveShadow=!0;Nn.add(md);for(let n=0;n<4;n++){let e=new L(new un(5.4,36),pd);e.rotation.x=-Math.PI/2;let t=n/4*Math.PI*2;e.rotation.z=t,e.position.set(Math.sin(t)*33,.025,Math.cos(t)*33),e.receiveShadow=!0,Nn.add(e)}function DC(){let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d");e.clearRect(0,0,64,64);for(let i=0;i<9;i++){let s=8+Math.random()*48,r=(Math.random()-.5)*22,o=30+Math.random()*30,a=e.createLinearGradient(s,64,s+r,64-o);a.addColorStop(0,"rgba(52,86,34,1)"),a.addColorStop(1,"rgba(120,168,72,1)"),e.fillStyle=a,e.beginPath(),e.moveTo(s-2.4,64),e.lineTo(s+2.4,64),e.lineTo(s+r,64-o),e.closePath(),e.fill()}let t=new zi(n);return t.colorSpace=bt,t}function NC(){let t=new Et,i=[-.62/2,0,0,.62/2,0,0,.62/2,.66,0,-.62/2,.66,0,0,0,-.62/2,0,0,.62/2,0,.66,.62/2,0,.66,-.62/2],s=[0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1],r=[0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0],o=[0,1,2,0,2,3,4,5,6,4,6,7];return t.setAttribute("position",new Le(i,3)),t.setAttribute("uv",new Le(s,2)),t.setAttribute("normal",new Le(r,3)),t.setIndex(o),_0(t)}var HC=mr(new se({map:DC(),alphaTest:.42,side:tt,roughness:.9,color:12572320}),.055,.05),f0=900,vl=new Jo(NC(),HC,f0);vl.instanceMatrix.setUsage(yc);var ol=new Ht,p0=0,Gv=0;for(;p0<f0&&Gv<f0*30;){Gv++;let n=Math.random()*Math.PI*2,e=Math.sqrt(Math.random())*(vn-9),t=Math.cos(n)*e,i=Math.sin(n)*e;if(Math.hypot(t,i)<17||Math.abs(t)<4||Math.abs(i)<4)continue;let s=!1;for(let o of wh)if(Math.hypot(t-o.x,i-o.z)<4){s=!0;break}if(s)continue;let r=.7+Math.random()*.9;ol.position.set(t,0,i),ol.rotation.y=Math.random()*Math.PI,ol.scale.set(r,r*(.8+Math.random()*.5),r),ol.updateMatrix(),vl.setMatrixAt(p0++,ol.matrix)}vl.count=p0;vl.receiveShadow=!0;Nn.add(vl);function wa(n,e){try{let t=mm[n];return typeof t=="function"&&t()||e}catch(t){return console.warn("[world] Tree texture unavailable; using fallback.",n,t),e}}var oM=wa("barkTexture",Gi()),aM=wa("barkNormal",Lh()),cM=wa("barkRoughness",null),UC=wa("leafTexture",null),OC=wa("leafNormal",null),BC=wa("leafRoughness",null),w0=new se({map:oM,normalMap:aM,roughnessMap:cM,normalScale:new te(.8,.8),roughness:.96,color:16777215}),FC=new se({map:oM,normalMap:aM,roughnessMap:cM,normalScale:new te(.65,.65),roughness:.94,color:15921126}),io={map:UC,normalMap:OC,roughnessMap:BC,normalScale:new te(.45,.45),roughness:.88,metalness:0,alphaTest:0,side:tt},m0=[mr(new se({...io,color:15397596,flatShading:!0}),.1,.12),mr(new se({...io,color:15921368,flatShading:!0}),.1,.12),mr(new se({...io,color:14871762,flatShading:!0}),.1,.12)],lM=mr(new se({...io,color:15397596}),.09,-1),uM=mr(new se({...io,color:15921368}),.09,-1),hM=[mr(new se({...io,color:15922910}),.11,-1),mr(new se({...io,color:15266514}),.11,-1)],m5=[lM,uM,...hM],g0=new se({map:Kr(),normalMap:Ph(),roughnessMap:am(),roughness:.98,flatShading:!0}),dM=[];function b0(n,e,t){dM.push({x:n,z:e,r:t})}wh.forEach(n=>b0(n.x,n.z,4.2));b0(0,0,17);function fM(n,e,t){if(Math.hypot(n,e)<16||Math.abs(n)<t||Math.abs(e)<t)return!1;for(let i of dM)if(Math.hypot(n-i.x,e-i.z)<i.r)return!1;return!0}var gd=new Te(.62,1,1,7,1);gd.translate(0,.5,0);var A0=new Te(.52,.82,1,6,1);A0.translate(0,.5,0);function Vv(n){let e=new Qo(1,1),t=e.getAttribute("position");for(let i=0;i<t.count;i++){let s=t.getX(i),r=t.getY(i),o=t.getZ(i),a=1+Math.sin(s*5.1+r*3.7+o*4.3+n)*.15+Math.cos(r*7.3-s*2.1+n*2)*.08;t.setXYZ(i,s*a*1.12,r*a*.78,o*a)}return e.computeVertexNormals(),_0(e),e.userData.persistent=!0,e}function o0(n){let e=new Ke(1,1,9,2);e.translate(0,.5,0);let t=e.getAttribute("position");for(let i=0;i<t.count;i++){let s=t.getX(i),r=t.getY(i),o=t.getZ(i),a=Math.atan2(o,s),l=1+Math.sin(a*3+n+r*4)*.13+Math.cos(a*5-n)*.07;t.setXYZ(i,s*l+Math.sin(r*Math.PI)*.06,r+Math.sin(a*4+n)*.025,o*l)}return e.computeVertexNormals(),_0(e),e.userData.persistent=!0,e}var Wv=[Vv(.7),Vv(2.4)],ll=[o0(.4),o0(1.9),o0(3.2)];for(let n of[gd,A0])n.userData.persistent=!0;var a0=new w,Xv=new w,c0=new w,zC=new w(0,1,0);function sd(n,e,t,i,s=w0){a0.set(...e),Xv.set(...t),c0.subVectors(Xv,a0);let r=c0.length();if(r<.001)return null;let o=new L(A0,s);return o.position.copy(a0),o.quaternion.setFromUnitVectors(zC,c0.normalize()),o.scale.set(i,r,i),o.castShadow=!0,n.add(o),o}function pM(n,e,t=3){for(let i=0;i<t;i++){let s=i/t*Math.PI*2+Math.random()*.5;sd(n,[0,e*.65,0],[Math.cos(s)*e*2.1,.03,Math.sin(s)*e*2.1],e*.42)}}function mM(n,e,t,i){n.position.set(e,0,t),n.rotation.y=Math.random()*Math.PI*2,n.scale.setScalar(i),Nn.add(n)}function kC(n,e,t){let i=new Ve,s=4.7+Math.random()*.55,r=.2+Math.random()*.045,o=new L(gd,w0);o.scale.set(r,s,r),o.castShadow=!0,i.add(o),pM(i,r,4);let a=m0[Math.random()*m0.length|0],l=[];for(let c=0;c<4;c++){let u=c/4*Math.PI*2+Math.random()*.55,d=1.45+c*.67,h=.78-c*.09,f=[Math.cos(u)*h,d+.16,Math.sin(u)*h];sd(i,[0,d-.12,0],f,.065-c*.008),c<3&&l.push(f)}for(let c=0;c<6;c++){let u=c/5,d=new L(ll[c%ll.length],a),h=1.16*(1-u*.72);d.scale.set(h,1.55-u*.48,h*(.9+Math.random()*.18)),d.position.set(Math.sin(c*2.1)*.06,1.18+u*3.15,Math.cos(c*1.7)*.06),d.rotation.y=c*.73+Math.random()*.3,d.castShadow=!0,i.add(d)}for(let c=0;c<l.length;c++){let u=l[c],d=new L(ll[(c+1)%ll.length],a);d.scale.set(.42,.72,.4),d.position.set(u[0],u[1]-.04,u[2]),d.rotation.z=(c%2?-1:1)*.18,d.castShadow=!0,i.add(d)}mM(i,n,e,t)}function gM(n,e,t,i=!1){let s=new Ve,r=i?3.25:2.75+Math.random()*.45,o=i?.17:.27+Math.random()*.055,a=new L(gd,i?FC:w0);a.scale.set(o,r,o),a.rotation.z=(Math.random()-.5)*.06,a.castShadow=!0,s.add(a),pM(s,o,i?3:4);let l=i?hM:[lM,uM],c=[],u=5;for(let d=0;d<u;d++){let h=d/u*Math.PI*2+Math.random()*.45,f=(i?.8:1.08)*(.8+Math.random()*.3),m=r*(.63+d*.055),x=[Math.cos(h)*f,m+.68+Math.random()*.25,Math.sin(h)*f];if(sd(s,[0,r*.48,0],x,o*.4),c.push(x),d%2===0){let g=h+.55,p=[x[0]+Math.cos(g)*.45,x[1]+.38,x[2]+Math.sin(g)*.45];sd(s,x,p,o*.22),c.push(p)}}c.push([(Math.random()-.5)*.35,r+.52,(Math.random()-.5)*.35]);for(let d=0;d<c.length;d++){let h=new L(Wv[d%Wv.length],l[(d+(Math.random()<.5?0:1))%l.length]),f=(i?.63:.78)*(.82+Math.random()*.3);h.scale.set(f,f*(.72+Math.random()*.18),f),h.position.set(...c[d]),h.rotation.set(Math.random()*.4,Math.random()*Math.PI,Math.random()*.25),h.castShadow=!0,s.add(h)}mM(s,n,e,t)}function GC(n,e,t){gM(n,e,t,!1)}function VC(n,e,t){gM(n,e,t,!0)}function WC(n,e,t){let i=new L(new Pc(.55*t,0),g0);i.position.set(n,.26*t,e),i.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),i.scale.set(1,.62,1),i.castShadow=!0,i.receiveShadow=!0,Nn.add(i)}var Yv=0,qv=0;for(;Yv<58&&qv<800;){qv++;let n=Math.random()*Math.PI*2,e=20+Math.random()*(vn-24),t=Math.cos(n)*e,i=Math.sin(n)*e;if(!fM(t,i,4.5))continue;let s=Math.random(),r=.85+Math.random()*1.05;s<.46?kC(t,i,r):s<.86?GC(t,i,r*.95):VC(t,i,r*.9),b0(t,i,2.2*r),Yv++}for(let n=0;n<26;n++){let e=Math.random()*Math.PI*2,t=17+Math.random()*(vn-20),i=Math.cos(e)*t,s=Math.sin(e)*t;fM(i,s,3.4)&&WC(i,s,.7+Math.random()*1.6)}Nn.userData.staticBatch=hl(Nn);var xM=[];for(let n=0;n<3;n++){let e=new Ve,t=Math.random()*Math.PI*2,i=230+Math.random()*120,s=42+Math.random()*26,r=3+Math.random()*3,o=new L(new Pc(r,1),g0);o.scale.set(1.1,.9,1.1),o.castShadow=!0,e.add(o);let a=new L(new Ke(r*.85,r*2,6),g0);a.rotation.x=Math.PI,a.position.y=-r*.75,e.add(a);let l=new L(new js(r*.86,12),new se({map:Wc(),roughness:.95}));l.rotation.x=-Math.PI/2,l.position.y=r*.6,e.add(l);let c=new L(ll[1],m0[1]);c.scale.set(r*.28,r*.72,r*.28),c.position.y=r*.6+r*.3,c.castShadow=!0,e.add(c),e.position.set(Math.cos(t)*i,s,Math.sin(t)*i),Ne.add(e),xM.push({g:e,baseY:s,phase:Math.random()*Math.PI*2,spin:.04+Math.random()*.05})}var yM=[],XC=new Pt({map:Kc(),color:16770767,transparent:!0,opacity:.32,depthWrite:!1,fog:!1});for(let n=0;n<16;n++){let e=new Gt(XC.clone()),t=Math.random()*Math.PI*2,i=130+Math.random()*260,s=55+Math.random()*120;e.position.set(Math.cos(t)*i,24+Math.random()*70,Math.sin(t)*i),e.scale.set(s*1.7,s*.75,1),e.material.opacity=.22+Math.random()*.25,Ne.add(e),yM.push({s:e,angle:t,dist:i,speed:.004+Math.random()*.008})}var $v=[new se({color:5136486,roughness:1,flatShading:!0,fog:!0,envMapIntensity:.2}),new se({color:6057588,roughness:1,flatShading:!0,fog:!0,envMapIntensity:.2}),new se({color:7110018,roughness:1,flatShading:!0,fog:!0,envMapIntensity:.2})],YC=new se({color:13030102,roughness:.85,flatShading:!0,fog:!0,envMapIntensity:.2}),xl=new Ve;Ne.add(xl);for(let n=0;n<40;n++){let e=n/40*Math.PI*2+Math.random()*.14,t=380+Math.random()*320,i=30+Math.random()*52,s=i*(.5+Math.random()*.38),r=new L(new Ke(s,i,5+(Math.random()*3|0),1),$v[Math.random()*$v.length|0]);if(r.position.set(Math.cos(e)*t,-34+i/2,Math.sin(e)*t),r.rotation.y=Math.random()*Math.PI,r.rotation.z=(Math.random()-.5)*.05,xl.add(r),i>62){let o=i*.3,a=new L(new Ke(s*.3,o,5,1),YC);a.position.set(r.position.x,r.position.y+i/2-o/2+.5,r.position.z),a.rotation.y=r.rotation.y,xl.add(a)}}xl.userData.staticBatch=hl(xl);var l0=new ft({color:2829107,side:tt,transparent:!0,opacity:.85}),x0=new Et;x0.setAttribute("position",new Le([0,0,0,1.15,0,-.38,1.15,0,.42],3));var qC=new qt(.16,5,4),jh=[];for(let n=0;n<10;n++){let e=new Ve,t=new L(x0,l0),i=new L(x0,l0);i.scale.x=-1;let s=new L(qC,l0);s.scale.set(.75,.75,1.5),s.position.z=.08,e.add(t,i,s);let r=55+Math.random()*95,o=Math.random()*Math.PI*2,a=20+Math.random()*26;e.position.set(Math.cos(o)*r,a,Math.sin(o)*r),Ne.add(e),jh.push({g:e,wingL:i,wingR:t,angle:o,radius:r,y:a,speed:(.05+Math.random()*.05)*(Math.random()<.5?1:-1),phase:Math.random()*Math.PI*2,flap:5+Math.random()*2.5,size:.7+Math.random()*.7}),e.scale.setScalar(jh[jh.length-1].size)}var R0=260,xd=new Et,Qh=new Float32Array(R0*3),vM=new Float32Array(R0);for(let n=0;n<R0;n++){let e=Math.random()*Math.PI*2,t=Math.sqrt(Math.random())*52;Qh[n*3]=Math.cos(e)*t,Qh[n*3+1]=0,Qh[n*3+2]=Math.sin(e)*t,vM[n]=Math.random()}xd.setAttribute("position",new yt(Qh,3));xd.setAttribute("aSeed",new yt(vM,1));xd.boundingSphere=new Tn(new w,200);var MM=new kt({uniforms:{uTime:{value:0},uGlow:{value:Zt()}},vertexShader:`
    attribute float aSeed;
    uniform float uTime;
    varying float vAlpha;
    void main() {
      vec3 p = position;
      float h = 7.0;
      p.y = mod(aSeed * h + uTime * 0.55, h);
      p.x += sin(uTime * 0.5 + aSeed * 40.0) * 0.9;
      p.z += cos(uTime * 0.4 + aSeed * 31.0) * 0.9;
      vAlpha = sin((p.y / h) * 3.14159);
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_PointSize = (0.06 + aSeed * 0.06) * (420.0 / -mv.z);
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:`
    uniform sampler2D uGlow;
    varying float vAlpha;
    void main() {
      float a = texture2D(uGlow, gl_PointCoord).a;
      vec3 col = vec3(1.0, 0.82, 0.45);
      gl_FragColor = vec4(col, a * vAlpha * 0.75);
      if (gl_FragColor.a < 0.01) discard;
    }`,transparent:!0,depthWrite:!1,blending:$e}),EM=new Js(xd,MM);EM.frustumCulled=!1;Ne.add(EM);var ue=new Ve;Ne.add(ue);var Jt=new se({map:Rs(),normalMap:ca(),roughnessMap:la(),normalScale:new te(.9,.9),roughness:.94,metalness:.02,color:13942167}),en=new se({map:Rs(),normalMap:ca(),roughnessMap:la(),normalScale:new te(.55,.55),roughness:.86,metalness:.04,color:14996402}),va=new se({map:Gi(),normalMap:Lh(),roughnessMap:Yc(),roughness:.88}),eo=new se({map:qc(),roughness:.82}),gt=new se({color:14198846,metalness:.9,roughness:.32,emissive:7031824,emissiveIntensity:.25}),ed=new se({color:2759180,emissive:16757854,emissiveIntensity:2.4}),_M=new se({map:$c(),side:tt,roughness:.8}),y0=new se({color:1718869,emissive:7260415,emissiveIntensity:2.6,metalness:.4,roughness:.15}),hi=new se({color:3817288,metalness:.82,roughness:.34}),SM=new se({color:2759242,emissive:9071615,emissiveIntensity:2.4,metalness:.5,roughness:.2}),Ds=new se({color:16773839,emissive:16767088,emissiveIntensity:1.5,metalness:.55,roughness:.2}),TM=new ft({color:16770720,transparent:!0,opacity:.55,blending:$e,depthWrite:!1,side:tt}),no=new Ss(16756838,3,42,1.6);no.position.set(0,12,0);Ne.add(no);var Ri=10,rd=11.65,ro=2.3,wM=15.6,Kv=1.5,bM=Math.PI/2,od=Math.asin(ro/Ri),al=10;function oo(n,e,t=.4){if(!Number.isFinite(n)||!Number.isFinite(e))return{x:0,z:0,collided:!0};let i=Math.max(0,Number.isFinite(t)?t:.4),s=Math.max(0,ro-i);if(e>0&&Math.abs(n)<=s)return{x:n,z:e,collided:!1};let r=Math.hypot(n,e),o=Math.max(0,Ri-i),a=rd+i;if(r<o||r>a||r<1e-5)return{x:n,z:e,collided:!1};let l=(Ri+rd)*.5,u=(r<l?o:a)/r;return{x:n*u,z:e*u,collided:!0}}function gr(n,e){return e>0&&Math.abs(n)<ro?e>=13.1?0:e>12.69?(13.1-e)/.41*.18:e>12.21?.18:e>11.73?.45:e>11.25?.72:e>10.77?.99:e>9.35?1.26+(10.77-e)/1.42*.24:Kv:Math.hypot(n,e)<Ri-.45?Kv:0}function $C(n,e,t,i,s){let r=new Gn;r.moveTo(Math.cos(t)*e,Math.sin(t)*e),r.absarc(0,0,e,t,i,!1),r.lineTo(Math.cos(i)*n,Math.sin(i)*n),r.absarc(0,0,n,i,t,!0),r.closePath();let o=new vi(r,{depth:s,steps:1,bevelEnabled:!1,curveSegments:5});return o.rotateX(Math.PI/2),o.computeVertexNormals(),o}function ya(n,e,t,i,s,r,o,a){let l=new L($C(e,t,i,s,r),a);return l.position.y=o+r,l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function KC(n,e,t,i,s){let r=bM+od,o=Math.PI*2-od*2,a=new pn(e,t,72,1,r,o);a.rotateZ(Math.PI),a.rotateX(-Math.PI/2);let l=new L(a,s);return l.position.y=i,l.receiveShadow=!0,n.add(l),l}var AM=new En(.72,.62,.52,2,.05),RM=new En(.78,.08,.57,1,.022),CM=new En(.3,.88,.09,1,.025),PM=new Ut(.095,.64,.035);for(let n of[AM,RM,CM,PM])n.userData.persistent=!0;var ad=[],C0=[],Wt={sunspire:null,sunRays:null,tidalCrystals:[],stormTips:[],celestialRings:[],celestialOrbiters:null},v0=12,dl=null,ul=0,IM=new ye(16719904),ZC=new Set([Jt,va,eo,gt,ed,_M,y0,hi,SM,Ds,TM,pd,en]);function JC(n){let e=new Set,t=new Set;for(let i of[...n.children])n.remove(i),i.traverse?.(s=>{s.geometry&&e.add(s.geometry),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>t.add(r))});e.forEach(i=>{i.userData.persistent||i.dispose()}),t.forEach(i=>{ZC.has(i)||i.dispose()})}var LM=new qt(.065,7,5);LM.userData.persistent=!0;function cl(n,e,t,i,s){let r=new L(new Te(.05,.05,1.7*s,5),va);r.position.set(e,t+.85*s,i),r.castShadow=!0,n.add(r);let o=new L(LM,gt);o.scale.setScalar(s),o.position.set(e,t+1.72*s,i),n.add(o);let a=.95*s,l=.55*s,c=ad.length%3,u=new Gn;c===0?(u.moveTo(0,l/2),u.lineTo(a,l*.36),u.lineTo(a*.72,0),u.lineTo(a,-l/2),u.lineTo(0,-l/2)):c===1?(u.moveTo(0,l/2),u.lineTo(a*1.12,0),u.lineTo(0,-l/2)):(u.moveTo(0,l/2),u.lineTo(a,l/2),u.lineTo(a,-l*.28),u.lineTo(a*.55,-l/2),u.lineTo(a*.34,-l*.28),u.lineTo(0,-l/2)),u.closePath();let d=new nh(u),h=d.getAttribute("position"),f=d.getAttribute("uv");for(let x=0;x<h.count;x++)f.setXY(x,h.getX(x)/a,(h.getY(x)+l/2)/l);let m=new L(d,_M);m.position.set(e,t+1.42*s,i),m.castShadow=!0,m.userData.noStaticBatch=!0,m.userData.variant=c,n.add(m),ad.push({mesh:m,phase:Math.random()*Math.PI*2,variant:c})}function u0(n,e,t,i){let s=new Gt(new Pt({map:Zt(),color:16752704,transparent:!0,blending:$e,depthWrite:!1}));s.position.set(e,t,i),s.scale.setScalar(1.1),n.add(s),C0.push({sprite:s,base:s.position.clone(),phase:Math.random()*Math.PI*2,emit:Math.random()*2})}var Zv=[13942167,14139546,14271392,14075048,14470066,14734010,14079692,14342358,15262936],jC=[16777215,16773860,16771798,16769232,16767160,16769704,10475736,11057384,16770720],QC=[16756838,16756838,16756838,16756838,16760944,16765056,9427199,12101887,16773312];function Ml(n){JC(ue),ad.length=0,C0.length=0,dl=null,Wt.sunspire=null,Wt.sunRays=null,Wt.tidalCrystals.length=0,Wt.stormTips.length=0,Wt.celestialRings.length=0,Wt.celestialOrbiters=null;let e=Math.max(0,Math.min(Zv.length-1,Math.floor(Number(n)||0)));n=e,Jt.color.setHex(Zv[e]),en.color.copy(Jt.color).multiplyScalar(1.08),eo.color.setHex(jC[e]),no.color.setHex(QC[e]);let t=6.5+n*.55,i=3.2+n*.09,s=3.4+n*.1,r=1.5+s;ue.scale.setScalar(1);let o=new L(new Te(10.15,10.75,1.5,48),Jt);o.position.y=.75,o.castShadow=!0,o.receiveShadow=!0,ue.add(o);let a=new L(new Rt(10.5,.12,6,64),en);a.rotation.x=Math.PI/2,a.position.y=1.34,a.receiveShadow=!0,ue.add(a);let l=new L(new js(10.02,64),pd);l.rotation.x=-Math.PI/2,l.position.y=1.52,l.receiveShadow=!0,ue.add(l);let c=new L(new pn(3.35,3.55,48),gt);c.rotation.x=-Math.PI/2,c.position.y=1.545,ue.add(c);let u=new L(new pn(1.15,1.28,32),gt);u.rotation.x=-Math.PI/2,u.position.y=1.545,ue.add(u);let d=new L(new Te(10.65,11.15,.4,48),Jt);d.position.y=.2,d.receiveShadow=!0,ue.add(d);let h=new L(new Ut(4.35,.16,4.1),en);h.position.set(0,.72,11.15),h.rotation.x=.355,h.receiveShadow=!0,ue.add(h);for(let N=0;N<5;N++){let U=.18+N*.27,B=new L(new Ut(4.1,U,.42),en);B.position.set(0,U/2,12.9-N*.48),B.receiveShadow=!0,ue.add(B)}let f=bM+od,m=Math.PI*2-od*2,x=m/al;for(let N=0;N<al;N++){let U=f+N*x+.006,B=f+(N+1)*x-.006;ya(ue,10,11.2,U,B,s,1.5,Jt),ya(ue,10.88,11.32,U,B,.13,r-.04,en)}for(let N of[2.55,r-.48])for(let U=0;U<al;U++){let B=f+U*x+.006,H=f+(U+1)*x-.006;ya(ue,11.17,11.29,B,H,.11,N,en)}let g=38;for(let N=0;N<g;N++){let U=f+.055+N/(g-1)*(m-.11),B=new L(AM,Jt);B.position.set(Math.cos(U)*10.72,r+.38,Math.sin(U)*10.72),B.rotation.y=Math.PI/2-U,B.castShadow=!0,ue.add(B);let H=new L(RM,en);H.position.copy(B.position),H.position.y+=.34,H.rotation.y=B.rotation.y,ue.add(H)}for(let N=0;N<20;N++){let U=f+.18+N/19*(m-.36);for(let B of[-1,1]){let H=B>0?11.255:9.945,V=new L(CM,en);V.position.set(Math.cos(U)*H,3.35,Math.sin(U)*H),V.rotation.y=Math.PI/2-U+(B<0?Math.PI:0),ue.add(V);let ee=new L(PM,ed);ee.position.copy(V.position),ee.position.x+=Math.cos(U)*B*.055,ee.position.z+=Math.sin(U)*B*.055,ee.rotation.y=V.rotation.y,ue.add(ee)}}if(n>=1)for(let N=0;N<8;N++){let U=N/8*Math.PI*2+Math.PI/8,B=Math.cos(U)*11.05,H=Math.sin(U)*11.05,V=new L(new Ut(.72,s*.92,1.5),Jt);V.position.set(B,1.5+s*.46,H),V.rotation.y=Math.PI/2-U,V.castShadow=!0,V.receiveShadow=!0,ue.add(V);let ee=new L(new Ke(.52,.75,4),Jt);ee.position.set(B,1.5+s*.92+.38,H),ee.rotation.y=-U+Math.PI/4,ee.castShadow=!0,ue.add(ee)}let p=3.45,v=10.45,y=1.1,E=s+4.6;for(let N of[-1,1]){let U=N*p,B=new L(new Te(y,y*1.12,E,14),Jt);B.position.set(U,1.5+E/2,v),B.castShadow=!0,B.receiveShadow=!0,ue.add(B);let H=new L(new Rt(1.2,.13,6,24),en);H.rotation.x=Math.PI/2,H.position.set(U,1.5+E-.1,v),ue.add(H);let V=new L(new Ke(1.48,1.65,12),eo);V.position.set(U,1.5+E+.78,v),V.castShadow=!0,ue.add(V);let ee=new L(new Rt(1.23,.055,5,20),gt);ee.rotation.x=Math.PI/2,ee.position.set(U,1.5+E+.08,v),ue.add(ee);let he=Ae(.3,.9,.1,en,U,4.65,v+1.08,.025,1);ue.add(he);let fe=new L(new Ut(.09,.66,.04),ed);fe.position.set(U,4.65,v+1.145),ue.add(fe),u0(ue,N*2.42,4.15,11.45)}let b=Ae(8.15,1.05,2.35,Jt,0,r+2.65,v,.07,2);ue.add(b);let T=Ae(8.35,.14,2.5,en,0,r+3.21,v,.035,1);ue.add(T);for(let N=0;N<7;N++){let U=Ae(.62,.55,.5,Jt,-3.3+N*1.1,r+3.51,v,.045,1);ue.add(U)}let S=new L(new Rt(2.05,.23,8,28,Math.PI),en);S.position.set(0,5.2,11.38),S.castShadow=!0,ue.add(S);for(let N of[-1,1]){let U=Ae(.38,3.7,.55,en,N*2.02,3.35,11.35,.045,2);ue.add(U);let B=Ae(.5,.22,.64,Jt,N*2.02,5.22,11.35,.035,1);B.rotation.z=N*-.16,ue.add(B)}let I=Ae(.38,.48,.64,en,0,6.95,11.38,.04,2);ue.add(I);for(let N of[-1,1]){let U=new Ve;U.position.set(N*1.9,1.5,11.12),U.rotation.y=N*1.48;let B=Ae(1.78,4.55,.16,va,-N*.89,2.275,0,.035,1);U.add(B);for(let H of[.65,1.85,3.05,4.05])U.add(Ae(1.62,.09,.055,hi,-N*.89,H,.105,.012,1));for(let H=0;H<4;H++)U.add(Ae(.025,4.25,.035,va,-N*(.2+H*.46),2.275,.095,.006,1));ue.add(U)}if(n>=3){let N=new Ve;N.name="raised-portcullis";for(let U=0;U<8;U++){let B=new L(new Te(.047,.047,2.7,5),hi);B.position.set(-1.26+U*.36,8.48,11.26),N.add(B)}for(let U of[7.25,8.45,9.65])N.add(Ae(2.85,.11,.13,hi,0,U,11.26,.018,1));for(let U of[-1,1]){N.add(Ae(.15,3.1,.2,hi,U*1.5,8.45,11.24,.022,1));let B=new L(new Te(.025,.025,1.25,5),hi);B.position.set(U*.85,10.35,11.2),N.add(B)}ue.add(N);for(let U of[-1,1])ue.add(Ae(.12,4.15,.08,hi,U*1.72,3.65,11.48,.018,1));ue.add(Ae(3.75,.18,.28,hi,0,6.95,11.43,.025,1));for(let U of[-1.2,-.4,.4,1.2]){let B=new L(new qt(.075,7,5),gt);B.position.set(U,6.95,11.59),ue.add(B)}}for(let N=0;N<4;N++){let U=N/4*Math.PI*2+Math.PI/4,B=Math.cos(U)*10.5,H=Math.sin(U)*10.5,V=new L(new Te(1.35,1.5,5.6,12),Jt);V.position.set(B,2.8,H),V.castShadow=!0,V.receiveShadow=!0,ue.add(V);let ee=new L(new Ke(1.75,2.4,10),eo);ee.position.set(B,6.8,H),ee.castShadow=!0,ue.add(ee);let he=new L(new Rt(1.42,.07,6,16),gt);he.rotation.x=Math.PI/2,he.position.set(B,5.35,H),ue.add(he);let fe=new L(new Rt(1.47,.12,6,20),en);fe.rotation.x=Math.PI/2,fe.position.set(B,5.58,H),fe.castShadow=!0,ue.add(fe);let He=new L(new Rt(1.69,.08,6,20),en);He.rotation.x=Math.PI/2,He.position.set(B,5.72,H),ue.add(He),u0(ue,B,4.7,H),cl(ue,B,7.6,H,.75)}let _=new L(new Te(i,i*1.14,t,20),Jt);_.position.y=1.5+t/2,_.castShadow=!0,_.receiveShadow=!0,ue.add(_);let A=i+.075;ue.add(Ae(1.18,2.15,.16,va,0,2.58,A,.045,2));for(let N of[2,2.75,3.45])ue.add(Ae(1.08,.075,.05,hi,0,N,A+.11,.012,1));let G=new L(new Rt(.73,.13,7,20,Math.PI),en);G.position.set(0,3.66,A+.04),G.castShadow=!0,ue.add(G);for(let N of[-1,1])ue.add(Ae(.2,2.2,.22,en,N*.83,2.6,A+.02,.03,1));for(let N=0;N<3;N++){let U=.12+N*.12,B=new L(new Ut(1.8,U,.38),en);B.position.set(0,1.5+U/2,i+.72-N*.34),B.receiveShadow=!0,ue.add(B)}let X=1.5+t,re=new En(.62,.55,.45,2,.045);for(let N=0;N<14;N++){let U=N/14*Math.PI*2,B=new L(re,Jt);B.position.set(Math.cos(U)*(i+.05),X+.28,Math.sin(U)*(i+.05)),B.rotation.y=-U+Math.PI/2,B.castShadow=!0,ue.add(B)}let D=new L(new Rt(i+.06,.09,6,28),gt);D.rotation.x=Math.PI/2,D.position.y=X-.8,ue.add(D);let F=10,k=new En(.62,1.05,.08,2,.035);for(let N=0;N<2;N++)for(let U=0;U<F;U++){let B=U/F*Math.PI*2+N*.31,H=new L(new un(.42,.85),ed);H.position.set(Math.cos(B)*(i+.02+(N===0?.02:.04)),1.5+t*(N===0?.38:.64),Math.sin(B)*(i+.02+(N===0?.02:.04))),H.rotation.y=-B+Math.PI/2,ue.add(H);let V=new L(k,en);V.position.copy(H.position),V.rotation.y=H.rotation.y,V.position.multiplyScalar(1.002),ue.add(V),H.renderOrder=1,H.position.multiplyScalar(1.006)}let K=2.8+n*.08,j=new L(new Ke(i*1.2,K,12),eo);j.position.y=X+K/2,j.castShadow=!0,ue.add(j);let W=new L(new Te(.06,.06,2.2,5),gt);if(W.position.y=X+K+.9,ue.add(W),cl(ue,0,X+K+1.6,0,1.1),n>=2){for(let N=0;N<4;N++){let U=N/4*Math.PI*2,B=Math.cos(U)*7.4,H=Math.sin(U)*7.4,V=6.2+n*.18,ee=new L(new Te(.95,1.1,V,10),Jt);ee.position.set(B,1.5+V/2,H),ee.castShadow=!0,ue.add(ee);let he=new L(new Ke(1.25,1.9,8),eo);he.position.set(B,1.5+V+.95,H),he.castShadow=!0,ue.add(he);let fe=new L(new Rt(1.03,.075,6,16),gt);fe.rotation.x=Math.PI/2,fe.position.set(B,1.5+V+.04,H),ue.add(fe)}for(let N of[-1,1]){let U=N*6.75,B=8.45,H=s+2.25,V=new L(new Te(1.48,1.72,H,12),Jt);V.position.set(U,1.5+H/2,B),V.castShadow=!0,V.receiveShadow=!0,ue.add(V);let ee=new L(new Rt(1.54,.1,6,24),en);ee.rotation.x=Math.PI/2,ee.position.set(U,1.5+H-.12,B),ue.add(ee);let he=new L(new Ke(1.82,1.8,10),eo);he.position.set(U,1.5+H+.85,B),he.castShadow=!0,ue.add(he),cl(ue,U,1.5+H+1.7,B,.72)}}if(n>=4){for(let N=0;N<4;N++){let U=N/4*Math.PI*2+Math.PI/4;cl(ue,Math.cos(U)*9.65,r+.55,Math.sin(U)*9.65,.8)}for(let N=0;N<al;N++){let U=f+N*x+.01,B=f+(N+1)*x-.01;ya(ue,11.18,11.34,U,B,.1,r+.03,gt)}for(let N=0;N<8;N++){let U=N/8*Math.PI*2+Math.PI/8,B=new L(new Ke(.14,.55,5),gt);B.position.set(Math.cos(U)*10.72,r+.78,Math.sin(U)*10.72),ue.add(B)}for(let N of[-1,1])cl(ue,N*p,1.5+E+1.65,v,.95),ue.add(Ae(.16,1.1,.16,gt,N*2.65,r+3.75,11.36,.025,1))}for(let N=0;N<4;N++){let U=N/4*Math.PI*2+Math.PI/4,B=Math.cos(U)*6.2,H=Math.sin(U)*6.2,V=new L(new Te(.36,.22,.42,8),gt);V.position.set(B,2.02,H),V.castShadow=!0,ue.add(V);let ee=new L(new Te(.1,.14,.5,6),va);ee.position.set(B,1.77,H),ue.add(ee),u0(ue,B,2.35,H)}if(n>=5){let N=new L(new Rt(.68,.09,6,18),gt);N.rotation.x=Math.PI/2,N.position.y=X+K+.5,ue.add(N);for(let V=0;V<5;V++){let ee=V/5*Math.PI*2,he=new L(new Ke(.09,.5,5),gt);he.position.set(Math.cos(ee)*.68,X+K+.72,Math.sin(ee)*.68),ue.add(he)}let U=X+K+.8,B=new Gt(new Pt({map:Zt(),color:16770720,transparent:!0,blending:$e,depthWrite:!1,opacity:.9}));B.position.y=U,B.scale.setScalar(4.4),ue.add(B),Wt.sunspire=B;let H=new Ve;H.position.y=U;for(let V=0;V<8;V++){let ee=V/8*Math.PI*2,he=new L(new Ut(.07,.07,1.15),gt);he.position.set(Math.cos(ee)*1.35,0,Math.sin(ee)*1.35),he.rotation.y=-ee,H.add(he)}hl(H),H.userData.noStaticBatch=!0,ue.add(H),Wt.sunRays=H}if(n>=6){KC(ue,11.2,13.3,1.36,Jt);for(let N=0;N<al;N++){let U=f+N*x+.006,B=f+(N+1)*x-.006;ya(ue,13.13,13.3,U,B,.09,1.38,gt),ya(ue,11.2,11.32,U,B,.08,1.38,gt)}for(let N=0;N<8;N++){let U=N/8*Math.PI*2+Math.PI/8,B=Math.cos(U)*12.25,H=Math.sin(U)*12.25,V=new L(new Te(.28,.38,.58,8),Jt);V.position.set(B,1.66,H),V.castShadow=!0,ue.add(V);let ee=new L(new fn(.26,0),y0);ee.position.set(B,2.26,H),ee.scale.y=1.8,ee.castShadow=!0,ee.userData.noStaticBatch=!0,ue.add(ee);let he=new Gt(new Pt({map:Zt(),color:7260415,transparent:!0,blending:$e,depthWrite:!1,opacity:.65}));he.position.copy(ee.position),he.scale.setScalar(1.35),ue.add(he),Wt.tidalCrystals.push({crystal:ee,glow:he,baseY:2.26,phase:Math.random()*Math.PI*2})}}if(n>=7)for(let N=0;N<4;N++){let U=N/4*Math.PI*2+Math.PI/4,B=Math.cos(U)*12.25,H=Math.sin(U)*12.25,V=new L(new Te(.44,.64,.9,8),hi);V.position.set(B,1.88,H),V.castShadow=!0,ue.add(V);let ee=new L(new Te(.15,.28,5.8,6),hi);ee.position.set(B,5.2,H),ee.castShadow=!0,ue.add(ee);let he=new L(new Rt(.3,.06,5,12),gt);he.rotation.x=Math.PI/2,he.position.set(B,4.3,H),ue.add(he);let fe=new L(new fn(.34,0),SM);fe.position.set(B,8.35,H),fe.castShadow=!0,fe.userData.noStaticBatch=!0,ue.add(fe);let He=new Gt(new Pt({map:Zt(),color:12099839,transparent:!0,blending:$e,depthWrite:!1,opacity:.8}));He.position.copy(fe.position),He.scale.setScalar(1.8),ue.add(He),Wt.stormTips.push({tip:fe,glow:He,x:B,z:H,baseY:8.35,phase:Math.random()*Math.PI*2})}if(n>=8){let N=new L(new fn(.9,0),y0);N.position.y=X+K+2.1,N.castShadow=!0,N.userData.noStaticBatch=!0,ue.add(N),dl=N;let U=new L(new Te(.06,.9,7,10,1,!0),new ft({color:7260415,transparent:!0,opacity:.12,blending:$e,depthWrite:!1,side:tt}));U.position.y=X+K+5.4,ue.add(U);for(let H=0;H<3;H++){let V=new L(new Rt(1.35+H*.38,.035,6,48),TM.clone());V.rotation.x=Math.PI/2+H*.5,V.rotation.y=H*.8,V.position.y=N.position.y,V.userData.noStaticBatch=!0,ue.add(V),Wt.celestialRings.push(V)}let B=new Ve;B.position.y=N.position.y;for(let H=0;H<8;H++){let V=H/8*Math.PI*2,ee=new L(new fn(.16,0),Ds);ee.position.set(Math.cos(V)*1.95,Math.sin(V*2)*.35,Math.sin(V)*1.95),ee.scale.y=1.6,B.add(ee)}hl(B),B.userData.noStaticBatch=!0,ue.add(B),Wt.celestialOrbiters=B}ue.scale.setScalar(1),v0=X+K+.4,no.position.set(0,v0-1.5,0),no.distance=38+n*2,no.intensity=3+n*.2,ue.userData.staticBatch=hl(ue)}Ml(0);function El(n){IM.setHex(n),ul=.4}function ba(){return v0}var Ce=new Ve;Ce.position.set(0,0,12.8);Ce.scale.setScalar(1.5);Ne.add(Ce);var Ta=new L(new pn(.62,.82,40),new ft({color:16767114,transparent:!0,opacity:.55,blending:$e,depthWrite:!1,side:tt}));Ta.rotation.x=-Math.PI/2;Ta.position.y=.05;Ce.add(Ta);var rs=new L(new pn(.9,1.04,48),new ft({color:16767114,transparent:!0,opacity:0,blending:$e,depthWrite:!1,side:tt}));rs.rotation.x=-Math.PI/2;rs.position.y=.065;Ce.add(rs);var Pe=new Ve;Ce.add(Pe);var fl=new Ss(16763274,2,26,1.7);fl.position.set(0,3,0);Ce.add(fl);var DM=new se({color:15251850,roughness:.7}),cd=new se({map:Dh(),roughness:.75,side:tt}),NM=new se({map:Dh(),color:9546635,roughness:.86,side:tt}),so=new se({color:12107464,metalness:.85,roughness:.28,envMapIntensity:1.2}),Ea=new se({color:4608093,metalness:.8,roughness:.4,envMapIntensity:1}),_a=new se({color:14081508,metalness:.9,roughness:.22,envMapIntensity:1.25}),Ai=new se({color:7031340,roughness:.85}),Ls=new se({color:9067051,roughness:.75}),td=new se({color:5857644,metalness:.72,roughness:.42}),M0=new se({color:2695965,roughness:.72}),E0=new se({color:3810322,roughness:.9}),pl=new se({color:11573872,roughness:.85}),HM=new se({color:14722108,metalness:.3,roughness:.45}),P0=new se({color:5978145,roughness:.72}),UM=new ft({color:12577023}),ld=new se({color:2771594,emissive:4890367,emissiveIntensity:1.6,metalness:.5,roughness:.3}),yl=new se({color:9051946,roughness:.85,side:tt}),ud=new se({color:12092974,emissive:16762960,emissiveIntensity:.03,metalness:.15,roughness:.55}),nd=new se({color:13212218,emissive:16754736,emissiveIntensity:.06,metalness:.2,roughness:.5}),OM=new se({color:15777872,metalness:.6,roughness:.3,emissive:6962952,emissiveIntensity:.18}),BM=new ft({color:16767088,transparent:!0,opacity:.46,blending:$e,depthWrite:!1,side:tt}),to={},jn=0,St=0,Jv=["torso","head","armL","armR","legL","legR","cape"],Sa=null,Zh=!1,jv=!1,FM=new Set([DM,cd,NM,so,Ea,_a,Ai,Ls,td,M0,E0,pl,HM,P0,UM,ld,yl,ud,nd,OM,BM,Ds,gt,hi]);function e3(){let n=new Set,e=new Set;for(let t of[...Pe.children])Pe.remove(t),t.traverse?.(i=>{i.geometry&&n.add(i.geometry),i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>e.add(s))});n.forEach(t=>{t.userData.sharedAsset||t.dispose()}),e.forEach(t=>{FM.has(t)||t.dispose()}),to={}}function Ma(n,e,t,i){let s=new Ve;return s.position.set(e,t,i),n.add(s),s}function Jh(n,e,t,i,s,r,o,a=!0){let l=Ma(n,e,t,i),c=new L(new Jn(r,Math.max(.01,s-r*2),4,8),o);if(c.position.y=-s/2,c.castShadow=!0,l.add(c),a){let u=Ae(r*2.4,r*1.15,r*3.1,Ai,0,-s+r*.6,r*.35,.018,1);l.add(u)}return l}function t3(n,e,t,i,s=t){if(t===0){let d=new L(new Ke(.225*e,.36*e,7),i);d.position.set(0,1.34*e,-.015*e),d.rotation.y=Math.PI/7,d.castShadow=!0,n.add(d);let h=Ae(.27*e,.12*e,.035*e,Ea,0,1.245*e,.15*e,.025*e,2);n.add(h);let f=Ae(.3*e,.04*e,.055*e,Ai,0,1.325*e,.17*e,.012*e,1);f.rotation.x=-.12,n.add(f);return}let r=s>=2?so:Ea,o=Ae(.37*e,.32*e,.33*e,r,0,1.32*e,0,.05*e,2);o.rotation.x=-.035,n.add(o);let a=Ae(.29*e,.065*e,.29*e,_a,0,1.5*e,-.01*e,.018*e,1);n.add(a);let l=Ae(.41*e,.05*e,.075*e,r,0,1.415*e,.175*e,.015*e,1);l.rotation.x=-.12,n.add(l);let c=Ae(.28*e,.045*e,.03*e,hi,0,1.35*e,.183*e,.01*e,1);n.add(c);let u=Ae(.042*e,.15*e,.05*e,_a,0,1.305*e,.194*e,.01*e,1);n.add(u);for(let d of[-1,1]){let h=Ae(.065*e,.16*e,.1*e,r,d*.155*e,1.25*e,.14*e,.016*e,1);h.rotation.z=d*-.12,n.add(h)}if(t===1){let d=new L(new Ke((s>=2?.09:.075)*e,(s>=2?.55:.42)*e,5),yl);if(d.scale.z=.48,d.position.set(0,(s>=2?1.79:1.71)*e,-.045*e),d.rotation.x=-.24,d.castShadow=!0,n.add(d),s>=2)for(let h of[-1,1]){let f=Ae(.06*e,.24*e,.26*e,gt,h*.12*e,1.59*e,-.01*e,.018*e,1);f.rotation.z=h*-.3,n.add(f)}}else for(let d of[-1,1]){let h=Ae(.055*e,(t===3||s>=4?.25:.19)*e,.24*e,t===3?gt:_a,d*.11*e,1.57*e,-.01*e,.018*e,1);h.rotation.z=d*-.28,n.add(h)}}function h0(n,e){let{scale:t=1,cloak:i=!0,hood:s=!0,armor:r=0,cloth:o=cd,capeMat:a=yl,level:l=r}=e,c=t,u=new L(new Jn(.22*c,.38*c,5,10),o);u.position.y=.82*c,u.castShadow=!0,n.add(u);let d=new L(new Te(.255*c,.255*c,.075*c,10),Ai);d.position.y=.67*c,n.add(d);let h=Ae(.09*c,.075*c,.035*c,gt,0,.67*c,.25*c,.014*c,1);if(n.add(h),r>0){let y=l>=2?so:Ea,E=Ae(.42*c,.38*c,.18*c,y,0,.88*c,.07*c,.045*c,2);E.rotation.x=-.06,n.add(E);let b=Ae(.35*c,.12*c,.15*c,y,0,.65*c,.075*c,.025*c,1);n.add(b);let T=Ae(.3*c,.026*c,.03*c,r>=2?gt:_a,0,.99*c,.17*c,.008*c,1);n.add(T);for(let S of[-1,1]){let I=Ae(.15*c,.22*c,.1*c,y,S*.15*c,.55*c,.1*c,.024*c,1);I.rotation.z=S*.08,n.add(I)}if(r>=3){let S=new L(new fn(.047*c,0),Ds);S.scale.y=1.35,S.position.set(0,.91*c,.178*c),n.add(S)}for(let S=0;S<Math.min(3,Math.max(0,l-1));S++){let I=Ae(.3*c,.105*c,.055*c,S===2?gt:Ea,0,(.79-S*.12)*c,.185*c,.018*c,1);I.rotation.x=-.08,n.add(I)}}else{let y=Ae(.32*c,.31*c,.09*c,Ai,0,.87*c,.155*c,.025*c,1);y.rotation.x=-.05,n.add(y);let E=Ae(.4*c,.075*c,.22*c,o,0,1.03*c,0,.025*c,1);n.add(E)}let f=new L(new qt(.16*c,12,10),DM);if(f.position.y=1.18*c,f.castShadow=!0,n.add(f),l>0&&r>0){let y=l>=5?Ds:l>=3?gt:_a;if(f.add(Ae(.21*c,.028*c,.025*c,y,0,.018*c,.158*c,.008*c,1)),l>=2)for(let E of[-1,1]){let b=new L(new Ke(.035*c,(.2+l*.018)*c,5),l>=4?ud:pl);b.position.set(E*.115*c,.18*c,-.025*c),b.rotation.z=E*-.42,f.add(b)}}s&&t3(n,c,r,o,l);let m=null;if(i&&(m=new L(AC(.52*c,.9*c,.26,.065),a),m.position.set(0,1.08*c,-.185*c),m.rotation.x=.12,m.castShadow=!0,n.add(m),l>0)){let y=l>=5?Ds:gt;for(let E of[-1,1])m.add(Ae(.026*c,.78*c,.018*c,y,E*.225*c,-.43*c,.065*c,.007*c,1));m.add(Ae(.46*c,.045*c,.02*c,y,0,-.84*c,.07*c,.009*c,1))}let x=Jh(n,-.12*c,.62*c,0,.6*c,.075*c,Ai),g=Jh(n,.12*c,.62*c,0,.6*c,.075*c,Ai),p=Jh(n,-.3*c,1*c,0,.48*c,.055*c,o,!1),v=Jh(n,.3*c,1*c,0,.48*c,.055*c,o,!1);if(r>0){let y=l>=2?so:Ea;for(let E of[-1,1]){let b=Ae(.19*c,.11*c,.23*c,y,E*.31*c,1.045*c,0,.032*c,2);if(b.rotation.z=E*.16,n.add(b),l>=2){let G=Ae(.17*c,.035*c,.21*c,gt,E*.335*c,1.11*c,.005*c,.01*c,1);G.rotation.z=E*.18,n.add(G)}let T=E<0?p:v,S=Ae(.12*c,.2*c,.13*c,y,0,-.31*c,.015*c,.022*c,1);T.add(S);let I=E<0?x:g,_=Ae(.15*c,.13*c,.085*c,y,0,-.19*c,.07*c,.026*c,1);I.add(_);let A=Ae(.12*c,.24*c,.09*c,y,0,-.39*c,.06*c,.02*c,1);A.rotation.x=-.05,I.add(A)}}else for(let y of[p,v]){let E=Ae(.105*c,.16*c,.11*c,Ai,0,-.31*c,.01*c,.018*c,1);y.add(E)}return{torso:u,head:f,legL:x,legR:g,armL:p,armR:v,cape:m,scale:c,armor:r,level:l}}function d0(n,e,t=0){let i=Ma(n,.1*e,-.23*e,.055*e),s=new L(new Rt(.34*e,.032*e,6,20,Math.PI*1.15),P0);s.rotation.z=-Math.PI/2-.35,s.castShadow=!0,i.add(s);let r=new L(new Rt(.34*e,.011*e,5,20,Math.PI*1.15),ld);if(r.rotation.copy(s.rotation),r.position.z=.034*e,i.add(r),t>=2){let l=new L(new Rt(.385*e,.014*e,5,20,Math.PI*1.15),t>=4?Ds:gt);l.rotation.copy(s.rotation),l.position.z=.052*e,i.add(l)}if(t>=4){let l=new Gt(new Pt({map:Zt(),color:t>=6?16770720:10476799,transparent:!0,blending:$e,depthWrite:!1,opacity:.24}));l.position.z=.08*e,l.scale.setScalar(.72*e),i.add(l)}let o=Ae(.065*e,.16*e,.065*e,Ai,0,0,.01*e,.016*e,1);i.add(o);let a=new L(new Te(.007*e,.007*e,.62*e,4),UM);return a.rotation.z=.42,a.position.z=.045*e,i.add(a),i}function zM(n){n.traverse(e=>{if(e.geometry&&(e.geometry.userData.sharedAsset=!0),!e.material)return;let t=Array.isArray(e.material)?e.material:[e.material];for(let i of t)i.userData.sharedAsset=!0,FM.add(i);e.isMesh&&(e.castShadow=Array.isArray(e.material)?e.material.some(i=>!i.transparent):!e.material.transparent,e.receiveShadow=!0)})}function n3(n){if(!Sa)return null;let e=new Ve;e.name="sunward-ranger-asset";let t=Sa.clone(!0);t.updateMatrixWorld(!0);let i={};for(let a of Jv)i[a]=t.getObjectByName(a);if(Jv.some(a=>!i[a]))return null;let s=new Kn().setFromObject(t),r=s.max.y-s.min.y,o=r>.001?1.55/r:1;return t.scale.multiplyScalar(o),t.position.y-=s.min.y*o,zM(t),e.add(t),n.add(e),{...i,bow:t.getObjectByName("SunBow"),scale:1,armor:0,assetRoot:e}}function i3(){if(Sa||Zh||jv)return;Zh=!0;let n=(document.documentElement.dataset.assetBase||"./public/")+"models/sunward-ranger.glb";new zh().load(n,e=>{Zh=!1,Sa=e.scene,zM(Sa),jn===0&&Aa(M.heroLevel)},void 0,e=>{Zh=!1,jv=!0,console.warn("[world] Sunward Ranger asset unavailable; keeping procedural ranger.",e)})}function Aa(n){if(e3(),St=Math.max(0,Math.min(6,Math.floor(n||0))),jn=fr(St),Ce.userData.stage=jn,Ce.userData.level=St,Ce.userData.tier=St,Ce.userData.stageName=Ti(St),ld.emissiveIntensity=1.2+St*.24,rs.visible=St>=2,jn===0){let i=Sa?n3(Pe):null;if(i)to=i;else{let s=h0(Pe,{scale:1,armor:0,cloth:NM}),r=d0(s.armR,1),o=new L(new Te(.075,.055,.46,8),Ai);o.position.set(-.19,.91,-.2),o.rotation.x=-.3,o.castShadow=!0,Pe.add(o);for(let a=0;a<3;a++){let l=new L(new Te(.009,.009,.4,4),P0);l.position.set(-.22+a*.035,1.13,-.16+a*.018),l.rotation.x=-.3,Pe.add(l);let c=new L(new Ke(.027,.1,4),pl);c.position.set(l.position.x,.99,l.position.z+.045),c.rotation.x=Math.PI,Pe.add(c)}to={...s,bow:r}}}else if(jn===1){let s=new L(new Jn(.4,1.05,6,12),Ls);s.rotation.x=Math.PI/2,s.position.y=1.14*1,s.castShadow=!0,Pe.add(s);let r=new L(new qt(.43*1,12,10),Ls);r.position.set(0,1.17*1,.55*1),r.scale.z=.88,r.castShadow=!0,Pe.add(r);let o=new L(new qt(.44*1,12,10),Ls);o.position.set(0,1.11*1,-.6*1),o.scale.z=.9,o.castShadow=!0,Pe.add(o);let a=new L(new Te(.18*1,.3*1,.9*1,8),Ls);a.position.set(0,1.7*1,.82*1),a.rotation.x=.55,a.castShadow=!0,Pe.add(a);let l=Ae(.3*1,.32*1,.58*1,Ls,0,2.06*1,1.15*1,.075*1,2);l.rotation.x=-.08,Pe.add(l);let c=Ae(.25*1,.2*1,.32*1,Ls,0,1.99*1,1.43*1,.055*1,2);Pe.add(c);for(let y of[-1,1]){let E=new L(new Ke(.055,.19,5),Ls);E.position.set(y*.105*1,2.28*1,1.08*1),E.rotation.z=y*-.15,Pe.add(E);let b=new L(new qt(.026*1,6,5),M0);b.position.set(y*.155*1,2.11*1,1.25*1),Pe.add(b);let T=Ae(.045*1,.3*1,.07*1,gt,y*.16*1,2.06*1,1.25*1,.012*1,1);T.rotation.x=-.15,Pe.add(T)}for(let y=0;y<3;y++){let E=Ae(.09,.34,.25,E0,0,(2.02-y*.17)*1,(.91-y*.22)*1,.025,1);E.rotation.x=.42,Pe.add(E)}let u=Ae(.32*1,.055*1,.07*1,gt,0,2.19*1,1.3*1,.015*1,1);Pe.add(u);let d=Ae(.64*1,.16*1,.62*1,Ai,0,1.57*1,.02,.04*1,2);Pe.add(d);let h=Ae(.66*1,.12*1,.78*1,td,0,1.42*1,.03*1,.035*1,2);Pe.add(h);for(let y of[-1,1]){let E=Ae(.07,.3,.58,td,y*.4*1,1.29,.05,.022,1);E.rotation.z=y*.12,Pe.add(E)}if(St>=2){Pe.add(Ae(.7*1,.1*1,.9*1,so,0,1.51*1,.02*1,.03*1,1)),Pe.add(Ae(.48*1,.36*1,.12*1,td,0,1.37*1,.67*1,.035*1,2));for(let y of[-1,1]){let E=new L(new Ke(.07,.48,5),yl);E.position.set(y*.12*1,2.47*1,1.02*1),E.rotation.z=y*-.16,E.scale.z=.55,Pe.add(E)}}let m=[[-.28,1,.52],[.28,1,.52],[-.28,1,-.52],[.28,1,-.52]].map(y=>{let E=Ma(Pe,y[0]*1,y[1]*1,y[2]*1),b=new L(new Te(.1*1,.075*1,.95*1,6),Ls);b.position.y=-.48*1,b.castShadow=!0,E.add(b);let T=Ae(.17*1,.13*1,.23*1,M0,0,-.94*1,.035*1,.025*1,1);return E.add(T),E}),x=new L(new Ke(.12*1,.7*1,6),E0);x.position.set(0,1.25*1,-1.05*1),x.rotation.x=-.9,x.castShadow=!0,Pe.add(x);let g=new Ve;g.position.y=.85,Pe.add(g);let p=h0(g,{scale:.82,cloak:!0,hood:!0,armor:1,level:St});p.legL.visible=!1,p.legR.visible=!1;let v=d0(p.armR,.9,St);to={...p,horseLegs:m,tail:x,bow:v,body:s}}else{let X=function(W){let N=Ma(Pe,W*.28*1.05,1.3125,0);for(let B=0;B<A;B++){let H=new L(I,(s||St>=4)&&B===0?nd:a);H.scale.x=W,H.position.set(W*(.05+B*.11)*1.05,-B*.012*1.05,(.16-B*.18)*1.05),H.rotation.y=W*(.08+B*.11),H.castShadow=!0,N.add(H)}for(let B=0;B<G;B++){let H=new L(_,o);H.scale.x=W,H.position.set(W*(.08+B*.17)*1.05,.025*1.05,(.38+B*.11)*1.05),H.rotation.y=W*(.22+B*.12),H.castShadow=!0,N.add(H)}let U=Ae(.28*1.05,.09*1.05,.36*1.05,s||St>=4?gt:o,W*.08*1.05,.04*1.05,.12*1.05,.025*1.05,1);return U.rotation.z=W*.12,N.add(U),N},s=jn===3,r=Math.max(0,St-3),o=s||St>=5?ud:pl,a=s||St>=4?nd:pl,l=s||St>=4?OM:HM,c=new L(new Jn(.38*1.05,1*1.05,6,12),o);c.rotation.x=Math.PI/2,c.position.y=1.05*1.05,c.castShadow=!0,Pe.add(c);let u=new L(new qt(.4*1.05,10,8),o);u.position.set(0,1.08*1.05,.5*1.05),u.scale.set(.9,1.05,.85),u.castShadow=!0,Pe.add(u);let d=new L(new qt(.42*1.05,10,10),o);d.position.set(0,1.02*1.05,-.62*1.05),Pe.add(d);let h=new L(new Te(.14*1.05,.24*1.05,.5*1.05,8),o);h.position.set(0,1.5*1.05,.62*1.05),h.rotation.x=.35,Pe.add(h);let f=new L(new qt(.22*1.05,10,8),o);f.position.set(0,1.78*1.05,.82*1.05),f.scale.set(.9,1,1.08),f.castShadow=!0,Pe.add(f);let m=new L(new Ke(.09*1.05,.35*1.05,6),l);m.position.set(0,1.74*1.05,1.08*1.05),m.rotation.x=Math.PI/2,m.castShadow=!0,Pe.add(m);for(let W of[-1,1]){let N=new L(new qt(.02835,6,5),s?Ds:ld);N.position.set(W*.135*1.05,1.83*1.05,.965*1.05),Pe.add(N);let U=Ae(.12*1.05,.035*1.05,.06*1.05,s?gt:o,W*.13*1.05,1.875*1.05,.96*1.05,.012*1.05,1);U.rotation.z=W*-.18,Pe.add(U)}if(s||St>=4){let W=new L(new Ke((s?.075:.06)*1.05,(s?.38:.26+r*.05)*1.05,5),ud);W.position.set(0,(s?2.02:1.99)*1.05,.75*1.05),W.rotation.x=-.35,W.scale.z=.55,Pe.add(W)}let x=new Te(.022*1.05,.018*1.05,.14*1.05,5),g=new Ke(.026*1.05,.11*1.05,5),v=[[-.24,.9,.4],[.24,.9,.4],[-.24,.9,-.4],[.24,.9,-.4]].map(W=>{let N=Ma(Pe,W[0]*1.05,W[1]*1.05,W[2]*1.05),U=new L(new Te(.07*1.05,.06*1.05,.5*1.05,5),l);U.position.y=-.25*1.05,N.add(U);for(let B=-1;B<=1;B++){let H=new L(x,l);H.rotation.x=Math.PI/2,H.position.set(B*.05*1.05,-.5*1.05,.075*1.05),N.add(H);let V=new L(g,s||St>=4?gt:l);V.rotation.x=Math.PI/2,V.position.set(B*.05*1.05,-.515*1.05,.16*1.05),N.add(V)}return N}),y=Ma(Pe,0,1.02*1.05,-.92*1.05),E=r0(.92*1.05,.24*1.05),b=3+(St>=4?2:0)+(St>=5?2:0),T=Math.floor(b/2);for(let W=-T;W<=T;W++){let N=new L(E,W===0&&St>=5?nd:o);N.rotation.y=Math.PI/2+W*.23,N.rotation.z=W*.06,N.position.set(W*.06*1.05,0,-.08*1.05),N.castShadow=!0,y.add(N)}let S=s?1.16:1+r*.07,I=r0(1.7*1.05*S,.36*1.05*S),_=r0(1.12*1.05*S,.3*1.05*S),A=4+(St>=4?1:0)+(St>=5?1:0),G=A-1,re=X(-1),D=X(1),F=Ae(.55*1.05,.13*1.05,.5*1.05,Ai,0,1.36*1.05,.04*1.05,.035*1.05,2);if(Pe.add(F),St>=4){Pe.add(Ae(.5*1.05,.34*1.05,.11*1.05,so,0,1.29*1.05,.78*1.05,.035*1.05,2));for(let W of[-1,1])Pe.add(Ae(.08*1.05,.25*1.05,.48*1.05,St>=5?gt:so,W*.39*1.05,1.27*1.05,.06*1.05,.022*1.05,1))}let k=new Ve;k.position.set(0,.9,.05),Pe.add(k);let K=h0(k,{scale:.8,cloak:!0,hood:!0,armor:s||St>=5?3:2,cloth:cd,capeMat:s||St>=5?cd:yl,level:St});K.legL.visible=!1,K.legR.visible=!1;let j=d0(K.armR,.9,St);if(to={...K,wings:[re,D],legs:v,tail:y,bow:j,body:c,flying:!0},Pe.position.y=1.35,s){let W=new L(new Rt(.378,.029400000000000003,6,32),BM);W.position.set(0,2.36*1.05,.04*1.05),W.rotation.x=Math.PI/2+.22,Pe.add(W);let N=new Gt(new Pt({map:Zt(),color:16770720,transparent:!0,blending:$e,depthWrite:!1,opacity:.12}));N.position.set(0,1.2*1.05,0),N.scale.setScalar(3),Pe.add(N);let U=new Ve;U.position.y=1.95*1.05;let B=[];for(let V=0;V<8;V++){let ee=V/8*Math.PI*2,he=new L(new fn(.09*1.05,0),Ds);he.position.set(Math.cos(ee)*1.08,0,Math.sin(ee)*1.08),U.add(he),B.push(he)}Pe.add(U);let H=[];for(let V of[-1,1]){let ee=new Gt(new Pt({map:Zt(),color:16765040,transparent:!0,blending:$e,depthWrite:!1,opacity:.18}));ee.position.set(V*2.42*1.05,1.26*1.05,0),ee.scale.setScalar(.8),Pe.add(ee),H.push(ee)}to.celestial={halo:W,aura:N,orbiters:U,shards:B,wingGlows:H},Pe.position.y=1.55}}let e=[16763274,16763274,12577023,16770720],t=[16767114,16767114,10477823,16770720];fl.color.setHex(e[jn]),fl.intensity=.95+St*.09,fl.distance=20+St*1.5,Ta.material.color.setHex(t[jn]),rs.material.color.setHex(t[jn]),rs.material.opacity=.12+St*.035,jn!==2&&jn!==3&&(Pe.position.y=0)}Aa(M.heroLevel);i3();var I0=Gh(0),Ci=[],s3=new se({map:aa(),normalMap:Ih(),roughness:.92,color:12433064});I0.forEach((n,e)=>{let t=new Ve;t.position.set(n.x,0,n.z),t.visible=n.unlocked,t.scale.setScalar(n.unlocked?1:.18);let i=new L(new Te(2,2.25,.32,8),s3);i.position.y=.16,i.receiveShadow=!0,i.castShadow=!0,t.add(i);let s=new ft({color:_t[M.buildType].color,transparent:!0,opacity:.85,blending:$e,depthWrite:!1}),r=new L(new Rt(1.62,.07,6,36),s);r.rotation.x=Math.PI/2,r.position.y=.36,t.add(r);let o=new Pt({map:Nh(M.buildType),color:_t[M.buildType].color,transparent:!0,opacity:.95,blending:$e,depthWrite:!1}),a=new Gt(o);a.position.y=1.7,a.scale.setScalar(1.15),t.add(a);let l=new L(new Te(1.25,1.25,1.6,18,1,!0),new ft({color:_t[M.buildType].color,transparent:!0,opacity:.022,blending:$e,depthWrite:!1,side:tt}));l.position.y=1.1,t.add(l),Ne.add(t),Ci.push({x:n.x,z:n.z,group:t,disc:i,ring:r,icon:a,beam:l,taken:!1,index:e,ringIndex:n.ring,unlockLevel:n.unlockLevel,unlocked:n.unlocked,revealT:n.unlocked?1:0})});function _l(n){let e=0;for(let t of Ci){let i=n>=t.unlockLevel;i&&!t.unlocked?(t.unlocked=!0,t.revealT=0,t.group.visible=!0,t.group.scale.setScalar(.18),t.ring.visible=!0,t.icon.visible=!0,t.beam.visible=!0,e++):i||(t.unlocked=!1,t.taken||(t.group.visible=!1,t.revealT=0))}return e}var kM=M.buildType;function r3(){let n=_t[M.buildType];Ci.forEach(e=>{e.unlocked&&(e.ring.material.color.setHex(n.color),e.icon.material.map=Nh(M.buildType),e.icon.material.color.setHex(n.color),e.icon.material.needsUpdate=!0,e.beam.material.color.setHex(n.color))}),kM=M.buildType}function yd(n=4){let e=null,t=1/0;for(let i of Ci){if(i.taken||!i.unlocked)continue;let s=Math.hypot(Ce.position.x-i.x,Ce.position.z-i.z);s<n&&s<t&&(t=s,e=i)}return e?{pad:e,dist:t}:null}function GM(){return Vi}function VM(){return vn*Vi}var It=0,ui=0,Qv=Ce.position.x,eM=Ce.position.z,pr=0;function WM(n,e){It+=n,tM.value+=n,MM.uniforms.uTime.value+=n;let t=jr(M.castleLevel);if(Math.abs(Vi-t)>5e-5){Kh=t;let h=1-Math.exp(-2.2*Math.max(0,n));Vi+=(Kh-Vi)*h,Math.abs(Kh-Vi)<5e-5&&(Vi=Kh),Nn.scale.setScalar(Vi),Tm(iM*Vi)}let i=Ce.position.x-Qv,s=Ce.position.z-eM,r=n>0?Math.hypot(i,s)/n:0;pr=pr*.85+r*.15,Qv=Ce.position.x,eM=Ce.position.z,M.heroMoving=pr>.6;let o=Math.min(1,pr/5),a=to;if(a)if(jn===0){ui+=pr*n*1.9;let h=Math.sin(ui)*.62*o;a.legL&&(a.legL.rotation.x=h),a.legR&&(a.legR.rotation.x=-h),a.armL&&(a.armL.rotation.x=-h*.7),a.armR&&(a.armR.rotation.x=h*.45-.25),Pe.position.y=Math.abs(Math.sin(ui))*.055*o,Pe.rotation.z=Math.sin(ui)*.03*o,Pe.rotation.x=0}else if(jn===1){ui+=pr*n*2.4;let h=Math.sin(ui);a.horseLegs&&a.horseLegs.forEach((f,m)=>{let x=m===0||m===3?0:Math.PI;f.rotation.x=Math.sin(ui+x)*.75*o}),Pe.position.y=Math.abs(Math.sin(ui*2))*.09*o,Pe.rotation.x=h*.05*o,a.tail&&(a.tail.rotation.z=Math.sin(e*3)*.12),a.armL&&(a.armL.rotation.x=-.35),a.armR&&(a.armR.rotation.x=-.3+Math.sin(e*2)*.05),a.legL&&(a.legL.rotation.x=0),a.legR&&(a.legR.rotation.x=0)}else{let h=jn===3?1.62:1.35;if(ui+=n*(5+pr*.45),Pe.position.y=h+Math.sin(e*2.2)*.12,Pe.rotation.x=Math.sin(pr*.1)*.08,Pe.rotation.z=Math.sin(e*1.4)*.03,a.wings.forEach((f,m)=>{let x=m===0?-1:1;f.rotation.z=x*(Math.sin(ui)*.62+.12),f.rotation.x=Math.sin(ui*.5)*.08}),a.legs.forEach((f,m)=>{f.rotation.x=Math.sin(e*1.7+m)*.12}),a.tail&&(a.tail.rotation.z=Math.sin(e*2.4)*.15),a.armL&&(a.armL.rotation.x=-.25),a.armR&&(a.armR.rotation.x=-.2),a.legL&&(a.legL.rotation.x=0),a.legR&&(a.legR.rotation.x=0),a.celestial){let f=a.celestial;f.halo.rotation.z+=n*1.4,f.halo.rotation.y=Math.sin(e*.8)*.2,f.orbiters.rotation.y+=n*.85,f.shards.forEach((m,x)=>{m.rotation.y+=n*2.4,m.rotation.x+=n*1.7,m.position.y=Math.sin(e*2.1+x*.8)*.24}),f.aura.material.opacity=.38+Math.sin(e*3.1)*.12,f.wingGlows.forEach((m,x)=>{m.material.opacity=.42+Math.sin(e*4.2+x*1.7)*.16})}}if(a.cape){let h=Math.sin(e*4.6+ui*.35)*.045;a.cape.rotation.x=.12+o*.22+h,a.cape.rotation.z=Math.sin(e*3.1+ui*.2)*.035*(.4+o)}kM!==M.buildType&&r3();let l=yd(4.2),c=M.gold>=_t[M.buildType].cost;for(let h of Ci){if(!h.unlocked)continue;if(h.revealT<1){h.revealT=Math.min(1,h.revealT+n*2.2);let g=1-Math.pow(1-h.revealT,3);h.group.scale.setScalar(.18+.82*g),h.revealT>=1&&h.group.scale.setScalar(1)}let f=h.revealT>=1?1:1-Math.pow(1-h.revealT,3);if(h.taken){h.ring.visible=!1,h.icon.visible=!1,h.beam.visible=!1;continue}let m=1+Math.sin(It*2.4+h.index)*.09;h.ring.scale.setScalar(m),h.ring.material.opacity=(.55+Math.sin(It*2.4+h.index)*.25)*f,h.icon.position.y=1.7+Math.sin(It*2+h.index*1.3)*.16,h.icon.material.rotation=Math.sin(It*.8+h.index)*.12;let x=l&&l.pad===h;h.beam.material.opacity=(x?c?.16:.09:.05)*f,h.beam.material.color.setHex(x&&!c?16728128:_t[M.buildType].color),h.icon.material.color.setHex(x&&!c?16736352:_t[M.buildType].color),h.icon.material.opacity=(x?1:.75)*f,h.ring.material.color.setHex(x&&!c?16728128:_t[M.buildType].color)}for(let h of ad)h.mesh.rotation.y=Math.sin(It*2.2+h.phase)*.22,h.mesh.rotation.z=Math.sin(It*3.1+h.phase)*.06;for(let h of C0){let f=.85+Math.sin(It*11+h.phase)*.12+Math.sin(It*23+h.phase*2)*.06;h.sprite.scale.setScalar(1.15*f),h.sprite.material.opacity=.82+Math.sin(It*15+h.phase)*.12,h.emit-=n,h.emit<=0&&(h.emit=1.6+Math.random()*3,be.emit("ember",h.base,{color:16752704,posJitter:.15,speed:.7,up:2.2,size:.5,life:1.5}))}if(no.intensity=3+M.castleLevel*.2+Math.sin(It*7.3)*.25,ul>0){ul=Math.max(0,ul-n);let h=ul/.4;Jt.emissive.copy(IM),Jt.emissiveIntensity=h*1.6}else Jt.emissiveIntensity=0;if(dl&&(dl.rotation.y+=n*.8,dl.position.y+=Math.sin(It*1.6)*n*.06),Wt.sunspire){let h=1+Math.sin(It*2.3)*.09;Wt.sunspire.scale.setScalar(4.4*h),Wt.sunspire.material.opacity=.72+Math.sin(It*2.3)*.16}Wt.sunRays&&(Wt.sunRays.rotation.y+=n*.55,Wt.sunRays.rotation.z=Math.sin(It*.7)*.08);for(let h of Wt.tidalCrystals)h.crystal.rotation.y+=n*1.5,h.crystal.position.y=h.baseY+Math.sin(It*1.8+h.phase)*.13,h.glow.position.y=h.crystal.position.y,h.glow.material.opacity=.45+Math.sin(It*3.1+h.phase)*.2,h.glow.scale.setScalar(1.25+Math.sin(It*2.4+h.phase)*.16);for(let h of Wt.stormTips){h.tip.rotation.y+=n*2.1,h.tip.position.y=h.baseY+Math.sin(It*2.2+h.phase)*.16,h.glow.position.y=h.tip.position.y;let f=.5+.5*Math.max(0,Math.sin(It*9+h.phase));h.glow.material.opacity=.4+f*.5,h.glow.scale.setScalar(1.45+f*.7)}for(let h=0;h<Wt.celestialRings.length;h++){let f=Wt.celestialRings[h];f.rotation.z+=n*(.22+h*.13)*(h%2===0?1:-1),f.rotation.x+=n*.06*(h%2===0?1:-1),f.material.opacity=.4+Math.sin(It*1.7+h*1.2)*.2}Wt.celestialOrbiters&&(Wt.celestialOrbiters.rotation.y+=n*.6,Wt.celestialOrbiters.rotation.x=Math.sin(It*.5)*.12);for(let h of xM)h.g.position.y=h.baseY+Math.sin(It*.35+h.phase)*1.4,h.g.rotation.y+=n*h.spin;for(let h of yM)h.angle+=n*h.speed,h.s.position.x=Math.cos(h.angle)*h.dist,h.s.position.z=Math.sin(h.angle)*h.dist;let u=St/6,d=1+Math.sin(It*2.6)*(.05+u*.035);if(Ta.scale.setScalar(d*(1+u*.1)),Ta.material.opacity=.34+Math.sin(It*2.6)*.12+u*.16,rs.visible){rs.rotation.z+=n*(.25+u*.65);let h=1+Math.sin(It*2.1)*(.035+u*.045);rs.scale.setScalar(h),rs.material.opacity=.1+u*.24+Math.sin(It*3.2)*.045}for(let h of jh){h.angle+=n*h.speed,h.g.position.x=Math.cos(h.angle)*h.radius,h.g.position.z=Math.sin(h.angle)*h.radius,h.g.position.y=h.y+Math.sin(It*.6+h.phase)*1.6,h.g.rotation.y=-h.angle+(h.speed>0?Math.PI/2:-Math.PI/2);let f=Math.sin(It*h.flap+h.phase)*.6;h.wingL.rotation.z=f,h.wingR.rotation.z=-f}}var we=null,Ca,Tl,di,ao,Pa=!1,o3=null,Ra=0,XM=!1,YM=.02,a3=24,xr=new Map,c3={bow:.04,arrowHit:.035,cannon:.06,explosion:.08,frost:.05,frostHit:.04,tesla:.05,death:.05,castleHit:.06,splash:.07,coin:.04},l3=.1,u3=8,qM=new Map,Sl=[];function L0(){if(we){we.state==="suspended"&&we.resume();return}we=new(window.AudioContext||window.webkitAudioContext),xr.clear(),Ca=we.createGain(),Ca.gain.value=.9,ao=we.createDynamicsCompressor(),ao.threshold.value=-18,ao.knee.value=24,ao.ratio.value=5,Tl=we.createGain(),Tl.gain.value=1,di=we.createGain(),di.gain.value=.55,Tl.connect(ao),di.connect(ao),ao.connect(Ca),Ca.connect(we.destination)}function JM(){return Pa}function vd(){return Pa=!Pa,Ca&&Ca.gain.setTargetAtTime(Pa?0:.9,we.currentTime,.05),Pa}function jM(n,e,t,i,s,r=0){let o=n.gain;o.setValueAtTime(1e-4,e),o.linearRampToValueAtTime(t,e+i),o.setTargetAtTime(r,e+i,s/3),o.setTargetAtTime(1e-4,e+i+s,s/4)}function pt(n,e,t,i,s,r,o={}){let a=we.createOscillator(),l=we.createGain();if(a.type=n,a.frequency.setValueAtTime(e,t),o.slide&&a.frequency.exponentialRampToValueAtTime(Math.max(20,o.slide),t+i),o.detune&&(a.detune.value=o.detune),jM(l,t,s,o.attack||.005,i,0),o.filter){let c=we.createBiquadFilter();c.type="lowpass",c.frequency.value=o.filter,a.connect(c),c.connect(l)}else a.connect(l);return l.connect(r||Tl),a.start(t),a.stop(t+i+.3),a}function h3(n,e){let t=Math.ceil(n/YM)*YM,i=`${we.sampleRate}:${t.toFixed(3)}:${e}`,s=xr.get(i);if(s)return xr.delete(i),xr.set(i,s),s;if(xr.size>=a3){let a=xr.keys().next().value;a!==void 0&&xr.delete(a)}let r=Math.max(1,Math.ceil(we.sampleRate*(t+.1)));s=we.createBuffer(1,r,we.sampleRate);let o=s.getChannelData(0);if(e==="brown"){let a=0;for(let l=0;l<r;l++)a=(a+.02*(Math.random()*2-1))/1.02,o[l]=a*3.5}else for(let a=0;a<r;a++)o[a]=Math.random()*2-1;return xr.set(i,s),s}function wn(n,e,t,i,s={}){let r=h3(e,s.noiseType||"white"),o=Math.ceil(we.sampleRate*.1),a=Math.max(0,r.length-Math.ceil(we.sampleRate*e)-o),l=Math.floor(Math.random()*(a+1))/we.sampleRate,c=we.createBufferSource();c.buffer=r;let u=we.createBiquadFilter();u.type=s.type||"lowpass",u.frequency.setValueAtTime(s.from||1200,n),s.to&&u.frequency.exponentialRampToValueAtTime(s.to,n+e),u.Q.value=s.q||.8;let d=we.createGain();jM(d,n,t,s.attack||.004,e,0),c.connect(u),u.connect(d),d.connect(i||Tl),c.start(n,l),c.stop(n+e+.1)}var QM={uiClick(){pt("triangle",660,we.currentTime,.06,.15,null,{slide:880})},build(){let n=we.currentTime;for(let e=0;e<3;e++)wn(n+e*.13,.08,.35,null,{from:900,to:300}),pt("sine",180-e*30,n+e*.13,.09,.3,null,{slide:90})},upgrade(){let n=we.currentTime;[440,554,659,880].forEach((e,t)=>pt("sine",e,n+t*.07,.35,.22,null,{filter:3e3}))},coin(){let n=we.currentTime;pt("sine",1244,n,.09,.14),pt("sine",1660,n+.06,.12,.12)},bow(){let n=we.currentTime;wn(n,.14,.16,null,{type:"bandpass",from:2600,to:700,q:1.6}),pt("sine",420,n,.08,.1,null,{slide:220})},arrowHit(){let n=we.currentTime;wn(n,.09,.3,null,{from:1600,to:250}),pt("sine",160,n,.1,.25,null,{slide:70})},cannon(){let n=we.currentTime;wn(n,.5,.8,null,{from:700,to:80}),pt("sine",95,n,.45,.9,null,{slide:38}),pt("triangle",190,n,.3,.3,null,{slide:60})},explosion(){let n=we.currentTime;wn(n,.9,.9,null,{from:2400,to:60}),pt("sine",70,n,.7,1,null,{slide:30}),wn(n+.05,.4,.3,null,{type:"highpass",from:2e3,to:4e3})},frost(){let n=we.currentTime;[1568,2093,2637].forEach((e,t)=>pt("sine",e,n+t*.03,.25,.12,null,{filter:6e3})),wn(n,.3,.1,null,{type:"highpass",from:5e3,to:8e3})},frostHit(){let n=we.currentTime;wn(n,.2,.25,null,{type:"bandpass",from:3e3,to:1500,q:2}),pt("sine",1046,n,.15,.12,null,{slide:1568})},tesla(){let n=we.currentTime;wn(n,.18,.5,null,{type:"highpass",from:1500,to:5e3}),pt("sawtooth",110,n,.16,.28,null,{slide:2200,filter:4e3}),pt("square",2200,n+.02,.1,.06,null,{slide:300})},death(){let n=we.currentTime;wn(n,.3,.4,null,{from:900,to:150}),pt("sawtooth",220,n,.25,.2,null,{slide:60,filter:900}),pt("sine",880,n+.05,.5,.08,null,{slide:1760})},bossDeath(){let n=we.currentTime;QM.explosion(),pt("sawtooth",160,n,1,.4,null,{slide:30,filter:700}),[523,659,784,1046].forEach((e,t)=>pt("sine",e,n+.3+t*.12,.6,.18,null,{filter:5e3}))},castleHit(){let n=we.currentTime;wn(n,.35,.7,null,{from:800,to:100}),pt("sine",60,n,.4,.9,null,{slide:30})},horn(){let n=we.currentTime;[196,261.6].forEach((e,t)=>{pt("sawtooth",e,n+t*.05,1.1,.16,null,{attack:.25,filter:1200}),pt("sawtooth",e*1.005,n+t*.05,1.1,.12,null,{attack:.25,filter:1200,detune:8})})},bossRoar(){let n=we.currentTime,e=pt("sawtooth",82,n,1.1,.55,null,{slide:42,filter:500});e.frequency.setValueAtTime(82,n),e.frequency.linearRampToValueAtTime(110,n+.25),e.frequency.exponentialRampToValueAtTime(45,n+1.1),wn(n,1,.4,null,{from:400,to:90,q:2})},nova(){let n=we.currentTime;wn(n,.8,.9,null,{from:500,to:6e3,type:"bandpass",q:1.2}),pt("sine",130,n,.9,.8,null,{slide:40}),[880,1174,1568,2093].forEach((e,t)=>pt("sine",e,n+.1+t*.05,.5,.14,null,{filter:8e3}))},repair(){let n=we.currentTime;[523,698,880].forEach((e,t)=>pt("sine",e,n+t*.08,.3,.2,null,{filter:4e3}))},victory(){let n=we.currentTime;[523,659,784,1046,1318].forEach((e,t)=>{pt("sine",e,n+t*.14,.9,.25,null,{filter:6e3}),pt("triangle",e/2,n+t*.14,.9,.12,null,{filter:3e3})})},defeat(){let n=we.currentTime;[392,349,311,261].forEach((e,t)=>{pt("sawtooth",e,n+t*.3,.8,.15,null,{filter:800,attack:.1})})},warn(){let n=we.currentTime;pt("square",620,n,.12,.1,null,{slide:500}),pt("square",620,n+.18,.12,.1,null,{slide:500})},splash(){let n=we.currentTime;wn(n,.35,.3,null,{type:"bandpass",from:900,to:220,q:.7}),wn(n+.04,.22,.14,null,{type:"highpass",from:2600,to:1200}),pt("sine",180,n,.18,.08,null,{slide:90})}};function d3(n,e){let t=c3[n];if(!t)return!0;for(;Sl.length&&e-Sl[0]>l3;)Sl.shift();if(Sl.length>=u3)return!1;let i=qM.get(n);return i!==void 0&&e-i<t?!1:(qM.set(n,e),Sl.push(e),!0)}function Oe(n,e){if(!we||Pa)return;let t=QM[n];if(t&&d3(n,we.currentTime))try{t(e)}catch{}}function f3(){let n=we.sampleRate*3,e=we.createBuffer(1,n,we.sampleRate),t=e.getChannelData(0),i=0;for(let u=0;u<n;u++)i=i*.98+(Math.random()*2-1)*.02,t[u]=i*6;let s=we.createBufferSource();s.buffer=e,s.loop=!0;let r=we.createBiquadFilter();r.type="lowpass",r.frequency.value=420,r.Q.value=.4;let o=we.createGain();o.gain.value=.16;let a=we.createOscillator();a.frequency.value=.08;let l=we.createGain();l.gain.value=.06,a.connect(l),l.connect(o.gain),s.connect(r),r.connect(o),o.connect(di),s.start(),a.start();function c(){if(!we||we.state==="closed")return;let u=we.currentTime,d=2200+Math.random()*1400;for(let h=0;h<2+Math.random()*3;h++)pt("sine",d+Math.random()*600,u+h*.09,.06,.05,di,{slide:d*1.3});setTimeout(c,6e3+Math.random()*14e3)}setTimeout(c,4e3)}var $M=[[220,261.63,329.63],[174.61,220,261.63],[130.81,196,261.63],[196,246.94,293.66]],KM=0;function ZM(){if(!we||we.state==="closed")return;let n=we.currentTime+.05,e=$M[KM%$M.length];if(KM++,e.forEach((t,i)=>{pt("sawtooth",t,n,3.6,.05,di,{attack:1.2,filter:750,detune:i*5}),pt("sawtooth",t*2,n,3.6,.02,di,{attack:1.4,filter:600,detune:-6})}),pt("sine",e[0]/2,n,3.6,.1,di,{attack:.6,filter:300}),Math.random()<.85){let t=[440,523.25,587.33,659.25,783.99,880],i=t[Math.random()*t.length|0];pt("sine",i,n+1.2+Math.random()*1.4,1.4,.06,di,{filter:6e3})}if(Ra>=1){let t=Ra>=2?8:4;for(let i=0;i<t;i++){let s=n+i*(3.8/t);i%2===0&&pt("sine",72,s,.28,Ra>=2?.5:.3,di,{slide:34}),Ra>=2&&i%2===1&&wn(s,.12,.16,di,{from:300,to:100}),Ra>=2&&Math.random()<.4&&wn(s,.18,.1,di,{from:6e3,to:3e3,type:"highpass"})}}}function Md(n){Ra=n}function eE(){XM||!we||(XM=!0,f3(),ZM(),o3=setInterval(ZM,3800))}function Ed(n=.3){we&&di.gain.setTargetAtTime(.55*n,we.currentTime,.4)}var D0=-2.6,p3=new se({map:Gi(),color:12160094,roughness:.86}),La=new se({color:4860950,roughness:.9}),N0=new se({map:Gi(),color:10121286,roughness:.92}),tE=new se({color:9080728,metalness:.78,roughness:.36}),Ia=new se({color:3423043,metalness:.72,roughness:.46}),wl=new se({color:12093253,metalness:.8,roughness:.34}),m3=new se({color:12820851,roughness:.96}),g3=new se({map:ua("boat_sail","#d8c7a2","#8a352a"),roughness:.92,side:tt}),x3=new se({map:ua("boat_sail_boss","#2a1016","#b03030"),roughness:.9,side:tt}),dE=new se({color:16765040,emissive:16752688,emissiveIntensity:2.2}),y3=new se({color:6961700,roughness:.8,metalness:.1}),_d=new un(1,1,5,4);{let n=_d.getAttribute("position"),e=_d.getAttribute("uv");for(let t=0;t<n.count;t++){let i=e.getX(t),s=e.getY(t),r=.82+.18*Math.sin(s*Math.PI*.85);n.setXYZ(t,n.getX(t)*r,n.getY(t),Math.sin(i*Math.PI)*Math.sin(s*Math.PI)*.18)}_d.computeVertexNormals()}var v3=new Te(.055,.075,1,6),M3=(()=>{let n=new Gn;n.moveTo(0,-2.05),n.quadraticCurveTo(.95,-1.35,.88,.1),n.quadraticCurveTo(.82,1.25,0,2.05),n.quadraticCurveTo(-.82,1.25,-.88,.1),n.quadraticCurveTo(-.95,-1.35,0,-2.05);let e=new vi(n,{depth:.72,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12,bevelSegments:2,steps:1});return e.rotateX(-Math.PI/2),e.translate(0,-.36,0),e.computeVertexNormals(),e})(),E3=new Te(.025,.025,1.5,5),_3=new En(.17,.42,.065,1,.025),S3=new En(1.15,.08,2.5,2,.035),T3=new Ut(.2,.022,2.3),nE=new En(.12,.13,2.78,2,.03),iE=new En(1.9,.065,.065,1,.022),w3=new En(.16,.9,.16,2,.03),sE=new Te(.1,.12,.12,6),b3=new Te(.012,.012,1,4),rE=(()=>{let n=new Gn;n.moveTo(0,.25),n.lineTo(.18,.16),n.lineTo(.16,-.12),n.quadraticCurveTo(.1,-.23,0,-.28),n.quadraticCurveTo(-.1,-.23,-.16,-.12),n.lineTo(-.18,.16),n.closePath();let e=new vi(n,{depth:.07,bevelEnabled:!0,bevelSegments:2,bevelSize:.015,bevelThickness:.015,steps:1});return e.translate(0,0,-.035),e.computeVertexNormals(),e})(),A3=new qt(.055,7,5),R3=new fn(.22,0),C3=new qt(.11,8,8),P3=new Te(.135,.11,.07,8),I3=new Te(.012,.012,.25,4),oE=new Ke(.09,.45,5),L3=new En(.62,.24,.85,2,.055),aE=Zt(),D3={normal:new Pt({map:aE,color:16756832,transparent:!0,blending:$e,depthWrite:!1,opacity:.85}),boss:new Pt({map:aE,color:16732208,transparent:!0,blending:$e,depthWrite:!1,opacity:.85})};function N3(n,e,t){let i=new L(v3,La);i.scale.y=3.2*e,i.position.set(0,1.75*e,.1*e),i.castShadow=!0,n.add(i);let s=new L(sE,wl);s.scale.setScalar(e),s.position.set(0,.38*e,.1*e),n.add(s);let r=new L(iE,La);r.scale.setScalar(e),r.position.set(0,2.75*e,.13*e),r.castShadow=!0,n.add(r);for(let l of[-1,1]){let c=new L(sE,wl);c.scale.set(.65*e,.75*e,.65*e),c.rotation.z=Math.PI/2,c.position.set(l*.96*e,2.75*e,.13*e),n.add(c)}let o=new L(_d,t?x3:g3);o.name="boat-sail",o.userData.noStaticBatch=!0,o.scale.set(1.65*e,1.75*e,e),o.position.set(0,1.75*e,.15*e),o.castShadow=!0,n.add(o);for(let l of[-1,1]){let c=new L(b3,m3);c.scale.set(e,1.72*e,e),c.position.set(l*.79*e,1.76*e,.16*e),n.add(c)}let a=new L(iE,La);if(a.scale.set(.78*e,e,e),a.position.set(0,.9*e,.16*e),n.add(a),t){let l=new L(R3,dE);l.name="boat-crest",l.scale.setScalar(e),l.position.set(0,2.35*e,.2*e),n.add(l)}return o}function H3(n,e){let t=[];for(let i of[-1,1])for(let s=0;s<3;s++){let r=U3(n,i*.78*e,.2*e,(-.8+s*.7)*e);r.name="boat-oar",r.userData.noStaticBatch=!0;let o=new L(E3,La);o.scale.setScalar(e),o.position.set(i*.52*e,-.12*e,0),o.rotation.z=i*-1.05,r.add(o);let a=new L(_3,N0);a.scale.setScalar(e),a.position.set(i*1.08*e,-.45*e,0),a.rotation.z=i*-1.05,r.add(a),t.push(r)}return t}function U3(n,e,t,i){let s=new Ve;return s.position.set(e,t,i),n.add(s),s}function cE(n,e,t,i,s,r){let o=new L(C3,dE);o.name="boat-lantern",o.scale.setScalar(e),o.position.set(t,.86*e,i),n.add(o);for(let l of[-.145,.145]){let c=new L(P3,Ia);c.scale.setScalar(e),c.position.set(t,(.86+l)*e,i),n.add(c)}for(let l of[-1,1]){let c=new L(I3,Ia);c.scale.setScalar(e),c.position.set(t+l*.1*e,.86*e,i),n.add(c)}let a=new Gt(D3[s?"boss":"normal"]);return a.name="boat-lantern-glow-"+r,a.scale.setScalar(.78*e),a.position.copy(o.position),n.add(a),a}function O3(n){n.updateWorldMatrix(!0,!0);let e=n.matrixWorld.clone().invert(),t=new Map;n.traverse(i=>{if(!i.isMesh||i.isSkinnedMesh||!i.visible||Array.isArray(i.material)||!i.material||i.material.transparent)return;for(let r=i;r&&r!==n;r=r.parent)if(r.userData.noStaticBatch)return;let s=i.material.uuid+":"+[i.castShadow,i.receiveShadow,i.renderOrder].join(":");t.has(s)||t.set(s,{material:i.material,meshes:[]}),t.get(s).meshes.push(i)});for(let i of t.values()){if(i.meshes.length<2)continue;let s=i.meshes.map(l=>{let c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();c.applyMatrix4(e.clone().multiply(l.matrixWorld)),c.getAttribute("normal")||c.computeVertexNormals(),c.getAttribute("uv")||c.setAttribute("uv",new Le(new Float32Array(c.getAttribute("position").count*2),2));for(let u of Object.keys(c.attributes))["position","normal","uv"].includes(u)||c.deleteAttribute(u);return c.clearGroups(),c}),r=ss(s,!1);if(s.forEach(l=>l.dispose()),!r)continue;r.computeBoundingBox(),r.computeBoundingSphere();let o=i.meshes[0],a=new L(r,i.material);a.name="boat-static-batch",a.castShadow=o.castShadow,a.receiveShadow=o.receiveShadow,a.renderOrder=o.renderOrder,n.add(a);for(let l of i.meshes)l.removeFromParent()}}function B3(n){let e=new Ve,t=n?1.7:1,i=new L(M3,p3);i.scale.set(t,t*.9,t),i.castShadow=!0,i.receiveShadow=!0,e.add(i);let s=new L(S3,N0);s.scale.setScalar(t),s.position.y=.27*t,s.receiveShadow=!0,e.add(s);for(let l=-2;l<=2;l++){let c=new L(T3,l%2?N0:La);c.scale.set(.92*t,t,t),c.position.set(l*.205*t,.318*t,0),e.add(c)}for(let l of[-1,1]){let c=new L(nE,Ia);c.scale.setScalar(t),c.position.set(l*.77*t,.38*t,0),c.castShadow=!0,e.add(c);let u=new L(nE,wl);u.scale.set(.55*t,.38*t,.96*t),u.position.set(l*.842*t,.34*t,0),e.add(u)}for(let l of[-1.65,1.65]){let c=new L(w3,La);c.scale.setScalar(t),c.position.set(0,.64*t,l*t),c.rotation.x=l>0?-.35:.35,c.castShadow=!0,e.add(c);let u=new L(oE,n?Ia:wl);u.scale.set(.55*t,.7*t,.55*t),u.position.set(0,1.13*t,(l+(l>0?.1:-.1))*t),u.rotation.x=l>0?-.35:.35,e.add(u)}for(let l of[-1,1])for(let c=0;c<3;c++){let u=(-.75+c*.75)*t,d=new L(rE,n?Ia:wl);d.scale.setScalar(1.1*t),d.rotation.y=l*Math.PI/2,d.position.set(l*.895*t,.31*t,u),e.add(d);let h=new L(rE,y3);h.scale.setScalar(t),h.rotation.y=l*Math.PI/2,h.position.set(l*.925*t,.31*t,u),h.castShadow=!0,e.add(h);let f=new L(A3,tE);f.scale.set(.55*t,t,t),f.position.set(l*.97*t,.34*t,u),e.add(f)}let r=N3(e,t,n),o=H3(e,t),a=[cE(e,t,-.46*t,-1.42*t,n,0),cE(e,t,.46*t,-1.42*t,n,1)];if(n){let l=new L(L3,Ia);l.scale.setScalar(t),l.position.set(0,.13*t,2.02*t),l.rotation.x=-.18,l.castShadow=!0,e.add(l);for(let c=0;c<3;c++){let u=new L(oE,tE);u.scale.setScalar(t),u.position.set((c-1)*.35*t,.58*t,2.02*t),u.rotation.x=-.5,u.castShadow=!0,e.add(u)}}return O3(e),{group:e,sail:r,oars:o,lanternGlows:a}}var lE=new Map;function F3(n){let e=lE.get(n);return e||(e=B3(n),lE.set(n,e)),e}var Ns=[],z3=new w,uE=new w,hE=[14218495,12577023,16777215],k3={normal:{color:hE,count:16,speed:5,up:2.8,size:1.15,life:.9},boss:{color:hE,count:28,speed:7,up:2.8,size:1.15,life:.9}},G3=[12577023,15268863],V3={color:G3,count:2,size:1,life:1,floorY:-2.65};function Da(){return Ns.length}function Hs(){let n=0;for(let e of Ns)e.landed||(n+=e.types.length);return n}function fE(){for(let n of Ns)Ne.remove(n.group);Ns.length=0}function pE({angle:n,types:e,boss:t=!1,onLand:i}){if(Ns.length>=av)return null;let s=M.castleLevel,r=Vh(s)+Math.random()*7,o=ga(s)-Math.random()*1.8,a=new w(Math.cos(n)*r,D0+.1,Math.sin(n)*r),l=new w(Math.cos(n)*o,-.06,Math.sin(n)*o),u=F3(t).group.clone(!0);u.userData.sail=u.getObjectByName("boat-sail"),u.userData.oars=[],u.userData.lanternGlows=[],u.traverse(f=>{f.name==="boat-oar"?u.userData.oars.push(f):f.name.startsWith("boat-lantern-glow-")&&u.userData.lanternGlows.push({sprite:f,baseScale:f.scale.x,phase:Math.random()*Math.PI*2})}),u.position.copy(a),u.rotation.y=Math.atan2(l.x-a.x,l.z-a.z),u.scale.setScalar(.01),Ne.add(u);let d=a.distanceTo(l),h={group:u,start:a,land:l,angle:n,types:e,boss:t,onLand:i,t:0,duration:Math.max(1.2,d/(uv*(t?.85:1))),state:"inbound",stateT:0,landed:!1,phase:Math.random()*Math.PI*2,wakeT:0,spawnT:0,baseRotY:u.rotation.y};return Ns.push(h),h}function mE(n,e=performance.now()*.001){for(let t=Ns.length-1;t>=0;t--){let i=Ns[t],s=i.group;if(i.spawnT<.45){i.spawnT+=n;let a=Math.min(1,i.spawnT/.45);s.scale.setScalar(Math.max(.01,1-Math.pow(1-a,3)))}else s.scale.x<1&&s.scale.setScalar(1);if(i.stateT+=n,i.state==="inbound"){i.t=Math.min(1,i.t+n/i.duration);let a=i.t*i.t*(3-2*i.t);if(s.position.lerpVectors(i.start,i.land,a),s.position.y+=Math.sin(e*1.7+i.phase)*.11*(1-a*.55),s.rotation.z=Math.sin(e*1.35+i.phase)*.045*(1-a*.6),s.rotation.x=Math.sin(e*1.05+i.phase*1.4)*.025,i.t>=1){i.state="landed",i.stateT=0,i.landed=!0,i.group.position.copy(i.land),i.group.rotation.z=0,i.group.rotation.x=0,be.emit("splash",z3.copy(i.land).setY(-.15),k3[i.boss?"boss":"normal"]),Oe("splash");try{i.onLand?.(i.land.clone().setY(0))}catch(l){console.error(l)}}}else if(i.state==="landed")s.position.y=-.06+Math.sin(e*1.9+i.phase)*.05,s.rotation.z=Math.sin(e*1.5+i.phase)*.03,i.stateT>1.25&&(i.state="depart",i.stateT=0,i.t=0,i.baseRotY=s.rotation.y,i.group.rotation.y=i.baseRotY+Math.PI);else{i.t=Math.min(1,i.t+n/4.2);let a=i.t*i.t*(3-2*i.t);if(s.position.lerpVectors(i.land,i.start,a),s.position.y=Ts.lerp(-.06,D0+.1,a)+Math.sin(e*1.8+i.phase)*.1,s.rotation.z=Math.sin(e*1.3+i.phase)*.04,i.t>=1){Ne.remove(s),Ns.splice(t,1);continue}}let r=s.userData.sail;r&&(r.rotation.y=Math.sin(e*2.2+i.phase)*.035);let o=Math.sin(e*2.6+i.phase)*.12*(i.state==="landed"?.25:1);for(let a of s.userData.oars||[])a.rotation.x=o;for(let a of s.userData.lanternGlows||[]){let l=.92+Math.sin(e*8.5+a.phase)*.06+Math.sin(e*17+a.phase)*.035;a.sprite.scale.setScalar(a.baseScale*l)}i.wakeT-=n,i.wakeT<=0&&i.state!=="landed"&&(i.wakeT=i.boss?.09:.13,uE.set(s.position.x-Math.sin(s.rotation.y)*1.4,D0+.08,s.position.z-Math.cos(s.rotation.y)*1.4),be.emit("wake",uE,V3))}}var gE={normal:{key:"normal",name:"Normal",description:"The intended siege experience.",startGold:65,enemyHP:1,enemyDamage:.9,reward:1.05,income:1,enemyCount:1},veteran:{key:"veteran",name:"Veteran",description:"Tougher raiders, leaner rewards.",startGold:65,enemyHP:1.6,enemyDamage:1.35,reward:.85,income:.85,enemyCount:1.25},nightmare:{key:"nightmare",name:"Nightmare",description:"Brutal enemies for seasoned commanders.",startGold:65,enemyHP:2.1,enemyDamage:1.8,reward:.75,income:.75,enemyCount:1.6}};function qn(n){return gE[n]||gE.normal}function xE(n){return qn(n).enemyHP}function yE(n){return qn(n).enemyDamage}function vE(n){return qn(n).reward}function ME(n){return qn(n).income}function EE(n){let e=Math.max(16,Math.floor(n||16));return Math.min(120,Math.round(55+(e-15)*3.2))}function _E(n){let e=Math.floor(n||16);return e<=15?1:Math.pow(1.115,e-15)}var Qn={unlockWave:21,maxLevel:10,baseCost:900,costGrowth:1.65,hpPerLevel:120,heroDamagePerLevel:.08,towerDamagePerLevel:.04};function Sd(n){return Math.round(Qn.baseCost*Math.pow(Qn.costGrowth,Math.max(0,n)))}function co(n,e=0){let t=Math.min(4,Math.max(0,Math.floor(n||0))+1);return Math.min(7,t+Math.max(0,Math.floor(e||0)))}function Td(n){let e=Math.max(0,Math.floor(n||0));return{maxTowerLevel:e>0?Math.min(7,4+e):4,bonusHP:e*Qn.hpPerLevel,heroDamage:1+e*Qn.heroDamagePerLevel,towerDamage:1+e*Qn.towerDamagePerLevel}}function wd(n,e){let t=Math.max(1,Math.floor(e||1));if(t<=4)return n;let i=t-4;return{...n,damage:n.damage*Math.pow(1.38,i),range:n.range+i*.55,fireRate:n.fireRate*Math.pow(.88,i),aoe:(n.aoe||0)+i*.25,slow:n.slow?Math.max(.25,n.slow-i*.025):0,slowDur:(n.slowDur||0)+i*.25,chain:(n.chain||0)+i}}var os=0,ho=0,Cd=!0,ei=!1,Al=new w;function G0(n){Cd=!!n,(!Cd||ei)&&(os=0,ho=0,Al.set(0,0,0))}function Pd(n){ei=!!n,ei&&(os=0,ho=0,Al.set(0,0,0),yr=0,Rl=1,rP())}function Hn(n,e=.4){!Cd||ei||(os=Math.min(1,os+n),ho=Math.max(ho,e))}function V0(n){if(!Cd||ei)return os=0,ho=0,Al.set(0,0,0);ho>0?(ho-=n,os=Math.max(0,os-n/.5)):os=0;let e=os*os,t=performance.now()*.001;return Al.set(Math.sin(t*92.3)*e*.6,Math.sin(t*76.7)*e*.6,Math.sin(t*113.1)*e*.6),Al}var yr=0,Rl=1;function Cl(n=.09,e=.15){if(ei){yr=0,Rl=1;return}yr=n,Rl=e}function RE(){return!ei&&yr>0?Rl:1}var Oa=[],O0=[],W3=64,X3=new pn(.86,1,48);function Y3(){if(O0.length)return O0.pop();let n=new ft({color:16777215,transparent:!0,opacity:.9,side:tt,blending:$e,depthWrite:!1,forceSinglePass:!0});return{mesh:new L(X3,n),material:n,t:0,maxRadius:6,duration:.5}}function CE(n){Ne.remove(n.mesh),O0.push(n)}function Xt(n,e=16777215,t=6,i=.5,s=!0){Oa.length>=W3&&CE(Oa.shift());let r=Y3();r.material.color.set(e),r.material.opacity=ei?.35:.9,r.mesh.position.copy(n),r.mesh.rotation.set(0,0,0),s&&(r.mesh.rotation.x=-Math.PI/2,r.mesh.position.y=Math.max(n.y,.15)),r.mesh.scale.setScalar(.1),r.t=0,r.maxRadius=t,r.duration=i,Ne.add(r.mesh),Oa.push(r)}var Ba=[],B0=[],q3=25,$3=new ft({map:pm(),transparent:!0,opacity:.75,depthWrite:!1,color:0}),K3=new un(1,1);function Z3(){if(B0.length)return B0.pop();let n=$3.clone();return{mesh:new L(K3,n),material:n,t:0}}function PE(n){Ne.remove(n.mesh),B0.push(n)}function Fa(n,e=3){Ba.length>=q3&&PE(Ba.shift());let t=Z3();t.mesh.rotation.set(-Math.PI/2,0,Math.random()*Math.PI*2),t.mesh.position.set(n.x,.06+Math.random()*.02,n.z),t.mesh.scale.setScalar(e),t.material.opacity=ei?.5:.75,t.t=0,Ne.add(t.mesh),Ba.push(t)}var Ad=[],F0=[],Us=5,z0=Us*2,IE=Us*6,Na=new w,H0=new w,bl=new w,bd=new w,SE=new w;function LE(n){let e=n*z0,t=e>65535?Uint32Array:Uint16Array,i=new t(n*IE),s=0;for(let o=0;o<n;o++){let a=o*z0;for(let l=0;l<Us;l++){let c=(l+1)%Us,u=a+l,d=a+c,h=a+Us+l,f=a+Us+c;i[s++]=u,i[s++]=d,i[s++]=h,i[s++]=d,i[s++]=f,i[s++]=h}}let r=new Et;return r.setAttribute("position",new yt(new Float32Array(e*3),3).setUsage(sr)),r.setIndex(new yt(i,1)),r.setDrawRange(0,0),r}function J3(){let e=LE(32),t=new ft({color:13134847,transparent:!0,opacity:1,side:$n,blending:$e,depthWrite:!1}),i=new L(e,t);return i.frustumCulled=!1,{mesh:i,geometry:e,material:t,capacity:32,segmentCount:0,mainPoints:Array.from({length:8},()=>new w),branchPoints:[],t:0,duration:.16}}function j3(){return F0.length?F0.pop():J3()}function Q3(n){Ne.remove(n.mesh),F0.push(n)}function eP(n,e){if(e<=n.capacity)return;let t=n.capacity;for(;t<e;)t*=2;let i=n.geometry;n.geometry=LE(t),n.mesh.geometry=n.geometry,n.capacity=t,i.dispose()}function tP(n,e,t,i){Na.subVectors(t,e);let s=Na.lengthSq();if(s<1e-12)return;Na.multiplyScalar(1/Math.sqrt(s)),Math.abs(Na.y)<.9?H0.set(0,1,0):H0.set(1,0,0),bl.crossVectors(Na,H0).normalize(),bd.crossVectors(Na,bl).normalize();let r=n.geometry.attributes.position.array,o=n.segmentCount*z0;for(let a=0;a<Us;a++){let l=a/Us*Math.PI*2,c=Math.cos(l)*i,u=Math.sin(l)*i,d=bl.x*c+bd.x*u,h=bl.y*c+bd.y*u,f=bl.z*c+bd.z*u,m=(o+a)*3,x=(o+Us+a)*3;r[m]=e.x+d,r[m+1]=e.y+h,r[m+2]=e.z+f,r[x]=t.x+d,r[x+1]=t.y+h,r[x+2]=t.z+f}n.segmentCount++}function TE(n,e,t,i,s,r,o){if(o.length<i+1)for(;o.length<i+1;)o.push(new w);o[0].copy(e),o[i].copy(t);for(let a=1;a<i;a++){let l=a/i,c=o[a].lerpVectors(e,t,l);c.x+=(Math.random()-.5)*s*2,c.y+=(Math.random()-.5)*s,c.z+=(Math.random()-.5)*s*2}for(let a=0;a<i;a++)tP(n,o[a],o[a+1],r);return o}function Id(n,e,t=13134847,i=.16,s=.14,r=2){let o=Number.isFinite(r)?Math.max(0,Math.floor(r)):0,a=j3();eP(a,7+o*3),a.segmentCount=0,a.t=0,a.duration=i,a.material.color.set(t),a.material.opacity=1;let l=TE(a,n,e,7,.7,s,a.mainPoints);for(let c=0;c<o;c++){let u=1+Math.floor(Math.random()*(l.length-2)),d=l[u+1];SE.set(d.x+(Math.random()-.5)*4,d.y+(Math.random()-.5)*3,d.z+(Math.random()-.5)*4);let h=a.branchPoints[c];h||(h=[],a.branchPoints[c]=h),TE(a,d,SE,3,.5,s*.5,h)}a.geometry.attributes.position.needsUpdate=!0,a.geometry.setDrawRange(0,a.segmentCount*IE),Ne.add(a.mesh),Ad.push(a)}var wE=64,Rd=[],k0=[],U0=0,nP=(()=>{let n=document.getElementById("dmgLayer");return n||(n=document.createElement("div"),n.id="dmgLayer",(document.getElementById("ironholdApp")||document.body).appendChild(n)),n})(),DE=window.innerWidth,NE=window.innerHeight;window.addEventListener("resize",()=>{DE=window.innerWidth,NE=window.innerHeight},{passive:!0});function iP(){if(k0.length)return k0.pop();if(Rd.length<wE){let e=document.createElement("div");e.className="dmg-num",e.style.display="none",nP.appendChild(e);let t={el:e,active:!1,displayed:!1,pos:new w,t:0,dur:.9,rise:2.2,size:1,text:"",className:"dmg-num",color:"",lastX:NaN,lastY:NaN,lastScale:NaN,lastOpacity:NaN};return Rd.push(t),t}let n=Rd[U0];return U0=(U0+1)%wE,n}function bE(n){n.active&&(n.active=!1,n.displayed&&(n.el.style.display="none",n.displayed=!1),k0.push(n))}function Wi(n,e,t={}){let i=iP();i.active=!0,i.t=0,i.dur=t.dur||.9,i.rise=t.rise||2.2,i.size=t.size||1,i.pos.copy(n),i.pos.x+=(Math.random()-.5)*.8,i.pos.z+=(Math.random()-.5)*.8;let s=String(e),r="dmg-num"+(t.cls?" "+t.cls:""),o=t.color||"#ffffff";i.text!==s&&(i.el.textContent=s,i.text=s),i.className!==r&&(i.el.className=r,i.className=r),i.color!==o&&(i.el.style.color=o,i.color=o),i.displayed||(i.el.style.display="block",i.displayed=!0),i.lastOpacity!==1&&(i.el.style.opacity="1",i.lastOpacity=1),i.lastX=NaN,i.lastY=NaN,i.lastScale=NaN}var lo=new w;function sP(n){let e=DE,t=NE;for(let i of Rd){if(!i.active)continue;if(i.t+=n,i.t>=i.dur){bE(i);continue}if(lo.copy(i.pos),lo.y+=i.t*i.rise,lo.project(Vt),lo.z>1||lo.z<-1){bE(i);continue}let s=Math.round((lo.x*.5+.5)*e*10)/10,r=Math.round((-lo.y*.5+.5)*t*10)/10,o=1-i.t/i.dur,a=i.t<.12?.5+i.t/.12*.7:1.2-Math.min(1,(i.t-.12)*.3),l=Math.round(a*i.size*1e3)/1e3,c=Math.round(o*o*1e3)/1e3;(i.lastX!==s||i.lastY!==r||i.lastScale!==l)&&(i.el.style.transform=`translate(-50%,-50%) translate(${s}px,${r}px) scale(${l})`,i.lastX=s,i.lastY=r,i.lastScale=l),i.lastOpacity!==c&&(i.el.style.opacity=String(c),i.lastOpacity=c)}}var Pi=null,uo=0,AE="",Ha="",Ua="";function rP(){uo&&(cancelAnimationFrame(uo),uo=0),Pi&&(Ha!=="none"&&(Pi.style.transition="none",Ha="none"),Ua!=="0"&&(Pi.style.opacity="0",Ua="0"))}function Xi(n="#fff",e=.25,t=.3){if(ei)return;Pi||(Pi=document.createElement("div"),Pi.id="screenFlash",(document.getElementById("ironholdApp")||document.body).appendChild(Pi));let i=`radial-gradient(ellipse at center, transparent 30%, ${n} 130%)`;AE!==i&&(Pi.style.background=i,AE=i),uo&&cancelAnimationFrame(uo),Ha!=="none"&&(Pi.style.transition="none",Ha="none");let s=String(e);Ua!==s&&(Pi.style.opacity=s,Ua=s),uo=requestAnimationFrame(()=>{uo=0;let r=`opacity ${t}s ease-out`;Ha!==r&&(Pi.style.transition=r,Ha=r),Ua!=="0"&&(Pi.style.opacity="0",Ua="0")})}function HE(n=.6){ei||Fh(n)}function UE(n){yr>0&&(yr=Math.max(0,yr-n),yr<=0&&(Rl=1));for(let e=Oa.length-1;e>=0;e--){let t=Oa[e];t.t+=n;let i=t.t/t.duration;if(i>=1)CE(t),Oa.splice(e,1);else{let s=1-Math.pow(1-i,3);t.mesh.scale.setScalar(.1+s*t.maxRadius),t.material.opacity=(1-i)*(ei?.35:.9)}}for(let e=Ad.length-1;e>=0;e--){let t=Ad[e];t.t+=n;let i=t.t/t.duration;i>=1?(Q3(t),Ad.splice(e,1)):t.material.opacity=(1-i)*(ei?.65:Math.random()>.3?1:.35)}for(let e=Ba.length-1;e>=0;e--){let t=Ba[e];t.t+=n,t.t>12?(PE(t),Ba.splice(e,1)):t.t>8&&(t.material.opacity=(ei?.5:.75)*(1-(t.t-8)/4))}sP(n)}var OE=[{id:"warchest",name:"War Chest",icon:"coin",max:3,desc:"Immediately gain 75 gold."},{id:"masonry",name:"Master Mason",icon:"shield",max:3,desc:"+45 maximum Bastion HP, repaired by the same amount."},{id:"tariff",name:"Royal Tariff",icon:"coin",max:3,desc:"+2 gold every income tick."},{id:"sharpened",name:"Sharpened Steel",icon:"sword",max:5,desc:"+12% damage from all towers."},{id:"overclock",name:"Overclock",icon:"bolt",max:5,desc:"+10% tower fire rate."},{id:"deadeye",name:"Deadeye",icon:"arrow",max:4,desc:"+7% critical chance for towers (double damage)."},{id:"solar",name:"Solar Attunement",icon:"sun",max:3,desc:"Sun Nova recharges 12% faster and deals +15% damage."},{id:"heroism",name:"Heroism",icon:"crown",max:4,desc:"+15% hero damage and +5% movement speed."},{id:"ballistics",name:"Ballistics Manual",icon:"bomb",max:3,desc:"+15% Cannon Bastion range."},{id:"cryomancy",name:"Cryomancy",icon:"snow",max:3,desc:"+20% Frost Spire slow duration."},{id:"conductor",name:"Superconductor",icon:"bolt",max:3,desc:"+1 Storm Obelisk chain."},{id:"bounty",name:"Blood Bounty",icon:"coin",max:3,desc:"+15% gold from defeated enemies."},{id:"fieldMedic",name:"Field Medic",icon:"shield",max:3,desc:"Repairs cost 20% less and restore 10 extra HP."},{id:"novaRadius",name:"Expanding Light",icon:"sun",max:3,desc:"+15% Sun Nova radius."},{id:"rallyMaster",name:"Battle Standard",icon:"crown",max:3,desc:"War Rally recharges 15% faster."},{id:"builder",name:"Master Builder",icon:"arrow",max:3,desc:"New towers cost 10% less."},{id:"bossHunter",name:"Giant Slayer",icon:"sword",max:3,desc:"+20% tower damage against bosses."}],BE=new Map(OE.map(n=>[n.id,n]));function Pl(n){return 70+Math.max(0,n-1)*45}function FE(n){n.commanderLevel++,n.commanderXP-=Pl(n.commanderLevel-1),n.pendingBoons?.length||(n.pendingBoons=oP(n,3)),n.draftOpen=!0}function oP(n,e=3,t=Math.random){let i=OE.filter(r=>(n.boons?.[r.id]||0)<r.max),s=[];for(;s.length<e&&i.length;){let r=Math.min(i.length-1,Math.floor(t()*i.length));s.push(i.splice(r,1)[0].id)}return s}function Ld(n,e){if(!Number.isFinite(e)||e<=0)return 0;n.commanderXP+=Math.round(e);let t=0;for(;n.commanderXP>=Pl(n.commanderLevel);)FE(n),t++;return t}function zE(n,e){if(!n.draftOpen||!n.pendingBoons?.includes(e)||!BE.get(e))return!1;switch(n.boons=n.boons||{},n.boons[e]=(n.boons[e]||0)+1,e){case"warchest":n.gold+=75,n.totalGoldEarned+=75;break;case"masonry":n.maxBaseHP+=45,n.baseHP=Math.min(n.maxBaseHP,n.baseHP+45);break;case"tariff":n.incomeRate+=2;break;default:break}return n.pendingBoons=[],n.draftOpen=!1,n.commanderXP>=Pl(n.commanderLevel)&&FE(n),!0}function bn(n,e){return n.boons?.[e]||0}function kE(n){return 1+bn(n,"sharpened")*.12}function GE(n){return 1+bn(n,"overclock")*.1}function VE(n){return Math.min(.45,bn(n,"deadeye")*.07)}function WE(n){return 1+bn(n,"heroism")*.15}function XE(n){return 1+bn(n,"heroism")*.05}function YE(n){return Math.max(.55,1-bn(n,"solar")*.12)}function qE(n){return 1+bn(n,"solar")*.15}function $E(n){return 1+bn(n,"ballistics")*.15}function KE(n){return 1+bn(n,"cryomancy")*.2}function ZE(n){return bn(n,"conductor")}function JE(n){return 1+bn(n,"bounty")*.15}function Dd(n){return Math.max(.4,1-bn(n,"fieldMedic")*.2)}function Nd(n){return bn(n,"fieldMedic")*10}function jE(n){return 1+bn(n,"novaRadius")*.15}function QE(n){return Math.max(.55,1-bn(n,"rallyMaster")*.15)}function za(n){return Math.max(.7,1-bn(n,"builder")*.1)}function e1(n){return 1+bn(n,"bossHunter")*.2}function t1(n){return BE.get(n)||null}function aP(n,e="normal"){let t=Math.max(1,Math.floor(n||1)),i=t>mn?EE(t):Math.round(10+t*2.5+(t%5===0?3:0));return Math.max(1,Math.round(i*qn(e).enemyCount))}function ka(n,e=n.wave){let t=n.totalWaves===1/0?1/0:Number.isFinite(n.totalWaves)?n.totalWaves:mn,i=Math.max(1,Math.min(t,Math.floor(e||1)));return n.wave=i,n.timeInWave=0,n.spawnTimer=0,n.waveBudget=aP(i,n.difficulty),n.spawnRemaining=n.waveBudget,n.waveActive=!0,n.intermission=!1,n.prepTimer=0,n.waveKills=0,n.waveLeaks=0,n.waveStartedAt=n.elapsed,n.miniBossSpawned=!1,n.roundBossSpawned=!1,n.warlordSpawned=!1,n.waveBudget}function n1(n,e,t,i){return n.waveActive&&n.spawnRemaining<=0&&e<=0&&t<=0&&i<=0}function Hd(n){return Math.max(0,Math.ceil(n)*2)}function Ud(n){if(!n.intermission||n.wave>=(n.totalWaves??mn))return 0;let e=Hd(n.prepTimer);return n.gold+=e,n.totalGoldEarned+=e,n.score+=e*10,ka(n,n.wave+1),e}function cP(n,e=!1){let t=Math.max(1,Math.floor(n||1));return 12+t*4+(e?18+t*2:0)}function i1(n){if(!n.waveActive)return null;let e=n.waveLeaks===0,t=cP(n.wave,e),i=Math.max(0,Math.min(30,Math.round((35-n.timeInWave)*1.5))),s=t+i;return n.gold+=s,n.totalGoldEarned+=s,n.score+=s*12+(e?250:0),n.waveActive=!1,n.intermission=n.wave<(n.totalWaves??mn),n.prepTimer=n.intermission?Sh:0,n.spawnRemaining=0,{wave:n.wave,gold:s,noLeak:e,speedBonus:i}}function s1(n,e){return n.intermission?(n.prepTimer=Math.max(0,n.prepTimer-e),n.prepTimer<=0&&n.wave<(n.totalWaves??mn)?(ka(n,n.wave+1),!0):!1):!1}function r1(n){return n.waveBudget?Math.max(0,Math.min(1,1-n.spawnRemaining/n.waveBudget)):0}var o1="ironhold_profile_v1";function Od(){return{xp:0,runs:0,bestScore:0,bestWave:0,wins:0,totalKills:0}}function Bd(){if(typeof window>"u")return Od();try{let n=localStorage.getItem(o1);if(!n)return Od();let e=JSON.parse(n),t=Od();for(let s of Object.keys(t))Number.isFinite(e[s])&&(t[s]=Math.max(0,e[s]));let i=Number(localStorage.getItem("ironhold_best")||0);return Number.isFinite(i)&&(t.bestScore=Math.max(t.bestScore,i)),t}catch{return Od()}}function lP(n){if(typeof window>"u")return n;try{localStorage.setItem(o1,JSON.stringify(n))}catch{}return n}function W0(n){return 1+Math.floor(Math.sqrt(Math.max(0,n)/300))}function a1(n){let e=W0(n);return e>=12?"Sunforged":e>=9?"Warlord":e>=6?"Iron Marshal":e>=3?"Castellan":"Pathfinder"}function c1(n){let e=W0(n),t=(e-1)*(e-1)*300,i=e*e*300;return{rank:e,current:t,next:i,pct:Math.max(0,Math.min(1,(n-t)/(i-t)))}}function l1(n){let e=W0(n);return{gold:Math.min(25,Math.floor((e-1)/2)*5),heroDamage:1+Math.min(.2,(e-1)*.02),abilityCooldown:1-Math.min(.15,(e-1)*.01)}}function u1(n,e){return n.runs++,n.xp+=e.kills*2+Math.max(0,e.wave-(e.victory?0:1))*90+(e.victory?500:0),n.bestScore=Math.max(n.bestScore,e.score),n.bestWave=Math.max(n.bestWave,e.wave),n.totalKills+=e.kills,e.victory&&n.wins++,lP(n),n}var Yi=n=>document.getElementById(n),Ye={},$={},h1="",d1="",Fd=0,X0="",Ga={coin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v10M9.2 9.5h4.2a2 2 0 0 1 0 4H9.2h4.9a2 2 0 0 1 0 4H9.2"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3l7 2.6v5.6c0 4.6-3 7.9-7 9.8-4-1.9-7-5.2-7-9.8V5.6L12 3z"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 19L19 5M19 5h-6M19 5v6M5 19l3-1M5 19l1-3"/></svg>',bomb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="14" r="6"/><path d="M16 9l2-2M18 6c1-1 2-1 3 0M17 7c0-1.1.4-2 1-2.6"/></svg>',snow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9 4.8L12 7l3-2.2M9 19.2L12 17l3 2.2"/></svg>',bolt:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4.5 13.5H10L8.5 22 18 9.5h-5.8L13 2z"/></svg>',sword:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M14.5 3.5L21 3l-.5 6.5L9 21l-6-6L14.5 3.5zM5.5 13.5l5 5M3 21l3.5-3.5"/></svg>',crown:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 18l1.5-9 4.5 4L12 6l3 7 4.5-4L21 18H3z"/></svg>',sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></svg>',skull:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3a7 7 0 0 0-7 7c0 2.4 1.2 4.3 3 5.4V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.6c1.8-1.1 3-3 3-5.4a7 7 0 0 0-7-7z"/><circle cx="9.5" cy="11" r="1.4" fill="currentColor"/><circle cx="14.5" cy="11" r="1.4" fill="currentColor"/></svg>',sound:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>',muted:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9l5 6M21 9l-5 6"/></svg>'};function uP(){try{return Number(localStorage.getItem("ironhold_best")||0)}catch{return 0}}function hP(n){try{localStorage.setItem("ironhold_best",String(n))}catch{}}function We(n,e){let t=String(e);n&&n.textContent!==t&&(n.textContent=t)}function zd(n,e){let t=Math.max(0,Math.min(100,e))+"%";n&&n.style.width!==t&&(n.style.width=t)}var fo=[],Y0=!1;function f1(){if(Y0||fo.length===0)return;Y0=!0;let n=fo.shift();We($.annMain,n.main),We($.annSub,n.sub||""),$.announcement.className="announcement show "+(n.style||""),setTimeout(()=>{$.announcement.className="announcement "+(n.style||""),setTimeout(()=>{Y0=!1,f1()},280)},n.hold||2300)}function Dt(n,e,t="",i=2300){let s=Yi("accessibilityStatus");if(s&&(s.textContent=e?`${n}. ${e}`:n),fo.some(o=>o.main===n))return;let r={main:n,sub:e,style:t,hold:i};t==="boss"?fo.unshift(r):fo.push(r),fo.length>8&&fo.splice(-1,1),f1()}function dP(){let n=Yi("towerCards");n.innerHTML="",Xr.forEach((e,t)=>{let i=_t[e],s=document.createElement("button");s.className="tower-card",s.dataset.kind=e,s.innerHTML=`<span class="tc-key">${t+1}</span><span class="tc-icon" style="color:#${i.color.toString(16).padStart(6,"0")}">${Ga[i.icon]}</span><span class="tc-body"><span class="tc-name">${i.name}</span><span class="tc-desc">${i.desc}</span></span><span class="tc-cost">${Ga.coin}<b>${i.cost}</b></span>`,s.addEventListener("click",()=>Ye.selectTower?.(e)),n.appendChild(s)})}function vr(){if($.cached)return;["announcement","annMain","annSub","towerCards","goldDisplay","incomeDisplay","waveDisplay","waveFill","timeDisplay","hpText","hpBar","castleLevelDisplay","enemyDisplay","bossBar","bossName","bossFill","comboDisplay","comboNum","abilityBox","abilityCd","buildPrompt","tutorialHint","btnUpgradeCastle","costCastle","subCastle","castleBtnTitle","btnUpgradeHero","costHero","subHero","heroBtnTitle","btnRepair","costRepair","btnMute","hud","startScreen","pauseScreen","gameOverScreen","victoryScreen","bestScore","profileRank","btnNextWave","btnSpeed","commanderLevel","commanderXpText","commanderXpFill","towerInspector","selectedTowerName","selectedTowerLevel","selectedTowerStats","btnTowerUpgrade","btnTowerTarget","btnTowerSell","draftScreen","draftOptions","draftTitle","helpScreen","settingsScreen","qualitySelect","shakeToggle","motionToggle","touchControls","joystick","joystickKnob","touchAbility","rallyAbility","rallyAbilityCd","rallyAbilityCdText","touchBuild","touchUpgrade","touchNova","touchNovaCd","touchNovaCdText","touchRally","touchRallyCd","touchRallyCdText","touchPause","touchSpeed","touchCallWave","touchSettings","touchHint","specializationChoices","difficultySelect","difficultyDescription","btnEndless","accessibilityStatus","highContrastToggle","textSizeToggle","colorblindToggle","endlessPanel","ascensionLevelDisplay","ascensionDescription","btnAscend"].forEach(e=>{$[e]=Yi(e)}),$.cards=[...document.querySelectorAll(".tower-card")],$.cdText=$.abilityBox.querySelector(".ability-cd-text"),$.waveTotal=document.querySelector(".wave-total"),$.cached=!0}function ct(n,e,t){let i=Yi(n);i&&i.addEventListener(e,t)}function p1(n){Object.assign(Ye,n),vr(),dP(),$.cards=[...document.querySelectorAll(".tower-card")],ct("btnStart","click",()=>Ye.start?.()),ct("btnResume","click",()=>Ye.resume?.()),ct("btnRestart","click",()=>Ye.restart?.()),ct("btnRestartGo","click",()=>Ye.restart?.()),ct("btnRestartWin","click",()=>Ye.restart?.()),ct("btnUpgradeCastle","click",()=>Ye.upgradeCastle?.()),ct("btnUpgradeHero","click",()=>Ye.upgradeHero?.()),ct("btnRepair","click",()=>Ye.repair?.()),ct("btnMute","click",()=>Ye.mute?.()),ct("btnSpeed","click",()=>Ye.toggleSpeed?.()),ct("btnNextWave","click",()=>Ye.callWave?.()),ct("btnPause","click",()=>Ye.resume?.()),ct("abilityBox","click",()=>Ye.ability?.()),ct("touchAbility","click",()=>Ye.ability?.()),ct("buildPrompt","click",()=>Ye.interact?.()),ct("btnTowerUpgrade","click",()=>Ye.upgradeSelectedTower?.()),ct("btnTowerTarget","click",()=>Ye.cycleTowerTarget?.()),ct("btnTowerSell","click",()=>Ye.sellSelectedTower?.()),ct("rallyAbility","click",()=>Ye.rally?.()),ct("touchNova","click",()=>Ye.ability?.()),ct("touchRally","click",()=>Ye.rally?.()),ct("touchBuild","click",()=>Ye.interact?.()),ct("touchUpgrade","click",()=>M.selectedTower?Ye.upgradeSelectedTower?.():Ye.upgradeNearestTower?.()),ct("touchPause","click",()=>Ye.resume?.()),ct("touchSpeed","click",()=>Ye.toggleSpeed?.()),ct("touchCallWave","click",()=>Ye.callWave?.()),ct("touchSettings","click",()=>Ye.openSettings?.()),ct("btnEndless","click",()=>Ye.startEndless?.()),ct("btnAscend","click",()=>Ye.ascend?.()),ct("difficultySelect","change",s=>Ye.setDifficulty?.(s.target.value)),ct("highContrastToggle","change",s=>Ye.setHighContrast?.(s.target.checked)),ct("textSizeToggle","change",s=>Ye.setTextSize?.(s.target.checked)),ct("colorblindToggle","change",s=>Ye.setColorblind?.(s.target.checked)),$.specializationChoices.addEventListener("click",s=>{let r=s.target.closest("[data-specialization]");r&&M.selectedTower&&Ye.chooseSpecialization?.(M.selectedTower,r.dataset.specialization)});for(let s of["btnHelp","btnHelpPause"])ct(s,"click",()=>Ye.openHelp?.());for(let s of["btnSettings","btnSettingsStart","btnSettingsPause"])ct(s,"click",()=>Ye.openSettings?.());ct("btnCloseHelp","click",()=>Ye.closeHelp?.()),ct("btnCloseSettings","click",()=>Ye.closeSettings?.()),ct("qualitySelect","change",s=>Ye.setQuality?.(s.target.value)),ct("shakeToggle","change",s=>Ye.setCameraShake?.(s.target.checked)),ct("motionToggle","change",s=>Ye.setReducedMotion?.(s.target.checked));let e=Bd(),t=c1(e.xp);We($.bestScore,e.bestScore>0?"BEST SCORE  "+e.bestScore.toLocaleString():""),We($.profileRank,`${a1(e.xp).toUpperCase()} \xB7 RANK ${t.rank} \xB7 ${Math.floor(t.pct*100)}% TO NEXT`);let i=Ye.getQuality?.()||"auto";$.qualitySelect.value=i,fP(),xt(0)}function fP(){let n=null,e=i=>{let s=$.joystick.getBoundingClientRect(),r=s.width*.32,o=i.clientX-(s.left+s.width/2),a=i.clientY-(s.top+s.height/2),l=Math.hypot(o,a);l>r&&(o*=r/l,a*=r/l),$.joystickKnob.style.transform=`translate(${o}px, ${a}px)`,M.touchMove={x:o/r,z:a/r}};$.joystick.addEventListener("pointerdown",i=>{n=i.pointerId,$.joystick.setPointerCapture(n),e(i)}),$.joystick.addEventListener("pointermove",i=>{i.pointerId===n&&e(i)});let t=i=>{i.pointerId===n&&(n=null,M.touchMove={x:0,z:0},$.joystickKnob.style.transform="")};$.joystick.addEventListener("pointerup",t),$.joystick.addEventListener("pointercancel",t)}var q0=[{t:4,text:"CLICK OR TAP TO MOVE \u2014 YOUR HERO FIGHTS AUTOMATICALLY"},{t:12,text:"SELECT A TOWER, THEN CLICK A GLOWING PAD OR PRESS E"},{t:26,text:"CLICK A TOWER TO UPGRADE, RETARGET, OR SELL IT"},{t:40,text:"SPACE: SUN NOVA \xB7 G: WAR RALLY"},{t:58,text:"CLEAR WAVES EARLY \xB7 PRESS ENTER TO CALL THE NEXT WAVE"}];function pP(){let n=!!M.draftOpen;if($.draftScreen.classList.toggle("show",n),$.draftScreen.inert=!n,!n){X0="";return}let e=M.pendingBoons.join(",");e!==X0&&(X0=e,$.draftOptions.innerHTML="",M.pendingBoons.forEach(t=>{let i=t1(t);if(!i)return;let s=document.createElement("button");s.className="draft-option",s.setAttribute("aria-label",`${i.name}. ${i.desc}`),s.innerHTML=`<span class="draft-icon">${Ga[i.icon]||Ga.crown}</span><b>${i.name}</b><span>${i.desc}</span><small>CHOOSE BLESSING</small>`,s.addEventListener("click",()=>Ye.chooseBoon?.(t)),$.draftOptions.appendChild(s)}),$.draftOptions.querySelector("button")?.focus())}function mP(){let n=M.selectedTower;if($.towerInspector.classList.toggle("hidden",!n),!n)return;let e=_t[n.type],t=wd(e.levels[Math.min(4,n.level)-1],n.level),i=co(M.castleLevel,M.ascensionLevel),s=n.level>=i,r=!1,o=s?0:n.level<=3?e.upgradeCosts[n.level-1]:Math.round(e.upgradeCosts[2]*Math.pow(1.65,n.level-3));We($.selectedTowerName,e.name.toUpperCase()),We($.selectedTowerLevel,"LV "+n.level);let a=n.specialization?Vc[n.type]?.[n.specialization]:null;We($.selectedTowerStats,`${Math.round(t.damage)} DMG  \xB7  ${t.range} RANGE  \xB7  ${(1/t.fireRate).toFixed(1)}/s${a?" \xB7 "+a.name.toUpperCase():""}`);let l=n.level>=3&&!n.specialization?Object.entries(Vc[n.type]||{}):[];$.specializationChoices.hidden=l.length===0;let c=`${n.type}:${n.level}:${l.map(([u])=>u).join(",")}`;c!==d1&&(d1=c,[...$.specializationChoices.querySelectorAll("button")].forEach((u,d)=>{let h=l[d];u.hidden=!h,u.disabled=!h,h&&(u.dataset.specialization=h[0],u.textContent=h[1].name.toUpperCase(),u.title=h[1].desc,u.setAttribute("aria-label",`${h[1].name}. ${h[1].desc}`))})),We($.btnTowerUpgrade,s?`MAX LEVEL ${i}`:r?"CASTLE REQUIRED":`UPGRADE \xB7 ${o}g`),$.btnTowerUpgrade.disabled=s||r||M.gold<o||!M.running,We($.btnTowerTarget,"TARGET: "+(n.targetMode||"first").toUpperCase()),We($.btnTowerSell,"SELL \xB7 "+Math.floor((n.invested||e.cost)*.65)+"g")}function xt(n=0){vr();let e=M;n>0&&Fd>0&&(Fd-=n,Fd<=0&&$.tutorialHint.classList.remove("show")),We($.goldDisplay,Math.floor(e.gold)),We($.incomeDisplay,e.incomeRate>0?`+${e.incomeRate}/${kc}s`:"\u2014"),We($.waveDisplay,e.wave),We($.waveTotal,e.endless?"/ \u221E":"/ "+e.totalWaves);let t=e.intermission?e.prepTimer/Sh:r1(e);zd($.waveFill,t*100),$.waveFill.parentElement.setAttribute("role","progressbar"),$.waveFill.parentElement.setAttribute("aria-label","Wave progress"),$.waveFill.parentElement.setAttribute("aria-valuenow",String(Math.round(t*100))),We($.timeDisplay,e.intermission?"NEXT "+Math.ceil(e.prepTimer)+"s":!e.endless&&e.wave>=e.totalWaves?"BOSS":Math.max(0,e.spawnRemaining)+" LEFT");let i=Math.max(0,e.baseHP/e.maxBaseHP*100);We($.hpText,Math.ceil(e.baseHP)+" / "+e.maxBaseHP),zd($.hpBar,i),$.hpBar.className="hp-fill"+(i<30?" critical":i<60?" low":""),We($.castleLevelDisplay,"LV "+e.castleLevel),We($.enemyDisplay,e.enemies.length),$.hpBar.parentElement.setAttribute("role","progressbar"),$.hpBar.parentElement.setAttribute("aria-valuenow",String(Math.ceil(e.baseHP))),$.hpBar.parentElement.setAttribute("aria-valuemax",String(e.maxBaseHP));let s=e.activeBoss;$.bossBar.classList.toggle("show",!!s&&!s.dying),s&&!s.dying&&(We($.bossName,s.bossName||"BOSS"),zd($.bossFill,s.hp/s.maxHp*100)),$.comboDisplay.classList.toggle("show",e.combo>=2&&e.comboTimer>0),e.combo>=2&&(We($.comboNum,"\xD7"+e.combo),$.comboDisplay.style.opacity=String(Math.min(1,e.comboTimer/(Ah*.6))));let r=Math.max(0,e.abilityCooldown),o=Math.max(0,Math.min(1,r/As.cooldown));$.abilityBox.classList.toggle("ready",r<=0),$.abilityBox.disabled=r>0||!e.running||e.paused||e.draftOpen,$.abilityCd.style.setProperty("--cd",o*100+"%"),We($.cdText,o>0?Math.ceil(r)+"s":""),$.touchNova.disabled=$.abilityBox.disabled,$.touchNova.classList.toggle("ready",r<=0&&e.running&&!e.paused&&!e.draftOpen),$.touchNovaCd.style.setProperty("--cd",o*100+"%"),We($.touchNovaCdText,o>0?Math.ceil(r)+"s":"");let a=Math.max(0,e.rallyCooldown),l=Math.max(0,Math.min(1,a/ra.cooldown));$.rallyAbility.classList.toggle("ready",a<=0),$.rallyAbility.disabled=a>0||!e.running||e.paused||e.draftOpen,$.rallyAbilityCd.style.setProperty("--cd",l*100+"%"),We($.rallyAbilityCdText,a>0?Math.ceil(a)+"s":e.rallyTimer>0?Math.ceil(e.rallyTimer)+"s":""),$.touchRally.disabled=$.rallyAbility.disabled,$.touchRally.classList.toggle("ready",a<=0&&e.running&&!e.paused&&!e.draftOpen),$.touchRallyCd.style.setProperty("--cd",l*100+"%"),We($.touchRallyCdText,a>0?Math.ceil(a)+"s":e.rallyTimer>0?Math.ceil(e.rallyTimer)+"s":""),We($.btnSpeed,e.gameSpeed+"\xD7"),$.btnSpeed.setAttribute("aria-pressed",String(e.gameSpeed===2)),We($.touchSpeed.querySelector(".touch-speed-value"),e.gameSpeed+"\xD7"),$.touchSpeed.setAttribute("aria-pressed",String(e.gameSpeed===2)),$.touchPause.setAttribute("aria-pressed",String(e.paused)),$.cards.forEach(I=>{let _=_t[I.dataset.kind];I.classList.toggle("selected",e.buildType===I.dataset.kind),I.classList.toggle("poor",e.gold<Math.max(1,Math.round(_.cost*za(e)))),I.setAttribute("aria-pressed",String(e.buildType===I.dataset.kind))});let c=Pl(e.commanderLevel);We($.commanderLevel,"COMMANDER "+e.commanderLevel),We($.commanderXpText,`${e.commanderXP} / ${c} XP`),zd($.commanderXpFill,e.commanderXP/c*100),$.commanderXpFill.parentElement.setAttribute("role","progressbar"),$.commanderXpFill.parentElement.setAttribute("aria-label","Commander experience"),$.commanderXpFill.parentElement.setAttribute("aria-valuenow",String(e.commanderXP)),$.commanderXpFill.parentElement.setAttribute("aria-valuemax",String(c));let u=e.endless&&e.wave>=Qn.unlockWave;if($.endlessPanel.classList.toggle("hidden",!u),u){e.ascensionUnlockedShown||(e.ascensionUnlockedShown=!0,Dt("ENDLESS ASCENSION UNLOCKED","SPEND GOLD TO RAISE TOWER LEVELS AND HERO POWER","hero"));let I=e.ascensionLevel>=Qn.maxLevel,_=Sd(e.ascensionLevel),A=co(e.castleLevel,e.ascensionLevel);We($.ascensionLevelDisplay,"RANK "+e.ascensionLevel),We($.ascensionDescription,I?`Maximum ascension reached \xB7 Tower cap ${A}`:`Tower cap ${A} \u2192 ${co(e.castleLevel,e.ascensionLevel+1)} \xB7 +120 HP \xB7 +8% hero damage`),We($.btnAscend,I?"MAX ASCENSION":`ASCEND \xB7 ${_}g`),$.btnAscend.disabled=I||e.gold<_||!e.running||e.paused||e.draftOpen}let d=e.intermission&&e.wave<e.totalWaves&&e.running;$.btnNextWave.hidden=!d,$.touchCallWave.disabled=!d,$.touchCallWave.setAttribute("aria-label",d?`Call wave ${e.wave+1} early for ${Hd(e.prepTimer)} gold`:"Next wave is not ready"),d&&We($.btnNextWave,`CALL WAVE ${e.wave+1}  \xB7  +${Hd(e.prepTimer)}g`);let h=e.castleLevel;if(h>=bs.length)We($.castleBtnTitle,"Castle Maxed"),We($.costCastle,"MAX"),We($.subCastle,`${Is(h).name} \u2014 fully fortified`),$.btnUpgradeCastle.disabled=!0;else{let I=bs[h],_=h===Qp?" \xB7 +8 outer pads":"";We($.castleBtnTitle,"Upgrade Castle"),We($.costCastle,I.cost),We($.subCastle,`+${I.hp} HP \xB7 +${I.income}/${kc}s \xB7 ${I.feature}${_}`),$.btnUpgradeCastle.disabled=e.gold<I.cost||!e.running}let f=e.heroLevel;if(f>=qr.length)We($.heroBtnTitle,"Hero Maxed"),We($.costHero,"MAX"),We($.subHero,`${Ti(f)} \u2014 level 6 \xB7 legend of the realm`),$.btnUpgradeHero.disabled=!0;else{let I=qr[f];We($.heroBtnTitle,"Upgrade Hero"),We($.costHero,I.cost);let _=Ti(f)===Ti(f+1)?" \xB7 evolve stats":` \xB7 ${Ti(f+1)}`;We($.subHero,`Level ${f} \u2192 ${f+1}${_}`),$.btnUpgradeHero.disabled=e.gold<I.cost||!e.running}let m=Math.max(0,e.maxBaseHP-e.baseHP),x=m<=0?0:Math.max(3,Math.ceil(Th*Math.min(1,m/sa)*Dd(e))),g=Math.min(sa+Nd(e),m);We($.costRepair,x||"\u2014"),$.btnRepair.title=`Restore ${g} HP`,$.btnRepair.disabled=e.gold<x||m<=0||!e.running;let p="none",v="",y=!1;if(e.running&&e.nearPad){let I=_t[e.nearPad.type];y=!e.nearPad.affordable,p=`pad:${e.nearPad.type}:${y}`,v=y?`NOT ENOUGH GOLD \u2014 ${I.name.toUpperCase()} COSTS ${e.nearPad.cost}g`:`<kbd>E</kbd> BUILD ${I.name.toUpperCase()} <span class="bp-cost">${e.nearPad.cost}g</span>`}else if(e.running&&e.nearTower){let I=e.nearTower;y=!!I.locked||!I.affordable,p=`tower:${I.name}:${I.level}:${I.maxed}:${I.locked}:${I.affordable}`,I.maxed?v=`${I.name.toUpperCase()} \u2014 MAX LEVEL`:I.locked?v=`CASTLE LV ${I.lockedLevel-1} REQUIRED FOR TOWER LV ${I.level+1}`:v=I.affordable?`<kbd>Q</kbd> UPGRADE ${I.name.toUpperCase()} \u2192 LV ${I.level+1} <span class="bp-cost">${I.cost}g</span>`:`NEED ${I.cost}g TO UPGRADE ${I.name.toUpperCase()}`}p!==h1&&(h1=p,$.buildPrompt.innerHTML=v),$.buildPrompt.classList.toggle("active",p!=="none"),$.buildPrompt.classList.toggle("poor",y),$.buildPrompt.disabled=p==="none"||y,$.touchBuild.disabled=!e.running||!e.nearPad||!e.nearPad.affordable||e.paused||e.draftOpen;let E=co(e.castleLevel,e.ascensionLevel),b=e.selectedTower&&e.selectedTower.level<E?e.selectedTower.level<=3?_t[e.selectedTower.type].upgradeCosts[e.selectedTower.level-1]:Math.round(_t[e.selectedTower.type].upgradeCosts[2]*Math.pow(1.65,e.selectedTower.level-3)):0,T=e.selectedTower&&e.selectedTower.level<E&&e.gold>=b,S=e.nearTower&&!e.nearTower.maxed&&!e.nearTower.locked&&e.nearTower.affordable;$.touchUpgrade.disabled=!e.running||!(T||S)||e.paused||e.draftOpen,We($.touchHint,e.nearPad?"Tap BUILD to raise the selected tower.":e.selectedTower?"Tower selected. Upgrade, retarget, or sell it.":"Tap the ground to move. Tap a tower or glowing pad to command."),e.running&&e.hintStage<q0.length&&e.elapsed>=q0[e.hintStage].t&&(We($.tutorialHint,q0[e.hintStage].text),e.hintStage++,$.tutorialHint.classList.add("show"),Fd=5),mP(),pP()}function m1(){vr(),$.startScreen.classList.add("show"),$.hud.classList.add("hidden"),$.hud.inert=!0,xt(0)}function g1(){vr(),$.startScreen.classList.remove("show"),$.hud.classList.remove("hidden"),$.hud.inert=!1}function x1(){vr(),$.victoryScreen.classList.remove("show"),$.victoryScreen.inert=!0,$.hud.classList.remove("hidden"),$.hud.inert=!1,$.draftScreen.classList.remove("show"),$.draftScreen.inert=!0}function y1(n){vr(),$.pauseScreen.classList.toggle("show",n),$.pauseScreen.inert=!n,n&&Yi("btnResume").focus()}function $0(n){$.helpScreen.classList.toggle("show",n),$.helpScreen.inert=!n,n&&Yi("btnCloseHelp").focus()}function K0(n){$.settingsScreen.classList.toggle("show",n),$.settingsScreen.inert=!n,n&&Yi("btnCloseSettings").focus()}function gP(n){return n.map(e=>`<div class="stat-row"><span>${e[0]}</span><b>${e[1]}</b></div>`).join("")}function v1(n){let e=Math.max(uP(),M.score);hP(e);let t=[["Waves Survived",Math.max(0,M.wave-(n?0:1))+(M.endless?" \xB7 ENDLESS":" / "+M.totalWaves)],["Difficulty",qn(M.difficulty).name],["Bandits Slain",M.kills],["Best Combo","\xD7"+M.bestCombo],["Commander Level",M.commanderLevel],["Gold Earned",M.totalGoldEarned],["Score",M.score.toLocaleString()]];Yi(n?"winStats":"goStats").innerHTML=gP(t)}function M1(){vr(),v1(!1),$.gameOverScreen.classList.add("show"),$.gameOverScreen.inert=!1,$.hud.classList.add("hidden"),$.hud.inert=!0,Yi("btnRestartGo").focus()}function E1(){vr(),v1(!0),$.victoryScreen.classList.add("show"),$.victoryScreen.inert=!1,$.hud.classList.add("hidden"),$.hud.inert=!0,Yi("btnRestartWin").focus()}function Il(n){let e=Yi("btnMute");e&&(e.innerHTML=n?Ga.muted:Ga.sound,e.setAttribute("aria-pressed",String(n)),e.setAttribute("aria-label",n?"Unmute audio":"Mute audio"),e.title=n?"Unmute audio (M)":"Mute audio (M)")}var H1=new se({color:13211498,roughness:.75}),fi=new se({color:3817288,metalness:.78,roughness:.42}),as=new se({color:11055808,metalness:.88,roughness:.27}),Xa=new se({color:2369843,metalness:.7,roughness:.5}),Er=new se({color:12831701,metalness:.9,roughness:.22}),Ii=new se({color:13146168,metalness:.86,roughness:.34,emissive:3810816,emissiveIntensity:.24}),qi=new se({color:4863264,roughness:.9}),xP=new se({color:7491635,roughness:.82}),_1=new se({color:5914664,roughness:.9}),yP=new se({color:1710622,metalness:.4,roughness:.3}),vP=new ft({color:16724e3}),MP=new se({color:1119259,metalness:.45,roughness:.3,emissive:2363400,emissiveIntensity:.35}),EP=new se({color:15263976,roughness:.7}),_P=new ft({color:16744480}),SP=new se({color:768,emissive:16719888,emissiveIntensity:1.6,metalness:.5,roughness:.3}),TP=new se({color:3612740,emissive:10217579,emissiveIntensity:.85,metalness:.35,roughness:.3}),wP=new Pt({map:null,color:16756800,transparent:!0,blending:$e,depthWrite:!1}),po={champion:new se({color:2771594,roughness:.85,side:tt}),acolyte:new se({color:4860520,roughness:.85,side:tt}),warlord:new se({color:6950936,roughness:.85,side:tt})},Z0={};function U1(n,e,t){return Z0[n]||(Z0[n]=new se({map:ua(n,e,t),roughness:.78,metalness:.05})),Z0[n]}var O1={grunt:["bandit_brown","#8a4a32","#4a2114"],runner:["bandit_green","#3f7a3f","#1d3a1d"],bomber:["bandit_orange","#b06020","#5a2808"],brute:["bandit_purple","#6a4080","#301a40"],champion:["bandit_blue","#3a5a8a","#16263f"],acolyte:["bandit_violet","#65447e","#2c173c"],giant:["bandit_rust","#8a4a20","#401e08"],warlord:["bandit_black","#3a1a20","#160608"]};function cs(n,e,t,i){let s=new Ve;return s.position.set(e,t,i),n.add(s),s}function B1(n,e,t,i,s=0,r=0,o=0){let a=new L(new Ut(n,e,t),i);return a.position.set(s,r,o),a.castShadow=!0,a}function Va(n,e,t,i,s,r=0,o=0,a=0){let l=new L(new Te(n,e,t,i),s);return l.position.set(r,o,a),l.castShadow=!0,l}function Mr(n,e,t=0,i=0,s=0,r=8,o=8){let a=new L(new qt(n,r,o),e);return a.position.set(t,i,s),a.castShadow=!0,a}var S1=new Map;function Yd(n,e,t,i=.035,s=2){let r=Math.min(i,n*.45,e*.45,t*.45),o=[n,e,t,r,s].map(l=>l.toFixed(4)).join(":"),a=S1.get(o);return a||(a=new En(n,e,t,s,r),S1.set(o,a)),a}function Yt(n,e,t,i,s=0,r=0,o=0,a=.035,l=2){let c=new L(Yd(n,e,t,a,l),i);return c.position.set(s,r,o),c.castShadow=!0,c}var T1=new Map;function kd(n,e,t=.28,i=.055){let s=[n,e,t,i].join(":"),r=T1.get(s);if(r)return r;r=new un(n,e,4,6),r.translate(0,-e/2,0);let o=r.getAttribute("position");for(let a=0;a<o.count;a++){let l=o.getX(a),c=o.getY(a),u=Math.max(0,-c/e),d=Math.max(0,1-Math.abs(l)/(n*.2));o.setXYZ(a,l*(1-t*u),c+i*d*u,.035*Math.sin(u*Math.PI)+.025*u*u)}return r.computeVertexNormals(),T1.set(s,r),r}var w1=(()=>{let n=new Gn;n.moveTo(0,.36),n.lineTo(.23,.23),n.lineTo(.2,-.16),n.quadraticCurveTo(.13,-.31,0,-.39),n.quadraticCurveTo(-.13,-.31,-.2,-.16),n.lineTo(-.23,.23),n.closePath();let e=new vi(n,{depth:.07,bevelEnabled:!0,bevelSegments:2,bevelSize:.018,bevelThickness:.018,steps:1});return e.translate(0,0,-.035),e.computeVertexNormals(),e})(),b1=new Map;function A1(n,e){let t="sword:"+n+":"+e,i=b1.get(t);if(i)return i;let s=new Gn;return s.moveTo(-n/2,0),s.lineTo(n/2,0),s.lineTo(n*.42,e*.82),s.lineTo(0,e),s.lineTo(-n*.42,e*.82),s.closePath(),i=new vi(s,{depth:.026,bevelEnabled:!0,bevelSegments:1,bevelSize:.006,bevelThickness:.006,steps:1}),i.translate(0,0,-.013),i.computeVertexNormals(),b1.set(t,i),i}var bP=(()=>{let n=new Gn;n.moveTo(.02,-.16),n.quadraticCurveTo(.31,-.29,.48,-.18),n.quadraticCurveTo(.57,0,.48,.2),n.quadraticCurveTo(.29,.3,.02,.17),n.lineTo(-.06,.08),n.lineTo(-.06,-.08),n.closePath();let e=new vi(n,{depth:.075,bevelEnabled:!0,bevelSegments:2,bevelSize:.012,bevelThickness:.012,steps:1});return e.translate(0,0,-.0375),e.computeVertexNormals(),e})();function J0(n,e){let{y:t,s:i=1,mat:s=fi,horns:r=!1,crest:o=null,crown:a=!1}=e,l=Yt(.43*i,.34*i,.38*i,s,0,t,0,.055*i,2);l.rotation.x=-.04,n.add(l);let c=Yt(.32*i,.075*i,.32*i,Er,0,t+.19*i,-.01*i,.02*i,1);n.add(c);let u=Yt(.47*i,.055*i,.09*i,s,0,t+.075*i,.2*i,.018*i,1);u.rotation.x=-.12,n.add(u);let d=Yt(.31*i,.052*i,.035*i,MP,0,t+.012*i,.207*i,.012*i,1);n.add(d);let h=Yt(.052*i,.17*i,.06*i,Er,0,t-.025*i,.218*i,.012*i,1);n.add(h);for(let f of[-1,1]){let m=Yt(.07*i,.17*i,.12*i,s,f*.18*i,t-.075*i,.155*i,.018*i,1);if(m.rotation.z=f*-.12,n.add(m),r){let x=new L(new Ke(.068*i,.43*i,6),Er);x.position.set(f*.27*i,t+.17*i,-.01*i),x.rotation.z=f*-.62,x.castShadow=!0,n.add(x)}}if(o){let f=new L(new Ke(.085*i,.46*i,5),o);f.scale.z=.5,f.position.set(0,t+.42*i,-.035*i),f.rotation.x=-.22,f.castShadow=!0,n.add(f)}if(a)for(let f=0;f<5;f++){let m=f/5*Math.PI*2,x=new L(new Ke(.035*i,(f%2?.18:.25)*i,4),Ii);x.position.set(Math.cos(m)*.18*i,t+.3*i,Math.sin(m)*.18*i),x.castShadow=!0,n.add(x)}return l}function AP(n,e,t,i){let s=e==="brute"||e==="giant"||e==="warlord",r=e==="champion"?as:e==="warlord"?Xa:fi,o=(s?.62:.46)*t,a=Yt(o,(s?.36:.29)*t,.15*t,r,0,1.01*t,(i+.025)*t,.04*t,2);a.rotation.x=-.08,n.add(a);let l=Yt(o*.82,.16*t,.12*t,r,0,.79*t,(i+.02)*t,.025*t,1);n.add(l);let c=Yt(o*.72,.028*t,.035*t,Ii,0,1.13*t,(i+.105)*t,.009*t,1);n.add(c);for(let u of[-1,1]){let d=B1(.045*t,.43*t,.025*t,qi,u*o*.28,.96*t,(i+.11)*t);d.rotation.z=u*.08,n.add(d);let h=Yt(.17*t,(s?.29:.23)*t,.11*t,r,u*.17*t,.59*t,.13*t,.025*t,1);h.rotation.z=u*.08,n.add(h)}}var Wa=new Ut(1,1,1),RP=new qt(1,6,4),CP=new Ke(.28,.42,6),PP=Yd(.48,.34,.42,.055,1),IP=Yd(.5,.065,.09,.02,1),LP=new Ke(.065,.4,5),DP=kd(1,1,.24,.05);function NP(n){let[e,t,i]=O1[n],s=U1(e,t,i),r=new Ve,o={flashMats:[s]},a=n==="brute"||n==="giant"||n==="warlord",l=a?.36:.26,c=a?.62:.48,u=new L(Wa,s);u.scale.set(l*2.05,c+l*2,l*1.8),u.position.y=.92,u.castShadow=!0,r.add(u),o.torso=u;let d=new L(Wa,qi);d.scale.set(l*2.16,.1,l*1.95),d.position.y=.72,d.castShadow=!0,r.add(d);let h=new L(RP,H1);if(h.scale.setScalar(.21),h.position.y=1.42,h.castShadow=!0,r.add(h),o.head=h,a||n==="champion"||n==="acolyte"){let S=new L(PP,n==="champion"?as:fi);S.scale.setScalar(n==="giant"||n==="warlord"?1.16:1),S.position.y=n==="giant"||n==="warlord"?1.5:1.47,S.castShadow=!0,r.add(S);let I=new L(IP,Xa);if(I.scale.copy(S.scale),I.position.set(0,S.position.y+.03,.215*S.scale.x),r.add(I),n==="brute"||n==="giant"||n==="warlord")for(let _ of[-1,1]){let A=new L(LP,n==="giant"||n==="warlord"?Ii:Er);A.scale.copy(S.scale),A.position.set(_*.27,S.position.y+.2,0),A.rotation.z=_*-.6,A.castShadow=!0,r.add(A)}}else{let S=new L(CP,s);S.position.y=1.6,S.castShadow=!0,r.add(S)}if(n==="champion"||n==="acolyte"||n==="warlord"){let S=new L(DP,n==="champion"?po.champion:n==="acolyte"?po.acolyte:po.warlord),I=n==="warlord"?.82:.58;S.scale.set(I,n==="warlord"?1.55:1.02,1),S.position.set(0,1.28,-.24),S.rotation.x=.12,r.add(S),o.cape=S}let f=a?.62:.5,m=cs(r,l+.08,1.2,.02),x=new L(Wa,s);x.scale.set(.15,f+.12,.15),x.position.y=-f/2-.04,x.castShadow=!0,m.add(x),o.armR=m;let g=cs(r,-l-.08,1.2,.02),p=new L(Wa,s);p.scale.copy(x.scale),p.position.copy(x.position),p.castShadow=!0,g.add(p),o.armL=g;let v=.56,y=cs(r,-.14,.6,0),E=new L(Wa,qi);E.scale.set(.15,v,.17),E.position.y=-v/2,E.castShadow=!0,y.add(E),o.legL=y;let b=cs(r,.14,.6,0),T=new L(Wa,qi);T.scale.copy(E.scale),T.position.copy(E.position),T.castShadow=!0,b.add(T),o.legR=b;for(let[S,I]of Object.entries(o))S!=="flashMats"&&(I.name=S);return{group:r,parts:o}}function HP(n){let[e,t,i]=O1[n],s=U1(e,t,i),r=new Ve,o=1,a={flashMats:[s]},l=n==="brute"||n==="giant"||n==="warlord",c=(l?.38:.275)*o,u=(l?.58:.46)*o,d=new L(new Jn(c,u,6,12),s);d.position.y=.92*o,d.castShadow=!0,r.add(d),a.torso=d;let h=new L(new Te(c*.92,c*1.08,.25*o,8),s);h.position.y=.58*o,h.castShadow=!0,r.add(h);let f=Va(c*1.08,c*1.08,.1*o,10,qi,0,.72*o,0);r.add(f);let m=Yt(.1*o,.085*o,.04*o,Ii,0,.72*o,c*1.05*o,.015*o,1);r.add(m),["brute","champion","giant","warlord"].includes(n)&&AP(r,n,o,c);let x=Mr(.205*o,H1,0,1.42*o,0,10,10);if(r.add(x),a.head=x,n==="grunt"||n==="runner"){let D=new L(new Ke(.28*o,.42*o,7),s);D.position.y=1.6*o,D.castShadow=!0,r.add(D);let F=Va(.215*o,.215*o,.09*o,10,qi,0,1.36*o,0);r.add(F);let k=Yt(.31*o,.045*o,.055*o,xP,0,1.48*o,.18*o,.012*o,1);if(k.rotation.x=-.12,r.add(k),n==="runner"){let K=new L(new Ke(.05*o,.5*o,5),EP);K.position.set(.12*o,1.92*o,0),K.rotation.z=-.35,r.add(K)}}else if(n==="bomber"){let D=Va(.225*o,.225*o,.11*o,10,fi,0,1.44*o,0);r.add(D);let F=Mr(.07*o,_P,.1*o,1.45*o,.19*o);r.add(F);let k=Mr(.31*o,s,0,.82*o,.1*o);k.scale.z=.82,r.add(k);let K=new L(new Rt(.245*o,.025*o,5,12),qi);K.position.set(0,.82*o,.1*o),K.rotation.x=Math.PI/2,r.add(K)}else if(n==="brute"){J0(r,{y:1.49*o,s:1.06*o,mat:fi,horns:!0});let D=Yt(.34*o,.1*o,.14*o,Xa,0,1.31*o,.16*o,.02*o,1);r.add(D),[-1,1].forEach(F=>{let k=new L(new Ke(.085*o,.34*o,5),Er);k.position.set(F*.43*o,1.3*o,0),k.rotation.z=F*-.8,r.add(k)})}else if(n==="champion"){J0(r,{y:1.49*o,mat:as,crest:po.champion});let D=new L(kd(.58*o,1.02*o,.26,.065),po.champion);D.position.set(0,1.27*o,-.235*o),D.rotation.x=.1,D.castShadow=!0,r.add(D),a.cape=D}else if(n==="acolyte"){let D=new L(new Ke(.31*o,.52*o,6),s);D.position.set(0,1.58*o,-.015*o),D.rotation.y=Math.PI/6,D.castShadow=!0,r.add(D);let F=Yt(.28*o,.22*o,.04*o,Xa,0,1.43*o,.19*o,.035*o,2);r.add(F);let k=Yt(.34*o,.05*o,.07*o,Ii,0,1.57*o,.205*o,.015*o,1);k.rotation.x=-.1,r.add(k);let K=new L(new fn(.07*o,0),Ii);K.scale.y=1.5,K.position.set(0,1.73*o,.18*o),r.add(K);let j=new L(kd(.57*o,1.02*o,.28,.06),po.acolyte);j.position.set(0,1.27*o,-.235*o),j.rotation.x=.1,j.castShadow=!0,r.add(j),a.cape=j}else if((n==="giant"||n==="warlord")&&(J0(r,{y:1.51*o,s:1.12*o,mat:n==="warlord"?Xa:fi,horns:!0,crown:n==="warlord"}),[-.09,.09].forEach(D=>{let F=Mr(.035*o,vP,D*o,1.515*o,.245*o,6,6);r.add(F)}),n==="warlord")){let D=new L(kd(.84*o,1.55*o,.22,.08),po.warlord);D.position.set(0,1.4*o,-.3*o),D.rotation.x=.08,D.castShadow=!0,r.add(D),a.cape=D}if(["brute","champion","giant","warlord"].includes(n)){let D=n==="champion"?as:n==="warlord"?Xa:fi,F=n==="champion"||n==="warlord"?Ii:Er;for(let k of[-1,1]){let K=Yt(l?.27*o:.22*o,.13*o,l?.4*o:.32*o,D,k*(c+.12*o),1.25*o,0,.035*o,2);K.rotation.z=k*.16,r.add(K);let j=Yt(l?.23*o:.18*o,.075*o,l?.34*o:.27*o,F,k*(c+.15*o),1.34*o,.015*o,.022*o,1);j.rotation.z=k*.2,r.add(j)}}let g=(l?.62:.5)*o,p=cs(r,c+.08*o,1.2*o,.02*o),v=new L(new Jn((l?.095:.072)*o,g,4,8),s);v.position.y=-g/2-.04*o,v.castShadow=!0,p.add(v);let y=cs(p,0,-g-.06*o,0);a.armR=p;let E=cs(r,-c-.08*o,1.2*o,.02*o),b=new L(new Jn((l?.095:.072)*o,g,4,8),s);b.position.y=-g/2-.04*o,b.castShadow=!0,E.add(b);let T=cs(E,0,-g-.06*o,0);a.armL=E;let S=["brute","champion","giant","warlord"].includes(n);for(let[D,F]of[[p,y],[E,T]])if(S){let k=Yt(l?.2*o:.15*o,.23*o,.18*o,n==="champion"?as:fi,0,-g*.78,.015*o,.028*o,1);D.add(k);let K=Yt(l?.21*o:.16*o,.045*o,.19*o,n==="champion"||n==="warlord"?Ii:Er,0,-g*.62,.015*o,.012*o,1);D.add(K);let j=Yt(.13*o,.13*o,.14*o,fi,0,-.015*o,0,.025*o,1);F.add(j)}else{let k=Mr(.07*o,qi,0,-.015*o,0,7,6);k.scale.y=1.15,F.add(k)}if(n==="grunt"||n==="champion"){let D=(n==="champion"?.85:.62)*o,F=Va(.035*o,.035*o,.22*o,6,qi,0,0,0);y.add(F);let k=Yt(.24*o,.055*o,.07*o,Ii,0,.1*o,0,.018*o,1);y.add(k);let K=new L(A1(.078*o,D),n==="champion"?as:fi);K.position.set(0,.13*o,0),K.castShadow=!0,y.add(K);let j=Mr(.045*o,Ii,0,-.13*o,0,6,5);y.add(j)}else if(n==="runner")[-1,1].forEach(D=>{let F=D===1?y:T,k=new L(A1(.045*o,.42*o),as);k.position.set(0,.04*o,0),k.rotation.x=.3,k.castShadow=!0,F.add(k)});else if(n==="bomber"){let D=Mr(.25*o,yP,0,0,.06*o);D.scale.y=1.08,y.add(D);let F=Va(.014*o,.014*o,.22*o,4,_1,0,.26*o,.06*o);F.rotation.x=.2,y.add(F);let k=new Gt(wP);k.scale.setScalar(.35*o),k.position.set(0,.38*o,.08*o),y.add(k),a.fuseSpark=k}else if(n==="brute"||n==="giant"||n==="warlord"){let D=Va(.045*o,.05*o,1.5*o,6,_1,0,-.1*o,0);y.add(D);let F=n==="warlord"?1.2:n==="giant"?1.08:1,k=new L(bP,as);k.scale.setScalar(F*o),k.position.set(.04*o,.55*o,0),k.castShadow=!0,y.add(k);let K=new L(new Ke(.07*o,.3*o,5),Er);K.position.set(-.18*o,.55*o,0),K.rotation.z=Math.PI/2,y.add(K);let j=Yt(.13*o,.16*o,.13*o,fi,0,.55*o,0,.025*o,1);if(y.add(j),n==="warlord"){let W=Yt(.27*o,.065*o,.012*o,SP,.27*o,.55*o,.052*o,.01*o,1);W.rotation.z=-.12,y.add(W)}}if(n==="champion"||n==="acolyte"){let D=new L(w1,n==="champion"?as:fi);D.scale.setScalar(o),D.rotation.z=.1,D.castShadow=!0,T.add(D);let F=new L(w1,Ii);F.scale.set(1.08*o,1.08*o,.42*o),F.position.z=-.022*o,F.rotation.z=.1,T.add(F);let k=n==="champion"?Mr(.1*o,Ii,0,-.05*o,.085*o):new L(new fn(.105*o,0),TP);n==="champion"?k.scale.z=.4:(k.position.set(0,-.04*o,.085*o),k.scale.y=1.35),T.add(k)}let I=.56*o,_=cs(r,-.14*o,.6*o,0),A=new L(new Jn(.085*o,I-.12*o,4,8),qi);A.position.y=-I/2,A.castShadow=!0,_.add(A);let G=B1(.16*o,.1*o,.26*o,qi,0,-I+.02*o,.05*o);_.add(G);let X=cs(r,.14*o,.6*o,0),re=A.clone();if(X.add(re),X.add(G.clone()),S){let D=n==="champion"?as:fi;for(let F of[_,X]){let k=Yt(.17*o,.15*o,.09*o,D,0,-.17*o,.075*o,.03*o,1);F.add(k);let K=Yt(.14*o,.27*o,.1*o,D,0,-.37*o,.065*o,.025*o,1);K.rotation.x=-.06,F.add(K)}}a.legL=_,a.legR=X;for(let[D,F]of Object.entries(a))D!=="flashMats"&&(F.name=D);d.userData.noStaticBatch=!0,x.userData.noStaticBatch=!0;for(let D of[p,E,y,T,_,X])D.userData.dynamicPivot=!0;return a.cape&&(a.cape.userData.noStaticBatch=!0),UP(r),{group:r,parts:a}}function UP(n){let e=[n];n.traverse(t=>{t!==n&&t.userData.dynamicPivot&&e.push(t)});for(let t of e){t.updateWorldMatrix(!0,!0);let i=t.matrixWorld.clone().invert(),s=new Map;t.traverse(r=>{if(!r.isMesh||r.isSkinnedMesh||!r.visible||Array.isArray(r.material)||!r.material||r.material.transparent)return;for(let a=r;a&&a!==t;a=a.parent)if(a.userData.dynamicPivot||a.userData.noStaticBatch)return;let o=r.material.uuid+":"+[r.castShadow,r.receiveShadow,r.renderOrder].join(":");s.has(o)||s.set(o,{material:r.material,meshes:[]}),s.get(o).meshes.push(r)});for(let r of s.values()){if(r.meshes.length<2)continue;let o=r.meshes.map(u=>{let d=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();d.applyMatrix4(i.clone().multiply(u.matrixWorld)),d.getAttribute("normal")||d.computeVertexNormals(),d.getAttribute("uv")||d.setAttribute("uv",new Le(new Float32Array(d.getAttribute("position").count*2),2));for(let h of Object.keys(d.attributes))["position","normal","uv"].includes(h)||d.deleteAttribute(h);return d.clearGroups(),d}),a=ss(o,!1);if(o.forEach(u=>u.dispose()),!a)continue;a.computeBoundingBox(),a.computeBoundingSphere();let l=r.meshes[0],c=new L(a,r.material);c.name="enemy-rigid-batch",c.castShadow=l.castShadow,c.receiveShadow=l.receiveShadow,c.renderOrder=l.renderOrder,t.add(c);for(let u of r.meshes)u.removeFromParent()}}}var R1=new Map,C1=new Map;function OP(n){let e=R1.get(n);return e||(e=HP(n),e.partNames=Object.keys(e.parts).filter(t=>t!=="flashMats"),R1.set(n,e)),e}function BP(n){let e=C1.get(n);return e||(e=NP(n),e.partNames=Object.keys(e.parts).filter(t=>t!=="flashMats"),C1.set(n,e)),e}function j0(n,e){return n.has(e)||n.set(e,e.clone()),n.get(e)}function P1(n,e,t){let i=n.group.clone(!0);i.scale.setScalar(e);let s=n.parts.flashMats.map(o=>j0(t,o));i.traverse(o=>{o.material&&(Array.isArray(o.material)?o.material=o.material.map(a=>t.has(a)||o.isSprite?j0(t,a):a):(t.has(o.material)||o.isSprite)&&(o.material=j0(t,o.material)))});let r={flashMats:s};for(let o of n.partNames)r[o]=i.getObjectByName(o);return{model:i,parts:r}}function FP(n,e){let t=new Ve,i=new Map,s=new Map,r=P1(OP(n),e,i),o=P1(BP(n),e,s);return o.model.visible=!1,t.add(r.model,o.model),{group:t,parts:r.parts,detailedParts:r.parts,simpleParts:o.parts,detailedModel:r.model,simpleModel:o.model,ownedMaterials:[...i.values(),...s.values()]}}var F1=38,z1=2,zP=(F1-z1)**2,kP=(F1+z1)**2;function Gd(n,e){n.simpleLod=e,n.detailedModel.visible=!e,n.simpleModel.visible=e,n.parts=e?n.simpleParts:n.detailedParts}function k1(n){if(n.isBoss){n.simpleLod&&Gd(n,!1);return}let e=Vt.position.distanceToSquared(n.mesh.position);n.simpleLod?e<zP&&Gd(n,!1):e>kP&&Gd(n,!0)}var Ll=1.05,I1=.16,GP=.72,VP=4,WP=new pn(.76,1,48),XP=new js(.76,48),YP=Yd(.34,.018,.055,.008,1),G1=new ye(16756810),qP=new ye(16728870),V1=[],Dl=[];function $P(){let n=new Ve,e=new ft({color:16747064,transparent:!0,opacity:.8,side:tt,blending:$e,depthWrite:!1,forceSinglePass:!0}),t=new ft({color:16734760,transparent:!0,opacity:.1,side:tt,blending:$e,depthWrite:!1,forceSinglePass:!0}),i=new L(WP,e);i.rotation.x=-Math.PI/2,n.add(i);let s=new L(XP,t);s.rotation.x=-Math.PI/2,s.position.y=-.004,n.add(s);let r=[];for(let o=0;o<4;o++){let a=new L(YP,e),l=o/4*Math.PI*2;a.position.set(Math.cos(l)*.89,.006,Math.sin(l)*.89),a.rotation.y=-l,n.add(a),r.push(a)}return n.visible=!1,n.renderOrder=4,{group:n,material:e,discMaterial:t,ticks:r,active:!1,owner:null,t:0,radius:4.5,impacted:!1}}for(let n=0;n<VP;n++)V1.push($P());function KP(n,e,t){let i=V1.find(s=>!s.active);return i?(i.active=!0,i.owner=n,i.t=0,i.radius=t,i.impacted=!1,i.group.position.set(e.x,.09,e.z),i.group.rotation.y=n.phase,i.group.scale.setScalar(t*.35),i.material.color.copy(G1),i.material.opacity=.72,i.discMaterial.opacity=.09,i.group.visible=!0,Ne.add(i.group),Dl.push(i),i):null}function tg(n){if(!n||!n.active)return;n.active=!1,n.owner=null,n.group.visible=!1,Ne.remove(n.group);let e=Dl.indexOf(n);e!==-1&&Dl.splice(e,1)}function Nl(n){n.slamVisual&&tg(n.slamVisual),n.slamVisual=null,n.slamT=0,n.detailedModel&&(n.detailedModel.rotation.x=0),n.simpleModel&&(n.simpleModel.rotation.x=0),n.detailedParts?.armL&&n.simpleParts?.armL&&Ya(n,0,0)}function ZP(){for(let n=Dl.length-1;n>=0;n--){let e=Dl[n],t=e.owner;(!t||t.dead||t.dying||!M.enemies.includes(t))&&(t&&(t.slamVisual=null),tg(e))}}function JP(n,e){n.t+=e;let t=.5+.5*Math.sin(n.t*18);if(n.impacted){let i=Math.min(1,n.t/.38);n.group.scale.setScalar(n.radius*(1+i*.38)),n.material.opacity=(1-i)*.95,n.discMaterial.opacity=(1-i)*.28}else{let i=Math.min(1,n.t/Ll),s=1-Math.pow(1-i,2);n.group.scale.setScalar(n.radius*(.35+s*.65)),n.material.color.lerpColors(G1,qP,i),n.material.opacity=.62+i*.28+t*.08,n.discMaterial.opacity=.07+i*.1+t*.025,n.group.rotation.y+=e*.18}}var jP=new un(1,.13),W1=new un(1,.11);W1.translate(.5,0,0);var QP=new ft({color:1313290,transparent:!0,opacity:.72,depthWrite:!1});function eI(n){let e=new Ve,t=new L(jP,QP);t.scale.set(1.3*Math.min(n,2.2),1,1),e.add(t);let i=new ft({color:6477898,transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1}),s=new L(W1,i);return s.position.z=.001,s.scale.x=1.24*Math.min(n,2.2),s.position.x=-.62*Math.min(n,2.2),e.add(s),e.renderOrder=10,s.renderOrder=11,{group:e,fill:s,fillMat:i,width:1.24*Math.min(n,2.2)}}function X1(){return Math.random()*Math.PI*2}function ng(n){let e=Math.random();return n<=2?"grunt":n<=3?e<.72?"grunt":"runner":n<=6?e<.42?"grunt":e<.72?"runner":"bomber":n<=9?e<.34?"brute":e<.58?"runner":e<.8?"bomber":"grunt":n<=12?e<.2?"champion":e<.46?"brute":e<.66?"acolyte":e<.84?"bomber":"runner":e<.32?"champion":e<.56?"brute":e<.72?"acolyte":"runner"}function eg(n,e={}){let t=ns[n],i=e.size||t.size,{group:s,parts:r,detailedParts:o,simpleParts:a,detailedModel:l,simpleModel:c,ownedMaterials:u}=FP(e.visualType||n,i),d=e.pos?e.pos.clone():(()=>{let G=X1(),X=ga(M.castleLevel);return new w(Math.cos(G)*X,0,Math.sin(G)*X)})(),h=e.wave||M.wave,f=1+(h-1)*dv,m=xE(M.difficulty),x=h>mn?_E(h):1,g=Math.round((e.hp||t.hp)*(e.hpFlat?1:f)*m*x),p=e.reward!==void 0?e.reward:t.reward,v=Math.max(.4,Math.min(1.3,i*.45)),y=Math.max(.1,ro-v-.55),E=(Math.random()*2-1)*y,b=Math.max(rd,13.3)+v+.65,T=Math.hypot(d.x,d.z)<Ri-v-.15?"courtyard":"approach";s.position.copy(d),s.rotation.y=Math.atan2(-d.x,-d.z),s.scale.setScalar(.01),Ne.add(s);let S=eI(i);S.group.position.y=1.7*i+.55,S.group.visible=!1,Ne.add(S.group);let I={mesh:s,parts:r,type:n,size:i,ownedMaterials:u,detailedParts:o,simpleParts:a,detailedModel:l,simpleModel:c,simpleLod:!1,hp:g,maxHp:g,reward:p,speed:t.speed*(.94+Math.random()*.12),dmg:e.dmg||t.dmg,dead:!1,dying:!1,deathT:0,spawnT:0,phase:Math.random()*Math.PI*2,attackT:0,attackCd:0,attacking:!1,didHit:!1,slamT:0,slamVisual:null,castleRoutePhase:T,gateLane:E,collisionRadius:v,routeRadius:b,groundY:gr(d.x,d.z),flash:0,slowUntil:0,slowFactor:1,stunUntil:0,armor:n==="champion"?.32:n==="brute"?.22:n==="acolyte"?.1:0,healCd:1.5+Math.random(),bossPhase:1,bar:S,light:null,isBoss:!!e.boss,endlessBoss:!!e.boss&&h>mn,bossName:e.bossName||null,isWarlord:n==="warlord"&&e.boss};Gd(I,!I.isBoss),k1(I);let _=parseInt(t.tint.replace("#",""),16),A=new w(d.x,.12,d.z);return be.emit("splash",A,{color:[14218495,12577023,16777215],count:e.boss?18:7,speed:4.5,up:2.2,size:.95,life:.7}),be.emit("dust",new w(d.x,.2,d.z),{color:10127984,count:e.boss?14:6}),e.boss&&(Xt(new w(d.x,.2,d.z),_,5.5,.7),I.light=Mv(_,3.2,24),(!M.activeBoss||M.activeBoss.dying)&&(M.activeBoss=I),Oe("bossRoar")),M.enemies.push(I),I}function $i(n,e={}){let t=(n||[]).filter(o=>ns[o]);if(t.length===0||M.enemies.length+Hs()+t.length>zc)return null;let i=e.angle!==void 0?e.angle:X1(),s=e.wave||M.wave;return pE({angle:i,types:t,boss:!!e.boss,onLand:o=>{let a=e.spread!==void 0?e.spread:e.boss?.8:2.6;for(let l of t){if(M.enemies.length>=zc)break;let c=Math.random()*Math.PI*2,u=a*Math.sqrt(Math.random());eg(l,{...e.enemyOpts,wave:s,pos:new w(o.x+Math.cos(c)*u,0,o.z+Math.sin(c)*u)})}}})}function tI(n){let e=Array.isArray(n)?n:Array.from({length:Math.max(1,n||1)},()=>ng(M.wave)),t=Nv(M.wave),i=null;for(let s=0;s<e.length;s+=t)i=$i(e.slice(s,s+t))||i;return i}function Y1(n){return $i([n||ng(M.wave)])}var q1=3,$1=5,K1=10,L1=["ASHEN CHAMPION","DREAD MARSHAL","OATHBREAKER"],D1=["SIEGE COLOSSUS","GRAVEBORN BREAKER","IRON CRUSHER"],N1=["NIGHTFALL","THE HOLLOW KING","THE LAST CONQUEROR"];function nI(n=M.wave){let e=Math.floor((n-mn-1)/q1)+1,t=L1[(e-1)%L1.length]+" "+e,i=$i(["champion"],{boss:!0,wave:n,spread:.5,enemyOpts:{boss:!0,bossName:t,hp:Math.round(Yr.hpPerStage*e*1.2),hpFlat:!0,size:Yr.size+Math.min(1.2,e*.08),reward:Math.round(Yr.reward*(1+e*.12)),dmg:Math.round(26+n*.35)}});return i&&Dt("ENDLESS MINI-BOSS",t+" STALKS THE SHORE","danger"),i}function iI(n=M.wave){let e=Math.floor((n-mn-1)/$1)+1,t=D1[(e-1)%D1.length]+" "+e,i=$i(["giant"],{boss:!0,wave:n,spread:.6,enemyOpts:{boss:!0,bossName:t,hp:Math.round(ws.hpBase*(1+(n-1)*ws.hpPerWave)*1.35),hpFlat:!0,size:ws.size+Math.min(1.1,n*.025),reward:Math.round(ws.reward*(1+n*.08)),dmg:Math.round(38+n*.55)}});return i&&Dt("ENDLESS SIEGE BOSS",t+" \xB7 BRACE THE GATES","danger"),i}function sI(n=M.wave){let e=Math.floor((n-mn-1)/K1)+1,t="THE ENDLESS WARLORD \xB7 "+N1[(e-1)%N1.length]+" "+e,i=$i(["warlord"],{boss:!0,wave:n,spread:.7,enemyOpts:{boss:!0,bossName:t,hp:Math.round(ns.warlord.hp*(1+(n-mn)*.08)),hpFlat:!0,size:ns.warlord.size+Math.min(.7,n*.015),reward:Math.round(ns.warlord.reward*(1+n*.1)),dmg:Math.round(120+n*1.5)}});return i&&Dt("ENDLESS WARLORD",t+" \xB7 THE HUNT CONTINUES","boss"),i}function ig(){let n=Math.floor((M.wave-1)/5)+1,e=$i(["champion"],{boss:!0,spread:.5,enemyOpts:{boss:!0,bossName:"CHAMPION OF STAGE "+n,hp:Yr.hpPerStage*n,hpFlat:!0,size:Yr.size+n*.12,reward:Yr.reward,dmg:26}});return e&&Dt("MINI BOSS","A CHAMPION ENTERS THE FRAY","danger"),e}function sg(){let n=$i(["giant"],{boss:!0,spread:.6,enemyOpts:{boss:!0,bossName:"SIEGE GIANT",hp:Math.round(ws.hpBase*(1+(M.wave-1)*ws.hpPerWave)),hpFlat:!0,size:ws.size+M.wave*.05,reward:ws.reward,dmg:38}});return n&&Dt("SIEGE GIANT","BRACE THE GATES!","danger"),n}function rg(){let n=$i(["warlord"],{boss:!0,spread:.7,enemyOpts:{boss:!0,bossName:"THE BANDIT WARLORD",hp:ns.warlord.hp,hpFlat:!0,size:ns.warlord.size,reward:ns.warlord.reward,dmg:120}});return n&&Dt("THE WARLORD","SLAY HIM TO END THE SIEGE","boss"),n}function Z1(n){if(!M.waveActive)return;M.spawnTimer+=n;let e=M.wave,t=M.endless||M.totalWaves===1/0,i=t&&e>mn,s=Math.min(Wh(e),M.timeInWave>40?.45:1/0),r=il(e),o=M.enemies.length+Hs(),a=zc-o;if(i?(e%q1===0&&!M.miniBossSpawned&&M.timeInWave>1&&a>=1&&nI(e)&&(M.miniBossSpawned=!0),e%K1===0&&!M.warlordSpawned&&M.timeInWave>1.5&&a>=1&&sI(e)&&(M.warlordSpawned=!0)):!t&&e===mn&&!M.warlordSpawned&&M.timeInWave>1.5&&a>=1?rg()&&(M.warlordSpawned=!0):!i&&rv.includes(e)&&!M.miniBossSpawned&&M.timeInWave>1&&a>=1&&ig()&&(M.miniBossSpawned=!0),M.spawnTimer>=s&&a>0&&M.spawnRemaining>0){let c=Math.min(r,M.spawnRemaining,a),u=Hs(),d=Array.from({length:c},()=>ng(e));tI(d);let h=Hs()-u;h>0&&(M.spawnRemaining-=h,M.spawnTimer=0)}(i?e%$1===0:ov.includes(e))&&(i?M.timeInWave>2:M.spawnRemaining<=0)&&!M.roundBossSpawned&&a>=1&&(i?iI(e):sg())&&(M.roundBossSpawned=!0)}function _r(n,e,t={}){if(!n||n.dead||n.dying)return!1;let i=e;if(n.armor>0&&(t.damageType==="cannon"?i*=1+n.armor*1.5:(t.damageType==="arrow"||t.damageType==="hero")&&!t.armorPierce&&(i*=1-n.armor)),i=Math.max(1,Math.round(i)),n.hp-=i,n.flash=.09,n.barVisibleUntil=M.elapsed+3,t.showNumber!==!1){let s=n.mesh.position.clone();s.y=1.6*n.size,Wi(s,String(i),{color:t.critical?"#ffd24a":t.color||"#ffe0b0",size:i>=40?1.5:i>=15?1.15:.95})}return n.hp<=0?(rI(n,t),!0):!1}function rI(n,e={}){if(n.dying||n.dead)return;Nl(n),n.dying=!0,n.deathT=0,n.bar.group.visible=!1;let t=n.mesh.position,i=parseInt(ns[n.type].tint.replace("#",""),16);M.kills++,M.waveKills++,Ld(M,Math.max(1,Math.round(n.reward*.35))+(n.isBoss?12:0)),M.combo++,M.comboTimer=Ah,M.bestCombo=Math.max(M.bestCombo,M.combo);let s=1+Math.min(M.combo,25)*.08,r=Math.max(1,Math.round(n.reward*vE(M.difficulty)*JE(M)));M.score+=Math.round(r*s*10),M.gold+=r,M.totalGoldEarned+=r,Math.random()<.45&&Oe("coin"),Wi(new w(t.x,2.4*n.size,t.z),"+"+r,{color:"#ffd24a",size:1.05}),n.isBoss?(Oe("bossDeath"),Cl(.12,.2),Hn(.8,.7),Xt(new w(t.x,.3,t.z),16760928,14,.9),be.emit("impact",new w(t.x,1.5,t.z),{color:16760928,count:26,speed:14}),be.emit("soul",new w(t.x,2,t.z),{color:11461887,count:16,speed:3}),be.emit("smoke",new w(t.x,1.2,t.z),{color:5588019,count:12}),Xi("#ffcf7a",.25,.5),Fa(new w(t.x,0,t.z),7),n.isWarlord&&(M.warlordKilled=!0,Xi("#ffffff",.5,1),Xt(new w(t.x,.3,t.z),16777215,26,1.4))):(Oe("death"),be.emit("soul",new w(t.x,1.2*n.size,t.z),{color:i,count:6,speed:1.6}),be.emit("dust",new w(t.x,.3,t.z),{color:10127984,count:5}),be.emit("gold",new w(t.x,1.2,t.z),{color:16760896,count:4})),n.light&&(Sm(n.light),n.light=null),M.activeBoss===n&&(M.activeBoss=M.enemies.find(o=>o!==n&&o.isBoss&&!o.dying)||null),xt(0)}function oI(n){Nl(n),Ne.remove(n.mesh),Ne.remove(n.bar.group);for(let t of n.ownedMaterials)t.dispose();n.light&&Sm(n.light),n.bar.fillMat.dispose();let e=M.enemies.indexOf(n);e!==-1&&M.enemies.splice(e,1)}function Xd(n,e,t){let i=Math.max(1,Math.round(n*yE(M.difficulty)));M.waveLeaks++,M.baseHP=Math.max(0,M.baseHP-i),El(16719904),HE(t?.75:.35),Hn(t?.6:.22,.35),Oe("castleHit"),Xt(new w(0,1,0),16728112,5,.5),be.emit("dust",new w(0,2,0),{color:10522752,count:8}),Wi(new w(0,6+M.castleLevel*.5,0),"-"+i,{color:"#ff5a4a",size:1.35}),xt(0),M.baseHP<=0&&(M.baseHP=0)}function aI(n){if(!n.isWarlord)return;let e=n.hp/n.maxHp;if(e<=.33&&n.bossPhase<3){n.bossPhase=3,n.speed*=1.3,n.dmg=Math.round(n.dmg*1.2),n.bossName=(n.endlessBoss?"THE ENDLESS WARLORD":"THE WARLORD")+" \xB7 UNBOUND",Dt(n.endlessBoss?"ENDLESS WARLORD ENRAGED":"WARLORD ENRAGED",n.endlessBoss?"THE NIGHT HUNT KNOWS NO END":"THE FINAL HUNT BEGINS","boss"),Xt(new w(n.mesh.position.x,.3,n.mesh.position.z),16719920,16,.9);for(let t=0;t<3;t++){let i=Math.random()*Math.PI*2;eg("runner",{wave:M.wave,pos:new w(n.mesh.position.x+Math.cos(i)*3,0,n.mesh.position.z+Math.sin(i)*3)})}}else if(e<=.66&&n.bossPhase<2){n.bossPhase=2,n.speed*=1.25,n.bossName=(n.endlessBoss?"THE ENDLESS WARLORD":"THE WARLORD")+" \xB7 AWAKENED",Dt(n.endlessBoss?"ENDLESS WARLORD AWAKENED":"WARLORD AWAKENED",n.endlessBoss?"HIS LEGION ANSWERS AGAIN":"REINFORCEMENTS ANSWER HIS CALL","boss"),Xt(new w(n.mesh.position.x,.3,n.mesh.position.z),16732192,12,.8);for(let t=0;t<2;t++){let i=Math.random()*Math.PI*2;eg("grunt",{wave:M.wave,pos:new w(n.mesh.position.x+Math.cos(i)*3,0,n.mesh.position.z+Math.sin(i)*3)})}}}function cI(n,e){if(n.healCd-=e,n.healCd>0)return;let t=null,i=81;for(let r of M.enemies){if(r===n||r.dead||r.dying||r.hp>=r.maxHp)continue;let o=n.mesh.position.distanceToSquared(r.mesh.position);o<i&&(i=o,t=r)}if(!t)return;let s=Math.round(7+M.wave*1.2);t.hp=Math.min(t.maxHp,t.hp+s),Id(new w(n.mesh.position.x,2.2*n.size,n.mesh.position.z),new w(t.mesh.position.x,1.4*t.size,t.mesh.position.z),10217579,.22,.08,1),be.emit("magic",t.mesh.position,{color:10217579,count:5,speed:2}),Wi(new w(t.mesh.position.x,1.8*t.size,t.mesh.position.z),"+"+s,{color:"#9be86b",size:.85}),n.healCd=3.4}function Vd(n,e,t){n.detailedParts.armR.rotation.x=e,n.simpleParts.armR.rotation.x=e,t!==void 0&&(n.detailedParts.armR.rotation.z=t,n.simpleParts.armR.rotation.z=t)}function Ya(n,e,t=0){Vd(n,e,t),n.detailedParts.armL.rotation.x=e,n.simpleParts.armL.rotation.x=e,n.detailedParts.armL.rotation.z=-t,n.simpleParts.armL.rotation.z=-t}function lI(n,e,t,i){if(!t)return Nl(n),Ya(n,0,0),!1;if(!n.slamVisual&&(n.slamT=0,n.didHit=!1,n.slamVisual=KP(n,n.mesh.position,3.25+n.size*.42),!n.slamVisual))return!1;n.slamT+=e;let s=n.slamVisual;JP(s,e);let r=Ll+I1+GP,o=n.mesh.position;if(uI(n),n.slamT<Ll){let a=n.slamT/Ll,l=a*a*(3-2*a);Ya(n,-2.72*l,-.16*l),n.detailedModel.rotation.x=-.13*l,n.simpleModel.rotation.x=-.13*l}else{if(!n.didHit&&(n.didHit=!0,s.impacted=!0,s.t=0,Xd(n.dmg,o,!0),Xt(s.group.position,16738866,9.5,.62),be.emit("impact",s.group.position,{color:[16760928,16742965,9267786],count:22,speed:13,up:5}),be.emit("dust",s.group.position,{color:10124376,count:12,speed:4}),Fa(s.group.position,5.5),Hn(.72,.58),Cl(.075,.4),Xi("#ffb066",.12,.32),M.baseHP<=0))return i(),!0;let a=Math.min(1,(n.slamT-Ll)/I1);Ya(n,.72*a,.08),n.detailedModel.rotation.x=.08*(1-a),n.simpleModel.rotation.x=.08*(1-a),n.slamT>=r&&(tg(s),n.slamVisual=null,n.slamT=0,n.didHit=!1,n.attacking=!1,n.attackT=0,Ya(n,0,0),n.detailedModel.rotation.x=0,n.simpleModel.rotation.x=0)}return Wd(n),n.light&&n.light.position.set(o.x,2+n.size,o.z),!0}function uI(n){let e=n.mesh.position;n.mesh.rotation.y=Math.atan2(-e.x,-e.z)}function hI(n,e){let t=n.detailedParts,i=n.simpleParts;t.legL.rotation.x=i.legL.rotation.x=e*.55,t.legR.rotation.x=i.legR.rotation.x=-e*.55,t.armL.rotation.x=i.armL.rotation.x=-e*.45,t.armR.rotation.x=i.armR.rotation.x=e*.45,t.armR.rotation.z=i.armR.rotation.z=0}function dI(n){let e=n.mesh.position,t=oo(e.x,e.z,n.collisionRadius);e.x=t.x,e.z=t.z,Math.hypot(e.x,e.z)<=Ri-n.collisionRadius+.03?n.castleRoutePhase="courtyard":n.castleRoutePhase==="courtyard"?n.castleRoutePhase="approach":n.castleRoutePhase==="gate"&&e.z<Ri-n.collisionRadius-.3&&Math.abs(e.x)<=ro-n.collisionRadius&&(n.castleRoutePhase="courtyard"),n.groundY=gr(e.x,e.z)}function fI(n,e,t){let i=n.mesh.position,s=Math.hypot(i.x,i.z),r=n.collisionRadius,o=0,a=0;if(n.castleRoutePhase==="approach"){let E=Math.atan2(i.x,i.z);if(Math.abs(E)>.16)if(Math.abs(s-n.routeRadius)>.55)o=Math.sin(E)*n.routeRadius,a=Math.cos(E)*n.routeRadius;else{let b=Math.min(Math.abs(E),e*t*1.12/n.routeRadius),T=E-Math.sign(E)*b;o=Math.sin(T)*n.routeRadius,a=Math.cos(T)*n.routeRadius}else o=n.gateLane,a=wM,Math.hypot(o-i.x,a-i.z)<.35+r*.2&&(n.castleRoutePhase="gate")}else n.castleRoutePhase==="gate"&&(o=n.gateLane,a=Ri-r-.55,(i.z<=a+.08||Math.hypot(o-i.x,a-i.z)<.2)&&(n.castleRoutePhase="courtyard"));let l=o-i.x,c=a-i.z,u=Math.hypot(l,c);if(n.castleRoutePhase==="courtyard"&&u>.001){let E=Math.sin(M.elapsed*1.2+n.phase)*.1,b=-c/u,T=l/u;l+=b*E,c+=T*E,u=Math.hypot(l,c)}if(u<1e-4){n.moveDirX=0,n.moveDirZ=0;return}l/=u,c/=u;let d=e*t,h=Math.max(1,Math.ceil(d/.24)),f=l*d/h,m=c*d/h,x=i.x,g=i.z;for(let E=0;E<h;E++){let b=oo(i.x+f,i.z+m,r);i.x=b.x,i.z=b.z}let p=i.x-x,v=i.z-g,y=Math.hypot(p,v);n.moveDirX=y>1e-4?p/y:l,n.moveDirZ=y>1e-4?v/y:c,n.groundY=gr(i.x,i.z)}function Q0(n,e,t=null,i=null,s=null){let r=n.detailedParts.flashMats,o=n.simpleParts.flashMats;for(let a=0;a<r.length;a++)t!==null&&r[a].emissive.setRGB(t,i,s),r[a].emissiveIntensity=e;for(let a=0;a<o.length;a++)t!==null&&o[a].emissive.setRGB(t,i,s),o[a].emissiveIntensity=e}function og(n,e){let t=M.elapsed;ZP();for(let i=M.enemies.length-1;i>=0;i--){let s=M.enemies[i],r=s.mesh;if(s.dying){s.deathT+=n;let h=s.deathT;r.rotation.z=Math.min(1.45,h*3.2),h>.55&&(r.position.y=-Math.max(0,h-.55)*1.8),h>1.35&&oI(s);continue}if(s.spawnT<.3){s.spawnT+=n;let h=Math.min(1,s.spawnT/.3),f=1+2.2*Math.pow(1-h,3)-2.2*Math.pow(1-h,2);r.scale.setScalar(Math.max(.01,f*s.size/s.size)*Math.min(1,s.spawnT*4))}else r.scale.x<1&&r.scale.setScalar(1);k1(s);let o=r.position;dI(s);let a=Math.hypot(o.x,o.z),l=t<s.stunUntil,c=t<s.slowUntil,u=s.speed*(c?s.slowFactor:1);if(aI(s),l){(s.slamVisual||s.attacking)&&(Nl(s),s.attacking=!1,s.attackT=0,s.didHit=!1),Vd(s,-.4,-.25),Wd(s),s.light&&s.light.position.set(o.x,2+s.size,o.z);continue}if((s.type==="giant"||s.type==="warlord")&&a<30&&(s.phase+=n*u*3,Math.sin(s.phase)>.98&&Hn(.08,.15)),s.attacking){s.attackT+=n;let h=s.castleRoutePhase==="courtyard"&&a<Math.min(tm+(s.isBoss?2:0),Ri-s.collisionRadius-.1);if(!h)Nl(s),Ya(s,0,0),s.attacking=!1,s.attackT=0,s.didHit=!1;else{if(s.type==="giant"&&s.isBoss&&lI(s,n,h,e))continue;let f=s.isBoss?.55:.35,m=f+.22;if(s.attackT<f)Vd(s,-1.9*(s.attackT/f),-.3);else if(s.attackT<m){if(!s.didHit&&(s.didHit=!0,Xd(s.dmg,o,s.isBoss),s.isBoss&&(Xt(new w(0,.3,0),16732208,8,.5),be.emit("impact",new w(0,3,0),{color:16742976,count:12})),M.baseHP<=0)){e();return}Vd(s,.7)}else s.attackT>(s.isBoss?1.9:1.35)&&(s.attackT=0,s.didHit=!1);r.rotation.y=Math.atan2(-o.x,-o.z),Wd(s),s.light&&s.light.position.set(o.x,2+s.size,o.z);continue}}if(!l){fI(s,u,n),s.phase+=n*u*2.6;let h=Math.sin(s.phase);if(hI(s,h),r.position.y=s.groundY+Math.abs(Math.sin(s.phase))*.06*(s.size*.7+.3),s.detailedParts.cape||s.simpleParts.cape){let f=.1+Math.sin(t*5+s.phase)*.06;s.detailedParts.cape&&(s.detailedParts.cape.rotation.x=f),s.simpleParts.cape&&(s.simpleParts.cape.rotation.x=f)}if(s.detailedParts.fuseSpark||s.simpleParts.fuseSpark){let f=.35*(.8+Math.sin(t*20)*.2);s.detailedParts.fuseSpark&&s.detailedParts.fuseSpark.scale.setScalar(f),s.simpleParts.fuseSpark&&s.simpleParts.fuseSpark.scale.setScalar(f)}r.rotation.y=Math.atan2(s.moveDirX,s.moveDirZ)}s.type==="acolyte"&&cI(s,n);let d=Math.hypot(o.x,o.z);if(s.type==="bomber"&&s.castleRoutePhase!=="approach"&&o.z<=Ri+.45&&Math.abs(o.x)<ro){if(pI(s),M.baseHP<=0){e();return}continue}if(s.castleRoutePhase==="courtyard"&&d<Math.min(tm+(s.isBoss?2:0),Ri-s.collisionRadius-.1)){if(s.type==="runner"){if(Xd(s.dmg,o,!1),s.hp=0,s.dying=!0,s.deathT=0,s.bar.group.visible=!1,be.emit("dust",o,{color:10127984,count:8}),M.baseHP<=0){e();return}continue}s.attacking=!0,s.attackT=0,s.didHit=!1}if(s.flash>0){s.flash-=n;let h=Math.max(0,s.flash/.09);Q0(s,h*1.2,h,h,h)}else Q0(s,0);c&&Q0(s,.5,.15,.4,.7),Wd(s),s.light&&s.light.position.set(o.x,2+s.size,o.z)}}function Wd(n){let e=Math.max(0,n.hp/n.maxHp),t=n.bar;if(t.group.visible=n.isBoss||e<.999&&M.elapsed<(n.barVisibleUntil||0),!t.group.visible)return;t.group.position.set(n.mesh.position.x,1.7*n.size+.55+Math.max(0,n.mesh.position.y),n.mesh.position.z),t.fill.scale.x=Math.max(1e-4,t.width*e);let i=e>.6?6477898:e>.3?15253546:14698042;t.fillMat.color.setHex(i),t.group.quaternion.copy(Vt.quaternion)}function pI(n){let e=n.mesh.position;Oe("explosion"),Hn(.45,.5),Xt(new w(e.x,.3,e.z),16751168,8,.6),be.emit("impact",new w(e.x,1.4,e.z),{color:[16760896,16738848],count:22,speed:13}),be.emit("smoke",new w(e.x,1.2,e.z),{color:5917242,count:10}),Fa(e,4.5),Xd(n.dmg,e,!1),n.dying=!0,n.deathT=0,n.bar.group.visible=!1,n.hp=0}var mI=new fn(.16,0),gI=new qt(.22,10,8),t_=new Te(.022,.022,.9,5);t_.rotateX(Math.PI/2);var cg=new Ke(.085,.34,6);cg.rotateX(Math.PI/2);cg.translate(0,0,.62);var lg=new Ut(.01,.16,.22),n_=lg.clone();n_.translate(0,0,-.42);var ug=lg.clone();ug.rotateZ(Math.PI/2);ug.translate(0,0,-.42);var i_=[{geometry:t_,color:6965802},{geometry:cg,color:10133672},{geometry:n_,color:15262936},{geometry:ug,color:15262936}],hg=ss(i_.map(n=>n.geometry),!1),$d=new Float32Array(hg.attributes.position.count*3),qd=new ye,J1=0;for(let n of i_){qd.setHex(n.color);let e=n.geometry.attributes.position.count;for(let t=0;t<e;t++){let i=(J1+t)*3;$d[i]=qd.r,$d[i+1]=qd.g,$d[i+2]=qd.b}J1+=e,n.geometry.dispose()}lg.dispose();hg.setAttribute("color",new yt($d,3));var xI=new se({color:16777215,vertexColors:!0,metalness:.4,roughness:.5,emissive:2365964,emissiveIntensity:.3}),yI={hero:new se({color:9427199,emissive:4897023,emissiveIntensity:2.2,metalness:.5,roughness:.2}),castle:new se({color:16769162,emissive:16758832,emissiveIntensity:2,metalness:.7,roughness:.2}),frost:new se({color:10476799,emissive:4894463,emissiveIntensity:1.8,metalness:.2,roughness:.15}),cannon:new se({color:2368554,metalness:.6,roughness:.35})},ag=Zt(),vI={arrow:new Pt({map:ag,color:16770736,transparent:!0,opacity:.85,blending:$e,depthWrite:!1}),hero:new Pt({map:ag,color:8048895,transparent:!0,opacity:.95,blending:$e,depthWrite:!1}),castle:new Pt({map:ag,color:16765040,transparent:!0,opacity:.9,blending:$e,depthWrite:!1})},s_=["arrow","hero","castle","frost","cannon"],r_=Object.fromEntries(s_.map(n=>[n,[]])),Kd=new Set,MI={arrow:42,hero:46,frost:32,castle:36},j1=.55;function EI(n){let e=n==="cannon"?gI:n==="frost"?mI:hg,t=n==="arrow"?xI:yI[n],i=new L(e,t);if(i.castShadow=n==="cannon",n==="frost"&&(i.scale.z=1.9),n==="arrow"||n==="hero"||n==="castle"){let s=new Gt(vI[n]);s.scale.setScalar(.7),s.position.z=.62,i.add(s)}return i}function _I(n){let e=s_.includes(n)?n:"arrow",t=r_[e].pop();return t||(t={mesh:EI(e),poolKind:e,kind:null,target:null,damage:0,damageType:e,critical:!1,armorPierce:!1,speed:0,slow:0,slowDur:0,aoe:0,trailT:0,life:0,dir:new w(0,0,1),start:new w,dest:new w,t:0,duration:1,arcH:0}),t.damageType=e,t.critical=!1,t.armorPierce=!1,t}function Hl(n){Kd.delete(n)&&(Ne.remove(n.mesh),n.target=null,r_[n.poolKind].push(n))}var Q1={arrow:{color:16767392,count:8,speed:7,life:.35},hero:{color:9427199,count:12,speed:9,life:.45},castle:{color:16765024,count:10,speed:8,life:.4},frost:{color:10476799,count:14,speed:6,life:.6},cannon:{color:16752704,count:26,speed:14,life:.6}},SI={arrow:{color:16769184,count:3,size:1.2},hero:{color:16769184,count:3,size:1.2},castle:{color:16769184,count:3,size:1.2},frost:{color:10476799,count:3,size:1.2},cannon:{color:16752704,count:3,size:2.2}},e_={hero:{color:8048895,count:1,size:.45,life:.35,speed:.2},castle:{color:16765040,count:1,size:.45,life:.35,speed:.2},frost:{color:10476799,count:1,size:.45,life:.35,speed:.2}};function o_(n,e){let t=Q1[n]||Q1.arrow;be.emit("impact",e,t),n==="frost"?(be.emit("frost",e,{color:12577535,count:8}),Oe("frostHit")):n==="cannon"?(Oe("explosion"),be.emit("smoke",e,{color:6969930,count:8}),Xt(e,16752704,4,.35),Hn(.28,.3)):Oe("arrowHit")}function TI(n,e,t,i,s=!0,r="cannon",o=!1,a=!1){o_("cannon",n),Hn(.3,.35),Fa(n,e*1.6);let l=M.enemies;for(let c of l){if(c.dead||c.dying)continue;let u=Math.hypot(c.mesh.position.x-n.x,c.mesh.position.z-n.z);if(u<=e){let d=1-u/e*.45;_r(c,Math.round(t*d),{color:"#ffb060",showNumber:s,damageType:r,critical:o,armorPierce:a})}}be.emit("flash",n,{color:i,count:6,size:3.4})}function qa(n,e,t,i={}){if(!t||!t.mesh)return;let s=_I(n),r=s.mesh;if(r.position.copy(e),r.rotation.set(0,0,0),Ne.add(r),be.emit("flash",e,SI[s.poolKind]),s.kind=n,s.target=t,s.damage=i.damage||10,s.damageType=i.damageType||s.poolKind,s.critical=!!i.critical,s.armorPierce=!!i.armorPierce,s.speed=n==="cannon"?0:MI[n]||36,s.slow=i.slow||0,s.slowDur=i.slowDur||0,s.aoe=i.aoe||0,s.trailT=0,s.life=0,s.dir.set(0,0,1),n==="cannon"){s.start.copy(e),s.dest.copy(t.mesh.position),s.dest.y=0;let o=s.start.distanceTo(s.dest);s.t=0,s.duration=Math.max(.45,o/26),s.arcH=Math.max(4,o*.32),s.aoe=i.aoe||3.2,s.damage=i.damage||24}return M.projectiles.push(s),Kd.add(s),s}var Ul=new w,mo=new w,Ol=new w;function a_(n){if(Kd.size!==M.projectiles.length)for(let e of Kd)M.projectiles.indexOf(e)===-1&&Hl(e);for(let e=M.projectiles.length-1;e>=0;e--){let t=M.projectiles[e];if(t.kind==="cannon"){t.t+=n/t.duration;let s=Math.min(1,t.t);mo.lerpVectors(t.start,t.dest,s),mo.y=t.start.y+Math.sin(Math.PI*s)*t.arcH-s*(t.start.y-.25),t.mesh.position.copy(mo),t.mesh.rotation.x+=n*12,t.mesh.rotation.z+=n*7,t.trailT-=n,t.trailT<=0&&(t.trailT=.045,be.emit("smoke",mo,{color:9075304,count:1,size:1.4,life:.8,speed:.4}),be.emit("ember",mo,{color:16752704,count:1,size:.4,life:.4})),s>=1&&(TI(mo,t.aoe,t.damage,16752704,!0,t.damageType,t.critical,t.armorPierce),M.projectiles.splice(e,1),Hl(t));continue}t.life+=n;let i=t.target;if(i&&!i.dead&&!i.dying&&i.mesh.parent){let s=mo.copy(i.mesh.position);if(s.y=1*i.size,Ul.subVectors(s,t.mesh.position),Ul.length()<.55+.35*i.size){if(Ol.copy(s),Ol.y=1.1*i.size,_r(i,t.damage,{color:t.kind==="frost"?"#bfeaff":t.kind==="hero"?"#9fdcff":"#ffe0b0",critical:t.critical,armorPierce:t.armorPierce,damageType:t.damageType}),t.slow>0&&(i.slowUntil=M.elapsed+t.slowDur,i.slowFactor=i.isBoss?Math.max(j1,t.slow):t.slow,be.emit("frost",Ol,{color:10476799,count:5}),t.aoe>0))for(let o of M.enemies)o===i||o.dead||o.dying||o.mesh.position.distanceTo(i.mesh.position)<t.aoe&&(o.slowUntil=M.elapsed+t.slowDur*.8,o.slowFactor=Math.min(o.slowFactor,t.slow),o.isBoss&&(o.slowFactor=Math.max(j1,o.slowFactor)),be.emit("frost",o.mesh.position,{color:10476799,count:2}));o_(t.kind,Ol),be.emit("flash",Ol,{color:t.kind==="frost"?10476799:16770736,count:2,size:1.6}),M.projectiles.splice(e,1),Hl(t);continue}else Ul.normalize(),t.mesh.position.addScaledVector(Ul,t.speed*n),t.mesh.lookAt(s),t.dir.copy(Ul)}else if(t.mesh.position.addScaledVector(t.dir,t.speed*n),t.life>1.4){M.projectiles.splice(e,1),Hl(t);continue}t.trailT-=n,t.trailT<=0&&t.kind!=="arrow"&&(t.trailT=.035,be.emit("ember",t.mesh.position,e_[t.kind]||e_.castle)),t.mesh.position.length()>95&&(M.projectiles.splice(e,1),Hl(t))}}var Tr=new se({map:Rs(),normalMap:ca(),roughnessMap:la(),normalScale:new te(.8,.8),roughness:.94,color:14074016}),Sr=new se({map:Gi(),roughnessMap:Yc(),roughness:.88,color:14205088}),l_=new se({map:qc(),roughness:.8}),u_=new se({map:$c(),side:tt,roughness:.85}),Fl=new se({color:14198846,metalness:.9,roughness:.3}),zl=new se({map:Rs(),color:9076080,roughness:.9}),c_=1.24,wI=new Set([Tr,Sr,l_,u_,Fl,zl]);function h_(n){let e=new Set,t=new Set;for(let i of[...n.children])n.remove(i),i.traverse?.(s=>{s.geometry&&e.add(s.geometry),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>t.add(r))});e.forEach(i=>i.dispose()),t.forEach(i=>{wI.has(i)||i.dispose()})}function Ki(n){return n.castShadow=!0,n.receiveShadow=!0,n}function bI(n,e){n.updateWorldMatrix(!0,!0);let t=n.matrixWorld.clone().invert(),i=new Set(e.filter(Boolean)),s=new Map;n.traverse(a=>{if(!a.isMesh||Array.isArray(a.material)||a.material.transparent)return;for(let c=a;c&&c!==n;c=c.parent)if(i.has(c))return;let l=[a.material.uuid,a.castShadow,a.receiveShadow,a.renderOrder,a.layers.mask].join("|");s.has(l)||s.set(l,{material:a.material,meshes:[]}),s.get(l).meshes.push(a)});let r=new Set;for(let a of s.values()){if(a.meshes.length<2)continue;let l=a.meshes.map(h=>{let f=h.geometry.index?h.geometry.toNonIndexed():h.geometry.clone();if(f.applyMatrix4(t.clone().multiply(h.matrixWorld)),f.getAttribute("normal")||f.computeVertexNormals(),!f.getAttribute("uv")){let m=f.getAttribute("position").count;f.setAttribute("uv",new Le(new Float32Array(m*2),2))}return f.clearGroups(),f}),c=ss(l,!1);if(l.forEach(h=>h.dispose()),!c)continue;c.computeBoundingBox(),c.computeBoundingSphere();let u=a.meshes[0],d=new L(c,a.material);d.castShadow=u.castShadow,d.receiveShadow=u.receiveShadow,d.renderOrder=u.renderOrder,d.layers.mask=u.layers.mask,n.add(d);for(let h of a.meshes)r.add(h.geometry),h.removeFromParent()}let o=new Set;n.traverse(a=>{a.isMesh&&a.geometry&&o.add(a.geometry)}),r.forEach(a=>{o.has(a)||a.dispose()})}function AI(n){let e=n.group,t=n.level,i=_t.archer.color,s=2.4+t*.42,r=Ki(new L(new Te(.95,1.14,1.1,12),Tr));r.position.y=.55,e.add(r);let o=Ki(new L(new Te(1.12,1.12,.26,12),Tr));o.position.y=1.18,e.add(o);let a=new L(new Te(.62,.78,s,10),Sr);a.position.y=1.3+s/2,a.castShadow=!0,e.add(a);for(let m=0;m<4;m++){let x=m/4*Math.PI*2+Math.PI/4,g=new L(new Te(.055,.065,s*.9,5),Sr);g.position.set(Math.cos(x)*.72,1.3+s*.45,Math.sin(x)*.72),g.rotation.z=-Math.cos(x)*.06,g.rotation.x=Math.sin(x)*.06,g.castShadow=!0,e.add(g)}let l=1.3+s,c=Ki(new L(new Te(1,.98,.2,12),Sr));c.position.y=l,e.add(c);let u=new L(new Rt(.94,.035,5,20),Sr);u.rotation.x=Math.PI/2,u.position.y=l+.42,e.add(u);let d=new L(new Ke(1.22,1.35+t*.06,10),l_);d.position.y=l+.85+(1.35+t*.06)/2-.4,d.castShadow=!0,e.add(d);let h=t>=3?2:1,f=new Ve;f.position.y=l+.1,e.add(f);for(let m=0;m<h;m++){let x=m/h*Math.PI*2+.4,g=new Ve;g.position.set(Math.cos(x)*.55,0,Math.sin(x)*.55);let p=new L(new Jn(.11,.24,4,8),new se({color:3824170,roughness:.7}));p.position.y=.26,p.castShadow=!0,g.add(p);let v=new L(new qt(.085,8,8),new se({color:15251850,roughness:.65}));v.position.y=.5,g.add(v);let y=new L(new Ke(.1,.14,6),new se({color:2771486,roughness:.8}));y.position.y=.56,g.add(y);let E=new L(new Rt(.15,.018,5,10,Math.PI),Sr);E.position.set(.14,.28,.06),E.rotation.z=-Math.PI/2,g.add(E);let b=new Gt(new Pt({map:Zt(),color:i,transparent:!0,blending:$e,depthWrite:!1,opacity:.8}));b.scale.setScalar(.42),b.position.y=.62,g.add(b),f.add(g)}if(n.archers=f,t>=3){let m=new L(new Te(.035,.035,1.3,5),Sr);m.position.y=d.position.y+1.2,e.add(m);let x=new L(new un(.55,.34),u_);x.geometry.translate(.275,0,0),x.position.set(0,m.position.y+.4,0),e.add(x),n.flag=x}n.fireY=l+.9}function RI(n){let e=n.group,t=n.level,i=_t.cannon.color,s=Ki(new L(new Te(1.15,1.3,1.2,14),Tr));s.position.y=.6,e.add(s);let r=Ki(new L(new Te(1.22,1.22,.28,14),Tr));r.position.y=1.26,e.add(r);for(let f=0;f<6;f++){let m=f/6*Math.PI*2,x=new L(new Ut(.5,.62,.12),Tr);x.position.set(Math.cos(m)*1.14,.62,Math.sin(m)*1.14),x.rotation.y=-m+Math.PI/2,x.castShadow=!0,e.add(x)}let o=new Ve;o.position.y=1.55,e.add(o);let a=Ki(new L(new Ut(1.15,.55,1),Sr));a.position.y=.16,o.add(a);let l=Ki(new L(new Te(.55,.62,.22,10),Tr));l.position.y=.5,o.add(l);let c=new Ve;c.position.y=.28,o.add(c);let u=t>=4?[-.26,.26]:[0],d=1.3+t*.2;u.forEach(f=>{let m=new L(new Te(.16,.21,d,10),zl);m.rotation.x=Math.PI/2,m.position.set(f,0,d/2-.1),m.castShadow=!0,c.add(m);let x=new L(new Rt(.19,.035,5,10),Fl);x.position.set(f,0,d-.1),c.add(x);let g=new L(new Te(.18,.18,.12,10),Fl);g.rotation.x=Math.PI/2,g.position.set(f,0,d-.04),c.add(g)});let h=new Gt(new Pt({map:Zt(),color:i,transparent:!0,blending:$e,depthWrite:!1,opacity:.9}));h.position.y=.72,h.scale.setScalar(.9),o.add(h),n.turret=o,n.barrelGroup=c,n.barrelLen=d,n.recoil=0,n.fireY=1.85}function CI(n){let e=n.group,t=n.level,i=_t.frost.color,s=Ki(new L(new Te(.95,1.18,1.15,6),zl));s.position.y=.58,e.add(s);let r=Ki(new L(new Te(1,.95,.22,6),Tr));r.position.y=1.26,e.add(r);let o=2.15+t*.14,a=new se({color:1192516,emissive:i,emissiveIntensity:1.2,metalness:.3,roughness:.12,transparent:!0,opacity:.94}),l=new L(new fn(.62+t*.06,0),a);l.position.y=o,l.scale.y=1.9,l.castShadow=!0,e.add(l);let c=new Gt(new Pt({map:Zt(),color:i,transparent:!0,blending:$e,depthWrite:!1,opacity:.45}));c.position.y=o,c.scale.setScalar(2),e.add(c);let u=new L(new Rt(.95,.05,5,24),Fl);u.rotation.x=Math.PI/2,u.position.y=1.55,e.add(u);let d=new Ve;d.position.y=o,e.add(d);let h=t>=3?4:2;for(let f=0;f<h;f++){let m=f/h*Math.PI*2,x=new L(new fn(.16,0),new se({color:10476799,emissive:i,emissiveIntensity:1.4,metalness:.2,roughness:.2}));x.position.set(Math.cos(m)*(1+t*.05),0,Math.sin(m)*(1+t*.05)),x.scale.y=1.7,d.add(x)}n.crystal=l,n.shards=d,n.fireY=o;for(let f=0;f<4;f++){let m=f/4*Math.PI*2+.5,x=new L(new Ke(.16,.7+Math.random()*.4,5),new se({color:10476799,emissive:i,emissiveIntensity:.5,roughness:.25}));x.position.set(Math.cos(m)*1.28,.35,Math.sin(m)*1.28),x.rotation.z=Math.cos(m)*.3,x.rotation.x=-Math.sin(m)*.3,x.castShadow=!0,e.add(x)}}function PI(n){let e=n.group,t=n.level,i=_t.tesla.color,s=Ki(new L(new Te(1.1,1.3,.8,8),zl));s.position.y=.4,e.add(s);let r=2.4+t*.3,o=Ki(new L(new Te(.38,.7,r,4),zl));o.position.y=.8+r/2,o.rotation.y=Math.PI/4,e.add(o),[.45,.75].forEach(h=>{let f=new L(new Te(.62+(1-h)*.08,.66+(1-h)*.08,.09,4),Fl);f.position.y=.8+r*h,f.rotation.y=Math.PI/4,e.add(f)});let a=.8+r+.5,l=new L(new Qo(.34+t*.03,1),new se({color:2755130,emissive:i,emissiveIntensity:2.6,metalness:.4,roughness:.2,flatShading:!0}));l.position.y=a,e.add(l);let c=new Gt(new Pt({map:Zt(),color:i,transparent:!0,blending:$e,depthWrite:!1,opacity:.9}));c.position.y=a,c.scale.setScalar(1.9),e.add(c);let u=new Ve;u.position.y=a,e.add(u);let d=t>=3?2:1;for(let h=0;h<d;h++){let f=new L(new Rt(.62,.028,5,24),new se({color:2755130,emissive:i,emissiveIntensity:1.6}));f.rotation.x=Math.PI/2+h*.5,f.rotation.y=h*.8,u.add(f)}n.orb=l,n.rings=u,n.fireY=a}function d_(n){switch(h_(n.group),n.archers=null,n.turret=null,n.crystal=null,n.shards=null,n.orb=null,n.rings=null,n.flag=null,n.type){case"archer":AI(n);break;case"cannon":RI(n);break;case"frost":CI(n);break;case"tesla":PI(n);break}bI(n.group,[n.turret,n.archers,n.crystal,n.shards,n.orb,n.rings,n.flag,n.barrelGroup])}var ti=[];function II(n,e){let t=new Ve;t.position.set(n.x,0,n.z),t.scale.setScalar(.01),Ne.add(t);let i=_t[e],s=new L(new pn(.97,1,64),new ft({color:i.color,transparent:!0,opacity:.32,side:tt,depthWrite:!1,blending:$e}));s.rotation.x=-Math.PI/2,s.position.set(n.x,.08,n.z),s.visible=!1,Ne.add(s);let r={group:t,type:e,pad:n,level:1,cooldown:0,pos:new w(n.x,0,n.z),buildT:0,fireY:3,index:ti.length,idlePhase:Math.random()*Math.PI*2,targetMode:"first",specialization:null,invested:i.cost,rangeRing:s};return d_(r),ti.push(r),n.taken=!0,be.emit("dust",new w(n.x,.3,n.z),{color:11049088,count:16,speed:4}),Xt(new w(n.x,.15,n.z),16765024,3,.5),Oe("build"),r}function Ka(n=null){if(!M.running||M.paused||M.draftOpen)return!1;let e=n||yd(4.2)?.pad;if(!e||e.taken||!e.unlocked)return!1;let t=_t[M.buildType],i=Math.max(1,Math.round(t.cost*za(M)));if(M.gold<i)return Oe("warn"),!1;M.gold-=i,M.towersBuilt++;let s=II(e,M.buildType);return s.invested=i,Za(s),xt(0),!0}function fg(){return co(M.castleLevel,M.ascensionLevel)}function f_(n){let t=_t[n.type].levels[Math.min(4,n.level)-1];return wd(t,n.level)}function p_(n){let e=_t[n.type];return n.level<=3?e.upgradeCosts[n.level-1]:Math.round(e.upgradeCosts[2]*Math.pow(1.65,n.level-3))}function Za(n){M.selectedTower?.rangeRing&&(M.selectedTower.rangeRing.visible=!1),M.selectedTower=n||null,n&&(n.rangeRing.visible=!0,m_(n)),xt(0)}function m_(n){let e=f_(n).range;n.rangeRing.scale.setScalar(e)}function Zd(n){if(!n||!M.running||M.paused||M.draftOpen)return!1;if(n.level>=fg())return Oe("warn"),Dt("UPGRADE LOCKED",M.endless?"ASCEND THE ENDLESS SIEGE TO RAISE THE TOWER CAP":"UPGRADE THE CASTLE TO UNLOCK TOWER LEVEL "+(n.level+1),"warn"),!1;let e=p_(n);return M.gold<e?(Oe("warn"),!1):(M.gold-=e,n.invested+=e,n.level++,d_(n),m_(n),be.emit("magic",new w(n.pos.x,2,n.pos.z),{color:_t[n.type].color,count:14,speed:3}),Hn(.12,.2),Oe("upgrade"),LI(n,"LEVEL "+n.level,_t[n.type].color),n.level===3&&!n.specialization&&Dt("SPECIALIZATION READY","SELECT THE TOWER AND CHOOSE A SPECIAL POWER","hero"),xt(0),!0)}function mg(n,e){if(!n||n.level<3||n.specialization)return!1;let t=Vc[n.type];return t?.[e]?(n.specialization=e,n.rangeRing.material.color.setHex(16768906),be.emit("magic",new w(n.pos.x,2.5,n.pos.z),{color:16768906,count:22,speed:4}),Xt(new w(n.pos.x,.2,n.pos.z),16768906,4.5,.55),Wi(new w(n.pos.x,4.5,n.pos.z),t[e].name.toUpperCase(),{color:"#ffdf8a",size:1.1}),Oe("upgrade"),xt(0),!0):!1}function Ja(){if(!M.running||M.paused||M.draftOpen)return;let n=M.selectedTower,e=n?Math.hypot(Ce.position.x-n.pos.x,Ce.position.z-n.pos.z):1/0;for(let t of ti){let i=Math.hypot(Ce.position.x-t.pos.x,Ce.position.z-t.pos.z);i<5&&i<e&&(e=i,n=t)}n&&Zd(n)}var dg=["first","strong","last","close"];function g_(n){if(!n)return;let e=dg.indexOf(n.targetMode||"first");n.targetMode=dg[(e+1)%dg.length],Oe("uiClick"),xt(0)}function Jd(n){if(!n||!M.running||M.paused||M.draftOpen)return!1;let e=Math.floor(n.invested*.65);M.gold+=e,h_(n.group),Ne.remove(n.group),Ne.remove(n.rangeRing),n.rangeRing.geometry.dispose(),n.rangeRing.material.dispose(),n.pad.taken=!1;let t=ti.indexOf(n);return t!==-1&&ti.splice(t,1),M.selectedTower===n&&(M.selectedTower=null),be.emit("gold",new w(n.pos.x,2,n.pos.z),{color:16765514,count:12}),Wi(new w(n.pos.x,3,n.pos.z),"+"+e+"g",{color:"#ffd24a"}),Oe("coin"),xt(0),!0}function LI(n,e,t){let i="#"+t.toString(16).padStart(6,"0");Wi(new w(n.pos.x,4.2,n.pos.z),e,{color:i,size:1.2})}function wr(n){_t[n]&&(M.buildType=n,xt(0),Oe("uiClick"))}var Bl=0;function pg(n,e,t,i="close"){let s=null,r=-1/0,o=e*e;for(let a of M.enemies){if(a.dead||a.dying||t&&t.has(a))continue;let l=a.mesh.position.x-n.x,c=a.mesh.position.z-n.z,u=l*l+c*c;if(u>o)continue;let d=Math.hypot(a.mesh.position.x,a.mesh.position.z),h;switch(i){case"first":h=-d;break;case"last":h=d;break;case"strong":h=a.hp+(a.isBoss?1e4:0);break;default:h=-u}h>r&&(r=h,s=a)}return s}function $a(n,e=null){let t=Math.random()<VE(M),i=Td(M.ascensionLevel).towerDamage,s=e?.isBoss?e1(M):1;return{damage:Math.round(n*kE(M)*i*s*(t?2:1)),critical:t}}function DI(n,e,t,i=!1){let s=new Set([t]),r=e.chain+ZE(M)+(n.specialization==="overload"?2:0),o=n.specialization==="tempest"?11:8,a=new w(n.pos.x,n.fireY,n.pos.z),l=t,c=e.damage;for(let u=0;u<r&&l;u++){let d=new w(l.mesh.position.x,1.1*l.size,l.mesh.position.z);Id(a,d,_t.tesla.color,.16,.13,u===0?2:1),be.emit("flash",d,{color:13134847,count:2,size:1.6}),be.emit("magic",d,{color:13134847,count:4,speed:4}),_r(l,Math.round(c),{color:i?"#ffd24a":"#d9a4ff",showNumber:u===0}),n.specialization==="overload"&&Math.random()<.18&&(l.stunUntil=Math.max(l.stunUntil||0,M.elapsed+.45)),c*=.8,a=d;let h=null,f=o*o;for(let m of M.enemies){if(m.dead||m.dying||s.has(m))continue;let x=m.mesh.position.x-l.mesh.position.x,g=m.mesh.position.z-l.mesh.position.z,p=x*x+g*g;p<f&&(f=p,h=m)}h&&s.add(h),l=h}Oe("tesla"),n.orb&&n.orb.scale.setScalar(1.5)}function x_(n){Bl+=n;for(let s of ti){if(s.buildT<1){s.buildT=Math.min(1,s.buildT+n/.45);let f=s.buildT,m=1+.35*Math.sin(f*Math.PI)*(1-f*.5);s.group.scale.setScalar(Math.max(.01,f*m)*c_),s.buildT>=1&&s.group.scale.setScalar(c_)}let r=_t[s.type],o=Bl*1.6+s.idlePhase;if(s.type==="frost"){if(s.crystal){s.crystal.rotation.y+=n*.7;let f=1+Math.sin(o)*.03;s.crystal.scale.set(f,1.9*f,f)}s.shards&&(s.shards.rotation.y+=n*.9),Math.random()<n*3&&be.emit("frost",new w(s.pos.x,s.fireY,s.pos.z),{color:10476799,count:1,size:.5,life:1.2,speed:.4,up:.6})}else s.type==="tesla"?(s.rings&&(s.rings.rotation.y+=n*1.4,s.rings.rotation.x=Math.sin(Bl*.9+s.idlePhase)*.2),s.orb&&(s.orb.position.y=s.fireY+Math.sin(o)*.08,s.orb.scale.setScalar(Math.max(1,s.orb.scale.x-n*2.4)),s.orb.rotation.y+=n*1.2),Math.random()<n*2.2&&be.emit("spark",new w(s.pos.x,s.fireY,s.pos.z),{color:13134847,count:2,size:.4,speed:2})):s.type==="cannon"?(s.recoil>0&&(s.recoil=Math.max(0,s.recoil-n*4),s.barrelGroup.position.z=-s.recoil*.34),s.turret&&(s.turret.rotation.z=Math.sin(Bl*1.1+s.idlePhase)*.01)):s.type==="archer"&&s.flag&&(s.flag.rotation.y=Math.sin(Bl*2.1+s.idlePhase)*.3);if(s.cooldown-=n,s.cooldown>0)continue;let a=f_(s),l=a.range*(s.type==="cannon"?$E(M):1),c=pg(s.pos,l,null,s.targetMode);if(!c)continue;if(s.turret){let f=c.mesh.position.x-s.pos.x,m=c.mesh.position.z-s.pos.z;s.turret.rotation.y=Math.atan2(f,m)}if(s.archers){let f=c.mesh.position.x-s.pos.x,m=c.mesh.position.z-s.pos.z;s.archers.rotation.y=Math.atan2(f,m)}if(s.crystal){let f=c.mesh.position.x-s.pos.x,m=c.mesh.position.z-s.pos.z;s.crystal.rotation.z=Math.atan2(f,m)*.05}let u=new w(s.pos.x,s.fireY,s.pos.z),d=M.rallyTimer>0?ra.fireRate:1,h=a.fireRate/(GE(M)*d);switch(s.type){case"archer":{let f=s.specialization==="volley",m=s.specialization==="piercing"?1.35:f?.85:1,x=$a(a.damage*m,c),g=[c];if(f||s.level>=3){let p=new Set(g),v=f?3:2;for(;g.length<v;){let y=pg(s.pos,l,p,s.targetMode);if(!y)break;g.push(y),p.add(y)}}g.forEach((p,v)=>{let y=v===0?x:$a(a.damage*m*(f?1:.7),p);qa("arrow",u,p,{damage:y.damage,critical:y.critical,armorPierce:s.specialization==="piercing"})}),Oe("bow"),s.cooldown=h;break}case"cannon":{let f=s.specialization==="cluster",m=s.specialization==="siege"&&(c.isBoss||c.armor>0),x=f?.6:m?1.4:1,g=$a(a.damage*x,c),p=f?3:s.level>=4?2:1;for(let v=0;v<p;v++){let y=v===0?g:$a(a.damage*x*(f?1:.6),c);qa("cannon",u,c,{damage:y.damage,aoe:a.aoe,critical:y.critical})}s.recoil=1,be.emit("flash",new w(s.pos.x+Math.sin(s.turret.rotation.y)*s.barrelLen,s.fireY,s.pos.z+Math.cos(s.turret.rotation.y)*s.barrelLen),{color:16752704,count:4,size:2.4}),be.emit("smoke",u,{color:9075304,count:4,speed:1.5,up:2.5}),Hn(.1,.2),Oe("cannon"),s.cooldown=h;break}case"frost":{let f=s.specialization==="shatter"&&M.elapsed<(c.slowUntil||0),m=$a(a.damage*(f?1.6:1),c),x=s.specialization==="deepfreeze";qa("frost",u,c,{damage:m.damage,critical:m.critical,slow:Math.max(.25,a.slow*(x?.75:1)),slowDur:a.slowDur*(x?1.4:1)*KE(M),aoe:a.aoe||0}),s.crystal&&s.crystal.scale.set(1.25,1.9*1.25,1.25),Oe("frost"),s.cooldown=h;break}case"tesla":{let f=$a(a.damage*(s.specialization==="tempest"?1.25:1),c);DI(s,{...a,damage:f.damage},c,f.critical),s.cooldown=h;break}}}let e=yd(4.2);M.nearPad=e?{type:M.buildType,cost:Math.max(1,Math.round(_t[M.buildType].cost*za(M))),affordable:M.gold>=Math.max(1,Math.round(_t[M.buildType].cost*za(M)))}:null;let t=null,i=1/0;for(let s of ti){let r=Math.hypot(Ce.position.x-s.pos.x,Ce.position.z-s.pos.z);r<5&&r<i&&(i=r,t=s)}if(t){let s=_t[t.type],r=t.level>=fg(),o=!1,a=r?0:p_(t);M.nearTower={type:t.type,name:s.name,level:t.level,cost:a,maxed:r,locked:o,affordable:!r&&!o&&M.gold>=a,lockedLevel:fg()+1}}else M.nearTower=null}function y_(n){if(M.castleFireCooldown-=n,M.castleFireCooldown>0)return;let e=Is(M.castleLevel),{range:t,damage:i,fireRate:s}=e,r=null,o=t*t;for(let l of M.enemies){if(l.dead||l.dying)continue;let c=l.mesh.position.x*l.mesh.position.x+l.mesh.position.z*l.mesh.position.z;c<o&&(o=c,r=l)}if(!r)return;let a=new w(0,ba(),0);qa("castle",a,r,{damage:i}),Oe("bow"),be.emit("flash",a,{color:16765040,count:3,size:2}),M.castleFireCooldown=s}function gg(){let n=M.heroLevel===0?{...mv}:{...qr[M.heroLevel-1]};return{...n,speed:n.speed*XE(M),damage:Math.round(n.damage*WE(M)*M.profileHeroDamage*Td(M.ascensionLevel).heroDamage)}}function v_(n){if(M.heroFireCooldown-=n,M.heroFireCooldown>0)return;let e=gg(),t=fr(M.heroLevel),i=new w(Ce.position.x,t===0?1.8:t===1?2.7:3.5,Ce.position.z),s=pg(i,e.range);if(!s)return;let o=Math.atan2(s.mesh.position.x-Ce.position.x,s.mesh.position.z-Ce.position.z)-Ce.rotation.y;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;Ce.rotation.y+=o*.35,qa("hero",i,s,{damage:e.damage}),Oe("bow"),M.heroFireCooldown=e.fireRate}function kl(){if(!M.running||M.paused||M.draftOpen||M.abilityCooldown>0)return;let n=As.radius*jE(M),e=Math.round((As.damage+M.heroLevel*As.damagePerLevel)*qE(M)),t=new w(Ce.position.x,.3,Ce.position.z);M.abilityCooldown=As.cooldown*YE(M)*M.profileAbilityCooldown,Xt(t,16769162,n,.7),Xt(t,16777215,n*.6,.45),be.emit("nova",new w(t.x,1.2,t.z),{color:[16765024,16774336,16751168]}),be.emit("flash",new w(t.x,1.5,t.z),{color:16773312,count:8,size:5}),Xi("#ffe6a0",.3,.4),Hn(.65,.5),Cl(.08,.25),Oe("nova");let i=M.elapsed;for(let s of M.enemies){if(s.dead||s.dying)continue;let r=s.mesh.position.x-t.x,o=s.mesh.position.z-t.z,a=Math.hypot(r,o);if(a<=n&&(_r(s,e,{color:"#ffe08a"}),s.stunUntil=i+As.stun,!s.dying&&a>.01)){let l=As.pushback*(1-a/n*.5);s.mesh.position.x+=r/a*l,s.mesh.position.z+=o/a*l}}xt(0)}function Gl(){if(!M.running||M.paused||M.draftOpen||M.rallyCooldown>0)return!1;M.rallyCooldown=ra.cooldown*QE(M),M.rallyTimer=ra.duration;let n=new w(Ce.position.x,.25,Ce.position.z);Xt(n,16765802,22,.85),be.emit("magic",new w(n.x,1.4,n.z),{color:[16765802,16773296],count:30,speed:7});for(let e of ti)be.emit("magic",new w(e.pos.x,2.4,e.pos.z),{color:16765802,count:5,speed:2.5});return Xi("#ffd36a",.16,.35),Hn(.2,.3),Oe("horn"),Dt("WAR RALLY","ALL TOWERS FIRE 35% FASTER","hero"),xt(0),!0}function xg(){if(!M.running||M.paused||M.draftOpen||!M.endless||M.wave<Qn.unlockWave||M.ascensionLevel>=Qn.maxLevel)return!1;let n=Sd(M.ascensionLevel);if(M.gold<n)return Oe("warn"),!1;M.gold-=n,M.ascensionLevel++;let e=Td(M.ascensionLevel);return M.maxBaseHP+=Qn.hpPerLevel,M.baseHP=Math.min(M.maxBaseHP,M.baseHP+Qn.hpPerLevel),be.emit("nova",new w(0,3,0),{color:[16765802,10476799,16777215],count:40,speed:9}),Xt(new w(0,.3,0),16765802,20,1),Xi("#ffd36a",.25,.6),Oe("victory"),Dt("ENDLESS ASCENSION "+M.ascensionLevel,`TOWER CAP ${e.maxTowerLevel} \xB7 +${Qn.hpPerLevel} HP \xB7 +8% HERO DAMAGE`,"hero"),xt(0),!0}function Vl(){if(!M.running||M.paused||M.draftOpen)return;let n=M.castleLevel;if(n>=bs.length)return;let e=bs[n];if(M.gold<e.cost){Oe("warn");return}let t=Is(n);M.gold-=e.cost,M.castleLevel++;let i=Is(M.castleLevel),s=Math.max(0,i.maxHP-t.maxHP);M.maxBaseHP=i.maxHP,M.baseHP=Math.min(M.baseHP+s,M.maxBaseHP),M.incomeRate=Math.max(1,Math.round(i.income*ME(M.difficulty))),Ml(M.castleLevel);let r=_l(M.castleLevel);if(El(3066993),be.emit("magic",new w(0,4,0),{color:15777856,count:26,speed:6}),Xt(new w(0,.3,0),16765024,12,.8),r>0)for(let a of Ci)!a.unlocked||a.taken||a.ringIndex===1&&(Xt(new w(a.x,.2,a.z),8247392,3.4,.65),be.emit("magic",new w(a.x,1.2,a.z),{color:8247392,count:10,speed:3}));Oe("upgrade"),Wi(new w(0,ba()+1,0),i.name.toUpperCase(),{color:"#ffd24a",size:1.2});let o=r>0?`${i.feature} \xB7 ${r} TOWER PADS UNLOCKED`:i.feature;Dt(i.name.toUpperCase(),o,"hero"),xt(0)}function NI(){let n=Math.max(0,M.maxBaseHP-M.baseHP);return n<=0?0:Math.max(3,Math.ceil(Th*Math.min(1,n/sa)*Dd(M)))}function Wl(){if(!M.running||M.paused||M.draftOpen||M.baseHP>=M.maxBaseHP)return;let n=NI();if(M.gold<n){Oe("warn");return}let e=Math.min(sa+Nd(M),M.maxBaseHP-M.baseHP);M.gold-=n,M.baseHP+=e,El(3066993),be.emit("magic",new w(0,4,0),{color:6477898,count:16,speed:4}),Oe("repair"),Wi(new w(0,6,0),"+"+e,{color:"#62d84a",size:1.2}),xt(0)}function Xl(){if(!M.running||M.paused||M.draftOpen)return;let n=M.heroLevel;if(n>=qr.length)return;let e=qr[n];if(M.gold<e.cost){Oe("warn");return}M.gold-=e.cost,M.heroLevel++,Aa(M.heroLevel),be.emit("nova",new w(Ce.position.x,1.4,Ce.position.z),{color:[10476799,16777215],count:30,speed:7}),Xt(new w(Ce.position.x,.3,Ce.position.z),10476799,6,.6),Oe("upgrade");let t=Ti(M.heroLevel).toUpperCase();Dt("HERO UPGRADED",t+" \u2014 LEVEL "+M.heroLevel,"hero"),xt(0)}var Li=Object.create(null),M_=!1,jd=new hh,yg=new te,HI=new ri(new w(0,1,0),0),Os=new w,ls=new L(new pn(.32,.46,24),new ft({color:14217384,transparent:!0,opacity:.75,depthWrite:!1,side:tt}));ls.rotation.x=-Math.PI/2;ls.position.y=.09;ls.visible=!1;Ne.add(ls);function UI(n){if(!n)return!1;let e=(n.tagName||"").toLowerCase();return e==="input"||e==="textarea"||e==="select"||n.isContentEditable}function OI(n){return!!n?.closest?.('button, a, input, textarea, select, [role="dialog"]')}function BI(n){if(UI(n.target))return;let e=n.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright"," "].includes(e)&&n.preventDefault(),Li[e]=!0,!((e===" "||e==="enter")&&OI(n.target))&&!(!M.running||M.paused||M.draftOpen||M.gameOver||M.victory)&&!(n.repeat&&!["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(e)))switch(e){case"e":Ka();break;case"q":Ja();break;case"c":Vl();break;case"r":Wl();break;case"t":Xl();break;case" ":kl();break;case"g":Gl();break;case"f":{M.gameSpeed=M.gameSpeed===1?2:1,Oe("uiClick"),xt(0);break}case"enter":{let t=Ud(M);t&&(Dt("WAVE "+M.wave,"EARLY CALL \xB7 +"+t+" GOLD"),Oe("horn"),xt(0));break}case"x":M.selectedTower&&Jd(M.selectedTower);break;case"m":{let t=vd();Il(t);break}case"1":wr(Xr[0]);break;case"2":wr(Xr[1]);break;case"3":wr(Xr[2]);break;case"4":wr(Xr[3]);break}}function FI(n){Li[n.key.toLowerCase()]=!1}function E_(){for(let n in Li)Li[n]=!1;M.moveTarget=null,ls.visible=!1,Zi.clear(),Qd=!1,ja=0}function zI(n){let e=n.target.getBoundingClientRect();yg.x=(n.clientX-e.left)/e.width*2-1,yg.y=-((n.clientY-e.top)/e.height)*2+1,jd.setFromCamera(yg,Vt)}var Zi=new Map,ja=0,Qd=!1;function kI(n){if(n.button!==0||!M.running||M.paused||M.draftOpen)return;if(n.pointerType==="touch"&&(Zi.set(n.pointerId,{x:n.clientX,y:n.clientY}),n.target.setPointerCapture?.(n.pointerId),Zi.size>=2)){let[i,s]=[...Zi.values()];ja=Math.hypot(i.x-s.x,i.y-s.y),Qd=!0,M.moveTarget=null,ls.visible=!1;return}zI(n);let e=jd.intersectObjects(ti.map(i=>i.group),!0);if(e.length){let i=e[0].object;for(;i&&!ti.some(r=>r.group===i);)i=i.parent;let s=ti.find(r=>r.group===i);if(s){Za(s),Oe("uiClick");return}}let t=jd.intersectObjects(Ci.filter(i=>i.unlocked&&!i.taken).map(i=>i.disc),!1);if(t.length){let i=Ci.find(s=>s.disc===t[0].object);if(i&&Ka(i))return}if(jd.ray.intersectPlane(HI,Os)){let i=nl(M.castleLevel)-1,s=Math.hypot(Os.x,Os.z),r=s>i?i/s:1;M.moveTarget={x:Os.x*r,z:Os.z*r},ls.position.set(Os.x*r,.09,Os.z*r),ls.visible=!0,be.emit("dust",new w(Os.x*r,.15,Os.z*r),{color:13163680,count:3,speed:1.2,size:.5,life:.35}),Za(null)}}function GI(n){if(n.pointerType!=="touch"||!Zi.has(n.pointerId)||(Zi.set(n.pointerId,{x:n.clientX,y:n.clientY}),Zi.size<2||!Qd))return;let[e,t]=[...Zi.values()],i=Math.hypot(e.x-t.x,e.y-t.y);ja>0&&i>0&&(Mn.targetDist=Math.max(22,Math.min(58,Mn.targetDist*ja/i))),ja=i,n.preventDefault()}function __(n){n.pointerType==="touch"&&(Zi.delete(n.pointerId),Zi.size<2&&(ja=0),Zi.size===0&&(Qd=!1))}function S_(){if(M_)return;M_=!0,window.addEventListener("keydown",BI),window.addEventListener("keyup",FI),window.addEventListener("blur",E_);let n=document.getElementById("renderCanvas");n.addEventListener("pointerdown",kI),n.addEventListener("pointermove",GI,{passive:!1}),n.addEventListener("pointerup",__),n.addEventListener("pointercancel",__),n.style.touchAction="none",document.addEventListener("visibilitychange",()=>{document.hidden&&E_()})}function T_(n){if(!M.running||M.paused||M.draftOpen||M.gameOver||M.victory)return;let e=0,t=0;if((Li.w||Li.arrowup)&&(t-=1),(Li.s||Li.arrowdown)&&(t+=1),(Li.a||Li.arrowleft)&&(e-=1),(Li.d||Li.arrowright)&&(e+=1),e+=M.touchMove?.x||0,t+=M.touchMove?.z||0,e===0&&t===0&&M.moveTarget){if(e=M.moveTarget.x-Ce.position.x,t=M.moveTarget.z-Ce.position.z,Math.hypot(e,t)<.35){M.moveTarget=null,ls.visible=!1;return}}else if(e!==0||t!==0)M.moveTarget=null,ls.visible=!1;else return;let i=Math.hypot(e,t);if(i<1e-4)return;e/=i,t/=i;let s=gg().speed;Ce.position.x+=e*s*n,Ce.position.z+=t*s*n;let r=nl(M.castleLevel),o=Math.hypot(Ce.position.x,Ce.position.z);if(o>r){let u=r/o;Ce.position.x*=u,Ce.position.z*=u}let a=oo(Ce.position.x,Ce.position.z,.55);Ce.position.x=a.x,Ce.position.z=a.z,Ce.position.y=gr(a.x,a.z);let c=Math.atan2(e,t)-Ce.rotation.y;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;Ce.rotation.y+=c*Math.min(1,n*12),M.heroMoving=!0}var Mg=!1,rf=!1,I_=Bd();function Sg(n,e){try{let t=localStorage.getItem(n);return t===null?e:t==="true"}catch{return e}}function Eg(n,e){try{localStorage.setItem(n,String(e))}catch{}}function sf(n,e,t){document.documentElement.classList.toggle(n,t),Eg(e,t)}M.cameraShake=Sg("ironhold_camera_shake",!0);function L_(){if(Mg)return;let n=l1(I_.xp),e=document.getElementById("difficultySelect")?.value||"normal";M.difficulty=qn(e).key,M.totalWaves=mn,M.endless=!1,M.gold=qn(M.difficulty).startGold,M.profileHeroDamage=n.heroDamage,M.profileAbilityCooldown=n.abilityCooldown,M.gold+=n.gold,M.totalGoldEarned+=n.gold,rf=!1;try{L0(),eE()}catch(t){console.warn("Audio unavailable:",t)}Md(0),g1(),M.running=!0,M.elapsed=0,ka(M,1),Mg=!0,Dt("WAVE 1","DEFEND THE LAST BASTION"),Oe("horn"),xt(0)}function Tg(){rf||(u1(I_,M),rf=!0)}function VI(){Tg(),location.reload()}function of(){if(M.gameOver||M.victory)return;M.running=!1,M.gameOver=!0,Tg(),Oe("defeat"),Ed(.35),Hn(1,1),Xi("#ff3020",.45,1.2),Fh(1);let n=ba();for(let e=0;e<5;e++){let t=new w((Math.random()-.5)*8,2+Math.random()*n,(Math.random()-.5)*8);be.emit("impact",t,{color:[16744512,16760896],count:20,speed:10}),be.emit("smoke",t,{color:4866104,count:8,size:3})}Xt(new w(0,1,0),16728096,20,1.2),Dt("THE BASTION HAS FALLEN","THE KINGDOM IS LOST","danger"),setTimeout(M1,1900)}function D_(){if(M.endless||M.victory||M.gameOver)return;M.running=!1,M.victory=!0,Tg(),Oe("victory"),Md(0),Ed(.6),Xi("#ffe6a0",.35,1.4);let n=ba();for(let e=0;e<6;e++){let t=new w((Math.random()-.5)*16,3+Math.random()*10,(Math.random()-.5)*16);be.emit("confetti",t,{color:[16765024,10476799,16777215,16747069],count:18})}Xt(new w(0,1,0),16769162,24,1.4),Dt("VICTORY","THE WARLORD HAS FALLEN \u2014 THE REALM IS SAFE","hero"),setTimeout(E1,2400)}function N_(){M.victory&&(M.victory=!1,M.gameOver=!1,M.endless=!0,M.totalWaves=1/0,M.running=!0,M.paused=!1,M.draftOpen=!1,M.pendingBoons=[],rf=!1,ka(M,16),x1(),Dt("ENDLESS SIEGE","WAVE 16 \xB7 THE HORDE NEVER ENDS","boss"),Oe("horn"),xt(0))}function $l(){!M.running||M.gameOver||M.victory||M.draftOpen||(M.paused=!M.paused,y1(M.paused),Ed(M.paused?.25:1),Oe("uiClick"))}function _g(n){zE(M,n)&&(Oe("upgrade"),Dt("BLESSING CHOSEN","THE REALM REMEMBERS","hero"),xt(0))}function H_(){if(!M.running||M.paused||M.draftOpen)return;let n=Ud(M);n&&(Dt("WAVE "+M.wave,"EARLY CALL \xB7 +"+n+" GOLD"),Oe("horn"),xt(0))}function U_(){M.gameSpeed=M.gameSpeed===1?2:1,Oe("uiClick"),xt(0)}var O_=!1;function WI(){O_=M.paused,M.running&&!M.paused&&!M.draftOpen&&$l(),$0(!0)}function B_(){$0(!1)}function XI(){O_=M.paused,M.running&&!M.paused&&!M.draftOpen&&$l(),K0(!0)}function F_(){K0(!1)}p1({start:L_,restart:VI,resume:$l,upgradeCastle:Vl,repair:Wl,upgradeHero:Xl,mute:()=>{try{L0()}catch{}let n=vd();Il(n)},selectTower:n=>wr(n),toggleSpeed:U_,callWave:H_,chooseBoon:_g,startEndless:N_,ascend:xg,ability:kl,rally:Gl,chooseSpecialization:(n,e)=>mg(n,e),interact:()=>{M.nearPad?Ka():M.selectedTower?Zd(M.selectedTower):Ja()},upgradeSelectedTower:()=>{M.selectedTower&&Zd(M.selectedTower)},upgradeNearestTower:Ja,cycleTowerTarget:()=>{let n=M.selectedTower;n&&g_(n)},sellSelectedTower:()=>{M.selectedTower&&Jd(M.selectedTower)},openHelp:WI,closeHelp:B_,openSettings:XI,closeSettings:F_,getQuality:Bh,setQuality:n=>{Rm(n),xt(0)},setCameraShake:n=>{M.cameraShake=n,Eg("ironhold_camera_shake",n),G0(n)},setReducedMotion:n=>{M.reducedMotion=n,Eg("ironhold_reduced_motion",n),Pd(n)},setDifficulty:n=>{M.difficulty=qn(n).key;try{localStorage.setItem("ironhold_difficulty",M.difficulty)}catch{}let e=document.getElementById("difficultyDescription");e&&(e.textContent=qn(M.difficulty).description)},setHighContrast:sf.bind(null,"high-contrast","ironhold_high_contrast"),setTextSize:sf.bind(null,"large-text","ironhold_large_text"),setColorblind:sf.bind(null,"colorblind-safe","ironhold_colorblind")});var YI=[["high-contrast","ironhold_high_contrast","highContrastToggle"],["large-text","ironhold_large_text","textSizeToggle"],["colorblind-safe","ironhold_colorblind","colorblindToggle"]];for(let[n,e,t]of YI){let i=Sg(e,!1);sf(n,e,i);let s=document.getElementById(t);s&&(s.checked=i)}try{let n=localStorage.getItem("ironhold_difficulty");n&&qn(n).key===n&&(M.difficulty=n)}catch{}var w_=document.getElementById("difficultySelect");w_&&(w_.value=M.difficulty);var b_=document.getElementById("difficultyDescription");b_&&(b_.textContent=qn(M.difficulty).description);G0(M.cameraShake);var z_=window.matchMedia?.("(prefers-reduced-motion: reduce)");M.reducedMotion=Sg("ironhold_reduced_motion",!1)||!!z_?.matches;Pd(M.reducedMotion);var A_=document.getElementById("motionToggle");A_&&(A_.checked=M.reducedMotion);var R_=document.getElementById("shakeToggle");R_&&(R_.checked=M.cameraShake);z_?.addEventListener?.("change",n=>{M.reducedMotion=n.matches,Pd(n.matches);let e=document.getElementById("motionToggle");e&&(e.checked=n.matches)});S_();window.matchMedia?.("(pointer: coarse)").matches&&(Mn.targetDist=48,Mn.dist=48);m1();window.addEventListener("keydown",n=>{(n.key==="Escape"||n.key.toLowerCase()==="p")&&(document.getElementById("settingsScreen")?.classList.contains("show")?(n.preventDefault(),F_()):document.getElementById("helpScreen")?.classList.contains("show")?(n.preventDefault(),B_()):Mg&&(n.preventDefault(),$l()))});window.addEventListener("wheel",n=>{Mn.targetDist=Math.max(22,Math.min(58,Mn.targetDist+Math.sign(n.deltaY)*3.5))},{passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&M.running&&!M.paused&&!M.draftOpen&&$l()});Il(JM());xt();var vg=document.getElementById("loadingScreen");vg&&(setTimeout(()=>vg.classList.add("done"),450),setTimeout(()=>vg.remove(),1600));var C_=performance.now(),ql=0,Di=new w(0,2,0),ef=new w,tf=new w,qI=new w,P_={x:0,y:0,z:0};function k_(n){if(!(!M.running||M.paused||M.draftOpen||M.gameOver||M.victory)){if(M.elapsed+=n,M.timeInWave+=n,T_(n),M.incomeTimer+=n,M.incomeTimer>=kc&&(M.incomeTimer=0,M.incomeRate>0&&(M.gold+=M.incomeRate,M.totalGoldEarned+=M.incomeRate,be.emit("gold",new w(0,5,0),{color:16765514,count:5}),Oe("coin"))),M.waveActive&&(M.timeInWave+=n),M.intermission&&s1(M,n)){let e=["THE HORDE STIRS","THEY GROW BOLDER","HOLD THE LINE","STEEL YOUR NERVES","THE SIEGE DEEPENS"];Dt("WAVE "+M.wave,e[(M.wave-1)%e.length]),Oe("horn")}if(Z1(n),mE(n,M.elapsed),og(n,of),x_(n),y_(n),v_(n),a_(n),M.abilityCooldown>0&&(M.abilityCooldown=Math.max(0,M.abilityCooldown-n)),M.rallyCooldown>0&&(M.rallyCooldown=Math.max(0,M.rallyCooldown-n)),M.rallyTimer>0&&(M.rallyTimer=Math.max(0,M.rallyTimer-n)),M.comboTimer>0&&(M.comboTimer-=n,M.comboTimer<=0&&(M.combo=0)),Md(M.activeBoss||M.wave>=12?2:M.wave>=5?1:0),n1(M,M.enemies.length,Da(),Hs())){let e=i1(M);e&&(M.wave<M.totalWaves?Ld(M,20+M.wave*5):(M.draftOpen=!1,M.pendingBoons=[]),Dt("WAVE "+e.wave+" CLEARED",`+${e.gold} GOLD${e.noLeak?" \xB7 FLAWLESS DEFENSE":""}`,"hero"),Oe("victory"))}!M.endless&&M.wave>=M.totalWaves&&M.warlordKilled&&M.enemies.length===0&&Da()===0&&D_(),M.baseHP<=0&&of()}}function $I(n){if(M.running||M.paused){tf.set(Ce.position.x,1.6,Ce.position.z),Di.lerp(tf,1-Math.exp(-7*n)),Mn.dist+=(Mn.targetDist-Mn.dist)*(1-Math.exp(-6*n));let e=bv(qI),t=M.cameraShake&&!M.reducedMotion?V0(n):P_,i=M.reducedMotion?0:1,s=Math.sin(ql*.35)*.35*i,r=Math.cos(ql*.28)*.35*i;ef.set(Di.x+e.x+s,Di.y+e.y,Di.z+e.z+r),Vt.position.lerp(ef,1-Math.exp(-8*n)),Vt.position.x+=t.x,Vt.position.y+=t.y,Vt.position.z+=t.z,Vt.lookAt(Di.x+t.x*.4,Di.y+.6+t.y*.4,Di.z+t.z*.4)}else{let e=ql*.07+.6;tf.set(0,6.5,0),Di.lerp(tf,1-Math.exp(-2*n));let t=76;ef.set(Math.sin(e)*t*.72,Di.y+13,Math.cos(e)*t*.72),Vt.position.lerp(ef,1-Math.exp(-1.6*n));let i=M.cameraShake&&!M.reducedMotion?V0(n):P_;Vt.position.x+=i.x,Vt.position.y+=i.y*.5,Vt.position.z+=i.z,Vt.lookAt(Di.x,Di.y+2.5,Di.z)}}var nf=0;function Yl(n){ql+=n;let e=n*RE()*M.gameSpeed,t=e;for(;t>1e-5;){let i=Math.min(t,.03333333333333333);k_(i),t-=i}WM(e||n,ql),be.update(e||n),UE(n),Av(n),$I(n),wv(document.hidden?0:n),is.render(),nf+=n,nf>=.1&&(xt(nf),nf=0)}function G_(){requestAnimationFrame(G_);let n=performance.now(),e=Math.min((n-C_)/1e3,.25);C_=n,!document.hidden&&Yl(e)}G_();window.__ironhold={GameState:M,spawnEnemy:Y1,spawnMiniBoss:ig,spawnRoundBoss:sg,spawnWarlord:rg,spawnBoatGroup:$i,applyDamage:_r,updateEnemies:()=>og(1/60,of),setBuildType:wr,attemptBuild:Ka,upgradeNearestTower:Ja,selectTower:Za,useHeroAbility:kl,useRallyAbility:Gl,chooseTowerSpecialization:mg,buyEndlessAscension:xg,upgradeCastle:Vl,repairBase:Wl,upgradeHero:Xl,towers:ti,boats:{get count(){return Da()},get pending(){return Hs()},clear:fE,spawn:$i},world:{get islandScale(){return GM()},get islandRadius(){return VM()},pads:Ci,buildZones:I0,refreshBuildPads:_l,resolveCastleCollision:oo,castleGroundHeightAt:gr},progression:{islandScaleForLevel:jr,islandRadiusForLevel:tl,buildZonesForLevel:Gh,castleStatsForLevel:Is,heroStageForLevel:fr,heroStageName:Ti,spawnIntervalForWave:Wh,spawnCountForWave:il,worldBoundsForLevel:nl,boatSpawnRadiusForLevel:Vh,boatLandingRadiusForLevel:ga},setCastleLevel(n){let e=Is(n);M.castleLevel=e.level,M.maxBaseHP=e.maxHP,M.baseHP=e.maxHP,M.incomeRate=e.income,Ml(e.level);let t=_l(e.level);return xt(0),{...e,unlockedPads:t}},setHeroLevel(n){return M.heroLevel=Math.max(0,Math.min(6,Math.floor(n||0))),Aa(M.heroLevel),xt(0),{level:M.heroLevel,stage:fr(M.heroLevel),name:Ti(M.heroLevel)}},setGold(n){return M.gold=Math.max(0,Math.floor(n||0)),xt(0),M.gold},setWave(n){return ka(M,n),xt(0),M.wave},callWave:H_,toggleSpeed:U_,chooseBoon:_g,startEndless:N_,setQuality:Rm,getQuality:Bh,qualityInfo:pa,startGame:L_,triggerVictory:D_,triggerGameOver:of,tick:Yl,advance:n=>{let e=Math.max(1,Math.round(n*60));for(let t=0;t<e;t++)Yl(1/60);return{elapsed:M.elapsed,wave:M.wave,enemies:M.enemies.length,boats:Da(),pending:Hs()}},advanceSim:n=>window.__ironhold.advance(n),simulateFor:(n,e=!1)=>{let t=Math.max(0,Math.round(n*60));for(let i=0;i<t&&(k_(1/60),e&&M.draftOpen&&_g(M.pendingBoons[0]),!(M.gameOver||M.victory));i++);return xt(0),{elapsed:M.elapsed,wave:M.wave,intermission:M.intermission,enemies:M.enemies.length,boats:Da(),hp:M.baseHP,gold:M.gold,commander:M.commanderLevel,gameOver:M.gameOver,victory:M.victory}},snapshot:(n=900,e=.7)=>{Yl(1/60);let t=document.getElementById("renderCanvas"),i=Math.min(1,n/t.width),s=document.createElement("canvas");return s.width=Math.round(t.width*i),s.height=Math.round(t.height*i),s.getContext("2d").drawImage(t,0,0,s.width,s.height),s.toDataURL("image/jpeg",e)},probe:()=>{let n=vt.info.autoReset;vt.info.autoReset=!1,vt.info.reset(),Yl(1/60);let e={...vt.info.render};vt.info.autoReset=n;let t=document.getElementById("renderCanvas"),i=document.createElement("canvas");i.width=64,i.height=44;let s=i.getContext("2d");s.drawImage(t,0,0,64,44);let r=s.getImageData(0,0,64,44).data,o=0,a=0;for(let c=0;c<r.length;c+=4){let u=(r[c]+r[c+1]+r[c+2])/3;o+=u,u>a&&(a=u)}let l=[r[1440*4],r[1440*4+1],r[1440*4+2]];return{avg:+(o/2816).toFixed(2),max:+a.toFixed(1),center:l,cam:Vt.position.toArray().map(c=>+c.toFixed(2)),camNaN:Vt.position.toArray().some(Number.isNaN),hero:Ce.position.toArray().map(c=>+c.toFixed(2)),drawCalls:e.calls,triangles:e.triangles,points:e.points,geometries:vt.info.memory.geometries,textures:vt.info.memory.textures,programs:vt.info.programs.length,quality:Bh()}},camera:Vt,renderer:vt,scene:Ne,camState:Mn,get hero(){return Ce}};
