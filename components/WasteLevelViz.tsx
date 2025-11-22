import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface WasteLevelVizProps {
  level: number; // 0 to 100
  color: string;
}

const WasteLevelViz: React.FC<WasteLevelVizProps> = ({ level, color }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous

    const width = 100;
    const height = 150;
    const margin = { top: 10, right: 10, bottom: 10, left: 10 };

    // Draw Bucket Outline
    svg.append("path")
      .attr("d", `M ${margin.left} ${margin.top} L ${width - margin.right} ${margin.top} L ${width - margin.right - 10} ${height - margin.bottom} L ${margin.left + 10} ${height - margin.bottom} Z`)
      .attr("fill", "none")
      .attr("stroke", "#64748b")
      .attr("stroke-width", 3);

    // Calculate liquid height
    const liquidHeight = (height - margin.top - margin.bottom) * (level / 100);
    const liquidY = height - margin.bottom - liquidHeight;

    // Create clip path for the liquid to stay inside bucket shape
    svg.append("defs").append("clipPath")
      .attr("id", "bucket-clip")
      .append("path")
      .attr("d", `M ${margin.left + 2} ${margin.top + 2} L ${width - margin.right - 2} ${margin.top + 2} L ${width - margin.right - 12} ${height - margin.bottom - 2} L ${margin.left + 12} ${height - margin.bottom - 2} Z`);

    // Draw Liquid
    svg.append("rect")
      .attr("x", 0)
      .attr("y", liquidY)
      .attr("width", width)
      .attr("height", liquidHeight)
      .attr("fill", color)
      .attr("clip-path", "url(#bucket-clip)")
      .attr("opacity", 0.8);

    // Add text label
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", height / 2)
      .attr("text-anchor", "middle")
      .attr("fill", level > 50 ? "white" : "#334155")
      .attr("font-size", "14px")
      .attr("font-weight", "bold")
      .text(`${Math.round(level)}%`);

  }, [level, color]);

  return (
    <svg ref={svgRef} width={100} height={150} className="mx-auto drop-shadow-lg" />
  );
};

export default WasteLevelViz;
