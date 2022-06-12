

class Method
{
    constructor(name, args, returnRes)
    {
        this.name = name;
        this.args = args;
        this.returnRes = returnRes;
        this.makeMethod();
    }

    execute()
    {
        let str = '';
        for(let i = 0; i < this.args.length; i++)
        {
            str += this.args[i] + ", ";
        }
        str = str.slice(0, str.length-2);
        return `Метод ${this.name} з аргументами ${str} спрацював і повернув результат: ${this.returnRes}`;
    }
    
    makeMethod()
    {
        let str = '';
        for(let i = 0; i < this.args.length; i++)
        {
            str += this.args[i] + ", ";
        }
        str = str.slice(0, str.length-2);
        return `Метод ${this.name} з аргументами ${str} був створений, очікуваний результат виконання методу: ${this.returnRes}`;
    }
    
    toString()
    {
        return `Method(${this.name})`;
    }
}

class Class
{
    constructor(name, vars, methods)
    {
        this.name = name;
        this.vars = vars;
        this.methods = methods;
        this.makeClass();
    }

    makeClass()
    {
        let str1 = '';
        for(let i = 0; i < this.vars.length; i++)
        {
            str1 += this.vars[i] + ", ";
        }
        str1 = str1.slice(0, str1.length-2);

        let str2 = '';
        for(let j = 0; j < this.methods.length; j++)
        {
            str2 += this.methods[j].name + ", ";
        }
        str2 = str2.slice(0, str2.length-2);

        return `Клас ${this.name} із змінними ${str1} і методами ${str2} був задіяний`;
    }
    
    toString()
    {
        return `Class(${this.name})`;
    }
}

class Component
{
    constructor(name, classes, methods)
    {
        this.name = name;
        this.classes = classes;
        this.methods = methods;
        this.makeComponent();
    }

    makeComponent()
    {
        let str1 = '';
        for(let i = 0; i < this.classes.length; i++)
        {
            str1 += this.classes[i].name + ", ";
        }
        str1 = str1.slice(0, str1.length-2);

        let str2 = '';
        for(let j = 0; j < this.methods.length; j++)
        {
            str2 += this.methods[j].name + ", ";
        }
        str2 = str2.slice(0, str2.length-2);

        return `Компонент ${this.name}, який використовує класи ${str1} і методи ${str2} був створений`;
    }

    toString()
    {
        return `Component(${this.name})`;
    }
}

class Project
{
    constructor(name, components)
    {
        this.name = name;
        this.components = components;
        this.makeProject();
    }
    
    makeProject()
    {
        let str = '';
        for(let i = 0; i < this.components.length; i++)
        {
            str += this.components[i].name + ", ";
        }
        str = str.slice(0, str.length-2);
        
        return `Проект ${this.name}, який складається з компонентів ${str} був створений`;
    }

    toString()
    {
        return `Project(${this.name})`;
    }
}

class Organizstion
{
    constructor(name, projects)
    {
        this.name = name;
        this.projects = projects;
        this.makeOrg();
    }
    
    makeOrg()
    {
        let str = '';
        for(let i = 0; i < this.projects.length; i++)
        {
            str += this.projects[i].name + ", ";
        }
        str = str.slice(0, str.length-2);
        return `Організація ${this.name}, в якій є проекти ${str} була створена`;
    }

    toString()
    {
        return `Organization(${this.name})`;
    }
}

let xyz = ["x", "y", "z"];
let abcd = ["a", "b", "c", "d"];
let xy = ["x","y"];
const calcTriSquare = new Method("calcTriSquare", xyz, "Square of Triangle");
const calcTriPer = new Method("calcTriPerimetr", xyz, "Perimetr of Triangle");
const calcQuadSquare = new Method("calcQuadSquare", xyz, "Square of Quadliteral");
const calcQuadPer = new Method("calcQuadPerimetr", xyz, "Perimetr of Quadliteral");
const calcRectSquare = new Method("calcRectSquare", xyz, "Square of Rectangular");
const calcRectPer = new Method("calcRectPerimetr", xyz, "Perimetr of Rectangular");
const calcDist = new Method("calcDist", xy, "Distance");
const makeTri = new Method("makeTri", xyz, "Triangle");
const makeQuad = new Method("makeQuad", xyz, "Quadliteral");
const makeRect = new Method("makeRect", xyz, "Rectangular");
let tri_methods = [calcDist, calcTriPer, calcTriSquare];
let quad_methods = [calcDist, calcQuadPer, calcQuadSquare];
let rect_methods = [calcDist, calcRectPer,calcRectSquare];
let comp_methods = [makeTri, makeQuad, makeRect];
let q_r_methods = [makeQuad, makeRect];
const Trian = new Class("Triangle", xyz, tri_methods);
const Quad = new Class("Quadliteral", abcd, quad_methods);
const Rect = new Class("Rectangular", abcd, rect_methods);
let fig_classes = [Trian, Quad, Rect];
let q_r_classes = [Quad, Rect];

const Figures = new Component("Figures", fig_classes, comp_methods);
const Quads_Rects = new Component("Quads_Rects", q_r_classes, q_r_methods);
let geom_components = [Figures, Quads_Rects];

const Geometry = new Project("Geometry", geom_components);
let math_projects = [Geometry];
const MathOrg = new Organizstion("MathOrg", math_projects);
