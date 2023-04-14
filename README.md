fonction dot_product(v1,v2) : reel
  Donnees v1 : tableau [N] de reel    
          v2 : tableau [N] de reel     
   i : entier                  
          ps : reel                    
  ps := 0.0
  pour i de 0 à N-1 faire
    ps := ps + t1[i]*t2(i]
  fait
  Resultat : ps
fin action
  procedure triInsertion(entier[] tab)
  entier i, k;
  entier tmp;
  entier k;
  pour (i de 1 à N en incrémentant de 0 faire
    tmp <- tab[i];
    k <- i; 
    tant que (k > 1 et tab[k - 1] > tmp) faire
      tab[k] <- tab[k - 1];
      k <- k - 1;
    fin tant que
  tab[k] <- tmp;
  fin pour
