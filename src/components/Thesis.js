import React from "react";
import ARROW from '../images/arrow.png'

export default class Home extends React.Component {

	constructor(props) {
		super(props)

	}

  render() {
    return (
      <div className="thesis-container">
        <div className="thesis-title"> Algorithm in Biology </div>
        <div className="thesis-text-1">
          My master thesis, titled "<b>Algorithm for Perfect Phylogeny and Gene Reconciliation</b>" was supervised by Lars Arvestad and done in the field of Bioinformatics.
          The concepts of Phylogeny and Reconciliation are closely related 
          but there was no established algorithm that does both things combined.
          We looked at ways that we could incorporate the reconciliation in the construction of the phylogeny.
          To do this, we had to account for the dissimilarities between the methods so that they could be merged fluently. 
        </div>
        <div className="thesis-box-container">
          <div className="thesis-box">
            <div className="thesis-box-title"> Perfect Phylogeny </div>
            To study the evolutionary history of a set of genes, we can model them mathematically using Perfect Phylogenies.
            These are gene-trees in which each gene property is evolved only once.
          </div>
          <div className="thesis-box">
          <div className="thesis-box-title"> Gene Reconciliation </div>
            Once we have a gene-tree, we can reconcile it by comparing it with a known species-tree to extract more information.
            The goal is to know if the genes branch due to duplication or speciation events.
          </div>
        </div>
        <div className="thesis-box">
        <div className="thesis-box-title"> Combined </div>
            By modifying the trees in the recursive phylogeny algorithm, we can get the
            outputs on the desired form such that they can be reconciled. The trees are modified
            depending on which kind of inconsistency they have resulting in a fluent procedure. 
          <img src={ARROW} className="thesis-arrow thesis-arrow-1"/>
          <img src={ARROW} className="thesis-arrow thesis-arrow-2"/>
        </div>
      </div>
    )
  }
}