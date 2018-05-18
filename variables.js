const PI = 3.141593

for (let i = 0; i < a.length; i++) { 
    let x = a[i] // x remains within braces {}
    // … 
}

{   // Scope 1 "foo" 
    function foo () { 
        return 1 
    } 
    foo() === 1 
    {
        // Scope 2 "foo"
        function foo () { 
            return 2 
        }
        foo() === 2 
    } 
    foo() === 1 
}