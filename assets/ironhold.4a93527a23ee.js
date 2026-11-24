var ME=0,P0=1,_E=2;var Sx=1,Zf=2,os=3,Bn=0,wn=1,ot=2;var Gi=0,xo=1,$e=2,I0=3,L0=4,EE=5,gr=100,SE=101,TE=102,D0=103,N0=104,wE=200,bE=201,AE=202,RE=203,sf=204,rf=205,CE=206,PE=207,IE=208,LE=209,DE=210,NE=211,HE=212,UE=213,OE=214,BE=0,FE=1,zE=2,Zc=3,kE=4,GE=5,VE=6,WE=7,Tx=0,XE=1,YE=2,Is=0,$f=1,Jf=2,jf=3,nl=4,qE=5,Qf=6,H0="attached",KE="detached",wx=300,Mo=301,_o=302,of=303,af=304,Pu=306,bi=1e3,$n=1001,Oa=1002,en=1003,$c=1004;var Pa=1005;var Dn=1006,ep=1007;var Ns=1008;var Ls=1009,ZE=1010,$E=1011,tp=1012,bx=1013,Cs=1014,as=1015,Ai=1016,Ax=1017,Rx=1018,vr=1020,JE=1021,ri=1023,jE=1024,QE=1025,Mr=1026,Eo=1027,e1=1028,Cx=1029,t1=1030,Px=1031,Ix=1033,Md=33776,_d=33777,Ed=33778,Sd=33779,U0=35840,O0=35841,B0=35842,F0=35843,Lx=36196,z0=37492,k0=37496,G0=37808,V0=37809,W0=37810,X0=37811,Y0=37812,q0=37813,K0=37814,Z0=37815,$0=37816,J0=37817,j0=37818,Q0=37819,eg=37820,tg=37821,Td=36492,ng=36494,ig=36495,n1=36283,sg=36284,rg=36285,og=36286;var So=2300,Er=2301,wd=2302,ag=2400,lg=2401,cg=2402,i1=2500;var Dx=0,Iu=1,il=2,Nx=3e3,_r=3001,s1=3200,r1=3201,Hx=0,o1=1,oi="",Et="srgb",nn="srgb-linear",np="display-p3",Lu="display-p3-linear",Jc="linear",Ct="srgb",jc="rec709",Qc="p3";var Yr=7680;var ug=519,a1=512,l1=513,c1=514,Ux=515,u1=516,h1=517,d1=518,f1=519,Ba=35044,Ws=35048;var hg="300 es",lf=1035,ls=2e3,eu=2001,Hs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dg=1234567,Ia=Math.PI/180,To=180/Math.PI;function ai(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function tn(n,e,t){return Math.max(e,Math.min(t,n))}function ip(n,e){return(n%e+e)%e}function p1(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function m1(n,e,t){return n!==e?(t-n)/(e-n):0}function La(n,e,t){return(1-t)*n+t*e}function g1(n,e,t,i){return La(n,e,1-Math.exp(-t*i))}function x1(n,e=1){return e-Math.abs(ip(n,e*2)-e)}function y1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function v1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function M1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function _1(n,e){return n+Math.random()*(e-n)}function E1(n){return n*(.5-Math.random())}function S1(n){n!==void 0&&(dg=n);let e=dg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function T1(n){return n*Ia}function w1(n){return n*To}function cf(n){return(n&n-1)===0&&n!==0}function b1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function A1(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ki(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var fs={DEG2RAD:Ia,RAD2DEG:To,generateUUID:ai,clamp:tn,euclideanModulo:ip,mapLinear:p1,inverseLerp:m1,lerp:La,damp:g1,pingpong:x1,smoothstep:y1,smootherstep:v1,randInt:M1,randFloat:_1,randFloatSpread:E1,seededRandom:S1,degToRad:T1,radToDeg:w1,isPowerOfTwo:cf,ceilPowerOfTwo:b1,floorPowerOfTwo:tu,setQuaternionFromProperEuler:A1,normalize:At,denormalize:ki},J=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],M=s[1],y=s[4],_=s[7],D=s[2],b=s[5],C=s[8];return r[0]=o*x+a*M+l*D,r[3]=o*m+a*y+l*b,r[6]=o*p+a*_+l*C,r[1]=c*x+h*M+u*D,r[4]=c*m+h*y+u*b,r[7]=c*p+h*_+u*C,r[2]=d*x+f*M+g*D,r[5]=d*m+f*y+g*b,r[8]=d*p+f*_+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bd.makeScale(e,t)),this}rotate(e){return this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bd=new rt;function Ox(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function R1(){let n=Fa("canvas");return n.style.display="block",n}var fg={};function Da(n){n in fg||(fg[n]=!0,console.warn(n))}var pg=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mg=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mc={[nn]:{transfer:Jc,primaries:jc,toReference:n=>n,fromReference:n=>n},[Et]:{transfer:Ct,primaries:jc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Lu]:{transfer:Jc,primaries:Qc,toReference:n=>n.applyMatrix3(mg),fromReference:n=>n.applyMatrix3(pg)},[np]:{transfer:Ct,primaries:Qc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(mg),fromReference:n=>n.applyMatrix3(pg).convertLinearToSRGB()}},C1=new Set([nn,Lu]),yt={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!C1.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=mc[e].toReference,s=mc[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return mc[n].primaries},getTransfer:function(n){return n===oi?Jc:mc[n].transfer}};function yo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ad(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qr,nu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qr===void 0&&(qr=Fa("canvas")),qr.width=e.width,qr.height=e.height;let i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yo(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yo(t[i]/255)*255):t[i]=yo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},P1=0,iu=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rd(s[o].image)):r.push(Rd(s[o]))}else r=Rd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Rd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var I1=0,mn=class n extends Hs{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=$n,s=$n,r=Dn,o=Ns,a=ri,l=Ls,c=n.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=ai(),this.name="",this.source=new iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===_r?Et:oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bi:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bi:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?_r:Nx}set encoding(e){Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_r?Et:oi}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=wx;mn.DEFAULT_ANISOTROPY=1;var St=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(f+1)/2,D=(p+1)/2,b=(h+d)/4,C=(u+x)/4,F=(g+m)/4;return y>_&&y>D?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=b/i,r=C/i):_>D?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=b/s,r=F/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=C/r,s=F/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uf=class extends Hs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Da("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_r?Et:oi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new iu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends uf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},su=class extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hf=class extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ri=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let D=Math.sqrt(y),b=Math.atan2(D,p*M);m=Math.sin(m*b)/D,a=Math.sin(a*b)/D}let _=a*M;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cd=new E,gg=new Ri,Fn=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Si):Si.fromBufferAttribute(r,o),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gc.copy(i.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),xc.subVectors(this.max,Ma),Kr.subVectors(e.a,Ma),Zr.subVectors(e.b,Ma),$r.subVectors(e.c,Ma),Ts.subVectors(Zr,Kr),ws.subVectors($r,Zr),hr.subVectors(Kr,$r);let t=[0,-Ts.z,Ts.y,0,-ws.z,ws.y,0,-hr.z,hr.y,Ts.z,0,-Ts.x,ws.z,0,-ws.x,hr.z,0,-hr.x,-Ts.y,Ts.x,0,-ws.y,ws.x,0,-hr.y,hr.x,0];return!Pd(t,Kr,Zr,$r,xc)||(t=[1,0,0,0,1,0,0,0,1],!Pd(t,Kr,Zr,$r,xc))?!1:(yc.crossVectors(Ts,ws),t=[yc.x,yc.y,yc.z],Pd(t,Kr,Zr,$r,xc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},es=[new E,new E,new E,new E,new E,new E,new E,new E],Si=new E,gc=new Fn,Kr=new E,Zr=new E,$r=new E,Ts=new E,ws=new E,hr=new E,Ma=new E,xc=new E,yc=new E,dr=new E;function Pd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){dr.fromArray(n,r);let a=s.x*Math.abs(dr.x)+s.y*Math.abs(dr.y)+s.z*Math.abs(dr.z),l=e.dot(dr),c=t.dot(dr),h=i.dot(dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var L1=new Fn,_a=new E,Id=new E,xn=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):L1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);let t=_a.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_a,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Id)),this.expandByPoint(_a.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ts=new E,Ld=new E,vc=new E,bs=new E,Dd=new E,Mc=new E,Nd=new E,Sr=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ld.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),bs.copy(this.origin).sub(Ld);let r=e.distanceTo(t)*.5,o=-this.direction.dot(vc),a=bs.dot(this.direction),l=-bs.dot(vc),c=bs.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ld).addScaledVector(vc,d),f}intersectSphere(e,t){ts.subVectors(e.center,this.origin);let i=ts.dot(this.direction),s=ts.dot(ts)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,i,s,r){Dd.subVectors(t,e),Mc.subVectors(i,e),Nd.crossVectors(Dd,Mc);let o=this.direction.dot(Nd),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bs.subVectors(this.origin,e);let l=a*this.direction.dot(Mc.crossVectors(bs,Mc));if(l<0)return null;let c=a*this.direction.dot(Dd.cross(bs));if(c<0||l+c>o)return null;let h=-a*bs.dot(Nd);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Jr.setFromMatrixColumn(e,0).length(),r=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D1,e,N1)}lookAt(e,t,i){let s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),As.crossVectors(i,qn),As.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),As.crossVectors(i,qn)),As.normalize(),_c.crossVectors(qn,As),s[0]=As.x,s[4]=_c.x,s[8]=qn.x,s[1]=As.y,s[5]=_c.y,s[9]=qn.y,s[2]=As.z,s[6]=_c.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],y=i[7],_=i[11],D=i[15],b=s[0],C=s[4],F=s[8],T=s[12],A=s[1],z=s[5],X=s[9],ne=s[13],S=s[2],I=s[6],L=s[10],H=s[14],O=s[3],k=s[7],$=s[11],j=s[15];return r[0]=o*b+a*A+l*S+c*O,r[4]=o*C+a*z+l*I+c*k,r[8]=o*F+a*X+l*L+c*$,r[12]=o*T+a*ne+l*H+c*j,r[1]=h*b+u*A+d*S+f*O,r[5]=h*C+u*z+d*I+f*k,r[9]=h*F+u*X+d*L+f*$,r[13]=h*T+u*ne+d*H+f*j,r[2]=g*b+x*A+m*S+p*O,r[6]=g*C+x*z+m*I+p*k,r[10]=g*F+x*X+m*L+p*$,r[14]=g*T+x*ne+m*H+p*j,r[3]=M*b+y*A+_*S+D*O,r[7]=M*C+y*z+_*I+D*k,r[11]=M*F+y*X+_*L+D*$,r[15]=M*T+y*ne+_*H+D*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,_=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,D=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,b=t*M+i*y+s*_+r*D;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/b;return e[0]=M*C,e[1]=(x*d*r-u*m*r-x*s*f+i*m*f+u*s*p-i*d*p)*C,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*C,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*C,e[4]=y*C,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*C,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*C,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*C,e[8]=_*C,e[9]=(g*u*r-h*x*r-g*i*f+t*x*f+h*i*p-t*u*p)*C,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*C,e[12]=D*C,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*m+t*u*m)*C,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*C,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,M=l*c,y=l*h,_=l*u,D=i.x,b=i.y,C=i.z;return s[0]=(1-(x+p))*D,s[1]=(f+_)*D,s[2]=(g-y)*D,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(d+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+y)*C,s[9]=(m-M)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Jr.set(s[0],s[1],s[2]).length(),o=Jr.set(s[4],s[5],s[6]).length(),a=Jr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ti.copy(this);let c=1/r,h=1/o,u=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=h,Ti.elements[5]*=h,Ti.elements[6]*=h,Ti.elements[8]*=u,Ti.elements[9]*=u,Ti.elements[10]*=u,t.setFromRotationMatrix(Ti),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ls){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===ls)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===eu)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ls){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,f=(i+s)*h,g,x;if(a===ls)g=(o+r)*u,x=-2*u;else if(a===eu)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Jr=new E,Ti=new Ye,D1=new E(0,0,0),N1=new E(1,1,1),As=new E,_c=new E,qn=new E,xg=new Ye,yg=new Ri,ru=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yg.setFromEuler(this),this.setFromQuaternion(yg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ru.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},H1=0,vg=new E,jr=new Ri,ns=new Ye,Ec=new E,Ea=new E,U1=new E,O1=new Ri,Mg=new E(1,0,0),_g=new E(0,1,0),Eg=new E(0,0,1),B1={type:"added"},F1={type:"removed"},Pt=class n extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new E,t=new ru,i=new Ri,s=new E(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new rt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Mg,e)}rotateY(e){return this.rotateOnAxis(_g,e)}rotateZ(e){return this.rotateOnAxis(Eg,e)}translateOnAxis(e,t){return vg.copy(e).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mg,e)}translateY(e){return this.translateOnAxis(_g,e)}translateZ(e){return this.translateOnAxis(Eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ec.copy(e):Ec.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt(Ea,Ec,this.up):ns.lookAt(Ec,Ea,this.up),this.quaternion.setFromRotationMatrix(ns),s&&(ns.extractRotation(s.matrixWorld),jr.setFromRotationMatrix(ns),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(B1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F1)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ns.multiply(e.parent.matrixWorld)),e.applyMatrix4(ns),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,U1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,O1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new E(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=new E,is=new E,Hd=new E,ss=new E,Qr=new E,eo=new E,Sg=new E,Ud=new E,Od=new E,Bd=new E,Sc=!1,yr=class n{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wi.subVectors(e,t),s.cross(wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wi.subVectors(s,t),is.subVectors(i,t),Hd.subVectors(e,t);let o=wi.dot(wi),a=wi.dot(is),l=wi.dot(Hd),c=is.dot(is),h=is.dot(Hd),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getUV(e,t,i,s,r,o,a,l){return Sc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sc=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ss.x),l.addScaledVector(o,ss.y),l.addScaledVector(a,ss.z),l)}static isFrontFacing(e,t,i,s){return wi.subVectors(i,t),is.subVectors(e,t),wi.cross(is).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),is.subVectors(this.a,this.b),wi.cross(is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Sc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sc=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Qr.subVectors(s,i),eo.subVectors(r,i),Ud.subVectors(e,i);let l=Qr.dot(Ud),c=eo.dot(Ud);if(l<=0&&c<=0)return t.copy(i);Od.subVectors(e,s);let h=Qr.dot(Od),u=eo.dot(Od);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Qr,o);Bd.subVectors(e,r);let f=Qr.dot(Bd),g=eo.dot(Bd);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(eo,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Sg.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Sg,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(Qr,o).addScaledVector(eo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Fd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=yt.workingColorSpace){if(e=ip(e,1),t=tn(t,0,1),i=tn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Fd(o,r,e+1/3),this.g=Fd(o,r,e),this.b=Fd(o,r,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let i=Bx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}copyLinearToSRGB(e){return this.r=Ad(e.r),this.g=Ad(e.g),this.b=Ad(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return yt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(tn(Tn.r*255,0,255))*65536+Math.round(tn(Tn.g*255,0,255))*256+Math.round(tn(Tn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Tn.copy(this),t);let i=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Et){yt.fromWorkingColorSpace(Tn.copy(this),e);let t=Tn.r,i=Tn.g,s=Tn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Rs),this.setHSL(Rs.h+e,Rs.s+t,Rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Rs),e.getHSL(Tc);let i=La(Rs.h,Tc.h,t),s=La(Rs.s,Tc.s,t),r=La(Rs.l,Tc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new pe;pe.NAMES=Bx;var z1=0,zn=class extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=xo,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=rf,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sf&&(i.blendSrc=this.blendSrc),this.blendDst!==rf&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ft=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var jt=new E,wc=new J,gt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ba,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=as,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wc.fromBufferAttribute(this,t),wc.applyMatrix3(e),this.setXY(t,wc.x,wc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ba&&(e.usage=this.usage),e}};var ou=class extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var au=class extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Re=class extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var k1=0,si=new Ye,zd=new Pt,to=new E,Kn=new Fn,Sa=new Fn,hn=new E,vt=class n extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ox(e)?au:ou)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,i){return si.makeTranslation(e,t,i),this.applyMatrix4(si),this}scale(e,t,i){return si.makeScale(e,t,i),this.applyMatrix4(si),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Re(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(e){let i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Sa.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Kn.min,Sa.min),Kn.expandByPoint(hn),hn.addVectors(Kn.max,Sa.max),Kn.expandByPoint(hn)):(Kn.expandByPoint(Sa.min),Kn.expandByPoint(Sa.max))}Kn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(to.fromBufferAttribute(e,c),hn.add(to)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new E,h[A]=new E;let u=new E,d=new E,f=new E,g=new J,x=new J,m=new J,p=new E,M=new E;function y(A,z,X){u.fromArray(s,A*3),d.fromArray(s,z*3),f.fromArray(s,X*3),g.fromArray(o,A*2),x.fromArray(o,z*2),m.fromArray(o,X*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let ne=1/(x.x*m.y-m.x*x.y);isFinite(ne)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(ne),M.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(ne),c[A].add(p),c[z].add(p),c[X].add(p),h[A].add(M),h[z].add(M),h[X].add(M))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let A=0,z=_.length;A<z;++A){let X=_[A],ne=X.start,S=X.count;for(let I=ne,L=ne+S;I<L;I+=3)y(i[I+0],i[I+1],i[I+2])}let D=new E,b=new E,C=new E,F=new E;function T(A){C.fromArray(r,A*3),F.copy(C);let z=c[A];D.copy(z),D.sub(C.multiplyScalar(C.dot(z))).normalize(),b.crossVectors(F,z);let ne=b.dot(h[A])<0?-1:1;l[A*4]=D.x,l[A*4+1]=D.y,l[A*4+2]=D.z,l[A*4+3]=ne}for(let A=0,z=_.length;A<z;++A){let X=_[A],ne=X.start,S=X.count;for(let I=ne,L=ne+S;I<L;I+=3)T(i[I+0]),T(i[I+1]),T(i[I+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tg=new Ye,fr=new Sr,bc=new xn,wg=new E,no=new E,io=new E,so=new E,kd=new E,Ac=new E,Rc=new J,Cc=new J,Pc=new J,bg=new E,Ag=new E,Rg=new E,Ic=new E,Lc=new E,N=class extends Pt{constructor(e=new vt,t=new ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ac.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(kd.fromBufferAttribute(u,e),o?Ac.addScaledVector(kd,h):Ac.addScaledVector(kd.sub(t),h))}t.add(Ac)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(r),fr.copy(e.ray).recast(e.near),!(bc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(bc,wg)===null||fr.origin.distanceToSquared(wg)>(e.far-e.near)**2))&&(Tg.copy(r).invert(),fr.copy(e.ray).applyMatrix4(Tg),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,D=y;_<D;_+=3){let b=a.getX(_),C=a.getX(_+1),F=a.getX(_+2);s=Dc(this,p,e,i,c,h,u,b,C,F),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=Dc(this,o,e,i,c,h,u,M,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,D=y;_<D;_+=3){let b=_,C=_+1,F=_+2;s=Dc(this,p,e,i,c,h,u,b,C,F),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=m,y=m+1,_=m+2;s=Dc(this,o,e,i,c,h,u,M,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function G1(n,e,t,i,s,r,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Bn,a),l===null)return null;Lc.copy(a),Lc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Lc);return c<t.near||c>t.far?null:{distance:c,point:Lc.clone(),object:n}}function Dc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,no),n.getVertexPosition(l,io),n.getVertexPosition(c,so);let h=G1(n,e,t,i,no,io,so,Ic);if(h){s&&(Rc.fromBufferAttribute(s,a),Cc.fromBufferAttribute(s,l),Pc.fromBufferAttribute(s,c),h.uv=yr.getInterpolation(Ic,no,io,so,Rc,Cc,Pc,new J)),r&&(Rc.fromBufferAttribute(r,a),Cc.fromBufferAttribute(r,l),Pc.fromBufferAttribute(r,c),h.uv1=yr.getInterpolation(Ic,no,io,so,Rc,Cc,Pc,new J),h.uv2=h.uv1),o&&(bg.fromBufferAttribute(o,a),Ag.fromBufferAttribute(o,l),Rg.fromBufferAttribute(o,c),h.normal=yr.getInterpolation(Ic,no,io,so,bg,Ag,Rg,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new E,materialIndex:0};yr.getNormal(no,io,so,u.normal),h.face=u}return h}var Ut=class n extends vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2));function g(x,m,p,M,y,_,D,b,C,F,T){let A=_/C,z=D/F,X=_/2,ne=D/2,S=b/2,I=C+1,L=F+1,H=0,O=0,k=new E;for(let $=0;$<L;$++){let j=$*z-ne;for(let le=0;le<I;le++){let K=le*A-X;k[x]=K*M,k[m]=j*y,k[p]=S,c.push(k.x,k.y,k.z),k[x]=0,k[m]=0,k[p]=b>0?1:-1,h.push(k.x,k.y,k.z),u.push(le/C),u.push(1-$/F),H+=1}}for(let $=0;$<F;$++)for(let j=0;j<C;j++){let le=d+j+I*$,K=d+j+I*($+1),se=d+(j+1)+I*($+1),ye=d+(j+1)+I*$;l.push(le,K,ye),l.push(K,se,ye),O+=6}a.addGroup(f,O,T),f+=O,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function wo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ln(n){let e={};for(let t=0;t<n.length;t++){let i=wo(n[t]);for(let s in i)e[s]=i[s]}return e}function V1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fx(n){return n.getRenderTarget()===null?n.outputColorSpace:yt.workingColorSpace}var Jn={clone:wo,merge:Ln},W1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W1,this.fragmentShader=X1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=V1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},lu=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ls}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$t=class extends lu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ro=-90,oo=1,df=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(ro,oo,e,t);s.layers=this.layers,this.add(s);let r=new $t(ro,oo,e,t);r.layers=this.layers,this.add(r);let o=new $t(ro,oo,e,t);o.layers=this.layers,this.add(o);let a=new $t(ro,oo,e,t);a.layers=this.layers,this.add(a);let l=new $t(ro,oo,e,t);l.layers=this.layers,this.add(l);let c=new $t(ro,oo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ls)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},cu=class extends mn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Mo,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ff=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Da("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_r?Et:oi),this.texture=new cu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ut(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Gi});r.uniforms.tEquirect.value=t;let o=new N(s,r),a=t.minFilter;return t.minFilter===Ns&&(t.minFilter=Dn),new df(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Gd=new E,Y1=new E,q1=new rt,Zn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Gd.subVectors(i,t).cross(Y1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Gd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||q1.getNormalMatrix(e),s=this.coplanarPoint(Gd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pr=new xn,Nc=new E,ka=class{constructor(e=new Zn,t=new Zn,i=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ls){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],M=s[13],y=s[14],_=s[15];if(i[0].setComponents(l-r,d-c,m-f,_-p).normalize(),i[1].setComponents(l+r,d+c,m+f,_+p).normalize(),i[2].setComponents(l+o,d+h,m+g,_+M).normalize(),i[3].setComponents(l-o,d-h,m-g,_-M).normalize(),i[4].setComponents(l-a,d-u,m-x,_-y).normalize(),t===ls)i[5].setComponents(l+a,d+u,m+x,_+y).normalize();else if(t===eu)i[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Nc.x=s.normal.x>0?e.max.x:e.min.x,Nc.y=s.normal.y>0?e.max.y:e.min.y,Nc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zx(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function K1(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var sn=class n extends vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let y=0;y<c;y++){let _=y*u-r;g.push(_,-M,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let y=M+c*p,_=M+c*(p+1),D=M+1+c*(p+1),b=M+1+c*p;f.push(y,_,b),f.push(_,D,b)}this.setIndex(f),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Z1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$1=`#ifdef USE_ALPHAHASH
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
#endif`,J1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tS=`#ifdef USE_AOMAP
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
#endif`,nS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iS=`#ifdef USE_BATCHING
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
#endif`,sS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lS=`#ifdef USE_IRIDESCENCE
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
#endif`,cS=`#ifdef USE_BUMPMAP
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
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yS=`#define PI 3.141592653589793
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
} // validated`,vS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MS=`vec3 transformedNormal = objectNormal;
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
#endif`,_S=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ES=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wS="gl_FragColor = linearToOutputTexel( gl_FragColor );",bS=`
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
}`,AS=`#ifdef USE_ENVMAP
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
#endif`,RS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CS=`#ifdef USE_ENVMAP
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
#endif`,PS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
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
#endif`,LS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,US=`#ifdef USE_GRADIENTMAP
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
}`,OS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,BS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kS=`uniform bool receiveShadow;
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
#endif`,GS=`#ifdef USE_ENVMAP
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
#endif`,VS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qS=`PhysicalMaterial material;
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
#endif`,KS=`struct PhysicalMaterial {
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
}`,ZS=`
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
#endif`,$S=`#if defined( RE_IndirectDiffuse )
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
#endif`,JS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rT=`#if defined( USE_POINTS_UV )
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
#endif`,oT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cT=`#ifdef USE_MORPHNORMALS
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
#endif`,uT=`#ifdef USE_MORPHTARGETS
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
#endif`,hT=`#ifdef USE_MORPHTARGETS
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
#endif`,dT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xT=`#ifdef USE_NORMALMAP
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
#endif`,yT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ET=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ST=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DT=`float getShadowMask() {
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
}`,NT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HT=`#ifdef USE_SKINNING
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
#endif`,UT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OT=`#ifdef USE_SKINNING
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
#endif`,BT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GT=`#ifdef USE_TRANSMISSION
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
#endif`,VT=`#ifdef USE_TRANSMISSION
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
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,KT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZT=`uniform sampler2D t2D;
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
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`#include <common>
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
}`,tw=`#if DEPTH_PACKING == 3200
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
}`,nw=`#define DISTANCE
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
}`,iw=`#define DISTANCE
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
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`uniform float scale;
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
}`,aw=`uniform vec3 diffuse;
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
}`,lw=`#include <common>
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
}`,cw=`uniform vec3 diffuse;
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
}`,uw=`#define LAMBERT
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
}`,hw=`#define LAMBERT
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
}`,dw=`#define MATCAP
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
}`,fw=`#define MATCAP
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
}`,pw=`#define NORMAL
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
}`,mw=`#define NORMAL
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
}`,gw=`#define PHONG
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
}`,xw=`#define PHONG
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
}`,yw=`#define STANDARD
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
}`,vw=`#define STANDARD
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
}`,Mw=`#define TOON
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
}`,_w=`#define TOON
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
}`,Ew=`uniform float size;
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
}`,Sw=`uniform vec3 diffuse;
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
}`,Tw=`#include <common>
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
}`,ww=`uniform vec3 color;
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
}`,bw=`uniform float rotation;
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
}`,Aw=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Z1,alphahash_pars_fragment:$1,alphamap_fragment:J1,alphamap_pars_fragment:j1,alphatest_fragment:Q1,alphatest_pars_fragment:eS,aomap_fragment:tS,aomap_pars_fragment:nS,batching_pars_vertex:iS,batching_vertex:sS,begin_vertex:rS,beginnormal_vertex:oS,bsdfs:aS,iridescence_fragment:lS,bumpmap_pars_fragment:cS,clipping_planes_fragment:uS,clipping_planes_pars_fragment:hS,clipping_planes_pars_vertex:dS,clipping_planes_vertex:fS,color_fragment:pS,color_pars_fragment:mS,color_pars_vertex:gS,color_vertex:xS,common:yS,cube_uv_reflection_fragment:vS,defaultnormal_vertex:MS,displacementmap_pars_vertex:_S,displacementmap_vertex:ES,emissivemap_fragment:SS,emissivemap_pars_fragment:TS,colorspace_fragment:wS,colorspace_pars_fragment:bS,envmap_fragment:AS,envmap_common_pars_fragment:RS,envmap_pars_fragment:CS,envmap_pars_vertex:PS,envmap_physical_pars_fragment:GS,envmap_vertex:IS,fog_vertex:LS,fog_pars_vertex:DS,fog_fragment:NS,fog_pars_fragment:HS,gradientmap_pars_fragment:US,lightmap_fragment:OS,lightmap_pars_fragment:BS,lights_lambert_fragment:FS,lights_lambert_pars_fragment:zS,lights_pars_begin:kS,lights_toon_fragment:VS,lights_toon_pars_fragment:WS,lights_phong_fragment:XS,lights_phong_pars_fragment:YS,lights_physical_fragment:qS,lights_physical_pars_fragment:KS,lights_fragment_begin:ZS,lights_fragment_maps:$S,lights_fragment_end:JS,logdepthbuf_fragment:jS,logdepthbuf_pars_fragment:QS,logdepthbuf_pars_vertex:eT,logdepthbuf_vertex:tT,map_fragment:nT,map_pars_fragment:iT,map_particle_fragment:sT,map_particle_pars_fragment:rT,metalnessmap_fragment:oT,metalnessmap_pars_fragment:aT,morphcolor_vertex:lT,morphnormal_vertex:cT,morphtarget_pars_vertex:uT,morphtarget_vertex:hT,normal_fragment_begin:dT,normal_fragment_maps:fT,normal_pars_fragment:pT,normal_pars_vertex:mT,normal_vertex:gT,normalmap_pars_fragment:xT,clearcoat_normal_fragment_begin:yT,clearcoat_normal_fragment_maps:vT,clearcoat_pars_fragment:MT,iridescence_pars_fragment:_T,opaque_fragment:ET,packing:ST,premultiplied_alpha_fragment:TT,project_vertex:wT,dithering_fragment:bT,dithering_pars_fragment:AT,roughnessmap_fragment:RT,roughnessmap_pars_fragment:CT,shadowmap_pars_fragment:PT,shadowmap_pars_vertex:IT,shadowmap_vertex:LT,shadowmask_pars_fragment:DT,skinbase_vertex:NT,skinning_pars_vertex:HT,skinning_vertex:UT,skinnormal_vertex:OT,specularmap_fragment:BT,specularmap_pars_fragment:FT,tonemapping_fragment:zT,tonemapping_pars_fragment:kT,transmission_fragment:GT,transmission_pars_fragment:VT,uv_pars_fragment:WT,uv_pars_vertex:XT,uv_vertex:YT,worldpos_vertex:qT,background_vert:KT,background_frag:ZT,backgroundCube_vert:$T,backgroundCube_frag:JT,cube_vert:jT,cube_frag:QT,depth_vert:ew,depth_frag:tw,distanceRGBA_vert:nw,distanceRGBA_frag:iw,equirect_vert:sw,equirect_frag:rw,linedashed_vert:ow,linedashed_frag:aw,meshbasic_vert:lw,meshbasic_frag:cw,meshlambert_vert:uw,meshlambert_frag:hw,meshmatcap_vert:dw,meshmatcap_frag:fw,meshnormal_vert:pw,meshnormal_frag:mw,meshphong_vert:gw,meshphong_frag:xw,meshphysical_vert:yw,meshphysical_frag:vw,meshtoon_vert:Mw,meshtoon_frag:_w,points_vert:Ew,points_frag:Sw,shadow_vert:Tw,shadow_frag:ww,sprite_vert:bw,sprite_frag:Aw},ue={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},zi={basic:{uniforms:Ln([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Ln([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new pe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Ln([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Ln([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Ln([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new pe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Ln([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Ln([ue.points,ue.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Ln([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Ln([ue.common,ue.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Ln([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Ln([ue.sprite,ue.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Ln([ue.common,ue.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Ln([ue.lights,ue.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};zi.physical={uniforms:Ln([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Hc={r:0,b:0,g:0};function Rw(n,e,t,i,s,r,o){let a=new pe(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let M=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?x(a,l):y&&y.isColor&&(x(y,1),M=!0);let _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Pu)?(h===void 0&&(h=new N(new Ut(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:wo(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=yt.getTransfer(y.colorSpace)!==Ct,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new N(new sn(2,2),new Ot({name:"BackgroundMaterial",uniforms:wo(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=yt.getTransfer(y.colorSpace)!==Ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(Hc,Fx(n)),i.buffers.color.setClear(Hc.r,Hc.g,Hc.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function Cw(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(S,I,L,H,O){let k=!1;if(o){let $=x(H,L,I);c!==$&&(c=$,f(c.object)),k=p(S,H,L,O),k&&M(S,H,L,O)}else{let $=I.wireframe===!0;(c.geometry!==H.id||c.program!==L.id||c.wireframe!==$)&&(c.geometry=H.id,c.program=L.id,c.wireframe=$,k=!0)}O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,F(S,I,L,H),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(S){return i.isWebGL2?n.bindVertexArray(S):r.bindVertexArrayOES(S)}function g(S){return i.isWebGL2?n.deleteVertexArray(S):r.deleteVertexArrayOES(S)}function x(S,I,L){let H=L.wireframe===!0,O=a[S.id];O===void 0&&(O={},a[S.id]=O);let k=O[I.id];k===void 0&&(k={},O[I.id]=k);let $=k[H];return $===void 0&&($=m(d()),k[H]=$),$}function m(S){let I=[],L=[],H=[];for(let O=0;O<s;O++)I[O]=0,L[O]=0,H[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,I,L,H){let O=c.attributes,k=I.attributes,$=0,j=L.getAttributes();for(let le in j)if(j[le].location>=0){let se=O[le],ye=k[le];if(ye===void 0&&(le==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),le==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),se===void 0||se.attribute!==ye||ye&&se.data!==ye.data)return!0;$++}return c.attributesNum!==$||c.index!==H}function M(S,I,L,H){let O={},k=I.attributes,$=0,j=L.getAttributes();for(let le in j)if(j[le].location>=0){let se=k[le];se===void 0&&(le==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),le==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));let ye={};ye.attribute=se,se&&se.data&&(ye.data=se.data),O[le]=ye,$++}c.attributes=O,c.attributesNum=$,c.index=H}function y(){let S=c.newAttributes;for(let I=0,L=S.length;I<L;I++)S[I]=0}function _(S){D(S,0)}function D(S,I){let L=c.newAttributes,H=c.enabledAttributes,O=c.attributeDivisors;L[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),O[S]!==I&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](S,I),O[S]=I)}function b(){let S=c.newAttributes,I=c.enabledAttributes;for(let L=0,H=I.length;L<H;L++)I[L]!==S[L]&&(n.disableVertexAttribArray(L),I[L]=0)}function C(S,I,L,H,O,k,$){$===!0?n.vertexAttribIPointer(S,I,L,O,k):n.vertexAttribPointer(S,I,L,H,O,k)}function F(S,I,L,H){if(i.isWebGL2===!1&&(S.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let O=H.attributes,k=L.getAttributes(),$=I.defaultAttributeValues;for(let j in k){let le=k[j];if(le.location>=0){let K=O[j];if(K===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){let se=K.normalized,ye=K.itemSize,Ce=t.get(K);if(Ce===void 0)continue;let _e=Ce.buffer,ke=Ce.type,Je=Ce.bytesPerElement,Pe=i.isWebGL2===!0&&(ke===n.INT||ke===n.UNSIGNED_INT||K.gpuType===bx);if(K.isInterleavedBufferAttribute){let Ke=K.data,U=Ke.stride,he=K.offset;if(Ke.isInstancedInterleavedBuffer){for(let ee=0;ee<le.locationSize;ee++)D(le.location+ee,Ke.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let ee=0;ee<le.locationSize;ee++)_(le.location+ee);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ee=0;ee<le.locationSize;ee++)C(le.location+ee,ye/le.locationSize,ke,se,U*Je,(he+ye/le.locationSize*ee)*Je,Pe)}else{if(K.isInstancedBufferAttribute){for(let Ke=0;Ke<le.locationSize;Ke++)D(le.location+Ke,K.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ke=0;Ke<le.locationSize;Ke++)_(le.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Ke=0;Ke<le.locationSize;Ke++)C(le.location+Ke,ye/le.locationSize,ke,se,ye*Je,ye/le.locationSize*Ke*Je,Pe)}}else if($!==void 0){let se=$[j];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(le.location,se);break;case 3:n.vertexAttrib3fv(le.location,se);break;case 4:n.vertexAttrib4fv(le.location,se);break;default:n.vertexAttrib1fv(le.location,se)}}}}b()}function T(){X();for(let S in a){let I=a[S];for(let L in I){let H=I[L];for(let O in H)g(H[O].object),delete H[O];delete I[L]}delete a[S]}}function A(S){if(a[S.id]===void 0)return;let I=a[S.id];for(let L in I){let H=I[L];for(let O in H)g(H[O].object),delete H[O];delete I[L]}delete a[S.id]}function z(S){for(let I in a){let L=a[I];if(L[S.id]===void 0)continue;let H=L[S.id];for(let O in H)g(H[O].object),delete H[O];delete L[S.id]}}function X(){ne(),h=!0,c!==l&&(c=l,f(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:ne,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:z,initAttributes:y,enableAttribute:_,disableUnusedAttributes:b}}function Pw(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Iw(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,_=o||e.has("OES_texture_float"),D=y&&_,b=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:D,maxSamples:b}}function Lw(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Zn,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,y=M*4,_=p.clippingState||null;l.value=_,_=h(g,d,y,f);for(let D=0;D!==y;++D)_[D]=t[D];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Dw(n){let e=new WeakMap;function t(o,a){return a===of?o.mapping=Mo:a===af&&(o.mapping=_o),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===of||a===af)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ff(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Us=class extends lu{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},po=4,Cg=[.125,.215,.35,.446,.526,.582],xr=20,Vd=new Us,Pg=new pe,Wd=null,Xd=0,Yd=0,mr=(1+Math.sqrt(5))/2,ao=1/mr,Ig=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,mr,ao),new E(0,mr,-ao),new E(ao,0,mr),new E(-ao,0,mr),new E(mr,ao,0),new E(-mr,ao,0)],bo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Wd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,Xd,Yd),e.scissorTest=!1,Uc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mo||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ai,format:ri,colorSpace:nn,depthBuffer:!1},s=Lg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nw(r)),this._blurMaterial=Hw(r,e,t)}return s}_compileMaterial(e){let t=new N(this._lodPlanes[0],e);this._renderer.compile(t,Vd)}_sceneToCubeUV(e,t,i,s){let a=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pg),h.toneMapping=Is,h.autoClear=!1;let f=new ft({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new N(new Ut,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Pg),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;Uc(s,M*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Mo||e.mapping===_o;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new N(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Uc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Vd)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ig[(s-1)%Ig.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new N(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xr-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):xr;m>xr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);let p=[],M=0;for(let C=0;C<xr;++C){let F=C/x,T=Math.exp(-F*F/2);p.push(T),C===0?M+=T:C<m&&(M+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let _=this._sizeLods[s],D=3*_*(s>y-po?s-y+po:0),b=4*(this._cubeSize-_);Uc(t,D,b,3*_,2*_),l.setRenderTarget(t),l.render(u,Vd)}};function Nw(n){let e=[],t=[],i=[],s=n,r=n-po+1+Cg.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-po?l=Cg[o-n+po-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let b=0;b<f;b++){let C=b%3*2/3-1,F=b>2?0:-1,T=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];M.set(T,x*g*b),y.set(d,m*g*b);let A=[b,b,b,b,b,b];_.set(A,p*g*b)}let D=new vt;D.setAttribute("position",new gt(M,x)),D.setAttribute("uv",new gt(y,m)),D.setAttribute("faceIndex",new gt(_,p)),e.push(D),s>po&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lg(n,e,t){let i=new gn(n,e,t);return i.texture.mapping=Pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Hw(n,e,t){let i=new Float32Array(xr),s=new E(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sp(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Dg(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ng(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function sp(){return`

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
	`}function Uw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===of||l===af,h=l===Mo||l===_o;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new bo(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new bo(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ow(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Bw(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let y=0,_=M.length;y<_;y+=3){let D=M[y+0],b=M[y+1],C=M[y+2];d.push(D,b,b,C,C,D)}}else if(g!==void 0){let M=g.array;x=g.version;for(let y=0,_=M.length/3-1;y<_;y+=3){let D=y+0,b=y+1,C=y+2;d.push(D,b,b,C,C,D)}}else return;let m=new(Ox(d)?au:ou)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Fw(n,e,t,i){let s=i.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*l),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let p=0;for(let M=0;M<x;M++)p+=g[M];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function zw(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kw(n,e){return n[0]-e[0]}function Gw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Vw(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new St,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let S=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",S)};x!==void 0&&x.texture.dispose();let M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],F=0;M===!0&&(F=1),y===!0&&(F=2),_===!0&&(F=3);let T=h.attributes.position.count*F,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let z=new Float32Array(T*A*4*g),X=new su(z,T,A,g);X.type=as,X.needsUpdate=!0;let ne=F*4;for(let I=0;I<g;I++){let L=D[I],H=b[I],O=C[I],k=T*A*4*I;for(let $=0;$<L.count;$++){let j=$*ne;M===!0&&(o.fromBufferAttribute(L,$),z[k+j+0]=o.x,z[k+j+1]=o.y,z[k+j+2]=o.z,z[k+j+3]=0),y===!0&&(o.fromBufferAttribute(H,$),z[k+j+4]=o.x,z[k+j+5]=o.y,z[k+j+6]=o.z,z[k+j+7]=0),_===!0&&(o.fromBufferAttribute(O,$),z[k+j+8]=o.x,z[k+j+9]=o.y,z[k+j+10]=o.z,z[k+j+11]=O.itemSize===4?o.w:1)}}x={count:g,texture:X,size:new J(T,A)},r.set(h,x),h.addEventListener("dispose",S)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let y=0;y<f;y++)g[y]=[y,0];i[h.id]=g}for(let y=0;y<f;y++){let _=g[y];_[0]=y,_[1]=d[y]}g.sort(Gw);for(let y=0;y<8;y++)y<f&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(kw);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let _=a[y],D=_[0],b=_[1];D!==Number.MAX_SAFE_INTEGER&&b?(x&&h.getAttribute("morphTarget"+y)!==x[D]&&h.setAttribute("morphTarget"+y,x[D]),m&&h.getAttribute("morphNormal"+y)!==m[D]&&h.setAttribute("morphNormal"+y,m[D]),s[y]=b,p+=b):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let M=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Ww(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var uu=class extends mn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Mr,h!==Mr&&h!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Mr&&(i=Cs),i===void 0&&h===Eo&&(i=vr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},kx=new mn,Gx=new uu(1,1);Gx.compareFunction=Ux;var Vx=new su,Wx=new hf,Xx=new cu,Hg=[],Ug=[],Og=new Float32Array(16),Bg=new Float32Array(9),Fg=new Float32Array(4);function Lo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Hg[s];if(r===void 0&&(r=new Float32Array(s),Hg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Du(n,e){let t=Ug[e];t===void 0&&(t=new Int32Array(e),Ug[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function qw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function Kw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function Zw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Fg.set(i),n.uniformMatrix2fv(this.addr,!1,Fg),on(t,i)}}function $w(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Bg.set(i),n.uniformMatrix3fv(this.addr,!1,Bg),on(t,i)}}function Jw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,i))return;Og.set(i),n.uniformMatrix4fv(this.addr,!1,Og),on(t,i)}}function jw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function eb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function tb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function nb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ib(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function sb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function rb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function ob(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Gx:kx;t.setTexture2D(e||r,s)}function ab(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Wx,s)}function lb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Xx,s)}function cb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Vx,s)}function ub(n){switch(n){case 5126:return Xw;case 35664:return Yw;case 35665:return qw;case 35666:return Kw;case 35674:return Zw;case 35675:return $w;case 35676:return Jw;case 5124:case 35670:return jw;case 35667:case 35671:return Qw;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return sb;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}function hb(n,e){n.uniform1fv(this.addr,e)}function db(n,e){let t=Lo(e,this.size,2);n.uniform2fv(this.addr,t)}function fb(n,e){let t=Lo(e,this.size,3);n.uniform3fv(this.addr,t)}function pb(n,e){let t=Lo(e,this.size,4);n.uniform4fv(this.addr,t)}function mb(n,e){let t=Lo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gb(n,e){let t=Lo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xb(n,e){let t=Lo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yb(n,e){n.uniform1iv(this.addr,e)}function vb(n,e){n.uniform2iv(this.addr,e)}function Mb(n,e){n.uniform3iv(this.addr,e)}function _b(n,e){n.uniform4iv(this.addr,e)}function Eb(n,e){n.uniform1uiv(this.addr,e)}function Sb(n,e){n.uniform2uiv(this.addr,e)}function Tb(n,e){n.uniform3uiv(this.addr,e)}function wb(n,e){n.uniform4uiv(this.addr,e)}function bb(n,e,t){let i=this.cache,s=e.length,r=Du(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||kx,r[o])}function Ab(n,e,t){let i=this.cache,s=e.length,r=Du(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wx,r[o])}function Rb(n,e,t){let i=this.cache,s=e.length,r=Du(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Xx,r[o])}function Cb(n,e,t){let i=this.cache,s=e.length,r=Du(t,s);rn(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Vx,r[o])}function Pb(n){switch(n){case 5126:return hb;case 35664:return db;case 35665:return fb;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return xb;case 5124:case 35670:return yb;case 35667:case 35671:return vb;case 35668:case 35672:return Mb;case 35669:case 35673:return _b;case 5125:return Eb;case 36294:return Sb;case 36295:return Tb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Cb}}var pf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ub(t.type)}},mf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pb(t.type)}},gf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},qd=/(\w+)(\])?(\[|\.)?/g;function zg(n,e){n.seq.push(e),n.map[e.id]=e}function Ib(n,e,t){let i=n.name,s=i.length;for(qd.lastIndex=0;;){let r=qd.exec(i),o=qd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zg(t,c===void 0?new pf(a,n,e):new mf(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new gf(a),zg(t,u)),t=u}}}var vo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ib(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function kg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Lb=37297,Db=0;function Nb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Hb(n){let e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n),i;switch(e===t?i="":e===Qc&&t===jc?i="LinearDisplayP3ToLinearSRGB":e===jc&&t===Qc&&(i="LinearSRGBToLinearDisplayP3"),n){case nn:case Lu:return[i,"LinearTransferOETF"];case Et:case np:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Gg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Nb(n.getShaderSource(e),o)}else return s}function Ub(n,e){let t=Hb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ob(n,e){let t;switch(e){case $f:t="Linear";break;case Jf:t="Reinhard";break;case jf:t="OptimizedCineon";break;case nl:t="ACESFilmic";break;case Qf:t="AgX";break;case qE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bb(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mo).join(`
`)}function Fb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(mo).join(`
`)}function zb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function mo(n){return n!==""}function Vg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(n){return n.replace(Gb,Wb)}var Vb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Wb(n,e){let t=st[e];if(t===void 0){let i=Vb.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xf(t)}var Xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xg(n){return n.replace(Xb,Yb)}function Yb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===os&&(e="SHADOWMAP_TYPE_VSM"),e}function Kb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mo:case _o:e="ENVMAP_TYPE_CUBE";break;case Pu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _o:e="ENVMAP_MODE_REFRACTION";break}return e}function $b(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tx:e="ENVMAP_BLENDING_MULTIPLY";break;case XE:e="ENVMAP_BLENDING_MIX";break;case YE:e="ENVMAP_BLENDING_ADD";break}return e}function Jb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=qb(t),c=Kb(t),h=Zb(t),u=$b(t),d=Jb(t),f=t.isWebGL2?"":Bb(t),g=Fb(t),x=zb(r),m=s.createProgram(),p,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mo).join(`
`),p.length>0&&(p+=`
`),M=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mo).join(`
`),M.length>0&&(M+=`
`)):(p=[Yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),M=[f,Yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Is?"#define TONE_MAPPING":"",t.toneMapping!==Is?st.tonemapping_pars_fragment:"",t.toneMapping!==Is?Ob("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Ub("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),o=xf(o),o=Vg(o,t),o=Wg(o,t),a=xf(a),a=Vg(a,t),a=Wg(a,t),o=Xg(o),a=Xg(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let _=y+p+o,D=y+M+a,b=kg(s,s.VERTEX_SHADER,_),C=kg(s,s.FRAGMENT_SHADER,D);s.attachShader(m,b),s.attachShader(m,C),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function F(X){if(n.debug.checkShaderErrors){let ne=s.getProgramInfoLog(m).trim(),S=s.getShaderInfoLog(b).trim(),I=s.getShaderInfoLog(C).trim(),L=!0,H=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,b,C);else{let O=Gg(s,b,"vertex"),k=Gg(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+O+`
`+k)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(S===""||I==="")&&(H=!1);H&&(X.diagnostics={runnable:L,programLog:ne,vertexShader:{log:S,prefix:p},fragmentShader:{log:I,prefix:M}})}s.deleteShader(b),s.deleteShader(C),T=new vo(s,m),A=kb(s,m)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let A;this.getAttributes=function(){return A===void 0&&F(this),A};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(m,Lb)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Db++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=C,this}var Qb=0,yf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new vf(e),t.set(e,i)),i}},vf=class{constructor(e){this.id=Qb++,this.code=e,this.usedTimes=0}};function eA(n,e,t,i,s,r,o){let a=new za,l=new yf,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return T===0?"uv":`uv${T}`}function m(T,A,z,X,ne){let S=X.fog,I=ne.geometry,L=T.isMeshStandardMaterial?X.environment:null,H=(T.isMeshStandardMaterial?t:e).get(T.envMap||L),O=H&&H.mapping===Pu?H.image.height:null,k=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let $=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=$!==void 0?$.length:0,le=0;I.morphAttributes.position!==void 0&&(le=1),I.morphAttributes.normal!==void 0&&(le=2),I.morphAttributes.color!==void 0&&(le=3);let K,se,ye,Ce;if(k){let Cn=zi[k];K=Cn.vertexShader,se=Cn.fragmentShader}else K=T.vertexShader,se=T.fragmentShader,l.update(T),ye=l.getVertexShaderID(T),Ce=l.getFragmentShaderID(T);let _e=n.getRenderTarget(),ke=ne.isInstancedMesh===!0,Je=ne.isBatchedMesh===!0,Pe=!!T.map,Ke=!!T.matcap,U=!!H,he=!!T.aoMap,ee=!!T.lightMap,ce=!!T.bumpMap,Q=!!T.normalMap,De=!!T.displacementMap,ve=!!T.emissiveMap,R=!!T.metalnessMap,w=!!T.roughnessMap,V=T.anisotropy>0,ae=T.clearcoat>0,re=T.iridescence>0,ie=T.sheen>0,Ae=T.transmission>0,fe=V&&!!T.anisotropyMap,Ee=ae&&!!T.clearcoatMap,Be=ae&&!!T.clearcoatNormalMap,et=ae&&!!T.clearcoatRoughnessMap,oe=re&&!!T.iridescenceMap,_t=re&&!!T.iridescenceThicknessMap,ht=ie&&!!T.sheenColorMap,Ze=ie&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,be=!!T.specularColorMap,it=!!T.specularIntensityMap,Tt=Ae&&!!T.transmissionMap,Yt=Ae&&!!T.thicknessMap,ct=!!T.gradientMap,de=!!T.alphaMap,B=T.alphaTest>0,me=!!T.alphaHash,ge=!!T.extensions,Ge=!!I.attributes.uv1,Fe=!!I.attributes.uv2,Lt=!!I.attributes.uv3,Dt=Is;return T.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Dt=n.toneMapping),{isWebGL2:h,shaderID:k,shaderType:T.type,shaderName:T.name,vertexShader:K,fragmentShader:se,defines:T.defines,customVertexShaderID:ye,customFragmentShaderID:Ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Je,instancing:ke,instancingColor:ke&&ne.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:nn,map:Pe,matcap:Ke,envMap:U,envMapMode:U&&H.mapping,envMapCubeUVHeight:O,aoMap:he,lightMap:ee,bumpMap:ce,normalMap:Q,displacementMap:d&&De,emissiveMap:ve,normalMapObjectSpace:Q&&T.normalMapType===o1,normalMapTangentSpace:Q&&T.normalMapType===Hx,metalnessMap:R,roughnessMap:w,anisotropy:V,anisotropyMap:fe,clearcoat:ae,clearcoatMap:Ee,clearcoatNormalMap:Be,clearcoatRoughnessMap:et,iridescence:re,iridescenceMap:oe,iridescenceThicknessMap:_t,sheen:ie,sheenColorMap:ht,sheenRoughnessMap:Ze,specularMap:Oe,specularColorMap:be,specularIntensityMap:it,transmission:Ae,transmissionMap:Tt,thicknessMap:Yt,gradientMap:ct,opaque:T.transparent===!1&&T.blending===xo,alphaMap:de,alphaTest:B,alphaHash:me,combine:T.combine,mapUv:Pe&&x(T.map.channel),aoMapUv:he&&x(T.aoMap.channel),lightMapUv:ee&&x(T.lightMap.channel),bumpMapUv:ce&&x(T.bumpMap.channel),normalMapUv:Q&&x(T.normalMap.channel),displacementMapUv:De&&x(T.displacementMap.channel),emissiveMapUv:ve&&x(T.emissiveMap.channel),metalnessMapUv:R&&x(T.metalnessMap.channel),roughnessMapUv:w&&x(T.roughnessMap.channel),anisotropyMapUv:fe&&x(T.anisotropyMap.channel),clearcoatMapUv:Ee&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Be&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&x(T.sheenRoughnessMap.channel),specularMapUv:Oe&&x(T.specularMap.channel),specularColorMapUv:be&&x(T.specularColorMap.channel),specularIntensityMapUv:it&&x(T.specularIntensityMap.channel),transmissionMapUv:Tt&&x(T.transmissionMap.channel),thicknessMapUv:Yt&&x(T.thicknessMap.channel),alphaMapUv:de&&x(T.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Q||V),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:Fe,vertexUv3s:Lt,pointsUvs:ne.isPoints===!0&&!!I.attributes.uv&&(Pe||de),fog:!!S,useFog:T.fog===!0,fogExp2:S&&S.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ne.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Pe&&T.map.isVideoTexture===!0&&yt.getTransfer(T.map.colorSpace)===Ct,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ot,flipSided:T.side===wn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:ge&&T.extensions.derivatives===!0,extensionFragDepth:ge&&T.extensions.fragDepth===!0,extensionDrawBuffers:ge&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&T.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function p(T){let A=[];if(T.shaderID?A.push(T.shaderID):(A.push(T.customVertexShaderID),A.push(T.customFragmentShaderID)),T.defines!==void 0)for(let z in T.defines)A.push(z),A.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(M(A,T),y(A,T),A.push(n.outputColorSpace)),A.push(T.customProgramCacheKey),A.join()}function M(T,A){T.push(A.precision),T.push(A.outputColorSpace),T.push(A.envMapMode),T.push(A.envMapCubeUVHeight),T.push(A.mapUv),T.push(A.alphaMapUv),T.push(A.lightMapUv),T.push(A.aoMapUv),T.push(A.bumpMapUv),T.push(A.normalMapUv),T.push(A.displacementMapUv),T.push(A.emissiveMapUv),T.push(A.metalnessMapUv),T.push(A.roughnessMapUv),T.push(A.anisotropyMapUv),T.push(A.clearcoatMapUv),T.push(A.clearcoatNormalMapUv),T.push(A.clearcoatRoughnessMapUv),T.push(A.iridescenceMapUv),T.push(A.iridescenceThicknessMapUv),T.push(A.sheenColorMapUv),T.push(A.sheenRoughnessMapUv),T.push(A.specularMapUv),T.push(A.specularColorMapUv),T.push(A.specularIntensityMapUv),T.push(A.transmissionMapUv),T.push(A.thicknessMapUv),T.push(A.combine),T.push(A.fogExp2),T.push(A.sizeAttenuation),T.push(A.morphTargetsCount),T.push(A.morphAttributeCount),T.push(A.numDirLights),T.push(A.numPointLights),T.push(A.numSpotLights),T.push(A.numSpotLightMaps),T.push(A.numHemiLights),T.push(A.numRectAreaLights),T.push(A.numDirLightShadows),T.push(A.numPointLightShadows),T.push(A.numSpotLightShadows),T.push(A.numSpotLightShadowsWithMaps),T.push(A.numLightProbes),T.push(A.shadowMapType),T.push(A.toneMapping),T.push(A.numClippingPlanes),T.push(A.numClipIntersection),T.push(A.depthPacking)}function y(T,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),T.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),T.push(a.mask)}function _(T){let A=g[T.type],z;if(A){let X=zi[A];z=Jn.clone(X.uniforms)}else z=T.uniforms;return z}function D(T,A){let z;for(let X=0,ne=c.length;X<ne;X++){let S=c[X];if(S.cacheKey===A){z=S,++z.usedTimes;break}}return z===void 0&&(z=new jb(n,A,T,r),c.push(z)),z}function b(T){if(--T.usedTimes===0){let A=c.indexOf(T);c[A]=c[c.length-1],c.pop(),T.destroy()}}function C(T){l.remove(T)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:D,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:F}}function tA(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function nA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||nA),i.length>1&&i.sort(d||qg),s.length>1&&s.sort(d||qg)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function iA(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Kg,n.set(i,[o])):s>=r.length?(o=new Kg,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new pe};break;case"SpotLight":t={position:new E,direction:new E,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new E,halfWidth:new E,halfHeight:new E};break}return n[e.id]=t,t}}}function rA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var oA=0;function aA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lA(n,e){let t=new sA,i=rA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new E);let r=new E,o=new Ye,a=new Ye;function l(h,u){let d=0,f=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let x=0,m=0,p=0,M=0,y=0,_=0,D=0,b=0,C=0,F=0,T=0;h.sort(aA);let A=u===!0?Math.PI:1;for(let X=0,ne=h.length;X<ne;X++){let S=h[X],I=S.color,L=S.intensity,H=S.distance,O=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)d+=I.r*L*A,f+=I.g*L*A,g+=I.b*L*A;else if(S.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(S.sh.coefficients[k],L);T++}else if(S.isDirectionalLight){let k=t.get(S);if(k.color.copy(S.color).multiplyScalar(S.intensity*A),S.castShadow){let $=S.shadow,j=i.get(S);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,s.directionalShadow[x]=j,s.directionalShadowMap[x]=O,s.directionalShadowMatrix[x]=S.shadow.matrix,_++}s.directional[x]=k,x++}else if(S.isSpotLight){let k=t.get(S);k.position.setFromMatrixPosition(S.matrixWorld),k.color.copy(I).multiplyScalar(L*A),k.distance=H,k.coneCos=Math.cos(S.angle),k.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),k.decay=S.decay,s.spot[p]=k;let $=S.shadow;if(S.map&&(s.spotLightMap[C]=S.map,C++,$.updateMatrices(S),S.castShadow&&F++),s.spotLightMatrix[p]=$.matrix,S.castShadow){let j=i.get(S);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,s.spotShadow[p]=j,s.spotShadowMap[p]=O,b++}p++}else if(S.isRectAreaLight){let k=t.get(S);k.color.copy(I).multiplyScalar(L),k.halfWidth.set(S.width*.5,0,0),k.halfHeight.set(0,S.height*.5,0),s.rectArea[M]=k,M++}else if(S.isPointLight){let k=t.get(S);if(k.color.copy(S.color).multiplyScalar(S.intensity*A),k.distance=S.distance,k.decay=S.decay,S.castShadow){let $=S.shadow,j=i.get(S);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,s.pointShadow[m]=j,s.pointShadowMap[m]=O,s.pointShadowMatrix[m]=S.shadow.matrix,D++}s.point[m]=k,m++}else if(S.isHemisphereLight){let k=t.get(S);k.skyColor.copy(S.color).multiplyScalar(L*A),k.groundColor.copy(S.groundColor).multiplyScalar(L*A),s.hemi[y]=k,y++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let z=s.hash;(z.directionalLength!==x||z.pointLength!==m||z.spotLength!==p||z.rectAreaLength!==M||z.hemiLength!==y||z.numDirectionalShadows!==_||z.numPointShadows!==D||z.numSpotShadows!==b||z.numSpotMaps!==C||z.numLightProbes!==T)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=M,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=_,s.directionalShadowMap.length=_,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=_,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=b+C-F,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=T,z.directionalLength=x,z.pointLength=m,z.spotLength=p,z.rectAreaLength=M,z.hemiLength=y,z.numDirectionalShadows=_,z.numPointShadows=D,z.numSpotShadows=b,z.numSpotMaps=C,z.numLightProbes=T,s.version=oA++)}function c(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let M=0,y=h.length;M<y;M++){let _=h[M];if(_.isDirectionalLight){let D=s.directional[d];D.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),d++}else if(_.isSpotLight){let D=s.spot[g];D.position.setFromMatrixPosition(_.matrixWorld),D.position.applyMatrix4(p),D.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let D=s.rectArea[x];D.position.setFromMatrixPosition(_.matrixWorld),D.position.applyMatrix4(p),a.identity(),o.copy(_.matrixWorld),o.premultiply(p),a.extractRotation(o),D.halfWidth.set(_.width*.5,0,0),D.halfHeight.set(0,_.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let D=s.point[f];D.position.setFromMatrixPosition(_.matrixWorld),D.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let D=s.hemi[m];D.direction.setFromMatrixPosition(_.matrixWorld),D.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Zg(n,e){let t=new lA(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cA(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Zg(n,e),t.set(r,[l])):o>=a.length?(l=new Zg(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Mf=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_f=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},uA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hA=`uniform sampler2D shadow_pass;
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
}`;function dA(n,e,t){let i=new ka,s=new J,r=new J,o=new St,a=new Mf({depthPacking:r1}),l=new _f,c={},h=t.maxTextureSize,u={[Bn]:wn,[wn]:Bn,[ot]:ot},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:uA,fragmentShader:hA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new N(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sx;let p=this.type;this.render=function(b,C,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let T=n.getRenderTarget(),A=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Gi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let ne=p!==os&&this.type===os,S=p===os&&this.type!==os;for(let I=0,L=b.length;I<L;I++){let H=b[I],O=H.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let k=O.getFrameExtents();if(s.multiply(k),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,O.mapSize.y=r.y)),O.map===null||ne===!0||S===!0){let j=this.type!==os?{minFilter:en,magFilter:en}:{};O.map!==null&&O.map.dispose(),O.map=new gn(s.x,s.y,j),O.map.texture.name=H.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();let $=O.getViewportCount();for(let j=0;j<$;j++){let le=O.getViewport(j);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),X.viewport(o),O.updateMatrices(H,j),i=O.getFrustum(),_(C,F,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===os&&M(O,F),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,A,z)};function M(b,C){let F=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gn(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,F,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,F,f,x,null)}function y(b,C,F,T){let A=null,z=F.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0)A=z;else if(A=F.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let X=A.uuid,ne=C.uuid,S=c[X];S===void 0&&(S={},c[X]=S);let I=S[ne];I===void 0&&(I=A.clone(),S[ne]=I,C.addEventListener("dispose",D)),A=I}if(A.visible=C.visible,A.wireframe=C.wireframe,T===os?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:u[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let X=n.properties.get(A);X.light=F}return A}function _(b,C,F,T,A){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===os)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld);let ne=e.update(b),S=b.material;if(Array.isArray(S)){let I=ne.groups;for(let L=0,H=I.length;L<H;L++){let O=I[L],k=S[O.materialIndex];if(k&&k.visible){let $=y(b,k,T,A);b.onBeforeShadow(n,b,C,F,ne,$,O),n.renderBufferDirect(F,null,ne,$,b,O),b.onAfterShadow(n,b,C,F,ne,$,O)}}}else if(S.visible){let I=y(b,S,T,A);b.onBeforeShadow(n,b,C,F,ne,I,null),n.renderBufferDirect(F,null,ne,I,b,null),b.onAfterShadow(n,b,C,F,ne,I,null)}}let X=b.children;for(let ne=0,S=X.length;ne<S;ne++)_(X[ne],C,F,T,A)}function D(b){b.target.removeEventListener("dispose",D);for(let F in c){let T=c[F],A=b.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function fA(n,e,t){let i=t.isWebGL2;function s(){let B=!1,me=new St,ge=null,Ge=new St(0,0,0,0);return{setMask:function(Fe){ge!==Fe&&!B&&(n.colorMask(Fe,Fe,Fe,Fe),ge=Fe)},setLocked:function(Fe){B=Fe},setClear:function(Fe,Lt,Dt,cn,Cn){Cn===!0&&(Fe*=cn,Lt*=cn,Dt*=cn),me.set(Fe,Lt,Dt,cn),Ge.equals(me)===!1&&(n.clearColor(Fe,Lt,Dt,cn),Ge.copy(me))},reset:function(){B=!1,ge=null,Ge.set(-1,0,0,0)}}}function r(){let B=!1,me=null,ge=null,Ge=null;return{setTest:function(Fe){Fe?Je(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(Fe){me!==Fe&&!B&&(n.depthMask(Fe),me=Fe)},setFunc:function(Fe){if(ge!==Fe){switch(Fe){case BE:n.depthFunc(n.NEVER);break;case FE:n.depthFunc(n.ALWAYS);break;case zE:n.depthFunc(n.LESS);break;case Zc:n.depthFunc(n.LEQUAL);break;case kE:n.depthFunc(n.EQUAL);break;case GE:n.depthFunc(n.GEQUAL);break;case VE:n.depthFunc(n.GREATER);break;case WE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=Fe}},setLocked:function(Fe){B=Fe},setClear:function(Fe){Ge!==Fe&&(n.clearDepth(Fe),Ge=Fe)},reset:function(){B=!1,me=null,ge=null,Ge=null}}}function o(){let B=!1,me=null,ge=null,Ge=null,Fe=null,Lt=null,Dt=null,cn=null,Cn=null;return{setTest:function(Nt){B||(Nt?Je(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(Nt){me!==Nt&&!B&&(n.stencilMask(Nt),me=Nt)},setFunc:function(Nt,Pn,Fi){(ge!==Nt||Ge!==Pn||Fe!==Fi)&&(n.stencilFunc(Nt,Pn,Fi),ge=Nt,Ge=Pn,Fe=Fi)},setOp:function(Nt,Pn,Fi){(Lt!==Nt||Dt!==Pn||cn!==Fi)&&(n.stencilOp(Nt,Pn,Fi),Lt=Nt,Dt=Pn,cn=Fi)},setLocked:function(Nt){B=Nt},setClear:function(Nt){Cn!==Nt&&(n.clearStencil(Nt),Cn=Nt)},reset:function(){B=!1,me=null,ge=null,Ge=null,Fe=null,Lt=null,Dt=null,cn=null,Cn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,M=null,y=null,_=null,D=null,b=null,C=null,F=null,T=new pe(0,0,0),A=0,z=!1,X=null,ne=null,S=null,I=null,L=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,k=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),O=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=k>=2);let j=null,le={},K=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),ye=new St().fromArray(K),Ce=new St().fromArray(se);function _e(B,me,ge,Ge){let Fe=new Uint8Array(4),Lt=n.createTexture();n.bindTexture(B,Lt),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<ge;Dt++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,Ge,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(me+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return Lt}let ke={};ke[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),ke[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ke[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ke[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Je(n.DEPTH_TEST),l.setFunc(Zc),ve(!1),R(P0),Je(n.CULL_FACE),Q(Gi);function Je(B){d[B]!==!0&&(n.enable(B),d[B]=!0)}function Pe(B){d[B]!==!1&&(n.disable(B),d[B]=!1)}function Ke(B,me){return f[B]!==me?(n.bindFramebuffer(B,me),f[B]=me,i&&(B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=me),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function U(B,me){let ge=x,Ge=!1;if(B)if(ge=g.get(me),ge===void 0&&(ge=[],g.set(me,ge)),B.isWebGLMultipleRenderTargets){let Fe=B.texture;if(ge.length!==Fe.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let Lt=0,Dt=Fe.length;Lt<Dt;Lt++)ge[Lt]=n.COLOR_ATTACHMENT0+Lt;ge.length=Fe.length,Ge=!0}}else ge[0]!==n.COLOR_ATTACHMENT0&&(ge[0]=n.COLOR_ATTACHMENT0,Ge=!0);else ge[0]!==n.BACK&&(ge[0]=n.BACK,Ge=!0);Ge&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function he(B){return m!==B?(n.useProgram(B),m=B,!0):!1}let ee={[gr]:n.FUNC_ADD,[SE]:n.FUNC_SUBTRACT,[TE]:n.FUNC_REVERSE_SUBTRACT};if(i)ee[D0]=n.MIN,ee[N0]=n.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&(ee[D0]=B.MIN_EXT,ee[N0]=B.MAX_EXT)}let ce={[wE]:n.ZERO,[bE]:n.ONE,[AE]:n.SRC_COLOR,[sf]:n.SRC_ALPHA,[DE]:n.SRC_ALPHA_SATURATE,[IE]:n.DST_COLOR,[CE]:n.DST_ALPHA,[RE]:n.ONE_MINUS_SRC_COLOR,[rf]:n.ONE_MINUS_SRC_ALPHA,[LE]:n.ONE_MINUS_DST_COLOR,[PE]:n.ONE_MINUS_DST_ALPHA,[NE]:n.CONSTANT_COLOR,[HE]:n.ONE_MINUS_CONSTANT_COLOR,[UE]:n.CONSTANT_ALPHA,[OE]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(B,me,ge,Ge,Fe,Lt,Dt,cn,Cn,Nt){if(B===Gi){p===!0&&(Pe(n.BLEND),p=!1);return}if(p===!1&&(Je(n.BLEND),p=!0),B!==EE){if(B!==M||Nt!==z){if((y!==gr||b!==gr)&&(n.blendEquation(n.FUNC_ADD),y=gr,b=gr),Nt)switch(B){case xo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $e:n.blendFunc(n.ONE,n.ONE);break;case I0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case L0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case xo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $e:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case I0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case L0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,D=null,C=null,F=null,T.set(0,0,0),A=0,M=B,z=Nt}return}Fe=Fe||me,Lt=Lt||ge,Dt=Dt||Ge,(me!==y||Fe!==b)&&(n.blendEquationSeparate(ee[me],ee[Fe]),y=me,b=Fe),(ge!==_||Ge!==D||Lt!==C||Dt!==F)&&(n.blendFuncSeparate(ce[ge],ce[Ge],ce[Lt],ce[Dt]),_=ge,D=Ge,C=Lt,F=Dt),(cn.equals(T)===!1||Cn!==A)&&(n.blendColor(cn.r,cn.g,cn.b,Cn),T.copy(cn),A=Cn),M=B,z=!1}function De(B,me){B.side===ot?Pe(n.CULL_FACE):Je(n.CULL_FACE);let ge=B.side===wn;me&&(ge=!ge),ve(ge),B.blending===xo&&B.transparent===!1?Q(Gi):Q(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);let Ge=B.stencilWrite;c.setTest(Ge),Ge&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),V(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Je(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ve(B){X!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),X=B)}function R(B){B!==ME?(Je(n.CULL_FACE),B!==ne&&(B===P0?n.cullFace(n.BACK):B===_E?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),ne=B}function w(B){B!==S&&(O&&n.lineWidth(B),S=B)}function V(B,me,ge){B?(Je(n.POLYGON_OFFSET_FILL),(I!==me||L!==ge)&&(n.polygonOffset(me,ge),I=me,L=ge)):Pe(n.POLYGON_OFFSET_FILL)}function ae(B){B?Je(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function re(B){B===void 0&&(B=n.TEXTURE0+H-1),j!==B&&(n.activeTexture(B),j=B)}function ie(B,me,ge){ge===void 0&&(j===null?ge=n.TEXTURE0+H-1:ge=j);let Ge=le[ge];Ge===void 0&&(Ge={type:void 0,texture:void 0},le[ge]=Ge),(Ge.type!==B||Ge.texture!==me)&&(j!==ge&&(n.activeTexture(ge),j=ge),n.bindTexture(B,me||ke[B]),Ge.type=B,Ge.texture=me)}function Ae(){let B=le[j];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function fe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(B){ye.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ye.copy(B))}function Tt(B){Ce.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Ce.copy(B))}function Yt(B,me){let ge=u.get(me);ge===void 0&&(ge=new WeakMap,u.set(me,ge));let Ge=ge.get(B);Ge===void 0&&(Ge=n.getUniformBlockIndex(me,B.name),ge.set(B,Ge))}function ct(B,me){let Ge=u.get(me).get(B);h.get(me)!==Ge&&(n.uniformBlockBinding(me,Ge,B.__bindingPointIndex),h.set(me,Ge))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},j=null,le={},f={},g=new WeakMap,x=[],m=null,p=!1,M=null,y=null,_=null,D=null,b=null,C=null,F=null,T=new pe(0,0,0),A=0,z=!1,X=null,ne=null,S=null,I=null,L=null,ye.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Je,disable:Pe,bindFramebuffer:Ke,drawBuffers:U,useProgram:he,setBlending:Q,setMaterial:De,setFlipSided:ve,setCullFace:R,setLineWidth:w,setPolygonOffset:V,setScissorTest:ae,activeTexture:re,bindTexture:ie,unbindTexture:Ae,compressedTexImage2D:fe,compressedTexImage3D:Ee,texImage2D:Oe,texImage3D:be,updateUBOMapping:Yt,uniformBlockBinding:ct,texStorage2D:ht,texStorage3D:Ze,texSubImage2D:Be,texSubImage3D:et,compressedTexSubImage2D:oe,compressedTexSubImage3D:_t,scissor:it,viewport:Tt,reset:de}}function pA(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return f?new OffscreenCanvas(R,w):Fa("canvas")}function x(R,w,V,ae){let re=1;if((R.width>ae||R.height>ae)&&(re=ae/Math.max(R.width,R.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let ie=w?tu:Math.floor,Ae=ie(re*R.width),fe=ie(re*R.height);u===void 0&&(u=g(Ae,fe));let Ee=V?g(Ae,fe):u;return Ee.width=Ae,Ee.height=fe,Ee.getContext("2d").drawImage(R,0,0,Ae,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ae+"x"+fe+")."),Ee}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return cf(R.width)&&cf(R.height)}function p(R){return a?!1:R.wrapS!==$n||R.wrapT!==$n||R.minFilter!==en&&R.minFilter!==Dn}function M(R,w){return R.generateMipmaps&&w&&R.minFilter!==en&&R.minFilter!==Dn}function y(R){n.generateMipmap(R)}function _(R,w,V,ae,re=!1){if(a===!1)return w;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=w;if(w===n.RED&&(V===n.FLOAT&&(ie=n.R32F),V===n.HALF_FLOAT&&(ie=n.R16F),V===n.UNSIGNED_BYTE&&(ie=n.R8)),w===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(ie=n.R8UI),V===n.UNSIGNED_SHORT&&(ie=n.R16UI),V===n.UNSIGNED_INT&&(ie=n.R32UI),V===n.BYTE&&(ie=n.R8I),V===n.SHORT&&(ie=n.R16I),V===n.INT&&(ie=n.R32I)),w===n.RG&&(V===n.FLOAT&&(ie=n.RG32F),V===n.HALF_FLOAT&&(ie=n.RG16F),V===n.UNSIGNED_BYTE&&(ie=n.RG8)),w===n.RGBA){let Ae=re?Jc:yt.getTransfer(ae);V===n.FLOAT&&(ie=n.RGBA32F),V===n.HALF_FLOAT&&(ie=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ie=Ae===Ct?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function D(R,w,V){return M(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==en&&R.minFilter!==Dn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function b(R){return R===en||R===$c||R===Pa?n.NEAREST:n.LINEAR}function C(R){let w=R.target;w.removeEventListener("dispose",C),T(w),w.isVideoTexture&&h.delete(w)}function F(R){let w=R.target;w.removeEventListener("dispose",F),z(w)}function T(R){let w=i.get(R);if(w.__webglInit===void 0)return;let V=R.source,ae=d.get(V);if(ae){let re=ae[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&A(R),Object.keys(ae).length===0&&d.delete(V)}i.remove(R)}function A(R){let w=i.get(R);n.deleteTexture(w.__webglTexture);let V=R.source,ae=d.get(V);delete ae[w.__cacheKey],o.memory.textures--}function z(R){let w=R.texture,V=i.get(R),ae=i.get(w);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(V.__webglFramebuffer[re]))for(let ie=0;ie<V.__webglFramebuffer[re].length;ie++)n.deleteFramebuffer(V.__webglFramebuffer[re][ie]);else n.deleteFramebuffer(V.__webglFramebuffer[re]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[re])}else{if(Array.isArray(V.__webglFramebuffer))for(let re=0;re<V.__webglFramebuffer.length;re++)n.deleteFramebuffer(V.__webglFramebuffer[re]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let re=0;re<V.__webglColorRenderbuffer.length;re++)V.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[re]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let re=0,ie=w.length;re<ie;re++){let Ae=i.get(w[re]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(w[re])}i.remove(w),i.remove(R)}let X=0;function ne(){X=0}function S(){let R=X;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),X+=1,R}function I(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function L(R,w){let V=i.get(R);if(R.isVideoTexture&&De(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){let ae=R.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(V,R,w);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+w)}function H(R,w){let V=i.get(R);if(R.version>0&&V.__version!==R.version){ye(V,R,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+w)}function O(R,w){let V=i.get(R);if(R.version>0&&V.__version!==R.version){ye(V,R,w);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+w)}function k(R,w){let V=i.get(R);if(R.version>0&&V.__version!==R.version){Ce(V,R,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+w)}let $={[bi]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[Oa]:n.MIRRORED_REPEAT},j={[en]:n.NEAREST,[$c]:n.NEAREST_MIPMAP_NEAREST,[Pa]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[ep]:n.LINEAR_MIPMAP_NEAREST,[Ns]:n.LINEAR_MIPMAP_LINEAR},le={[a1]:n.NEVER,[f1]:n.ALWAYS,[l1]:n.LESS,[Ux]:n.LEQUAL,[c1]:n.EQUAL,[d1]:n.GEQUAL,[u1]:n.GREATER,[h1]:n.NOTEQUAL};function K(R,w,V){if(V?(n.texParameteri(R,n.TEXTURE_WRAP_S,$[w.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,$[w.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,$[w.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,j[w.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,j[w.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==$n||w.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,b(w.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==en&&w.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ae=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===en||w.minFilter!==Pa&&w.minFilter!==Ns||w.type===as&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ai&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(R,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function se(R,w){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",C));let ae=w.source,re=d.get(ae);re===void 0&&(re={},d.set(ae,re));let ie=I(w);if(ie!==R.__cacheKey){re[ie]===void 0&&(re[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),re[ie].usedTimes++;let Ae=re[R.__cacheKey];Ae!==void 0&&(re[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&A(w)),R.__cacheKey=ie,R.__webglTexture=re[ie].texture}return V}function ye(R,w,V){let ae=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=n.TEXTURE_3D);let re=se(R,w),ie=w.source;t.bindTexture(ae,R.__webglTexture,n.TEXTURE0+V);let Ae=i.get(ie);if(ie.version!==Ae.__version||re===!0){t.activeTexture(n.TEXTURE0+V);let fe=yt.getPrimaries(yt.workingColorSpace),Ee=w.colorSpace===oi?null:yt.getPrimaries(w.colorSpace),Be=w.colorSpace===oi||fe===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let et=p(w)&&m(w.image)===!1,oe=x(w.image,et,!1,s.maxTextureSize);oe=ve(w,oe);let _t=m(oe)||a,ht=r.convert(w.format,w.colorSpace),Ze=r.convert(w.type),Oe=_(w.internalFormat,ht,Ze,w.colorSpace,w.isVideoTexture);K(ae,w,_t);let be,it=w.mipmaps,Tt=a&&w.isVideoTexture!==!0&&Oe!==Lx,Yt=Ae.__version===void 0||re===!0,ct=D(w,oe,_t);if(w.isDepthTexture)Oe=n.DEPTH_COMPONENT,a?w.type===as?Oe=n.DEPTH_COMPONENT32F:w.type===Cs?Oe=n.DEPTH_COMPONENT24:w.type===vr?Oe=n.DEPTH24_STENCIL8:Oe=n.DEPTH_COMPONENT16:w.type===as&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Mr&&Oe===n.DEPTH_COMPONENT&&w.type!==tp&&w.type!==Cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Cs,Ze=r.convert(w.type)),w.format===Eo&&Oe===n.DEPTH_COMPONENT&&(Oe=n.DEPTH_STENCIL,w.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=vr,Ze=r.convert(w.type))),Yt&&(Tt?t.texStorage2D(n.TEXTURE_2D,1,Oe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Oe,oe.width,oe.height,0,ht,Ze,null));else if(w.isDataTexture)if(it.length>0&&_t){Tt&&Yt&&t.texStorage2D(n.TEXTURE_2D,ct,Oe,it[0].width,it[0].height);for(let de=0,B=it.length;de<B;de++)be=it[de],Tt?t.texSubImage2D(n.TEXTURE_2D,de,0,0,be.width,be.height,ht,Ze,be.data):t.texImage2D(n.TEXTURE_2D,de,Oe,be.width,be.height,0,ht,Ze,be.data);w.generateMipmaps=!1}else Tt?(Yt&&t.texStorage2D(n.TEXTURE_2D,ct,Oe,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ht,Ze,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,oe.width,oe.height,0,ht,Ze,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Tt&&Yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Oe,it[0].width,it[0].height,oe.depth);for(let de=0,B=it.length;de<B;de++)be=it[de],w.format!==ri?ht!==null?Tt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,be.width,be.height,oe.depth,ht,be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Oe,be.width,be.height,oe.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,be.width,be.height,oe.depth,ht,Ze,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Oe,be.width,be.height,oe.depth,0,ht,Ze,be.data)}else{Tt&&Yt&&t.texStorage2D(n.TEXTURE_2D,ct,Oe,it[0].width,it[0].height);for(let de=0,B=it.length;de<B;de++)be=it[de],w.format!==ri?ht!==null?Tt?t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,be.width,be.height,ht,be.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Oe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?t.texSubImage2D(n.TEXTURE_2D,de,0,0,be.width,be.height,ht,Ze,be.data):t.texImage2D(n.TEXTURE_2D,de,Oe,be.width,be.height,0,ht,Ze,be.data)}else if(w.isDataArrayTexture)Tt?(Yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Oe,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ht,Ze,oe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,oe.width,oe.height,oe.depth,0,ht,Ze,oe.data);else if(w.isData3DTexture)Tt?(Yt&&t.texStorage3D(n.TEXTURE_3D,ct,Oe,oe.width,oe.height,oe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ht,Ze,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,oe.width,oe.height,oe.depth,0,ht,Ze,oe.data);else if(w.isFramebufferTexture){if(Yt)if(Tt)t.texStorage2D(n.TEXTURE_2D,ct,Oe,oe.width,oe.height);else{let de=oe.width,B=oe.height;for(let me=0;me<ct;me++)t.texImage2D(n.TEXTURE_2D,me,Oe,de,B,0,ht,Ze,null),de>>=1,B>>=1}}else if(it.length>0&&_t){Tt&&Yt&&t.texStorage2D(n.TEXTURE_2D,ct,Oe,it[0].width,it[0].height);for(let de=0,B=it.length;de<B;de++)be=it[de],Tt?t.texSubImage2D(n.TEXTURE_2D,de,0,0,ht,Ze,be):t.texImage2D(n.TEXTURE_2D,de,Oe,ht,Ze,be);w.generateMipmaps=!1}else Tt?(Yt&&t.texStorage2D(n.TEXTURE_2D,ct,Oe,oe.width,oe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,Ze,oe)):t.texImage2D(n.TEXTURE_2D,0,Oe,ht,Ze,oe);M(w,_t)&&y(ae),Ae.__version=ie.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Ce(R,w,V){if(w.image.length!==6)return;let ae=se(R,w),re=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);let ie=i.get(re);if(re.version!==ie.__version||ae===!0){t.activeTexture(n.TEXTURE0+V);let Ae=yt.getPrimaries(yt.workingColorSpace),fe=w.colorSpace===oi?null:yt.getPrimaries(w.colorSpace),Ee=w.colorSpace===oi||Ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Be=w.isCompressedTexture||w.image[0].isCompressedTexture,et=w.image[0]&&w.image[0].isDataTexture,oe=[];for(let de=0;de<6;de++)!Be&&!et?oe[de]=x(w.image[de],!1,!0,s.maxCubemapSize):oe[de]=et?w.image[de].image:w.image[de],oe[de]=ve(w,oe[de]);let _t=oe[0],ht=m(_t)||a,Ze=r.convert(w.format,w.colorSpace),Oe=r.convert(w.type),be=_(w.internalFormat,Ze,Oe,w.colorSpace),it=a&&w.isVideoTexture!==!0,Tt=ie.__version===void 0||ae===!0,Yt=D(w,_t,ht);K(n.TEXTURE_CUBE_MAP,w,ht);let ct;if(Be){it&&Tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Yt,be,_t.width,_t.height);for(let de=0;de<6;de++){ct=oe[de].mipmaps;for(let B=0;B<ct.length;B++){let me=ct[B];w.format!==ri?Ze!==null?it?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,B,0,0,me.width,me.height,Ze,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,B,be,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,B,0,0,me.width,me.height,Ze,Oe,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,B,be,me.width,me.height,0,Ze,Oe,me.data)}}}else{ct=w.mipmaps,it&&Tt&&(ct.length>0&&Yt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Yt,be,oe[0].width,oe[0].height));for(let de=0;de<6;de++)if(et){it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,oe[de].width,oe[de].height,Ze,Oe,oe[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,be,oe[de].width,oe[de].height,0,Ze,Oe,oe[de].data);for(let B=0;B<ct.length;B++){let ge=ct[B].image[de].image;it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,B+1,0,0,ge.width,ge.height,Ze,Oe,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,B+1,be,ge.width,ge.height,0,Ze,Oe,ge.data)}}else{it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ze,Oe,oe[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,be,Ze,Oe,oe[de]);for(let B=0;B<ct.length;B++){let me=ct[B];it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,B+1,0,0,Ze,Oe,me.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,B+1,be,Ze,Oe,me.image[de])}}}M(w,ht)&&y(n.TEXTURE_CUBE_MAP),ie.__version=re.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function _e(R,w,V,ae,re,ie){let Ae=r.convert(V.format,V.colorSpace),fe=r.convert(V.type),Ee=_(V.internalFormat,Ae,fe,V.colorSpace);if(!i.get(w).__hasExternalTextures){let et=Math.max(1,w.width>>ie),oe=Math.max(1,w.height>>ie);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ie,Ee,et,oe,w.depth,0,Ae,fe,null):t.texImage2D(re,ie,Ee,et,oe,0,Ae,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Q(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,re,i.get(V).__webglTexture,0,ce(w)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,re,i.get(V).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(R,w,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let ae=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||Q(w)){let re=w.depthTexture;re&&re.isDepthTexture&&(re.type===as?ae=n.DEPTH_COMPONENT32F:re.type===Cs&&(ae=n.DEPTH_COMPONENT24));let ie=ce(w);Q(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ae,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ae,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){let ae=ce(w);V&&Q(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,w.width,w.height):Q(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{let ae=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<ae.length;re++){let ie=ae[re],Ae=r.convert(ie.format,ie.colorSpace),fe=r.convert(ie.type),Ee=_(ie.internalFormat,Ae,fe,ie.colorSpace),Be=ce(w);V&&Q(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Ee,w.width,w.height):Q(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,Ee,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Je(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),L(w.depthTexture,0);let ae=i.get(w.depthTexture).__webglTexture,re=ce(w);if(w.depthTexture.format===Mr)Q(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(w.depthTexture.format===Eo)Q(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Pe(R){let w=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Je(w.__webglFramebuffer,R)}else if(V){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]=n.createRenderbuffer(),ke(w.__webglDepthbuffer[ae],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),ke(w.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(R,w,V){let ae=i.get(R);w!==void 0&&_e(ae.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Pe(R)}function U(R){let w=R.texture,V=i.get(R),ae=i.get(w);R.addEventListener("dispose",F),R.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=w.version,o.memory.textures++);let re=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,Ae=m(R)||a;if(re){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)V.__webglFramebuffer[fe][Ee]=n.createFramebuffer()}else V.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)V.__webglFramebuffer[fe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ie)if(s.drawBuffers){let fe=R.texture;for(let Ee=0,Be=fe.length;Ee<Be;Ee++){let et=i.get(fe[Ee]);et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Q(R)===!1){let fe=ie?w:[w];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Ee=0;Ee<fe.length;Ee++){let Be=fe[Ee];V.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Ee]);let et=r.convert(Be.format,Be.colorSpace),oe=r.convert(Be.type),_t=_(Be.internalFormat,et,oe,Be.colorSpace,R.isXRRenderTarget===!0),ht=ce(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,_t,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,V.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),K(n.TEXTURE_CUBE_MAP,w,Ae);for(let fe=0;fe<6;fe++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)_e(V.__webglFramebuffer[fe][Ee],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee);else _e(V.__webglFramebuffer[fe],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);M(w,Ae)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){let fe=R.texture;for(let Ee=0,Be=fe.length;Ee<Be;Ee++){let et=fe[Ee],oe=i.get(et);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),K(n.TEXTURE_2D,et,Ae),_e(V.__webglFramebuffer,R,et,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,0),M(et,Ae)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ae.__webglTexture),K(fe,w,Ae),a&&w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)_e(V.__webglFramebuffer[Ee],R,w,n.COLOR_ATTACHMENT0,fe,Ee);else _e(V.__webglFramebuffer,R,w,n.COLOR_ATTACHMENT0,fe,0);M(w,Ae)&&y(fe),t.unbindTexture()}R.depthBuffer&&Pe(R)}function he(R){let w=m(R)||a,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ae=0,re=V.length;ae<re;ae++){let ie=V[ae];if(M(ie,w)){let Ae=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(ie).__webglTexture;t.bindTexture(Ae,fe),y(Ae),t.unbindTexture()}}}function ee(R){if(a&&R.samples>0&&Q(R)===!1){let w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,ae=R.height,re=n.COLOR_BUFFER_BIT,ie=[],Ae=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(R),Ee=R.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Be=0;Be<w.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Be=0;Be<w.length;Be++){ie.push(n.COLOR_ATTACHMENT0+Be),R.depthBuffer&&ie.push(Ae);let et=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(et===!1&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),Ee&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Be]),et===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ae])),Ee){let oe=i.get(w[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,V,ae,0,0,V,ae,re,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let Be=0;Be<w.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Be]);let et=i.get(w[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function ce(R){return Math.min(s.maxSamples,R.samples)}function Q(R){let w=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function De(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function ve(R,w){let V=R.colorSpace,ae=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===lf||V!==nn&&V!==oi&&(yt.getTransfer(V)===Ct?a===!1?e.has("EXT_sRGB")===!0&&ae===ri?(R.format=lf,R.minFilter=Dn,R.generateMipmaps=!1):w=nu.sRGBToLinear(w):(ae!==ri||re!==Ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=S,this.resetTextureUnits=ne,this.setTexture2D=L,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=k,this.rebindTextures=Ke,this.setupRenderTarget=U,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Q}function mA(n,e,t){let i=t.isWebGL2;function s(r,o=oi){let a,l=yt.getTransfer(o);if(r===Ls)return n.UNSIGNED_BYTE;if(r===Ax)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Rx)return n.UNSIGNED_SHORT_5_5_5_1;if(r===ZE)return n.BYTE;if(r===$E)return n.SHORT;if(r===tp)return n.UNSIGNED_SHORT;if(r===bx)return n.INT;if(r===Cs)return n.UNSIGNED_INT;if(r===as)return n.FLOAT;if(r===Ai)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===JE)return n.ALPHA;if(r===ri)return n.RGBA;if(r===jE)return n.LUMINANCE;if(r===QE)return n.LUMINANCE_ALPHA;if(r===Mr)return n.DEPTH_COMPONENT;if(r===Eo)return n.DEPTH_STENCIL;if(r===lf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===e1)return n.RED;if(r===Cx)return n.RED_INTEGER;if(r===t1)return n.RG;if(r===Px)return n.RG_INTEGER;if(r===Ix)return n.RGBA_INTEGER;if(r===Md||r===_d||r===Ed||r===Sd)if(l===Ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Md)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_d)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Md)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_d)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ed)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===U0||r===O0||r===B0||r===F0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===U0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===O0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===B0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===F0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===z0||r===k0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===z0)return l===Ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===k0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===G0||r===V0||r===W0||r===X0||r===Y0||r===q0||r===K0||r===Z0||r===$0||r===J0||r===j0||r===Q0||r===eg||r===tg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===G0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===V0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===W0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===X0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Y0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===q0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===K0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Z0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===J0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===j0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Q0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eg)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tg)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Td||r===ng||r===ig)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Td)return l===Ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ng)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ig)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===n1||r===sg||r===rg||r===og)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Td)return a.COMPRESSED_RED_RGTC1_EXT;if(r===sg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===og)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Ef=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ve=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},gA={type:"move"},Na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ve;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Sf=class extends Hs{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),m=null,p=null,M=[],y=[],_=new J,D=null,b=new $t;b.layers.enable(1),b.viewport=new St;let C=new $t;C.layers.enable(2),C.viewport=new St;let F=[b,C],T=new Ef;T.layers.enable(1),T.layers.enable(2);let A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=M[K];return se===void 0&&(se=new Na,M[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=M[K];return se===void 0&&(se=new Na,M[K]=se),se.getGripSpace()},this.getHand=function(K){let se=M[K];return se===void 0&&(se=new Na,M[K]=se),se.getHandSpace()};function X(K){let se=y.indexOf(K.inputSource);if(se===-1)return;let ye=M[se];ye!==void 0&&(ye.update(K.inputSource,K.frame,c||o),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function ne(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",S);for(let K=0;K<M.length;K++){let se=y[K];se!==null&&(y[K]=null,M[K].disconnect(se))}A=null,z=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",S),x.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(_),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let se={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new gn(f.framebufferWidth,f.framebufferHeight,{format:ri,type:Ls,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let se=null,ye=null,Ce=null;x.depth&&(Ce=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=x.stencil?Eo:Mr,ye=x.stencil?vr:Cs);let _e={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(_e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new gn(d.textureWidth,d.textureHeight,{format:ri,type:Ls,depthTexture:new uu(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let ke=e.properties.get(p);ke.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function S(K){for(let se=0;se<K.removed.length;se++){let ye=K.removed[se],Ce=y.indexOf(ye);Ce>=0&&(y[Ce]=null,M[Ce].disconnect(ye))}for(let se=0;se<K.added.length;se++){let ye=K.added[se],Ce=y.indexOf(ye);if(Ce===-1){for(let ke=0;ke<M.length;ke++)if(ke>=y.length){y.push(ye),Ce=ke;break}else if(y[ke]===null){y[ke]=ye,Ce=ke;break}if(Ce===-1)break}let _e=M[Ce];_e&&_e.connect(ye)}}let I=new E,L=new E;function H(K,se,ye){I.setFromMatrixPosition(se.matrixWorld),L.setFromMatrixPosition(ye.matrixWorld);let Ce=I.distanceTo(L),_e=se.projectionMatrix.elements,ke=ye.projectionMatrix.elements,Je=_e[14]/(_e[10]-1),Pe=_e[14]/(_e[10]+1),Ke=(_e[9]+1)/_e[5],U=(_e[9]-1)/_e[5],he=(_e[8]-1)/_e[0],ee=(ke[8]+1)/ke[0],ce=Je*he,Q=Je*ee,De=Ce/(-he+ee),ve=De*-he;se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ve),K.translateZ(De),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let R=Je+De,w=Pe+De,V=ce-ve,ae=Q+(Ce-ve),re=Ke*Pe/w*R,ie=U*Pe/w*R;K.projectionMatrix.makePerspective(V,ae,re,ie,R,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function O(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;T.near=C.near=b.near=K.near,T.far=C.far=b.far=K.far,(A!==T.near||z!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),A=T.near,z=T.far);let se=K.parent,ye=T.cameras;O(T,se);for(let Ce=0;Ce<ye.length;Ce++)O(ye[Ce],se);ye.length===2?H(T,b,C):T.projectionMatrix.copy(b.projectionMatrix),k(K,T,se)};function k(K,se,ye){ye===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=To*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)};let $=null;function j(K,se){if(h=se.getViewerPose(c||o),g=se,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Ce=!1;ye.length!==T.cameras.length&&(T.cameras.length=0,Ce=!0);for(let _e=0;_e<ye.length;_e++){let ke=ye[_e],Je=null;if(f!==null)Je=f.getViewport(ke);else{let Ke=u.getViewSubImage(d,ke);Je=Ke.viewport,_e===0&&(e.setRenderTargetTextures(p,Ke.colorTexture,d.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(p))}let Pe=F[_e];Pe===void 0&&(Pe=new $t,Pe.layers.enable(_e),Pe.viewport=new St,F[_e]=Pe),Pe.matrix.fromArray(ke.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(ke.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Je.x,Je.y,Je.width,Je.height),_e===0&&(T.matrix.copy(Pe.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ce===!0&&T.cameras.push(Pe)}}for(let ye=0;ye<M.length;ye++){let Ce=y[ye],_e=M[ye];Ce!==null&&_e!==void 0&&_e.update(Ce,se,c||o)}$&&$(K,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}let le=new zx;le.setAnimationLoop(j),this.setAnimationLoop=function(K){$=K},this.dispose=function(){}}};function xA(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Fx(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yA(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){let _=y.program;i.uniformBlockBinding(M,_)}function c(M,y){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));let D=y.program;i.updateUBOMapping(M,D);let b=e.render.frame;r[M.id]!==b&&(d(M),r[M.id]=b)}function h(M){let y=u();M.__bindingPointIndex=y;let _=n.createBuffer(),D=M.__size,b=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,D,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=s[M.id],_=M.uniforms,D=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let b=0,C=_.length;b<C;b++){let F=Array.isArray(_[b])?_[b]:[_[b]];for(let T=0,A=F.length;T<A;T++){let z=F[T];if(f(z,b,T,D)===!0){let X=z.__offset,ne=Array.isArray(z.value)?z.value:[z.value],S=0;for(let I=0;I<ne.length;I++){let L=ne[I],H=x(L);typeof L=="number"||typeof L=="boolean"?(z.__data[0]=L,n.bufferSubData(n.UNIFORM_BUFFER,X+S,z.__data)):L.isMatrix3?(z.__data[0]=L.elements[0],z.__data[1]=L.elements[1],z.__data[2]=L.elements[2],z.__data[3]=0,z.__data[4]=L.elements[3],z.__data[5]=L.elements[4],z.__data[6]=L.elements[5],z.__data[7]=0,z.__data[8]=L.elements[6],z.__data[9]=L.elements[7],z.__data[10]=L.elements[8],z.__data[11]=0):(L.toArray(z.__data,S),S+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,y,_,D){let b=M.value,C=y+"_"+_;if(D[C]===void 0)return typeof b=="number"||typeof b=="boolean"?D[C]=b:D[C]=b.clone(),!0;{let F=D[C];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return D[C]=b,!0}else if(F.equals(b)===!1)return F.copy(b),!0}return!1}function g(M){let y=M.uniforms,_=0,D=16;for(let C=0,F=y.length;C<F;C++){let T=Array.isArray(y[C])?y[C]:[y[C]];for(let A=0,z=T.length;A<z;A++){let X=T[A],ne=Array.isArray(X.value)?X.value:[X.value];for(let S=0,I=ne.length;S<I;S++){let L=ne[S],H=x(L),O=_%D;O!==0&&D-O<H.boundary&&(_+=D-O),X.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=_,_+=H.storage}}}let b=_%D;return b>0&&(_+=D-b),M.__size=_,M.__cache={},this}function x(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ga=class{constructor(e={}){let{canvas:t=R1(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=Is,this.toneMappingExposure=1;let y=this,_=!1,D=0,b=0,C=null,F=-1,T=null,A=new St,z=new St,X=null,ne=new pe(0),S=0,I=t.width,L=t.height,H=1,O=null,k=null,$=new St(0,0,I,L),j=new St(0,0,I,L),le=!1,K=new ka,se=!1,ye=!1,Ce=null,_e=new Ye,ke=new J,Je=new E,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return C===null?H:1}let U=i;function he(P,G){for(let q=0;q<P.length;q++){let Z=P[q],Y=t.getContext(Z,G);if(Y!==null)return Y}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",me,!1),U===null){let G=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&G.shift(),U=he(G,P),U===null)throw he(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ee,ce,Q,De,ve,R,w,V,ae,re,ie,Ae,fe,Ee,Be,et,oe,_t,ht,Ze,Oe,be,it,Tt;function Yt(){ee=new Ow(U),ce=new Iw(U,ee,e),ee.init(ce),be=new mA(U,ee,ce),Q=new fA(U,ee,ce),De=new zw(U),ve=new tA,R=new pA(U,ee,Q,ve,ce,be,De),w=new Dw(y),V=new Uw(y),ae=new K1(U,ce),it=new Cw(U,ee,ae,ce),re=new Bw(U,ae,De,it),ie=new Ww(U,re,ae,De),ht=new Vw(U,ce,R),et=new Lw(ve),Ae=new eA(y,w,V,ee,ce,it,et),fe=new xA(y,ve),Ee=new iA,Be=new cA(ee,ce),_t=new Rw(y,w,V,Q,ie,d,l),oe=new dA(y,ie,ce),Tt=new yA(U,De,ce,Q),Ze=new Pw(U,ee,De,ce),Oe=new Fw(U,ee,De,ce),De.programs=Ae.programs,y.capabilities=ce,y.extensions=ee,y.properties=ve,y.renderLists=Ee,y.shadowMap=oe,y.state=Q,y.info=De}Yt();let ct=new Sf(y,U);this.xr=ct,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let P=ee.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ee.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(I,L,!1))},this.getSize=function(P){return P.set(I,L)},this.setSize=function(P,G,q=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=P,L=G,t.width=Math.floor(P*H),t.height=Math.floor(G*H),q===!0&&(t.style.width=P+"px",t.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(I*H,L*H).floor()},this.setDrawingBufferSize=function(P,G,q){I=P,L=G,H=q,t.width=Math.floor(P*q),t.height=Math.floor(G*q),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy($)},this.setViewport=function(P,G,q,Z){P.isVector4?$.set(P.x,P.y,P.z,P.w):$.set(P,G,q,Z),Q.viewport(A.copy($).multiplyScalar(H).floor())},this.getScissor=function(P){return P.copy(j)},this.setScissor=function(P,G,q,Z){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,G,q,Z),Q.scissor(z.copy(j).multiplyScalar(H).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(P){Q.setScissorTest(le=P)},this.setOpaqueSort=function(P){O=P},this.setTransparentSort=function(P){k=P},this.getClearColor=function(P){return P.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(P=!0,G=!0,q=!0){let Z=0;if(P){let Y=!1;if(C!==null){let Me=C.texture.format;Y=Me===Ix||Me===Px||Me===Cx}if(Y){let Me=C.texture.type,Le=Me===Ls||Me===Cs||Me===tp||Me===vr||Me===Ax||Me===Rx,ze=_t.getClearColor(),We=_t.getClearAlpha(),at=ze.r,je=ze.g,tt=ze.b;Le?(f[0]=at,f[1]=je,f[2]=tt,f[3]=We,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=at,g[1]=je,g[2]=tt,g[3]=We,U.clearBufferiv(U.COLOR,0,g))}else Z|=U.COLOR_BUFFER_BIT}G&&(Z|=U.DEPTH_BUFFER_BIT),q&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ee.dispose(),Be.dispose(),ve.dispose(),w.dispose(),V.dispose(),ie.dispose(),it.dispose(),Tt.dispose(),Ae.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Cn),ct.removeEventListener("sessionend",Nt),Ce&&(Ce.dispose(),Ce=null),Pn.stop()};function de(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let P=De.autoReset,G=oe.enabled,q=oe.autoUpdate,Z=oe.needsUpdate,Y=oe.type;Yt(),De.autoReset=P,oe.enabled=G,oe.autoUpdate=q,oe.needsUpdate=Z,oe.type=Y}function me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ge(P){let G=P.target;G.removeEventListener("dispose",ge),Ge(G)}function Ge(P){Fe(P),ve.remove(P)}function Fe(P){let G=ve.get(P).programs;G!==void 0&&(G.forEach(function(q){Ae.releaseProgram(q)}),P.isShaderMaterial&&Ae.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,q,Z,Y,Me){G===null&&(G=Pe);let Le=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=gE(P,G,q,Z,Y);Q.setMaterial(Z,Le);let We=q.index,at=1;if(Z.wireframe===!0){if(We=re.getWireframeAttribute(q),We===void 0)return;at=2}let je=q.drawRange,tt=q.attributes.position,Zt=je.start*at,Yn=(je.start+je.count)*at;Me!==null&&(Zt=Math.max(Zt,Me.start*at),Yn=Math.min(Yn,(Me.start+Me.count)*at)),We!==null?(Zt=Math.max(Zt,0),Yn=Math.min(Yn,We.count)):tt!=null&&(Zt=Math.max(Zt,0),Yn=Math.min(Yn,tt.count));let un=Yn-Zt;if(un<0||un===1/0)return;it.setup(Y,Z,ze,q,We);let Qi,Wt=Ze;if(We!==null&&(Qi=ae.get(We),Wt=Oe,Wt.setIndex(Qi)),Y.isMesh)Z.wireframe===!0?(Q.setLineWidth(Z.wireframeLinewidth*Ke()),Wt.setMode(U.LINES)):Wt.setMode(U.TRIANGLES);else if(Y.isLine){let ut=Z.linewidth;ut===void 0&&(ut=1),Q.setLineWidth(ut*Ke()),Y.isLineSegments?Wt.setMode(U.LINES):Y.isLineLoop?Wt.setMode(U.LINE_LOOP):Wt.setMode(U.LINE_STRIP)}else Y.isPoints?Wt.setMode(U.POINTS):Y.isSprite&&Wt.setMode(U.TRIANGLES);if(Y.isBatchedMesh)Wt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Wt.renderInstances(Zt,un,Y.count);else if(q.isInstancedBufferGeometry){let ut=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,gd=Math.min(q.instanceCount,ut);Wt.renderInstances(Zt,un,gd)}else Wt.render(Zt,un)};function Lt(P,G,q){P.transparent===!0&&P.side===ot&&P.forceSinglePass===!1?(P.side=wn,P.needsUpdate=!0,pc(P,G,q),P.side=Bn,P.needsUpdate=!0,pc(P,G,q),P.side=ot):pc(P,G,q)}this.compile=function(P,G,q=null){q===null&&(q=P),m=Be.get(q),m.init(),M.push(m),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),P!==q&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(y._useLegacyLights);let Z=new Set;return P.traverse(function(Y){let Me=Y.material;if(Me)if(Array.isArray(Me))for(let Le=0;Le<Me.length;Le++){let ze=Me[Le];Lt(ze,q,Y),Z.add(ze)}else Lt(Me,q,Y),Z.add(Me)}),M.pop(),m=null,Z},this.compileAsync=function(P,G,q=null){let Z=this.compile(P,G,q);return new Promise(Y=>{function Me(){if(Z.forEach(function(Le){ve.get(Le).currentProgram.isReady()&&Z.delete(Le)}),Z.size===0){Y(P);return}setTimeout(Me,10)}ee.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Dt=null;function cn(P){Dt&&Dt(P)}function Cn(){Pn.stop()}function Nt(){Pn.start()}let Pn=new zx;Pn.setAnimationLoop(cn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(P){Dt=P,ct.setAnimationLoop(P),P===null?Pn.stop():Pn.start()},ct.addEventListener("sessionstart",Cn),ct.addEventListener("sessionend",Nt),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(G),G=ct.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,G,C),m=Be.get(P,M.length),m.init(),M.push(m),_e.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),K.setFromProjectionMatrix(_e),ye=this.localClippingEnabled,se=et.init(this.clippingPlanes,ye),x=Ee.get(P,p.length),x.init(),p.push(x),Fi(P,G,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(O,k),this.info.render.frame++,se===!0&&et.beginShadows();let q=m.state.shadowsArray;if(oe.render(q,P,G),se===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset(),_t.render(x,P),m.setupLights(y._useLegacyLights),G.isArrayCamera){let Z=G.cameras;for(let Y=0,Me=Z.length;Y<Me;Y++){let Le=Z[Y];T0(x,P,Le,Le.viewport)}}else T0(x,P,G);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(y,P,G),it.resetDefaultState(),F=-1,T=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Fi(P,G,q,Z){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||K.intersectsSprite(P)){Z&&Je.setFromMatrixPosition(P.matrixWorld).applyMatrix4(_e);let Le=ie.update(P),ze=P.material;ze.visible&&x.push(P,Le,ze,q,Je.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||K.intersectsObject(P))){let Le=ie.update(P),ze=P.material;if(Z&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Je.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Je.copy(Le.boundingSphere.center)),Je.applyMatrix4(P.matrixWorld).applyMatrix4(_e)),Array.isArray(ze)){let We=Le.groups;for(let at=0,je=We.length;at<je;at++){let tt=We[at],Zt=ze[tt.materialIndex];Zt&&Zt.visible&&x.push(P,Le,Zt,q,Je.z,tt)}}else ze.visible&&x.push(P,Le,ze,q,Je.z,null)}}let Me=P.children;for(let Le=0,ze=Me.length;Le<ze;Le++)Fi(Me[Le],G,q,Z)}function T0(P,G,q,Z){let Y=P.opaque,Me=P.transmissive,Le=P.transparent;m.setupLightsView(q),se===!0&&et.setGlobalState(y.clippingPlanes,q),Me.length>0&&mE(Y,Me,G,q),Z&&Q.viewport(A.copy(Z)),Y.length>0&&fc(Y,G,q),Me.length>0&&fc(Me,G,q),Le.length>0&&fc(Le,G,q),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function mE(P,G,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let Me=ce.isWebGL2;Ce===null&&(Ce=new gn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?Ai:Ls,minFilter:Ns,samples:Me?4:0})),y.getDrawingBufferSize(ke),Me?Ce.setSize(ke.x,ke.y):Ce.setSize(tu(ke.x),tu(ke.y));let Le=y.getRenderTarget();y.setRenderTarget(Ce),y.getClearColor(ne),S=y.getClearAlpha(),S<1&&y.setClearColor(16777215,.5),y.clear();let ze=y.toneMapping;y.toneMapping=Is,fc(P,q,Z),R.updateMultisampleRenderTarget(Ce),R.updateRenderTargetMipmap(Ce);let We=!1;for(let at=0,je=G.length;at<je;at++){let tt=G[at],Zt=tt.object,Yn=tt.geometry,un=tt.material,Qi=tt.group;if(un.side===ot&&Zt.layers.test(Z.layers)){let Wt=un.side;un.side=wn,un.needsUpdate=!0,w0(Zt,q,Z,Yn,un,Qi),un.side=Wt,un.needsUpdate=!0,We=!0}}We===!0&&(R.updateMultisampleRenderTarget(Ce),R.updateRenderTargetMipmap(Ce)),y.setRenderTarget(Le),y.setClearColor(ne,S),y.toneMapping=ze}function fc(P,G,q){let Z=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,Me=P.length;Y<Me;Y++){let Le=P[Y],ze=Le.object,We=Le.geometry,at=Z===null?Le.material:Z,je=Le.group;ze.layers.test(q.layers)&&w0(ze,G,q,We,at,je)}}function w0(P,G,q,Z,Y,Me){P.onBeforeRender(y,G,q,Z,Y,Me),P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(y,G,q,Z,P,Me),Y.transparent===!0&&Y.side===ot&&Y.forceSinglePass===!1?(Y.side=wn,Y.needsUpdate=!0,y.renderBufferDirect(q,G,Z,Y,P,Me),Y.side=Bn,Y.needsUpdate=!0,y.renderBufferDirect(q,G,Z,Y,P,Me),Y.side=ot):y.renderBufferDirect(q,G,Z,Y,P,Me),P.onAfterRender(y,G,q,Z,Y,Me)}function pc(P,G,q){G.isScene!==!0&&(G=Pe);let Z=ve.get(P),Y=m.state.lights,Me=m.state.shadowsArray,Le=Y.state.version,ze=Ae.getParameters(P,Y.state,Me,G,q),We=Ae.getProgramCacheKey(ze),at=Z.programs;Z.environment=P.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(P.isMeshStandardMaterial?V:w).get(P.envMap||Z.environment),at===void 0&&(P.addEventListener("dispose",ge),at=new Map,Z.programs=at);let je=at.get(We);if(je!==void 0){if(Z.currentProgram===je&&Z.lightsStateVersion===Le)return A0(P,ze),je}else ze.uniforms=Ae.getUniforms(P),P.onBuild(q,ze,y),P.onBeforeCompile(ze,y),je=Ae.acquireProgram(ze,We),at.set(We,je),Z.uniforms=ze.uniforms;let tt=Z.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(tt.clippingPlanes=et.uniform),A0(P,ze),Z.needsLights=yE(P),Z.lightsStateVersion=Le,Z.needsLights&&(tt.ambientLightColor.value=Y.state.ambient,tt.lightProbe.value=Y.state.probe,tt.directionalLights.value=Y.state.directional,tt.directionalLightShadows.value=Y.state.directionalShadow,tt.spotLights.value=Y.state.spot,tt.spotLightShadows.value=Y.state.spotShadow,tt.rectAreaLights.value=Y.state.rectArea,tt.ltc_1.value=Y.state.rectAreaLTC1,tt.ltc_2.value=Y.state.rectAreaLTC2,tt.pointLights.value=Y.state.point,tt.pointLightShadows.value=Y.state.pointShadow,tt.hemisphereLights.value=Y.state.hemi,tt.directionalShadowMap.value=Y.state.directionalShadowMap,tt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,tt.spotShadowMap.value=Y.state.spotShadowMap,tt.spotLightMatrix.value=Y.state.spotLightMatrix,tt.spotLightMap.value=Y.state.spotLightMap,tt.pointShadowMap.value=Y.state.pointShadowMap,tt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=je,Z.uniformsList=null,je}function b0(P){if(P.uniformsList===null){let G=P.currentProgram.getUniforms();P.uniformsList=vo.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function A0(P,G){let q=ve.get(P);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function gE(P,G,q,Z,Y){G.isScene!==!0&&(G=Pe),R.resetTextureUnits();let Me=G.fog,Le=Z.isMeshStandardMaterial?G.environment:null,ze=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:nn,We=(Z.isMeshStandardMaterial?V:w).get(Z.envMap||Le),at=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),tt=!!q.morphAttributes.position,Zt=!!q.morphAttributes.normal,Yn=!!q.morphAttributes.color,un=Is;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(un=y.toneMapping);let Qi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Wt=Qi!==void 0?Qi.length:0,ut=ve.get(Z),gd=m.state.lights;if(se===!0&&(ye===!0||P!==T)){let ii=P===T&&Z.id===F;et.setState(Z,P,ii)}let qt=!1;Z.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==gd.state.version||ut.outputColorSpace!==ze||Y.isBatchedMesh&&ut.batching===!1||!Y.isBatchedMesh&&ut.batching===!0||Y.isInstancedMesh&&ut.instancing===!1||!Y.isInstancedMesh&&ut.instancing===!0||Y.isSkinnedMesh&&ut.skinning===!1||!Y.isSkinnedMesh&&ut.skinning===!0||Y.isInstancedMesh&&ut.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ut.instancingColor===!1&&Y.instanceColor!==null||ut.envMap!==We||Z.fog===!0&&ut.fog!==Me||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==et.numPlanes||ut.numIntersection!==et.numIntersection)||ut.vertexAlphas!==at||ut.vertexTangents!==je||ut.morphTargets!==tt||ut.morphNormals!==Zt||ut.morphColors!==Yn||ut.toneMapping!==un||ce.isWebGL2===!0&&ut.morphTargetsCount!==Wt)&&(qt=!0):(qt=!0,ut.__version=Z.version);let cr=ut.currentProgram;qt===!0&&(cr=pc(Z,G,Y));let R0=!1,va=!1,xd=!1,En=cr.getUniforms(),ur=ut.uniforms;if(Q.useProgram(cr.program)&&(R0=!0,va=!0,xd=!0),Z.id!==F&&(F=Z.id,va=!0),R0||T!==P){En.setValue(U,"projectionMatrix",P.projectionMatrix),En.setValue(U,"viewMatrix",P.matrixWorldInverse);let ii=En.map.cameraPosition;ii!==void 0&&ii.setValue(U,Je.setFromMatrixPosition(P.matrixWorld)),ce.logarithmicDepthBuffer&&En.setValue(U,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&En.setValue(U,"isOrthographic",P.isOrthographicCamera===!0),T!==P&&(T=P,va=!0,xd=!0)}if(Y.isSkinnedMesh){En.setOptional(U,Y,"bindMatrix"),En.setOptional(U,Y,"bindMatrixInverse");let ii=Y.skeleton;ii&&(ce.floatVertexTextures?(ii.boneTexture===null&&ii.computeBoneTexture(),En.setValue(U,"boneTexture",ii.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(En.setOptional(U,Y,"batchingTexture"),En.setValue(U,"batchingTexture",Y._matricesTexture,R));let yd=q.morphAttributes;if((yd.position!==void 0||yd.normal!==void 0||yd.color!==void 0&&ce.isWebGL2===!0)&&ht.update(Y,q,cr),(va||ut.receiveShadow!==Y.receiveShadow)&&(ut.receiveShadow=Y.receiveShadow,En.setValue(U,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ur.envMap.value=We,ur.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),va&&(En.setValue(U,"toneMappingExposure",y.toneMappingExposure),ut.needsLights&&xE(ur,xd),Me&&Z.fog===!0&&fe.refreshFogUniforms(ur,Me),fe.refreshMaterialUniforms(ur,Z,H,L,Ce),vo.upload(U,b0(ut),ur,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(vo.upload(U,b0(ut),ur,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&En.setValue(U,"center",Y.center),En.setValue(U,"modelViewMatrix",Y.modelViewMatrix),En.setValue(U,"normalMatrix",Y.normalMatrix),En.setValue(U,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let ii=Z.uniformsGroups;for(let vd=0,vE=ii.length;vd<vE;vd++)if(ce.isWebGL2){let C0=ii[vd];Tt.update(C0,cr),Tt.bind(C0,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}function xE(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function yE(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,G,q){ve.get(P.texture).__webglTexture=G,ve.get(P.depthTexture).__webglTexture=q;let Z=ve.get(P);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,G){let q=ve.get(P);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,q=0){C=P,D=G,b=q;let Z=!0,Y=null,Me=!1,Le=!1;if(P){let We=ve.get(P);We.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(U.FRAMEBUFFER,null),Z=!1):We.__webglFramebuffer===void 0?R.setupRenderTarget(P):We.__hasExternalTextures&&R.rebindTextures(P,ve.get(P.texture).__webglTexture,ve.get(P.depthTexture).__webglTexture);let at=P.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Le=!0);let je=ve.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(je[G])?Y=je[G][q]:Y=je[G],Me=!0):ce.isWebGL2&&P.samples>0&&R.useMultisampledRTT(P)===!1?Y=ve.get(P).__webglMultisampledFramebuffer:Array.isArray(je)?Y=je[q]:Y=je,A.copy(P.viewport),z.copy(P.scissor),X=P.scissorTest}else A.copy($).multiplyScalar(H).floor(),z.copy(j).multiplyScalar(H).floor(),X=le;if(Q.bindFramebuffer(U.FRAMEBUFFER,Y)&&ce.drawBuffers&&Z&&Q.drawBuffers(P,Y),Q.viewport(A),Q.scissor(z),Q.setScissorTest(X),Me){let We=ve.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,We.__webglTexture,q)}else if(Le){let We=ve.get(P.texture),at=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,We.__webglTexture,q||0,at)}F=-1},this.readRenderTargetPixels=function(P,G,q,Z,Y,Me,Le){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ve.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze){Q.bindFramebuffer(U.FRAMEBUFFER,ze);try{let We=P.texture,at=We.format,je=We.type;if(at!==ri&&be.convert(at)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let tt=je===Ai&&(ee.has("EXT_color_buffer_half_float")||ce.isWebGL2&&ee.has("EXT_color_buffer_float"));if(je!==Ls&&be.convert(je)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===as&&(ce.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-Z&&q>=0&&q<=P.height-Y&&U.readPixels(G,q,Z,Y,be.convert(at),be.convert(je),Me)}finally{let We=C!==null?ve.get(C).__webglFramebuffer:null;Q.bindFramebuffer(U.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(P,G,q=0){let Z=Math.pow(2,-q),Y=Math.floor(G.image.width*Z),Me=Math.floor(G.image.height*Z);R.setTexture2D(G,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,P.x,P.y,Y,Me),Q.unbindTexture()},this.copyTextureToTexture=function(P,G,q,Z=0){let Y=G.image.width,Me=G.image.height,Le=be.convert(q.format),ze=be.convert(q.type);R.setTexture2D(q,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment),G.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Z,P.x,P.y,Y,Me,Le,ze,G.image.data):G.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Z,P.x,P.y,G.mipmaps[0].width,G.mipmaps[0].height,Le,G.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,Z,P.x,P.y,Le,ze,G.image),Z===0&&q.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(P,G,q,Z,Y=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Me=P.max.x-P.min.x+1,Le=P.max.y-P.min.y+1,ze=P.max.z-P.min.z+1,We=be.convert(Z.format),at=be.convert(Z.type),je;if(Z.isData3DTexture)R.setTexture3D(Z,0),je=U.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)R.setTexture2DArray(Z,0),je=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Z.unpackAlignment);let tt=U.getParameter(U.UNPACK_ROW_LENGTH),Zt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Yn=U.getParameter(U.UNPACK_SKIP_PIXELS),un=U.getParameter(U.UNPACK_SKIP_ROWS),Qi=U.getParameter(U.UNPACK_SKIP_IMAGES),Wt=q.isCompressedTexture?q.mipmaps[Y]:q.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Wt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Wt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,P.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,P.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,P.min.z),q.isDataTexture||q.isData3DTexture?U.texSubImage3D(je,Y,G.x,G.y,G.z,Me,Le,ze,We,at,Wt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(je,Y,G.x,G.y,G.z,Me,Le,ze,We,Wt.data)):U.texSubImage3D(je,Y,G.x,G.y,G.z,Me,Le,ze,We,at,Wt),U.pixelStorei(U.UNPACK_ROW_LENGTH,tt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Zt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Yn),U.pixelStorei(U.UNPACK_SKIP_ROWS,un),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Qi),Y===0&&Z.generateMipmaps&&U.generateMipmap(je),Q.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Q.unbindTexture()},this.resetState=function(){D=0,b=0,C=null,Q.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ls}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===np?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Lu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?_r:Nx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_r?Et:nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Tf=class extends Ga{};Tf.prototype.isWebGL1Renderer=!0;var hu=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Va=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ao=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ba,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},In=new E,Tr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ki(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rt=class extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lo,Ta=new E,co=new E,uo=new E,ho=new J,wa=new J,Yx=new Ye,Oc=new E,ba=new E,Bc=new E,$g=new J,Kd=new J,Jg=new J,kt=class extends Pt{constructor(e=new Rt){if(super(),this.isSprite=!0,this.type="Sprite",lo===void 0){lo=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ao(t,5);lo.setIndex([0,1,2,0,2,3]),lo.setAttribute("position",new Tr(i,3,0,!1)),lo.setAttribute("uv",new Tr(i,2,3,!1))}this.geometry=lo,this.material=e,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),co.setFromMatrixScale(this.matrixWorld),Yx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),uo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&co.multiplyScalar(-uo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Fc(Oc.set(-.5,-.5,0),uo,o,co,s,r),Fc(ba.set(.5,-.5,0),uo,o,co,s,r),Fc(Bc.set(.5,.5,0),uo,o,co,s,r),$g.set(0,0),Kd.set(1,0),Jg.set(1,1);let a=e.ray.intersectTriangle(Oc,ba,Bc,!1,Ta);if(a===null&&(Fc(ba.set(-.5,.5,0),uo,o,co,s,r),Kd.set(0,1),a=e.ray.intersectTriangle(Oc,Bc,ba,!1,Ta),a===null))return;let l=e.ray.origin.distanceTo(Ta);l<e.near||l>e.far||t.push({distance:l,point:Ta.clone(),uv:yr.getInterpolation(Ta,Oc,ba,Bc,$g,Kd,Jg,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fc(n,e,t,i,s,r){ho.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(wa.x=r*ho.x-s*ho.y,wa.y=s*ho.x+r*ho.y):wa.copy(ho),n.copy(e),n.x+=wa.x,n.y+=wa.y,n.applyMatrix4(Yx)}var jg=new E,Qg=new St,ex=new St,vA=new E,tx=new Ye,zc=new E,Zd=new xn,nx=new Ye,$d=new Sr,du=class extends N{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=H0,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,zc),this.boundingBox.expandByPoint(zc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,zc),this.boundingSphere.expandByPoint(zc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zd.copy(this.boundingSphere),Zd.applyMatrix4(s),e.ray.intersectsSphere(Zd)!==!1&&(nx.copy(s).invert(),$d.copy(e.ray).applyMatrix4(nx),!(this.boundingBox!==null&&$d.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$d)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===H0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===KE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Qg.fromBufferAttribute(s.attributes.skinIndex,e),ex.fromBufferAttribute(s.attributes.skinWeight,e),jg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=ex.getComponent(r);if(o!==0){let a=Qg.getComponent(r);tx.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(vA.copy(jg).applyMatrix4(tx),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Wa=class extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},wf=class extends mn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=en,h=en,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ix=new Ye,MA=new Ye,fu=class n{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:MA;ix.multiplyMatrices(a,t[r]),ix.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new wf(t,e,e,ri,as);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wa),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},wr=class extends gt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fo=new Ye,sx=new Ye,kc=[],rx=new Fn,_A=new Ye,Aa=new N,Ra=new xn,Ro=class extends N{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,_A)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fo),rx.copy(e.boundingBox).applyMatrix4(fo),this.boundingBox.union(rx)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fo),Ra.copy(e.boundingSphere).applyMatrix4(fo),this.boundingSphere.union(Ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(i),e.ray.intersectsSphere(Ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fo),sx.multiplyMatrices(i,fo),Aa.matrixWorld=sx,Aa.raycast(e,kc);for(let o=0,a=kc.length;o<a;o++){let l=kc[o];l.instanceId=r,l.object=this,t.push(l)}kc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Xa=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ox=new E,ax=new E,lx=new Ye,Jd=new Sr,Gc=new xn,Co=class extends Pt{constructor(e=new vt,t=new Xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ox.fromBufferAttribute(t,s-1),ax.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ox.distanceTo(ax);e.setAttribute("lineDistance",new Re(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gc.copy(i.boundingSphere),Gc.applyMatrix4(s),Gc.radius+=r,e.ray.intersectsSphere(Gc)===!1)return;lx.copy(s).invert(),Jd.copy(e.ray).applyMatrix4(lx);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new E,h=new E,u=new E,d=new E,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let y=p,_=M-1;y<_;y+=f){let D=g.getX(y),b=g.getX(y+1);if(c.fromBufferAttribute(m,D),h.fromBufferAttribute(m,b),Jd.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let y=p,_=M-1;y<_;y+=f){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Jd.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},cx=new E,ux=new E,pu=class extends Co{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)cx.fromBufferAttribute(t,s),ux.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+cx.distanceTo(ux);e.setAttribute("lineDistance",new Re(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},mu=class extends Co{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ya=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hx=new Ye,bf=new Sr,Vc=new xn,Wc=new E,Os=class extends Pt{constructor(e=new vt,t=new Ya){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vc.copy(i.boundingSphere),Vc.applyMatrix4(s),Vc.radius+=r,e.ray.intersectsSphere(Vc)===!1)return;hx.copy(s).invert(),bf.copy(e.ray).applyMatrix4(hx);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Wc.fromBufferAttribute(u,m),dx(Wc,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Wc.fromBufferAttribute(u,g),dx(Wc,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function dx(n,e,t,i,s,r,o){let a=bf.distanceSqToPoint(n);if(a<t){let l=new E;bf.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Ci=class extends mn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new J:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new E,s=[],r=[],o=[],a=new E,l=new Ye;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(tn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(tn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qa=class extends li{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new J,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Af=class extends qa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rp(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Xc=new E,jd=new rp,Qd=new rp,ef=new rp,Rf=class extends li{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new E){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xc.subVectors(s[0],s[1]).add(s[0]),c=Xc);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),jd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Qd.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),ef.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(jd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Qd.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ef.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(jd.calc(l),Qd.calc(l),ef.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fx(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function EA(n,e){let t=1-n;return t*t*e}function SA(n,e){return 2*(1-n)*n*e}function TA(n,e){return n*n*e}function Ha(n,e,t,i){return EA(n,e)+SA(n,t)+TA(n,i)}function wA(n,e){let t=1-n;return t*t*t*e}function bA(n,e){let t=1-n;return 3*t*t*n*e}function AA(n,e){return 3*(1-n)*n*n*e}function RA(n,e){return n*n*n*e}function Ua(n,e,t,i,s){return wA(n,e)+bA(n,t)+AA(n,i)+RA(n,s)}var gu=class extends li{constructor(e=new J,t=new J,i=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new J){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ua(e,s.x,r.x,o.x,a.x),Ua(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cf=class extends li{constructor(e=new E,t=new E,i=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new E){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ua(e,s.x,r.x,o.x,a.x),Ua(e,s.y,r.y,o.y,a.y),Ua(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xu=class extends li{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pf=class extends li{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yu=class extends li{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ha(e,s.x,r.x,o.x),Ha(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},If=class extends li{constructor(e=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ha(e,s.x,r.x,o.x),Ha(e,s.y,r.y,o.y),Ha(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vu=class extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(fx(a,l.x,c.x,h.x,u.x),fx(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new J().fromArray(s))}return this}},Lf=Object.freeze({__proto__:null,ArcCurve:Af,CatmullRomCurve3:Rf,CubicBezierCurve:gu,CubicBezierCurve3:Cf,EllipseCurve:qa,LineCurve:xu,LineCurve3:Pf,QuadraticBezierCurve:yu,QuadraticBezierCurve3:If,SplineCurve:vu}),Df=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Lf[s.type]().fromJSON(s))}return this}},Ka=class extends Df{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new xu(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new yu(this.currentPoint.clone(),new J(e,t),new J(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new gu(this.currentPoint.clone(),new J(e,t),new J(i,s),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new vu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new qa(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Nf=class n extends vt{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=tn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new E,d=new J,f=new E,g=new E,x=new E,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let M=0;M<=t;M++){let y=i+M*h*s,_=Math.sin(y),D=Math.cos(y);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*_,u.y=e[b].y,u.z=e[b].x*D,o.push(u.x,u.y,u.z),d.x=M/t,d.y=b/(e.length-1),a.push(d.x,d.y);let C=l[3*b+0]*_,F=l[3*b+1],T=l[3*b+0]*D;c.push(C,F,T)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){let _=y+M*e.length,D=_,b=_+e.length,C=_+e.length+1,F=_+1;r.push(D,b,F),r.push(C,F,b)}this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("uv",new Re(a,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},kn=class n extends Nf{constructor(e=1,t=1,i=4,s=8){let r=new Ka;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Bs=class n extends vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new E,h=new J;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Te=class n extends vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(f,2));function M(){let _=new E,D=new E,b=0,C=(t-e)/i;for(let F=0;F<=r;F++){let T=[],A=F/r,z=A*(t-e)+e;for(let X=0;X<=s;X++){let ne=X/s,S=ne*l+a,I=Math.sin(S),L=Math.cos(S);D.x=z*I,D.y=-A*i+m,D.z=z*L,u.push(D.x,D.y,D.z),_.set(I,C,L).normalize(),d.push(_.x,_.y,_.z),f.push(ne,1-A),T.push(g++)}x.push(T)}for(let F=0;F<s;F++)for(let T=0;T<r;T++){let A=x[T][F],z=x[T+1][F],X=x[T+1][F+1],ne=x[T][F+1];h.push(A,z,ne),h.push(z,X,ne),b+=6}c.addGroup(p,b,0),p+=b}function y(_){let D=g,b=new J,C=new E,F=0,T=_===!0?e:t,A=_===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),g++;let z=g;for(let X=0;X<=s;X++){let S=X/s*l+a,I=Math.cos(S),L=Math.sin(S);C.x=T*L,C.y=m*A,C.z=T*I,u.push(C.x,C.y,C.z),d.push(0,A,0),b.x=I*.5+.5,b.y=L*.5*A+.5,f.push(b.x,b.y),g++}for(let X=0;X<s;X++){let ne=D+X,S=z+X;_===!0?h.push(S,S+1,ne):h.push(S+1,S,ne),F+=3}c.addGroup(p,F,_===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qe=class n extends Te{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Za=class n extends vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let y=new E,_=new E,D=new E;for(let b=0;b<t.length;b+=3)f(t[b+0],y),f(t[b+1],_),f(t[b+2],D),l(y,_,D,M)}function l(M,y,_,D){let b=D+1,C=[];for(let F=0;F<=b;F++){C[F]=[];let T=M.clone().lerp(_,F/b),A=y.clone().lerp(_,F/b),z=b-F;for(let X=0;X<=z;X++)X===0&&F===b?C[F][X]=T:C[F][X]=T.clone().lerp(A,X/z)}for(let F=0;F<b;F++)for(let T=0;T<2*(b-F)-1;T++){let A=Math.floor(T/2);T%2===0?(d(C[F][A+1]),d(C[F+1][A]),d(C[F][A])):(d(C[F][A+1]),d(C[F+1][A+1]),d(C[F+1][A]))}}function c(M){let y=new E;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(M),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let M=new E;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let _=m(M)/2/Math.PI+.5,D=p(M)/Math.PI+.5;o.push(_,1-D)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let y=o[M+0],_=o[M+2],D=o[M+4],b=Math.max(y,_,D),C=Math.min(y,_,D);b>.9&&C<.1&&(y<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),D<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){let _=M*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){let M=new E,y=new E,_=new E,D=new E,b=new J,C=new J,F=new J;for(let T=0,A=0;T<r.length;T+=9,A+=6){M.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),b.set(o[A+0],o[A+1]),C.set(o[A+2],o[A+3]),F.set(o[A+4],o[A+5]),D.copy(M).add(y).add(_).divideScalar(3);let z=m(D);x(b,A+0,M,z),x(C,A+2,y,z),x(F,A+4,_,z)}}function x(M,y,_,D){D<0&&M.x===1&&(o[y]=M.x-1),_.x===0&&_.z===0&&(o[y]=D/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},$a=class n extends Za{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Gn=class extends Ka{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ka().fromJSON(s))}return this}},CA={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=qx(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=NA(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],d=n[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Ja(r,o,t,a,l,f,0),o}};function qx(n,e,t,i,s){let r,o;if(s===XA(n,e,t,i)>0)for(r=e;r<t;r+=i)o=px(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=px(r,n[r],n[r+1],o);return o&&Nu(o,o.next)&&(Qa(o),o=o.next),o}function br(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Nu(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Qa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ja(n,e,t,i,s,r,o){if(!n)return;!o&&r&&FA(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?IA(n,i,s,r):PA(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Qa(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=LA(br(n),e,t),Ja(n,e,t,i,s,r,2)):o===2&&DA(n,e,t,i,s,r):Ja(br(n),e,t,i,s,r,1);break}}}function PA(n){let e=n.prev,t=n,i=n.next;if(Xt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&go(s,a,r,l,o,c,g.x,g.y)&&Xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function IA(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Xt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Hf(f,g,e,t,i),M=Hf(x,m,e,t,i),y=n.prevZ,_=n.nextZ;for(;y&&y.z>=p&&_&&_.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&go(a,h,l,u,c,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&go(a,h,l,u,c,d,_.x,_.y)&&Xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&go(a,h,l,u,c,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&go(a,h,l,u,c,d,_.x,_.y)&&Xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function LA(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Nu(s,r)&&Kx(s,i,i.next,r)&&ja(s,r)&&ja(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Qa(i),Qa(i.next),i=n=r),i=i.next}while(i!==n);return br(i)}function DA(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&GA(o,a)){let l=Zx(o,a);o=br(o,o.next),l=br(l,l.next),Ja(o,e,t,i,s,r,0),Ja(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function NA(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=qx(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(kA(c));for(s.sort(HA),r=0;r<s.length;r++)t=UA(s[r],t);return t}function HA(n,e){return n.x-e.x}function UA(n,e){let t=OA(n,e);if(!t)return e;let i=Zx(t,n);return br(i,i.next),br(t,t.next)}function OA(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&go(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),ja(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&BA(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function BA(n,e){return Xt(n.prev,n,e.prev)<0&&Xt(e.next,n,n.next)<0}function FA(n,e,t,i){let s=n;do s.z===0&&(s.z=Hf(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,zA(s)}function zA(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Hf(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function kA(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function go(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function GA(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!VA(n,e)&&(ja(n,e)&&ja(e,n)&&WA(n,e)&&(Xt(n.prev,n,e.prev)||Xt(n,e.prev,e))||Nu(n,e)&&Xt(n.prev,n,n.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Nu(n,e){return n.x===e.x&&n.y===e.y}function Kx(n,e,t,i){let s=qc(Xt(n,e,t)),r=qc(Xt(n,e,i)),o=qc(Xt(t,i,n)),a=qc(Xt(t,i,e));return!!(s!==r&&o!==a||s===0&&Yc(n,t,e)||r===0&&Yc(n,i,e)||o===0&&Yc(t,n,i)||a===0&&Yc(t,e,i))}function Yc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qc(n){return n>0?1:n<0?-1:0}function VA(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Kx(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ja(n,e){return Xt(n.prev,n,n.next)<0?Xt(n,e,n.next)>=0&&Xt(n,n.prev,e)>=0:Xt(n,e,n.prev)<0||Xt(n,n.next,e)<0}function WA(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Zx(n,e){let t=new Uf(n.i,n.x,n.y),i=new Uf(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function px(n,e,t,i){let s=new Uf(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Qa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Uf(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function XA(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ds=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];mx(e),gx(i,e);let o=e.length;t.forEach(mx);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,gx(i,t[l]);let a=CA.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function mx(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function gx(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Pi=class n extends vt{constructor(e=new Gn([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Re(s,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:YA,y,_=!1,D,b,C,F;p&&(y=p.getSpacedPoints(h),_=!0,d=!1,D=p.computeFrenetFrames(h,!1),b=new E,C=new E,F=new E),d||(m=0,f=0,g=0,x=0);let T=a.extractPoints(c),A=T.shape,z=T.holes;if(!Ds.isClockWise(A)){A=A.reverse();for(let U=0,he=z.length;U<he;U++){let ee=z[U];Ds.isClockWise(ee)&&(z[U]=ee.reverse())}}let ne=Ds.triangulateShape(A,z),S=A;for(let U=0,he=z.length;U<he;U++){let ee=z[U];A=A.concat(ee)}function I(U,he,ee){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(he,ee)}let L=A.length,H=ne.length;function O(U,he,ee){let ce,Q,De,ve=U.x-he.x,R=U.y-he.y,w=ee.x-U.x,V=ee.y-U.y,ae=ve*ve+R*R,re=ve*V-R*w;if(Math.abs(re)>Number.EPSILON){let ie=Math.sqrt(ae),Ae=Math.sqrt(w*w+V*V),fe=he.x-R/ie,Ee=he.y+ve/ie,Be=ee.x-V/Ae,et=ee.y+w/Ae,oe=((Be-fe)*V-(et-Ee)*w)/(ve*V-R*w);ce=fe+ve*oe-U.x,Q=Ee+R*oe-U.y;let _t=ce*ce+Q*Q;if(_t<=2)return new J(ce,Q);De=Math.sqrt(_t/2)}else{let ie=!1;ve>Number.EPSILON?w>Number.EPSILON&&(ie=!0):ve<-Number.EPSILON?w<-Number.EPSILON&&(ie=!0):Math.sign(R)===Math.sign(V)&&(ie=!0),ie?(ce=-R,Q=ve,De=Math.sqrt(ae)):(ce=ve,Q=R,De=Math.sqrt(ae/2))}return new J(ce/De,Q/De)}let k=[];for(let U=0,he=S.length,ee=he-1,ce=U+1;U<he;U++,ee++,ce++)ee===he&&(ee=0),ce===he&&(ce=0),k[U]=O(S[U],S[ee],S[ce]);let $=[],j,le=k.concat();for(let U=0,he=z.length;U<he;U++){let ee=z[U];j=[];for(let ce=0,Q=ee.length,De=Q-1,ve=ce+1;ce<Q;ce++,De++,ve++)De===Q&&(De=0),ve===Q&&(ve=0),j[ce]=O(ee[ce],ee[De],ee[ve]);$.push(j),le=le.concat(j)}for(let U=0;U<m;U++){let he=U/m,ee=f*Math.cos(he*Math.PI/2),ce=g*Math.sin(he*Math.PI/2)+x;for(let Q=0,De=S.length;Q<De;Q++){let ve=I(S[Q],k[Q],ce);_e(ve.x,ve.y,-ee)}for(let Q=0,De=z.length;Q<De;Q++){let ve=z[Q];j=$[Q];for(let R=0,w=ve.length;R<w;R++){let V=I(ve[R],j[R],ce);_e(V.x,V.y,-ee)}}}let K=g+x;for(let U=0;U<L;U++){let he=d?I(A[U],le[U],K):A[U];_?(C.copy(D.normals[0]).multiplyScalar(he.x),b.copy(D.binormals[0]).multiplyScalar(he.y),F.copy(y[0]).add(C).add(b),_e(F.x,F.y,F.z)):_e(he.x,he.y,0)}for(let U=1;U<=h;U++)for(let he=0;he<L;he++){let ee=d?I(A[he],le[he],K):A[he];_?(C.copy(D.normals[U]).multiplyScalar(ee.x),b.copy(D.binormals[U]).multiplyScalar(ee.y),F.copy(y[U]).add(C).add(b),_e(F.x,F.y,F.z)):_e(ee.x,ee.y,u/h*U)}for(let U=m-1;U>=0;U--){let he=U/m,ee=f*Math.cos(he*Math.PI/2),ce=g*Math.sin(he*Math.PI/2)+x;for(let Q=0,De=S.length;Q<De;Q++){let ve=I(S[Q],k[Q],ce);_e(ve.x,ve.y,u+ee)}for(let Q=0,De=z.length;Q<De;Q++){let ve=z[Q];j=$[Q];for(let R=0,w=ve.length;R<w;R++){let V=I(ve[R],j[R],ce);_?_e(V.x,V.y+y[h-1].y,y[h-1].x+ee):_e(V.x,V.y,u+ee)}}}se(),ye();function se(){let U=s.length/3;if(d){let he=0,ee=L*he;for(let ce=0;ce<H;ce++){let Q=ne[ce];ke(Q[2]+ee,Q[1]+ee,Q[0]+ee)}he=h+m*2,ee=L*he;for(let ce=0;ce<H;ce++){let Q=ne[ce];ke(Q[0]+ee,Q[1]+ee,Q[2]+ee)}}else{for(let he=0;he<H;he++){let ee=ne[he];ke(ee[2],ee[1],ee[0])}for(let he=0;he<H;he++){let ee=ne[he];ke(ee[0]+L*h,ee[1]+L*h,ee[2]+L*h)}}i.addGroup(U,s.length/3-U,0)}function ye(){let U=s.length/3,he=0;Ce(S,he),he+=S.length;for(let ee=0,ce=z.length;ee<ce;ee++){let Q=z[ee];Ce(Q,he),he+=Q.length}i.addGroup(U,s.length/3-U,1)}function Ce(U,he){let ee=U.length;for(;--ee>=0;){let ce=ee,Q=ee-1;Q<0&&(Q=U.length-1);for(let De=0,ve=h+m*2;De<ve;De++){let R=L*De,w=L*(De+1),V=he+ce+R,ae=he+Q+R,re=he+Q+w,ie=he+ce+w;Je(V,ae,re,ie)}}}function _e(U,he,ee){l.push(U),l.push(he),l.push(ee)}function ke(U,he,ee){Pe(U),Pe(he),Pe(ee);let ce=s.length/3,Q=M.generateTopUV(i,s,ce-3,ce-2,ce-1);Ke(Q[0]),Ke(Q[1]),Ke(Q[2])}function Je(U,he,ee,ce){Pe(U),Pe(he),Pe(ce),Pe(he),Pe(ee),Pe(ce);let Q=s.length/3,De=M.generateSideWallUV(i,s,Q-6,Q-3,Q-2,Q-1);Ke(De[0]),Ke(De[1]),Ke(De[3]),Ke(De[1]),Ke(De[2]),Ke(De[3])}function Pe(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function Ke(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return qA(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lf[s.type]().fromJSON(s)),new n(i,e.options)}},YA={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new J(r,o),new J(a,l),new J(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new J(o,1-l),new J(c,1-u),new J(d,1-g),new J(x,1-p)]:[new J(a,1-l),new J(h,1-u),new J(f,1-g),new J(m,1-p)]}};function qA(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Po=class n extends Za{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},an=class n extends Za{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},dn=class n extends vt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new E,g=new J;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let M=p+m,y=M,_=M+i+1,D=M+i+2,b=M+1;a.push(y,_,b),a.push(_,D,b)}}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Mu=class n extends vt{constructor(e=new Gn([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Ds.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];Ds.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=Ds.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){let M=x[m],y=M[0]+u,_=M[1]+u,D=M[2]+u;i.push(y,_,D),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return KA(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function KA(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Gt=class n extends vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new E,d=new E,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let M=[],y=p/i,_=0;p===0&&o===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let D=0;D<=t;D++){let b=D/t;u.x=-e*Math.cos(s+b*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+b*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(b+_,1-y),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let y=h[p][M+1],_=h[p][M],D=h[p+1][M],b=h[p+1][M+1];(p!==0||o>0)&&f.push(y,_,b),(p!==i-1||l<Math.PI)&&f.push(_,D,b)}this.setIndex(f),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wt=class n extends vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new E,u=new E,d=new E;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(x,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var _u=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},te=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hx,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ci=class extends te{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Kc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ZA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function $A(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function xx(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function $x(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Fs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Of=class extends Fs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ag,endingEnd:ag}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case lg:r=e,a=2*t-i;break;case cg:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lg:o=e,l=2*i-t;break;case cg:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+M*o[c+D]+y*o[l+D]+_*o[u+D];return r}},Bf=class extends Fs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ff=class extends Fs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ui=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kc(t,this.TimeBufferType),this.values=Kc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Kc(e.times,Array),values:Kc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Of(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case So:t=this.InterpolantFactoryMethodDiscrete;break;case Er:t=this.InterpolantFactoryMethodLinear;break;case wd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return Er;case this.InterpolantFactoryMethodSmooth:return wd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ZA(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wd,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Er;var zs=class extends ui{};zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=So;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Eu=class extends ui{};Eu.prototype.ValueTypeName="color";var cs=class extends ui{};cs.prototype.ValueTypeName="number";var zf=class extends Fs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ri.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vi=class extends ui{InterpolantFactoryMethodLinear(e){return new zf(this.times,this.values,this.getValueSize(),e)}};Vi.prototype.ValueTypeName="quaternion";Vi.prototype.DefaultInterpolation=Er;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends ui{};ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=So;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends ui{};us.prototype.ValueTypeName="vector";var Su=class{constructor(e,t=-1,i,s=i1){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(jA(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(ui.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=$A(l);l=xx(l,1,h),c=xx(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new cs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];$x(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){let y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new cs(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{let f=".bones["+t[u].name+"]";i(us,f+".position",d,"pos",s),i(Vi,f+".quaternion",d,"rot",s),i(us,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function JA(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cs;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return Eu;case"quaternion":return Vi;case"bool":case"boolean":return zs;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function jA(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=JA(n.type);if(n.times===void 0){let t=[],i=[];$x(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Ps={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},kf=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},QA=new kf,hs=class{constructor(e){this.manager=e!==void 0?e:QA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hs.DEFAULT_MATERIAL_NAME="__DEFAULT";var rs={},Gf=class extends Error{constructor(e,t){super(e),this.response=t}},el=class extends hs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ps.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(rs[e]!==void 0){rs[e].push({onLoad:t,onProgress:i,onError:s});return}rs[e]=[],rs[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=rs[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){M();function M(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let D=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let b=0,C=h.length;b<C;b++){let F=h[b];F.onProgress&&F.onProgress(D)}p.enqueue(_),M()}})}}});return new Response(m)}else throw new Gf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ps.add(e,c);let h=rs[e];delete rs[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=rs[e];if(h===void 0)throw this.manager.itemError(e),c;delete rs[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Vf=class extends hs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ps.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Fa("img");function l(){h(),Ps.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Tu=class extends hs{constructor(e){super(e)}load(e,t,i,s){let r=new mn,o=new Vf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Io=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},wu=class extends Io{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},tf=new Ye,yx=new E,vx=new E,tl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;yx.setFromMatrixPosition(e.matrixWorld),t.position.copy(yx),vx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vx),t.updateMatrixWorld(),tf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wf=class extends tl{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=To*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},bu=class extends Io{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Mx=new Ye,Ca=new E,nf=new E,Xf=class extends tl{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ca),nf.copy(i.position),nf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(nf),i.updateMatrixWorld(),s.makeTranslation(-Ca.x,-Ca.y,-Ca.z),Mx.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mx)}},ds=class extends Io{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yf=class extends tl{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gs=class extends Io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Yf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Vs=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Au=class extends hs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ps.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ps.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ps.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ps.add(e,l),r.manager.itemStart(e)}};var Ru=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_x(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=_x();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function _x(){return(typeof performance>"u"?Date:performance).now()}var op="\\[\\]\\.:\\/",e2=new RegExp("["+op+"]","g"),ap="[^"+op+"]",t2="[^"+op.replace("\\.","")+"]",n2=/((?:WC+[\/:])*)/.source.replace("WC",ap),i2=/(WCOD+)?/.source.replace("WCOD",t2),s2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ap),r2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ap),o2=new RegExp("^"+n2+i2+s2+r2+"$"),a2=["material","materials","bones","map"],qf=class{constructor(e,t,i){let s=i||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(e2,"")}static parseTrackName(e){let t=o2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);a2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=qf;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eP=new Float32Array(1);var Cu=class{constructor(e,t,i=0,s=1/0){this.ray=new Sr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Kf(e,this,i,t),i.sort(Ex),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Kf(e[s],this,i,t);return i.sort(Ex),i}};function Ex(n,e){return n.distance-e.distance}function Kf(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Kf(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Do=class n extends N{constructor(){let e=n.SkyShader,t=new Ot({name:e.name,uniforms:Jn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:wn,depthWrite:!1});super(new Ut(1,1,1),t),this.isSky=!0}};Do.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new E},up:{value:new E(0,1,0)}},vertexShader:`
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

		}`};var Hu=class extends N{constructor(e,t={}){super(e),this.isWater=!0;let i=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new E(.70707,.70707,0),u=new pe(t.sunColor!==void 0?t.sunColor:16777215),d=new pe(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new E(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:Bn,m=t.fog!==void 0?t.fog:!1,p=new Zn,M=new E,y=new E,_=new E,D=new Ye,b=new E(0,0,-1),C=new St,F=new E,T=new E,A=new St,z=new Ye,X=new $t,ne=new gn(s,r),S={name:"MirrorShader",uniforms:Jn.merge([ue.fog,ue.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ye},sunColor:{value:new pe(8355711)},sunDirection:{value:new E(.70707,.70707,0)},eye:{value:new E},waterColor:{value:new pe(5592405)}}]),vertexShader:`
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
				}`},I=new Ot({name:S.name,uniforms:Jn.clone(S.uniforms),vertexShader:S.vertexShader,fragmentShader:S.fragmentShader,lights:!0,side:x,fog:m});I.uniforms.mirrorSampler.value=ne.texture,I.uniforms.textureMatrix.value=z,I.uniforms.alpha.value=a,I.uniforms.time.value=l,I.uniforms.normalSampler.value=c,I.uniforms.sunColor.value=u,I.uniforms.waterColor.value=d,I.uniforms.sunDirection.value=h,I.uniforms.distortionScale.value=g,I.uniforms.eye.value=f,i.material=I,i.onBeforeRender=function(L,H,O){if(y.setFromMatrixPosition(i.matrixWorld),_.setFromMatrixPosition(O.matrixWorld),D.extractRotation(i.matrixWorld),M.set(0,0,1),M.applyMatrix4(D),F.subVectors(y,_),F.dot(M)>0)return;F.reflect(M).negate(),F.add(y),D.extractRotation(O.matrixWorld),b.set(0,0,-1),b.applyMatrix4(D),b.add(_),T.subVectors(y,b),T.reflect(M).negate(),T.add(y),X.position.copy(F),X.up.set(0,1,0),X.up.applyMatrix4(D),X.up.reflect(M),X.lookAt(T),X.far=O.far,X.updateMatrixWorld(),X.projectionMatrix.copy(O.projectionMatrix),z.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),z.multiply(X.projectionMatrix),z.multiply(X.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(M,y),p.applyMatrix4(X.matrixWorldInverse),C.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let k=X.projectionMatrix;A.x=(Math.sign(C.x)+k.elements[8])/k.elements[0],A.y=(Math.sign(C.y)+k.elements[9])/k.elements[5],A.z=-1,A.w=(1+k.elements[10])/k.elements[14],C.multiplyScalar(2/C.dot(A)),k.elements[2]=C.x,k.elements[6]=C.y,k.elements[10]=C.z+1-o,k.elements[14]=C.w,f.setFromMatrixPosition(O.matrixWorld);let $=L.getRenderTarget(),j=L.xr.enabled,le=L.shadowMap.autoUpdate;i.visible=!1,L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(ne),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(H,X),i.visible=!0,L.xr.enabled=j,L.shadowMap.autoUpdate=le,L.setRenderTarget($);let K=O.viewport;K!==void 0&&L.state.viewport(K)}}};var Uu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var jn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},l2=new Us(-1,1,1,-1,0,1),lp=class extends vt{constructor(){super(),this.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Re([0,2,0,0,2,0],2))}},c2=new lp,Xs=class{constructor(e){this._mesh=new N(c2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,l2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ar=class extends jn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jn.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Xs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var sl=class extends jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ou=class extends jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new J);this._width=i.width,this._height=i.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ai}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ar(Uu),this.copyPass.material.blending=Gi,this.clock=new Ru}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}sl!==void 0&&(o instanceof sl?i=!0:o instanceof Ou&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fu=class extends jn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Jx={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var No=class n extends jn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new J(e.x,e.y):new J(256,256),this.clearColor=new pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(r,o,{type:Ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new gn(r,o,{type:Ai});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new gn(r,o,{type:Ai});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Jx;this.highPassUniforms=Jn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new J(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Uu;this.copyUniforms=Jn.clone(h.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:$e,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pe,this.oldClearAlpha=1,this.basic=new ft,this.fsQuad=new Xs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};No.BlurDirectionX=new J(1,0);No.BlurDirectionY=new J(0,1);var jx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var zu=class extends jn{constructor(){super();let e=jx;this.uniforms=Jn.clone(e.uniforms),this.material=new _u({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Xs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$f?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===nl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qf&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qx={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new J(1/1024,1/512)}},vertexShader:`

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
	`};var rl={distance:40,minDist:24,maxDist:58,elevDeg:38,azimuthDeg:18};var fn=60,iy=.022;var ku=10,Vn=15,sy=[5,10],ry=[7,12];var ol=64,oy=12,ay=18,ly=2,cy=7,uy=60,al=5,Gu=20,Ho=40,ll=120;function ey(n,e,t){let i=[],s=Math.PI/180*t;for(let r=0;r<e;r++){let o=r/e*Math.PI*2+s;i.push({x:+(Math.cos(o)*n).toFixed(3),z:+(Math.sin(o)*n).toFixed(3)})}return i}var ty=26,ny=40.5,cp=6,up=[{ring:0,unlockLevel:0,radius:ty,zones:ey(ty,8,22.5)},{ring:1,unlockLevel:cp,radius:ny,zones:ey(ny,8,22.5)}],Vu=up.flatMap(n=>n.zones),UP=Vu.length;var Mt={archer:{key:"archer",name:"Archer Tower",icon:"arrow",color:8247392,cost:15,desc:"Rapid single-target arrows",upgradeCosts:[12,28,55],levels:[{damage:8,range:15,fireRate:1},{damage:14,range:16,fireRate:.85},{damage:22,range:17.5,fireRate:.7},{damage:34,range:19,fireRate:.55}]},cannon:{key:"cannon",name:"Cannon Bastion",icon:"bomb",color:16747069,cost:30,desc:"Slow arc shells, area damage",upgradeCosts:[26,48,80],levels:[{damage:24,range:12,fireRate:2.4,aoe:3.2},{damage:38,range:13,fireRate:2.1,aoe:3.5},{damage:58,range:14,fireRate:1.8,aoe:3.8},{damage:85,range:15,fireRate:1.5,aoe:4.2}]},frost:{key:"frost",name:"Frost Spire",icon:"snow",color:7260415,cost:40,desc:"Chilling bolts slow the horde",upgradeCosts:[32,58,90],levels:[{damage:6,range:14,fireRate:1.4,slow:.55,slowDur:2.2},{damage:10,range:15,fireRate:1.25,slow:.5,slowDur:2.4},{damage:16,range:16,fireRate:1.1,slow:.45,slowDur:2.6},{damage:24,range:17,fireRate:.95,slow:.4,slowDur:3,aoe:2.6}]},tesla:{key:"tesla",name:"Storm Obelisk",icon:"bolt",color:13134847,cost:55,desc:"Chain lightning between foes",upgradeCosts:[42,72,115],levels:[{damage:16,range:12,fireRate:1.7,chain:2},{damage:26,range:13,fireRate:1.5,chain:3},{damage:40,range:14,fireRate:1.3,chain:4},{damage:58,range:15,fireRate:1.1,chain:5}]}},Rr=["archer","cannon","frost","tesla"],cl={archer:{piercing:{name:"Piercing Arrows",desc:"+35% damage and ignores enemy armor."},volley:{name:"Volley",desc:"Fire three arrows at up to three targets."}},cannon:{siege:{name:"Siege Rounds",desc:"+40% damage against bosses and armored foes."},cluster:{name:"Cluster Shells",desc:"Three smaller blast shells per shot."}},frost:{shatter:{name:"Shatter",desc:"+60% damage against chilled enemies."},deepfreeze:{name:"Deep Freeze",desc:"Stronger, longer-lasting chill."}},tesla:{overload:{name:"Overload",desc:"+2 chains and a chance to stun briefly."},tempest:{name:"Tempest",desc:"+25% damage and longer chain links."}}},Cr={grunt:{hp:14,speed:2.3,dmg:8,reward:4,size:1,tint:"#b0483a"},runner:{hp:10,speed:4.8,dmg:6,reward:5,size:.92,tint:"#3f9e4f"},bomber:{hp:18,speed:4,dmg:24,reward:9,size:1.05,tint:"#e07830"},brute:{hp:65,speed:1.7,dmg:15,reward:12,size:1.55,tint:"#8a5fb0"},champion:{hp:160,speed:1.25,dmg:22,reward:20,size:1.8,tint:"#4a6fb8"},acolyte:{hp:95,speed:1.55,dmg:10,reward:16,size:1.55,tint:"#7a5aa8"},giant:{hp:380,speed:.95,dmg:34,reward:60,size:3.1,tint:"#c05a2a"},warlord:{hp:2600,speed:.72,dmg:120,reward:300,size:3.4,tint:"#b03040"}},hy=.09,ul={hpBase:380,hpPerWave:.22,reward:60,size:3.1},Wu={hpPerStage:320,reward:45,size:2.2},hp=8.6,dy=["Stone Keep","Reinforced Keep","Twin Bastions","Iron Citadel","Royal Fortress","Sunspire Citadel","Tidal Bastion","Storm Keep","Celestial Citadel"],ps=[{name:"Reinforced Keep",hp:25,income:2,cost:30,range:0,damage:0,fireRate:0,feature:"Reinforced masonry"},{name:"Twin Bastions",hp:30,income:3,cost:60,range:.5,damage:1,fireRate:0,feature:"Corner bastions"},{name:"Iron Citadel",hp:40,income:4,cost:100,range:.5,damage:3,fireRate:-.02,feature:"Iron gatehouse"},{name:"Royal Fortress",hp:50,income:5,cost:160,range:1,damage:2,fireRate:0,feature:"Royal banners"},{name:"Sunspire Citadel",hp:60,income:6,cost:240,range:1,damage:4,fireRate:-.03,feature:"Sunspire crown"},{name:"Tidal Bastion",hp:80,income:8,cost:340,range:1.5,damage:3,fireRate:-.02,feature:"Outer tower terrace"},{name:"Storm Keep",hp:100,income:10,cost:460,range:1,damage:8,fireRate:-.04,feature:"Storm pylons"},{name:"Celestial Citadel",hp:130,income:13,cost:620,range:2,damage:12,fireRate:-.06,feature:"Celestial halo"}],Xu={baseRange:10,baseDamage:8,fireRate:1.1},fy=["Ranger","Mounted Knight","Gryphon Rider","Celestial Archon"],dp=[0,1,3,6],py={speed:7,damage:8,fireRate:1.15,range:16},Pr=[{cost:40,speed:9,damage:13,fireRate:1,range:18},{cost:70,speed:11,damage:18,fireRate:.85,range:19},{cost:110,speed:12.5,damage:26,fireRate:.65,range:21},{cost:160,speed:14,damage:34,fireRate:.5,range:22},{cost:220,speed:15.5,damage:44,fireRate:.4,range:23},{cost:300,speed:17,damage:56,fireRate:.32,range:24}],Uo={name:"War Rally",cooldown:30,duration:8,fireRate:1.35},ms={name:"Sun Nova",cooldown:20,radius:13,damage:50,damagePerLevel:25,stun:1.5,pushback:4},Yu=3.5;function Nn(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e||n,t}function Wi(n,e,t){let i=new Ci(n);return i.wrapS=i.wrapT=bi,i.repeat.set(e||1,t||e||1),i.anisotropy=8,i.colorSpace=Et,i}function hl(n,e=1){let t=n&&n.isTexture?n:null,i=t?t.image:n,s=i.width,r=i.height,a=i.getContext("2d").getImageData(0,0,s,r).data,l=Nn(s,r),c=l.getContext("2d"),h=c.createImageData(s,r),u=new Float32Array(s*r);for(let f=0,g=0;f<a.length;f+=4,g++)u[g]=(a[f]*.299+a[f+1]*.587+a[f+2]*.114)/255;for(let f=0;f<r;f++){let g=f*s,x=(f===0?r-1:f-1)*s,m=(f===r-1?0:f+1)*s;for(let p=0;p<s;p++){let M=(g+p)*4,y=p===0?s-1:p-1,_=p===s-1?0:p+1,D=(u[g+y]-u[g+_])*e,b=(u[x+p]-u[m+p])*e,C=1/Math.sqrt(D*D+b*b+1);h.data[M]=(D*C*.5+.5)*255,h.data[M+1]=(b*C*.5+.5)*255,h.data[M+2]=(C*.5+.5)*255,h.data[M+3]=255}}c.putImageData(h,0,0);let d=new Ci(l);return t?(d.wrapS=t.wrapS,d.wrapT=t.wrapT,d.repeat.copy(t.repeat),d.anisotropy=t.anisotropy):d.wrapS=d.wrapT=bi,d}var fp={};function Qt(n,e){return fp[n]||(fp[n]=e()),fp[n]}function qu(){return Qt("grass",()=>{let e=Nn(512),t=e.getContext("2d");t.fillStyle="#47562f",t.fillRect(0,0,512,512);function i(s,r,o,a,l){let c=s-o<0?-1:0,h=s+o>512?1:0,u=r-a<0?-1:0,d=r+a>512?1:0;for(let f=c;f<=h;f++)for(let g=u;g<=d;g++)l(s+f*512,r+g*512)}for(let s=0;s<150;s++){let r=Math.random()*512,o=Math.random()*512,a=18+Math.random()*55,l=12+Math.random()*40,c=Math.random()*Math.PI,h=Math.random(),u;h<.45?u=`rgba(${64+Math.random()*16}, ${92+Math.random()*28}, ${44+Math.random()*16}, 0.20)`:h<.78?u=`rgba(${38+Math.random()*14}, ${62+Math.random()*20}, ${32+Math.random()*12}, 0.22)`:u=`rgba(${112+Math.random()*26}, ${108+Math.random()*22}, ${58+Math.random()*18}, 0.18)`,i(r,o,a,l,(d,f)=>{t.save(),t.translate(d,f),t.rotate(c),t.fillStyle=u,t.beginPath(),t.ellipse(0,0,a,l,0,0,Math.PI*2),t.fill(),t.restore()})}t.lineWidth=1;for(let s=0;s<5400;s++){let r=Math.random()*512,o=Math.random()*512,a=3+Math.random()*7,l=(Math.random()-.5)*.9,c=70+Math.random()*26,h=20+Math.random()*18,u=22+Math.random()*18;t.strokeStyle=`hsla(${c}, ${h}%, ${u}%, 0.5)`,i(r,o,6,10,(d,f)=>{t.beginPath(),t.moveTo(d,f),t.lineTo(d+l*a,f-a),t.stroke()})}for(let s=0;s<60;s++){let r=Math.random()*512,o=Math.random()*512,a=Math.random()<.45?"rgba(255,248,225,0.5)":Math.random()<.5?"rgba(255,226,130,0.5)":"rgba(238,168,164,0.4)";i(r,o,3,3,(l,c)=>{t.fillStyle=a,t.beginPath(),t.arc(l,c,1.2+Math.random()*1.3,0,Math.PI*2),t.fill()})}return Wi(e,12)})}function my(){return Qt("grassN",()=>hl(qu(),.6))}function Ku(){return Qt("sand",()=>{let n=Nn(256),e=n.getContext("2d");e.fillStyle="#cbb27a",e.fillRect(0,0,256,256);for(let t=0;t<2600;t++){let i=Math.random()<.5?"rgba(255,240,200,0.25)":"rgba(120,100,60,0.22)";e.fillStyle=i,e.fillRect(Math.random()*256,Math.random()*256,2,2)}for(let t=0;t<30;t++)e.fillStyle="rgba(150,128,84,0.18)",e.beginPath(),e.ellipse(Math.random()*256,Math.random()*256,8+Math.random()*22,5+Math.random()*10,0,0,Math.PI*2),e.fill();return Wi(n,4)})}function dl(){return Qt("rock",()=>{let n=Nn(256),e=n.getContext("2d");e.fillStyle="#6d6a63",e.fillRect(0,0,256,256);for(let t=0;t<256;t+=22+Math.random()*14){let i=92+Math.random()*40;e.fillStyle=`rgb(${i}, ${i-4}, ${i-10})`,e.fillRect(0,t,256,18+Math.random()*12)}for(let t=0;t<26;t++){e.strokeStyle="rgba(30,28,26,0.5)",e.lineWidth=1+Math.random(),e.beginPath();let i=Math.random()*256,s=Math.random()*256;e.moveTo(i,s);for(let r=0;r<5;r++)i+=(Math.random()-.5)*40,s+=(Math.random()-.5)*40,e.lineTo(i,s);e.stroke()}for(let t=0;t<1800;t++)e.fillStyle=Math.random()<.5?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.12)",e.fillRect(Math.random()*256,Math.random()*256,2,2);return Wi(n,3)})}function pp(){return Qt("rockN",()=>hl(dl(),1.6))}function Zu(){return Qt("cobble",()=>{let n=Nn(256),e=n.getContext("2d");e.fillStyle="#5a564e",e.fillRect(0,0,256,256);let t=8;for(let i=0;i<t;i++){let s=i*(256/t),r=i%2*16;for(let o=-32;o<256;o+=32){let a=118+Math.random()*36,l=2+Math.random()*4;e.fillStyle=`rgb(${a+l}, ${a+l-6}, ${a+l-14})`,u2(e,o+r+2,s+2,28,28,6)}}return Wi(n,4)})}function u2(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.fill(),n.strokeStyle="rgba(0,0,0,0.25)",n.lineWidth=2,n.stroke(),n.strokeStyle="rgba(255,255,255,0.10)",n.beginPath(),n.moveTo(e+r,t+2),n.lineTo(e+i-r,t+2),n.stroke()}function mp(){return Qt("cobbleN",()=>hl(Zu(),2.2))}function Ir(){return Qt("stone",()=>{let n=Nn(256),e=n.getContext("2d");e.fillStyle="#6f747b",e.fillRect(0,0,256,256);let t=64;for(let i=0;i<256;i+=t){let s=i/t%2===0?0:t/2;for(let r=-t;r<256;r+=t){let o=r+s,l=124+(Math.random()*30-15)+Math.random()*18;e.fillStyle=`rgb(${l}, ${l+4}, ${l+10})`,e.fillRect(o+2,i+2,t-4,t-4),e.fillStyle="rgba(255,255,255,0.16)",e.fillRect(o+2,i+2,t-4,3),e.fillStyle="rgba(0,0,0,0.20)",e.fillRect(o+2,i+t-5,t-4,3);for(let c=0;c<14;c++)e.fillStyle=Math.random()<.5?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.08)",e.fillRect(o+4+Math.random()*(t-10),i+4+Math.random()*(t-10),3,3);if(Math.random()<.3){e.strokeStyle="rgba(40,40,45,0.4)",e.lineWidth=1,e.beginPath();let c=o+8+Math.random()*(t-16);e.moveTo(c,i+6),e.lineTo(c+(Math.random()-.5)*14,i+t-10),e.stroke()}}}return Wi(n,2)})}function fl(){return Qt("stoneN",()=>hl(Ir(),2))}function gs(){return Qt("wood",()=>{let n=Nn(256),e=n.getContext("2d"),t=32;for(let i=0;i<256;i+=t){let s=96+Math.random()*34;e.fillStyle=`rgb(${s+24}, ${s-8}, ${s-38})`,e.fillRect(0,i,256,t),e.fillStyle="rgba(20,12,4,0.6)",e.fillRect(0,i,256,2);for(let r=0;r<26;r++){e.strokeStyle=`rgba(${s-20}, ${s-42}, ${s-62}, 0.35)`,e.lineWidth=1,e.beginPath();let o=i+4+Math.random()*(t-8);e.moveTo(0,o),e.bezierCurveTo(64,o+(Math.random()*6-3),192,o+(Math.random()*6-3),256,o),e.stroke()}for(let r=0;r<2;r++){let o=20+Math.random()*216,a=i+8+Math.random()*(t-16);e.fillStyle="rgba(30,18,6,0.5)",e.beginPath(),e.arc(o,a,3+Math.random()*3,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(30,18,6,0.4)",e.beginPath(),e.arc(o,a,5+Math.random()*3,0,Math.PI*2),e.stroke()}}return Wi(n,2)})}function gy(){return Qt("woodN",()=>hl(gs(),.8))}function $u(){return Qt("roof",()=>{let n=Nn(256),e=n.getContext("2d");e.fillStyle="#5c2f28",e.fillRect(0,0,256,256);let t=32,i=32;for(let s=0;s<256;s+=t){let r=s/t%2===0?0:i/2;for(let o=-i;o<256;o+=i){let a=o+r,l=Math.random()*26-13;e.fillStyle=`rgb(${126+l+Math.random()*20}, ${54+l+Math.random()*12}, ${44+l+Math.random()*8})`,e.fillRect(a+2,s+2,i-4,t-4),e.fillStyle="rgba(255,255,255,0.10)",e.fillRect(a+2,s+t-6,i-4,2),e.fillStyle="rgba(0,0,0,0.28)",e.fillRect(a+2,s+2,i-4,2)}}return Wi(n,2)})}function pl(n,e,t){return Qt("cloth_"+n,()=>{let i=Nn(128),s=i.getContext("2d");s.fillStyle=e,s.fillRect(0,0,128,128);for(let r=0;r<700;r++)s.fillStyle="rgba(0,0,0,0.13)",s.fillRect(Math.random()*128,Math.random()*128,2,2);for(let r=0;r<700;r++)s.fillStyle="rgba(255,255,255,0.05)",s.fillRect(Math.random()*128,Math.random()*128,2,2);return s.strokeStyle=t,s.lineWidth=12,s.globalAlpha=.45,s.beginPath(),s.moveTo(0,128),s.lineTo(128,0),s.stroke(),s.globalAlpha=1,Wi(i,1)})}function gp(){return Qt("royal",()=>{let n=Nn(128),e=n.getContext("2d");e.fillStyle="#20355c",e.fillRect(0,0,128,128);for(let t=0;t<400;t++)e.fillStyle="rgba(255,255,255,0.05)",e.fillRect(Math.random()*128,Math.random()*128,2,2);return e.strokeStyle="#e8b64c",e.lineWidth=5,e.strokeRect(5,5,118,118),e.lineWidth=2,e.strokeRect(11,11,106,106),Wi(n,1)})}function Ju(){return Qt("banner",()=>{let n=Nn(128),e=n.getContext("2d");e.fillStyle="#e8b64c",e.fillRect(0,0,128,128),e.fillStyle="#a52a2a",e.fillRect(56,0,16,128),e.fillRect(0,56,128,16),e.fillStyle="rgba(255,255,255,0.18)";for(let t=0;t<200;t++)e.fillRect(Math.random()*128,Math.random()*128,2,2);return Wi(n,1)})}function xy(){return Qt("waterN",()=>{let e=Nn(256),t=e.getContext("2d"),i=t.createImageData(256,256),s=Math.PI*2,o=[[1,2,.55,0],[2,-1,.44,1.7],[2,5,.34,4.7],[3,4,.3,.9],[-4,3,.24,2.8],[5,-2,.2,4.1],[7,6,.13,1.2],[-9,5,.1,3.4],[11,-8,.07,5],[17,13,.045,2.2],[23,-19,.03,.6]].map(([l,c,h,u])=>{let d=new Float64Array(256),f=new Float64Array(256),g=new Float64Array(256),x=new Float64Array(256);for(let p=0;p<256;p++){let M=s*l*(p/256)+u,y=s*c*(p/256);d[p]=Math.cos(M),f[p]=Math.sin(M),g[p]=Math.cos(y),x[p]=Math.sin(y)}let m=h*s;return{xCos:d,xSin:f,yCos:g,ySin:x,dx:m*l,dy:m*c}});for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=0,u=0;for(let f=0;f<o.length;f++){let g=o[f],x=g.xCos[c]*g.yCos[l]-g.xSin[c]*g.ySin[l];h+=x*g.dx,u+=x*g.dy}let d=(l*256+c)*4;i.data[d]=Math.max(0,Math.min(255,128-h*.007*120)),i.data[d+1]=Math.max(0,Math.min(255,128-u*.007*120)),i.data[d+2]=255,i.data[d+3]=255}t.putImageData(i,0,0);let a=new Ci(e);return a.wrapS=a.wrapT=bi,a.anisotropy=4,a.needsUpdate=!0,a})}function yy(n,e,t,i){let s=Nn(n),r=s.getContext("2d"),o=r.createRadialGradient(n/2,n/2,n*e,n/2,n/2,n/2*.98);i.forEach(l=>o.addColorStop(l[0],l[1])),r.fillStyle=o,r.fillRect(0,0,n,n);let a=new Ci(s);return a.colorSpace=Et,a}function Jt(){return Qt("glow",()=>yy(128,0,.5,[[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,0.55)"],[.6,"rgba(255,255,255,0.12)"],[1,"rgba(255,255,255,0)"]]))}function ju(){return Qt("smoke",()=>{let n=Nn(128),e=n.getContext("2d"),t=e.createRadialGradient(64,64,8,64,64,62);t.addColorStop(0,"rgba(255,255,255,0.65)"),t.addColorStop(.6,"rgba(255,255,255,0.22)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.globalCompositeOperation="destination-out";for(let s=0;s<40;s++){let r=Math.random()*Math.PI*2,o=20+Math.random()*44;e.beginPath(),e.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,6+Math.random()*12,0,Math.PI*2),e.fillStyle="rgba(0,0,0,0.35)",e.fill()}let i=new Ci(n);return i.colorSpace=Et,i})}function vy(){return Qt("scorch",()=>yy(128,0,.5,[[0,"rgba(8,6,5,0.85)"],[.55,"rgba(12,10,8,0.5)"],[1,"rgba(12,10,8,0)"]]))}function xp(n){return Qt("rune_"+n,()=>{let e=Nn(128),t=e.getContext("2d");t.clearRect(0,0,128,128),t.strokeStyle="#ffffff",t.fillStyle="#ffffff",t.lineWidth=9,t.lineCap="round",t.lineJoin="round";let i=64,s=64;switch(n){case"archer":t.beginPath(),t.moveTo(28,100),t.lineTo(100,28),t.stroke(),t.beginPath(),t.moveTo(100,28),t.lineTo(74,30),t.moveTo(100,28),t.lineTo(98,54),t.stroke(),t.beginPath(),t.moveTo(40,88),t.lineTo(52,100),t.moveTo(28,100),t.lineTo(44,116),t.stroke();break;case"cannon":t.beginPath(),t.arc(i,s+8,34,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(76,42),t.quadraticCurveTo(92,26,84,14),t.stroke(),t.beginPath(),t.arc(84,12,6,0,Math.PI*2),t.fill();break;case"frost":for(let o=0;o<6;o++){let a=o/6*Math.PI*2,l=Math.cos(a),c=Math.sin(a);t.beginPath(),t.moveTo(i,s),t.lineTo(i+l*42,s+c*42),t.stroke();for(let h of[.55,.8]){let u=i+l*42*h,d=s+c*42*h,f=a+.6,g=a-.6;t.beginPath(),t.moveTo(u,d),t.lineTo(u+Math.cos(f)*14,d+Math.sin(f)*14),t.moveTo(u,d),t.lineTo(u+Math.cos(g)*14,d+Math.sin(g)*14),t.stroke()}}break;case"tesla":t.beginPath(),t.moveTo(74,14),t.lineTo(44,66),t.lineTo(66,66),t.lineTo(50,114),t.lineTo(92,54),t.lineTo(66,54),t.lineTo(84,14),t.closePath(),t.fill();break}let r=new Ci(e);return r.colorSpace=Et,r})}var h2=document.getElementById("renderCanvas"),xt=new Ga({canvas:h2,antialias:!1,powerPreference:"high-performance"});xt.setSize(window.innerWidth,window.innerHeight);xt.setPixelRatio(Math.min(window.devicePixelRatio||1,1));xt.shadowMap.enabled=!0;xt.shadowMap.type=Zf;xt.shadowMap.autoUpdate=!1;xt.shadowMap.needsUpdate=!0;xt.toneMapping=nl;xt.toneMappingExposure=.9;var Ie=new Va;Ie.fog=new hu(14467226,.003);var Bt=new $t(48,window.innerWidth/window.innerHeight,.1,5e3);Bt.position.set(0,28,31);var Sp=new Do;Sp.scale.setScalar(6e3);Ie.add(Sp);var qs=new E,yl=Sp.material.uniforms;yl.turbidity.value=6;yl.rayleigh.value=1.9;yl.mieCoefficient.value=.005;yl.mieDirectionalG.value=.8;var d2=22,f2=28,p2=fs.degToRad(90-d2),m2=fs.degToRad(f2);qs.setFromSphericalCoords(1,p2,m2);yl.sunPosition.value.copy(qs);var Tp=new kt(new Rt({map:Jt(),color:16774360,transparent:!0,blending:$e,depthWrite:!1,fog:!1}));Tp.scale.setScalar(700);Tp.position.copy(qs).multiplyScalar(3200);Ie.add(Tp);var An=new Gs(16766883,3.2);An.position.copy(qs).multiplyScalar(180);An.castShadow=!0;An.shadow.mapSize.set(1024,1024);An.shadow.camera.near=20;An.shadow.camera.far=420;An.shadow.camera.left=-80;An.shadow.camera.right=80;An.shadow.camera.top=80;An.shadow.camera.bottom=-80;An.shadow.bias=-4e-4;An.shadow.normalBias=.35;Ie.add(An);Ie.add(An.target);var g2=new wu(12834534,7034422,.95);Ie.add(g2);var My=new Gs(8032456,.55);My.position.set(-qs.x*120,60,-qs.z*120);Ie.add(My);var _y=new Gs(16767416,.65);_y.position.set(20,55,70);Ie.add(_y);var Ey=[];for(let n=0;n<2;n++){let e=new ds(16777215,0,30,1.8);e.position.set(0,-100,0),Ie.add(e),Ey.push(e)}function Sy(n,e,t){let i=Ey.find(s=>s.userData.free!==!1);return i?(i.userData.free=!1,i.color.setHex(n),i.intensity=e,i.distance=t||30,i):null}function wp(n){n&&(n.intensity=0,n.userData.free=!0,n.position.set(0,-100,0))}var vp=512,yn=new Hu(new sn(5e3,5e3),{textureWidth:vp,textureHeight:vp,waterNormals:xy(),sunDirection:qs.clone(),sunColor:16771268,waterColor:668738,distortionScale:6,fog:!0});yn.rotation.x=-Math.PI/2;yn.position.y=-2.6;yn.material.uniforms.size.value=9;yn.material.uniforms.uShoreRadius={value:fn};yn.material.uniforms.uReflectionStrength={value:1};yn.material.uniforms.uFoamColor={value:new pe(15006719)};yn.material.uniforms.uShallowColor={value:new pe(3119784)};yn.material.uniforms.uDeepColor={value:new pe(671826)};yn.material.fragmentShader=yn.material.fragmentShader.replace("uniform vec3 waterColor;",`uniform vec3 waterColor;
     uniform float uReflectionStrength;
     uniform vec3 uFoamColor;
     uniform vec3 uShallowColor;
     uniform vec3 uDeepColor;
     uniform float uShoreRadius;`).replace("return noise * 0.5 - 1.0;",`vec4 detail = texture2D( normalSampler, uv / 37.0 + vec2( time / 13.0, -time / 21.0 ) )
              + texture2D( normalSampler, uv / 29.0 - vec2( time / 17.0, time / 11.0 ) );
     return ( noise + detail * 0.55 ) * 0.4 - 1.0;`).replace("vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );",`vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );
     vec2 fineSlope = texture2D( normalSampler, worldPosition.xz * 0.16 + vec2( time * 0.02, -time * 0.016 ) ).rg * 2.0 - 1.0;
     vec2 crossSlope = texture2D( normalSampler, worldPosition.xz * 0.31 - vec2( time * 0.013, time * 0.019 ) ).rg * 2.0 - 1.0;
     surfaceNormal = normalize( surfaceNormal + vec3( fineSlope.x + crossSlope.x * 0.55, 0.0, fineSlope.y + crossSlope.y * 0.55 ) * 0.42 );`).replace("vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );",`vec3 reflectionSample = vec3( 0.0 );
     if ( uReflectionStrength > 0.001 ) {
       reflectionSample = texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ).rgb;
       // Real water never mirrors the sky at full brightness: the body of
       // the sea absorbs red light first, leaving a cool blue-green cast.
       reflectionSample = mix( reflectionSample, reflectionSample * vec3( 0.52, 0.70, 0.86 ), 0.55 );
       reflectionSample += vec3( 0.006, 0.018, 0.030 );
     }`).replace("vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);",`vec3 waterBody = ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask();
     vec3 reflectedLight = vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight;
     vec3 albedo = mix( waterBody, reflectedLight, reflectance * uReflectionStrength );`).replace("vec3 outgoingLight = albedo;",`vec3 outgoingLight = albedo;

     // Deep-water body colour keeps the sea from mirroring the bright
     // sky into a flat white sheet at distance.
     float eyeDist = length( eye - worldPosition.xyz );
     outgoingLight = mix( outgoingLight, uDeepColor, 0.20 + 0.38 * smoothstep( 40.0, 420.0, eyeDist ) );
     outgoingLight *= vec3( 0.84, 0.94, 1.0 );

     // Broad wind-driven swell patches + a touch of sun glitter make the
     // surface read as moving water instead of a tinted mirror.
     float swell = texture2D( normalSampler, worldPosition.xz * 0.045 + vec2( time * 0.006, -time * 0.004 ) ).r;
     outgoingLight *= 0.92 + swell * 0.16;
     vec3 sunReflect = reflect( -sunDirection, surfaceNormal );
     float sunSparkle = pow( max( dot( sunReflect, eyeDirection ), 0.0 ), 140.0 );
     outgoingLight += sunColor * sunSparkle * 0.55;

     // ---- shoreline: shallow tint + animated foam band ----
     float shoreDist = length( worldPosition.xz ) - uShoreRadius;
     float shallow = 1.0 - smoothstep( 0.0, 16.0, max( shoreDist, 0.0 ) );
     outgoingLight = mix( outgoingLight, uShallowColor, shallow * 0.48 );

     float foamBand = smoothstep( 5.2, 0.05, max( shoreDist, 0.0 ) ) * smoothstep( -1.4, 0.35, shoreDist );
     float foamWave = 0.55 + 0.45 * sin( shoreDist * 2.6 - time * 1.7 + noise.x * 3.5 + noise.z * 2.0 );
     float foamDetail = smoothstep( 0.15, 0.75, noise.y + noise.w * 0.5 );
     float foam = foamBand * foamWave * ( 0.35 + 0.65 * foamDetail );
     outgoingLight = mix( outgoingLight, uFoamColor, clamp( foam * 1.25, 0.0, 0.9 ) );`);function bp(n){yn.material.uniforms.uShoreRadius.value=n}Ie.add(yn);var x2=yn.onBeforeRender,gl=!1,eh=0,Mp=0,yp=!1;yn.onBeforeRender=function(n,e,t){if(yp||(yn.material.uniforms.eye.value.setFromMatrixPosition(t.matrixWorld),!gl||eh<=0))return;let i=performance.now();if(!(i<Mp)){Mp=i+1e3/eh,yp=!0;try{x2.call(this,n,e,t)}finally{yp=!1}}};var Ty=new bo(xt),wy=new Va,Ks=new Do;Ks.scale.setScalar(6e3);Ks.material.uniforms.turbidity.value=6;Ks.material.uniforms.rayleigh.value=1.9;Ks.material.uniforms.mieCoefficient.value=.005;Ks.material.uniforms.mieDirectionalG.value=.8;Ks.material.uniforms.sunPosition.value.copy(qs);wy.add(Ks);var y2=Ty.fromScene(wy);Ie.environment=y2.texture;Ty.dispose();Ks.material.dispose();var Xi=new Bu(xt),v2=new Fu(Ie,Bt);Xi.addPass(v2);var Ap=new No(new J(window.innerWidth,window.innerHeight),.38,.52,.92);Xi.addPass(Ap);Xi.addPass(new zu);var th=new Ar(Qx);Xi.addPass(th);var M2={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.2},uCA:{value:.002},uGrain:{value:.028},uSat:{value:1.06},uContrast:{value:1.06},uDamage:{value:0}},vertexShader:`
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
    }`},ys=new Ar(M2);ys.renderToScreen=!0;Xi.addPass(ys);function Rp(){let n=xt.getPixelRatio();th.material.uniforms.resolution.value.set(1/(window.innerWidth*n),1/(window.innerHeight*n))}Rp();var by="ironhold_quality",Ay=["auto","high","medium","low"],Bo={high:{dprCap:1.5,shadows:!0,shadowMapSize:1024,shadowUpdateHz:15,reflections:!0,waterReflectionHz:18,bloom:!0,fxaa:!0,particleBudget:2400},medium:{dprCap:1,shadows:!0,shadowMapSize:1024,shadowUpdateHz:10,reflections:!0,waterReflectionHz:10,bloom:!0,fxaa:!0,particleBudget:1200},low:{dprCap:.75,shadows:!1,shadowMapSize:0,shadowUpdateHz:0,reflections:!1,waterReflectionHz:0,bloom:!1,fxaa:!1,particleBudget:500}},_2=["high","medium","medium","low"],Cp=[Bo.high,Bo.medium,{...Bo.medium,shadowUpdateHz:6,waterReflectionHz:6,economy:!0},Bo.low],_p=5,E2=10;function S2(){try{let n=localStorage.getItem(by);if(Ay.includes(n))return n}catch{}return"auto"}var Hn=S2(),ml=Hn==="auto"?"medium":Hn,xs=1,Lr=0,Oo=0,Ys=1e3/60,Ep=!1,Qu=0,bn=Hn==="auto"?Cp[xs]:Bo[Hn];function xl(n=!0){bn=Hn==="auto"?Cp[xs]:Bo[Hn],ml=Hn==="auto"?_2[xs]:Hn,document.documentElement.dataset.quality=ml;let e=Math.min(window.devicePixelRatio||1,bn.dprCap);Math.abs(xt.getPixelRatio()-e)>.001&&(xt.setPixelRatio(e),Xi.setPixelRatio(e),Xi.setSize(window.innerWidth,window.innerHeight),Rp()),xt.shadowMap.enabled=bn.shadows,xt.shadowMap.autoUpdate=!1,An.castShadow=bn.shadows,An.shadow.mapSize.set(bn.shadowMapSize,bn.shadowMapSize),Ap.enabled=bn.bloom,th.enabled=bn.fxaa,ys.uniforms.uCA.value=ml==="low"?0:.002,ys.uniforms.uGrain.value=ml==="low"?0:.028,gl=bn.reflections,eh=bn.waterReflectionHz,yn.material.uniforms.uReflectionStrength.value=gl?1:0,n&&(Qu=0,xt.shadowMap.needsUpdate=xt.shadowMap.enabled,Mp=0)}function T2(n=0,e=!1){if(!xt.shadowMap.enabled||bn.shadowUpdateHz<=0)return!1;let t=Number.isFinite(n)?Math.min(Math.max(n,0),.25):0;Qu+=t;let i=1/bn.shadowUpdateHz;return!e&&Qu<i?!1:(Qu%=i,xt.shadowMap.needsUpdate=!0,!0)}function nh(){return Hn}function Pp(n){let e=typeof n=="string"?n.trim().toLowerCase():"";if(!Ay.includes(e))return Fo();Hn=e;try{localStorage.setItem(by,e)}catch{}return xs=1,Lr=0,Oo=0,Ep=!1,xl(!0),Fo()}function Fo(){let n=Ys>0?1e3/Ys:0;return{preset:Hn,quality:ml,auto:Hn==="auto",adaptiveStage:Hn==="auto"?xs:null,economy:!!bn.economy,dpr:xt.getPixelRatio(),dprCap:bn.dprCap,shadows:xt.shadowMap.enabled,shadowMapSize:xt.shadowMap.enabled?An.shadow.mapSize.x:0,shadowUpdateHz:xt.shadowMap.enabled?bn.shadowUpdateHz:0,reflections:gl,reflectionTextureSize:vp,reflectionUpdateHz:gl?eh:0,bloom:Ap.enabled,fxaa:th.enabled,particleBudget:bn.particleBudget,frameTimeMs:+Ys.toFixed(2),fps:+n.toFixed(1),nextAutoChangeIn:Hn==="auto"?+Math.max(0,_p-Lr).toFixed(1):0}}function Ry(n){let e=Number.isFinite(n)?Math.max(n,0):0,t=Math.min(e,.25);if(t>0){let i=t*1e3;if(!Ep)Ys=i,Ep=!0;else{let s=1-Math.exp(-t*2.5);Ys+=(i-Ys)*s}Hn==="auto"&&(Lr+=t,Ys>32?(Oo=0,Lr>=_p&&xs<Cp.length-1&&(xs++,Lr=0,xl(!0))):Ys<18.5?(Oo+=t,Oo>=E2&&Lr>=_p&&xs>0&&(xs--,Lr=0,Oo=0,xl(!0))):Oo=0)}T2(t)}xl(!0);var pn={dist:rl.distance,targetDist:rl.distance,elev:fs.degToRad(rl.elevDeg),azimuth:fs.degToRad(rl.azimuthDeg)};function Cy(n=new E){return n.set(Math.sin(pn.azimuth)*Math.cos(pn.elev),Math.sin(pn.elev),Math.cos(pn.azimuth)*Math.cos(pn.elev)).multiplyScalar(pn.dist)}window.addEventListener("resize",()=>{Bt.aspect=window.innerWidth/window.innerHeight,Bt.updateProjectionMatrix(),xl(!1),xt.setSize(window.innerWidth,window.innerHeight),Xi.setSize(window.innerWidth,window.innerHeight),Rp()});function Py(n){yn.material.uniforms.time.value+=n*.6,ys.uniforms.uTime.value+=n,ys.uniforms.uDamage.value=Math.max(0,ys.uniforms.uDamage.value-n*1.4)}function ih(n){ys.uniforms.uDamage.value=Math.min(1,ys.uniforms.uDamage.value+n)}var v={gold:uy,incomeRate:0,incomeTimer:0,totalGoldEarned:0,wave:1,timeInWave:0,spawnTimer:0,waveBudget:0,spawnRemaining:0,waveActive:!1,intermission:!1,prepTimer:0,waveKills:0,waveLeaks:0,waveStartedAt:0,totalWaves:Vn,endless:!1,difficulty:"normal",gameSpeed:1,cameraShake:!0,reducedMotion:!1,profileHeroDamage:1,profileAbilityCooldown:1,baseHP:ll,maxBaseHP:ll,castleLevel:0,castleFireCooldown:0,heroLevel:0,heroFireCooldown:0,abilityCooldown:0,rallyCooldown:0,rallyTimer:0,heroMoving:!1,buildType:"archer",towersBuilt:0,enemies:[],projectiles:[],activeBoss:null,miniBossSpawned:!1,roundBossSpawned:!1,warlordSpawned:!1,warlordKilled:!1,commanderLevel:1,commanderXP:0,pendingBoons:[],boons:{},draftOpen:!1,kills:0,score:0,combo:0,comboTimer:0,bestCombo:0,running:!1,gameOver:!1,victory:!1,paused:!1,elapsed:0,nearTower:null,nearPad:null,selectedTower:null,moveTarget:null,touchMove:{x:0,z:0},hintStage:0};var vl=new E;function hi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;vl.copy(e),vl[i]=0,vl.normalize();let c=.5*o/(o+a),h=1-vl.angleTo(n)/l;return Math.sign(vl[t])===1?h*c:a/(o+a)+c+c*(1-h)}var vn=class extends Ut{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new E,l=new E,c=new E(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new E,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=hi(g,l,"z","y",r,i),d[p+1]=1-hi(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-hi(g,l,"z","y",r,i),d[p+1]=1-hi(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-hi(g,l,"x","z",r,e),d[p+1]=hi(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[p+0]=1-hi(g,l,"x","z",r,e),d[p+1]=1-hi(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[p+0]=1-hi(g,l,"x","y",r,e),d[p+1]=1-hi(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=hi(g,l,"x","y",r,e),d[p+1]=1-hi(g,l,"y","x",r,t);break}}};function Yi(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new vt,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Iy(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Iy(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Iy(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<n.length;++c)o.set(n[c].array,a),a+=n[c].array.length;let l=new gt(o,t,i);return s!==void 0&&(l.gpuType=s),l}function Ip(n,e){if(e===Dx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===il||e===Iu){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===il)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var sh=class extends hs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Bp(t)}),this.register(function(t){return new qp(t)}),this.register(function(t){return new Kp(t)}),this.register(function(t){return new Zp(t)}),this.register(function(t){return new zp(t)}),this.register(function(t){return new kp(t)}),this.register(function(t){return new Gp(t)}),this.register(function(t){return new Vp(t)}),this.register(function(t){return new Op(t)}),this.register(function(t){return new Wp(t)}),this.register(function(t){return new Fp(t)}),this.register(function(t){return new Yp(t)}),this.register(function(t){return new Xp(t)}),this.register(function(t){return new Hp(t)}),this.register(function(t){return new $p(t)}),this.register(function(t){return new Jp(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Vs.extractUrlBase(e);o=Vs.resolveURL(c,this.path)}else o=Vs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new el(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Uy){try{o[pt.KHR_BINARY_GLTF]=new jp(e)}catch(u){s&&s(u);return}r=JSON.parse(o[pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new rm(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case pt.KHR_MATERIALS_UNLIT:o[u]=new Up;break;case pt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Qp(r,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:o[u]=new em;break;case pt.KHR_MESH_QUANTIZATION:o[u]=new tm;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function w2(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Hp=class{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],nn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ds(h),c.distance=u;break;case"spot":c=new bu(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,$s(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Up=class{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return ft}extendParams(e,t,i){let s=[];e.color=new pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}},Op=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Bp=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new J(a,a)}return Promise.all(r)}},Fp=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},zp=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},kp=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Gp=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(a[0],a[1],a[2],nn),Promise.all(r)}},Vp=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Wp=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(a[0],a[1],a[2],nn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}},Xp=class{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Yp=class{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ci}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},qp=class{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Kp=class{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Zp=class{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},$p=class{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Jp=class{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==di.TRIANGLES&&c.mode!==di.TRIANGLE_STRIP&&c.mode!==di.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new Ye,m=new E,p=new Ri,M=new E(1,1,1),y=new Ro(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&M.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(m,p,M));for(let _ in l)if(_==="_COLOR_0"){let D=l[_];y.instanceColor=new wr(D.array,D.itemSize,D.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Pt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Uy="glTF",Ml=12,Ly={JSON:1313821514,BIN:5130562},jp=class{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ml),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Uy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ml,r=new DataView(e,Ml),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Ly.JSON){let c=new Uint8Array(e,Ml+o,a);this.content=i.decode(c)}else if(l===Ly.BIN){let c=Ml+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Qp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=im[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=im[h]||h.toLowerCase();if(o[h]!==void 0){let d=i.accessors[e.attributes[h]],f=zo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},a,c,nn,d)})})}},em=class{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},tm=class{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}},rh=class extends Fs{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,M=1-m,y=p-d+u;for(let _=0;_!==a;_++){let D=o[x+_+a],b=o[x+_+l]*h,C=o[g+_+a],F=o[g+_]*h;r[_]=M*D+y*b+m*C+p*F}return r}},b2=new Ri,nm=class extends rh{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return b2.fromArray(r).normalize().toArray(r),r}},di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dy={9728:en,9729:Dn,9984:$c,9985:ep,9986:Pa,9987:Ns},Ny={33071:$n,33648:Oa,10497:bi},Lp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},im={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},A2={CUBICSPLINE:void 0,LINEAR:Er,STEP:So},Dp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function R2(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new te({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),n.DefaultMaterial}function Dr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function $s(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function C2(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function P2(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function I2(n){let e,t=n.extensions&&n.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Np(t.attributes):e=n.indices+":"+Np(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Np(n.targets[i]);return e}function Np(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function sm(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function L2(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var D2=new Ye,rm=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new w2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Tu(this.options.manager):this.textureLoader=new Au(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new el(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Dr(r,a,s),$s(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Vs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Lp[s.type],a=zo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new gt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Lp[s.type],c=zo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(M);y||(x=new c(a,p*f,s.count*f/h),y=new Ao(x,f/h),t.cache.add(M,y)),m=new Tr(y,l,d%f/h,g)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new gt(x,l,g);if(s.sparse!==void 0){let p=Lp.SCALAR,M=zo[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,D=new M(o[1],y,s.sparse.count*p),b=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new gt(m.array.slice(),m.itemSize,m.normalized));for(let C=0,F=D.length;C<F;C++){let T=D[C];if(m.setX(T,b[C*l]),l>=2&&m.setY(T,b[C*l+1]),l>=3&&m.setZ(T,b[C*l+2]),l>=4&&m.setW(T,b[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Dy[d.magFilter]||Dn,h.minFilter=Dy[d.minFilter]||Ns,h.wrapS=Ny[d.wrapS]||bi,h.wrapT=Ny[d.wrapT]||bi,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new mn(x);m.needsUpdate=!0,d(m)}),t.load(Vs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||L2(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[pt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Ya,zn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Xa,zn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return te}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){let u=s[pt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],nn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Et)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ot);let h=r.alphaMode||Dp.OPAQUE;if(h===Dp.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Dp.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ft&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new J(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==ft&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ft){let u=r.emissiveFactor;a.emissive=new pe().setRGB(u[0],u[1],u[2],nn)}return r.emissiveTexture!==void 0&&o!==ft&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),$s(u,r),t.associations.set(u,{materials:e}),r.extensions&&Dr(s,u,r),u})}createUniqueName(e){let t=Ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Hy(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=I2(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Hy(new vt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?R2(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=o[f],p,M=c[f];if(m.mode===di.TRIANGLES||m.mode===di.TRIANGLE_STRIP||m.mode===di.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new du(x,M):new N(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===di.TRIANGLE_STRIP?p.geometry=Ip(p.geometry,Iu):m.mode===di.TRIANGLE_FAN&&(p.geometry=Ip(p.geometry,il));else if(m.mode===di.LINES)p=new pu(x,M);else if(m.mode===di.LINE_STRIP)p=new Co(x,M);else if(m.mode===di.LINE_LOOP)p=new mu(x,M);else if(m.mode===di.POINTS)p=new Os(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&P2(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),$s(p,r),m.extensions&&Dr(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Dr(s,u[0],r),u[0];let d=new Ve;r.extensions&&Dr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new $t(fs.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Us(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),$s(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ye;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new fu(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let M=0,y=d.length;M<y;M++){let _=d[M],D=f[M],b=g[M],C=x[M],F=m[M];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let T=i._createAnimationTracks(_,D,b,C,F);if(T)for(let A=0;A<T.length;A++)p.push(T[A])}return new Su(r,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,D2)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Wa:c.length>1?h=new Ve:c.length===1?h=c[0]:h=new Pt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),$s(h,r),r.extensions&&Dr(i,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Ve;i.name&&(r.name=s.createUniqueName(i.name)),$s(r,i),i.extensions&&Dr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof zn||d instanceof mn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Zs[r.path]===Zs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Zs[r.path]){case Zs.weights:c=cs;break;case Zs.rotation:c=Vi;break;case Zs.position:case Zs.scale:c=us;break;default:switch(i.itemSize){case 1:c=cs;break;case 2:case 3:default:c=us;break}break}let h=s.interpolation!==void 0?A2[s.interpolation]:Er,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Zs[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=sm(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Vi?nm:rh;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function N2(n,e,t){let i=e.attributes,s=new Fn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){let h=sm(zo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new E,l=new E;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=sm(zo[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new xn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Hy(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=im[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return yt.workingColorSpace!==nn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),$s(n,e),N2(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?C2(n,e.targets,t):n})}var H2=ps.length;function om(n){return Math.max(0,Math.min(H2,Math.floor(n||0)))}function Nr(n){return 1+om(n)*iy}function _l(n){return fn*Nr(n)}function El(n){return _l(n)-7}function oh(n){let e=om(n);return up.flatMap(t=>t.zones.map(i=>({...i,ring:t.ring,unlockLevel:t.unlockLevel,unlocked:e>=t.unlockLevel})))}function ah(n){return _l(n)+ay}function ko(n){return _l(n)-ly}function lh(n){let e=Math.max(1,n||1);return Math.max(.8,3.4-e*.16)}function Sl(n){let e=Math.max(1,n||1);return Math.min(4,1+Math.floor((e-1)/4))}function Oy(n){return Sl(n)>=4?4:3}function fi(n){let e=om(n),t=ll,i=0,s=Xu.baseRange,r=Xu.baseDamage,o=Xu.fireRate,a=dy[0],l="The last free keep";for(let c=0;c<e;c++){let h=ps[c];t+=h.hp,i+=h.income,s+=h.range||0,r+=h.damage||0,o+=h.fireRate||0,a=h.name,l=h.feature||a}return{level:e,name:a,feature:l,maxHP:t,income:i,range:s,damage:r,fireRate:Math.max(.35,o),towerMaxLevel:Math.min(4,e+1)}}function Js(n){let e=Math.max(0,Math.min(6,Math.floor(n||0))),t=0;for(let i=0;i<dp.length;i++)e>=dp[i]&&(t=i);return t}function pi(n){return fy[Js(n)]}var gi=3e3,uh=new Float32Array(gi*3),hh=new Float32Array(gi*3),By=new Float32Array(gi),Fy=new Float32Array(gi),zy=new Float32Array(gi),dh=[],mi=[],wl=[];for(let n=0;n<gi;n++)dh.push({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,maxLife:1,size:1,r:1,g:1,b:1,gravity:0,drag:0,fadeIn:.1,shrink:!1,tex:0,floorY:.03});for(let n=gi-1;n>=0;n--)wl.push(n);var Un=new vt;Un.setAttribute("position",new gt(uh,3).setUsage(Ws));Un.setAttribute("aColor",new gt(hh,3).setUsage(Ws));Un.setAttribute("aSize",new gt(By,1).setUsage(Ws));Un.setAttribute("aAlpha",new gt(Fy,1).setUsage(Ws));Un.setAttribute("aTex",new gt(zy,1).setUsage(Ws));Un.boundingSphere=new xn(new E,500);Un.setDrawRange(0,0);var U2=new Ot({uniforms:{uSmoke:{value:ju()},uGlow:{value:Jt()}},vertexShader:`
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
    }`,transparent:!0,depthWrite:!1,blending:$e}),Hr=new Os(Un,U2);Hr.frustumCulled=!1;Hr.renderOrder=5;Hr.visible=!1;Ie.add(Hr);var ky=gi,Go=gi;function O2(){for(;mi.length>Go;){let n=mi.pop();dh[n].alive=!1,wl.push(n)}Un.setDrawRange(0,mi.length),mi.length===0&&(Hr.visible=!1)}function Gy(){let n=Fo().particleBudget,e=Math.max(0,Math.min(gi,ky,n));e!==Go&&(Go=e,O2())}function B2(n){let e=Number(n);return ky=Number.isFinite(e)?Math.max(0,Math.min(gi,Math.floor(e))):gi,Gy(),Go}function F2(){return mi.length>=Go||wl.length===0?-1:wl.pop()}var ch=new pe;function Vy(n){let e=F2();if(e===-1)return;let t=dh[e];t.alive=!0,t.x=n.x,t.y=n.y,t.z=n.z,t.vx=n.vx||0,t.vy=n.vy||0,t.vz=n.vz||0,t.life=0,t.maxLife=n.life||1,t.size=n.size||1,ch.setHex(n.color!==void 0?n.color:16777215),t.r=ch.r,t.g=ch.g,t.b=ch.b,t.gravity=n.gravity||0,t.drag=n.drag!==void 0?n.drag:.9,t.fadeIn=n.fadeIn!==void 0?n.fadeIn:.08,t.shrink=!!n.shrink,t.tex=n.smoke?1:0,t.floorY=n.floorY!==void 0?n.floorY:.03,mi.push(e)}function Wy(n,e,t={}){let i=Math.max(0,Go-mi.length),s=Math.min(Math.max(0,Math.floor(t.count||8)),i),r=t.color!==void 0?t.color:16777215,o=t.speed!==void 0?t.speed:4,a=t.spread!==void 0?t.spread:1,l=t.up!==void 0?t.up:0,c=t.size||.6,h=t.life||.6,u=t.gravity||0,d=t.drag!==void 0?t.drag:.88;for(let f=0;f<s;f++){let g,x,m,p;if(t.directional){g=t.dirX+(Math.random()-.5)*a,x=t.dirY+(Math.random()-.5)*a,m=t.dirZ+(Math.random()-.5)*a,p=Math.sqrt(g*g+x*x+m*m)||1;let M=o*(.6+Math.random()*.7);g=g/p*M,x=x/p*M,m=m/p*M}else{let M=Math.random()*Math.PI*2,y=Math.pow(Math.random(),.6),_=o*(.4+Math.random()*.9);g=Math.cos(M)*_*y,m=Math.sin(M)*_*y,x=l*_+(Math.random()-.35)*_*.5}Vy({x:e.x+(Math.random()-.5)*(t.posJitter||0),y:e.y+(Math.random()-.5)*(t.posJitter||0),z:e.z+(Math.random()-.5)*(t.posJitter||0),vx:g,vy:x,vz:m,color:Array.isArray(r)?r[Math.random()*r.length|0]:r,size:c*(.6+Math.random()*.8),life:h*(.7+Math.random()*.6),gravity:u,drag:d,shrink:t.shrink,smoke:t.smoke,floorY:t.floorY})}}var z2={spark:{count:10,speed:9,up:.5,size:.5,life:.45,gravity:-9,drag:.86},flash:{count:5,speed:2,up:1.5,size:2.4,life:.16,drag:.7,shrink:!0},smoke:{count:7,speed:1.6,up:2.4,size:2.6,life:1.4,drag:.94,smoke:!0},dust:{count:10,speed:3.4,up:1.4,size:1.5,life:.8,drag:.9,smoke:!0},soul:{count:9,speed:1.4,up:3.4,size:.9,life:1.1,drag:.96},frost:{count:12,speed:5,up:1.4,size:.7,life:.7,gravity:-3,drag:.88},magic:{count:10,speed:4,up:2,size:.8,life:.8,drag:.92},gold:{count:10,speed:5,up:4.5,size:.55,life:.9,gravity:-9,drag:.9},fire:{count:6,speed:.6,up:3,size:1.3,life:.6,drag:.92},portal:{count:14,speed:2.5,up:4.5,size:.9,life:.9,drag:.93},nova:{count:60,speed:16,up:.6,size:1.1,life:.9,drag:.9,shrink:!0},ember:{count:1,speed:.4,up:1.1,size:.5,life:3.2,drag:.99},impact:{count:16,speed:12,up:2.2,size:.7,life:.5,gravity:-10,drag:.85},confetti:{count:30,speed:8,up:8,size:.6,life:1.6,gravity:-6,drag:.93},splash:{count:18,speed:5.5,up:2.8,size:1.05,life:.85,gravity:-10,drag:.9,smoke:!0},wake:{count:2,speed:1.1,up:.35,size:1,life:1,drag:.96,smoke:!0}};function k2(n,e,t={}){let i=z2[n];i&&Wy(n,e,Object.assign({},i,t))}function Tl(n,e){n.clearUpdateRanges&&n.addUpdateRange?(n.clearUpdateRanges(),n.addUpdateRange(0,e)):n.updateRange&&(n.updateRange.offset=0,n.updateRange.count=e),n.needsUpdate=!0}function G2(n){if(Gy(),mi.length===0)return 0;let e=Number.isFinite(n)?Math.max(0,n):0,t=mi.length,i=0;for(let s=0;s<t;s++){let r=mi[s],o=dh[r];if(o.life+=e,o.life>=o.maxLife){o.alive=!1,wl.push(r);continue}let a=Math.pow(o.drag,e*60);o.vx*=a,o.vz*=a,o.vy=o.vy*a+o.gravity*e,o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e,o.y<o.floorY&&o.vy<0&&(o.y=o.floorY,o.vy*=-.3,o.vx*=.7,o.vz*=.7);let l=o.life/o.maxLife,c=l<o.fadeIn?l/o.fadeIn:1-(l-o.fadeIn)/(1-o.fadeIn),h=i*3;uh[h]=o.x,uh[h+1]=o.y,uh[h+2]=o.z,hh[h]=o.r,hh[h+1]=o.g,hh[h+2]=o.b,By[i]=o.shrink?o.size*(1-l):o.size*(.7+.3*c),Fy[i]=Math.max(0,c),zy[i]=o.tex,mi[i]=r,i++}return mi.length=i,Un.setDrawRange(0,i),i===0?(Hr.visible=!1,0):(Hr.visible=!0,Tl(Un.attributes.position,i*3),Tl(Un.attributes.aColor,i*3),Tl(Un.attributes.aSize,i),Tl(Un.attributes.aAlpha,i),Tl(Un.attributes.aTex,i),i)}var we={emit:k2,burst:Wy,spawn:Vy,update:G2,setParticleBudget:B2};var tv={value:0};function nt(n,e,t,i,s=0,r=0,o=0,a=.04,l=2){let c=Math.min(a,n*.45,e*.45,t*.45),h=new N(new vn(n,e,t,l,c),i);return h.position.set(s,r,o),h.castShadow=!0,h}function V2(n,e,t=.24,i=.06){let s=new sn(n,e,4,6);s.translate(0,-e/2,0);let r=s.getAttribute("position");for(let o=0;o<r.count;o++){let a=r.getX(o),l=r.getY(o),c=Math.max(0,-l/e),h=Math.max(0,1-Math.abs(a)/(n*.2));r.setXYZ(o,a*(1-t*c),l+i*h*c,.04*Math.sin(c*Math.PI)+.025*c*c)}return s.computeVertexNormals(),s}function am(n,e){let t=new Gn;t.moveTo(0,-e*.3),t.quadraticCurveTo(n*.62,-e*.58,n,0),t.quadraticCurveTo(n*.62,e*.58,0,e*.3),t.closePath();let i=new Pi(t,{depth:.055,bevelEnabled:!0,bevelSegments:1,bevelSize:.012,bevelThickness:.012,steps:1});return i.rotateX(Math.PI/2),i.translate(0,.0275,0),i.computeVertexNormals(),i}function Th(n){if(n.getAttribute("aSwayHeight"))return n;let e=n.getAttribute("position"),t=e.count,i=new Float32Array(t),s=new Float32Array(t*3),r=new Float32Array(t*3);for(let o=0;o<t;o++)i[o]=e.getY(o),s[o*3]=1,r[o*3+2]=1;return n.setAttribute("aSwayHeight",new Re(i,1)),n.setAttribute("aSwayRight",new Re(s,3)),n.setAttribute("aSwayForward",new Re(r,3)),n}function Wo(n,e,t=.6){return n.userData.sway=!0,n.onBeforeCompile=i=>{i.uniforms.uWindTime=tv,i.vertexShader=`uniform float uWindTime;
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
      #endif`)},n.customProgramCacheKey=()=>"sway"+e+"_"+t,n}function Cl(n){n.updateWorldMatrix(!0,!0);let e=n.matrixWorld.clone().invert(),t=new Map,i=new Set,s={candidates:0,batches:0,merged:0,removed:0,disposedSources:0};n.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||!o.visible||Array.isArray(o.material)||!o.material||o.material.transparent||!o.geometry||o.geometry.morphAttributes.position?.length||o.material.userData.sway&&(!o.geometry.getAttribute("aSwayHeight")||!o.geometry.getAttribute("aSwayRight")||!o.geometry.getAttribute("aSwayForward"))||Object.prototype.hasOwnProperty.call(o,"onBeforeRender")||o.onBeforeRender!==Pt.prototype.onBeforeRender)return;for(let h=o;h&&h!==n;h=h.parent)if(h.userData.noStaticBatch)return;let a=[o.castShadow,o.receiveShadow,o.renderOrder,o.layers.mask,o.frustumCulled].join("|"),l=t.get(o.material);l||(l=new Map,t.set(o.material,l));let c=l.get(a);c||(c={material:o.material,meshes:[]},l.set(a,c)),c.meshes.push(o),s.candidates++});for(let o of t.values())for(let a of o.values()){if(a.meshes.length<2)continue;let l=a.meshes.map(d=>{let f=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone(),g=e.clone().multiply(d.matrixWorld);if(f.applyMatrix4(g),a.material.userData.sway){let x=new rt().setFromMatrix4(g),m=new E(1,0,0).applyMatrix3(x),p=new E(0,0,1).applyMatrix3(x),M=f.getAttribute("position").count,y=new Float32Array(M*3),_=new Float32Array(M*3);for(let D=0;D<M;D++)y[D*3]=m.x,y[D*3+1]=m.y,y[D*3+2]=m.z,_[D*3]=p.x,_[D*3+1]=p.y,_[D*3+2]=p.z;f.setAttribute("aSwayRight",new Re(y,3)),f.setAttribute("aSwayForward",new Re(_,3))}if(f.getAttribute("normal")||f.computeVertexNormals(),!f.getAttribute("uv")){let x=f.getAttribute("position").count;f.setAttribute("uv",new Re(new Float32Array(x*2),2))}for(let x of Object.keys(f.attributes))["position","normal","uv","aSwayHeight","aSwayRight","aSwayForward"].includes(x)||f.deleteAttribute(x);return f.clearGroups(),f}),c=Yi(l,!1);if(l.forEach(d=>d.dispose()),!c)continue;c.computeBoundingBox(),c.computeBoundingSphere();let h=a.meshes[0],u=new N(c,a.material);u.name="static-batch",u.castShadow=h.castShadow,u.receiveShadow=h.receiveShadow,u.renderOrder=h.renderOrder,u.layers.mask=h.layers.mask,u.frustumCulled=h.frustumCulled,n.add(u);for(let d of a.meshes)i.add(d.geometry),d.removeFromParent();s.batches++,s.merged+=a.meshes.length,s.removed+=a.meshes.length-1}let r=new Set;Ie.traverse(o=>{o.isMesh&&o.geometry&&r.add(o.geometry)});for(let o of i)o.userData.persistent||r.has(o)||(o.dispose(),s.disposedSources++);return n.userData.staticBatch=s,s}var vh=new te({map:qu(),normalMap:my(),normalScale:new J(.55,.55),roughness:.97,metalness:0,color:14078644});vh.onBeforeCompile=n=>{n.uniforms.uDetailMap={value:vh.map},n.vertexShader=`varying vec3 vIHWorldPos;
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
     diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.88, 1.06, 0.84), green * 0.22);`)};vh.customProgramCacheKey=()=>"ih-ground-macro";var Mn=new Ve;Ie.add(Mn);var Di=Nr(0),fh=Nr(0);Mn.scale.setScalar(Di);var Tm=new N(new Bs(fn-7,96),vh);Tm.rotation.x=-Math.PI/2;Tm.receiveShadow=!0;Mn.add(Tm);var wh=new N(new dn(fn-7.3,fn,96),new te({map:Ku(),roughness:.95}));wh.rotation.x=-Math.PI/2;wh.position.y=-.32;wh.receiveShadow=!0;Mn.add(wh);var nv=new N(new Te(fn,fn-4,15,64,1,!0),new te({map:dl(),normalMap:pp(),roughness:1,normalScale:new J(1.6,1.6),side:ot}));nv.position.y=-7.9;Mn.add(nv);var Dl=fn,bh=fn+4,Nl=-.32,Ah=-2.75,W2=-2.6,iv=Dl+(bh-Dl)*((W2-Nl)/(Ah-Nl));function sv(n,e,t,i,s){let r=new dn(n,e,128,8),o=r.attributes.position,a=t-i;for(let c=0;c<o.count;c++){let u=(Math.hypot(o.getX(c),o.getY(c))-n)/(e-n);o.setZ(c,-a*u)}r.computeVertexNormals();let l=new N(r,s);return l.rotation.x=-Math.PI/2,l.position.y=t,l.receiveShadow=!0,l}var X2=new te({map:Ku(),roughness:.9,color:14207140}),Y2=new te({map:Ku(),roughness:.7,color:10127210});Mn.add(sv(Dl,bh,Nl,Ah,X2));var rv=fn+1.5,q2=(rv-Dl)/(bh-Dl),K2=Nl-(Nl-Ah)*q2+.012;Mn.add(sv(rv,bh,K2,Ah+.012,Y2));bp(iv*Di);var wm=new N(new Qe(fn-4,24,48),new te({map:dl(),roughness:1}));wm.rotation.x=Math.PI;wm.position.y=-26;Mn.add(wm);var Rh=new te({map:Zu(),normalMap:mp(),normalScale:new J(1.1,1.1),roughness:.95,metalness:.02,color:14206892,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Ch=new N(new dn(8.5,15.5,64),Rh);Ch.rotation.x=-Math.PI/2;Ch.position.y=.03;Ch.receiveShadow=!0;Mn.add(Ch);for(let n=0;n<4;n++){let e=new N(new sn(5.4,36),Rh);e.rotation.x=-Math.PI/2;let t=n/4*Math.PI*2;e.rotation.z=t,e.position.set(Math.sin(t)*33,.025,Math.cos(t)*33),e.receiveShadow=!0,Mn.add(e)}function Z2(){let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d");e.clearRect(0,0,64,64);for(let i=0;i<9;i++){let s=8+Math.random()*48,r=(Math.random()-.5)*22,o=30+Math.random()*30,a=e.createLinearGradient(s,64,s+r,64-o);a.addColorStop(0,"rgba(52,86,34,1)"),a.addColorStop(1,"rgba(120,168,72,1)"),e.fillStyle=a,e.beginPath(),e.moveTo(s-2.4,64),e.lineTo(s+2.4,64),e.lineTo(s+r,64-o),e.closePath(),e.fill()}let t=new Ci(n);return t.colorSpace=Et,t}function $2(){let t=new vt,i=[-.62/2,0,0,.62/2,0,0,.62/2,.66,0,-.62/2,.66,0,0,0,-.62/2,0,0,.62/2,0,.66,.62/2,0,.66,-.62/2],s=[0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1],r=[0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0],o=[0,1,2,0,2,3,4,5,6,4,6,7];return t.setAttribute("position",new Re(i,3)),t.setAttribute("uv",new Re(s,2)),t.setAttribute("normal",new Re(r,3)),t.setIndex(o),Th(t)}var J2=Wo(new te({map:Z2(),alphaTest:.42,side:ot,roughness:.9,color:12572320}),.055,.05),dm=900,Ol=new Ro($2(),J2,dm);Ol.instanceMatrix.setUsage(Ba);var bl=new Pt,fm=0,Xy=0;for(;fm<dm&&Xy<dm*30;){Xy++;let n=Math.random()*Math.PI*2,e=Math.sqrt(Math.random())*(fn-9),t=Math.cos(n)*e,i=Math.sin(n)*e;if(Math.hypot(t,i)<17||Math.abs(t)<4||Math.abs(i)<4)continue;let s=!1;for(let o of Vu)if(Math.hypot(t-o.x,i-o.z)<4){s=!0;break}if(s)continue;let r=.7+Math.random()*.9;bl.position.set(t,0,i),bl.rotation.y=Math.random()*Math.PI,bl.scale.set(r,r*(.8+Math.random()*.5),r),bl.updateMatrix(),Ol.setMatrixAt(fm++,bl.matrix)}Ol.count=fm;Ol.receiveShadow=!0;Mn.add(Ol);var ov=new te({map:gs(),roughness:.92}),pm=[Wo(new te({color:3103276,roughness:.9,flatShading:!0}),.1,1.2),Wo(new te({color:3828787,roughness:.9,flatShading:!0}),.1,1.2),Wo(new te({color:4749882,roughness:.9,flatShading:!0}),.1,1.2)],j2=Wo(new te({color:4483889,roughness:.92,flatShading:!0}),.09,1.6),Q2=Wo(new te({color:5405241,roughness:.92,flatShading:!0}),.09,1.6),mm=new te({map:dl(),normalMap:pp(),roughness:.98,flatShading:!0}),av=[];function bm(n,e,t){av.push({x:n,z:e,r:t})}Vu.forEach(n=>bm(n.x,n.z,4.2));bm(0,0,17);function lv(n,e,t){if(Math.hypot(n,e)<16||Math.abs(n)<t||Math.abs(e)<t)return!1;for(let i of av)if(Math.hypot(n-i.x,e-i.z)<i.r)return!1;return!0}function eR(n,e,t){let i=new Ve,s=new N(new Te(.16*t,.28*t,1.5*t,6),ov);s.position.y=.75*t,s.castShadow=!0,i.add(s);let r=pm[Math.random()*pm.length|0],o=1.3*t;for(let a=0;a<3;a++){let l=(1.05-a*.22)*t,c=(1.25-a*.18)*t,h=new N(Th(new Qe(l,c,7)),r);h.position.y=o+c*.4,h.castShadow=!0,i.add(h),o+=c*.62}i.position.set(n,0,e),i.rotation.y=Math.random()*Math.PI*2,Mn.add(i)}function tR(n,e,t){let i=new Ve,s=new N(new Te(.22*t,.36*t,2*t,6),ov);s.position.y=1*t,s.castShadow=!0,i.add(s);let r=Math.random()<.5?j2:Q2,o=3;for(let a=0;a<o;a++){let l=(.9+Math.random()*.45)*t,c=new N(Th(new Po(l,1)),r);c.position.set((Math.random()-.5)*1.1*t,(2.1+Math.random()*1.1)*t,(Math.random()-.5)*1.1*t),c.scale.y=.82,c.castShadow=!0,i.add(c)}i.position.set(n,0,e),i.rotation.y=Math.random()*Math.PI*2,Mn.add(i)}function nR(n,e,t){let i=new N(new $a(.55*t,0),mm);i.position.set(n,.26*t,e),i.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),i.scale.set(1,.62,1),i.castShadow=!0,i.receiveShadow=!0,Mn.add(i)}var Yy=0,qy=0;for(;Yy<58&&qy<800;){qy++;let n=Math.random()*Math.PI*2,e=20+Math.random()*(fn-24),t=Math.cos(n)*e,i=Math.sin(n)*e;lv(t,i,4.5)&&(Math.random()<.62?eR(t,i,.9+Math.random()*1.1):tR(t,i,.85+Math.random()*.8),bm(t,i,2.2),Yy++)}for(let n=0;n<26;n++){let e=Math.random()*Math.PI*2,t=17+Math.random()*(fn-20),i=Math.cos(e)*t,s=Math.sin(e)*t;lv(i,s,3.4)&&nR(i,s,.7+Math.random()*1.6)}Mn.userData.staticBatch=Cl(Mn);var cv=[];for(let n=0;n<3;n++){let e=new Ve,t=Math.random()*Math.PI*2,i=230+Math.random()*120,s=42+Math.random()*26,r=3+Math.random()*3,o=new N(new $a(r,1),mm);o.scale.set(1.1,.9,1.1),o.castShadow=!0,e.add(o);let a=new N(new Qe(r*.85,r*2,6),mm);a.rotation.x=Math.PI,a.position.y=-r*.75,e.add(a);let l=new N(new Bs(r*.86,12),new te({map:qu(),roughness:.95}));l.rotation.x=-Math.PI/2,l.position.y=r*.6,e.add(l);let c=new N(Th(new Qe(r*.22,r*.7,6)),pm[1]);c.position.y=r*.6+r*.32,c.castShadow=!0,e.add(c),e.position.set(Math.cos(t)*i,s,Math.sin(t)*i),Ie.add(e),cv.push({g:e,baseY:s,phase:Math.random()*Math.PI*2,spin:.04+Math.random()*.05})}var uv=[],iR=new Rt({map:ju(),color:16770767,transparent:!0,opacity:.32,depthWrite:!1,fog:!1});for(let n=0;n<16;n++){let e=new kt(iR.clone()),t=Math.random()*Math.PI*2,i=130+Math.random()*260,s=55+Math.random()*120;e.position.set(Math.cos(t)*i,24+Math.random()*70,Math.sin(t)*i),e.scale.set(s*1.7,s*.75,1),e.material.opacity=.22+Math.random()*.25,Ie.add(e),uv.push({s:e,angle:t,dist:i,speed:.004+Math.random()*.008})}var Ky=[new te({color:5136486,roughness:1,flatShading:!0,fog:!0,envMapIntensity:.2}),new te({color:6057588,roughness:1,flatShading:!0,fog:!0,envMapIntensity:.2}),new te({color:7110018,roughness:1,flatShading:!0,fog:!0,envMapIntensity:.2})],sR=new te({color:13030102,roughness:.85,flatShading:!0,fog:!0,envMapIntensity:.2}),Hl=new Ve;Ie.add(Hl);for(let n=0;n<40;n++){let e=n/40*Math.PI*2+Math.random()*.14,t=380+Math.random()*320,i=30+Math.random()*52,s=i*(.5+Math.random()*.38),r=new N(new Qe(s,i,5+(Math.random()*3|0),1),Ky[Math.random()*Ky.length|0]);if(r.position.set(Math.cos(e)*t,-34+i/2,Math.sin(e)*t),r.rotation.y=Math.random()*Math.PI,r.rotation.z=(Math.random()-.5)*.05,Hl.add(r),i>62){let o=i*.3,a=new N(new Qe(s*.3,o,5,1),sR);a.position.set(r.position.x,r.position.y+i/2-o/2+.5,r.position.z),a.rotation.y=r.rotation.y,Hl.add(a)}}Hl.userData.staticBatch=Cl(Hl);var lm=new ft({color:2829107,side:ot,transparent:!0,opacity:.85}),gm=new vt;gm.setAttribute("position",new Re([0,0,0,1.15,0,-.38,1.15,0,.42],3));var rR=new Gt(.16,5,4),gh=[];for(let n=0;n<10;n++){let e=new Ve,t=new N(gm,lm),i=new N(gm,lm);i.scale.x=-1;let s=new N(rR,lm);s.scale.set(.75,.75,1.5),s.position.z=.08,e.add(t,i,s);let r=55+Math.random()*95,o=Math.random()*Math.PI*2,a=20+Math.random()*26;e.position.set(Math.cos(o)*r,a,Math.sin(o)*r),Ie.add(e),gh.push({g:e,wingL:i,wingR:t,angle:o,radius:r,y:a,speed:(.05+Math.random()*.05)*(Math.random()<.5?1:-1),phase:Math.random()*Math.PI*2,flap:5+Math.random()*2.5,size:.7+Math.random()*.7}),e.scale.setScalar(gh[gh.length-1].size)}var Am=260,Ph=new vt,xh=new Float32Array(Am*3),hv=new Float32Array(Am);for(let n=0;n<Am;n++){let e=Math.random()*Math.PI*2,t=Math.sqrt(Math.random())*52;xh[n*3]=Math.cos(e)*t,xh[n*3+1]=0,xh[n*3+2]=Math.sin(e)*t,hv[n]=Math.random()}Ph.setAttribute("position",new gt(xh,3));Ph.setAttribute("aSeed",new gt(hv,1));Ph.boundingSphere=new xn(new E,200);var dv=new Ot({uniforms:{uTime:{value:0},uGlow:{value:Jt()}},vertexShader:`
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
    }`,transparent:!0,depthWrite:!1,blending:$e}),fv=new Os(Ph,dv);fv.frustumCulled=!1;Ie.add(fv);var xe=new Ve;Ie.add(xe);var ln=new te({map:Ir(),normalMap:fl(),normalScale:new J(.9,.9),roughness:.94,metalness:.02,color:13942167}),Li=new te({map:Ir(),normalMap:fl(),normalScale:new J(.55,.55),roughness:.86,metalness:.04,color:14996402}),Mh=new te({map:gs(),normalMap:gy(),roughness:.88}),Al=new te({map:$u(),roughness:.82}),bt=new te({color:14198846,metalness:.9,roughness:.32,emissive:7031824,emissiveIntensity:.25}),pv=new te({color:2759180,emissive:16757854,emissiveIntensity:2.4}),mv=new te({map:Ju(),side:ot,roughness:.8}),xm=new te({color:1718869,emissive:7260415,emissiveIntensity:2.6,metalness:.4,roughness:.15}),qi=new te({color:3817288,metalness:.82,roughness:.34}),gv=new te({color:2759242,emissive:9071615,emissiveIntensity:2.4,metalness:.5,roughness:.2}),Yo=new te({color:16773839,emissive:16767088,emissiveIntensity:1.5,metalness:.55,roughness:.2}),xv=new ft({color:16770720,transparent:!0,opacity:.55,blending:$e,depthWrite:!1,side:ot}),Or=new ds(16756838,3,42,1.6);Or.position.set(0,12,0);Ie.add(Or);var _h=[],Rm=[],Ft={sunspire:null,sunRays:null,tidalCrystals:[],stormTips:[],celestialRings:[],celestialOrbiters:null},ym=12,Pl=null,Rl=0,yv=new pe(16719904),oR=new Set([ln,Mh,Al,bt,pv,mv,xm,qi,gv,Yo,xv,Rh,Li]);function aR(n){let e=new Set,t=new Set;for(let i of[...n.children])n.remove(i),i.traverse?.(s=>{s.geometry&&e.add(s.geometry),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>t.add(r))});e.forEach(i=>{i.userData.persistent||i.dispose()}),t.forEach(i=>{oR.has(i)||i.dispose()})}var vv=new Gt(.065,7,5);vv.userData.persistent=!0;function cm(n,e,t,i,s){let r=new N(new Te(.05,.05,1.7*s,5),Mh);r.position.set(e,t+.85*s,i),r.castShadow=!0,n.add(r);let o=new N(vv,bt);o.scale.setScalar(s),o.position.set(e,t+1.72*s,i),n.add(o);let a=.95*s,l=.55*s,c=_h.length%3,h=new Gn;c===0?(h.moveTo(0,l/2),h.lineTo(a,l*.36),h.lineTo(a*.72,0),h.lineTo(a,-l/2),h.lineTo(0,-l/2)):c===1?(h.moveTo(0,l/2),h.lineTo(a*1.12,0),h.lineTo(0,-l/2)):(h.moveTo(0,l/2),h.lineTo(a,l/2),h.lineTo(a,-l*.28),h.lineTo(a*.55,-l/2),h.lineTo(a*.34,-l*.28),h.lineTo(0,-l/2)),h.closePath();let u=new Mu(h),d=u.getAttribute("position"),f=u.getAttribute("uv");for(let x=0;x<d.count;x++)f.setXY(x,d.getX(x)/a,(d.getY(x)+l/2)/l);let g=new N(u,mv);g.position.set(e,t+1.42*s,i),g.castShadow=!0,g.userData.noStaticBatch=!0,g.userData.variant=c,n.add(g),_h.push({mesh:g,phase:Math.random()*Math.PI*2,variant:c})}function Zy(n,e,t,i){let s=new kt(new Rt({map:Jt(),color:16752704,transparent:!0,blending:$e,depthWrite:!1}));s.position.set(e,t,i),s.scale.setScalar(1.1),n.add(s),Rm.push({sprite:s,base:s.position.clone(),phase:Math.random()*Math.PI*2,emit:Math.random()*2})}var $y=[13942167,14139546,14271392,14075048,14470066,14734010,14079692,14342358,15262936],lR=[16777215,16773860,16771798,16769232,16767160,16769704,10475736,11057384,16770720],cR=[16756838,16756838,16756838,16756838,16760944,16765056,9427199,12101887,16773312];function Bl(n){aR(xe),_h.length=0,Rm.length=0,Pl=null,Ft.sunspire=null,Ft.sunRays=null,Ft.tidalCrystals.length=0,Ft.stormTips.length=0,Ft.celestialRings.length=0,Ft.celestialOrbiters=null;let e=Math.max(0,Math.min($y.length-1,n));ln.color.setHex($y[e]),Li.color.copy(ln.color).multiplyScalar(1.08),Al.color.setHex(lR[e]),Or.color.setHex(cR[e]);let t=Math.min(1+n*.02,1.12),i=6.5+n*.55,s=3.2+n*.09,r=3.4+n*.1,o=new N(new Te(9,9.8,1.5,32),ln);o.position.y=.75,o.castShadow=!0,o.receiveShadow=!0,xe.add(o);let a=new N(new wt(9.38,.12,6,48),Li);a.rotation.x=Math.PI/2,a.position.y=1.34,a.receiveShadow=!0,xe.add(a);let l=new N(new Bs(8.9,48),Rh);l.rotation.x=-Math.PI/2,l.position.y=1.52,l.receiveShadow=!0,xe.add(l);let c=new N(new dn(3.35,3.55,48),bt);c.rotation.x=-Math.PI/2,c.position.y=1.545,xe.add(c);let h=new N(new dn(1.15,1.28,32),bt);h.rotation.x=-Math.PI/2,h.position.y=1.545,xe.add(h);let u=new N(new Te(9.6,10.2,.4,32),ln);u.position.y=.2,u.receiveShadow=!0,xe.add(u);let d=new N(new Te(10.4,11,r,40),ln);d.position.y=1.5+r/2,d.castShadow=!0,d.receiveShadow=!0,xe.add(d);let f=30,g=new vn(.85,.62,.55,2,.055),x=new vn(.9,.09,.6,1,.025);for(let S=0;S<f;S++){let I=S/f*Math.PI*2,L=new N(g,ln);L.position.set(Math.cos(I)*10.65,1.5+r+.31,Math.sin(I)*10.65),L.rotation.y=-I+Math.PI/2,L.castShadow=!0,xe.add(L);let H=new N(x,Li);H.position.copy(L.position),H.position.y+=.34,H.rotation.y=L.rotation.y,xe.add(H)}let m=new N(new wt(10.48,.1,6,48),Li);if(m.rotation.x=Math.PI/2,m.position.y=1.5+r-.18,xe.add(m),n>=1)for(let S=0;S<8;S++){let I=S/8*Math.PI*2+Math.PI/8,L=Math.cos(I)*11.05,H=Math.sin(I)*11.05,O=new N(new Ut(.72,r*.92,1.5),ln);O.position.set(L,1.5+r*.46,H),O.rotation.y=-I,O.castShadow=!0,O.receiveShadow=!0,xe.add(O);let k=new N(new Qe(.52,.75,4),ln);k.position.set(L,1.5+r*.92+.38,H),k.rotation.y=-I+Math.PI/4,k.castShadow=!0,xe.add(k)}let p=nt(2.5,3,.5,Mh,0,3,10.55,.055,2);xe.add(p);let M=new N(new wt(1.28,.2,8,24,Math.PI),Li);M.position.set(0,4.45,10.62),M.castShadow=!0,xe.add(M);for(let S of[-1,1]){let I=nt(.34,3.35,.48,Li,S*1.46,3.05,10.57,.045,2);xe.add(I);let L=nt(.46,.22,.58,ln,S*1.46,4.73,10.57,.035,1);L.rotation.z=S*-.16,xe.add(L);let H=nt(.095,2.55,.08,qi,S*.74,2.95,10.84,.018,1);xe.add(H)}let y=nt(.34,.44,.6,Li,0,4.64,10.6,.04,2);xe.add(y);let _=new N(new Ut(2.9,.22,.2),bt);_.position.set(0,4.15,10.82),xe.add(_);for(let S of[-.9,.9]){let I=new N(new Gt(.11,8,8),bt);I.position.set(S,2.2,10.82),xe.add(I)}if(n>=3){for(let I=0;I<7;I++){let L=new N(new Te(.055,.055,2.9,5),qi);L.position.set(-1.02+I*.34,2.95,10.86),xe.add(L)}for(let I of[1.9,3.9]){let L=new N(new Ut(2.55,.12,.12),qi);L.position.set(0,I,10.88),xe.add(L)}for(let I of[-1.48,1.48]){let L=new N(new Ut(.16,3.2,.2),qi);L.position.set(I,2.95,10.87),xe.add(L)}let S=new N(new Ut(3.2,.18,.3),qi);S.position.set(0,4.52,10.86),xe.add(S)}for(let S=0;S<4;S++){let I=S/4*Math.PI*2+Math.PI/4,L=Math.cos(I)*10.5,H=Math.sin(I)*10.5,O=new N(new Te(1.35,1.5,5.6,12),ln);O.position.set(L,2.8,H),O.castShadow=!0,O.receiveShadow=!0,xe.add(O);let k=new N(new Qe(1.75,2.4,10),Al);k.position.set(L,6.8,H),k.castShadow=!0,xe.add(k);let $=new N(new wt(1.42,.07,6,16),bt);$.rotation.x=Math.PI/2,$.position.set(L,5.35,H),xe.add($);let j=new N(new wt(1.47,.12,6,20),Li);j.rotation.x=Math.PI/2,j.position.set(L,5.58,H),j.castShadow=!0,xe.add(j);let le=new N(new wt(1.69,.08,6,20),Li);le.rotation.x=Math.PI/2,le.position.set(L,5.72,H),xe.add(le),Zy(xe,L,4.7,H),cm(xe,L,7.6,H,.75)}let D=new N(new Te(s,s*1.14,i,20),ln);D.position.y=1.5+i/2,D.castShadow=!0,D.receiveShadow=!0,xe.add(D);let b=1.5+i,C=new vn(.62,.55,.45,2,.045);for(let S=0;S<14;S++){let I=S/14*Math.PI*2,L=new N(C,ln);L.position.set(Math.cos(I)*(s+.05),b+.28,Math.sin(I)*(s+.05)),L.rotation.y=-I+Math.PI/2,L.castShadow=!0,xe.add(L)}let F=new N(new wt(s+.06,.09,6,28),bt);F.rotation.x=Math.PI/2,F.position.y=b-.8,xe.add(F);let T=10,A=new vn(.62,1.05,.08,2,.035);for(let S=0;S<2;S++)for(let I=0;I<T;I++){let L=I/T*Math.PI*2+S*.31,H=new N(new sn(.42,.85),pv);H.position.set(Math.cos(L)*(s+.02+(S===0?.02:.04)),1.5+i*(S===0?.38:.64),Math.sin(L)*(s+.02+(S===0?.02:.04))),H.rotation.y=-L+Math.PI/2,xe.add(H);let O=new N(A,Li);O.position.copy(H.position),O.rotation.y=H.rotation.y,O.position.multiplyScalar(1.002),xe.add(O),H.renderOrder=1,H.position.multiplyScalar(1.006)}let z=2.8+n*.08,X=new N(new Qe(s*1.2,z,12),Al);X.position.y=b+z/2,X.castShadow=!0,xe.add(X);let ne=new N(new Te(.06,.06,2.2,5),bt);if(ne.position.y=b+z+.9,xe.add(ne),cm(xe,0,b+z+1.6,0,1.1),n>=2)for(let S=0;S<4;S++){let I=S/4*Math.PI*2,L=Math.cos(I)*7.4,H=Math.sin(I)*7.4,O=6.2+n*.18,k=new N(new Te(.95,1.1,O,10),ln);k.position.set(L,1.5+O/2,H),k.castShadow=!0,xe.add(k);let $=new N(new Qe(1.25,1.9,8),Al);$.position.set(L,1.5+O+.95,H),$.castShadow=!0,xe.add($);let j=new N(new wt(1.03,.075,6,16),bt);j.rotation.x=Math.PI/2,j.position.set(L,1.5+O+.04,H),xe.add(j)}if(n>=4){for(let I=0;I<4;I++){let L=I/4*Math.PI*2;cm(xe,Math.cos(L)*9.6,1.5+r+.6,Math.sin(L)*9.6,.8)}let S=new N(new wt(10.7,.09,6,48),bt);S.rotation.x=Math.PI/2,S.position.y=1.5+r+.08,xe.add(S);for(let I=0;I<8;I++){let L=I/8*Math.PI*2+Math.PI/8,H=new N(new Qe(.14,.55,5),bt);H.position.set(Math.cos(L)*10.65,1.5+r+.65,Math.sin(L)*10.65),xe.add(H)}}for(let S=0;S<4;S++){let I=S/4*Math.PI*2+Math.PI/4,L=Math.cos(I)*6.2,H=Math.sin(I)*6.2,O=new N(new Te(.36,.22,.42,8),bt);O.position.set(L,2.02,H),O.castShadow=!0,xe.add(O);let k=new N(new Te(.1,.14,.5,6),Mh);k.position.set(L,1.77,H),xe.add(k),Zy(xe,L,2.35,H)}if(n>=5){let S=new N(new wt(.68,.09,6,18),bt);S.rotation.x=Math.PI/2,S.position.y=b+z+.5,xe.add(S);for(let O=0;O<5;O++){let k=O/5*Math.PI*2,$=new N(new Qe(.09,.5,5),bt);$.position.set(Math.cos(k)*.68,b+z+.72,Math.sin(k)*.68),xe.add($)}let I=b+z+.8,L=new kt(new Rt({map:Jt(),color:16770720,transparent:!0,blending:$e,depthWrite:!1,opacity:.9}));L.position.y=I,L.scale.setScalar(4.4),xe.add(L),Ft.sunspire=L;let H=new Ve;H.position.y=I;for(let O=0;O<8;O++){let k=O/8*Math.PI*2,$=new N(new Ut(.07,.07,1.15),bt);$.position.set(Math.cos(k)*1.35,0,Math.sin(k)*1.35),$.rotation.y=-k,H.add($)}Cl(H),H.userData.noStaticBatch=!0,xe.add(H),Ft.sunRays=H}if(n>=6){let S=new N(new dn(11.2,13.3,48),ln);S.rotation.x=-Math.PI/2,S.position.y=1.36,S.receiveShadow=!0,xe.add(S);let I=new N(new wt(13.2,.09,6,48),bt);I.rotation.x=Math.PI/2,I.position.y=1.4,xe.add(I);let L=new N(new wt(11.3,.06,6,48),bt);L.rotation.x=Math.PI/2,L.position.y=1.4,xe.add(L);for(let H=0;H<8;H++){let O=H/8*Math.PI*2+Math.PI/8,k=Math.cos(O)*12.25,$=Math.sin(O)*12.25,j=new N(new Te(.28,.38,.58,8),ln);j.position.set(k,1.66,$),j.castShadow=!0,xe.add(j);let le=new N(new an(.26,0),xm);le.position.set(k,2.26,$),le.scale.y=1.8,le.castShadow=!0,le.userData.noStaticBatch=!0,xe.add(le);let K=new kt(new Rt({map:Jt(),color:7260415,transparent:!0,blending:$e,depthWrite:!1,opacity:.65}));K.position.copy(le.position),K.scale.setScalar(1.35),xe.add(K),Ft.tidalCrystals.push({crystal:le,glow:K,baseY:2.26,phase:Math.random()*Math.PI*2})}}if(n>=7)for(let S=0;S<4;S++){let I=S/4*Math.PI*2+Math.PI/4,L=Math.cos(I)*12.25,H=Math.sin(I)*12.25,O=new N(new Te(.44,.64,.9,8),qi);O.position.set(L,1.88,H),O.castShadow=!0,xe.add(O);let k=new N(new Te(.15,.28,5.8,6),qi);k.position.set(L,5.2,H),k.castShadow=!0,xe.add(k);let $=new N(new wt(.3,.06,5,12),bt);$.rotation.x=Math.PI/2,$.position.set(L,4.3,H),xe.add($);let j=new N(new an(.34,0),gv);j.position.set(L,8.35,H),j.castShadow=!0,j.userData.noStaticBatch=!0,xe.add(j);let le=new kt(new Rt({map:Jt(),color:12099839,transparent:!0,blending:$e,depthWrite:!1,opacity:.8}));le.position.copy(j.position),le.scale.setScalar(1.8),xe.add(le),Ft.stormTips.push({tip:j,glow:le,x:L,z:H,baseY:8.35,phase:Math.random()*Math.PI*2})}if(n>=8){let S=new N(new an(.9,0),xm);S.position.y=b+z+2.1,S.castShadow=!0,S.userData.noStaticBatch=!0,xe.add(S),Pl=S;let I=new N(new Te(.06,.9,7,10,1,!0),new ft({color:7260415,transparent:!0,opacity:.12,blending:$e,depthWrite:!1,side:ot}));I.position.y=b+z+5.4,xe.add(I);for(let H=0;H<3;H++){let O=new N(new wt(1.35+H*.38,.035,6,48),xv.clone());O.rotation.x=Math.PI/2+H*.5,O.rotation.y=H*.8,O.position.y=S.position.y,O.userData.noStaticBatch=!0,xe.add(O),Ft.celestialRings.push(O)}let L=new Ve;L.position.y=S.position.y;for(let H=0;H<8;H++){let O=H/8*Math.PI*2,k=new N(new an(.16,0),Yo);k.position.set(Math.cos(O)*1.95,Math.sin(O*2)*.35,Math.sin(O)*1.95),k.scale.y=1.6,L.add(k)}Cl(L),L.userData.noStaticBatch=!0,xe.add(L),Ft.celestialOrbiters=L}xe.scale.setScalar(t),ym=(b+z+.4)*t,Or.position.set(0,ym-1.5,0),Or.distance=38+n*2,Or.intensity=3+n*.2,xe.userData.staticBatch=Cl(xe)}Bl(0);function Fl(n){yv.setHex(n),Rl=.4}function Ko(){return ym}var He=new Ve;He.position.set(0,0,12.8);He.scale.setScalar(1.5);Ie.add(He);var qo=new N(new dn(.62,.82,40),new ft({color:16767114,transparent:!0,opacity:.55,blending:$e,depthWrite:!1,side:ot}));qo.rotation.x=-Math.PI/2;qo.position.y=.05;He.add(qo);var Ne=new Ve;He.add(Ne);var Il=new ds(16763274,2,26,1.7);Il.position.set(0,3,0);He.add(Il);var Mv=new te({color:15251850,roughness:.7}),Eh=new te({map:gp(),roughness:.75,side:ot}),_v=new te({map:gp(),color:9546635,roughness:.86,side:ot}),Sh=new te({color:12107464,metalness:.85,roughness:.28,envMapIntensity:1.2}),Ul=new te({color:4608093,metalness:.8,roughness:.4,envMapIntensity:1}),Ll=new te({color:14081508,metalness:.9,roughness:.22,envMapIntensity:1.25}),xi=new te({color:7031340,roughness:.85}),vs=new te({color:9067051,roughness:.75}),vm=new te({color:5857644,metalness:.72,roughness:.42}),Mm=new te({color:2695965,roughness:.72}),_m=new te({color:3810322,roughness:.9}),yh=new te({color:11573872,roughness:.85}),Ev=new te({color:14722108,metalness:.3,roughness:.45}),Cm=new te({color:5978145,roughness:.72}),Sv=new ft({color:12577023}),Pm=new te({color:2771594,emissive:4890367,emissiveIntensity:1.6,metalness:.5,roughness:.3}),Ih=new te({color:9051946,roughness:.85,side:ot}),Em=new te({color:12092974,emissive:16762960,emissiveIntensity:.03,metalness:.15,roughness:.55}),Sm=new te({color:13212218,emissive:16754736,emissiveIntensity:.06,metalness:.2,roughness:.5}),Tv=new te({color:15777872,metalness:.6,roughness:.3,emissive:6962952,emissiveIntensity:.18}),wv=new ft({color:16767088,transparent:!0,opacity:.46,blending:$e,depthWrite:!1,side:ot}),Ur={},On=0,Jy=["torso","head","armL","armR","legL","legR","cape"],Xo=null,ph=!1,jy=!1,bv=new Set([Mv,Eh,_v,Sh,Ul,Ll,xi,vs,vm,Mm,_m,yh,Ev,Cm,Sv,Pm,Ih,Em,Sm,Tv,wv,Yo,bt,qi]);function uR(){let n=new Set,e=new Set;for(let t of[...Ne.children])Ne.remove(t),t.traverse?.(i=>{i.geometry&&n.add(i.geometry),i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>e.add(s))});n.forEach(t=>{t.userData.sharedAsset||t.dispose()}),e.forEach(t=>{bv.has(t)||t.dispose()}),Ur={}}function Vo(n,e,t,i){let s=new Ve;return s.position.set(e,t,i),n.add(s),s}function mh(n,e,t,i,s,r,o,a=!0){let l=Vo(n,e,t,i),c=new N(new kn(r,Math.max(.01,s-r*2),4,8),o);if(c.position.y=-s/2,c.castShadow=!0,l.add(c),a){let h=nt(r*2.4,r*1.15,r*3.1,xi,0,-s+r*.6,r*.35,.018,1);l.add(h)}return l}function hR(n,e,t,i){if(t===0){let h=new N(new Qe(.225*e,.36*e,7),i);h.position.set(0,1.34*e,-.015*e),h.rotation.y=Math.PI/7,h.castShadow=!0,n.add(h);let u=nt(.27*e,.12*e,.035*e,Ul,0,1.245*e,.15*e,.025*e,2);n.add(u);let d=nt(.3*e,.04*e,.055*e,xi,0,1.325*e,.17*e,.012*e,1);d.rotation.x=-.12,n.add(d);return}let s=t>=2?Sh:Ul,r=nt(.37*e,.32*e,.33*e,s,0,1.32*e,0,.05*e,2);r.rotation.x=-.035,n.add(r);let o=nt(.29*e,.065*e,.29*e,Ll,0,1.5*e,-.01*e,.018*e,1);n.add(o);let a=nt(.41*e,.05*e,.075*e,s,0,1.415*e,.175*e,.015*e,1);a.rotation.x=-.12,n.add(a);let l=nt(.28*e,.045*e,.03*e,qi,0,1.35*e,.183*e,.01*e,1);n.add(l);let c=nt(.042*e,.15*e,.05*e,Ll,0,1.305*e,.194*e,.01*e,1);n.add(c);for(let h of[-1,1]){let u=nt(.065*e,.16*e,.1*e,s,h*.155*e,1.25*e,.14*e,.016*e,1);u.rotation.z=h*-.12,n.add(u)}if(t===1){let h=new N(new Qe(.075*e,.42*e,5),Ih);h.scale.z=.48,h.position.set(0,1.71*e,-.045*e),h.rotation.x=-.24,h.castShadow=!0,n.add(h)}else for(let h of[-1,1]){let u=nt(.055*e,(t===3?.25:.19)*e,.24*e,t===3?bt:Ll,h*.11*e,1.57*e,-.01*e,.018*e,1);u.rotation.z=h*-.28,n.add(u)}}function um(n,e){let{scale:t=1,cloak:i=!0,hood:s=!0,armor:r=0,cloth:o=Eh,capeMat:a=Ih}=e,l=t,c=new N(new kn(.22*l,.38*l,5,10),o);c.position.y=.82*l,c.castShadow=!0,n.add(c);let h=new N(new Te(.255*l,.255*l,.075*l,10),xi);h.position.y=.67*l,n.add(h);let u=nt(.09*l,.075*l,.035*l,bt,0,.67*l,.25*l,.014*l,1);if(n.add(u),r>0){let M=r>=2?Sh:Ul,y=nt(.42*l,.38*l,.18*l,M,0,.88*l,.07*l,.045*l,2);y.rotation.x=-.06,n.add(y);let _=nt(.35*l,.12*l,.15*l,M,0,.65*l,.075*l,.025*l,1);n.add(_);let D=nt(.3*l,.026*l,.03*l,r>=2?bt:Ll,0,.99*l,.17*l,.008*l,1);n.add(D);for(let b of[-1,1]){let C=nt(.15*l,.22*l,.1*l,M,b*.15*l,.55*l,.1*l,.024*l,1);C.rotation.z=b*.08,n.add(C)}if(r>=3){let b=new N(new an(.047*l,0),Yo);b.scale.y=1.35,b.position.set(0,.91*l,.178*l),n.add(b)}}else{let M=nt(.32*l,.31*l,.09*l,xi,0,.87*l,.155*l,.025*l,1);M.rotation.x=-.05,n.add(M);let y=nt(.4*l,.075*l,.22*l,o,0,1.03*l,0,.025*l,1);n.add(y)}let d=new N(new Gt(.16*l,12,10),Mv);d.position.y=1.18*l,d.castShadow=!0,n.add(d),s&&hR(n,l,r,o);let f=null;i&&(f=new N(V2(.52*l,.9*l,.26,.065),a),f.position.set(0,1.08*l,-.185*l),f.rotation.x=.12,f.castShadow=!0,n.add(f));let g=mh(n,-.12*l,.62*l,0,.6*l,.075*l,xi),x=mh(n,.12*l,.62*l,0,.6*l,.075*l,xi),m=mh(n,-.3*l,1*l,0,.48*l,.055*l,o,!1),p=mh(n,.3*l,1*l,0,.48*l,.055*l,o,!1);if(r>0){let M=r>=2?Sh:Ul;for(let y of[-1,1]){let _=nt(.19*l,.11*l,.23*l,M,y*.31*l,1.045*l,0,.032*l,2);if(_.rotation.z=y*.16,n.add(_),r>=2){let A=nt(.17*l,.035*l,.21*l,bt,y*.335*l,1.11*l,.005*l,.01*l,1);A.rotation.z=y*.18,n.add(A)}let D=y<0?m:p,b=nt(.12*l,.2*l,.13*l,M,0,-.31*l,.015*l,.022*l,1);D.add(b);let C=y<0?g:x,F=nt(.15*l,.13*l,.085*l,M,0,-.19*l,.07*l,.026*l,1);C.add(F);let T=nt(.12*l,.24*l,.09*l,M,0,-.39*l,.06*l,.02*l,1);T.rotation.x=-.05,C.add(T)}}else for(let M of[m,p]){let y=nt(.105*l,.16*l,.11*l,xi,0,-.31*l,.01*l,.018*l,1);M.add(y)}return{torso:c,head:d,legL:g,legR:x,armL:m,armR:p,cape:f,scale:l,armor:r}}function hm(n,e){let t=Vo(n,.1*e,-.23*e,.055*e),i=new N(new wt(.34*e,.032*e,6,20,Math.PI*1.15),Cm);i.rotation.z=-Math.PI/2-.35,i.castShadow=!0,t.add(i);let s=new N(new wt(.34*e,.011*e,5,20,Math.PI*1.15),Pm);s.rotation.copy(i.rotation),s.position.z=.034*e,t.add(s);let r=nt(.065*e,.16*e,.065*e,xi,0,0,.01*e,.016*e,1);t.add(r);let o=new N(new Te(.007*e,.007*e,.62*e,4),Sv);return o.rotation.z=.42,o.position.z=.045*e,t.add(o),t}function Av(n){n.traverse(e=>{if(e.geometry&&(e.geometry.userData.sharedAsset=!0),!e.material)return;let t=Array.isArray(e.material)?e.material:[e.material];for(let i of t)i.userData.sharedAsset=!0,bv.add(i);e.isMesh&&(e.castShadow=Array.isArray(e.material)?e.material.some(i=>!i.transparent):!e.material.transparent,e.receiveShadow=!0)})}function dR(n){if(!Xo)return null;let e=new Ve;e.name="sunward-ranger-asset";let t=Xo.clone(!0);t.updateMatrixWorld(!0);let i={};for(let a of Jy)i[a]=t.getObjectByName(a);if(Jy.some(a=>!i[a]))return null;let s=new Fn().setFromObject(t),r=s.max.y-s.min.y,o=r>.001?1.55/r:1;return t.scale.multiplyScalar(o),t.position.y-=s.min.y*o,Av(t),e.add(t),n.add(e),{...i,bow:t.getObjectByName("SunBow"),scale:1,armor:0,assetRoot:e}}function fR(){if(Xo||ph||jy)return;ph=!0;let n=(document.documentElement.dataset.assetBase||"./public/")+"models/sunward-ranger.glb";new sh().load(n,e=>{ph=!1,Xo=e.scene,Av(Xo),On===0&&Zo(v.heroLevel)},void 0,e=>{ph=!1,jy=!0,console.warn("[world] Sunward Ranger asset unavailable; keeping procedural ranger.",e)})}function Zo(n){if(uR(),On=Js(n),He.userData.stage=On,He.userData.stageName=pi(n),On===0){let i=Xo?dR(Ne):null;if(i)Ur=i;else{let s=um(Ne,{scale:1,armor:0,cloth:_v}),r=hm(s.armR,1),o=new N(new Te(.075,.055,.46,8),xi);o.position.set(-.19,.91,-.2),o.rotation.x=-.3,o.castShadow=!0,Ne.add(o);for(let a=0;a<3;a++){let l=new N(new Te(.009,.009,.4,4),Cm);l.position.set(-.22+a*.035,1.13,-.16+a*.018),l.rotation.x=-.3,Ne.add(l);let c=new N(new Qe(.027,.1,4),yh);c.position.set(l.position.x,.99,l.position.z+.045),c.rotation.x=Math.PI,Ne.add(c)}Ur={...s,bow:r}}}else if(On===1){let s=new N(new kn(.4,1.05,6,12),vs);s.rotation.x=Math.PI/2,s.position.y=1.14*1,s.castShadow=!0,Ne.add(s);let r=new N(new Gt(.43*1,12,10),vs);r.position.set(0,1.17*1,.55*1),r.scale.z=.88,r.castShadow=!0,Ne.add(r);let o=new N(new Gt(.44*1,12,10),vs);o.position.set(0,1.11*1,-.6*1),o.scale.z=.9,o.castShadow=!0,Ne.add(o);let a=new N(new Te(.18*1,.3*1,.9*1,8),vs);a.position.set(0,1.7*1,.82*1),a.rotation.x=.55,a.castShadow=!0,Ne.add(a);let l=nt(.3*1,.32*1,.58*1,vs,0,2.06*1,1.15*1,.075*1,2);l.rotation.x=-.08,Ne.add(l);let c=nt(.25*1,.2*1,.32*1,vs,0,1.99*1,1.43*1,.055*1,2);Ne.add(c);for(let y of[-1,1]){let _=new N(new Qe(.055,.19,5),vs);_.position.set(y*.105*1,2.28*1,1.08*1),_.rotation.z=y*-.15,Ne.add(_);let D=new N(new Gt(.026*1,6,5),Mm);D.position.set(y*.155*1,2.11*1,1.25*1),Ne.add(D);let b=nt(.045*1,.3*1,.07*1,bt,y*.16*1,2.06*1,1.25*1,.012*1,1);b.rotation.x=-.15,Ne.add(b)}for(let y=0;y<3;y++){let _=nt(.09,.34,.25,_m,0,(2.02-y*.17)*1,(.91-y*.22)*1,.025,1);_.rotation.x=.42,Ne.add(_)}let h=nt(.32*1,.055*1,.07*1,bt,0,2.19*1,1.3*1,.015*1,1);Ne.add(h);let u=nt(.64*1,.16*1,.62*1,xi,0,1.57*1,.02,.04*1,2);Ne.add(u);let d=nt(.66*1,.12*1,.78*1,vm,0,1.42*1,.03*1,.035*1,2);Ne.add(d);for(let y of[-1,1]){let _=nt(.07,.3,.58,vm,y*.4*1,1.29,.05,.022,1);_.rotation.z=y*.12,Ne.add(_)}let g=[[-.28,1,.52],[.28,1,.52],[-.28,1,-.52],[.28,1,-.52]].map(y=>{let _=Vo(Ne,y[0]*1,y[1]*1,y[2]*1),D=new N(new Te(.1*1,.075*1,.95*1,6),vs);D.position.y=-.48*1,D.castShadow=!0,_.add(D);let b=nt(.17*1,.13*1,.23*1,Mm,0,-.94*1,.035*1,.025*1,1);return _.add(b),_}),x=new N(new Qe(.12*1,.7*1,6),_m);x.position.set(0,1.25*1,-1.05*1),x.rotation.x=-.9,x.castShadow=!0,Ne.add(x);let m=new Ve;m.position.y=.85,Ne.add(m);let p=um(m,{scale:.82,cloak:!0,hood:!0,armor:1});p.legL.visible=!1,p.legR.visible=!1;let M=hm(p.armR,.9);Ur={...p,horseLegs:g,tail:x,bow:M,body:s}}else{let C=function(S){let I=Vo(Ne,S*.28*1.05,1.3125,0);for(let H=0;H<4;H++){let O=new N(D,s&&H===0?Sm:o);O.scale.x=S,O.position.set(S*(.05+H*.11)*1.05,-H*.012*1.05,(.16-H*.18)*1.05),O.rotation.y=S*(.08+H*.11),O.castShadow=!0,I.add(O)}for(let H=0;H<3;H++){let O=new N(b,r);O.scale.x=S,O.position.set(S*(.08+H*.17)*1.05,.025*1.05,(.38+H*.11)*1.05),O.rotation.y=S*(.22+H*.12),O.castShadow=!0,I.add(O)}let L=nt(.28*1.05,.09*1.05,.36*1.05,s?bt:r,S*.08*1.05,.04*1.05,.12*1.05,.025*1.05,1);return L.rotation.z=S*.12,I.add(L),I},s=On===3,r=s?Em:yh,o=s?Sm:yh,a=s?Tv:Ev,l=new N(new kn(.38*1.05,1*1.05,6,12),r);l.rotation.x=Math.PI/2,l.position.y=1.05*1.05,l.castShadow=!0,Ne.add(l);let c=new N(new Gt(.4*1.05,10,8),r);c.position.set(0,1.08*1.05,.5*1.05),c.scale.set(.9,1.05,.85),c.castShadow=!0,Ne.add(c);let h=new N(new Gt(.42*1.05,10,10),r);h.position.set(0,1.02*1.05,-.62*1.05),Ne.add(h);let u=new N(new Te(.14*1.05,.24*1.05,.5*1.05,8),r);u.position.set(0,1.5*1.05,.62*1.05),u.rotation.x=.35,Ne.add(u);let d=new N(new Gt(.22*1.05,10,8),r);d.position.set(0,1.78*1.05,.82*1.05),d.scale.set(.9,1,1.08),d.castShadow=!0,Ne.add(d);let f=new N(new Qe(.09*1.05,.35*1.05,6),a);f.position.set(0,1.74*1.05,1.08*1.05),f.rotation.x=Math.PI/2,f.castShadow=!0,Ne.add(f);for(let S of[-1,1]){let I=new N(new Gt(.02835,6,5),s?Yo:Pm);I.position.set(S*.135*1.05,1.83*1.05,.965*1.05),Ne.add(I);let L=nt(.12*1.05,.035*1.05,.06*1.05,s?bt:r,S*.13*1.05,1.875*1.05,.96*1.05,.012*1.05,1);L.rotation.z=S*-.18,Ne.add(L)}if(s){let S=new N(new Qe(.07875,.399,5),Em);S.position.set(0,2.02*1.05,.75*1.05),S.rotation.x=-.35,S.scale.z=.55,Ne.add(S)}let g=new Te(.022*1.05,.018*1.05,.14*1.05,5),x=new Qe(.026*1.05,.11*1.05,5),p=[[-.24,.9,.4],[.24,.9,.4],[-.24,.9,-.4],[.24,.9,-.4]].map(S=>{let I=Vo(Ne,S[0]*1.05,S[1]*1.05,S[2]*1.05),L=new N(new Te(.07*1.05,.06*1.05,.5*1.05,5),a);L.position.y=-.25*1.05,I.add(L);for(let H=-1;H<=1;H++){let O=new N(g,a);O.rotation.x=Math.PI/2,O.position.set(H*.05*1.05,-.5*1.05,.075*1.05),I.add(O);let k=new N(x,s?bt:a);k.rotation.x=Math.PI/2,k.position.set(H*.05*1.05,-.515*1.05,.16*1.05),I.add(k)}return I}),M=Vo(Ne,0,1.02*1.05,-.92*1.05),y=am(.92*1.05,.24*1.05);for(let S=-1;S<=1;S++){let I=new N(y,r);I.rotation.y=Math.PI/2+S*.23,I.rotation.z=S*.06,I.position.set(S*.06*1.05,0,-.08*1.05),I.castShadow=!0,M.add(I)}let _=s?1.16:1,D=am(1.7*1.05*_,.36*1.05*_),b=am(1.12*1.05*_,.3*1.05*_),F=C(-1),T=C(1),A=nt(.55*1.05,.13*1.05,.5*1.05,xi,0,1.36*1.05,.04*1.05,.035*1.05,2);Ne.add(A);let z=new Ve;z.position.set(0,.9,.05),Ne.add(z);let X=um(z,{scale:.8,cloak:!0,hood:!0,armor:s?3:2,cloth:Eh,capeMat:s?Eh:Ih});X.legL.visible=!1,X.legR.visible=!1;let ne=hm(X.armR,.9);if(Ur={...X,wings:[F,T],legs:p,tail:M,bow:ne,body:l,flying:!0},Ne.position.y=1.35,s){let S=new N(new wt(.378,.029400000000000003,6,32),wv);S.position.set(0,2.36*1.05,.04*1.05),S.rotation.x=Math.PI/2+.22,Ne.add(S);let I=new kt(new Rt({map:Jt(),color:16770720,transparent:!0,blending:$e,depthWrite:!1,opacity:.12}));I.position.set(0,1.2*1.05,0),I.scale.setScalar(3),Ne.add(I);let L=new Ve;L.position.y=1.95*1.05;let H=[];for(let k=0;k<8;k++){let $=k/8*Math.PI*2,j=new N(new an(.09*1.05,0),Yo);j.position.set(Math.cos($)*1.08,0,Math.sin($)*1.08),L.add(j),H.push(j)}Ne.add(L);let O=[];for(let k of[-1,1]){let $=new kt(new Rt({map:Jt(),color:16765040,transparent:!0,blending:$e,depthWrite:!1,opacity:.18}));$.position.set(k*2.42*1.05,1.26*1.05,0),$.scale.setScalar(.8),Ne.add($),O.push($)}Ur.celestial={halo:S,aura:I,orbiters:L,shards:H,wingGlows:O},Ne.position.y=1.55}}let e=[16763274,16763274,12577023,16770720],t=[16767114,16767114,10477823,16770720];Il.color.setHex(e[On]),Il.intensity=.95+On*.12,Il.distance=20+On*3,qo.material.color.setHex(t[On]),On!==2&&On!==3&&(Ne.position.y=0)}Zo(v.heroLevel);fR();var Im=oh(0),yi=[],pR=new te({map:Zu(),normalMap:mp(),roughness:.92,color:12433064});Im.forEach((n,e)=>{let t=new Ve;t.position.set(n.x,0,n.z),t.visible=n.unlocked,t.scale.setScalar(n.unlocked?1:.18);let i=new N(new Te(2,2.25,.32,8),pR);i.position.y=.16,i.receiveShadow=!0,i.castShadow=!0,t.add(i);let s=new ft({color:Mt[v.buildType].color,transparent:!0,opacity:.85,blending:$e,depthWrite:!1}),r=new N(new wt(1.62,.07,6,36),s);r.rotation.x=Math.PI/2,r.position.y=.36,t.add(r);let o=new Rt({map:xp(v.buildType),color:Mt[v.buildType].color,transparent:!0,opacity:.95,blending:$e,depthWrite:!1}),a=new kt(o);a.position.y=1.7,a.scale.setScalar(1.15),t.add(a);let l=new N(new Te(1.25,1.25,1.6,18,1,!0),new ft({color:Mt[v.buildType].color,transparent:!0,opacity:.022,blending:$e,depthWrite:!1,side:ot}));l.position.y=1.1,t.add(l),Ie.add(t),yi.push({x:n.x,z:n.z,group:t,disc:i,ring:r,icon:a,beam:l,taken:!1,index:e,ringIndex:n.ring,unlockLevel:n.unlockLevel,unlocked:n.unlocked,revealT:n.unlocked?1:0})});function zl(n){let e=0;for(let t of yi){let i=n>=t.unlockLevel;i&&!t.unlocked?(t.unlocked=!0,t.revealT=0,t.group.visible=!0,t.group.scale.setScalar(.18),t.ring.visible=!0,t.icon.visible=!0,t.beam.visible=!0,e++):i||(t.unlocked=!1,t.taken||(t.group.visible=!1,t.revealT=0))}return e}var Rv=v.buildType;function mR(){let n=Mt[v.buildType];yi.forEach(e=>{e.unlocked&&(e.ring.material.color.setHex(n.color),e.icon.material.map=xp(v.buildType),e.icon.material.color.setHex(n.color),e.icon.material.needsUpdate=!0,e.beam.material.color.setHex(n.color))}),Rv=v.buildType}function Lh(n=4){let e=null,t=1/0;for(let i of yi){if(i.taken||!i.unlocked)continue;let s=Math.hypot(He.position.x-i.x,He.position.z-i.z);s<n&&s<t&&(t=s,e=i)}return e?{pad:e,dist:t}:null}function Cv(){return Di}function Pv(){return fn*Di}var It=0,Qn=0,Qy=He.position.x,ev=He.position.z,js=0;function Iv(n,e){It+=n,tv.value+=n,dv.uniforms.uTime.value+=n;let t=Nr(v.castleLevel);if(Math.abs(Di-t)>5e-5){fh=t;let u=1-Math.exp(-2.2*Math.max(0,n));Di+=(fh-Di)*u,Math.abs(fh-Di)<5e-5&&(Di=fh),Mn.scale.setScalar(Di),bp(iv*Di)}let i=He.position.x-Qy,s=He.position.z-ev,r=n>0?Math.hypot(i,s)/n:0;js=js*.85+r*.15,Qy=He.position.x,ev=He.position.z,v.heroMoving=js>.6;let o=Math.min(1,js/5),a=Ur;if(a)if(On===0){Qn+=js*n*1.9;let u=Math.sin(Qn)*.62*o;a.legL&&(a.legL.rotation.x=u),a.legR&&(a.legR.rotation.x=-u),a.armL&&(a.armL.rotation.x=-u*.7),a.armR&&(a.armR.rotation.x=u*.45-.25),Ne.position.y=Math.abs(Math.sin(Qn))*.055*o,Ne.rotation.z=Math.sin(Qn)*.03*o,Ne.rotation.x=0}else if(On===1){Qn+=js*n*2.4;let u=Math.sin(Qn);a.horseLegs&&a.horseLegs.forEach((d,f)=>{let g=f===0||f===3?0:Math.PI;d.rotation.x=Math.sin(Qn+g)*.75*o}),Ne.position.y=Math.abs(Math.sin(Qn*2))*.09*o,Ne.rotation.x=u*.05*o,a.tail&&(a.tail.rotation.z=Math.sin(e*3)*.12),a.armL&&(a.armL.rotation.x=-.35),a.armR&&(a.armR.rotation.x=-.3+Math.sin(e*2)*.05),a.legL&&(a.legL.rotation.x=0),a.legR&&(a.legR.rotation.x=0)}else{let u=On===3?1.62:1.35;if(Qn+=n*(5+js*.45),Ne.position.y=u+Math.sin(e*2.2)*.12,Ne.rotation.x=Math.sin(js*.1)*.08,Ne.rotation.z=Math.sin(e*1.4)*.03,a.wings.forEach((d,f)=>{let g=f===0?-1:1;d.rotation.z=g*(Math.sin(Qn)*.62+.12),d.rotation.x=Math.sin(Qn*.5)*.08}),a.legs.forEach((d,f)=>{d.rotation.x=Math.sin(e*1.7+f)*.12}),a.tail&&(a.tail.rotation.z=Math.sin(e*2.4)*.15),a.armL&&(a.armL.rotation.x=-.25),a.armR&&(a.armR.rotation.x=-.2),a.legL&&(a.legL.rotation.x=0),a.legR&&(a.legR.rotation.x=0),a.celestial){let d=a.celestial;d.halo.rotation.z+=n*1.4,d.halo.rotation.y=Math.sin(e*.8)*.2,d.orbiters.rotation.y+=n*.85,d.shards.forEach((f,g)=>{f.rotation.y+=n*2.4,f.rotation.x+=n*1.7,f.position.y=Math.sin(e*2.1+g*.8)*.24}),d.aura.material.opacity=.38+Math.sin(e*3.1)*.12,d.wingGlows.forEach((f,g)=>{f.material.opacity=.42+Math.sin(e*4.2+g*1.7)*.16})}}if(a.cape){let u=Math.sin(e*4.6+Qn*.35)*.045;a.cape.rotation.x=.12+o*.22+u,a.cape.rotation.z=Math.sin(e*3.1+Qn*.2)*.035*(.4+o)}Rv!==v.buildType&&mR();let l=Lh(4.2),c=v.gold>=Mt[v.buildType].cost;for(let u of yi){if(!u.unlocked)continue;if(u.revealT<1){u.revealT=Math.min(1,u.revealT+n*2.2);let x=1-Math.pow(1-u.revealT,3);u.group.scale.setScalar(.18+.82*x),u.revealT>=1&&u.group.scale.setScalar(1)}let d=u.revealT>=1?1:1-Math.pow(1-u.revealT,3);if(u.taken){u.ring.visible=!1,u.icon.visible=!1,u.beam.visible=!1;continue}let f=1+Math.sin(It*2.4+u.index)*.09;u.ring.scale.setScalar(f),u.ring.material.opacity=(.55+Math.sin(It*2.4+u.index)*.25)*d,u.icon.position.y=1.7+Math.sin(It*2+u.index*1.3)*.16,u.icon.material.rotation=Math.sin(It*.8+u.index)*.12;let g=l&&l.pad===u;u.beam.material.opacity=(g?c?.16:.09:.05)*d,u.beam.material.color.setHex(g&&!c?16728128:Mt[v.buildType].color),u.icon.material.color.setHex(g&&!c?16736352:Mt[v.buildType].color),u.icon.material.opacity=(g?1:.75)*d,u.ring.material.color.setHex(g&&!c?16728128:Mt[v.buildType].color)}for(let u of _h)u.mesh.rotation.y=Math.sin(It*2.2+u.phase)*.22,u.mesh.rotation.z=Math.sin(It*3.1+u.phase)*.06;for(let u of Rm){let d=.85+Math.sin(It*11+u.phase)*.12+Math.sin(It*23+u.phase*2)*.06;u.sprite.scale.setScalar(1.15*d),u.sprite.material.opacity=.82+Math.sin(It*15+u.phase)*.12,u.emit-=n,u.emit<=0&&(u.emit=1.6+Math.random()*3,we.emit("ember",u.base,{color:16752704,posJitter:.15,speed:.7,up:2.2,size:.5,life:1.5}))}if(Or.intensity=3+v.castleLevel*.2+Math.sin(It*7.3)*.25,Rl>0){Rl=Math.max(0,Rl-n);let u=Rl/.4;ln.emissive.copy(yv),ln.emissiveIntensity=u*1.6}else ln.emissiveIntensity=0;if(Pl&&(Pl.rotation.y+=n*.8,Pl.position.y+=Math.sin(It*1.6)*n*.06),Ft.sunspire){let u=1+Math.sin(It*2.3)*.09;Ft.sunspire.scale.setScalar(4.4*u),Ft.sunspire.material.opacity=.72+Math.sin(It*2.3)*.16}Ft.sunRays&&(Ft.sunRays.rotation.y+=n*.55,Ft.sunRays.rotation.z=Math.sin(It*.7)*.08);for(let u of Ft.tidalCrystals)u.crystal.rotation.y+=n*1.5,u.crystal.position.y=u.baseY+Math.sin(It*1.8+u.phase)*.13,u.glow.position.y=u.crystal.position.y,u.glow.material.opacity=.45+Math.sin(It*3.1+u.phase)*.2,u.glow.scale.setScalar(1.25+Math.sin(It*2.4+u.phase)*.16);for(let u of Ft.stormTips){u.tip.rotation.y+=n*2.1,u.tip.position.y=u.baseY+Math.sin(It*2.2+u.phase)*.16,u.glow.position.y=u.tip.position.y;let d=.5+.5*Math.max(0,Math.sin(It*9+u.phase));u.glow.material.opacity=.4+d*.5,u.glow.scale.setScalar(1.45+d*.7)}for(let u=0;u<Ft.celestialRings.length;u++){let d=Ft.celestialRings[u];d.rotation.z+=n*(.22+u*.13)*(u%2===0?1:-1),d.rotation.x+=n*.06*(u%2===0?1:-1),d.material.opacity=.4+Math.sin(It*1.7+u*1.2)*.2}Ft.celestialOrbiters&&(Ft.celestialOrbiters.rotation.y+=n*.6,Ft.celestialOrbiters.rotation.x=Math.sin(It*.5)*.12);for(let u of cv)u.g.position.y=u.baseY+Math.sin(It*.35+u.phase)*1.4,u.g.rotation.y+=n*u.spin;for(let u of uv)u.angle+=n*u.speed,u.s.position.x=Math.cos(u.angle)*u.dist,u.s.position.z=Math.sin(u.angle)*u.dist;let h=1+Math.sin(It*2.6)*.06;qo.scale.setScalar(h),qo.material.opacity=.4+Math.sin(It*2.6)*.14;for(let u of gh){u.angle+=n*u.speed,u.g.position.x=Math.cos(u.angle)*u.radius,u.g.position.z=Math.sin(u.angle)*u.radius,u.g.position.y=u.y+Math.sin(It*.6+u.phase)*1.6,u.g.rotation.y=-u.angle+(u.speed>0?Math.PI/2:-Math.PI/2);let d=Math.sin(It*u.flap+u.phase)*.6;u.wingL.rotation.z=d,u.wingR.rotation.z=-d}}var Se=null,Jo,Gl,ei,Br,jo=!1,gR=null,$o=0,Lv=!1,Dv=.02,xR=24,Qs=new Map,yR={bow:.04,arrowHit:.035,cannon:.06,explosion:.08,frost:.05,frostHit:.04,tesla:.05,death:.05,castleHit:.06,splash:.07,coin:.04},vR=.1,MR=8,Nv=new Map,kl=[];function Lm(){if(Se){Se.state==="suspended"&&Se.resume();return}Se=new(window.AudioContext||window.webkitAudioContext),Qs.clear(),Jo=Se.createGain(),Jo.gain.value=.9,Br=Se.createDynamicsCompressor(),Br.threshold.value=-18,Br.knee.value=24,Br.ratio.value=5,Gl=Se.createGain(),Gl.gain.value=1,ei=Se.createGain(),ei.gain.value=.55,Gl.connect(Br),ei.connect(Br),Br.connect(Jo),Jo.connect(Se.destination)}function Bv(){return jo}function Dh(){return jo=!jo,Jo&&Jo.gain.setTargetAtTime(jo?0:.9,Se.currentTime,.05),jo}function Fv(n,e,t,i,s,r=0){let o=n.gain;o.setValueAtTime(1e-4,e),o.linearRampToValueAtTime(t,e+i),o.setTargetAtTime(r,e+i,s/3),o.setTargetAtTime(1e-4,e+i+s,s/4)}function dt(n,e,t,i,s,r,o={}){let a=Se.createOscillator(),l=Se.createGain();if(a.type=n,a.frequency.setValueAtTime(e,t),o.slide&&a.frequency.exponentialRampToValueAtTime(Math.max(20,o.slide),t+i),o.detune&&(a.detune.value=o.detune),Fv(l,t,s,o.attack||.005,i,0),o.filter){let c=Se.createBiquadFilter();c.type="lowpass",c.frequency.value=o.filter,a.connect(c),c.connect(l)}else a.connect(l);return l.connect(r||Gl),a.start(t),a.stop(t+i+.3),a}function _R(n,e){let t=Math.ceil(n/Dv)*Dv,i=`${Se.sampleRate}:${t.toFixed(3)}:${e}`,s=Qs.get(i);if(s)return Qs.delete(i),Qs.set(i,s),s;if(Qs.size>=xR){let a=Qs.keys().next().value;a!==void 0&&Qs.delete(a)}let r=Math.max(1,Math.ceil(Se.sampleRate*(t+.1)));s=Se.createBuffer(1,r,Se.sampleRate);let o=s.getChannelData(0);if(e==="brown"){let a=0;for(let l=0;l<r;l++)a=(a+.02*(Math.random()*2-1))/1.02,o[l]=a*3.5}else for(let a=0;a<r;a++)o[a]=Math.random()*2-1;return Qs.set(i,s),s}function _n(n,e,t,i,s={}){let r=_R(e,s.noiseType||"white"),o=Math.ceil(Se.sampleRate*.1),a=Math.max(0,r.length-Math.ceil(Se.sampleRate*e)-o),l=Math.floor(Math.random()*(a+1))/Se.sampleRate,c=Se.createBufferSource();c.buffer=r;let h=Se.createBiquadFilter();h.type=s.type||"lowpass",h.frequency.setValueAtTime(s.from||1200,n),s.to&&h.frequency.exponentialRampToValueAtTime(s.to,n+e),h.Q.value=s.q||.8;let u=Se.createGain();Fv(u,n,t,s.attack||.004,e,0),c.connect(h),h.connect(u),u.connect(i||Gl),c.start(n,l),c.stop(n+e+.1)}var zv={uiClick(){dt("triangle",660,Se.currentTime,.06,.15,null,{slide:880})},build(){let n=Se.currentTime;for(let e=0;e<3;e++)_n(n+e*.13,.08,.35,null,{from:900,to:300}),dt("sine",180-e*30,n+e*.13,.09,.3,null,{slide:90})},upgrade(){let n=Se.currentTime;[440,554,659,880].forEach((e,t)=>dt("sine",e,n+t*.07,.35,.22,null,{filter:3e3}))},coin(){let n=Se.currentTime;dt("sine",1244,n,.09,.14),dt("sine",1660,n+.06,.12,.12)},bow(){let n=Se.currentTime;_n(n,.14,.16,null,{type:"bandpass",from:2600,to:700,q:1.6}),dt("sine",420,n,.08,.1,null,{slide:220})},arrowHit(){let n=Se.currentTime;_n(n,.09,.3,null,{from:1600,to:250}),dt("sine",160,n,.1,.25,null,{slide:70})},cannon(){let n=Se.currentTime;_n(n,.5,.8,null,{from:700,to:80}),dt("sine",95,n,.45,.9,null,{slide:38}),dt("triangle",190,n,.3,.3,null,{slide:60})},explosion(){let n=Se.currentTime;_n(n,.9,.9,null,{from:2400,to:60}),dt("sine",70,n,.7,1,null,{slide:30}),_n(n+.05,.4,.3,null,{type:"highpass",from:2e3,to:4e3})},frost(){let n=Se.currentTime;[1568,2093,2637].forEach((e,t)=>dt("sine",e,n+t*.03,.25,.12,null,{filter:6e3})),_n(n,.3,.1,null,{type:"highpass",from:5e3,to:8e3})},frostHit(){let n=Se.currentTime;_n(n,.2,.25,null,{type:"bandpass",from:3e3,to:1500,q:2}),dt("sine",1046,n,.15,.12,null,{slide:1568})},tesla(){let n=Se.currentTime;_n(n,.18,.5,null,{type:"highpass",from:1500,to:5e3}),dt("sawtooth",110,n,.16,.28,null,{slide:2200,filter:4e3}),dt("square",2200,n+.02,.1,.06,null,{slide:300})},death(){let n=Se.currentTime;_n(n,.3,.4,null,{from:900,to:150}),dt("sawtooth",220,n,.25,.2,null,{slide:60,filter:900}),dt("sine",880,n+.05,.5,.08,null,{slide:1760})},bossDeath(){let n=Se.currentTime;zv.explosion(),dt("sawtooth",160,n,1,.4,null,{slide:30,filter:700}),[523,659,784,1046].forEach((e,t)=>dt("sine",e,n+.3+t*.12,.6,.18,null,{filter:5e3}))},castleHit(){let n=Se.currentTime;_n(n,.35,.7,null,{from:800,to:100}),dt("sine",60,n,.4,.9,null,{slide:30})},horn(){let n=Se.currentTime;[196,261.6].forEach((e,t)=>{dt("sawtooth",e,n+t*.05,1.1,.16,null,{attack:.25,filter:1200}),dt("sawtooth",e*1.005,n+t*.05,1.1,.12,null,{attack:.25,filter:1200,detune:8})})},bossRoar(){let n=Se.currentTime,e=dt("sawtooth",82,n,1.1,.55,null,{slide:42,filter:500});e.frequency.setValueAtTime(82,n),e.frequency.linearRampToValueAtTime(110,n+.25),e.frequency.exponentialRampToValueAtTime(45,n+1.1),_n(n,1,.4,null,{from:400,to:90,q:2})},nova(){let n=Se.currentTime;_n(n,.8,.9,null,{from:500,to:6e3,type:"bandpass",q:1.2}),dt("sine",130,n,.9,.8,null,{slide:40}),[880,1174,1568,2093].forEach((e,t)=>dt("sine",e,n+.1+t*.05,.5,.14,null,{filter:8e3}))},repair(){let n=Se.currentTime;[523,698,880].forEach((e,t)=>dt("sine",e,n+t*.08,.3,.2,null,{filter:4e3}))},victory(){let n=Se.currentTime;[523,659,784,1046,1318].forEach((e,t)=>{dt("sine",e,n+t*.14,.9,.25,null,{filter:6e3}),dt("triangle",e/2,n+t*.14,.9,.12,null,{filter:3e3})})},defeat(){let n=Se.currentTime;[392,349,311,261].forEach((e,t)=>{dt("sawtooth",e,n+t*.3,.8,.15,null,{filter:800,attack:.1})})},warn(){let n=Se.currentTime;dt("square",620,n,.12,.1,null,{slide:500}),dt("square",620,n+.18,.12,.1,null,{slide:500})},splash(){let n=Se.currentTime;_n(n,.35,.3,null,{type:"bandpass",from:900,to:220,q:.7}),_n(n+.04,.22,.14,null,{type:"highpass",from:2600,to:1200}),dt("sine",180,n,.18,.08,null,{slide:90})}};function ER(n,e){let t=yR[n];if(!t)return!0;for(;kl.length&&e-kl[0]>vR;)kl.shift();if(kl.length>=MR)return!1;let i=Nv.get(n);return i!==void 0&&e-i<t?!1:(Nv.set(n,e),kl.push(e),!0)}function Ue(n,e){if(!Se||jo)return;let t=zv[n];if(t&&ER(n,Se.currentTime))try{t(e)}catch{}}function SR(){let n=Se.sampleRate*3,e=Se.createBuffer(1,n,Se.sampleRate),t=e.getChannelData(0),i=0;for(let h=0;h<n;h++)i=i*.98+(Math.random()*2-1)*.02,t[h]=i*6;let s=Se.createBufferSource();s.buffer=e,s.loop=!0;let r=Se.createBiquadFilter();r.type="lowpass",r.frequency.value=420,r.Q.value=.4;let o=Se.createGain();o.gain.value=.16;let a=Se.createOscillator();a.frequency.value=.08;let l=Se.createGain();l.gain.value=.06,a.connect(l),l.connect(o.gain),s.connect(r),r.connect(o),o.connect(ei),s.start(),a.start();function c(){if(!Se||Se.state==="closed")return;let h=Se.currentTime,u=2200+Math.random()*1400;for(let d=0;d<2+Math.random()*3;d++)dt("sine",u+Math.random()*600,h+d*.09,.06,.05,ei,{slide:u*1.3});setTimeout(c,6e3+Math.random()*14e3)}setTimeout(c,4e3)}var Hv=[[220,261.63,329.63],[174.61,220,261.63],[130.81,196,261.63],[196,246.94,293.66]],Uv=0;function Ov(){if(!Se||Se.state==="closed")return;let n=Se.currentTime+.05,e=Hv[Uv%Hv.length];if(Uv++,e.forEach((t,i)=>{dt("sawtooth",t,n,3.6,.05,ei,{attack:1.2,filter:750,detune:i*5}),dt("sawtooth",t*2,n,3.6,.02,ei,{attack:1.4,filter:600,detune:-6})}),dt("sine",e[0]/2,n,3.6,.1,ei,{attack:.6,filter:300}),Math.random()<.85){let t=[440,523.25,587.33,659.25,783.99,880],i=t[Math.random()*t.length|0];dt("sine",i,n+1.2+Math.random()*1.4,1.4,.06,ei,{filter:6e3})}if($o>=1){let t=$o>=2?8:4;for(let i=0;i<t;i++){let s=n+i*(3.8/t);i%2===0&&dt("sine",72,s,.28,$o>=2?.5:.3,ei,{slide:34}),$o>=2&&i%2===1&&_n(s,.12,.16,ei,{from:300,to:100}),$o>=2&&Math.random()<.4&&_n(s,.18,.1,ei,{from:6e3,to:3e3,type:"highpass"})}}}function Nh(n){$o=n}function kv(){Lv||!Se||(Lv=!0,SR(),Ov(),gR=setInterval(Ov,3800))}function Hh(n=.3){Se&&ei.gain.setTargetAtTime(.55*n,Se.currentTime,.4)}var Dm=-2.6,TR=new te({map:gs(),color:12160094,roughness:.86}),ea=new te({color:4860950,roughness:.9}),Nm=new te({map:gs(),color:10121286,roughness:.92}),Gv=new te({color:9080728,metalness:.78,roughness:.36}),Qo=new te({color:3423043,metalness:.72,roughness:.46}),Vl=new te({color:12093253,metalness:.8,roughness:.34}),wR=new te({color:12820851,roughness:.96}),bR=new te({map:pl("boat_sail","#d8c7a2","#8a352a"),roughness:.92,side:ot}),AR=new te({map:pl("boat_sail_boss","#2a1016","#b03030"),roughness:.9,side:ot}),Qv=new te({color:16765040,emissive:16752688,emissiveIntensity:2.2}),RR=new te({color:6961700,roughness:.8,metalness:.1}),Uh=new sn(1,1,5,4);{let n=Uh.getAttribute("position"),e=Uh.getAttribute("uv");for(let t=0;t<n.count;t++){let i=e.getX(t),s=e.getY(t),r=.82+.18*Math.sin(s*Math.PI*.85);n.setXYZ(t,n.getX(t)*r,n.getY(t),Math.sin(i*Math.PI)*Math.sin(s*Math.PI)*.18)}Uh.computeVertexNormals()}var CR=new Te(.055,.075,1,6),PR=(()=>{let n=new Gn;n.moveTo(0,-2.05),n.quadraticCurveTo(.95,-1.35,.88,.1),n.quadraticCurveTo(.82,1.25,0,2.05),n.quadraticCurveTo(-.82,1.25,-.88,.1),n.quadraticCurveTo(-.95,-1.35,0,-2.05);let e=new Pi(n,{depth:.72,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12,bevelSegments:2,steps:1});return e.rotateX(-Math.PI/2),e.translate(0,-.36,0),e.computeVertexNormals(),e})(),IR=new Te(.025,.025,1.5,5),LR=new vn(.17,.42,.065,1,.025),DR=new vn(1.15,.08,2.5,2,.035),NR=new Ut(.2,.022,2.3),Vv=new vn(.12,.13,2.78,2,.03),Wv=new vn(1.9,.065,.065,1,.022),HR=new vn(.16,.9,.16,2,.03),Xv=new Te(.1,.12,.12,6),UR=new Te(.012,.012,1,4),Yv=(()=>{let n=new Gn;n.moveTo(0,.25),n.lineTo(.18,.16),n.lineTo(.16,-.12),n.quadraticCurveTo(.1,-.23,0,-.28),n.quadraticCurveTo(-.1,-.23,-.16,-.12),n.lineTo(-.18,.16),n.closePath();let e=new Pi(n,{depth:.07,bevelEnabled:!0,bevelSegments:2,bevelSize:.015,bevelThickness:.015,steps:1});return e.translate(0,0,-.035),e.computeVertexNormals(),e})(),OR=new Gt(.055,7,5),BR=new an(.22,0),FR=new Gt(.11,8,8),zR=new Te(.135,.11,.07,8),kR=new Te(.012,.012,.25,4),qv=new Qe(.09,.45,5),GR=new vn(.62,.24,.85,2,.055),Kv=Jt(),VR={normal:new Rt({map:Kv,color:16756832,transparent:!0,blending:$e,depthWrite:!1,opacity:.85}),boss:new Rt({map:Kv,color:16732208,transparent:!0,blending:$e,depthWrite:!1,opacity:.85})};function WR(n,e,t){let i=new N(CR,ea);i.scale.y=3.2*e,i.position.set(0,1.75*e,.1*e),i.castShadow=!0,n.add(i);let s=new N(Xv,Vl);s.scale.setScalar(e),s.position.set(0,.38*e,.1*e),n.add(s);let r=new N(Wv,ea);r.scale.setScalar(e),r.position.set(0,2.75*e,.13*e),r.castShadow=!0,n.add(r);for(let l of[-1,1]){let c=new N(Xv,Vl);c.scale.set(.65*e,.75*e,.65*e),c.rotation.z=Math.PI/2,c.position.set(l*.96*e,2.75*e,.13*e),n.add(c)}let o=new N(Uh,t?AR:bR);o.name="boat-sail",o.userData.noStaticBatch=!0,o.scale.set(1.65*e,1.75*e,e),o.position.set(0,1.75*e,.15*e),o.castShadow=!0,n.add(o);for(let l of[-1,1]){let c=new N(UR,wR);c.scale.set(e,1.72*e,e),c.position.set(l*.79*e,1.76*e,.16*e),n.add(c)}let a=new N(Wv,ea);if(a.scale.set(.78*e,e,e),a.position.set(0,.9*e,.16*e),n.add(a),t){let l=new N(BR,Qv);l.name="boat-crest",l.scale.setScalar(e),l.position.set(0,2.35*e,.2*e),n.add(l)}return o}function XR(n,e){let t=[];for(let i of[-1,1])for(let s=0;s<3;s++){let r=YR(n,i*.78*e,.2*e,(-.8+s*.7)*e);r.name="boat-oar",r.userData.noStaticBatch=!0;let o=new N(IR,ea);o.scale.setScalar(e),o.position.set(i*.52*e,-.12*e,0),o.rotation.z=i*-1.05,r.add(o);let a=new N(LR,Nm);a.scale.setScalar(e),a.position.set(i*1.08*e,-.45*e,0),a.rotation.z=i*-1.05,r.add(a),t.push(r)}return t}function YR(n,e,t,i){let s=new Ve;return s.position.set(e,t,i),n.add(s),s}function Zv(n,e,t,i,s,r){let o=new N(FR,Qv);o.name="boat-lantern",o.scale.setScalar(e),o.position.set(t,.86*e,i),n.add(o);for(let l of[-.145,.145]){let c=new N(zR,Qo);c.scale.setScalar(e),c.position.set(t,(.86+l)*e,i),n.add(c)}for(let l of[-1,1]){let c=new N(kR,Qo);c.scale.setScalar(e),c.position.set(t+l*.1*e,.86*e,i),n.add(c)}let a=new kt(VR[s?"boss":"normal"]);return a.name="boat-lantern-glow-"+r,a.scale.setScalar(.78*e),a.position.copy(o.position),n.add(a),a}function qR(n){n.updateWorldMatrix(!0,!0);let e=n.matrixWorld.clone().invert(),t=new Map;n.traverse(i=>{if(!i.isMesh||i.isSkinnedMesh||!i.visible||Array.isArray(i.material)||!i.material||i.material.transparent)return;for(let r=i;r&&r!==n;r=r.parent)if(r.userData.noStaticBatch)return;let s=i.material.uuid+":"+[i.castShadow,i.receiveShadow,i.renderOrder].join(":");t.has(s)||t.set(s,{material:i.material,meshes:[]}),t.get(s).meshes.push(i)});for(let i of t.values()){if(i.meshes.length<2)continue;let s=i.meshes.map(l=>{let c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();c.applyMatrix4(e.clone().multiply(l.matrixWorld)),c.getAttribute("normal")||c.computeVertexNormals(),c.getAttribute("uv")||c.setAttribute("uv",new Re(new Float32Array(c.getAttribute("position").count*2),2));for(let h of Object.keys(c.attributes))["position","normal","uv"].includes(h)||c.deleteAttribute(h);return c.clearGroups(),c}),r=Yi(s,!1);if(s.forEach(l=>l.dispose()),!r)continue;r.computeBoundingBox(),r.computeBoundingSphere();let o=i.meshes[0],a=new N(r,i.material);a.name="boat-static-batch",a.castShadow=o.castShadow,a.receiveShadow=o.receiveShadow,a.renderOrder=o.renderOrder,n.add(a);for(let l of i.meshes)l.removeFromParent()}}function KR(n){let e=new Ve,t=n?1.7:1,i=new N(PR,TR);i.scale.set(t,t*.9,t),i.castShadow=!0,i.receiveShadow=!0,e.add(i);let s=new N(DR,Nm);s.scale.setScalar(t),s.position.y=.27*t,s.receiveShadow=!0,e.add(s);for(let l=-2;l<=2;l++){let c=new N(NR,l%2?Nm:ea);c.scale.set(.92*t,t,t),c.position.set(l*.205*t,.318*t,0),e.add(c)}for(let l of[-1,1]){let c=new N(Vv,Qo);c.scale.setScalar(t),c.position.set(l*.77*t,.38*t,0),c.castShadow=!0,e.add(c);let h=new N(Vv,Vl);h.scale.set(.55*t,.38*t,.96*t),h.position.set(l*.842*t,.34*t,0),e.add(h)}for(let l of[-1.65,1.65]){let c=new N(HR,ea);c.scale.setScalar(t),c.position.set(0,.64*t,l*t),c.rotation.x=l>0?-.35:.35,c.castShadow=!0,e.add(c);let h=new N(qv,n?Qo:Vl);h.scale.set(.55*t,.7*t,.55*t),h.position.set(0,1.13*t,(l+(l>0?.1:-.1))*t),h.rotation.x=l>0?-.35:.35,e.add(h)}for(let l of[-1,1])for(let c=0;c<3;c++){let h=(-.75+c*.75)*t,u=new N(Yv,n?Qo:Vl);u.scale.setScalar(1.1*t),u.rotation.y=l*Math.PI/2,u.position.set(l*.895*t,.31*t,h),e.add(u);let d=new N(Yv,RR);d.scale.setScalar(t),d.rotation.y=l*Math.PI/2,d.position.set(l*.925*t,.31*t,h),d.castShadow=!0,e.add(d);let f=new N(OR,Gv);f.scale.set(.55*t,t,t),f.position.set(l*.97*t,.34*t,h),e.add(f)}let r=WR(e,t,n),o=XR(e,t),a=[Zv(e,t,-.46*t,-1.42*t,n,0),Zv(e,t,.46*t,-1.42*t,n,1)];if(n){let l=new N(GR,Qo);l.scale.setScalar(t),l.position.set(0,.13*t,2.02*t),l.rotation.x=-.18,l.castShadow=!0,e.add(l);for(let c=0;c<3;c++){let h=new N(qv,Gv);h.scale.setScalar(t),h.position.set((c-1)*.35*t,.58*t,2.02*t),h.rotation.x=-.5,h.castShadow=!0,e.add(h)}}return qR(e),{group:e,sail:r,oars:o,lanternGlows:a}}var $v=new Map;function ZR(n){let e=$v.get(n);return e||(e=KR(n),$v.set(n,e)),e}var Ms=[],$R=new E,Jv=new E,jv=[14218495,12577023,16777215],JR={normal:{color:jv,count:16,speed:5,up:2.8,size:1.15,life:.9},boss:{color:jv,count:28,speed:7,up:2.8,size:1.15,life:.9}},jR=[12577023,15268863],QR={color:jR,count:2,size:1,life:1,floorY:-2.65};function ta(){return Ms.length}function _s(){let n=0;for(let e of Ms)e.landed||(n+=e.types.length);return n}function eM(){for(let n of Ms)Ie.remove(n.group);Ms.length=0}function tM({angle:n,types:e,boss:t=!1,onLand:i}){if(Ms.length>=oy)return null;let s=v.castleLevel,r=ah(s)+Math.random()*7,o=ko(s)-Math.random()*1.8,a=new E(Math.cos(n)*r,Dm+.1,Math.sin(n)*r),l=new E(Math.cos(n)*o,-.06,Math.sin(n)*o),h=ZR(t).group.clone(!0);h.userData.sail=h.getObjectByName("boat-sail"),h.userData.oars=[],h.userData.lanternGlows=[],h.traverse(f=>{f.name==="boat-oar"?h.userData.oars.push(f):f.name.startsWith("boat-lantern-glow-")&&h.userData.lanternGlows.push({sprite:f,baseScale:f.scale.x,phase:Math.random()*Math.PI*2})}),h.position.copy(a),h.rotation.y=Math.atan2(l.x-a.x,l.z-a.z),h.scale.setScalar(.01),Ie.add(h);let u=a.distanceTo(l),d={group:h,start:a,land:l,angle:n,types:e,boss:t,onLand:i,t:0,duration:Math.max(1.2,u/(cy*(t?.85:1))),state:"inbound",stateT:0,landed:!1,phase:Math.random()*Math.PI*2,wakeT:0,spawnT:0,baseRotY:h.rotation.y};return Ms.push(d),d}function nM(n,e=performance.now()*.001){for(let t=Ms.length-1;t>=0;t--){let i=Ms[t],s=i.group;if(i.spawnT<.45){i.spawnT+=n;let a=Math.min(1,i.spawnT/.45);s.scale.setScalar(Math.max(.01,1-Math.pow(1-a,3)))}else s.scale.x<1&&s.scale.setScalar(1);if(i.stateT+=n,i.state==="inbound"){i.t=Math.min(1,i.t+n/i.duration);let a=i.t*i.t*(3-2*i.t);if(s.position.lerpVectors(i.start,i.land,a),s.position.y+=Math.sin(e*1.7+i.phase)*.11*(1-a*.55),s.rotation.z=Math.sin(e*1.35+i.phase)*.045*(1-a*.6),s.rotation.x=Math.sin(e*1.05+i.phase*1.4)*.025,i.t>=1){i.state="landed",i.stateT=0,i.landed=!0,i.group.position.copy(i.land),i.group.rotation.z=0,i.group.rotation.x=0,we.emit("splash",$R.copy(i.land).setY(-.15),JR[i.boss?"boss":"normal"]),Ue("splash");try{i.onLand?.(i.land.clone().setY(0))}catch(l){console.error(l)}}}else if(i.state==="landed")s.position.y=-.06+Math.sin(e*1.9+i.phase)*.05,s.rotation.z=Math.sin(e*1.5+i.phase)*.03,i.stateT>1.25&&(i.state="depart",i.stateT=0,i.t=0,i.baseRotY=s.rotation.y,i.group.rotation.y=i.baseRotY+Math.PI);else{i.t=Math.min(1,i.t+n/4.2);let a=i.t*i.t*(3-2*i.t);if(s.position.lerpVectors(i.land,i.start,a),s.position.y=fs.lerp(-.06,Dm+.1,a)+Math.sin(e*1.8+i.phase)*.1,s.rotation.z=Math.sin(e*1.3+i.phase)*.04,i.t>=1){Ie.remove(s),Ms.splice(t,1);continue}}let r=s.userData.sail;r&&(r.rotation.y=Math.sin(e*2.2+i.phase)*.035);let o=Math.sin(e*2.6+i.phase)*.12*(i.state==="landed"?.25:1);for(let a of s.userData.oars||[])a.rotation.x=o;for(let a of s.userData.lanternGlows||[]){let l=.92+Math.sin(e*8.5+a.phase)*.06+Math.sin(e*17+a.phase)*.035;a.sprite.scale.setScalar(a.baseScale*l)}i.wakeT-=n,i.wakeT<=0&&i.state!=="landed"&&(i.wakeT=i.boss?.09:.13,Jv.set(s.position.x-Math.sin(s.rotation.y)*1.4,Dm+.08,s.position.z-Math.cos(s.rotation.y)*1.4),we.emit("wake",Jv,QR))}}var iM={normal:{key:"normal",name:"Normal",description:"The intended siege experience.",startGold:65,enemyHP:1,enemyDamage:.9,reward:1.05,income:1},veteran:{key:"veteran",name:"Veteran",description:"Tougher raiders, leaner rewards.",startGold:65,enemyHP:1.12,enemyDamage:1,reward:1,income:.9},nightmare:{key:"nightmare",name:"Nightmare",description:"Brutal enemies for seasoned commanders.",startGold:65,enemyHP:1.5,enemyDamage:1.3,reward:.8,income:.8}};function ti(n){return iM[n]||iM.normal}function sM(n){return ti(n).enemyHP}function rM(n){return ti(n).enemyDamage}function oM(n){return ti(n).reward}function aM(n){return ti(n).income}function lM(n){let e=Math.max(16,Math.floor(n||16));return Math.min(120,Math.round(55+(e-15)*3.2))}function cM(n){let e=Math.floor(n||16);return e<=15?1:Math.pow(1.115,e-15)}var Ki=0,kr=0,zh=!0,Wn=!1,Xl=new E;function Gm(n){zh=!!n,(!zh||Wn)&&(Ki=0,kr=0,Xl.set(0,0,0))}function kh(n){Wn=!!n,Wn&&(Ki=0,kr=0,Xl.set(0,0,0),er=0,Yl=1,mC())}function Rn(n,e=.4){!zh||Wn||(Ki=Math.min(1,Ki+n),kr=Math.max(kr,e))}function Vm(n){if(!zh||Wn)return Ki=0,kr=0,Xl.set(0,0,0);kr>0?(kr-=n,Ki=Math.max(0,Ki-n/.5)):Ki=0;let e=Ki*Ki,t=performance.now()*.001;return Xl.set(Math.sin(t*92.3)*e*.6,Math.sin(t*76.7)*e*.6,Math.sin(t*113.1)*e*.6),Xl}var er=0,Yl=1;function ql(n=.09,e=.15){if(Wn){er=0,Yl=1;return}er=n,Yl=e}function mM(){return!Wn&&er>0?Yl:1}var ra=[],Om=[],eC=64,tC=new dn(.86,1,48);function nC(){if(Om.length)return Om.pop();let n=new ft({color:16777215,transparent:!0,opacity:.9,side:ot,blending:$e,depthWrite:!1,forceSinglePass:!0});return{mesh:new N(tC,n),material:n,t:0,maxRadius:6,duration:.5}}function gM(n){Ie.remove(n.mesh),Om.push(n)}function Vt(n,e=16777215,t=6,i=.5,s=!0){ra.length>=eC&&gM(ra.shift());let r=nC();r.material.color.set(e),r.material.opacity=Wn?.35:.9,r.mesh.position.copy(n),r.mesh.rotation.set(0,0,0),s&&(r.mesh.rotation.x=-Math.PI/2,r.mesh.position.y=Math.max(n.y,.15)),r.mesh.scale.setScalar(.1),r.t=0,r.maxRadius=t,r.duration=i,Ie.add(r.mesh),ra.push(r)}var oa=[],Bm=[],iC=25,sC=new ft({map:vy(),transparent:!0,opacity:.75,depthWrite:!1,color:0}),rC=new sn(1,1);function oC(){if(Bm.length)return Bm.pop();let n=sC.clone();return{mesh:new N(rC,n),material:n,t:0}}function xM(n){Ie.remove(n.mesh),Bm.push(n)}function aa(n,e=3){oa.length>=iC&&xM(oa.shift());let t=oC();t.mesh.rotation.set(-Math.PI/2,0,Math.random()*Math.PI*2),t.mesh.position.set(n.x,.06+Math.random()*.02,n.z),t.mesh.scale.setScalar(e),t.material.opacity=Wn?.5:.75,t.t=0,Ie.add(t.mesh),oa.push(t)}var Bh=[],Fm=[],Es=5,zm=Es*2,yM=Es*6,na=new E,Hm=new E,Wl=new E,Oh=new E,uM=new E;function vM(n){let e=n*zm,t=e>65535?Uint32Array:Uint16Array,i=new t(n*yM),s=0;for(let o=0;o<n;o++){let a=o*zm;for(let l=0;l<Es;l++){let c=(l+1)%Es,h=a+l,u=a+c,d=a+Es+l,f=a+Es+c;i[s++]=h,i[s++]=u,i[s++]=d,i[s++]=u,i[s++]=f,i[s++]=d}}let r=new vt;return r.setAttribute("position",new gt(new Float32Array(e*3),3).setUsage(Ws)),r.setIndex(new gt(i,1)),r.setDrawRange(0,0),r}function aC(){let e=vM(32),t=new ft({color:13134847,transparent:!0,opacity:1,side:Bn,blending:$e,depthWrite:!1}),i=new N(e,t);return i.frustumCulled=!1,{mesh:i,geometry:e,material:t,capacity:32,segmentCount:0,mainPoints:Array.from({length:8},()=>new E),branchPoints:[],t:0,duration:.16}}function lC(){return Fm.length?Fm.pop():aC()}function cC(n){Ie.remove(n.mesh),Fm.push(n)}function uC(n,e){if(e<=n.capacity)return;let t=n.capacity;for(;t<e;)t*=2;let i=n.geometry;n.geometry=vM(t),n.mesh.geometry=n.geometry,n.capacity=t,i.dispose()}function hC(n,e,t,i){na.subVectors(t,e);let s=na.lengthSq();if(s<1e-12)return;na.multiplyScalar(1/Math.sqrt(s)),Math.abs(na.y)<.9?Hm.set(0,1,0):Hm.set(1,0,0),Wl.crossVectors(na,Hm).normalize(),Oh.crossVectors(na,Wl).normalize();let r=n.geometry.attributes.position.array,o=n.segmentCount*zm;for(let a=0;a<Es;a++){let l=a/Es*Math.PI*2,c=Math.cos(l)*i,h=Math.sin(l)*i,u=Wl.x*c+Oh.x*h,d=Wl.y*c+Oh.y*h,f=Wl.z*c+Oh.z*h,g=(o+a)*3,x=(o+Es+a)*3;r[g]=e.x+u,r[g+1]=e.y+d,r[g+2]=e.z+f,r[x]=t.x+u,r[x+1]=t.y+d,r[x+2]=t.z+f}n.segmentCount++}function hM(n,e,t,i,s,r,o){if(o.length<i+1)for(;o.length<i+1;)o.push(new E);o[0].copy(e),o[i].copy(t);for(let a=1;a<i;a++){let l=a/i,c=o[a].lerpVectors(e,t,l);c.x+=(Math.random()-.5)*s*2,c.y+=(Math.random()-.5)*s,c.z+=(Math.random()-.5)*s*2}for(let a=0;a<i;a++)hC(n,o[a],o[a+1],r);return o}function Gh(n,e,t=13134847,i=.16,s=.14,r=2){let o=Number.isFinite(r)?Math.max(0,Math.floor(r)):0,a=lC();uC(a,7+o*3),a.segmentCount=0,a.t=0,a.duration=i,a.material.color.set(t),a.material.opacity=1;let l=hM(a,n,e,7,.7,s,a.mainPoints);for(let c=0;c<o;c++){let h=1+Math.floor(Math.random()*(l.length-2)),u=l[h+1];uM.set(u.x+(Math.random()-.5)*4,u.y+(Math.random()-.5)*3,u.z+(Math.random()-.5)*4);let d=a.branchPoints[c];d||(d=[],a.branchPoints[c]=d),hM(a,u,uM,3,.5,s*.5,d)}a.geometry.attributes.position.needsUpdate=!0,a.geometry.setDrawRange(0,a.segmentCount*yM),Ie.add(a.mesh),Bh.push(a)}var dM=64,Fh=[],km=[],Um=0,dC=(()=>{let n=document.getElementById("dmgLayer");return n||(n=document.createElement("div"),n.id="dmgLayer",document.body.appendChild(n)),n})(),MM=window.innerWidth,_M=window.innerHeight;window.addEventListener("resize",()=>{MM=window.innerWidth,_M=window.innerHeight},{passive:!0});function fC(){if(km.length)return km.pop();if(Fh.length<dM){let e=document.createElement("div");e.className="dmg-num",e.style.display="none",dC.appendChild(e);let t={el:e,active:!1,displayed:!1,pos:new E,t:0,dur:.9,rise:2.2,size:1,text:"",className:"dmg-num",color:"",lastX:NaN,lastY:NaN,lastScale:NaN,lastOpacity:NaN};return Fh.push(t),t}let n=Fh[Um];return Um=(Um+1)%dM,n}function fM(n){n.active&&(n.active=!1,n.displayed&&(n.el.style.display="none",n.displayed=!1),km.push(n))}function Ni(n,e,t={}){let i=fC();i.active=!0,i.t=0,i.dur=t.dur||.9,i.rise=t.rise||2.2,i.size=t.size||1,i.pos.copy(n),i.pos.x+=(Math.random()-.5)*.8,i.pos.z+=(Math.random()-.5)*.8;let s=String(e),r="dmg-num"+(t.cls?" "+t.cls:""),o=t.color||"#ffffff";i.text!==s&&(i.el.textContent=s,i.text=s),i.className!==r&&(i.el.className=r,i.className=r),i.color!==o&&(i.el.style.color=o,i.color=o),i.displayed||(i.el.style.display="block",i.displayed=!0),i.lastOpacity!==1&&(i.el.style.opacity="1",i.lastOpacity=1),i.lastX=NaN,i.lastY=NaN,i.lastScale=NaN}var Fr=new E;function pC(n){let e=MM,t=_M;for(let i of Fh){if(!i.active)continue;if(i.t+=n,i.t>=i.dur){fM(i);continue}if(Fr.copy(i.pos),Fr.y+=i.t*i.rise,Fr.project(Bt),Fr.z>1||Fr.z<-1){fM(i);continue}let s=Math.round((Fr.x*.5+.5)*e*10)/10,r=Math.round((-Fr.y*.5+.5)*t*10)/10,o=1-i.t/i.dur,a=i.t<.12?.5+i.t/.12*.7:1.2-Math.min(1,(i.t-.12)*.3),l=Math.round(a*i.size*1e3)/1e3,c=Math.round(o*o*1e3)/1e3;(i.lastX!==s||i.lastY!==r||i.lastScale!==l)&&(i.el.style.transform=`translate(-50%,-50%) translate(${s}px,${r}px) scale(${l})`,i.lastX=s,i.lastY=r,i.lastScale=l),i.lastOpacity!==c&&(i.el.style.opacity=String(c),i.lastOpacity=c)}}var vi=null,zr=0,pM="",ia="",sa="";function mC(){zr&&(cancelAnimationFrame(zr),zr=0),vi&&(ia!=="none"&&(vi.style.transition="none",ia="none"),sa!=="0"&&(vi.style.opacity="0",sa="0"))}function Zi(n="#fff",e=.25,t=.3){if(Wn)return;vi||(vi=document.createElement("div"),vi.id="screenFlash",document.body.appendChild(vi));let i=`radial-gradient(ellipse at center, transparent 30%, ${n} 130%)`;pM!==i&&(vi.style.background=i,pM=i),zr&&cancelAnimationFrame(zr),ia!=="none"&&(vi.style.transition="none",ia="none");let s=String(e);sa!==s&&(vi.style.opacity=s,sa=s),zr=requestAnimationFrame(()=>{zr=0;let r=`opacity ${t}s ease-out`;ia!==r&&(vi.style.transition=r,ia=r),sa!=="0"&&(vi.style.opacity="0",sa="0")})}function EM(n=.6){Wn||ih(n)}function SM(n){er>0&&(er=Math.max(0,er-n),er<=0&&(Yl=1));for(let e=ra.length-1;e>=0;e--){let t=ra[e];t.t+=n;let i=t.t/t.duration;if(i>=1)gM(t),ra.splice(e,1);else{let s=1-Math.pow(1-i,3);t.mesh.scale.setScalar(.1+s*t.maxRadius),t.material.opacity=(1-i)*(Wn?.35:.9)}}for(let e=Bh.length-1;e>=0;e--){let t=Bh[e];t.t+=n;let i=t.t/t.duration;i>=1?(cC(t),Bh.splice(e,1)):t.material.opacity=(1-i)*(Wn?.65:Math.random()>.3?1:.35)}for(let e=oa.length-1;e>=0;e--){let t=oa[e];t.t+=n,t.t>12?(xM(t),oa.splice(e,1)):t.t>8&&(t.material.opacity=(Wn?.5:.75)*(1-(t.t-8)/4))}pC(n)}var TM=[{id:"warchest",name:"War Chest",icon:"coin",max:3,desc:"Immediately gain 75 gold."},{id:"masonry",name:"Master Mason",icon:"shield",max:3,desc:"+45 maximum Bastion HP, repaired by the same amount."},{id:"tariff",name:"Royal Tariff",icon:"coin",max:3,desc:"+2 gold every income tick."},{id:"sharpened",name:"Sharpened Steel",icon:"sword",max:5,desc:"+12% damage from all towers."},{id:"overclock",name:"Overclock",icon:"bolt",max:5,desc:"+10% tower fire rate."},{id:"deadeye",name:"Deadeye",icon:"arrow",max:4,desc:"+7% critical chance for towers (double damage)."},{id:"solar",name:"Solar Attunement",icon:"sun",max:3,desc:"Sun Nova recharges 12% faster and deals +15% damage."},{id:"heroism",name:"Heroism",icon:"crown",max:4,desc:"+15% hero damage and +5% movement speed."}],wM=new Map(TM.map(n=>[n.id,n]));function Kl(n){return 70+Math.max(0,n-1)*45}function bM(n){n.commanderLevel++,n.commanderXP-=Kl(n.commanderLevel-1),n.pendingBoons?.length||(n.pendingBoons=gC(n,3)),n.draftOpen=!0}function gC(n,e=3,t=Math.random){let i=TM.filter(r=>(n.boons?.[r.id]||0)<r.max),s=[];for(;s.length<e&&i.length;){let r=Math.min(i.length-1,Math.floor(t()*i.length));s.push(i.splice(r,1)[0].id)}return s}function Vh(n,e){if(!Number.isFinite(e)||e<=0)return 0;n.commanderXP+=Math.round(e);let t=0;for(;n.commanderXP>=Kl(n.commanderLevel);)bM(n),t++;return t}function AM(n,e){if(!n.draftOpen||!n.pendingBoons?.includes(e)||!wM.get(e))return!1;switch(n.boons=n.boons||{},n.boons[e]=(n.boons[e]||0)+1,e){case"warchest":n.gold+=75,n.totalGoldEarned+=75;break;case"masonry":n.maxBaseHP+=45,n.baseHP=Math.min(n.maxBaseHP,n.baseHP+45);break;case"tariff":n.incomeRate+=2;break;default:break}return n.pendingBoons=[],n.draftOpen=!1,n.commanderXP>=Kl(n.commanderLevel)&&bM(n),!0}function Gr(n,e){return n.boons?.[e]||0}function RM(n){return 1+Gr(n,"sharpened")*.12}function CM(n){return 1+Gr(n,"overclock")*.1}function PM(n){return Math.min(.45,Gr(n,"deadeye")*.07)}function IM(n){return 1+Gr(n,"heroism")*.15}function LM(n){return 1+Gr(n,"heroism")*.05}function DM(n){return Math.max(.55,1-Gr(n,"solar")*.12)}function NM(n){return 1+Gr(n,"solar")*.15}function HM(n){return wM.get(n)||null}function xC(n){let e=Math.max(1,Math.floor(n||1));return e>Vn?lM(e):Math.round(10+e*2.5+(e%5===0?3:0))}function la(n,e=n.wave){let t=n.totalWaves===1/0?1/0:Number.isFinite(n.totalWaves)?n.totalWaves:Vn,i=Math.max(1,Math.min(t,Math.floor(e||1)));return n.wave=i,n.timeInWave=0,n.spawnTimer=0,n.waveBudget=xC(i),n.spawnRemaining=n.waveBudget,n.waveActive=!0,n.intermission=!1,n.prepTimer=0,n.waveKills=0,n.waveLeaks=0,n.waveStartedAt=n.elapsed,n.miniBossSpawned=!1,n.roundBossSpawned=!1,n.warlordSpawned=!1,n.waveBudget}function UM(n,e,t,i){return n.waveActive&&n.spawnRemaining<=0&&e<=0&&t<=0&&i<=0}function Wh(n){return Math.max(0,Math.ceil(n)*2)}function Xh(n){if(!n.intermission||n.wave>=(n.totalWaves??Vn))return 0;let e=Wh(n.prepTimer);return n.gold+=e,n.totalGoldEarned+=e,n.score+=e*10,la(n,n.wave+1),e}function yC(n,e=!1){let t=Math.max(1,Math.floor(n||1));return 12+t*4+(e?18+t*2:0)}function OM(n){if(!n.waveActive)return null;let e=n.waveLeaks===0,t=yC(n.wave,e),i=Math.max(0,Math.min(30,Math.round((35-n.timeInWave)*1.5))),s=t+i;return n.gold+=s,n.totalGoldEarned+=s,n.score+=s*12+(e?250:0),n.waveActive=!1,n.intermission=n.wave<(n.totalWaves??Vn),n.prepTimer=n.intermission?ku:0,n.spawnRemaining=0,{wave:n.wave,gold:s,noLeak:e,speedBonus:i}}function BM(n,e){return n.intermission?(n.prepTimer=Math.max(0,n.prepTimer-e),n.prepTimer<=0&&n.wave<(n.totalWaves??Vn)?(la(n,n.wave+1),!0):!1):!1}function FM(n){return n.waveBudget?Math.max(0,Math.min(1,1-n.spawnRemaining/n.waveBudget)):0}var zM="ironhold_profile_v1";function Yh(){return{xp:0,runs:0,bestScore:0,bestWave:0,wins:0,totalKills:0}}function qh(){if(typeof window>"u")return Yh();try{let n=localStorage.getItem(zM);if(!n)return Yh();let e=JSON.parse(n),t=Yh();for(let s of Object.keys(t))Number.isFinite(e[s])&&(t[s]=Math.max(0,e[s]));let i=Number(localStorage.getItem("ironhold_best")||0);return Number.isFinite(i)&&(t.bestScore=Math.max(t.bestScore,i)),t}catch{return Yh()}}function vC(n){if(typeof window>"u")return n;try{localStorage.setItem(zM,JSON.stringify(n))}catch{}return n}function Wm(n){return 1+Math.floor(Math.sqrt(Math.max(0,n)/300))}function kM(n){let e=Wm(n);return e>=12?"Sunforged":e>=9?"Warlord":e>=6?"Iron Marshal":e>=3?"Castellan":"Pathfinder"}function GM(n){let e=Wm(n),t=(e-1)*(e-1)*300,i=e*e*300;return{rank:e,current:t,next:i,pct:Math.max(0,Math.min(1,(n-t)/(i-t)))}}function VM(n){let e=Wm(n);return{gold:Math.min(25,Math.floor((e-1)/2)*5),heroDamage:1+Math.min(.2,(e-1)*.02),abilityCooldown:1-Math.min(.15,(e-1)*.01)}}function WM(n,e){return n.runs++,n.xp+=e.kills*2+Math.max(0,e.wave-(e.victory?0:1))*90+(e.victory?500:0),n.bestScore=Math.max(n.bestScore,e.score),n.bestWave=Math.max(n.bestWave,e.wave),n.totalKills+=e.kills,e.victory&&n.wins++,vC(n),n}var Hi=n=>document.getElementById(n),Xe={},W={},XM="",YM="",Kh=0,Xm="",ca={coin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v10M9.2 9.5h4.2a2 2 0 0 1 0 4H9.2h4.9a2 2 0 0 1 0 4H9.2"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3l7 2.6v5.6c0 4.6-3 7.9-7 9.8-4-1.9-7-5.2-7-9.8V5.6L12 3z"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 19L19 5M19 5h-6M19 5v6M5 19l3-1M5 19l1-3"/></svg>',bomb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="14" r="6"/><path d="M16 9l2-2M18 6c1-1 2-1 3 0M17 7c0-1.1.4-2 1-2.6"/></svg>',snow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9 4.8L12 7l3-2.2M9 19.2L12 17l3 2.2"/></svg>',bolt:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4.5 13.5H10L8.5 22 18 9.5h-5.8L13 2z"/></svg>',sword:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M14.5 3.5L21 3l-.5 6.5L9 21l-6-6L14.5 3.5zM5.5 13.5l5 5M3 21l3.5-3.5"/></svg>',crown:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 18l1.5-9 4.5 4L12 6l3 7 4.5-4L21 18H3z"/></svg>',sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></svg>',skull:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3a7 7 0 0 0-7 7c0 2.4 1.2 4.3 3 5.4V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.6c1.8-1.1 3-3 3-5.4a7 7 0 0 0-7-7z"/><circle cx="9.5" cy="11" r="1.4" fill="currentColor"/><circle cx="14.5" cy="11" r="1.4" fill="currentColor"/></svg>',sound:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>',muted:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9l5 6M21 9l-5 6"/></svg>'};function MC(){try{return Number(localStorage.getItem("ironhold_best")||0)}catch{return 0}}function _C(n){try{localStorage.setItem("ironhold_best",String(n))}catch{}}function qe(n,e){let t=String(e);n&&n.textContent!==t&&(n.textContent=t)}function Zh(n,e){let t=Math.max(0,Math.min(100,e))+"%";n&&n.style.width!==t&&(n.style.width=t)}var Vr=[],Ym=!1;function qM(){if(Ym||Vr.length===0)return;Ym=!0;let n=Vr.shift();qe(W.annMain,n.main),qe(W.annSub,n.sub||""),W.announcement.className="announcement show "+(n.style||""),setTimeout(()=>{W.announcement.className="announcement "+(n.style||""),setTimeout(()=>{Ym=!1,qM()},280)},n.hold||2300)}function Kt(n,e,t="",i=2300){let s=Hi("accessibilityStatus");if(s&&(s.textContent=e?`${n}. ${e}`:n),Vr.some(o=>o.main===n))return;let r={main:n,sub:e,style:t,hold:i};t==="boss"?Vr.unshift(r):Vr.push(r),Vr.length>8&&Vr.splice(-1,1),qM()}function EC(){let n=Hi("towerCards");n.innerHTML="",Rr.forEach((e,t)=>{let i=Mt[e],s=document.createElement("button");s.className="tower-card",s.dataset.kind=e,s.innerHTML=`<span class="tc-key">${t+1}</span><span class="tc-icon" style="color:#${i.color.toString(16).padStart(6,"0")}">${ca[i.icon]}</span><span class="tc-body"><span class="tc-name">${i.name}</span><span class="tc-desc">${i.desc}</span></span><span class="tc-cost">${ca.coin}<b>${i.cost}</b></span>`,s.addEventListener("click",()=>Xe.selectTower?.(e)),n.appendChild(s)})}function tr(){if(W.cached)return;["announcement","annMain","annSub","towerCards","goldDisplay","incomeDisplay","waveDisplay","waveFill","timeDisplay","hpText","hpBar","castleLevelDisplay","enemyDisplay","bossBar","bossName","bossFill","comboDisplay","comboNum","abilityBox","abilityCd","buildPrompt","tutorialHint","btnUpgradeCastle","costCastle","subCastle","castleBtnTitle","btnUpgradeHero","costHero","subHero","heroBtnTitle","btnRepair","costRepair","btnMute","hud","startScreen","pauseScreen","gameOverScreen","victoryScreen","bestScore","profileRank","btnNextWave","btnSpeed","commanderLevel","commanderXpText","commanderXpFill","towerInspector","selectedTowerName","selectedTowerLevel","selectedTowerStats","btnTowerUpgrade","btnTowerTarget","btnTowerSell","draftScreen","draftOptions","draftTitle","helpScreen","settingsScreen","qualitySelect","shakeToggle","motionToggle","touchControls","joystick","joystickKnob","touchAbility","rallyAbility","rallyAbilityCd","rallyAbilityCdText","touchBuild","touchUpgrade","touchNova","touchNovaCd","touchNovaCdText","touchRally","touchRallyCd","touchRallyCdText","touchPause","touchSpeed","touchCallWave","touchSettings","touchHint","specializationChoices","difficultySelect","difficultyDescription","btnEndless","accessibilityStatus","highContrastToggle","textSizeToggle","colorblindToggle"].forEach(e=>{W[e]=Hi(e)}),W.cards=[...document.querySelectorAll(".tower-card")],W.cdText=W.abilityBox.querySelector(".ability-cd-text"),W.waveTotal=document.querySelector(".wave-total"),W.cached=!0}function lt(n,e,t){let i=Hi(n);i&&i.addEventListener(e,t)}function KM(n){Object.assign(Xe,n),tr(),EC(),W.cards=[...document.querySelectorAll(".tower-card")],lt("btnStart","click",()=>Xe.start?.()),lt("btnResume","click",()=>Xe.resume?.()),lt("btnRestart","click",()=>Xe.restart?.()),lt("btnRestartGo","click",()=>Xe.restart?.()),lt("btnRestartWin","click",()=>Xe.restart?.()),lt("btnUpgradeCastle","click",()=>Xe.upgradeCastle?.()),lt("btnUpgradeHero","click",()=>Xe.upgradeHero?.()),lt("btnRepair","click",()=>Xe.repair?.()),lt("btnMute","click",()=>Xe.mute?.()),lt("btnSpeed","click",()=>Xe.toggleSpeed?.()),lt("btnNextWave","click",()=>Xe.callWave?.()),lt("btnPause","click",()=>Xe.resume?.()),lt("abilityBox","click",()=>Xe.ability?.()),lt("touchAbility","click",()=>Xe.ability?.()),lt("buildPrompt","click",()=>Xe.interact?.()),lt("btnTowerUpgrade","click",()=>Xe.upgradeSelectedTower?.()),lt("btnTowerTarget","click",()=>Xe.cycleTowerTarget?.()),lt("btnTowerSell","click",()=>Xe.sellSelectedTower?.()),lt("rallyAbility","click",()=>Xe.rally?.()),lt("touchNova","click",()=>Xe.ability?.()),lt("touchRally","click",()=>Xe.rally?.()),lt("touchBuild","click",()=>Xe.interact?.()),lt("touchUpgrade","click",()=>v.selectedTower?Xe.upgradeSelectedTower?.():Xe.upgradeNearestTower?.()),lt("touchPause","click",()=>Xe.resume?.()),lt("touchSpeed","click",()=>Xe.toggleSpeed?.()),lt("touchCallWave","click",()=>Xe.callWave?.()),lt("touchSettings","click",()=>Xe.openSettings?.()),lt("btnEndless","click",()=>Xe.startEndless?.()),lt("difficultySelect","change",s=>Xe.setDifficulty?.(s.target.value)),lt("highContrastToggle","change",s=>Xe.setHighContrast?.(s.target.checked)),lt("textSizeToggle","change",s=>Xe.setTextSize?.(s.target.checked)),lt("colorblindToggle","change",s=>Xe.setColorblind?.(s.target.checked)),W.specializationChoices.addEventListener("click",s=>{let r=s.target.closest("[data-specialization]");r&&v.selectedTower&&Xe.chooseSpecialization?.(v.selectedTower,r.dataset.specialization)});for(let s of["btnHelp","btnHelpPause"])lt(s,"click",()=>Xe.openHelp?.());for(let s of["btnSettings","btnSettingsStart","btnSettingsPause"])lt(s,"click",()=>Xe.openSettings?.());lt("btnCloseHelp","click",()=>Xe.closeHelp?.()),lt("btnCloseSettings","click",()=>Xe.closeSettings?.()),lt("qualitySelect","change",s=>Xe.setQuality?.(s.target.value)),lt("shakeToggle","change",s=>Xe.setCameraShake?.(s.target.checked)),lt("motionToggle","change",s=>Xe.setReducedMotion?.(s.target.checked));let e=qh(),t=GM(e.xp);qe(W.bestScore,e.bestScore>0?"BEST SCORE  "+e.bestScore.toLocaleString():""),qe(W.profileRank,`${kM(e.xp).toUpperCase()} \xB7 RANK ${t.rank} \xB7 ${Math.floor(t.pct*100)}% TO NEXT`);let i=Xe.getQuality?.()||"auto";W.qualitySelect.value=i,SC(),mt(0)}function SC(){let n=null,e=i=>{let s=W.joystick.getBoundingClientRect(),r=s.width*.32,o=i.clientX-(s.left+s.width/2),a=i.clientY-(s.top+s.height/2),l=Math.hypot(o,a);l>r&&(o*=r/l,a*=r/l),W.joystickKnob.style.transform=`translate(${o}px, ${a}px)`,v.touchMove={x:o/r,z:a/r}};W.joystick.addEventListener("pointerdown",i=>{n=i.pointerId,W.joystick.setPointerCapture(n),e(i)}),W.joystick.addEventListener("pointermove",i=>{i.pointerId===n&&e(i)});let t=i=>{i.pointerId===n&&(n=null,v.touchMove={x:0,z:0},W.joystickKnob.style.transform="")};W.joystick.addEventListener("pointerup",t),W.joystick.addEventListener("pointercancel",t)}var qm=[{t:4,text:"CLICK OR TAP TO MOVE \u2014 YOUR HERO FIGHTS AUTOMATICALLY"},{t:12,text:"SELECT A TOWER, THEN CLICK A GLOWING PAD OR PRESS E"},{t:26,text:"CLICK A TOWER TO UPGRADE, RETARGET, OR SELL IT"},{t:40,text:"SPACE: SUN NOVA \xB7 G: WAR RALLY"},{t:58,text:"CLEAR WAVES EARLY \xB7 PRESS ENTER TO CALL THE NEXT WAVE"}];function TC(){let n=!!v.draftOpen;if(W.draftScreen.classList.toggle("show",n),W.draftScreen.inert=!n,!n){Xm="";return}let e=v.pendingBoons.join(",");e!==Xm&&(Xm=e,W.draftOptions.innerHTML="",v.pendingBoons.forEach(t=>{let i=HM(t);if(!i)return;let s=document.createElement("button");s.className="draft-option",s.setAttribute("aria-label",`${i.name}. ${i.desc}`),s.innerHTML=`<span class="draft-icon">${ca[i.icon]||ca.crown}</span><b>${i.name}</b><span>${i.desc}</span><small>CHOOSE BLESSING</small>`,s.addEventListener("click",()=>Xe.chooseBoon?.(t)),W.draftOptions.appendChild(s)}),W.draftOptions.querySelector("button")?.focus())}function wC(){let n=v.selectedTower;if(W.towerInspector.classList.toggle("hidden",!n),!n)return;let e=Mt[n.type],t=e.levels[n.level-1],i=n.level>=4,s=!i&&n.level>=fi(v.castleLevel).towerMaxLevel,r=i?0:e.upgradeCosts[n.level-1];qe(W.selectedTowerName,e.name.toUpperCase()),qe(W.selectedTowerLevel,"LV "+n.level);let o=n.specialization?cl[n.type]?.[n.specialization]:null;qe(W.selectedTowerStats,`${Math.round(t.damage)} DMG  \xB7  ${t.range} RANGE  \xB7  ${(1/t.fireRate).toFixed(1)}/s${o?" \xB7 "+o.name.toUpperCase():""}`);let a=n.level>=3&&!n.specialization?Object.entries(cl[n.type]||{}):[];W.specializationChoices.hidden=a.length===0;let l=`${n.type}:${n.level}:${a.map(([c])=>c).join(",")}`;l!==YM&&(YM=l,[...W.specializationChoices.querySelectorAll("button")].forEach((c,h)=>{let u=a[h];c.hidden=!u,c.disabled=!u,u&&(c.dataset.specialization=u[0],c.textContent=u[1].name.toUpperCase(),c.title=u[1].desc,c.setAttribute("aria-label",`${u[1].name}. ${u[1].desc}`))})),qe(W.btnTowerUpgrade,i?"MAX LEVEL":s?"CASTLE REQUIRED":`UPGRADE \xB7 ${r}g`),W.btnTowerUpgrade.disabled=i||s||v.gold<r||!v.running,qe(W.btnTowerTarget,"TARGET: "+(n.targetMode||"first").toUpperCase()),qe(W.btnTowerSell,"SELL \xB7 "+Math.floor((n.invested||e.cost)*.65)+"g")}function mt(n=0){tr();let e=v;n>0&&Kh>0&&(Kh-=n,Kh<=0&&W.tutorialHint.classList.remove("show")),qe(W.goldDisplay,Math.floor(e.gold)),qe(W.incomeDisplay,e.incomeRate>0?`+${e.incomeRate}/${al}s`:"\u2014"),qe(W.waveDisplay,e.wave),qe(W.waveTotal,e.endless?"/ \u221E":"/ "+e.totalWaves);let t=e.intermission?e.prepTimer/ku:FM(e);Zh(W.waveFill,t*100),W.waveFill.parentElement.setAttribute("role","progressbar"),W.waveFill.parentElement.setAttribute("aria-label","Wave progress"),W.waveFill.parentElement.setAttribute("aria-valuenow",String(Math.round(t*100))),qe(W.timeDisplay,e.intermission?"NEXT "+Math.ceil(e.prepTimer)+"s":!e.endless&&e.wave>=e.totalWaves?"BOSS":Math.max(0,e.spawnRemaining)+" LEFT");let i=Math.max(0,e.baseHP/e.maxBaseHP*100);qe(W.hpText,Math.ceil(e.baseHP)+" / "+e.maxBaseHP),Zh(W.hpBar,i),W.hpBar.className="hp-fill"+(i<30?" critical":i<60?" low":""),qe(W.castleLevelDisplay,"LV "+e.castleLevel),qe(W.enemyDisplay,e.enemies.length),W.hpBar.parentElement.setAttribute("role","progressbar"),W.hpBar.parentElement.setAttribute("aria-valuenow",String(Math.ceil(e.baseHP))),W.hpBar.parentElement.setAttribute("aria-valuemax",String(e.maxBaseHP));let s=e.activeBoss;W.bossBar.classList.toggle("show",!!s&&!s.dying),s&&!s.dying&&(qe(W.bossName,s.bossName||"BOSS"),Zh(W.bossFill,s.hp/s.maxHp*100)),W.comboDisplay.classList.toggle("show",e.combo>=2&&e.comboTimer>0),e.combo>=2&&(qe(W.comboNum,"\xD7"+e.combo),W.comboDisplay.style.opacity=String(Math.min(1,e.comboTimer/(Yu*.6))));let r=Math.max(0,e.abilityCooldown),o=Math.max(0,Math.min(1,r/ms.cooldown));W.abilityBox.classList.toggle("ready",r<=0),W.abilityBox.disabled=r>0||!e.running||e.paused||e.draftOpen,W.abilityCd.style.setProperty("--cd",o*100+"%"),qe(W.cdText,o>0?Math.ceil(r)+"s":""),W.touchNova.disabled=W.abilityBox.disabled,W.touchNova.classList.toggle("ready",r<=0&&e.running&&!e.paused&&!e.draftOpen),W.touchNovaCd.style.setProperty("--cd",o*100+"%"),qe(W.touchNovaCdText,o>0?Math.ceil(r)+"s":"");let a=Math.max(0,e.rallyCooldown),l=Math.max(0,Math.min(1,a/Uo.cooldown));W.rallyAbility.classList.toggle("ready",a<=0),W.rallyAbility.disabled=a>0||!e.running||e.paused||e.draftOpen,W.rallyAbilityCd.style.setProperty("--cd",l*100+"%"),qe(W.rallyAbilityCdText,a>0?Math.ceil(a)+"s":e.rallyTimer>0?Math.ceil(e.rallyTimer)+"s":""),W.touchRally.disabled=W.rallyAbility.disabled,W.touchRally.classList.toggle("ready",a<=0&&e.running&&!e.paused&&!e.draftOpen),W.touchRallyCd.style.setProperty("--cd",l*100+"%"),qe(W.touchRallyCdText,a>0?Math.ceil(a)+"s":e.rallyTimer>0?Math.ceil(e.rallyTimer)+"s":""),qe(W.btnSpeed,e.gameSpeed+"\xD7"),W.btnSpeed.setAttribute("aria-pressed",String(e.gameSpeed===2)),qe(W.touchSpeed.querySelector(".touch-speed-value"),e.gameSpeed+"\xD7"),W.touchSpeed.setAttribute("aria-pressed",String(e.gameSpeed===2)),W.touchPause.setAttribute("aria-pressed",String(e.paused)),W.cards.forEach(_=>{let D=Mt[_.dataset.kind];_.classList.toggle("selected",e.buildType===_.dataset.kind),_.classList.toggle("poor",e.gold<D.cost),_.setAttribute("aria-pressed",String(e.buildType===_.dataset.kind))});let c=Kl(e.commanderLevel);qe(W.commanderLevel,"COMMANDER "+e.commanderLevel),qe(W.commanderXpText,`${e.commanderXP} / ${c} XP`),Zh(W.commanderXpFill,e.commanderXP/c*100),W.commanderXpFill.parentElement.setAttribute("role","progressbar"),W.commanderXpFill.parentElement.setAttribute("aria-label","Commander experience"),W.commanderXpFill.parentElement.setAttribute("aria-valuenow",String(e.commanderXP)),W.commanderXpFill.parentElement.setAttribute("aria-valuemax",String(c));let h=e.intermission&&e.wave<e.totalWaves&&e.running;W.btnNextWave.hidden=!h,W.touchCallWave.disabled=!h,W.touchCallWave.setAttribute("aria-label",h?`Call wave ${e.wave+1} early for ${Wh(e.prepTimer)} gold`:"Next wave is not ready"),h&&qe(W.btnNextWave,`CALL WAVE ${e.wave+1}  \xB7  +${Wh(e.prepTimer)}g`);let u=e.castleLevel;if(u>=ps.length)qe(W.castleBtnTitle,"Castle Maxed"),qe(W.costCastle,"MAX"),qe(W.subCastle,`${fi(u).name} \u2014 fully fortified`),W.btnUpgradeCastle.disabled=!0;else{let _=ps[u],D=u===cp?" \xB7 +8 outer pads":"";qe(W.castleBtnTitle,"Upgrade Castle"),qe(W.costCastle,_.cost),qe(W.subCastle,`+${_.hp} HP \xB7 +${_.income}/${al}s \xB7 ${_.feature}${D}`),W.btnUpgradeCastle.disabled=e.gold<_.cost||!e.running}let d=e.heroLevel;if(d>=Pr.length)qe(W.heroBtnTitle,"Hero Maxed"),qe(W.costHero,"MAX"),qe(W.subHero,`${pi(d)} \u2014 level 6 \xB7 legend of the realm`),W.btnUpgradeHero.disabled=!0;else{let _=Pr[d];qe(W.heroBtnTitle,"Upgrade Hero"),qe(W.costHero,_.cost);let D=pi(d)===pi(d+1)?" \xB7 evolve stats":` \xB7 ${pi(d+1)}`;qe(W.subHero,`Level ${d} \u2192 ${d+1}${D}`),W.btnUpgradeHero.disabled=e.gold<_.cost||!e.running}let f=Math.max(0,e.maxBaseHP-e.baseHP),g=f<=0?0:Math.max(5,Math.ceil(Gu*Math.min(1,f/Ho)));qe(W.costRepair,g||"\u2014"),W.btnRepair.title=`Restore ${Math.min(Ho,f)} HP`,W.btnRepair.disabled=e.gold<g||f<=0||!e.running;let x="none",m="",p=!1;if(e.running&&e.nearPad){let _=Mt[e.nearPad.type];p=!e.nearPad.affordable,x=`pad:${e.nearPad.type}:${p}`,m=p?`NOT ENOUGH GOLD \u2014 ${_.name.toUpperCase()} COSTS ${e.nearPad.cost}g`:`<kbd>E</kbd> BUILD ${_.name.toUpperCase()} <span class="bp-cost">${e.nearPad.cost}g</span>`}else if(e.running&&e.nearTower){let _=e.nearTower;p=!!_.locked||!_.affordable,x=`tower:${_.name}:${_.level}:${_.maxed}:${_.locked}:${_.affordable}`,_.maxed?m=`${_.name.toUpperCase()} \u2014 MAX LEVEL`:_.locked?m=`CASTLE LV ${_.lockedLevel-1} REQUIRED FOR TOWER LV ${_.level+1}`:m=_.affordable?`<kbd>Q</kbd> UPGRADE ${_.name.toUpperCase()} \u2192 LV ${_.level+1} <span class="bp-cost">${_.cost}g</span>`:`NEED ${_.cost}g TO UPGRADE ${_.name.toUpperCase()}`}x!==XM&&(XM=x,W.buildPrompt.innerHTML=m),W.buildPrompt.classList.toggle("active",x!=="none"),W.buildPrompt.classList.toggle("poor",p),W.buildPrompt.disabled=x==="none"||p,W.touchBuild.disabled=!e.running||!e.nearPad||!e.nearPad.affordable||e.paused||e.draftOpen;let M=e.selectedTower&&e.selectedTower.level<4&&e.selectedTower.level<fi(e.castleLevel).towerMaxLevel&&e.gold>=Mt[e.selectedTower.type].upgradeCosts[e.selectedTower.level-1],y=e.nearTower&&!e.nearTower.maxed&&!e.nearTower.locked&&e.nearTower.affordable;W.touchUpgrade.disabled=!e.running||!(M||y)||e.paused||e.draftOpen,qe(W.touchHint,e.nearPad?"Tap BUILD to raise the selected tower.":e.selectedTower?"Tower selected. Upgrade, retarget, or sell it.":"Tap the ground to move. Tap a tower or glowing pad to command."),e.running&&e.hintStage<qm.length&&e.elapsed>=qm[e.hintStage].t&&(qe(W.tutorialHint,qm[e.hintStage].text),e.hintStage++,W.tutorialHint.classList.add("show"),Kh=5),wC(),TC()}function ZM(){tr(),W.startScreen.classList.add("show"),W.hud.classList.add("hidden"),W.hud.inert=!0,mt(0)}function $M(){tr(),W.startScreen.classList.remove("show"),W.hud.classList.remove("hidden"),W.hud.inert=!1}function JM(){tr(),W.victoryScreen.classList.remove("show"),W.victoryScreen.inert=!0,W.hud.classList.remove("hidden"),W.hud.inert=!1,W.draftScreen.classList.remove("show"),W.draftScreen.inert=!0}function jM(n){tr(),W.pauseScreen.classList.toggle("show",n),W.pauseScreen.inert=!n,n&&Hi("btnResume").focus()}function Km(n){W.helpScreen.classList.toggle("show",n),W.helpScreen.inert=!n,n&&Hi("btnCloseHelp").focus()}function Zm(n){W.settingsScreen.classList.toggle("show",n),W.settingsScreen.inert=!n,n&&Hi("btnCloseSettings").focus()}function bC(n){return n.map(e=>`<div class="stat-row"><span>${e[0]}</span><b>${e[1]}</b></div>`).join("")}function QM(n){let e=Math.max(MC(),v.score);_C(e);let t=[["Waves Survived",Math.max(0,v.wave-(n?0:1))+(v.endless?" \xB7 ENDLESS":" / "+v.totalWaves)],["Difficulty",ti(v.difficulty).name],["Bandits Slain",v.kills],["Best Combo","\xD7"+v.bestCombo],["Commander Level",v.commanderLevel],["Gold Earned",v.totalGoldEarned],["Score",v.score.toLocaleString()]];Hi(n?"winStats":"goStats").innerHTML=bC(t)}function e_(){tr(),QM(!1),W.gameOverScreen.classList.add("show"),W.gameOverScreen.inert=!1,W.hud.classList.add("hidden"),W.hud.inert=!0,Hi("btnRestartGo").focus()}function t_(){tr(),QM(!0),W.victoryScreen.classList.add("show"),W.victoryScreen.inert=!1,W.hud.classList.add("hidden"),W.hud.inert=!0,Hi("btnRestartWin").focus()}function Zl(n){let e=Hi("btnMute");e&&(e.innerHTML=n?ca.muted:ca.sound,e.setAttribute("aria-pressed",String(n)),e.setAttribute("aria-label",n?"Unmute audio":"Mute audio"),e.title=n?"Unmute audio (M)":"Mute audio (M)")}var d_=new te({color:13211498,roughness:.75}),ni=new te({color:3817288,metalness:.78,roughness:.42}),$i=new te({color:11055808,metalness:.88,roughness:.27}),da=new te({color:2369843,metalness:.7,roughness:.5}),ir=new te({color:12831701,metalness:.9,roughness:.22}),Mi=new te({color:13146168,metalness:.86,roughness:.34,emissive:3810816,emissiveIntensity:.24}),Ui=new te({color:4863264,roughness:.9}),AC=new te({color:7491635,roughness:.82}),n_=new te({color:5914664,roughness:.9}),RC=new te({color:1710622,metalness:.4,roughness:.3}),CC=new ft({color:16724e3}),PC=new te({color:1119259,metalness:.45,roughness:.3,emissive:2363400,emissiveIntensity:.35}),IC=new te({color:15263976,roughness:.7}),LC=new ft({color:16744480}),DC=new te({color:768,emissive:16719888,emissiveIntensity:1.6,metalness:.5,roughness:.3}),NC=new te({color:3612740,emissive:10217579,emissiveIntensity:.85,metalness:.35,roughness:.3}),HC=new Rt({map:null,color:16756800,transparent:!0,blending:$e,depthWrite:!1}),Wr={champion:new te({color:2771594,roughness:.85,side:ot}),acolyte:new te({color:4860520,roughness:.85,side:ot}),warlord:new te({color:6950936,roughness:.85,side:ot})},$m={};function f_(n,e,t){return $m[n]||($m[n]=new te({map:pl(n,e,t),roughness:.78,metalness:.05})),$m[n]}var p_={grunt:["bandit_brown","#8a4a32","#4a2114"],runner:["bandit_green","#3f7a3f","#1d3a1d"],bomber:["bandit_orange","#b06020","#5a2808"],brute:["bandit_purple","#6a4080","#301a40"],champion:["bandit_blue","#3a5a8a","#16263f"],acolyte:["bandit_violet","#65447e","#2c173c"],giant:["bandit_rust","#8a4a20","#401e08"],warlord:["bandit_black","#3a1a20","#160608"]};function Ji(n,e,t,i){let s=new Ve;return s.position.set(e,t,i),n.add(s),s}function m_(n,e,t,i,s=0,r=0,o=0){let a=new N(new Ut(n,e,t),i);return a.position.set(s,r,o),a.castShadow=!0,a}function ua(n,e,t,i,s,r=0,o=0,a=0){let l=new N(new Te(n,e,t,i),s);return l.position.set(r,o,a),l.castShadow=!0,l}function nr(n,e,t=0,i=0,s=0,r=8,o=8){let a=new N(new Gt(n,r,o),e);return a.position.set(t,i,s),a.castShadow=!0,a}var i_=new Map;function td(n,e,t,i=.035,s=2){let r=Math.min(i,n*.45,e*.45,t*.45),o=[n,e,t,r,s].map(l=>l.toFixed(4)).join(":"),a=i_.get(o);return a||(a=new vn(n,e,t,s,r),i_.set(o,a)),a}function zt(n,e,t,i,s=0,r=0,o=0,a=.035,l=2){let c=new N(td(n,e,t,a,l),i);return c.position.set(s,r,o),c.castShadow=!0,c}var s_=new Map;function $h(n,e,t=.28,i=.055){let s=[n,e,t,i].join(":"),r=s_.get(s);if(r)return r;r=new sn(n,e,4,6),r.translate(0,-e/2,0);let o=r.getAttribute("position");for(let a=0;a<o.count;a++){let l=o.getX(a),c=o.getY(a),h=Math.max(0,-c/e),u=Math.max(0,1-Math.abs(l)/(n*.2));o.setXYZ(a,l*(1-t*h),c+i*u*h,.035*Math.sin(h*Math.PI)+.025*h*h)}return r.computeVertexNormals(),s_.set(s,r),r}var r_=(()=>{let n=new Gn;n.moveTo(0,.36),n.lineTo(.23,.23),n.lineTo(.2,-.16),n.quadraticCurveTo(.13,-.31,0,-.39),n.quadraticCurveTo(-.13,-.31,-.2,-.16),n.lineTo(-.23,.23),n.closePath();let e=new Pi(n,{depth:.07,bevelEnabled:!0,bevelSegments:2,bevelSize:.018,bevelThickness:.018,steps:1});return e.translate(0,0,-.035),e.computeVertexNormals(),e})(),o_=new Map;function a_(n,e){let t="sword:"+n+":"+e,i=o_.get(t);if(i)return i;let s=new Gn;return s.moveTo(-n/2,0),s.lineTo(n/2,0),s.lineTo(n*.42,e*.82),s.lineTo(0,e),s.lineTo(-n*.42,e*.82),s.closePath(),i=new Pi(s,{depth:.026,bevelEnabled:!0,bevelSegments:1,bevelSize:.006,bevelThickness:.006,steps:1}),i.translate(0,0,-.013),i.computeVertexNormals(),o_.set(t,i),i}var UC=(()=>{let n=new Gn;n.moveTo(.02,-.16),n.quadraticCurveTo(.31,-.29,.48,-.18),n.quadraticCurveTo(.57,0,.48,.2),n.quadraticCurveTo(.29,.3,.02,.17),n.lineTo(-.06,.08),n.lineTo(-.06,-.08),n.closePath();let e=new Pi(n,{depth:.075,bevelEnabled:!0,bevelSegments:2,bevelSize:.012,bevelThickness:.012,steps:1});return e.translate(0,0,-.0375),e.computeVertexNormals(),e})();function Jm(n,e){let{y:t,s:i=1,mat:s=ni,horns:r=!1,crest:o=null,crown:a=!1}=e,l=zt(.43*i,.34*i,.38*i,s,0,t,0,.055*i,2);l.rotation.x=-.04,n.add(l);let c=zt(.32*i,.075*i,.32*i,ir,0,t+.19*i,-.01*i,.02*i,1);n.add(c);let h=zt(.47*i,.055*i,.09*i,s,0,t+.075*i,.2*i,.018*i,1);h.rotation.x=-.12,n.add(h);let u=zt(.31*i,.052*i,.035*i,PC,0,t+.012*i,.207*i,.012*i,1);n.add(u);let d=zt(.052*i,.17*i,.06*i,ir,0,t-.025*i,.218*i,.012*i,1);n.add(d);for(let f of[-1,1]){let g=zt(.07*i,.17*i,.12*i,s,f*.18*i,t-.075*i,.155*i,.018*i,1);if(g.rotation.z=f*-.12,n.add(g),r){let x=new N(new Qe(.068*i,.43*i,6),ir);x.position.set(f*.27*i,t+.17*i,-.01*i),x.rotation.z=f*-.62,x.castShadow=!0,n.add(x)}}if(o){let f=new N(new Qe(.085*i,.46*i,5),o);f.scale.z=.5,f.position.set(0,t+.42*i,-.035*i),f.rotation.x=-.22,f.castShadow=!0,n.add(f)}if(a)for(let f=0;f<5;f++){let g=f/5*Math.PI*2,x=new N(new Qe(.035*i,(f%2?.18:.25)*i,4),Mi);x.position.set(Math.cos(g)*.18*i,t+.3*i,Math.sin(g)*.18*i),x.castShadow=!0,n.add(x)}return l}function OC(n,e,t,i){let s=e==="brute"||e==="giant"||e==="warlord",r=e==="champion"?$i:e==="warlord"?da:ni,o=(s?.62:.46)*t,a=zt(o,(s?.36:.29)*t,.15*t,r,0,1.01*t,(i+.025)*t,.04*t,2);a.rotation.x=-.08,n.add(a);let l=zt(o*.82,.16*t,.12*t,r,0,.79*t,(i+.02)*t,.025*t,1);n.add(l);let c=zt(o*.72,.028*t,.035*t,Mi,0,1.13*t,(i+.105)*t,.009*t,1);n.add(c);for(let h of[-1,1]){let u=m_(.045*t,.43*t,.025*t,Ui,h*o*.28,.96*t,(i+.11)*t);u.rotation.z=h*.08,n.add(u);let d=zt(.17*t,(s?.29:.23)*t,.11*t,r,h*.17*t,.59*t,.13*t,.025*t,1);d.rotation.z=h*.08,n.add(d)}}var ha=new Ut(1,1,1),BC=new Gt(1,6,4),FC=new Qe(.28,.42,6),zC=td(.48,.34,.42,.055,1),kC=td(.5,.065,.09,.02,1),GC=new Qe(.065,.4,5),VC=$h(1,1,.24,.05);function WC(n){let[e,t,i]=p_[n],s=f_(e,t,i),r=new Ve,o={flashMats:[s]},a=n==="brute"||n==="giant"||n==="warlord",l=a?.36:.26,c=a?.62:.48,h=new N(ha,s);h.scale.set(l*2.05,c+l*2,l*1.8),h.position.y=.92,h.castShadow=!0,r.add(h),o.torso=h;let u=new N(ha,Ui);u.scale.set(l*2.16,.1,l*1.95),u.position.y=.72,u.castShadow=!0,r.add(u);let d=new N(BC,d_);if(d.scale.setScalar(.21),d.position.y=1.42,d.castShadow=!0,r.add(d),o.head=d,a||n==="champion"||n==="acolyte"){let C=new N(zC,n==="champion"?$i:ni);C.scale.setScalar(n==="giant"||n==="warlord"?1.16:1),C.position.y=n==="giant"||n==="warlord"?1.5:1.47,C.castShadow=!0,r.add(C);let F=new N(kC,da);if(F.scale.copy(C.scale),F.position.set(0,C.position.y+.03,.215*C.scale.x),r.add(F),n==="brute"||n==="giant"||n==="warlord")for(let T of[-1,1]){let A=new N(GC,n==="giant"||n==="warlord"?Mi:ir);A.scale.copy(C.scale),A.position.set(T*.27,C.position.y+.2,0),A.rotation.z=T*-.6,A.castShadow=!0,r.add(A)}}else{let C=new N(FC,s);C.position.y=1.6,C.castShadow=!0,r.add(C)}if(n==="champion"||n==="acolyte"||n==="warlord"){let C=new N(VC,n==="champion"?Wr.champion:n==="acolyte"?Wr.acolyte:Wr.warlord),F=n==="warlord"?.82:.58;C.scale.set(F,n==="warlord"?1.55:1.02,1),C.position.set(0,1.28,-.24),C.rotation.x=.12,r.add(C),o.cape=C}let f=a?.62:.5,g=Ji(r,l+.08,1.2,.02),x=new N(ha,s);x.scale.set(.15,f+.12,.15),x.position.y=-f/2-.04,x.castShadow=!0,g.add(x),o.armR=g;let m=Ji(r,-l-.08,1.2,.02),p=new N(ha,s);p.scale.copy(x.scale),p.position.copy(x.position),p.castShadow=!0,m.add(p),o.armL=m;let M=.56,y=Ji(r,-.14,.6,0),_=new N(ha,Ui);_.scale.set(.15,M,.17),_.position.y=-M/2,_.castShadow=!0,y.add(_),o.legL=y;let D=Ji(r,.14,.6,0),b=new N(ha,Ui);b.scale.copy(_.scale),b.position.copy(_.position),b.castShadow=!0,D.add(b),o.legR=D;for(let[C,F]of Object.entries(o))C!=="flashMats"&&(F.name=C);return{group:r,parts:o}}function XC(n){let[e,t,i]=p_[n],s=f_(e,t,i),r=new Ve,o=1,a={flashMats:[s]},l=n==="brute"||n==="giant"||n==="warlord",c=(l?.38:.275)*o,h=(l?.58:.46)*o,u=new N(new kn(c,h,6,12),s);u.position.y=.92*o,u.castShadow=!0,r.add(u),a.torso=u;let d=new N(new Te(c*.92,c*1.08,.25*o,8),s);d.position.y=.58*o,d.castShadow=!0,r.add(d);let f=ua(c*1.08,c*1.08,.1*o,10,Ui,0,.72*o,0);r.add(f);let g=zt(.1*o,.085*o,.04*o,Mi,0,.72*o,c*1.05*o,.015*o,1);r.add(g),["brute","champion","giant","warlord"].includes(n)&&OC(r,n,o,c);let x=nr(.205*o,d_,0,1.42*o,0,10,10);if(r.add(x),a.head=x,n==="grunt"||n==="runner"){let S=new N(new Qe(.28*o,.42*o,7),s);S.position.y=1.6*o,S.castShadow=!0,r.add(S);let I=ua(.215*o,.215*o,.09*o,10,Ui,0,1.36*o,0);r.add(I);let L=zt(.31*o,.045*o,.055*o,AC,0,1.48*o,.18*o,.012*o,1);if(L.rotation.x=-.12,r.add(L),n==="runner"){let H=new N(new Qe(.05*o,.5*o,5),IC);H.position.set(.12*o,1.92*o,0),H.rotation.z=-.35,r.add(H)}}else if(n==="bomber"){let S=ua(.225*o,.225*o,.11*o,10,ni,0,1.44*o,0);r.add(S);let I=nr(.07*o,LC,.1*o,1.45*o,.19*o);r.add(I);let L=nr(.31*o,s,0,.82*o,.1*o);L.scale.z=.82,r.add(L);let H=new N(new wt(.245*o,.025*o,5,12),Ui);H.position.set(0,.82*o,.1*o),H.rotation.x=Math.PI/2,r.add(H)}else if(n==="brute"){Jm(r,{y:1.49*o,s:1.06*o,mat:ni,horns:!0});let S=zt(.34*o,.1*o,.14*o,da,0,1.31*o,.16*o,.02*o,1);r.add(S),[-1,1].forEach(I=>{let L=new N(new Qe(.085*o,.34*o,5),ir);L.position.set(I*.43*o,1.3*o,0),L.rotation.z=I*-.8,r.add(L)})}else if(n==="champion"){Jm(r,{y:1.49*o,mat:$i,crest:Wr.champion});let S=new N($h(.58*o,1.02*o,.26,.065),Wr.champion);S.position.set(0,1.27*o,-.235*o),S.rotation.x=.1,S.castShadow=!0,r.add(S),a.cape=S}else if(n==="acolyte"){let S=new N(new Qe(.31*o,.52*o,6),s);S.position.set(0,1.58*o,-.015*o),S.rotation.y=Math.PI/6,S.castShadow=!0,r.add(S);let I=zt(.28*o,.22*o,.04*o,da,0,1.43*o,.19*o,.035*o,2);r.add(I);let L=zt(.34*o,.05*o,.07*o,Mi,0,1.57*o,.205*o,.015*o,1);L.rotation.x=-.1,r.add(L);let H=new N(new an(.07*o,0),Mi);H.scale.y=1.5,H.position.set(0,1.73*o,.18*o),r.add(H);let O=new N($h(.57*o,1.02*o,.28,.06),Wr.acolyte);O.position.set(0,1.27*o,-.235*o),O.rotation.x=.1,O.castShadow=!0,r.add(O),a.cape=O}else if((n==="giant"||n==="warlord")&&(Jm(r,{y:1.51*o,s:1.12*o,mat:n==="warlord"?da:ni,horns:!0,crown:n==="warlord"}),[-.09,.09].forEach(S=>{let I=nr(.035*o,CC,S*o,1.515*o,.245*o,6,6);r.add(I)}),n==="warlord")){let S=new N($h(.84*o,1.55*o,.22,.08),Wr.warlord);S.position.set(0,1.4*o,-.3*o),S.rotation.x=.08,S.castShadow=!0,r.add(S),a.cape=S}if(["brute","champion","giant","warlord"].includes(n)){let S=n==="champion"?$i:n==="warlord"?da:ni,I=n==="champion"||n==="warlord"?Mi:ir;for(let L of[-1,1]){let H=zt(l?.27*o:.22*o,.13*o,l?.4*o:.32*o,S,L*(c+.12*o),1.25*o,0,.035*o,2);H.rotation.z=L*.16,r.add(H);let O=zt(l?.23*o:.18*o,.075*o,l?.34*o:.27*o,I,L*(c+.15*o),1.34*o,.015*o,.022*o,1);O.rotation.z=L*.2,r.add(O)}}let m=(l?.62:.5)*o,p=Ji(r,c+.08*o,1.2*o,.02*o),M=new N(new kn((l?.095:.072)*o,m,4,8),s);M.position.y=-m/2-.04*o,M.castShadow=!0,p.add(M);let y=Ji(p,0,-m-.06*o,0);a.armR=p;let _=Ji(r,-c-.08*o,1.2*o,.02*o),D=new N(new kn((l?.095:.072)*o,m,4,8),s);D.position.y=-m/2-.04*o,D.castShadow=!0,_.add(D);let b=Ji(_,0,-m-.06*o,0);a.armL=_;let C=["brute","champion","giant","warlord"].includes(n);for(let[S,I]of[[p,y],[_,b]])if(C){let L=zt(l?.2*o:.15*o,.23*o,.18*o,n==="champion"?$i:ni,0,-m*.78,.015*o,.028*o,1);S.add(L);let H=zt(l?.21*o:.16*o,.045*o,.19*o,n==="champion"||n==="warlord"?Mi:ir,0,-m*.62,.015*o,.012*o,1);S.add(H);let O=zt(.13*o,.13*o,.14*o,ni,0,-.015*o,0,.025*o,1);I.add(O)}else{let L=nr(.07*o,Ui,0,-.015*o,0,7,6);L.scale.y=1.15,I.add(L)}if(n==="grunt"||n==="champion"){let S=(n==="champion"?.85:.62)*o,I=ua(.035*o,.035*o,.22*o,6,Ui,0,0,0);y.add(I);let L=zt(.24*o,.055*o,.07*o,Mi,0,.1*o,0,.018*o,1);y.add(L);let H=new N(a_(.078*o,S),n==="champion"?$i:ni);H.position.set(0,.13*o,0),H.castShadow=!0,y.add(H);let O=nr(.045*o,Mi,0,-.13*o,0,6,5);y.add(O)}else if(n==="runner")[-1,1].forEach(S=>{let I=S===1?y:b,L=new N(a_(.045*o,.42*o),$i);L.position.set(0,.04*o,0),L.rotation.x=.3,L.castShadow=!0,I.add(L)});else if(n==="bomber"){let S=nr(.25*o,RC,0,0,.06*o);S.scale.y=1.08,y.add(S);let I=ua(.014*o,.014*o,.22*o,4,n_,0,.26*o,.06*o);I.rotation.x=.2,y.add(I);let L=new kt(HC);L.scale.setScalar(.35*o),L.position.set(0,.38*o,.08*o),y.add(L),a.fuseSpark=L}else if(n==="brute"||n==="giant"||n==="warlord"){let S=ua(.045*o,.05*o,1.5*o,6,n_,0,-.1*o,0);y.add(S);let I=n==="warlord"?1.2:n==="giant"?1.08:1,L=new N(UC,$i);L.scale.setScalar(I*o),L.position.set(.04*o,.55*o,0),L.castShadow=!0,y.add(L);let H=new N(new Qe(.07*o,.3*o,5),ir);H.position.set(-.18*o,.55*o,0),H.rotation.z=Math.PI/2,y.add(H);let O=zt(.13*o,.16*o,.13*o,ni,0,.55*o,0,.025*o,1);if(y.add(O),n==="warlord"){let k=zt(.27*o,.065*o,.012*o,DC,.27*o,.55*o,.052*o,.01*o,1);k.rotation.z=-.12,y.add(k)}}if(n==="champion"||n==="acolyte"){let S=new N(r_,n==="champion"?$i:ni);S.scale.setScalar(o),S.rotation.z=.1,S.castShadow=!0,b.add(S);let I=new N(r_,Mi);I.scale.set(1.08*o,1.08*o,.42*o),I.position.z=-.022*o,I.rotation.z=.1,b.add(I);let L=n==="champion"?nr(.1*o,Mi,0,-.05*o,.085*o):new N(new an(.105*o,0),NC);n==="champion"?L.scale.z=.4:(L.position.set(0,-.04*o,.085*o),L.scale.y=1.35),b.add(L)}let F=.56*o,T=Ji(r,-.14*o,.6*o,0),A=new N(new kn(.085*o,F-.12*o,4,8),Ui);A.position.y=-F/2,A.castShadow=!0,T.add(A);let z=m_(.16*o,.1*o,.26*o,Ui,0,-F+.02*o,.05*o);T.add(z);let X=Ji(r,.14*o,.6*o,0),ne=A.clone();if(X.add(ne),X.add(z.clone()),C){let S=n==="champion"?$i:ni;for(let I of[T,X]){let L=zt(.17*o,.15*o,.09*o,S,0,-.17*o,.075*o,.03*o,1);I.add(L);let H=zt(.14*o,.27*o,.1*o,S,0,-.37*o,.065*o,.025*o,1);H.rotation.x=-.06,I.add(H)}}a.legL=T,a.legR=X;for(let[S,I]of Object.entries(a))S!=="flashMats"&&(I.name=S);u.userData.noStaticBatch=!0,x.userData.noStaticBatch=!0;for(let S of[p,_,y,b,T,X])S.userData.dynamicPivot=!0;return a.cape&&(a.cape.userData.noStaticBatch=!0),YC(r),{group:r,parts:a}}function YC(n){let e=[n];n.traverse(t=>{t!==n&&t.userData.dynamicPivot&&e.push(t)});for(let t of e){t.updateWorldMatrix(!0,!0);let i=t.matrixWorld.clone().invert(),s=new Map;t.traverse(r=>{if(!r.isMesh||r.isSkinnedMesh||!r.visible||Array.isArray(r.material)||!r.material||r.material.transparent)return;for(let a=r;a&&a!==t;a=a.parent)if(a.userData.dynamicPivot||a.userData.noStaticBatch)return;let o=r.material.uuid+":"+[r.castShadow,r.receiveShadow,r.renderOrder].join(":");s.has(o)||s.set(o,{material:r.material,meshes:[]}),s.get(o).meshes.push(r)});for(let r of s.values()){if(r.meshes.length<2)continue;let o=r.meshes.map(h=>{let u=h.geometry.index?h.geometry.toNonIndexed():h.geometry.clone();u.applyMatrix4(i.clone().multiply(h.matrixWorld)),u.getAttribute("normal")||u.computeVertexNormals(),u.getAttribute("uv")||u.setAttribute("uv",new Re(new Float32Array(u.getAttribute("position").count*2),2));for(let d of Object.keys(u.attributes))["position","normal","uv"].includes(d)||u.deleteAttribute(d);return u.clearGroups(),u}),a=Yi(o,!1);if(o.forEach(h=>h.dispose()),!a)continue;a.computeBoundingBox(),a.computeBoundingSphere();let l=r.meshes[0],c=new N(a,r.material);c.name="enemy-rigid-batch",c.castShadow=l.castShadow,c.receiveShadow=l.receiveShadow,c.renderOrder=l.renderOrder,t.add(c);for(let h of r.meshes)h.removeFromParent()}}}var l_=new Map,c_=new Map;function qC(n){let e=l_.get(n);return e||(e=XC(n),e.partNames=Object.keys(e.parts).filter(t=>t!=="flashMats"),l_.set(n,e)),e}function KC(n){let e=c_.get(n);return e||(e=WC(n),e.partNames=Object.keys(e.parts).filter(t=>t!=="flashMats"),c_.set(n,e)),e}function jm(n,e){return n.has(e)||n.set(e,e.clone()),n.get(e)}function u_(n,e,t){let i=n.group.clone(!0);i.scale.setScalar(e);let s=n.parts.flashMats.map(o=>jm(t,o));i.traverse(o=>{o.material&&(Array.isArray(o.material)?o.material=o.material.map(a=>t.has(a)||o.isSprite?jm(t,a):a):(t.has(o.material)||o.isSprite)&&(o.material=jm(t,o.material)))});let r={flashMats:s};for(let o of n.partNames)r[o]=i.getObjectByName(o);return{model:i,parts:r}}function ZC(n,e){let t=new Ve,i=new Map,s=new Map,r=u_(qC(n),e,i),o=u_(KC(n),e,s);return o.model.visible=!1,t.add(r.model,o.model),{group:t,parts:r.parts,detailedParts:r.parts,simpleParts:o.parts,detailedModel:r.model,simpleModel:o.model,ownedMaterials:[...i.values(),...s.values()]}}var g_=38,x_=2,$C=(g_-x_)**2,JC=(g_+x_)**2;function Jh(n,e){n.simpleLod=e,n.detailedModel.visible=!e,n.simpleModel.visible=e,n.parts=e?n.simpleParts:n.detailedParts}function y_(n){if(n.isBoss){n.simpleLod&&Jh(n,!1);return}let e=Bt.position.distanceToSquared(n.mesh.position);n.simpleLod?e<$C&&Jh(n,!1):e>JC&&Jh(n,!0)}var $l=1.05,h_=.16,jC=.72,QC=4,e3=new dn(.76,1,48),t3=new Bs(.76,48),n3=td(.34,.018,.055,.008,1),v_=new pe(16756810),i3=new pe(16728870),M_=[],Jl=[];function s3(){let n=new Ve,e=new ft({color:16747064,transparent:!0,opacity:.8,side:ot,blending:$e,depthWrite:!1,forceSinglePass:!0}),t=new ft({color:16734760,transparent:!0,opacity:.1,side:ot,blending:$e,depthWrite:!1,forceSinglePass:!0}),i=new N(e3,e);i.rotation.x=-Math.PI/2,n.add(i);let s=new N(t3,t);s.rotation.x=-Math.PI/2,s.position.y=-.004,n.add(s);let r=[];for(let o=0;o<4;o++){let a=new N(n3,e),l=o/4*Math.PI*2;a.position.set(Math.cos(l)*.89,.006,Math.sin(l)*.89),a.rotation.y=-l,n.add(a),r.push(a)}return n.visible=!1,n.renderOrder=4,{group:n,material:e,discMaterial:t,ticks:r,active:!1,owner:null,t:0,radius:4.5,impacted:!1}}for(let n=0;n<QC;n++)M_.push(s3());function r3(n,e,t){let i=M_.find(s=>!s.active);return i?(i.active=!0,i.owner=n,i.t=0,i.radius=t,i.impacted=!1,i.group.position.set(e.x,.09,e.z),i.group.rotation.y=n.phase,i.group.scale.setScalar(t*.35),i.material.color.copy(v_),i.material.opacity=.72,i.discMaterial.opacity=.09,i.group.visible=!0,Ie.add(i.group),Jl.push(i),i):null}function t0(n){if(!n||!n.active)return;n.active=!1,n.owner=null,n.group.visible=!1,Ie.remove(n.group);let e=Jl.indexOf(n);e!==-1&&Jl.splice(e,1)}function jl(n){n.slamVisual&&t0(n.slamVisual),n.slamVisual=null,n.slamT=0,n.detailedModel&&(n.detailedModel.rotation.x=0),n.simpleModel&&(n.simpleModel.rotation.x=0),n.detailedParts?.armL&&n.simpleParts?.armL&&fa(n,0,0)}function o3(){for(let n=Jl.length-1;n>=0;n--){let e=Jl[n],t=e.owner;(!t||t.dead||t.dying||!v.enemies.includes(t))&&(t&&(t.slamVisual=null),t0(e))}}function a3(n,e){n.t+=e;let t=.5+.5*Math.sin(n.t*18);if(n.impacted){let i=Math.min(1,n.t/.38);n.group.scale.setScalar(n.radius*(1+i*.38)),n.material.opacity=(1-i)*.95,n.discMaterial.opacity=(1-i)*.28}else{let i=Math.min(1,n.t/$l),s=1-Math.pow(1-i,2);n.group.scale.setScalar(n.radius*(.35+s*.65)),n.material.color.lerpColors(v_,i3,i),n.material.opacity=.62+i*.28+t*.08,n.discMaterial.opacity=.07+i*.1+t*.025,n.group.rotation.y+=e*.18}}var l3=new sn(1,.13),__=new sn(1,.11);__.translate(.5,0,0);var c3=new ft({color:1313290,transparent:!0,opacity:.72,depthWrite:!1});function u3(n){let e=new Ve,t=new N(l3,c3);t.scale.set(1.3*Math.min(n,2.2),1,1),e.add(t);let i=new ft({color:6477898,transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1}),s=new N(__,i);return s.position.z=.001,s.scale.x=1.24*Math.min(n,2.2),s.position.x=-.62*Math.min(n,2.2),e.add(s),e.renderOrder=10,s.renderOrder=11,{group:e,fill:s,fillMat:i,width:1.24*Math.min(n,2.2)}}function E_(){return Math.random()*Math.PI*2}function n0(n){let e=Math.random();return n<=2?"grunt":n<=3?e<.72?"grunt":"runner":n<=6?e<.42?"grunt":e<.72?"runner":"bomber":n<=9?e<.34?"brute":e<.58?"runner":e<.8?"bomber":"grunt":n<=12?e<.2?"champion":e<.46?"brute":e<.66?"acolyte":e<.84?"bomber":"runner":e<.32?"champion":e<.56?"brute":e<.72?"acolyte":"runner"}function e0(n,e={}){let t=Cr[n],i=e.size||t.size,{group:s,parts:r,detailedParts:o,simpleParts:a,detailedModel:l,simpleModel:c,ownedMaterials:h}=ZC(e.visualType||n,i),u=e.pos?e.pos.clone():(()=>{let b=E_(),C=ko(v.castleLevel);return new E(Math.cos(b)*C,0,Math.sin(b)*C)})(),d=e.wave||v.wave,f=1+(d-1)*hy,g=sM(v.difficulty),x=d>Vn?cM(d):1,m=Math.round((e.hp||t.hp)*(e.hpFlat?1:f)*g*x),p=e.reward!==void 0?e.reward:t.reward;s.position.copy(u),s.rotation.y=Math.atan2(-u.x,-u.z),s.scale.setScalar(.01),Ie.add(s);let M=u3(i);M.group.position.y=1.7*i+.55,M.group.visible=!1,Ie.add(M.group);let y={mesh:s,parts:r,type:n,size:i,ownedMaterials:h,detailedParts:o,simpleParts:a,detailedModel:l,simpleModel:c,simpleLod:!1,hp:m,maxHp:m,reward:p,speed:t.speed*(.94+Math.random()*.12),dmg:e.dmg||t.dmg,dead:!1,dying:!1,deathT:0,spawnT:0,phase:Math.random()*Math.PI*2,attackT:0,attackCd:0,attacking:!1,didHit:!1,slamT:0,slamVisual:null,flash:0,slowUntil:0,slowFactor:1,stunUntil:0,armor:n==="champion"?.32:n==="brute"?.22:n==="acolyte"?.1:0,healCd:1.5+Math.random(),bossPhase:1,bar:M,light:null,isBoss:!!e.boss,bossName:e.bossName||null,isWarlord:n==="warlord"&&e.boss};Jh(y,!y.isBoss),y_(y);let _=parseInt(t.tint.replace("#",""),16),D=new E(u.x,.12,u.z);return we.emit("splash",D,{color:[14218495,12577023,16777215],count:e.boss?18:7,speed:4.5,up:2.2,size:.95,life:.7}),we.emit("dust",new E(u.x,.2,u.z),{color:10127984,count:e.boss?14:6}),e.boss&&(Vt(new E(u.x,.2,u.z),_,5.5,.7),y.light=Sy(_,3.2,24),(!v.activeBoss||v.activeBoss.dying)&&(v.activeBoss=y),Ue("bossRoar")),v.enemies.push(y),y}function sr(n,e={}){let t=(n||[]).filter(o=>Cr[o]);if(t.length===0||v.enemies.length+_s()+t.length>ol)return null;let i=e.angle!==void 0?e.angle:E_(),s=e.wave||v.wave;return tM({angle:i,types:t,boss:!!e.boss,onLand:o=>{let a=e.spread!==void 0?e.spread:e.boss?.8:2.6;for(let l of t){if(v.enemies.length>=ol)break;let c=Math.random()*Math.PI*2,h=a*Math.sqrt(Math.random());e0(l,{...e.enemyOpts,wave:s,pos:new E(o.x+Math.cos(c)*h,0,o.z+Math.sin(c)*h)})}}})}function h3(n){let e=Array.isArray(n)?n:Array.from({length:Math.max(1,n||1)},()=>n0(v.wave)),t=Oy(v.wave),i=null;for(let s=0;s<e.length;s+=t)i=sr(e.slice(s,s+t))||i;return i}function S_(n){return sr([n||n0(v.wave)])}function i0(){let n=Math.floor((v.wave-1)/5)+1,e=sr(["champion"],{boss:!0,spread:.5,enemyOpts:{boss:!0,bossName:"CHAMPION OF STAGE "+n,hp:Wu.hpPerStage*n,hpFlat:!0,size:Wu.size+n*.12,reward:Wu.reward,dmg:26}});return e&&Kt("MINI BOSS","A CHAMPION ENTERS THE FRAY","danger"),e}function s0(){let n=sr(["giant"],{boss:!0,spread:.6,enemyOpts:{boss:!0,bossName:"SIEGE GIANT",hp:Math.round(ul.hpBase*(1+(v.wave-1)*ul.hpPerWave)),hpFlat:!0,size:ul.size+v.wave*.05,reward:ul.reward,dmg:38}});return n&&Kt("SIEGE GIANT","BRACE THE GATES!","danger"),n}function r0(){let n=sr(["warlord"],{boss:!0,spread:.7,enemyOpts:{boss:!0,bossName:"THE BANDIT WARLORD",hp:Cr.warlord.hp,hpFlat:!0,size:Cr.warlord.size,reward:Cr.warlord.reward,dmg:120}});return n&&Kt("THE WARLORD","SLAY HIM TO END THE SIEGE","boss"),n}function T_(n){if(!v.waveActive)return;v.spawnTimer+=n;let e=v.wave,t=v.endless||v.totalWaves===1/0,i=t&&e>Vn,s=Math.min(lh(e),v.timeInWave>40?.45:1/0),r=Sl(e),o=v.enemies.length+_s(),a=ol-o;if(!t&&e===Vn&&!v.warlordSpawned&&v.timeInWave>1.5&&a>=1?r0()&&(v.warlordSpawned=!0):!i&&sy.includes(e)&&!v.miniBossSpawned&&v.timeInWave>1&&a>=1&&i0()&&(v.miniBossSpawned=!0),v.spawnTimer>=s&&a>0&&v.spawnRemaining>0){let c=Math.min(r,v.spawnRemaining,a),h=_s(),u=Array.from({length:c},()=>n0(e));h3(u);let d=_s()-h;d>0&&(v.spawnRemaining-=d,v.spawnTimer=0)}(i?e%5===0:ry.includes(e))&&v.spawnRemaining<=0&&!v.roundBossSpawned&&a>=1&&s0()&&(v.roundBossSpawned=!0)}function rr(n,e,t={}){if(!n||n.dead||n.dying)return!1;let i=e;if(n.armor>0&&(t.damageType==="cannon"?i*=1+n.armor*1.5:(t.damageType==="arrow"||t.damageType==="hero")&&!t.armorPierce&&(i*=1-n.armor)),i=Math.max(1,Math.round(i)),n.hp-=i,n.flash=.09,n.barVisibleUntil=v.elapsed+3,t.showNumber!==!1){let s=n.mesh.position.clone();s.y=1.6*n.size,Ni(s,String(i),{color:t.critical?"#ffd24a":t.color||"#ffe0b0",size:i>=40?1.5:i>=15?1.15:.95})}return n.hp<=0?(d3(n,t),!0):!1}function d3(n,e={}){if(n.dying||n.dead)return;jl(n),n.dying=!0,n.deathT=0,n.bar.group.visible=!1;let t=n.mesh.position,i=parseInt(Cr[n.type].tint.replace("#",""),16);v.kills++,v.waveKills++,Vh(v,Math.max(1,Math.round(n.reward*.35))+(n.isBoss?12:0)),v.combo++,v.comboTimer=Yu,v.bestCombo=Math.max(v.bestCombo,v.combo);let s=1+Math.min(v.combo,25)*.08,r=Math.max(1,Math.round(n.reward*oM(v.difficulty)));v.score+=Math.round(r*s*10),v.gold+=r,v.totalGoldEarned+=r,Math.random()<.45&&Ue("coin"),Ni(new E(t.x,2.4*n.size,t.z),"+"+r,{color:"#ffd24a",size:1.05}),n.isBoss?(Ue("bossDeath"),ql(.12,.2),Rn(.8,.7),Vt(new E(t.x,.3,t.z),16760928,14,.9),we.emit("impact",new E(t.x,1.5,t.z),{color:16760928,count:26,speed:14}),we.emit("soul",new E(t.x,2,t.z),{color:11461887,count:16,speed:3}),we.emit("smoke",new E(t.x,1.2,t.z),{color:5588019,count:12}),Zi("#ffcf7a",.25,.5),aa(new E(t.x,0,t.z),7),n.isWarlord&&(v.warlordKilled=!0,Zi("#ffffff",.5,1),Vt(new E(t.x,.3,t.z),16777215,26,1.4))):(Ue("death"),we.emit("soul",new E(t.x,1.2*n.size,t.z),{color:i,count:6,speed:1.6}),we.emit("dust",new E(t.x,.3,t.z),{color:10127984,count:5}),we.emit("gold",new E(t.x,1.2,t.z),{color:16760896,count:4})),n.light&&(wp(n.light),n.light=null),v.activeBoss===n&&(v.activeBoss=v.enemies.find(o=>o!==n&&o.isBoss&&!o.dying)||null),mt(0)}function f3(n){jl(n),Ie.remove(n.mesh),Ie.remove(n.bar.group);for(let t of n.ownedMaterials)t.dispose();n.light&&wp(n.light),n.bar.fillMat.dispose();let e=v.enemies.indexOf(n);e!==-1&&v.enemies.splice(e,1)}function ed(n,e,t){let i=Math.max(1,Math.round(n*rM(v.difficulty)));v.waveLeaks++,v.baseHP=Math.max(0,v.baseHP-i),Fl(16719904),EM(t?.75:.35),Rn(t?.6:.22,.35),Ue("castleHit"),Vt(new E(0,1,0),16728112,5,.5),we.emit("dust",new E(0,2,0),{color:10522752,count:8}),Ni(new E(0,6+v.castleLevel*.5,0),"-"+i,{color:"#ff5a4a",size:1.35}),mt(0),v.baseHP<=0&&(v.baseHP=0)}function p3(n){if(!n.isWarlord)return;let e=n.hp/n.maxHp;if(e<=.33&&n.bossPhase<3){n.bossPhase=3,n.speed*=1.3,n.dmg=Math.round(n.dmg*1.2),n.bossName="THE WARLORD \xB7 UNBOUND",Kt("WARLORD ENRAGED","THE FINAL HUNT BEGINS","boss"),Vt(new E(n.mesh.position.x,.3,n.mesh.position.z),16719920,16,.9);for(let t=0;t<3;t++){let i=Math.random()*Math.PI*2;e0("runner",{wave:v.wave,pos:new E(n.mesh.position.x+Math.cos(i)*3,0,n.mesh.position.z+Math.sin(i)*3)})}}else if(e<=.66&&n.bossPhase<2){n.bossPhase=2,n.speed*=1.25,n.bossName="THE WARLORD \xB7 AWAKENED",Kt("WARLORD AWAKENED","REINFORCEMENTS ANSWER HIS CALL","boss"),Vt(new E(n.mesh.position.x,.3,n.mesh.position.z),16732192,12,.8);for(let t=0;t<2;t++){let i=Math.random()*Math.PI*2;e0("grunt",{wave:v.wave,pos:new E(n.mesh.position.x+Math.cos(i)*3,0,n.mesh.position.z+Math.sin(i)*3)})}}}function m3(n,e){if(n.healCd-=e,n.healCd>0)return;let t=null,i=81;for(let r of v.enemies){if(r===n||r.dead||r.dying||r.hp>=r.maxHp)continue;let o=n.mesh.position.distanceToSquared(r.mesh.position);o<i&&(i=o,t=r)}if(!t)return;let s=Math.round(7+v.wave*1.2);t.hp=Math.min(t.maxHp,t.hp+s),Gh(new E(n.mesh.position.x,2.2*n.size,n.mesh.position.z),new E(t.mesh.position.x,1.4*t.size,t.mesh.position.z),10217579,.22,.08,1),we.emit("magic",t.mesh.position,{color:10217579,count:5,speed:2}),Ni(new E(t.mesh.position.x,1.8*t.size,t.mesh.position.z),"+"+s,{color:"#9be86b",size:.85}),n.healCd=3.4}function jh(n,e,t){n.detailedParts.armR.rotation.x=e,n.simpleParts.armR.rotation.x=e,t!==void 0&&(n.detailedParts.armR.rotation.z=t,n.simpleParts.armR.rotation.z=t)}function fa(n,e,t=0){jh(n,e,t),n.detailedParts.armL.rotation.x=e,n.simpleParts.armL.rotation.x=e,n.detailedParts.armL.rotation.z=-t,n.simpleParts.armL.rotation.z=-t}function g3(n,e,t,i){if(!t)return jl(n),fa(n,0,0),!1;if(!n.slamVisual&&(n.slamT=0,n.didHit=!1,n.slamVisual=r3(n,n.mesh.position,3.25+n.size*.42),!n.slamVisual))return!1;n.slamT+=e;let s=n.slamVisual;a3(s,e);let r=$l+h_+jC,o=n.mesh.position;if(x3(n),n.slamT<$l){let a=n.slamT/$l,l=a*a*(3-2*a);fa(n,-2.72*l,-.16*l),n.detailedModel.rotation.x=-.13*l,n.simpleModel.rotation.x=-.13*l}else{if(!n.didHit&&(n.didHit=!0,s.impacted=!0,s.t=0,ed(n.dmg,o,!0),Vt(s.group.position,16738866,9.5,.62),we.emit("impact",s.group.position,{color:[16760928,16742965,9267786],count:22,speed:13,up:5}),we.emit("dust",s.group.position,{color:10124376,count:12,speed:4}),aa(s.group.position,5.5),Rn(.72,.58),ql(.075,.4),Zi("#ffb066",.12,.32),v.baseHP<=0))return i(),!0;let a=Math.min(1,(n.slamT-$l)/h_);fa(n,.72*a,.08),n.detailedModel.rotation.x=.08*(1-a),n.simpleModel.rotation.x=.08*(1-a),n.slamT>=r&&(t0(s),n.slamVisual=null,n.slamT=0,n.didHit=!1,n.attacking=!1,n.attackT=0,fa(n,0,0),n.detailedModel.rotation.x=0,n.simpleModel.rotation.x=0)}return Qh(n),n.light&&n.light.position.set(o.x,2+n.size,o.z),!0}function x3(n){let e=n.mesh.position;n.mesh.rotation.y=Math.atan2(-e.x,-e.z)}function y3(n,e){let t=n.detailedParts,i=n.simpleParts;t.legL.rotation.x=i.legL.rotation.x=e*.55,t.legR.rotation.x=i.legR.rotation.x=-e*.55,t.armL.rotation.x=i.armL.rotation.x=-e*.45,t.armR.rotation.x=i.armR.rotation.x=e*.45,t.armR.rotation.z=i.armR.rotation.z=0}function Qm(n,e,t=null,i=null,s=null){let r=n.detailedParts.flashMats,o=n.simpleParts.flashMats;for(let a=0;a<r.length;a++)t!==null&&r[a].emissive.setRGB(t,i,s),r[a].emissiveIntensity=e;for(let a=0;a<o.length;a++)t!==null&&o[a].emissive.setRGB(t,i,s),o[a].emissiveIntensity=e}function o0(n,e){let t=v.elapsed;o3();for(let i=v.enemies.length-1;i>=0;i--){let s=v.enemies[i],r=s.mesh;if(s.dying){s.deathT+=n;let u=s.deathT;r.rotation.z=Math.min(1.45,u*3.2),u>.55&&(r.position.y=-Math.max(0,u-.55)*1.8),u>1.35&&f3(s);continue}if(s.spawnT<.3){s.spawnT+=n;let u=Math.min(1,s.spawnT/.3),d=1+2.2*Math.pow(1-u,3)-2.2*Math.pow(1-u,2);r.scale.setScalar(Math.max(.01,d*s.size/s.size)*Math.min(1,s.spawnT*4))}else r.scale.x<1&&r.scale.setScalar(1);y_(s);let o=r.position,a=Math.hypot(o.x,o.z),l=t<s.stunUntil,c=t<s.slowUntil,h=s.speed*(c?s.slowFactor:1);if(p3(s),l){(s.slamVisual||s.attacking)&&(jl(s),s.attacking=!1,s.attackT=0,s.didHit=!1),jh(s,-.4,-.25),Qh(s),s.light&&s.light.position.set(o.x,2+s.size,o.z);continue}if((s.type==="giant"||s.type==="warlord")&&a<30&&(s.phase+=n*h*3,Math.sin(s.phase)>.98&&Rn(.08,.15)),s.attacking){s.attackT+=n;let u=a<hp+(s.isBoss?2:0);if(!u)jl(s),fa(s,0,0),s.attacking=!1,s.attackT=0,s.didHit=!1;else{if(s.type==="giant"&&s.isBoss&&g3(s,n,u,e))continue;let d=s.isBoss?.55:.35,f=d+.22;if(s.attackT<d)jh(s,-1.9*(s.attackT/d),-.3);else if(s.attackT<f){if(!s.didHit&&(s.didHit=!0,ed(s.dmg,o,s.isBoss),s.isBoss&&(Vt(new E(0,.3,0),16732208,8,.5),we.emit("impact",new E(0,3,0),{color:16742976,count:12})),v.baseHP<=0)){e();return}jh(s,.7)}else s.attackT>(s.isBoss?1.9:1.35)&&(s.attackT=0,s.didHit=!1);r.rotation.y=Math.atan2(-o.x,-o.z),Qh(s),s.light&&s.light.position.set(o.x,2+s.size,o.z);continue}}if(!l){let u=-o.x/(a||1),d=-o.z/(a||1),f=Math.sin(t*1.2+s.phase)*.16;o.x+=(u+-d*f)*h*n,o.z+=(d+u*f)*h*n,s.phase+=n*h*2.6;let g=Math.sin(s.phase);if(y3(s,g),r.position.y=Math.abs(Math.sin(s.phase))*.06*(s.size*.7+.3),s.detailedParts.cape||s.simpleParts.cape){let x=.1+Math.sin(t*5+s.phase)*.06;s.detailedParts.cape&&(s.detailedParts.cape.rotation.x=x),s.simpleParts.cape&&(s.simpleParts.cape.rotation.x=x)}if(s.detailedParts.fuseSpark||s.simpleParts.fuseSpark){let x=.35*(.8+Math.sin(t*20)*.2);s.detailedParts.fuseSpark&&s.detailedParts.fuseSpark.scale.setScalar(x),s.simpleParts.fuseSpark&&s.simpleParts.fuseSpark.scale.setScalar(x)}r.rotation.y=Math.atan2(u,d)}if(s.type==="acolyte"&&m3(s,n),s.type==="bomber"&&a<6.5){if(v3(s),v.baseHP<=0){e();return}continue}if(a<hp+(s.isBoss?2:0)){if(s.type==="runner"){if(ed(s.dmg,o,!1),s.hp=0,s.dying=!0,s.deathT=0,s.bar.group.visible=!1,we.emit("dust",o,{color:10127984,count:8}),v.baseHP<=0){e();return}continue}s.attacking=!0,s.attackT=0,s.didHit=!1}if(s.flash>0){s.flash-=n;let u=Math.max(0,s.flash/.09);Qm(s,u*1.2,u,u,u)}else Qm(s,0);c&&Qm(s,.5,.15,.4,.7),Qh(s),s.light&&s.light.position.set(o.x,2+s.size,o.z)}}function Qh(n){let e=Math.max(0,n.hp/n.maxHp),t=n.bar;if(t.group.visible=n.isBoss||e<.999&&v.elapsed<(n.barVisibleUntil||0),!t.group.visible)return;t.group.position.set(n.mesh.position.x,1.7*n.size+.55+Math.max(0,n.mesh.position.y),n.mesh.position.z),t.fill.scale.x=Math.max(1e-4,t.width*e);let i=e>.6?6477898:e>.3?15253546:14698042;t.fillMat.color.setHex(i),t.group.quaternion.copy(Bt.quaternion)}function v3(n){let e=n.mesh.position;Ue("explosion"),Rn(.45,.5),Vt(new E(e.x,.3,e.z),16751168,8,.6),we.emit("impact",new E(e.x,1.4,e.z),{color:[16760896,16738848],count:22,speed:13}),we.emit("smoke",new E(e.x,1.2,e.z),{color:5917242,count:10}),aa(e,4.5),ed(n.dmg,e,!1),n.dying=!0,n.deathT=0,n.bar.group.visible=!1,n.hp=0}var M3=new an(.16,0),_3=new Gt(.22,10,8),C_=new Te(.022,.022,.9,5);C_.rotateX(Math.PI/2);var l0=new Qe(.085,.34,6);l0.rotateX(Math.PI/2);l0.translate(0,0,.62);var c0=new Ut(.01,.16,.22),P_=c0.clone();P_.translate(0,0,-.42);var u0=c0.clone();u0.rotateZ(Math.PI/2);u0.translate(0,0,-.42);var I_=[{geometry:C_,color:6965802},{geometry:l0,color:10133672},{geometry:P_,color:15262936},{geometry:u0,color:15262936}],h0=Yi(I_.map(n=>n.geometry),!1),id=new Float32Array(h0.attributes.position.count*3),nd=new pe,w_=0;for(let n of I_){nd.setHex(n.color);let e=n.geometry.attributes.position.count;for(let t=0;t<e;t++){let i=(w_+t)*3;id[i]=nd.r,id[i+1]=nd.g,id[i+2]=nd.b}w_+=e,n.geometry.dispose()}c0.dispose();h0.setAttribute("color",new gt(id,3));var E3=new te({color:16777215,vertexColors:!0,metalness:.4,roughness:.5,emissive:2365964,emissiveIntensity:.3}),S3={hero:new te({color:9427199,emissive:4897023,emissiveIntensity:2.2,metalness:.5,roughness:.2}),castle:new te({color:16769162,emissive:16758832,emissiveIntensity:2,metalness:.7,roughness:.2}),frost:new te({color:10476799,emissive:4894463,emissiveIntensity:1.8,metalness:.2,roughness:.15}),cannon:new te({color:2368554,metalness:.6,roughness:.35})},a0=Jt(),T3={arrow:new Rt({map:a0,color:16770736,transparent:!0,opacity:.85,blending:$e,depthWrite:!1}),hero:new Rt({map:a0,color:8048895,transparent:!0,opacity:.95,blending:$e,depthWrite:!1}),castle:new Rt({map:a0,color:16765040,transparent:!0,opacity:.9,blending:$e,depthWrite:!1})},L_=["arrow","hero","castle","frost","cannon"],D_=Object.fromEntries(L_.map(n=>[n,[]])),sd=new Set,w3={arrow:42,hero:46,frost:32,castle:36},b_=.55;function b3(n){let e=n==="cannon"?_3:n==="frost"?M3:h0,t=n==="arrow"?E3:S3[n],i=new N(e,t);if(i.castShadow=n==="cannon",n==="frost"&&(i.scale.z=1.9),n==="arrow"||n==="hero"||n==="castle"){let s=new kt(T3[n]);s.scale.setScalar(.7),s.position.z=.62,i.add(s)}return i}function A3(n){let e=L_.includes(n)?n:"arrow",t=D_[e].pop();return t||(t={mesh:b3(e),poolKind:e,kind:null,target:null,damage:0,damageType:e,critical:!1,armorPierce:!1,speed:0,slow:0,slowDur:0,aoe:0,trailT:0,life:0,dir:new E(0,0,1),start:new E,dest:new E,t:0,duration:1,arcH:0}),t.damageType=e,t.critical=!1,t.armorPierce=!1,t}function Ql(n){sd.delete(n)&&(Ie.remove(n.mesh),n.target=null,D_[n.poolKind].push(n))}var A_={arrow:{color:16767392,count:8,speed:7,life:.35},hero:{color:9427199,count:12,speed:9,life:.45},castle:{color:16765024,count:10,speed:8,life:.4},frost:{color:10476799,count:14,speed:6,life:.6},cannon:{color:16752704,count:26,speed:14,life:.6}},R3={arrow:{color:16769184,count:3,size:1.2},hero:{color:16769184,count:3,size:1.2},castle:{color:16769184,count:3,size:1.2},frost:{color:10476799,count:3,size:1.2},cannon:{color:16752704,count:3,size:2.2}},R_={hero:{color:8048895,count:1,size:.45,life:.35,speed:.2},castle:{color:16765040,count:1,size:.45,life:.35,speed:.2},frost:{color:10476799,count:1,size:.45,life:.35,speed:.2}};function N_(n,e){let t=A_[n]||A_.arrow;we.emit("impact",e,t),n==="frost"?(we.emit("frost",e,{color:12577535,count:8}),Ue("frostHit")):n==="cannon"?(Ue("explosion"),we.emit("smoke",e,{color:6969930,count:8}),Vt(e,16752704,4,.35),Rn(.28,.3)):Ue("arrowHit")}function C3(n,e,t,i,s=!0,r="cannon",o=!1,a=!1){N_("cannon",n),Rn(.3,.35),aa(n,e*1.6);let l=v.enemies;for(let c of l){if(c.dead||c.dying)continue;let h=Math.hypot(c.mesh.position.x-n.x,c.mesh.position.z-n.z);if(h<=e){let u=1-h/e*.45;rr(c,Math.round(t*u),{color:"#ffb060",showNumber:s,damageType:r,critical:o,armorPierce:a})}}we.emit("flash",n,{color:i,count:6,size:3.4})}function pa(n,e,t,i={}){if(!t||!t.mesh)return;let s=A3(n),r=s.mesh;if(r.position.copy(e),r.rotation.set(0,0,0),Ie.add(r),we.emit("flash",e,R3[s.poolKind]),s.kind=n,s.target=t,s.damage=i.damage||10,s.damageType=i.damageType||s.poolKind,s.critical=!!i.critical,s.armorPierce=!!i.armorPierce,s.speed=n==="cannon"?0:w3[n]||36,s.slow=i.slow||0,s.slowDur=i.slowDur||0,s.aoe=i.aoe||0,s.trailT=0,s.life=0,s.dir.set(0,0,1),n==="cannon"){s.start.copy(e),s.dest.copy(t.mesh.position),s.dest.y=0;let o=s.start.distanceTo(s.dest);s.t=0,s.duration=Math.max(.45,o/26),s.arcH=Math.max(4,o*.32),s.aoe=i.aoe||3.2,s.damage=i.damage||24}return v.projectiles.push(s),sd.add(s),s}var ec=new E,Xr=new E,tc=new E;function H_(n){if(sd.size!==v.projectiles.length)for(let e of sd)v.projectiles.indexOf(e)===-1&&Ql(e);for(let e=v.projectiles.length-1;e>=0;e--){let t=v.projectiles[e];if(t.kind==="cannon"){t.t+=n/t.duration;let s=Math.min(1,t.t);Xr.lerpVectors(t.start,t.dest,s),Xr.y=t.start.y+Math.sin(Math.PI*s)*t.arcH-s*(t.start.y-.25),t.mesh.position.copy(Xr),t.mesh.rotation.x+=n*12,t.mesh.rotation.z+=n*7,t.trailT-=n,t.trailT<=0&&(t.trailT=.045,we.emit("smoke",Xr,{color:9075304,count:1,size:1.4,life:.8,speed:.4}),we.emit("ember",Xr,{color:16752704,count:1,size:.4,life:.4})),s>=1&&(C3(Xr,t.aoe,t.damage,16752704,!0,t.damageType,t.critical,t.armorPierce),v.projectiles.splice(e,1),Ql(t));continue}t.life+=n;let i=t.target;if(i&&!i.dead&&!i.dying&&i.mesh.parent){let s=Xr.copy(i.mesh.position);if(s.y=1*i.size,ec.subVectors(s,t.mesh.position),ec.length()<.55+.35*i.size){if(tc.copy(s),tc.y=1.1*i.size,rr(i,t.damage,{color:t.kind==="frost"?"#bfeaff":t.kind==="hero"?"#9fdcff":"#ffe0b0",critical:t.critical,armorPierce:t.armorPierce,damageType:t.damageType}),t.slow>0&&(i.slowUntil=v.elapsed+t.slowDur,i.slowFactor=i.isBoss?Math.max(b_,t.slow):t.slow,we.emit("frost",tc,{color:10476799,count:5}),t.aoe>0))for(let o of v.enemies)o===i||o.dead||o.dying||o.mesh.position.distanceTo(i.mesh.position)<t.aoe&&(o.slowUntil=v.elapsed+t.slowDur*.8,o.slowFactor=Math.min(o.slowFactor,t.slow),o.isBoss&&(o.slowFactor=Math.max(b_,o.slowFactor)),we.emit("frost",o.mesh.position,{color:10476799,count:2}));N_(t.kind,tc),we.emit("flash",tc,{color:t.kind==="frost"?10476799:16770736,count:2,size:1.6}),v.projectiles.splice(e,1),Ql(t);continue}else ec.normalize(),t.mesh.position.addScaledVector(ec,t.speed*n),t.mesh.lookAt(s),t.dir.copy(ec)}else if(t.mesh.position.addScaledVector(t.dir,t.speed*n),t.life>1.4){v.projectiles.splice(e,1),Ql(t);continue}t.trailT-=n,t.trailT<=0&&t.kind!=="arrow"&&(t.trailT=.035,we.emit("ember",t.mesh.position,R_[t.kind]||R_.castle)),t.mesh.position.length()>95&&(v.projectiles.splice(e,1),Ql(t))}}var ar=new te({map:Ir(),normalMap:fl(),normalScale:new J(.8,.8),roughness:.94,color:14074016}),or=new te({map:gs(),roughness:.88,color:14205088}),O_=new te({map:$u(),roughness:.8}),B_=new te({map:Ju(),side:ot,roughness:.85}),ic=new te({color:14198846,metalness:.9,roughness:.3}),sc=new te({map:Ir(),color:9076080,roughness:.9}),U_=1.24,P3=new Set([ar,or,O_,B_,ic,sc]);function F_(n){let e=new Set,t=new Set;for(let i of[...n.children])n.remove(i),i.traverse?.(s=>{s.geometry&&e.add(s.geometry),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>t.add(r))});e.forEach(i=>i.dispose()),t.forEach(i=>{P3.has(i)||i.dispose()})}function Oi(n){return n.castShadow=!0,n.receiveShadow=!0,n}function I3(n,e){n.updateWorldMatrix(!0,!0);let t=n.matrixWorld.clone().invert(),i=new Set(e.filter(Boolean)),s=new Map;n.traverse(a=>{if(!a.isMesh||Array.isArray(a.material)||a.material.transparent)return;for(let c=a;c&&c!==n;c=c.parent)if(i.has(c))return;let l=[a.material.uuid,a.castShadow,a.receiveShadow,a.renderOrder,a.layers.mask].join("|");s.has(l)||s.set(l,{material:a.material,meshes:[]}),s.get(l).meshes.push(a)});let r=new Set;for(let a of s.values()){if(a.meshes.length<2)continue;let l=a.meshes.map(d=>{let f=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone();if(f.applyMatrix4(t.clone().multiply(d.matrixWorld)),f.getAttribute("normal")||f.computeVertexNormals(),!f.getAttribute("uv")){let g=f.getAttribute("position").count;f.setAttribute("uv",new Re(new Float32Array(g*2),2))}return f.clearGroups(),f}),c=Yi(l,!1);if(l.forEach(d=>d.dispose()),!c)continue;c.computeBoundingBox(),c.computeBoundingSphere();let h=a.meshes[0],u=new N(c,a.material);u.castShadow=h.castShadow,u.receiveShadow=h.receiveShadow,u.renderOrder=h.renderOrder,u.layers.mask=h.layers.mask,n.add(u);for(let d of a.meshes)r.add(d.geometry),d.removeFromParent()}let o=new Set;n.traverse(a=>{a.isMesh&&a.geometry&&o.add(a.geometry)}),r.forEach(a=>{o.has(a)||a.dispose()})}function L3(n){let e=n.group,t=n.level,i=Mt.archer.color,s=2.4+t*.42,r=Oi(new N(new Te(.95,1.14,1.1,12),ar));r.position.y=.55,e.add(r);let o=Oi(new N(new Te(1.12,1.12,.26,12),ar));o.position.y=1.18,e.add(o);let a=new N(new Te(.62,.78,s,10),or);a.position.y=1.3+s/2,a.castShadow=!0,e.add(a);for(let g=0;g<4;g++){let x=g/4*Math.PI*2+Math.PI/4,m=new N(new Te(.055,.065,s*.9,5),or);m.position.set(Math.cos(x)*.72,1.3+s*.45,Math.sin(x)*.72),m.rotation.z=-Math.cos(x)*.06,m.rotation.x=Math.sin(x)*.06,m.castShadow=!0,e.add(m)}let l=1.3+s,c=Oi(new N(new Te(1,.98,.2,12),or));c.position.y=l,e.add(c);let h=new N(new wt(.94,.035,5,20),or);h.rotation.x=Math.PI/2,h.position.y=l+.42,e.add(h);let u=new N(new Qe(1.22,1.35+t*.06,10),O_);u.position.y=l+.85+(1.35+t*.06)/2-.4,u.castShadow=!0,e.add(u);let d=t>=3?2:1,f=new Ve;f.position.y=l+.1,e.add(f);for(let g=0;g<d;g++){let x=g/d*Math.PI*2+.4,m=new Ve;m.position.set(Math.cos(x)*.55,0,Math.sin(x)*.55);let p=new N(new kn(.11,.24,4,8),new te({color:3824170,roughness:.7}));p.position.y=.26,p.castShadow=!0,m.add(p);let M=new N(new Gt(.085,8,8),new te({color:15251850,roughness:.65}));M.position.y=.5,m.add(M);let y=new N(new Qe(.1,.14,6),new te({color:2771486,roughness:.8}));y.position.y=.56,m.add(y);let _=new N(new wt(.15,.018,5,10,Math.PI),or);_.position.set(.14,.28,.06),_.rotation.z=-Math.PI/2,m.add(_);let D=new kt(new Rt({map:Jt(),color:i,transparent:!0,blending:$e,depthWrite:!1,opacity:.8}));D.scale.setScalar(.42),D.position.y=.62,m.add(D),f.add(m)}if(n.archers=f,t>=3){let g=new N(new Te(.035,.035,1.3,5),or);g.position.y=u.position.y+1.2,e.add(g);let x=new N(new sn(.55,.34),B_);x.geometry.translate(.275,0,0),x.position.set(0,g.position.y+.4,0),e.add(x),n.flag=x}n.fireY=l+.9}function D3(n){let e=n.group,t=n.level,i=Mt.cannon.color,s=Oi(new N(new Te(1.15,1.3,1.2,14),ar));s.position.y=.6,e.add(s);let r=Oi(new N(new Te(1.22,1.22,.28,14),ar));r.position.y=1.26,e.add(r);for(let f=0;f<6;f++){let g=f/6*Math.PI*2,x=new N(new Ut(.5,.62,.12),ar);x.position.set(Math.cos(g)*1.14,.62,Math.sin(g)*1.14),x.rotation.y=-g+Math.PI/2,x.castShadow=!0,e.add(x)}let o=new Ve;o.position.y=1.55,e.add(o);let a=Oi(new N(new Ut(1.15,.55,1),or));a.position.y=.16,o.add(a);let l=Oi(new N(new Te(.55,.62,.22,10),ar));l.position.y=.5,o.add(l);let c=new Ve;c.position.y=.28,o.add(c);let h=t>=4?[-.26,.26]:[0],u=1.3+t*.2;h.forEach(f=>{let g=new N(new Te(.16,.21,u,10),sc);g.rotation.x=Math.PI/2,g.position.set(f,0,u/2-.1),g.castShadow=!0,c.add(g);let x=new N(new wt(.19,.035,5,10),ic);x.position.set(f,0,u-.1),c.add(x);let m=new N(new Te(.18,.18,.12,10),ic);m.rotation.x=Math.PI/2,m.position.set(f,0,u-.04),c.add(m)});let d=new kt(new Rt({map:Jt(),color:i,transparent:!0,blending:$e,depthWrite:!1,opacity:.9}));d.position.y=.72,d.scale.setScalar(.9),o.add(d),n.turret=o,n.barrelGroup=c,n.barrelLen=u,n.recoil=0,n.fireY=1.85}function N3(n){let e=n.group,t=n.level,i=Mt.frost.color,s=Oi(new N(new Te(.95,1.18,1.15,6),sc));s.position.y=.58,e.add(s);let r=Oi(new N(new Te(1,.95,.22,6),ar));r.position.y=1.26,e.add(r);let o=2.15+t*.14,a=new te({color:1192516,emissive:i,emissiveIntensity:1.2,metalness:.3,roughness:.12,transparent:!0,opacity:.94}),l=new N(new an(.62+t*.06,0),a);l.position.y=o,l.scale.y=1.9,l.castShadow=!0,e.add(l);let c=new kt(new Rt({map:Jt(),color:i,transparent:!0,blending:$e,depthWrite:!1,opacity:.45}));c.position.y=o,c.scale.setScalar(2),e.add(c);let h=new N(new wt(.95,.05,5,24),ic);h.rotation.x=Math.PI/2,h.position.y=1.55,e.add(h);let u=new Ve;u.position.y=o,e.add(u);let d=t>=3?4:2;for(let f=0;f<d;f++){let g=f/d*Math.PI*2,x=new N(new an(.16,0),new te({color:10476799,emissive:i,emissiveIntensity:1.4,metalness:.2,roughness:.2}));x.position.set(Math.cos(g)*(1+t*.05),0,Math.sin(g)*(1+t*.05)),x.scale.y=1.7,u.add(x)}n.crystal=l,n.shards=u,n.fireY=o;for(let f=0;f<4;f++){let g=f/4*Math.PI*2+.5,x=new N(new Qe(.16,.7+Math.random()*.4,5),new te({color:10476799,emissive:i,emissiveIntensity:.5,roughness:.25}));x.position.set(Math.cos(g)*1.28,.35,Math.sin(g)*1.28),x.rotation.z=Math.cos(g)*.3,x.rotation.x=-Math.sin(g)*.3,x.castShadow=!0,e.add(x)}}function H3(n){let e=n.group,t=n.level,i=Mt.tesla.color,s=Oi(new N(new Te(1.1,1.3,.8,8),sc));s.position.y=.4,e.add(s);let r=2.4+t*.3,o=Oi(new N(new Te(.38,.7,r,4),sc));o.position.y=.8+r/2,o.rotation.y=Math.PI/4,e.add(o),[.45,.75].forEach(d=>{let f=new N(new Te(.62+(1-d)*.08,.66+(1-d)*.08,.09,4),ic);f.position.y=.8+r*d,f.rotation.y=Math.PI/4,e.add(f)});let a=.8+r+.5,l=new N(new Po(.34+t*.03,1),new te({color:2755130,emissive:i,emissiveIntensity:2.6,metalness:.4,roughness:.2,flatShading:!0}));l.position.y=a,e.add(l);let c=new kt(new Rt({map:Jt(),color:i,transparent:!0,blending:$e,depthWrite:!1,opacity:.9}));c.position.y=a,c.scale.setScalar(1.9),e.add(c);let h=new Ve;h.position.y=a,e.add(h);let u=t>=3?2:1;for(let d=0;d<u;d++){let f=new N(new wt(.62,.028,5,24),new te({color:2755130,emissive:i,emissiveIntensity:1.6}));f.rotation.x=Math.PI/2+d*.5,f.rotation.y=d*.8,h.add(f)}n.orb=l,n.rings=h,n.fireY=a}function z_(n){switch(F_(n.group),n.archers=null,n.turret=null,n.crystal=null,n.shards=null,n.orb=null,n.rings=null,n.flag=null,n.type){case"archer":L3(n);break;case"cannon":D3(n);break;case"frost":N3(n);break;case"tesla":H3(n);break}I3(n.group,[n.turret,n.archers,n.crystal,n.shards,n.orb,n.rings,n.flag,n.barrelGroup])}var Xn=[];function U3(n,e){let t=new Ve;t.position.set(n.x,0,n.z),t.scale.setScalar(.01),Ie.add(t);let i=Mt[e],s=new N(new dn(.97,1,64),new ft({color:i.color,transparent:!0,opacity:.32,side:ot,depthWrite:!1,blending:$e}));s.rotation.x=-Math.PI/2,s.position.set(n.x,.08,n.z),s.visible=!1,Ie.add(s);let r={group:t,type:e,pad:n,level:1,cooldown:0,pos:new E(n.x,0,n.z),buildT:0,fireY:3,index:Xn.length,idlePhase:Math.random()*Math.PI*2,targetMode:"first",specialization:null,invested:i.cost,rangeRing:s};return z_(r),Xn.push(r),n.taken=!0,we.emit("dust",new E(n.x,.3,n.z),{color:11049088,count:16,speed:4}),Vt(new E(n.x,.15,n.z),16765024,3,.5),Ue("build"),r}function ga(n=null){if(!v.running||v.paused||v.draftOpen)return!1;let e=n||Lh(4.2)?.pad;if(!e||e.taken||!e.unlocked)return!1;let t=Mt[v.buildType];if(v.gold<t.cost)return Ue("warn"),!1;v.gold-=t.cost,v.towersBuilt++;let i=U3(e,v.buildType);return rd(i),mt(0),!0}function f0(){return fi(v.castleLevel).towerMaxLevel}function rd(n){v.selectedTower?.rangeRing&&(v.selectedTower.rangeRing.visible=!1),v.selectedTower=n||null,n&&(n.rangeRing.visible=!0,k_(n)),mt(0)}function k_(n){let e=Mt[n.type].levels[n.level-1].range;n.rangeRing.scale.setScalar(e)}function od(n){if(!n||!v.running||v.paused||v.draftOpen||n.level>=4)return!1;if(n.level>=f0())return Ue("warn"),Kt("UPGRADE LOCKED","UPGRADE THE CASTLE TO UNLOCK TOWER LEVEL "+(n.level+1),"warn"),!1;let e=Mt[n.type].upgradeCosts[n.level-1];return v.gold<e?(Ue("warn"),!1):(v.gold-=e,n.invested+=e,n.level++,z_(n),k_(n),we.emit("magic",new E(n.pos.x,2,n.pos.z),{color:Mt[n.type].color,count:14,speed:3}),Rn(.12,.2),Ue("upgrade"),O3(n,"LEVEL "+n.level,Mt[n.type].color),mt(0),!0)}function m0(n,e){if(!n||n.level<3||n.specialization)return!1;let t=cl[n.type];return t?.[e]?(n.specialization=e,n.rangeRing.material.color.setHex(16768906),we.emit("magic",new E(n.pos.x,2.5,n.pos.z),{color:16768906,count:22,speed:4}),Vt(new E(n.pos.x,.2,n.pos.z),16768906,4.5,.55),Ni(new E(n.pos.x,4.5,n.pos.z),t[e].name.toUpperCase(),{color:"#ffdf8a",size:1.1}),Ue("upgrade"),mt(0),!0):!1}function xa(){if(!v.running||v.paused||v.draftOpen)return;let n=v.selectedTower,e=n?Math.hypot(He.position.x-n.pos.x,He.position.z-n.pos.z):1/0;for(let t of Xn){let i=Math.hypot(He.position.x-t.pos.x,He.position.z-t.pos.z);i<5&&i<e&&(e=i,n=t)}n&&od(n)}var d0=["first","strong","last","close"];function G_(n){if(!n)return;let e=d0.indexOf(n.targetMode||"first");n.targetMode=d0[(e+1)%d0.length],Ue("uiClick"),mt(0)}function ad(n){if(!n||!v.running||v.paused||v.draftOpen)return!1;let e=Math.floor(n.invested*.65);v.gold+=e,F_(n.group),Ie.remove(n.group),Ie.remove(n.rangeRing),n.rangeRing.geometry.dispose(),n.rangeRing.material.dispose(),n.pad.taken=!1;let t=Xn.indexOf(n);return t!==-1&&Xn.splice(t,1),v.selectedTower===n&&(v.selectedTower=null),we.emit("gold",new E(n.pos.x,2,n.pos.z),{color:16765514,count:12}),Ni(new E(n.pos.x,3,n.pos.z),"+"+e+"g",{color:"#ffd24a"}),Ue("coin"),mt(0),!0}function O3(n,e,t){let i="#"+t.toString(16).padStart(6,"0");Ni(new E(n.pos.x,4.2,n.pos.z),e,{color:i,size:1.2})}function lr(n){Mt[n]&&(v.buildType=n,mt(0),Ue("uiClick"))}var nc=0;function p0(n,e,t,i="close"){let s=null,r=-1/0,o=e*e;for(let a of v.enemies){if(a.dead||a.dying||t&&t.has(a))continue;let l=a.mesh.position.x-n.x,c=a.mesh.position.z-n.z,h=l*l+c*c;if(h>o)continue;let u=Math.hypot(a.mesh.position.x,a.mesh.position.z),d;switch(i){case"first":d=-u;break;case"last":d=u;break;case"strong":d=a.hp+(a.isBoss?1e4:0);break;default:d=-h}d>r&&(r=d,s=a)}return s}function ma(n){let e=Math.random()<PM(v);return{damage:Math.round(n*RM(v)*(e?2:1)),critical:e}}function B3(n,e,t,i=!1){let s=new Set([t]),r=e.chain+(n.specialization==="overload"?2:0),o=n.specialization==="tempest"?11:8,a=new E(n.pos.x,n.fireY,n.pos.z),l=t,c=e.damage;for(let h=0;h<r&&l;h++){let u=new E(l.mesh.position.x,1.1*l.size,l.mesh.position.z);Gh(a,u,Mt.tesla.color,.16,.13,h===0?2:1),we.emit("flash",u,{color:13134847,count:2,size:1.6}),we.emit("magic",u,{color:13134847,count:4,speed:4}),rr(l,Math.round(c),{color:i?"#ffd24a":"#d9a4ff",showNumber:h===0}),n.specialization==="overload"&&Math.random()<.18&&(l.stunUntil=Math.max(l.stunUntil||0,v.elapsed+.45)),c*=.8,a=u;let d=null,f=o*o;for(let g of v.enemies){if(g.dead||g.dying||s.has(g))continue;let x=g.mesh.position.x-l.mesh.position.x,m=g.mesh.position.z-l.mesh.position.z,p=x*x+m*m;p<f&&(f=p,d=g)}d&&s.add(d),l=d}Ue("tesla"),n.orb&&n.orb.scale.setScalar(1.5)}function V_(n){nc+=n;for(let s of Xn){if(s.buildT<1){s.buildT=Math.min(1,s.buildT+n/.45);let d=s.buildT,f=1+.35*Math.sin(d*Math.PI)*(1-d*.5);s.group.scale.setScalar(Math.max(.01,d*f)*U_),s.buildT>=1&&s.group.scale.setScalar(U_)}let r=Mt[s.type],o=nc*1.6+s.idlePhase;if(s.type==="frost"){if(s.crystal){s.crystal.rotation.y+=n*.7;let d=1+Math.sin(o)*.03;s.crystal.scale.set(d,1.9*d,d)}s.shards&&(s.shards.rotation.y+=n*.9),Math.random()<n*3&&we.emit("frost",new E(s.pos.x,s.fireY,s.pos.z),{color:10476799,count:1,size:.5,life:1.2,speed:.4,up:.6})}else s.type==="tesla"?(s.rings&&(s.rings.rotation.y+=n*1.4,s.rings.rotation.x=Math.sin(nc*.9+s.idlePhase)*.2),s.orb&&(s.orb.position.y=s.fireY+Math.sin(o)*.08,s.orb.scale.setScalar(Math.max(1,s.orb.scale.x-n*2.4)),s.orb.rotation.y+=n*1.2),Math.random()<n*2.2&&we.emit("spark",new E(s.pos.x,s.fireY,s.pos.z),{color:13134847,count:2,size:.4,speed:2})):s.type==="cannon"?(s.recoil>0&&(s.recoil=Math.max(0,s.recoil-n*4),s.barrelGroup.position.z=-s.recoil*.34),s.turret&&(s.turret.rotation.z=Math.sin(nc*1.1+s.idlePhase)*.01)):s.type==="archer"&&s.flag&&(s.flag.rotation.y=Math.sin(nc*2.1+s.idlePhase)*.3);if(s.cooldown-=n,s.cooldown>0)continue;let a=r.levels[s.level-1],l=p0(s.pos,a.range,null,s.targetMode);if(!l)continue;if(s.turret){let d=l.mesh.position.x-s.pos.x,f=l.mesh.position.z-s.pos.z;s.turret.rotation.y=Math.atan2(d,f)}if(s.archers){let d=l.mesh.position.x-s.pos.x,f=l.mesh.position.z-s.pos.z;s.archers.rotation.y=Math.atan2(d,f)}if(s.crystal){let d=l.mesh.position.x-s.pos.x,f=l.mesh.position.z-s.pos.z;s.crystal.rotation.z=Math.atan2(d,f)*.05}let c=new E(s.pos.x,s.fireY,s.pos.z),h=v.rallyTimer>0?Uo.fireRate:1,u=a.fireRate/(CM(v)*h);switch(s.type){case"archer":{let d=s.specialization==="volley",f=s.specialization==="piercing"?1.35:d?.85:1,g=ma(a.damage*f),x=[l];if(d||s.level>=3){let m=new Set(x),p=d?3:2;for(;x.length<p;){let M=p0(s.pos,a.range,m,s.targetMode);if(!M)break;x.push(M),m.add(M)}}x.forEach((m,p)=>{let M=p===0?g:ma(a.damage*f*(d?1:.7));pa("arrow",c,m,{damage:M.damage,critical:M.critical,armorPierce:s.specialization==="piercing"})}),Ue("bow"),s.cooldown=u;break}case"cannon":{let d=s.specialization==="cluster",f=s.specialization==="siege"&&(l.isBoss||l.armor>0),g=d?.6:f?1.4:1,x=ma(a.damage*g),m=d?3:s.level>=4?2:1;for(let p=0;p<m;p++){let M=p===0?x:ma(a.damage*g*(d?1:.6));pa("cannon",c,l,{damage:M.damage,aoe:a.aoe,critical:M.critical})}s.recoil=1,we.emit("flash",new E(s.pos.x+Math.sin(s.turret.rotation.y)*s.barrelLen,s.fireY,s.pos.z+Math.cos(s.turret.rotation.y)*s.barrelLen),{color:16752704,count:4,size:2.4}),we.emit("smoke",c,{color:9075304,count:4,speed:1.5,up:2.5}),Rn(.1,.2),Ue("cannon"),s.cooldown=u;break}case"frost":{let d=s.specialization==="shatter"&&v.elapsed<(l.slowUntil||0),f=ma(a.damage*(d?1.6:1)),g=s.specialization==="deepfreeze";pa("frost",c,l,{damage:f.damage,critical:f.critical,slow:Math.max(.25,a.slow*(g?.75:1)),slowDur:a.slowDur*(g?1.4:1),aoe:a.aoe||0}),s.crystal&&s.crystal.scale.set(1.25,1.9*1.25,1.25),Ue("frost"),s.cooldown=u;break}case"tesla":{let d=ma(a.damage*(s.specialization==="tempest"?1.25:1));B3(s,{...a,damage:d.damage},l,d.critical),s.cooldown=u;break}}}let e=Lh(4.2);v.nearPad=e?{type:v.buildType,cost:Mt[v.buildType].cost,affordable:v.gold>=Mt[v.buildType].cost}:null;let t=null,i=1/0;for(let s of Xn){let r=Math.hypot(He.position.x-s.pos.x,He.position.z-s.pos.z);r<5&&r<i&&(i=r,t=s)}if(t){let s=Mt[t.type],r=t.level>=4,o=!r&&t.level>=f0(),a=r?0:s.upgradeCosts[t.level-1];v.nearTower={type:t.type,name:s.name,level:t.level,cost:a,maxed:r,locked:o,affordable:!r&&!o&&v.gold>=a,lockedLevel:f0()+1}}else v.nearTower=null}function W_(n){if(v.castleFireCooldown-=n,v.castleFireCooldown>0)return;let e=fi(v.castleLevel),{range:t,damage:i,fireRate:s}=e,r=null,o=t*t;for(let l of v.enemies){if(l.dead||l.dying)continue;let c=l.mesh.position.x*l.mesh.position.x+l.mesh.position.z*l.mesh.position.z;c<o&&(o=c,r=l)}if(!r)return;let a=new E(0,Ko(),0);pa("castle",a,r,{damage:i}),Ue("bow"),we.emit("flash",a,{color:16765040,count:3,size:2}),v.castleFireCooldown=s}function g0(){let n=v.heroLevel===0?{...py}:{...Pr[v.heroLevel-1]};return{...n,speed:n.speed*LM(v),damage:Math.round(n.damage*IM(v)*v.profileHeroDamage)}}function X_(n){if(v.heroFireCooldown-=n,v.heroFireCooldown>0)return;let e=g0(),t=Js(v.heroLevel),i=new E(He.position.x,t===0?1.8:t===1?2.7:3.5,He.position.z),s=p0(i,e.range);if(!s)return;let o=Math.atan2(s.mesh.position.x-He.position.x,s.mesh.position.z-He.position.z)-He.rotation.y;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;He.rotation.y+=o*.35,pa("hero",i,s,{damage:e.damage}),Ue("bow"),v.heroFireCooldown=e.fireRate}function rc(){if(!v.running||v.paused||v.draftOpen||v.abilityCooldown>0)return;let n=ms.radius,e=Math.round((ms.damage+v.heroLevel*ms.damagePerLevel)*NM(v)),t=new E(He.position.x,.3,He.position.z);v.abilityCooldown=ms.cooldown*DM(v)*v.profileAbilityCooldown,Vt(t,16769162,n,.7),Vt(t,16777215,n*.6,.45),we.emit("nova",new E(t.x,1.2,t.z),{color:[16765024,16774336,16751168]}),we.emit("flash",new E(t.x,1.5,t.z),{color:16773312,count:8,size:5}),Zi("#ffe6a0",.3,.4),Rn(.65,.5),ql(.08,.25),Ue("nova");let i=v.elapsed;for(let s of v.enemies){if(s.dead||s.dying)continue;let r=s.mesh.position.x-t.x,o=s.mesh.position.z-t.z,a=Math.hypot(r,o);if(a<=n&&(rr(s,e,{color:"#ffe08a"}),s.stunUntil=i+ms.stun,!s.dying&&a>.01)){let l=ms.pushback*(1-a/n*.5);s.mesh.position.x+=r/a*l,s.mesh.position.z+=o/a*l}}mt(0)}function oc(){if(!v.running||v.paused||v.draftOpen||v.rallyCooldown>0)return!1;v.rallyCooldown=Uo.cooldown,v.rallyTimer=Uo.duration;let n=new E(He.position.x,.25,He.position.z);Vt(n,16765802,22,.85),we.emit("magic",new E(n.x,1.4,n.z),{color:[16765802,16773296],count:30,speed:7});for(let e of Xn)we.emit("magic",new E(e.pos.x,2.4,e.pos.z),{color:16765802,count:5,speed:2.5});return Zi("#ffd36a",.16,.35),Rn(.2,.3),Ue("horn"),Kt("WAR RALLY","ALL TOWERS FIRE 35% FASTER","hero"),mt(0),!0}function ac(){if(!v.running||v.paused||v.draftOpen)return;let n=v.castleLevel;if(n>=ps.length)return;let e=ps[n];if(v.gold<e.cost){Ue("warn");return}let t=fi(n);v.gold-=e.cost,v.castleLevel++;let i=fi(v.castleLevel),s=Math.max(0,i.maxHP-t.maxHP);v.maxBaseHP=i.maxHP,v.baseHP=Math.min(v.baseHP+s,v.maxBaseHP),v.incomeRate=Math.max(1,Math.round(i.income*aM(v.difficulty))),Bl(v.castleLevel);let r=zl(v.castleLevel);if(Fl(3066993),we.emit("magic",new E(0,4,0),{color:15777856,count:26,speed:6}),Vt(new E(0,.3,0),16765024,12,.8),r>0)for(let a of yi)!a.unlocked||a.taken||a.ringIndex===1&&(Vt(new E(a.x,.2,a.z),8247392,3.4,.65),we.emit("magic",new E(a.x,1.2,a.z),{color:8247392,count:10,speed:3}));Ue("upgrade"),Ni(new E(0,Ko()+1,0),i.name.toUpperCase(),{color:"#ffd24a",size:1.2});let o=r>0?`${i.feature} \xB7 ${r} TOWER PADS UNLOCKED`:i.feature;Kt(i.name.toUpperCase(),o,"hero"),mt(0)}function F3(){let n=Math.max(0,v.maxBaseHP-v.baseHP);return n<=0?0:Math.max(5,Math.ceil(Gu*Math.min(1,n/Ho)))}function lc(){if(!v.running||v.paused||v.draftOpen||v.baseHP>=v.maxBaseHP)return;let n=F3();if(v.gold<n){Ue("warn");return}let e=Math.min(Ho,v.maxBaseHP-v.baseHP);v.gold-=n,v.baseHP+=e,Fl(3066993),we.emit("magic",new E(0,4,0),{color:6477898,count:16,speed:4}),Ue("repair"),Ni(new E(0,6,0),"+"+e,{color:"#62d84a",size:1.2}),mt(0)}function cc(){if(!v.running||v.paused||v.draftOpen)return;let n=v.heroLevel;if(n>=Pr.length)return;let e=Pr[n];if(v.gold<e.cost){Ue("warn");return}v.gold-=e.cost,v.heroLevel++,Zo(v.heroLevel),we.emit("nova",new E(He.position.x,1.4,He.position.z),{color:[10476799,16777215],count:30,speed:7}),Vt(new E(He.position.x,.3,He.position.z),10476799,6,.6),Ue("upgrade");let t=pi(v.heroLevel).toUpperCase();Kt("HERO UPGRADED",t+" \u2014 LEVEL "+v.heroLevel,"hero"),mt(0)}var _i=Object.create(null),Y_=!1,ld=new Cu,x0=new J,z3=new Zn(new E(0,1,0),0),Ss=new E,ji=new N(new dn(.32,.46,24),new ft({color:14217384,transparent:!0,opacity:.75,depthWrite:!1,side:ot}));ji.rotation.x=-Math.PI/2;ji.position.y=.09;ji.visible=!1;Ie.add(ji);function k3(n){if(!n)return!1;let e=(n.tagName||"").toLowerCase();return e==="input"||e==="textarea"||e==="select"||n.isContentEditable}function G3(n){return!!n?.closest?.('button, a, input, textarea, select, [role="dialog"]')}function V3(n){if(k3(n.target))return;let e=n.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright"," "].includes(e)&&n.preventDefault(),_i[e]=!0,!((e===" "||e==="enter")&&G3(n.target))&&!(!v.running||v.paused||v.draftOpen||v.gameOver||v.victory)&&!(n.repeat&&!["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(e)))switch(e){case"e":ga();break;case"q":xa();break;case"c":ac();break;case"r":lc();break;case"t":cc();break;case" ":rc();break;case"g":oc();break;case"f":{v.gameSpeed=v.gameSpeed===1?2:1,Ue("uiClick"),mt(0);break}case"enter":{let t=Xh(v);t&&(Kt("WAVE "+v.wave,"EARLY CALL \xB7 +"+t+" GOLD"),Ue("horn"),mt(0));break}case"x":v.selectedTower&&ad(v.selectedTower);break;case"m":{let t=Dh();Zl(t);break}case"1":lr(Rr[0]);break;case"2":lr(Rr[1]);break;case"3":lr(Rr[2]);break;case"4":lr(Rr[3]);break}}function W3(n){_i[n.key.toLowerCase()]=!1}function q_(){for(let n in _i)_i[n]=!1;v.moveTarget=null,ji.visible=!1,Bi.clear(),cd=!1,ya=0}function X3(n){let e=n.target.getBoundingClientRect();x0.x=(n.clientX-e.left)/e.width*2-1,x0.y=-((n.clientY-e.top)/e.height)*2+1,ld.setFromCamera(x0,Bt)}var Bi=new Map,ya=0,cd=!1;function Y3(n){if(n.button!==0||!v.running||v.paused||v.draftOpen)return;if(n.pointerType==="touch"&&(Bi.set(n.pointerId,{x:n.clientX,y:n.clientY}),n.target.setPointerCapture?.(n.pointerId),Bi.size>=2)){let[i,s]=[...Bi.values()];ya=Math.hypot(i.x-s.x,i.y-s.y),cd=!0,v.moveTarget=null,ji.visible=!1;return}X3(n);let e=ld.intersectObjects(Xn.map(i=>i.group),!0);if(e.length){let i=e[0].object;for(;i&&!Xn.some(r=>r.group===i);)i=i.parent;let s=Xn.find(r=>r.group===i);if(s){rd(s),Ue("uiClick");return}}let t=ld.intersectObjects(yi.filter(i=>i.unlocked&&!i.taken).map(i=>i.disc),!1);if(t.length){let i=yi.find(s=>s.disc===t[0].object);if(i&&ga(i))return}if(ld.ray.intersectPlane(z3,Ss)){let i=El(v.castleLevel)-1,s=Math.hypot(Ss.x,Ss.z),r=s>i?i/s:1;v.moveTarget={x:Ss.x*r,z:Ss.z*r},ji.position.set(Ss.x*r,.09,Ss.z*r),ji.visible=!0,we.emit("dust",new E(Ss.x*r,.15,Ss.z*r),{color:13163680,count:3,speed:1.2,size:.5,life:.35}),rd(null)}}function q3(n){if(n.pointerType!=="touch"||!Bi.has(n.pointerId)||(Bi.set(n.pointerId,{x:n.clientX,y:n.clientY}),Bi.size<2||!cd))return;let[e,t]=[...Bi.values()],i=Math.hypot(e.x-t.x,e.y-t.y);ya>0&&i>0&&(pn.targetDist=Math.max(22,Math.min(58,pn.targetDist*ya/i))),ya=i,n.preventDefault()}function K_(n){n.pointerType==="touch"&&(Bi.delete(n.pointerId),Bi.size<2&&(ya=0),Bi.size===0&&(cd=!1))}function Z_(){if(Y_)return;Y_=!0,window.addEventListener("keydown",V3),window.addEventListener("keyup",W3),window.addEventListener("blur",q_);let n=document.getElementById("renderCanvas");n.addEventListener("pointerdown",Y3),n.addEventListener("pointermove",q3,{passive:!1}),n.addEventListener("pointerup",K_),n.addEventListener("pointercancel",K_),n.style.touchAction="none",document.addEventListener("visibilitychange",()=>{document.hidden&&q_()})}function $_(n){if(!v.running||v.paused||v.draftOpen||v.gameOver||v.victory)return;let e=0,t=0;if((_i.w||_i.arrowup)&&(t-=1),(_i.s||_i.arrowdown)&&(t+=1),(_i.a||_i.arrowleft)&&(e-=1),(_i.d||_i.arrowright)&&(e+=1),e+=v.touchMove?.x||0,t+=v.touchMove?.z||0,e===0&&t===0&&v.moveTarget){if(e=v.moveTarget.x-He.position.x,t=v.moveTarget.z-He.position.z,Math.hypot(e,t)<.35){v.moveTarget=null,ji.visible=!1;return}}else if(e!==0||t!==0)v.moveTarget=null,ji.visible=!1;else return;let i=Math.hypot(e,t);if(i<1e-4)return;e/=i,t/=i;let s=g0().speed;He.position.x+=e*s*n,He.position.z+=t*s*n;let r=El(v.castleLevel),o=Math.hypot(He.position.x,He.position.z);if(o>r){let c=r/o;He.position.x*=c,He.position.z*=c}let l=Math.atan2(e,t)-He.rotation.y;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;He.rotation.y+=l*Math.min(1,n*12),v.heroMoving=!0}var v0=!1,pd=!1,iE=qh();function E0(n,e){try{let t=localStorage.getItem(n);return t===null?e:t==="true"}catch{return e}}function M0(n,e){try{localStorage.setItem(n,String(e))}catch{}}function fd(n,e,t){document.documentElement.classList.toggle(n,t),M0(e,t)}v.cameraShake=E0("ironhold_camera_shake",!0);function sE(){if(v0)return;let n=VM(iE.xp),e=document.getElementById("difficultySelect")?.value||"normal";v.difficulty=ti(e).key,v.totalWaves=Vn,v.endless=!1,v.gold=ti(v.difficulty).startGold,v.profileHeroDamage=n.heroDamage,v.profileAbilityCooldown=n.abilityCooldown,v.gold+=n.gold,v.totalGoldEarned+=n.gold,pd=!1;try{Lm(),kv()}catch(t){console.warn("Audio unavailable:",t)}Nh(0),$M(),v.running=!0,v.elapsed=0,la(v,1),v0=!0,Kt("WAVE 1","DEFEND THE LAST BASTION"),Ue("horn"),mt(0)}function S0(){pd||(WM(iE,v),pd=!0)}function K3(){S0(),location.reload()}function md(){if(v.gameOver||v.victory)return;v.running=!1,v.gameOver=!0,S0(),Ue("defeat"),Hh(.35),Rn(1,1),Zi("#ff3020",.45,1.2),ih(1);let n=Ko();for(let e=0;e<5;e++){let t=new E((Math.random()-.5)*8,2+Math.random()*n,(Math.random()-.5)*8);we.emit("impact",t,{color:[16744512,16760896],count:20,speed:10}),we.emit("smoke",t,{color:4866104,count:8,size:3})}Vt(new E(0,1,0),16728096,20,1.2),Kt("THE BASTION HAS FALLEN","THE KINGDOM IS LOST","danger"),setTimeout(e_,1900)}function rE(){if(v.endless||v.victory||v.gameOver)return;v.running=!1,v.victory=!0,S0(),Ue("victory"),Nh(0),Hh(.6),Zi("#ffe6a0",.35,1.4);let n=Ko();for(let e=0;e<6;e++){let t=new E((Math.random()-.5)*16,3+Math.random()*10,(Math.random()-.5)*16);we.emit("confetti",t,{color:[16765024,10476799,16777215,16747069],count:18})}Vt(new E(0,1,0),16769162,24,1.4),Kt("VICTORY","THE WARLORD HAS FALLEN \u2014 THE REALM IS SAFE","hero"),setTimeout(t_,2400)}function oE(){v.victory&&(v.victory=!1,v.endless=!0,v.totalWaves=1/0,v.running=!0,v.paused=!1,v.draftOpen=!1,v.pendingBoons=[],pd=!1,la(v,16),JM(),Kt("ENDLESS SIEGE","WAVE 16 \xB7 THE HORDE NEVER ENDS","boss"),Ue("horn"),mt(0))}function dc(){!v.running||v.gameOver||v.victory||v.draftOpen||(v.paused=!v.paused,jM(v.paused),Hh(v.paused?.25:1),Ue("uiClick"))}function _0(n){AM(v,n)&&(Ue("upgrade"),Kt("BLESSING CHOSEN","THE REALM REMEMBERS","hero"),mt(0))}function aE(){if(!v.running||v.paused||v.draftOpen)return;let n=Xh(v);n&&(Kt("WAVE "+v.wave,"EARLY CALL \xB7 +"+n+" GOLD"),Ue("horn"),mt(0))}function lE(){v.gameSpeed=v.gameSpeed===1?2:1,Ue("uiClick"),mt(0)}var cE=!1;function Z3(){cE=v.paused,v.running&&!v.paused&&!v.draftOpen&&dc(),Km(!0)}function uE(){Km(!1)}function $3(){cE=v.paused,v.running&&!v.paused&&!v.draftOpen&&dc(),Zm(!0)}function hE(){Zm(!1)}KM({start:sE,restart:K3,resume:dc,upgradeCastle:ac,repair:lc,upgradeHero:cc,mute:()=>{try{Lm()}catch{}let n=Dh();Zl(n)},selectTower:n=>lr(n),toggleSpeed:lE,callWave:aE,chooseBoon:_0,startEndless:oE,ability:rc,rally:oc,chooseSpecialization:(n,e)=>m0(n,e),interact:()=>{v.nearPad?ga():v.selectedTower?od(v.selectedTower):xa()},upgradeSelectedTower:()=>{v.selectedTower&&od(v.selectedTower)},upgradeNearestTower:xa,cycleTowerTarget:()=>{let n=v.selectedTower;n&&G_(n)},sellSelectedTower:()=>{v.selectedTower&&ad(v.selectedTower)},openHelp:Z3,closeHelp:uE,openSettings:$3,closeSettings:hE,getQuality:nh,setQuality:n=>{Pp(n),mt(0)},setCameraShake:n=>{v.cameraShake=n,M0("ironhold_camera_shake",n),Gm(n)},setReducedMotion:n=>{v.reducedMotion=n,M0("ironhold_reduced_motion",n),kh(n)},setDifficulty:n=>{v.difficulty=ti(n).key;try{localStorage.setItem("ironhold_difficulty",v.difficulty)}catch{}let e=document.getElementById("difficultyDescription");e&&(e.textContent=ti(v.difficulty).description)},setHighContrast:fd.bind(null,"high-contrast","ironhold_high_contrast"),setTextSize:fd.bind(null,"large-text","ironhold_large_text"),setColorblind:fd.bind(null,"colorblind-safe","ironhold_colorblind")});var J3=[["high-contrast","ironhold_high_contrast","highContrastToggle"],["large-text","ironhold_large_text","textSizeToggle"],["colorblind-safe","ironhold_colorblind","colorblindToggle"]];for(let[n,e,t]of J3){let i=E0(e,!1);fd(n,e,i);let s=document.getElementById(t);s&&(s.checked=i)}try{let n=localStorage.getItem("ironhold_difficulty");n&&ti(n).key===n&&(v.difficulty=n)}catch{}var J_=document.getElementById("difficultySelect");J_&&(J_.value=v.difficulty);var j_=document.getElementById("difficultyDescription");j_&&(j_.textContent=ti(v.difficulty).description);Gm(v.cameraShake);var dE=window.matchMedia?.("(prefers-reduced-motion: reduce)");v.reducedMotion=E0("ironhold_reduced_motion",!1)||!!dE?.matches;kh(v.reducedMotion);var Q_=document.getElementById("motionToggle");Q_&&(Q_.checked=v.reducedMotion);var eE=document.getElementById("shakeToggle");eE&&(eE.checked=v.cameraShake);dE?.addEventListener?.("change",n=>{v.reducedMotion=n.matches,kh(n.matches);let e=document.getElementById("motionToggle");e&&(e.checked=n.matches)});Z_();window.matchMedia?.("(pointer: coarse)").matches&&(pn.targetDist=48,pn.dist=48);ZM();window.addEventListener("keydown",n=>{(n.key==="Escape"||n.key.toLowerCase()==="p")&&(document.getElementById("settingsScreen")?.classList.contains("show")?(n.preventDefault(),hE()):document.getElementById("helpScreen")?.classList.contains("show")?(n.preventDefault(),uE()):v0&&(n.preventDefault(),dc()))});window.addEventListener("wheel",n=>{pn.targetDist=Math.max(22,Math.min(58,pn.targetDist+Math.sign(n.deltaY)*3.5))},{passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&v.running&&!v.paused&&!v.draftOpen&&dc()});Zl(Bv());mt();var y0=document.getElementById("loadingScreen");y0&&(setTimeout(()=>y0.classList.add("done"),450),setTimeout(()=>y0.remove(),1600));var tE=performance.now(),hc=0,Ei=new E(0,2,0),ud=new E,hd=new E,j3=new E,nE={x:0,y:0,z:0};function fE(n){if(!(!v.running||v.paused||v.draftOpen||v.gameOver||v.victory)){if(v.elapsed+=n,v.timeInWave+=n,$_(n),v.incomeTimer+=n,v.incomeTimer>=al&&(v.incomeTimer=0,v.incomeRate>0&&(v.gold+=v.incomeRate,v.totalGoldEarned+=v.incomeRate,we.emit("gold",new E(0,5,0),{color:16765514,count:5}),Ue("coin"))),v.waveActive&&(v.timeInWave+=n),v.intermission&&BM(v,n)){let e=["THE HORDE STIRS","THEY GROW BOLDER","HOLD THE LINE","STEEL YOUR NERVES","THE SIEGE DEEPENS"];Kt("WAVE "+v.wave,e[(v.wave-1)%e.length]),Ue("horn")}if(T_(n),nM(n,v.elapsed),o0(n,md),V_(n),W_(n),X_(n),H_(n),v.abilityCooldown>0&&(v.abilityCooldown=Math.max(0,v.abilityCooldown-n)),v.rallyCooldown>0&&(v.rallyCooldown=Math.max(0,v.rallyCooldown-n)),v.rallyTimer>0&&(v.rallyTimer=Math.max(0,v.rallyTimer-n)),v.comboTimer>0&&(v.comboTimer-=n,v.comboTimer<=0&&(v.combo=0)),Nh(v.activeBoss||v.wave>=12?2:v.wave>=5?1:0),UM(v,v.enemies.length,ta(),_s())){let e=OM(v);e&&(v.wave<v.totalWaves?Vh(v,20+v.wave*5):(v.draftOpen=!1,v.pendingBoons=[]),Kt("WAVE "+e.wave+" CLEARED",`+${e.gold} GOLD${e.noLeak?" \xB7 FLAWLESS DEFENSE":""}`,"hero"),Ue("victory"))}!v.endless&&v.wave>=v.totalWaves&&v.warlordKilled&&v.enemies.length===0&&ta()===0&&rE(),v.baseHP<=0&&md()}}function Q3(n){if(v.running||v.paused){hd.set(He.position.x,1.6,He.position.z),Ei.lerp(hd,1-Math.exp(-7*n)),pn.dist+=(pn.targetDist-pn.dist)*(1-Math.exp(-6*n));let e=Cy(j3),t=v.cameraShake&&!v.reducedMotion?Vm(n):nE,i=v.reducedMotion?0:1,s=Math.sin(hc*.35)*.35*i,r=Math.cos(hc*.28)*.35*i;ud.set(Ei.x+e.x+s,Ei.y+e.y,Ei.z+e.z+r),Bt.position.lerp(ud,1-Math.exp(-8*n)),Bt.position.x+=t.x,Bt.position.y+=t.y,Bt.position.z+=t.z,Bt.lookAt(Ei.x+t.x*.4,Ei.y+.6+t.y*.4,Ei.z+t.z*.4)}else{let e=hc*.07+.6;hd.set(0,6.5,0),Ei.lerp(hd,1-Math.exp(-2*n));let t=76;ud.set(Math.sin(e)*t*.72,Ei.y+13,Math.cos(e)*t*.72),Bt.position.lerp(ud,1-Math.exp(-1.6*n));let i=v.cameraShake&&!v.reducedMotion?Vm(n):nE;Bt.position.x+=i.x,Bt.position.y+=i.y*.5,Bt.position.z+=i.z,Bt.lookAt(Ei.x,Ei.y+2.5,Ei.z)}}var dd=0;function uc(n){hc+=n;let e=n*mM()*v.gameSpeed,t=e;for(;t>1e-5;){let i=Math.min(t,.03333333333333333);fE(i),t-=i}Iv(e||n,hc),we.update(e||n),SM(n),Py(n),Q3(n),Ry(document.hidden?0:n),Xi.render(),dd+=n,dd>=.1&&(mt(dd),dd=0)}function pE(){requestAnimationFrame(pE);let n=performance.now(),e=Math.min((n-tE)/1e3,.25);tE=n,!document.hidden&&uc(e)}pE();window.__ironhold={GameState:v,spawnEnemy:S_,spawnMiniBoss:i0,spawnRoundBoss:s0,spawnWarlord:r0,spawnBoatGroup:sr,applyDamage:rr,updateEnemies:()=>o0(1/60,md),setBuildType:lr,attemptBuild:ga,upgradeNearestTower:xa,useHeroAbility:rc,useRallyAbility:oc,chooseTowerSpecialization:m0,upgradeCastle:ac,repairBase:lc,upgradeHero:cc,towers:Xn,boats:{get count(){return ta()},get pending(){return _s()},clear:eM,spawn:sr},world:{get islandScale(){return Cv()},get islandRadius(){return Pv()},pads:yi,buildZones:Im,refreshBuildPads:zl},progression:{islandScaleForLevel:Nr,islandRadiusForLevel:_l,buildZonesForLevel:oh,castleStatsForLevel:fi,heroStageForLevel:Js,heroStageName:pi,spawnIntervalForWave:lh,spawnCountForWave:Sl,worldBoundsForLevel:El,boatSpawnRadiusForLevel:ah,boatLandingRadiusForLevel:ko},setCastleLevel(n){let e=fi(n);v.castleLevel=e.level,v.maxBaseHP=e.maxHP,v.baseHP=e.maxHP,v.incomeRate=e.income,Bl(e.level);let t=zl(e.level);return mt(0),{...e,unlockedPads:t}},setHeroLevel(n){return v.heroLevel=Math.max(0,Math.min(6,Math.floor(n||0))),Zo(v.heroLevel),mt(0),{level:v.heroLevel,stage:Js(v.heroLevel),name:pi(v.heroLevel)}},setGold(n){return v.gold=Math.max(0,Math.floor(n||0)),mt(0),v.gold},setWave(n){return la(v,n),mt(0),v.wave},callWave:aE,toggleSpeed:lE,chooseBoon:_0,startEndless:oE,setQuality:Pp,getQuality:nh,qualityInfo:Fo,startGame:sE,triggerVictory:rE,triggerGameOver:md,tick:uc,advance:n=>{let e=Math.max(1,Math.round(n*60));for(let t=0;t<e;t++)uc(1/60);return{elapsed:v.elapsed,wave:v.wave,enemies:v.enemies.length,boats:ta(),pending:_s()}},advanceSim:n=>window.__ironhold.advance(n),simulateFor:(n,e=!1)=>{let t=Math.max(0,Math.round(n*60));for(let i=0;i<t&&(fE(1/60),e&&v.draftOpen&&_0(v.pendingBoons[0]),!(v.gameOver||v.victory));i++);return mt(0),{elapsed:v.elapsed,wave:v.wave,intermission:v.intermission,enemies:v.enemies.length,boats:ta(),hp:v.baseHP,gold:v.gold,commander:v.commanderLevel,gameOver:v.gameOver,victory:v.victory}},snapshot:(n=900,e=.7)=>{uc(1/60);let t=document.getElementById("renderCanvas"),i=Math.min(1,n/t.width),s=document.createElement("canvas");return s.width=Math.round(t.width*i),s.height=Math.round(t.height*i),s.getContext("2d").drawImage(t,0,0,s.width,s.height),s.toDataURL("image/jpeg",e)},probe:()=>{let n=xt.info.autoReset;xt.info.autoReset=!1,xt.info.reset(),uc(1/60);let e={...xt.info.render};xt.info.autoReset=n;let t=document.getElementById("renderCanvas"),i=document.createElement("canvas");i.width=64,i.height=44;let s=i.getContext("2d");s.drawImage(t,0,0,64,44);let r=s.getImageData(0,0,64,44).data,o=0,a=0;for(let c=0;c<r.length;c+=4){let h=(r[c]+r[c+1]+r[c+2])/3;o+=h,h>a&&(a=h)}let l=[r[1440*4],r[1440*4+1],r[1440*4+2]];return{avg:+(o/2816).toFixed(2),max:+a.toFixed(1),center:l,cam:Bt.position.toArray().map(c=>+c.toFixed(2)),camNaN:Bt.position.toArray().some(Number.isNaN),hero:He.position.toArray().map(c=>+c.toFixed(2)),drawCalls:e.calls,triangles:e.triangles,points:e.points,geometries:xt.info.memory.geometries,textures:xt.info.memory.textures,programs:xt.info.programs.length,quality:nh()}},camera:Bt,renderer:xt,scene:Ie,camState:pn,get hero(){return He}};
